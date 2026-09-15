// The match, host side. Headless: entities are plain objects, movement uses the collision
// world and the nav grid, and everything the clients need arrives as snapshots + events.
// Port of HideAndSeekFlow + KillerController/KillerSearchDirector/KillerSenses + SurvivorAI.
import { dist2d, dist3d, clamp, lerpAngle, yawTo, forward, rand, pick, shuffle, roomContains, wrapAngle, SPRITES, BOT_NAMES, SURVIVOR_SEATS } from './util.js';

export const HIDE_SECONDS = 30;
export const HUNT_SECONDS = 300;
export const BRIEFING_SECONDS = 5;
export const RESCUE_DRIVE_SECONDS = 11;
export const RESCUE_GRACE = 25;

const K = {                    // killer
  moveSpeed: 2.65, chaseSpeed: 3.9, senseRadius: 22, eyeHeight: 1.7, searchSeconds: 4, hidingSpotCheckRadius: 6,
  checkPause: 1.2, checkOpen: 3, noiseSpotRadius: 4.5, checkReach: 2.2, attackRange: 1.4, damage: 20, attackInterval: 1,
  hearingRadius: 13, attackWindup: 0.3,
  checkChance: 0.7, scanSeconds: [1.2, 2.4], revisitAfter: 60, floorPenalty: 4, stuckSeconds: 6,
};
const SV = {                   // survivor bots
  walk: 2.15, run: 3.65, detect: 14, tooClose: 5, gone: 14, safeSeconds: 4, nerveRange: 9, nerveChance: 0.12,
};
const BODY_R = 0.35, BODY_H = 1.7;

export class Sim {
  constructor(plan, world, nav, send) {
    this.plan = plan; this.world = world; this.nav = nav; this.send = send;
    this.phase = 'lobby';
    this.players = new Map(); // peerId -> { id, name, role, entity }
    this.entities = [];
    this.spots = plan.spots.map(s => ({ ...s, open: false, occupant: -1, openUntil: 0, reserved: -1 }));
    this.rooms = plan.rooms.map(r => ({ ...r, lastVisited: -1000, spots: [] }));
    this.assignSpotsToRooms();
    this.time = 0;
    this.events = [];
    this.spotDirty = new Set();
    this.acc = 0;
    this.snapTimer = 0;
    this.cruiser = { pos: [...plan.points.cruiserStart], yaw: 0, t: 0, siren: false };
    this.gate = 0;
    this.gateBlockerId = world.addBox(plan.points.gateBlocker.c, plan.points.gateBlocker.s, 'gate');
    this.matchNo = 0;
  }

  assignSpotsToRooms() {
    for (const s of this.spots) {
      let best = null, bd = Infinity;
      for (const r of this.rooms) {
        if (roomContains(r, s.hidden)) { best = r; break; }
        const cx = clamp(s.hidden[0], r.min[0], r.max[0]), cy = clamp(s.hidden[1], r.min[1], r.max[1]), cz = clamp(s.hidden[2], r.min[2], r.max[2]);
        const d = dist3d([cx, cy, cz], s.hidden) + Math.abs(r.floorY - s.hidden[1]) * 3;
        if (d < bd) { bd = d; best = r; }
      }
      if (best) { best.spots.push(s); s.roomRef = best; }
    }
  }
  roomAt(p) {
    for (const r of this.rooms) if (roomContains(r, p)) return r;
    let best = null, bd = Infinity;
    for (const r of this.rooms) {
      const cx = clamp(p[0], r.min[0], r.max[0]), cy = clamp(p[1], r.min[1], r.max[1]), cz = clamp(p[2], r.min[2], r.max[2]);
      const d = dist3d([cx, cy, cz], p);
      if (d < bd) { bd = d; best = r; }
    }
    return best;
  }

  // ------------------------------------------------------------------ lobby
  addPlayer(peerId, name) {
    if (!this.players.has(peerId)) this.players.set(peerId, { id: peerId, name: name || 'Player', role: 'survivor', entity: null });
    else this.players.get(peerId).name = name || 'Player';
    this.broadcastLobby();
  }
  removePlayer(peerId) {
    const p = this.players.get(peerId);
    if (!p) return;
    this.players.delete(peerId);
    if (p.entity && this.phase !== 'lobby') {
      // a human leaving mid-match: their body becomes a bot
      p.entity.bot = true; p.entity.owner = null; p.entity.name += ' (bot)';
      p.entity.brain = p.entity.kind === 'killer' ? new KillerBrain(this, p.entity) : new SurvivorBrain(this, p.entity);
      if (p.entity.kind === 'killer' && this.phase === 'hunt') p.entity.brain.armed = true;
      this.event({ t: 'banner', text: p.name + ' left - a bot takes over' });
    }
    this.broadcastLobby();
  }
  setRole(peerId, role) {
    const p = this.players.get(peerId);
    if (!p || this.phase !== 'lobby') return;
    if (role === 'killer') for (const o of this.players.values()) if (o.role === 'killer') o.role = 'survivor';
    p.role = role;
    this.broadcastLobby();
  }
  lobbyState() {
    return { t: 'lobby', players: [...this.players.values()].map(p => ({ id: p.id, name: p.name, role: p.role })), phase: this.phase };
  }
  broadcastLobby() { this.send('all', this.lobbyState()); }

  // ------------------------------------------------------------------ match setup
  startMatch() {
    if (this.phase !== 'lobby') return;
    this.matchNo++;
    this.entities = [];
    for (const s of this.spots) { s.open = false; s.occupant = -1; s.openUntil = 0; s.reserved = -1; }
    for (const r of this.rooms) r.lastVisited = -1000;
    this.spotDirty = new Set(this.spots.map(s => s.id));
    this.gate = 0;
    if (this.gateBlockerId === null) this.gateBlockerId = this.world.addBox(this.plan.points.gateBlocker.c, this.plan.points.gateBlocker.s, 'gate');
    this.cruiser = { pos: [...this.plan.points.cruiserStart], yaw: Math.PI / 2, t: 0, siren: false };
    const P = this.plan.points;
    const humans = [...this.players.values()];
    const killerHuman = humans.find(p => p.role === 'killer') || null;
    const survivorsHuman = humans.filter(p => p !== killerHuman);
    let nextId = 0;
    const make = (kind, name, bot, owner, sprite, pos) => {
      const e = {
        id: nextId++, kind, name, bot, owner, sprite, pos: [...pos], vel: [0, 0, 0], yaw: 0, pitch: 0, hp: 100, dead: false,
        hidden: -1, escaped: false, hostDriven: bot, spd: 0, tpSeq: 0, frozen: false, state: '', lastHit: 0, deathTime: 0, brain: null,
      };
      this.entities.push(e);
      return e;
    };
    // killer
    const killer = make('killer', killerHuman ? killerHuman.name : 'The Killer', !killerHuman, killerHuman ? killerHuman.id : null, SPRITES.killer, P.killerWait);
    killer.yaw = yawTo(P.killerWait, P.exit);
    killer.frozen = true;
    if (killerHuman) killerHuman.entity = killer;
    if (killer.bot) killer.brain = new KillerBrain(this, killer);
    // survivors: humans, then bots up to four
    let seat = 0;
    for (const p of survivorsHuman) {
      const e = make('survivor', p.name, false, p.id, SPRITES.kevin, P.huddle[seat % P.huddle.length]);
      e.yaw = yawTo(e.pos, P.huddle[(seat + 2) % P.huddle.length]);
      p.entity = e; seat++;
    }
    let botIx = 0;
    while (this.entities.filter(e => e.kind === 'survivor').length < SURVIVOR_SEATS) {
      const e = make('survivor', BOT_NAMES[botIx % 3] + (botIx >= 3 ? ' ' + (botIx + 1) : ''), true, null, SPRITES.bots[botIx % 3], P.huddle[seat % P.huddle.length]);
      e.yaw = yawTo(e.pos, P.huddle[(seat + 2) % P.huddle.length]);
      e.brain = new SurvivorBrain(this, e);
      botIx++; seat++;
    }
    this.killer = killer;
    this.setPhase('briefing', BRIEFING_SECONDS);
    this.send('all', { t: 'start', match: this.matchNo, entities: this.entities.map(e => this.fullEntity(e)), phase: this.phase, timeLeft: this.timeLeft, players: this.lobbyState().players });
  }
  fullEntity(e) {
    return { id: e.id, kind: e.kind, name: e.name, bot: e.bot, owner: e.owner, sprite: e.sprite, pos: e.pos, yaw: e.yaw, hp: e.hp, dead: e.dead, hidden: e.hidden, escaped: e.escaped, hostDriven: e.hostDriven, frozen: e.frozen };
  }
  resetToLobby() {
    this.phase = 'lobby';
    for (const p of this.players.values()) p.entity = null;
    this.entities = [];
    this.send('all', { t: 'reset' });
    this.broadcastLobby();
  }

  setPhase(phase, seconds) {
    this.phase = phase;
    this.phaseEnds = this.time + (seconds || 0);
    this.event({ t: 'phase', phase, timeLeft: seconds || 0 });
  }
  get timeLeft() { return Math.max(0, this.phaseEnds - this.time); }
  event(ev) { this.events.push(ev); }
  survivors() { return this.entities.filter(e => e.kind === 'survivor'); }
  inPlay(e) { return e && !e.dead && !e.escaped; }

  // ------------------------------------------------------------------ messages from clients
  onClient(peerId, msg) {
    const p = this.players.get(peerId);
    switch (msg.t) {
      case 'join': this.addPlayer(peerId, msg.name); if (this.phase !== 'lobby') this.send(peerId, { t: 'lobby', players: this.lobbyState().players, phase: this.phase, spectateOnly: true }); break;
      case 'role': this.setRole(peerId, msg.role); break;
      case 'pose': {
        const e = p && p.entity;
        if (!e || e.hostDriven || e.dead || e.hidden >= 0 || e.frozen) break;
        e.pos[0] = msg.p[0]; e.pos[1] = msg.p[1]; e.pos[2] = msg.p[2];
        e.yaw = msg.yaw; e.pitch = msg.pitch || 0; e.spd = msg.spd || 0;
        break;
      }
      case 'act': this.onAct(p, msg); break;
      case 'start': if (peerId === 'host') this.startMatch(); break;
      case 'again': if (peerId === 'host') this.resetToLobby(); break;
      case 'skip': if (this.phase === 'briefing') this.phaseEnds = this.time; break;
    }
  }
  onAct(p, msg) {
    const e = p && p.entity;
    if (!e || e.dead) return;
    switch (msg.a) {
      case 'hide': {
        if (e.kind !== 'survivor' || e.hidden >= 0 || e.escaped || e.hostDriven) return;
        const s = this.spots[msg.spot];
        if (!s || s.occupant >= 0 || s.open || dist3d(e.pos, s.entry) > 3.2) return;
        this.enterSpot(e, s);
        break;
      }
      case 'unhide': if (e.hidden >= 0) this.leaveSpot(e, false); break;
      case 'check': {
        if (e.kind !== 'killer' || e.frozen) return;
        const s = this.spots[msg.spot];
        if (!s || dist3d(e.pos, s.entry) > K.checkReach + 1.2) return;
        this.checkSpot(e, s);
        break;
      }
      case 'attack': if (e.kind === 'killer' && !e.frozen) this.killerAttack(e); break;
      case 'gasp': if (e.kind === 'survivor' && e.hidden >= 0) this.noise(e.pos, 1, 'a gasp', e); break;
      case 'noise': {
        // microphone clue: one per 2 s per player, loudness clamped to what MicrophoneNoise emits
        if (e.kind !== 'survivor' || e.escaped || this.phase !== 'hunt') return;
        if (this.time < (e.nextMicClue || 0)) return;
        e.nextMicClue = this.time + 2;
        this.noise(e.pos, clamp(+msg.loudness || 0.7, 0.5, 1.4), 'breathing', e);
        break;
      }
    }
  }

  // ------------------------------------------------------------------ hiding
  enterSpot(e, s) {
    e.hidden = s.id; s.occupant = e.id; s.reserved = -1;
    e.pos = [...s.hidden]; e.vel = [0, 0, 0]; e.spd = 0; e.tpSeq++;
    e.yaw = Math.atan2(s.dir[0], -s.dir[2]);
    this.spotDirty.add(s.id);
    this.event({ t: 'hide', id: e.id, spot: s.id });
  }
  leaveSpot(e, forced) {
    const s = this.spots[e.hidden];
    if (!s) { e.hidden = -1; return; }
    e.hidden = -1; if (s.occupant === e.id) s.occupant = -1;
    e.pos = [...s.entry]; e.vel = [0, 0, 0]; e.tpSeq++;
    e.yaw = Math.atan2(s.dir[0], -s.dir[2]);
    this.spotDirty.add(s.id);
    this.event({ t: 'unhide', id: e.id, spot: s.id, forced });
    if (e.brain && e.brain.onForcedOut && forced) e.brain.onForcedOut();
  }
  /** Throw a spot open: returns the occupant (found) or null. */
  checkSpot(killer, s) {
    s.open = true; s.openUntil = this.time + K.checkOpen;
    this.spotDirty.add(s.id);
    const occ = s.occupant >= 0 ? this.entities[s.occupant] : null;
    let found = null;
    if (occ && this.inPlay(occ)) {
      found = occ;
      this.leaveSpot(occ, true);
      this.damage(occ, K.damage, killer);
      this.event({ t: 'found', id: occ.id, spot: s.id, by: killer.id });
    }
    this.event({ t: 'check', spot: s.id, found: !!found, by: killer.id, room: s.room });
    if (killer.brain) killer.brain.onSpotChecked(s, found);
    return found;
  }
  killerAttack(k) {
    if (this.time < (k.nextAttack || 0)) return false;
    k.nextAttack = this.time + K.attackInterval;
    let best = null, bd = K.attackRange;
    const f = forward(k.yaw);
    for (const s of this.survivors()) {
      if (!this.inPlay(s) || s.hidden >= 0) continue;
      const dx = s.pos[0] - k.pos[0], dz = s.pos[2] - k.pos[2], d = Math.hypot(dx, dz);
      if (d > bd || Math.abs(s.pos[1] - k.pos[1]) > 1.5) continue;
      if (d > 0.3 && (dx / d) * f[0] + (dz / d) * f[2] < 0.2) continue;
      best = s; bd = d;
    }
    this.event({ t: 'swing', id: k.id, hit: !!best });
    if (best) this.damage(best, K.damage, k);
    return !!best;
  }
  damage(e, amount, by) {
    if (e.dead) return;
    e.hp = Math.max(0, e.hp - amount);
    e.lastHit = this.time;
    this.event({ t: 'hit', id: e.id, hp: e.hp, at: [...e.pos] });
    if (e.brain && e.brain.onDamaged) e.brain.onDamaged(by);
    if (e.hp <= 0) {
      e.dead = true; e.deathTime = this.time; e.spd = 0;
      if (e.hidden >= 0) this.leaveSpot(e, true);
      this.event({ t: 'died', id: e.id, name: e.name, at: [...e.pos] });
      if (this.killer && this.killer.brain) this.killer.brain.onKilled(e);
    }
  }
  noise(at, loudness, label, who) {
    this.event({ t: 'noise', at: [...at], loudness, label, id: who ? who.id : -1, room: (this.roomAt(at) || {}).name });
    if (this.killer && this.killer.brain && this.phase === 'hunt') this.killer.brain.onNoise(at, loudness, label);
  }

  // ------------------------------------------------------------------ tick
  update(dt) {
    if (this.phase === 'lobby') return;
    this.acc += Math.min(dt, 0.25);
    const step = 1 / 30;
    while (this.acc >= step) { this.acc -= step; this.step(step); }
    this.snapTimer += dt;
    if (this.snapTimer >= 0.05) { this.snapTimer = 0; this.sendSnapshot(); }
  }
  step(dt) {
    this.time += dt;
    const P = this.plan.points;
    switch (this.phase) {
      case 'briefing':
        if (this.time >= this.phaseEnds) {
          this.setPhase('hiding', HIDE_SECONDS);
          for (const e of this.entities) if (e.brain && e.brain.onHidingStarted) e.brain.onHidingStarted();
          this.event({ t: 'banner', text: 'Hide! He is on his way.', who: 'survivor' });
          this.event({ t: 'banner', text: 'They are hiding. Wait for your moment.', who: 'killer' });
        }
        break;
      case 'hiding':
        if (this.time >= this.phaseEnds) {
          this.setPhase('hunt', HUNT_SECONDS);
          const k = this.killer;
          k.pos = [...P.killerSpawn]; k.vel = [0, 0, 0]; k.yaw = 0; k.tpSeq++; k.frozen = false;
          if (k.brain) k.brain.armed = true;
          this.event({ t: 'banner', text: 'He is in the house. Don\'t make a sound.', who: 'survivor' });
          this.event({ t: 'banner', text: 'Go. Find them all before the cops come.', who: 'killer' });
          this.event({ t: 'sting' });
        }
        break;
      case 'hunt':
        if (this.survivors().every(s => s.dead)) { this.finish(false); break; }
        if (this.time >= this.phaseEnds) { this.startRescue(); break; }
        this.updateNerves(dt);
        this.updateEncounters(dt);
        break;
      case 'rescue':
        this.updateRescue(dt);
        break;
      case 'over':
        this.updateCruiserLeave(dt);
        break;
    }
    if (this.survivors().every(s => s.dead) && this.phase !== 'over' && this.phase !== 'briefing') this.finish(false);
    // spots close again after a check
    for (const s of this.spots) if (s.open && this.time >= s.openUntil) { s.open = false; this.spotDirty.add(s.id); }
    // brains + host-driven bodies
    for (const e of this.entities) {
      if (e.brain && !e.dead) e.brain.update(dt);
      if (e.hostDriven && !e.dead && e.hidden < 0) this.moveBody(e, dt);
    }
  }
  updateNerves(dt) {
    const k = this.killer;
    for (const s of this.survivors()) {
      if (!s.bot || !this.inPlay(s) || s.hidden < 0) continue;
      const d = dist3d(s.pos, k.pos);
      if (d > SV.nerveRange) continue;
      const chance = SV.nerveChance * (1 - d / SV.nerveRange) * dt;
      if (Math.random() < chance) this.noise(s.pos, 0.6, 'a breath', s);
    }
  }
  /** CampEncounterAudio: the "ki ki ki" sting the first time he lays eyes on you (12 m, resets after 7 s). */
  updateEncounters(dt) {
    this.encounterTimer = (this.encounterTimer || 0) - dt;
    if (this.encounterTimer > 0) return;
    this.encounterTimer = 0.2;
    const k = this.killer;
    if (!this.encounterLast) this.encounterLast = new Map();
    for (const s of this.survivors()) {
      if (!this.inPlay(s) || s.hidden >= 0) continue;
      if (dist3d(s.pos, k.pos) > 12) continue;
      if (this.world.blocked([k.pos[0], k.pos[1] + 1.7, k.pos[2]], [s.pos[0], s.pos[1] + 1, s.pos[2]])) continue;
      const last = this.encounterLast.get(s.id);
      if (last === undefined || this.time - last >= 7) this.event({ t: 'encounter', id: s.id, at: [...s.pos] });
      this.encounterLast.set(s.id, this.time);
    }
  }
  startRescue() {
    this.setPhase('rescue', RESCUE_DRIVE_SECONDS + RESCUE_GRACE + 5);
    this.rescueArrived = false;
    this.cruiser.siren = true; this.cruiser.t = 0;
    const k = this.killer; k.frozen = true; if (k.brain) k.brain.armed = false;
    this.event({ t: 'banner', text: 'Sirens. The cops are here!' });
    this.event({ t: 'siren', on: true });
  }
  updateRescue(dt) {
    const P = this.plan.points;
    const c = this.cruiser;
    c.t += dt;
    const drive = clamp(c.t / RESCUE_DRIVE_SECONDS, 0, 1);
    this.driveCruiser([P.cruiserStart, ...P.arrivePath], drive);
    this.gate = clamp((c.t - 3) / 3, 0, 1);
    if (this.gate > 0.3 && this.gateBlockerId !== null) { this.world.removeById(this.gateBlockerId); this.gateBlockerId = null; }
    if (!this.rescueArrived && drive >= 1) {
      this.rescueArrived = true;
      this.arrivedAt = this.time;
      this.event({ t: 'rescueArrived' });
      for (const s of this.survivors()) {
        if (!this.inPlay(s)) continue;
        if (s.hidden >= 0) this.leaveSpot(s, false);
        s.hostDriven = true;
        if (!s.brain) s.brain = new SurvivorBrain(this, s);
        s.brain.escape();
      }
    }
    if (this.rescueArrived) {
      const alive = this.survivors().filter(s => this.inPlay(s));
      if (alive.length === 0 || this.time - this.arrivedAt >= RESCUE_GRACE) this.finish(true);
    }
  }
  driveCruiser(path, t) {
    // constant-speed along the polyline
    let total = 0; const segs = [];
    for (let i = 0; i + 1 < path.length; i++) { const l = dist2d(path[i], path[i + 1]); segs.push(l); total += l; }
    let d = t * total;
    for (let i = 0; i < segs.length; i++) {
      if (d <= segs[i] || i === segs.length - 1) {
        const u = segs[i] > 0 ? clamp(d / segs[i], 0, 1) : 1;
        const a = path[i], b = path[i + 1];
        this.cruiser.pos = [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u];
        this.cruiser.yaw = yawTo(a, b);
        return;
      }
      d -= segs[i];
    }
  }
  updateCruiserLeave(dt) {
    if (!this.leaving) return;
    this.cruiser.t += dt;
    const P = this.plan.points;
    this.driveCruiser([P.arrivePath[P.arrivePath.length - 1], ...P.leavePath], clamp(this.cruiser.t / 9, 0, 1));
  }
  finish(survivorsWon) {
    if (this.phase === 'over') return;
    this.setPhase('over', 0);
    const k = this.killer; k.frozen = true; if (k.brain) k.brain.armed = false;
    for (const s of this.survivors()) if (!s.escaped && s.brain && s.brain.state !== 'escape') s.brain.paused = true;
    if (survivorsWon) { this.leaving = true; this.cruiser.t = 0; this.event({ t: 'siren', on: false }); }
    const alive = this.survivors().filter(s => !s.dead).length, dead = this.survivors().filter(s => s.dead).length;
    this.event({ t: 'result', survivorsWon, alive, dead });
    this.sendSnapshot();
  }

  // ------------------------------------------------------------------ bodies
  /** Move a bot body toward brain.goalVel with collision; sets yaw and spd. */
  moveBody(e, dt) {
    const wish = e.wishVel || [0, 0, 0];
    const maxSpeed = e.wishSpeed || 0;
    // smooth accelerate
    const accel = 12;
    e.vel[0] += clamp(wish[0] - e.vel[0], -accel * dt, accel * dt);
    e.vel[2] += clamp(wish[2] - e.vel[2], -accel * dt, accel * dt);
    const res = this.world.moveCharacter(e.pos, e.vel, BODY_R, BODY_H, dt, 0.45);
    const sp = Math.hypot(e.vel[0], e.vel[2]);
    e.spd = maxSpeed > 0 ? clamp(sp / 3.9, 0, 1) : 0;
    if (sp > 0.2) e.yaw = lerpAngle(e.yaw, Math.atan2(e.vel[0], -e.vel[2]), Math.min(1, dt * 10));
    e.blocked = res.blocked;
    if (e.pos[1] < -20) { e.pos[1] = 1; e.vel[1] = 0; } // fell out of the world: bail
  }

  sendSnapshot() {
    const ents = this.entities.map(e => [e.id, +e.pos[0].toFixed(3), +e.pos[1].toFixed(3), +e.pos[2].toFixed(3), +e.yaw.toFixed(3), +e.spd.toFixed(2), e.hp, e.hidden, e.dead ? 1 : 0, e.escaped ? 1 : 0, e.hostDriven ? 1 : 0, e.frozen ? 1 : 0, e.tpSeq, e.state || '']);
    const sp = [...this.spotDirty].map(id => [id, this.spots[id].open ? 1 : 0, this.spots[id].occupant]);
    this.spotDirty.clear();
    const msg = { t: 'snap', ph: this.phase, tl: +this.timeLeft.toFixed(2), e: ents, sp, ev: this.events, car: [+this.cruiser.pos[0].toFixed(2), +this.cruiser.pos[1].toFixed(2), +this.cruiser.pos[2].toFixed(2), +this.cruiser.yaw.toFixed(2), this.cruiser.siren ? 1 : 0], gate: +this.gate.toFixed(2) };
    this.events = [];
    this.send('all', msg);
  }
  fullState() {
    return { t: 'start', match: this.matchNo, entities: this.entities.map(e => this.fullEntity(e)), phase: this.phase, timeLeft: this.timeLeft, players: this.lobbyState().players, spots: this.spots.map(s => [s.id, s.open ? 1 : 0, s.occupant]) };
  }
}

// ====================================================================== path following
class Walker {
  constructor(sim, e) { this.sim = sim; this.e = e; this.path = null; this.goal = null; this.repathAt = 0; this.stuckTimer = 0; this.progressTimer = 0; this.bestDist = Infinity; this.arriveDist = 0.6; this.blockedFor = 0; this.nudge = 0; }
  setGoal(p, speed, force = false) {
    if (!p) return;
    const changed = !this.goal || dist3d(this.goal, p) > 0.5;
    this.speed = speed;
    if (changed && !force && this.path && this.sim.time < this.repathAt - 1.1) { this.goal = [...p]; return; } // chasing: keep the fresh path, just slide the goal
    if (changed || force || !this.path) {
      this.goal = [...p];
      this.path = this.sim.nav.findPath(this.e.pos, p);
      this.repathAt = this.sim.time + 1.5;
      this.bestDist = Infinity; this.stuckTimer = 0; this.progressTimer = 0; this.blockedFor = 0;
      if (this.path && this.path.length) {
        // drop waypoints already behind us
        while (this.path.length > 1 && dist2d(this.e.pos, this.path[0]) < 0.4) this.path.shift();
      }
    }
  }
  clear() { this.goal = null; this.path = null; this.e.wishVel = [0, 0, 0]; this.e.wishSpeed = 0; }
  get arrived() { return this.goal && dist2d(this.e.pos, this.goal) < this.arriveDist && Math.abs(this.e.pos[1] - this.goal[1]) < 1.2; }
  update(dt) {
    const e = this.e;
    if (!this.goal) { e.wishVel = [0, 0, 0]; e.wishSpeed = 0; return; }
    if (this.arrived) { e.wishVel = [0, 0, 0]; e.wishSpeed = 0; return; }
    if (this.sim.time >= this.repathAt || (!this.path && this.sim.time >= this.repathAt - 1)) {
      this.path = this.sim.nav.findPath(e.pos, this.goal);
      this.repathAt = this.sim.time + 1.5;
    }
    let target = this.goal;
    if (this.path && this.path.length) {
      while (this.path.length > 1 && dist2d(e.pos, this.path[0]) < 0.45 && Math.abs(e.pos[1] - this.path[0][1]) < 0.8) this.path.shift();
      target = this.path[0];
      if (this.path.length === 1 && dist2d(e.pos, target) < 0.45) target = this.goal;
    }
    const dx = target[0] - e.pos[0], dz = target[2] - e.pos[2], d = Math.hypot(dx, dz) || 1;
    let wx = dx / d, wz = dz / d;
    // unstick: shoved against a corner or a jamb, slide sideways for a moment (alternating sides)
    this.blockedFor = e.blocked ? this.blockedFor + dt : 0;
    if (this.blockedFor > 0.35) {
      if (this.nudge === 0 || this.blockedFor > 1.2) { this.nudge = this.nudge >= 0 ? -1 : 1; this.blockedFor = 0.36; }
      wx += -wz * this.nudge * 1.2; wz += wx * this.nudge * 1.2;
      const l = Math.hypot(wx, wz) || 1; wx /= l; wz /= l;
    } else if (!e.blocked) this.nudge = 0;
    e.wishVel = [wx * this.speed, 0, wz * this.speed];
    e.wishSpeed = this.speed;
    // stuck watch: stuckTimer keeps counting until real progress, progressTimer drives repaths
    const gd = dist3d(e.pos, this.goal);
    if (gd < this.bestDist - 0.15) { this.bestDist = gd; this.stuckTimer = 0; this.progressTimer = 0; }
    else { this.stuckTimer += dt; this.progressTimer += dt; }
    if (this.progressTimer > 2.5) { this.path = this.sim.nav.findPath(e.pos, this.goal); this.progressTimer = 0; }
  }
}

// ====================================================================== survivor bot
class SurvivorBrain {
  constructor(sim, e) {
    this.sim = sim; this.e = e; this.walker = new Walker(sim, e);
    this.state = 'idle'; this.spot = null; this.lastSpot = null; this.paused = false;
    this.restlessAt = Infinity; this.fleeUntil = 0; this.lastSeenKiller = -100; this.rethinkAt = 0;
    this.variation = rand(0.9, 1.04);
  }
  onHidingStarted() { this.rethinkAt = this.sim.time + rand(0.2, 1.5); }
  onForcedOut() { this.lastSpot = this.spot; this.spot = null; this.flee(); }
  onDamaged(by) { if (this.state !== 'escape') this.flee(); }
  escape() { this.state = 'escape'; this.walker.setGoal(this.sim.plan.points.exit, SV.run * this.variation, true); this.e.state = 'escaping'; }
  flee() {
    this.state = 'flee'; this.fleeUntil = this.sim.time + rand(3, 5);
    this.e.state = 'fleeing';
    this.pickFleePoint();
  }
  pickFleePoint() {
    const k = this.sim.killer;
    let best = null, bd = -1;
    for (let i = 0; i < 8; i++) {
      const p = this.sim.nav.randomNear(this.e.pos, 12);
      if (!p) continue;
      const d = dist3d(p, k.pos);
      if (d > bd) { bd = d; best = p; }
    }
    if (best) this.walker.setGoal(best, SV.run * this.variation, true);
  }
  killerVisible() {
    const k = this.sim.killer, e = this.e;
    const d = dist3d(e.pos, k.pos);
    if (d > SV.detect) return false;
    return !this.sim.world.blocked([e.pos[0], e.pos[1] + 1.5, e.pos[2]], [k.pos[0], k.pos[1] + 1.4, k.pos[2]]);
  }
  chooseSpot() {
    const e = this.e, k = this.sim.killer;
    const hunting = this.sim.phase === 'hunt';
    let best = null, bs = Infinity;
    for (const s of this.sim.spots) {
      if (s.occupant >= 0 || s.open || (s.reserved >= 0 && s.reserved !== e.id) || s === this.lastSpot) continue;
      let score = dist2d(e.pos, s.entry) + Math.abs(e.pos[1] - s.entry[1]) * 5 + rand(0, 3);
      if (hunting) {
        const dk = dist3d(s.entry, k.pos);
        if (dk < 10) score += (10 - dk) * 3;            // not next to him
      }
      // outdoor spots are far from the huddle: keep them for the brave
      if (s.entry[1] < 0.3 && s.entry[1] > -1) score += 6;
      if (score < bs) { bs = score; best = s; }
    }
    return best;
  }
  goHide() {
    const s = this.chooseSpot();
    if (!s) { this.flee(); return; }
    this.spot = s; s.reserved = this.e.id;
    this.state = 'goHide';
    this.e.state = 'hiding';
    this.walker.arriveDist = 0.7;
    this.walker.setGoal(s.entry, (this.sim.phase === 'hunt' && this.killerVisible() ? SV.run : SV.walk) * this.variation, true);
  }
  update(dt) {
    const sim = this.sim, e = this.e;
    if (this.paused || e.dead) { this.walker.clear(); return; }
    if (this.state === 'escape') {
      this.walker.update(dt);
      if (dist2d(e.pos, sim.plan.points.exit) < 2.2) { e.escaped = true; e.state = 'escaped'; this.walker.clear(); }
      return;
    }
    if (sim.phase === 'briefing') { this.walker.clear(); return; }
    if (sim.phase === 'rescue') { this.walker.clear(); return; }
    const seesKiller = sim.phase === 'hunt' && this.killerVisible();
    if (seesKiller) this.lastSeenKiller = sim.time;
    switch (this.state) {
      case 'idle':
        if (sim.time >= this.rethinkAt) this.goHide();
        break;
      case 'goHide': {
        if (!this.spot || this.spot.occupant >= 0 || this.spot.open) { this.spot && (this.spot.reserved = -1); this.spot = null; this.goHide(); break; }
        const k = sim.killer;
        if (seesKiller && dist3d(k.pos, e.pos) < SV.tooClose) { this.spot.reserved = -1; this.spot = null; this.flee(); break; }
        if (seesKiller) this.walker.speed = SV.run * this.variation;
        this.walker.update(dt);
        if (this.walker.arrived || dist3d(e.pos, this.spot.entry) < 1.0) {
          sim.enterSpot(e, this.spot);
          this.state = 'hidden'; e.state = 'hidden';
          this.restlessAt = sim.time + rand(60, 150);
          this.walker.clear();
        } else if (this.walker.stuckTimer > 6) { this.spot.reserved = -1; this.lastSpot = this.spot; this.spot = null; this.goHide(); }
        break;
      }
      case 'hidden': {
        if (e.hidden < 0) { this.state = 'idle'; this.rethinkAt = sim.time + 0.5; break; }
        // restless: move to another spot when he is far away
        const k = sim.killer;
        if (sim.phase === 'hunt' && sim.time > this.restlessAt && dist3d(k.pos, e.pos) > 22) {
          sim.leaveSpot(e, false); this.lastSpot = this.spot; this.spot = null; this.goHide();
        }
        break;
      }
      case 'flee': {
        this.walker.update(dt);
        const k = sim.killer;
        const kd = dist3d(k.pos, e.pos);
        if (this.walker.arrived || this.walker.stuckTimer > 3) this.pickFleePoint();
        if (sim.time > this.fleeUntil && (kd > SV.gone || sim.time - this.lastSeenKiller > SV.safeSeconds)) this.goHide();
        else if (sim.time > this.fleeUntil + 6) this.goHide(); // he is glued to us: try anyway
        break;
      }
    }
  }
}

// ====================================================================== killer bot
class KillerBrain {
  constructor(sim, e) {
    this.sim = sim; this.e = e; this.walker = new Walker(sim, e);
    this.armed = false; this.mode = 'patrol'; this.target = null; this.lastSeen = null; this.searchTimer = 0;
    this.scanTimer = 0; this.step = 'pickRoom'; this.room = null; this.priorityRoom = null; this.thorough = false;
    this.plan = []; this.spot = null; this.waitUntil = 0; this.emptyRooms = 0; this.spotQueue = []; this.loseTimer = 0;
    this.checkingSpot = null; this.checkedAt = 0;
  }
  onSpotChecked(s, found) { if (found) { this.emptyRooms = 0; this.thorough = false; } }
  onKilled(e) { if (this.target === e) { this.target = null; this.mode = 'patrol'; this.step = 'pickRoom'; } }
  onNoise(at, loudness, label) {
    const e = this.e;
    if (dist3d(at, e.pos) > K.hearingRadius * loudness) return;
    const r = this.sim.roomAt(at);
    if (r) { this.priorityRoom = r; this.thorough = true; }
    // spots near the noise get checked first
    const near = this.sim.spots.filter(s => dist3d(s.hidden, at) < K.noiseSpotRadius && !s.open).sort((a, b) => dist3d(a.hidden, at) - dist3d(b.hidden, at)).slice(0, 3);
    this.spotQueue = near;
    if (this.mode !== 'chase') { this.mode = 'search'; this.lastSeen = [...at]; this.searchTimer = K.searchSeconds; this.walker.setGoal(at, K.moveSpeed, true); this.e.state = 'heard ' + label; }
    this.sim.event({ t: 'killerHeard', label, room: r ? r.name : '' });
  }
  canSee(s) {
    const e = this.e;
    const d = dist3d(e.pos, s.pos);
    if (d > K.senseRadius) return false;
    return !this.sim.world.blocked([e.pos[0], e.pos[1] + K.eyeHeight, e.pos[2]], [s.pos[0], s.pos[1] + 1.2, s.pos[2]]);
  }
  perceive() {
    const sim = this.sim;
    let best = null, bd = Infinity;
    for (const s of sim.survivors()) {
      if (!sim.inPlay(s) || s.hidden >= 0) continue;
      if (!this.canSee(s)) continue;
      const d = dist3d(s.pos, this.e.pos);
      if (d < bd) { bd = d; best = s; }
    }
    return best;
  }
  update(dt) {
    const sim = this.sim, e = this.e;
    if (!this.armed || e.frozen) { this.walker.clear(); return; }
    this.perceiveTimer = (this.perceiveTimer || 0) - dt;
    if (this.perceiveTimer <= 0) {
      this.perceiveTimer = 0.3;
      const seen = this.perceive();
      if (seen) {
        if (this.target !== seen) { this.target = seen; this.mode = 'chase'; e.state = 'chasing ' + seen.name; }
        this.lastSeen = [...seen.pos]; this.loseTimer = 0;
      } else if (this.mode === 'chase' && this.target) {
        // did they just vanish into a spot nearby?
        if (this.target.hidden >= 0) {
          const s = sim.spots[this.target.hidden];
          if (dist3d(s.entry, e.pos) < K.hidingSpotCheckRadius) { this.checkSpotNow(s); this.target = null; return; }
        }
        this.loseTimer += 0.3;
        if (this.loseTimer > 0.6 || !sim.inPlay(this.target) || this.target.hidden >= 0) {
          this.target = null; this.mode = 'search'; this.searchTimer = K.searchSeconds;
          if (this.lastSeen) this.walker.setGoal(this.lastSeen, K.moveSpeed, true);
          e.state = 'searching';
        }
      }
    }
    switch (this.mode) {
      case 'chase': {
        const t = this.target;
        if (!t || !sim.inPlay(t)) { this.mode = 'patrol'; this.step = 'pickRoom'; this.target = null; break; }
        this.walker.arriveDist = 0.9;
        this.walker.setGoal(t.pos, K.chaseSpeed);
        this.walker.update(dt);
        const d = dist2d(e.pos, t.pos);
        if (d <= K.attackRange + 0.1) {
          e.yaw = lerpAngle(e.yaw, yawTo(e.pos, t.pos), Math.min(1, dt * 12));
          e.wishVel = [0, 0, 0];
          sim.killerAttack(e);
        }
        break;
      }
      case 'search': {
        this.walker.update(dt);
        if (this.walker.arrived || !this.walker.goal || this.walker.stuckTimer > 4) {
          this.searchTimer -= dt;
          e.yaw += dt * 1.2; // look around
          e.wishVel = [0, 0, 0];
          if (this.spotQueue.length) { const s = this.spotQueue.shift(); if (!s.open) { this.checkSpotNow(s); break; } }
          if (this.searchTimer <= 0) { this.mode = 'patrol'; this.step = 'pickRoom'; e.state = 'searching the house'; }
        }
        break;
      }
      case 'check': {
        const s = this.checkingSpot;
        if (!s) { this.mode = 'patrol'; break; }
        this.walker.arriveDist = 0.8;
        this.walker.setGoal(s.entry, K.moveSpeed);
        this.walker.update(dt);
        if (this.walker.arrived || dist3d(e.pos, s.entry) < 1.4) {
          e.wishVel = [0, 0, 0];
          e.yaw = lerpAngle(e.yaw, Math.atan2(-s.dir[0], s.dir[2]), Math.min(1, dt * 10));
          if (!this.checkedAt) {
            const found = sim.checkSpot(e, s);
            this.checkedAt = sim.time;
            if (found) { this.target = found; this.mode = 'chase'; this.checkingSpot = null; this.checkedAt = 0; e.state = 'chasing ' + found.name; break; }
          } else if (sim.time - this.checkedAt > K.checkPause) {
            this.checkingSpot = null; this.checkedAt = 0;
            this.mode = this.afterCheck; this.afterCheck = null;
            if (this.mode === 'director') this.mode = 'patrol';
          }
        } else if (this.walker.stuckTimer > K.stuckSeconds) { this.checkingSpot = null; this.mode = 'patrol'; this.step = 'nextSpot'; }
        break;
      }
      case 'patrol': this.director(dt); break;
    }
  }
  checkSpotNow(s) {
    this.afterCheck = this.mode === 'check' ? 'patrol' : this.mode === 'chase' ? 'patrol' : this.mode;
    this.mode = 'check'; this.checkingSpot = s; this.checkedAt = 0;
    this.walker.setGoal(s.entry, K.moveSpeed, true);
    this.e.state = 'checking ' + s.room;
  }
  pickRoom() {
    const sim = this.sim, e = this.e;
    if (this.priorityRoom) { const r = this.priorityRoom; this.priorityRoom = null; return r; }
    let best = null, bs = Infinity;
    for (const r of sim.rooms) {
      if (r === this.room) continue;
      const recent = sim.time - r.lastVisited < K.revisitAfter;
      let score = dist2d(e.pos, r.scan) + Math.abs(e.pos[1] - r.scan[1]) * K.floorPenalty + rand(0, 6) + (recent ? 60 : 0);
      // rooms with somebody actually hidden are more tempting once he has come up empty a lot (he "knows the house")
      if (r.spots.length === 0) score += 25;
      if (score < bs) { bs = score; best = r; }
    }
    return best;
  }
  director(dt) {
    const sim = this.sim, e = this.e;
    switch (this.step) {
      case 'pickRoom': {
        this.room = this.pickRoom();
        if (!this.room) break;
        this.step = 'travel';
        this.walker.arriveDist = 1.2;
        this.walker.setGoal(this.room.scan, K.moveSpeed, true);
        e.state = 'heading to the ' + this.room.name.toLowerCase();
        break;
      }
      case 'travel':
        this.walker.update(dt);
        if (this.walker.arrived || this.walker.stuckTimer > K.stuckSeconds) {
          this.room.lastVisited = sim.time;
          this.scanTimer = rand(K.scanSeconds[0], K.scanSeconds[1]);
          this.step = 'scan';
          e.state = 'searching the ' + this.room.name.toLowerCase();
          const chance = this.thorough ? 1 : Math.min(1, K.checkChance + this.emptyRooms * 0.08);
          this.plan = shuffle(this.room.spots.filter(s => Math.random() < chance));
          this.plan.sort((a, b) => dist3d(a.entry, e.pos) - dist3d(b.entry, e.pos));
        }
        break;
      case 'scan':
        e.wishVel = [0, 0, 0];
        e.yaw += dt * 1.0;
        this.scanTimer -= dt;
        if (this.scanTimer <= 0) this.step = 'nextSpot';
        break;
      case 'nextSpot': {
        const s = this.plan.shift();
        if (!s) {
          this.emptyRooms++;
          if (this.thorough && this.room && this.room !== this.priorityRoom) this.thorough = false;
          this.step = 'pickRoom';
          break;
        }
        if (s.open) break;
        this.checkSpotNow(s);
        this.afterCheck = 'patrol';
        this.step = 'nextSpot';
        break;
      }
    }
  }
}
