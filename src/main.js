// Entry point: menu -> lobby -> match. The same client code runs for the host (talking to the
// in-process Sim through a loopback) and for joined players (talking to the host over WebRTC).
import * as THREE from 'three';
import { buildPlan } from './plan.js';
import { View } from './render.js';
import { Input } from './input.js';
import { Audio } from './audio.js';
import { NavGrid } from './nav.js';
import { Sim } from './game.js';
import { HostNet, ClientNet, randomCode } from './net.js';
import { BreathMinigame } from './minigame.js';
import { Mic } from './mic.js';
import { dist2d, dist3d, clamp, lerp, lerpAngle, wrapAngle, forward, yawTo, isTouch } from './util.js';

const $ = (id) => document.getElementById(id);
const canvas = $('view');
const plan = buildPlan();
const view = new View(canvas, plan);
const input = new Input(canvas);
if (input.touch) document.body.classList.add('touch');
const audio = new Audio();
const BODY_R = 0.35, BODY_H = 1.7;
const SURVIVOR_SPEED = 4, KILLER_SPEED = 3.7;

const app = {
  mode: 'menu', isHost: false, net: null, sim: null, nav: null, myId: null, myName: 'Kevin',
  players: [], entities: new Map(), phase: 'lobby', timeLeft: 0, spots: plan.spots.map(s => ({ open: 0, occ: -1 })),
  cruiser: [...plan.points.cruiserStart, 0, 0], gate: 0, match: 0,
  poseTimer: 0, banner: { until: 0 }, spectate: { active: false, index: 0, angle: 0, since: 0 }, result: null,
  minigame: null, breathTimer: 0, lastPhase: 'lobby', flash: 0, clue: '', clueUntil: 0, killerStatus: '',
  spectateOnly: false, dialogUntil: 0,
};
window.app = app; window.plan = plan; window.view = view; window.input = input;
const mic = new Mic(audio);
mic.onClue = (loudness) => { send({ t: 'act', a: 'noise', loudness }); showBanner('Shh! He can hear you.', 2); };
function updateMicMeter() {
  const el = $('mic');
  const show = mic.enabled && app.mode === 'game' && !app.spectate.active && me() && me().kind === 'survivor' && !me().dead;
  el.hidden = !show;
  if (!show) return;
  el.querySelector('i').style.width = (mic.level * 100).toFixed(0) + '%';
  el.classList.toggle('loud', mic.isLoud && mic.armed);
  el.classList.toggle('armed', mic.armed);
}
async function toggleMic() {
  if (mic.enabled) { mic.disable(); }
  else { const ok = await mic.enable(); if (!ok) { $('lobbyErr').textContent = mic.error || ''; $('menuErr').textContent = mic.error || ''; } }
  renderMicButtons();
}
function renderMicButtons() {
  for (const id of ['btnMicMenu', 'btnMicLobby']) { const b = $(id); if (b) b.textContent = mic.enabled ? '🎤 Microphone on' : '🎤 Enable microphone'; }
}
app.minigame = new BreathMinigame(input, (failed) => { if (failed) { send({ t: 'act', a: 'gasp' }); audio.gasp(); showBanner('You gasped!'); } });

// ------------------------------------------------------------------ UI helpers
function show(screen) {
  for (const id of ['menu', 'lobby', 'result']) $(id).hidden = id !== screen;
  $('hud').hidden = screen !== null || app.mode !== 'game';
  $('touch').hidden = !(input.touch && screen === null && app.mode === 'game');
}
function showBanner(text, seconds = 4) { $('banner').textContent = text; $('banner').classList.add('show'); app.banner.until = performance.now() + seconds * 1000; }
function setPrompt(text) { $('prompt').textContent = text || ''; }
function fmt(t) { t = Math.max(0, Math.ceil(t)); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); }
function me() { for (const e of app.entities.values()) if (e.owner === app.myId) return e; return null; }
function killer() { for (const e of app.entities.values()) if (e.kind === 'killer') return e; return null; }
function amKiller() { const m = me(); return m && m.kind === 'killer'; }
function spotOf(e) { return e && e.hidden >= 0 ? plan.spots[e.hidden] : null; }

// ------------------------------------------------------------------ networking
function send(msg) {
  if (!app.net) return;
  if (app.isHost) app.net.localSend(msg); else app.net.send(msg);
}
function onHostMessage(msg) {
  switch (msg.t) {
    case 'lobby':
      app.players = msg.players;
      if (msg.spectateOnly) app.spectateOnly = true;
      renderLobby();
      break;
    case 'start': startMatch(msg); break;
    case 'snap': applySnapshot(msg); break;
    case 'reset':
      app.mode = 'lobby'; app.entities.clear(); app.result = null; app.spectate.active = false;
      for (const c of [...view.chars.keys()]) view.removeChar(c);
      input.enabled = false; input.releaseLock();
      show('lobby');
      break;
  }
}
function startMatch(msg) {
  app.mode = 'game'; app.match = msg.match; app.phase = msg.phase; app.timeLeft = msg.timeLeft; app.players = msg.players;
  app.entities.clear();
  for (const c of [...view.chars.keys()]) view.removeChar(c);
  for (const e of msg.entities) {
    const ve = { ...e, pos: [...e.pos], rpos: [...e.pos], ryaw: e.yaw, pitch: 0, vel: [0, 0, 0], spd: 0, lastTp: 0, state: '' };
    app.entities.set(e.id, ve);
    view.addChar(ve);
  }
  if (msg.spots) for (const [id, open, occ] of msg.spots) app.spots[id] = { open, occ };
  else app.spots = plan.spots.map(() => ({ open: 0, occ: -1 }));
  app.result = null; app.spectate.active = false; app.spectateOnly = !me();
  app.lastPhase = '';
  show(null);
  input.enabled = true;
  if (!input.touch) input.requestLock();
  audio.unlock();
  audio.ambience(true);
  const m = me();
  if (m) { view.thirdPerson(m.pos, m.yaw, 0, 0, true); }
  $('btnAttack').hidden = !amKiller();
  $('btnUse').textContent = amKiller() ? 'Open' : 'Hide';
  $('crosshair').hidden = !amKiller();
}
function applySnapshot(s) {
  const wasPhase = app.phase;
  app.phase = s.ph; app.timeLeft = s.tl;
  app.cruiser = s.car; app.gate = s.gate;
  for (const row of s.e) {
    const [id, x, y, z, yaw, spd, hp, hidden, dead, esc, hd, frozen, tp, state] = row;
    const e = app.entities.get(id);
    if (!e) continue;
    const mine = e.owner === app.myId;
    const wasHidden = e.hidden;
    e.hp = hp; e.hidden = hidden; e.dead = !!dead; e.escaped = !!esc; e.hostDriven = !!hd; e.frozen = !!frozen; e.state = state;
    const forced = tp !== e.lastTp;
    e.lastTp = tp;
    if (mine && !e.hostDriven && !e.dead && e.hidden < 0 && !e.frozen && !forced) { e.spd = e.spd; continue; }
    e.pos = [x, y, z]; e.yaw = yaw; e.spd = spd;
    if (forced || dist3d(e.rpos, e.pos) > 3) { e.rpos = [x, y, z]; e.ryaw = yaw; e.vel = [0, 0, 0]; if (mine) { e.pitch = 0; } }
    if (mine && forced && e.hidden >= 0 && wasHidden < 0) { /* entered a spot: peek from inside */ }
  }
  for (const [id, open, occ] of s.sp) app.spots[id] = { open, occ };
  for (const ev of s.ev) onEvent(ev);
}
function onEvent(ev) {
  const m = me();
  switch (ev.t) {
    case 'phase':
      if (ev.phase === 'briefing') { app.dialogUntil = performance.now() + 5000; }
      if (ev.phase === 'hiding') { audio.tick(); }
      if (ev.phase === 'hunt') { audio.sting(); }
      break;
    case 'banner': if (!ev.who || (ev.who === 'killer') === amKiller()) showBanner(ev.text, 4); break;
    case 'sting': audio.sting(); break;
    case 'siren': audio.siren(ev.on); break;
    case 'hit':
      if (m && ev.id === m.id) { app.flash = 0.6; audio.hit(); }
      else if (m && dist3d(ev.at, m.pos) < 25) audio.hit();
      break;
    case 'encounter': audio.encounter(ev.at); break;
    case 'died': {
      audio.screamAt(ev.at);
      if (m && ev.id === m.id) { app.spectate.since = performance.now(); showBanner('YOU DIED', 3); }
      else showBanner(ev.name + ' was found', 3);
      break;
    }
    case 'check': {
      const s = plan.spots[ev.spot];
      if (m && dist3d(s.entry, m.pos) < 30) audio.creak();
      break;
    }
    case 'found': if (m && ev.id === m.id) { showBanner('He found you! RUN!', 3); app.flash = 0.8; } break;
    case 'swing': if (m && ev.id !== m.id) audio.whoosh(); else audio.whoosh(); break;
    case 'noise': {
      if (m && m.kind === 'survivor' && dist3d(ev.at, m.pos) < 14) (ev.loudness > 0.8 ? audio.gasp(0.4) : audio.breath(0.3));
      break;
    }
    case 'killerHeard':
      if (amKiller()) { app.clue = 'You heard ' + ev.label + (ev.room ? ' from the ' + ev.room.toLowerCase() : ''); app.clueUntil = performance.now() + 6000; audio.breath(0.5); }
      break;
    case 'hide': if (m && ev.id === m.id) { audio.door(); app.breathTimer = 0; } break;
    case 'unhide': if (m && ev.id === m.id) audio.door(); break;
    case 'rescueArrived': showBanner('Run for the car!', 4); break;
    case 'result': showResult(ev); break;
  }
}
function showResult(ev) {
  app.result = ev;
  const meK = amKiller();
  const m = me();
  let title, cls;
  if (ev.survivorsWon) { title = meK ? 'THEY GOT AWAY' : (m && !m.dead) ? 'RESCUED' : 'THE OTHERS MADE IT'; cls = meK ? 'lose' : 'win'; }
  else { title = meK ? 'YOU GOT THEM ALL' : 'NOBODY SURVIVED'; cls = meK ? 'win' : 'lose'; }
  $('resultTitle').textContent = title; $('resultTitle').className = cls;
  $('resultTally').textContent = ev.alive + ' rescued, ' + ev.dead + ' found.';
  $('btnAgain').hidden = !app.isHost;
  $('resultWait').textContent = app.isHost ? '' : 'Waiting for the host to start another round…';
  input.releaseLock(); input.enabled = false;
  setTimeout(() => { show('result'); $('hud').hidden = false; }, 1800);
}

// ------------------------------------------------------------------ lobby
function renderLobby() {
  const ul = $('players');
  ul.innerHTML = '';
  for (const p of app.players) {
    const li = document.createElement('li');
    const name = document.createElement('span'); name.textContent = p.name + (p.id === 'host' ? ' (host)' : '') + (p.id === app.myId ? ' – you' : '');
    const role = document.createElement('span'); role.className = 'role ' + p.role; role.textContent = p.role;
    li.append(name, role); ul.append(li);
  }
  const humansS = app.players.filter(p => p.role !== 'killer').length;
  const bots = Math.max(0, 4 - humansS);
  const botKiller = !app.players.some(p => p.role === 'killer');
  const note = document.createElement('li');
  note.className = 'muted';
  note.textContent = (bots > 0 ? bots + ' survivor bot' + (bots > 1 ? 's' : '') : 'no survivor bots') + (botKiller ? ' · the killer will be a bot' : '');
  ul.append(note);
  const mine = app.players.find(p => p.id === app.myId);
  $('roleSurvivor').classList.toggle('active', !!mine && mine.role === 'survivor');
  $('roleKiller').classList.toggle('active', !!mine && mine.role === 'killer');
  $('btnStart').hidden = !app.isHost;
  if (app.spectateOnly) $('lobbyErr').textContent = 'A match is running - you join when the host starts the next one.';
}
async function hostLobby(solo) {
  const name = $('name').value.trim() || 'Kevin';
  app.myName = name; app.isHost = true; app.myId = 'host';
  const code = randomCode();
  const net = new HostNet(code);
  app.net = net;
  $('connecting').hidden = false;
  try {
    if (!solo) await net.open();
  } catch (err) {
    $('connecting').hidden = true;
    $('menuErr').textContent = 'Could not reach the PeerJS signalling server (' + (err.type || err.message) + '). Try again, or play solo.';
    app.net = null;
    return;
  }
  $('connecting').hidden = true;
  if (!app.nav) app.nav = new NavGrid(view.world, { minx: -6, minz: -46, maxx: 90, maxz: 54 });
  const sim = new Sim(plan, view.world, app.nav, (to, msg) => net.send(to, msg));
  app.sim = sim;
  net.onMessage = (peerId, msg) => sim.onClient(peerId, msg);
  net.onLeave = (peerId) => sim.removePlayer(peerId);
  net.localHandler = (msg) => onHostMessage(msg);
  sim.addPlayer('host', name);
  $('lobbyCodeWrap').hidden = solo;
  $('lobbyCode').textContent = code;
  $('lobbyUrl').textContent = solo ? '' : 'Same page, code ' + code + ' · ' + location.origin + location.pathname + '?code=' + code;
  app.mode = 'lobby';
  show('lobby');
}
async function joinLobby() {
  const name = $('name').value.trim() || 'Player';
  const code = $('code').value.trim().toUpperCase();
  if (code.length !== 4) { $('menuErr').textContent = 'Enter the 4-letter code from the host.'; return; }
  app.myName = name; app.isHost = false;
  const net = new ClientNet(code);
  $('connecting').hidden = false;
  try { await net.open(); }
  catch (err) { $('connecting').hidden = true; $('menuErr').textContent = 'Could not join: ' + (err.type || err.message || err); return; }
  $('connecting').hidden = true;
  app.net = net; app.myId = net.peer.id;
  net.onMessage = onHostMessage;
  net.onClose = () => { $('menuErr').textContent = 'Connection to the host was lost.'; leave(); };
  net.send({ t: 'join', name });
  app.mode = 'lobby';
  $('lobbyCodeWrap').hidden = true;
  show('lobby');
}
function leave() {
  if (app.net) app.net.close();
  app.net = null; app.sim = null; app.mode = 'menu'; app.entities.clear(); app.players = []; app.result = null; app.spectateOnly = false;
  for (const c of [...view.chars.keys()]) view.removeChar(c);
  input.enabled = false; input.releaseLock();
  audio.siren(false); audio.ambience(false);
  show('menu');
}
// iOS keeps the AudioContext suspended until a gesture on the page itself.
for (const ev of ['touchstart', 'pointerdown', 'keydown']) document.addEventListener(ev, () => audio.unlock(), { passive: true });
$('btnMicMenu').onclick = toggleMic;
$('btnMicLobby').onclick = toggleMic;
renderMicButtons();
// a remembered "mic on" is re-requested from these taps (iOS only grants it inside a gesture)
const micIfWanted = () => { try { if (localStorage.getItem('hs-mic') === '1' && !mic.enabled) mic.enable().then(renderMicButtons); } catch {} };
$('btnHost').onclick = () => { audio.unlock(); micIfWanted(); hostLobby(false); };
$('btnSolo').onclick = () => { audio.unlock(); micIfWanted(); hostLobby(true); };
$('btnJoin').onclick = () => { audio.unlock(); micIfWanted(); joinLobby(); };
$('btnLeave').onclick = leave;
$('btnQuit').onclick = leave;
$('roleSurvivor').onclick = () => send({ t: 'role', role: 'survivor' });
$('roleKiller').onclick = () => send({ t: 'role', role: 'killer' });
$('btnStart').onclick = () => send({ t: 'start' });
$('btnAgain').onclick = () => send({ t: 'again' });
$('code').addEventListener('keydown', (e) => { if (e.key === 'Enter') joinLobby(); });
const urlCode = new URLSearchParams(location.search).get('code');
if (urlCode) $('code').value = urlCode.toUpperCase();
$('name').value = localStorage.getItem('hs-name') || '';
$('name').addEventListener('change', () => localStorage.setItem('hs-name', $('name').value));
canvas.addEventListener('click', () => { if (app.mode === 'game' && app.phase === 'briefing' && app.isHost) send({ t: 'skip' }); });
window.addEventListener('keydown', (e) => {
  if (app.mode !== 'game') return;
  if (e.code === 'KeyR' && app.result && app.isHost) send({ t: 'again' });
  if (app.phase === 'briefing' && app.isHost && (e.code === 'Space' || e.code === 'Enter')) send({ t: 'skip' });
});

// ------------------------------------------------------------------ the frame
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  if (app.mode === 'game') updateGame(dt, now);
  else if (app.mode === 'lobby' || app.mode === 'menu') {
    // idle shot of the house from the street
    const t = now * 0.00005;
    view.fixed([28 + Math.sin(t) * 6, 6, 44 + Math.cos(t) * 2], [29, 3, 8], 55);
  }
  // covers ease open/closed
  for (const s of plan.spots) {
    if (s.coverId < 0) continue;
    const cv = view.covers[s.coverId];
    const target = app.spots[s.id] && app.spots[s.id].open ? 1 : 0;
    if (Math.abs(cv.open - target) > 0.001) cv.set(lerp(cv.open, target, Math.min(1, dt * 6)));
  }
  for (const id of plan.points.gateLeaves) { const cv = view.covers[id]; if (Math.abs(cv.open - app.gate) > 0.001) cv.set(lerp(cv.open, app.gate, Math.min(1, dt * 3))); }
  view.setCruiser(app.cruiser[0], app.cruiser[1], app.cruiser[2], app.cruiser[3], !!app.cruiser[4], dt);
  if (app.banner.until && now > app.banner.until) { $('banner').classList.remove('show'); app.banner.until = 0; }
  view.render();
}
requestAnimationFrame(frame);
// The sim ticks on a timer, not the render loop, so the match keeps running for the guests
// even when the host's tab is in the background (timers throttle, rAF stops entirely).
let simLast = performance.now();
setInterval(() => {
  const now = performance.now();
  const dt = (now - simLast) / 1000;
  simLast = now;
  if (app.sim) app.sim.update(dt);
}, 33);

function updateGame(dt, now) {
  const inp = input.poll();
  const m = me();
  const k = killer();
  const hunting = app.phase === 'hunt';
  if (inp.menu) { leave(); return; }

  // ---- local body
  let look = inp.look;
  if (app.minigame.active) { app.minigame.update(dt, look[0]); look = [0, 0]; }
  if (m && !m.dead) {
    m.yaw += look[0]; m.pitch = clamp(m.pitch - look[1], -1.1, 1.1);
    const controllable = !m.hostDriven && !m.frozen && !m.escaped && app.phase !== 'briefing' && app.phase !== 'over' && !app.result;
    const spot = spotOf(m);
    if (spot) {
      // peeking: clamp the look around the spot's facing
      const base = Math.atan2(spot.dir[0], -spot.dir[2]);
      m.yaw = base + clamp(wrapAngle(m.yaw - base), -1.22, 1.22);
      const lieTilt = spot.pose === 'lie' ? 0.45 : 0;
      m.pitch = clamp(m.pitch, -0.8 - lieTilt, 0.35 - lieTilt);
      m.rpos = [...m.pos]; m.spd = 0;
      setPrompt('');
      if (inp.use && controllable) send({ t: 'act', a: 'unhide' });
    } else if (controllable) {
      const f = forward(m.yaw), r = [Math.cos(m.yaw), 0, Math.sin(m.yaw)];
      const speed = m.kind === 'killer' ? KILLER_SPEED : SURVIVOR_SPEED;
      const wx = (f[0] * inp.move[1] + r[0] * inp.move[0]) * speed, wz = (f[2] * inp.move[1] + r[2] * inp.move[0]) * speed;
      const accel = 24;
      m.vel[0] += clamp(wx - m.vel[0], -accel * dt, accel * dt);
      m.vel[2] += clamp(wz - m.vel[2], -accel * dt, accel * dt);
      view.world.moveCharacter(m.pos, m.vel, BODY_R, BODY_H, dt, 0.45);
      if (m.pos[1] < -15) { m.pos = [...plan.points.huddle[0]]; m.vel = [0, 0, 0]; }
      m.rpos = [...m.pos]; m.ryaw = m.yaw;
      m.spd = clamp(Math.hypot(m.vel[0], m.vel[2]) / speed, 0, 1);
      app.poseTimer += dt;
      if (app.poseTimer >= 0.05) { app.poseTimer = 0; send({ t: 'pose', p: [+m.pos[0].toFixed(3), +m.pos[1].toFixed(3), +m.pos[2].toFixed(3)], yaw: +m.yaw.toFixed(3), pitch: +m.pitch.toFixed(2), spd: +m.spd.toFixed(2) }); }
      // interactions
      const near = nearestSpot(m);
      if (m.kind === 'survivor') {
        if (near && !app.spots[near.id].open && app.spots[near.id].occ < 0 && app.phase !== 'rescue') {
          setPrompt((input.touch ? 'HIDE' : 'E') + ' - ' + near.label);
          if (inp.use) send({ t: 'act', a: 'hide', spot: near.id });
        } else setPrompt('');
      } else {
        if (near && !app.spots[near.id].open) {
          setPrompt((input.touch ? 'OPEN' : 'E') + ' - check the ' + near.label.replace(/^hide (in|under|behind|between) the /, ''));
          if (inp.use) send({ t: 'act', a: 'check', spot: near.id });
        } else setPrompt(input.touch ? '' : 'LMB - swing');
        if (inp.attack) send({ t: 'act', a: 'attack' });
      }
    } else {
      m.spd = 0; setPrompt('');
      if (m.frozen && m.kind === 'killer' && app.phase !== 'briefing') setPrompt('Wait for them to hide…');
    }
  }
  // ---- remote/interpolated bodies
  for (const e of app.entities.values()) {
    const mine = e === m;
    const local = mine && !e.hostDriven && !e.frozen && e.hidden < 0 && !e.dead;
    if (!local) {
      const d = dist3d(e.rpos, e.pos);
      const rate = d > 2 ? 30 : 12;
      e.rpos[0] = lerp(e.rpos[0], e.pos[0], Math.min(1, dt * rate));
      e.rpos[1] = lerp(e.rpos[1], e.pos[1], Math.min(1, dt * rate));
      e.rpos[2] = lerp(e.rpos[2], e.pos[2], Math.min(1, dt * rate));
      e.ryaw = lerpAngle(e.ryaw, mine ? e.yaw : e.yaw, Math.min(1, dt * 12));
      if (mine) e.ryaw = e.yaw;
    }
    const c = view.chars.get(e.id);
    const hiddenVisible = e.hidden < 0 || (app.spots[e.hidden] && app.spots[e.hidden].open);
    // the killer hunts blind: no name tags over survivors (survivors still see each other's, and his)
    const showLabel = !(amKiller() && e.kind === 'survivor');
    if (c) view.updateChar(c, e.rpos, e.ryaw, e.spd, e.dead, hiddenVisible, dt, mine && !spotOf(e), showLabel);
    // footsteps: every stride metres of ground covered (CampFootsteps)
    if (!e.dead && e.hidden < 0) {
      const stride = e.kind === 'killer' ? 1.65 : 1.45;
      e.stepDist = (e.stepDist || 0) + Math.hypot(e.rpos[0] - (e.stepPrev ? e.stepPrev[0] : e.rpos[0]), e.rpos[2] - (e.stepPrev ? e.stepPrev[2] : e.rpos[2]));
      if (e.stepDist >= stride) { e.stepDist = 0; audio.footstep([e.rpos[0], e.rpos[1] + 0.2, e.rpos[2]], e.spd > 0.75, e.kind === 'killer'); }
    }
    e.stepPrev = [...e.rpos];
  }

  // ---- camera
  const meDead = m && m.dead;
  if (app.phase === 'briefing' && !app.spectateOnly) {
    view.fixed(plan.points.meetingCam.pos, plan.points.meetingCam.look, 50);
  } else if (app.phase === 'rescue' || (app.phase === 'over' && app.result && app.result.survivorsWon)) {
    view.fixed(plan.points.rescueCam.pos, plan.points.rescueCam.look, 55);
  } else if (m && !meDead) {
    const spot = spotOf(m);
    if (spot) view.peek(m.pos, spot.eye, m.yaw, m.pitch);
    else view.thirdPerson(m.rpos, m.yaw, m.pitch, dt);
  } else {
    updateSpectator(dt, inp, now);
  }

  // ---- breath minigame + heartbeat
  if (m && !meDead && m.kind === 'survivor' && hunting && spotOf(m) && k) {
    const d = dist3d(m.pos, k.pos);
    audio.heartbeat(dt, clamp(1 - d / 16, 0, 1));
    // every 10 s of hiding during the hunt (Unity BreathMinigame.interval), wherever he is
    if (!app.minigame.active) {
      app.breathTimer += dt;
      if (app.breathTimer >= 10) { app.breathTimer = 0; app.minigame.start(); }
    }
  } else { app.breathTimer = 4; if (app.minigame.active) app.minigame.finish(false); if (m && k && hunting && !meDead && m.kind === 'survivor') audio.heartbeat(dt, clamp(1 - dist3d(m.pos, k.pos) / 10, 0, 1)); }
  // ---- microphone (MicrophoneNoise): loud frames become clues while the hunt is on
  mic.armed = !!(m && !meDead && m.kind === 'survivor' && hunting && !m.escaped);
  mic.update(dt, now);
  updateMicMeter();

  // ---- audio listener follows the camera
  const cp = view.camera.position, cf = view.camera.getWorldDirection(new THREE.Vector3());
  audio.setListener([cp.x, cp.y, cp.z], [cf.x, cf.y, cf.z]);

  // ---- HUD
  updateHud(now, m, k);
  if (app.flash > 0) { app.flash -= dt * 2; $('flash').style.opacity = clamp(app.flash, 0, 0.6); $('flash').style.background = '#8b0000'; }
  else $('flash').style.opacity = 0;
}

function nearestSpot(m) {
  let best = null, bd = m.kind === 'killer' ? 2.4 : 2.0;
  for (const s of plan.spots) {
    const d = dist3d(m.pos, s.entry);
    if (d < bd) { bd = d; best = s; }
  }
  return best;
}
function updateSpectator(dt, inp, now) {
  const m = me();
  if (m && m.dead && now - app.spectate.since < 2500 && app.spectate.since) { view.thirdPerson(m.rpos, m.yaw, m.pitch, dt); return; }
  const targets = [...app.entities.values()].filter(e => !e.dead && e.hidden < 0 && e !== m);
  const k = killer();
  if (k && !targets.includes(k) && !k.dead) targets.unshift(k);
  if (!app.spectate.active) { app.spectate.active = true; app.spectate.index = 0; $('btnCycle').hidden = false; $('btnUse').hidden = true; $('btnAttack').hidden = true; }
  if (inp.cycle || inp.use || inp.attack) app.spectate.index++;
  if (targets.length === 0) { view.fixed(plan.points.rescueCam.pos, plan.points.rescueCam.look, 55); return; }
  const t = targets[app.spectate.index % targets.length];
  app.spectate.angle += dt * 0.25;
  view.orbit(t.rpos, app.spectate.angle, dt);
  setPrompt('');
  $('pocket').textContent = (m && m.dead ? 'YOU ARE DEAD - ' : '') + 'spectating ' + t.name + (input.touch ? '\nNEXT - next camera' : '\nTab - next camera');
}
function updateHud(now, m, k) {
  const timer = $('timer');
  const labels = { briefing: 'get ready', hiding: 'hide', hunt: 'until the cops arrive', rescue: 'rescue', over: 'match over', lobby: '' };
  timer.querySelector('.t').textContent = app.phase === 'rescue' || app.phase === 'over' ? '' : fmt(app.timeLeft);
  timer.querySelector('.l').textContent = labels[app.phase] || '';
  timer.classList.toggle('hunt', app.phase === 'hunt');
  $('dialog').hidden = !(app.phase === 'briefing' && !amKiller() && !app.spectateOnly);
  if (app.phase === 'briefing' && amKiller()) $('pocket').textContent = 'They are huddled in the living room. Wait outside.';
  // health
  if (m && m.kind === 'survivor') { $('health').hidden = false; $('health').querySelector('i').style.width = clamp(m.hp, 0, 100) + '%'; $('health').classList.toggle('low', m.hp <= 40); }
  else $('health').hidden = true;
  // status: survivors list
  const survivors = [...app.entities.values()].filter(e => e.kind === 'survivor');
  $('status').innerHTML = survivors.map(s => `<div>${s.name}: ${s.dead ? '<span style="color:#ff8b80">found</span>' : s.escaped ? '<span style="color:#7fd68a">rescued</span>' : s.hidden >= 0 && (amKiller() ? false : true) ? 'hidden' : 'alive'}</div>`).join('');
  // pocket
  if (!app.spectate.active) {
    if (amKiller()) {
      const parts = [];
      if (now < app.clueUntil) parts.push(app.clue);
      if (app.phase === 'hunt' && k && k.state) parts.push(k.state);
      $('pocket').textContent = parts.join('\n');
    } else if (m) {
      const spot = spotOf(m);
      $('pocket').textContent = spot ? 'Hidden: ' + spot.label.replace(/^hide /, '') + (input.touch ? '\nHIDE - come out' : '\nE - come out') : (app.phase === 'hiding' ? 'Find somewhere to hide!' : '');
    }
  }
}
