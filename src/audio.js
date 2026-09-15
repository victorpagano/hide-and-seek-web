// Procedural sounds (port of ProceduralAudio + HeartbeatAudio): thump, breath, creak, whoosh,
// hit, tick, sting and a looping siren, all synthesised so nothing has to load.
// Sampled clips from the Unity project (slasher-camp ambience + the "ki ki ki ma ma ma" encounter
// sting, horror-loop footsteps and screams), decoded once and played through panners so they sit
// in the world the way the Unity spatial AudioSources did.
const CLIPS = { ambience: 'ambience.mp3', chichi: 'chichi.mp3', walk1: 'walk-1.mp3', walk2: 'walk-2.mp3', walk3: 'walk-3.mp3', scream1: 'scream-1.mp3', scream2: 'scream-2.mp3', scream3: 'scream-3.mp3' };

export class Audio {
  constructor() { this.ctx = null; this.master = null; this.sirenNodes = null; this.heartTimer = 0; this.heartRate = 0; this.buffers = {}; this.ambienceNode = null; this.listenerPos = [0, 0, 0]; }
  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.7;
    this.master.connect(this.ctx.destination);
    this.loadClips();
  }
  async loadClips() {
    for (const [name, file] of Object.entries(CLIPS)) {
      try {
        const res = await fetch('./audio/' + file);
        const data = await res.arrayBuffer();
        this.buffers[name] = await new Promise((resolve, reject) => this.ctx.decodeAudioData(data, resolve, reject));
        if (name === 'ambience' && this.wantAmbience) this.ambience(true);
      } catch (e) { console.warn('audio clip failed', file, e); }
    }
  }
  /** Keep the listener on the camera so panned clips sit in the world. */
  setListener(pos, forward) {
    this.listenerPos = pos;
    if (!this.ctx) return;
    const l = this.ctx.listener, t = this.ctx.currentTime;
    if (l.positionX) {
      l.positionX.setValueAtTime(pos[0], t); l.positionY.setValueAtTime(pos[1], t); l.positionZ.setValueAtTime(pos[2], t);
      l.forwardX.setValueAtTime(forward[0], t); l.forwardY.setValueAtTime(forward[1], t); l.forwardZ.setValueAtTime(forward[2], t);
      l.upX.setValueAtTime(0, t); l.upY.setValueAtTime(1, t); l.upZ.setValueAtTime(0, t);
    } else if (l.setPosition) { l.setPosition(pos[0], pos[1], pos[2]); l.setOrientation(forward[0], forward[1], forward[2], 0, 1, 0); }
  }
  /** Play a decoded clip, optionally at a world position (linear-ish rolloff like Unity's 3-25 m sources). */
  playClip(name, { volume = 1, pitch = 1, at = null, minDist = 3, maxDist = 25 } = {}) {
    if (!this.ctx) return null;
    const buf = this.buffers[name];
    if (!buf) return null;
    const src = this.ctx.createBufferSource(); src.buffer = buf; src.playbackRate.value = pitch;
    const g = this.ctx.createGain(); g.gain.value = volume;
    if (at) {
      if (Math.hypot(at[0] - this.listenerPos[0], at[1] - this.listenerPos[1], at[2] - this.listenerPos[2]) > maxDist) return null;
      const p = this.ctx.createPanner();
      p.panningModel = 'equalpower'; p.distanceModel = 'linear'; p.refDistance = minDist; p.maxDistance = maxDist; p.rolloffFactor = 1;
      if (p.positionX) { p.positionX.value = at[0]; p.positionY.value = at[1]; p.positionZ.value = at[2]; } else p.setPosition(at[0], at[1], at[2]);
      src.connect(g).connect(p).connect(this.master);
    } else src.connect(g).connect(this.master);
    src.start();
    return src;
  }
  ambience(on) {
    this.wantAmbience = on;
    if (!this.ctx) return;
    if (on && !this.ambienceNode && this.buffers.ambience) {
      const src = this.ctx.createBufferSource(); src.buffer = this.buffers.ambience; src.loop = true;
      const g = this.ctx.createGain(); g.gain.value = 0.45;
      src.connect(g).connect(this.master); src.start();
      this.ambienceNode = { src, g };
    } else if (!on && this.ambienceNode) {
      const { src, g } = this.ambienceNode;
      g.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
      setTimeout(() => { try { src.stop(); } catch {} }, 1600);
      this.ambienceNode = null;
    }
  }
  footstep(at, running, killer = false) {
    const n = 1 + Math.floor(Math.random() * 3);
    this.playClip('walk' + n, { volume: (killer ? 0.8 : 0.55) * (running ? 1 : 0.72), pitch: killer ? 0.78 : 0.95 + Math.random() * 0.1, at, minDist: 2, maxDist: 22 });
  }
  screamAt(at) {
    const n = 1 + Math.floor(Math.random() * 3);
    if (!this.playClip('scream' + n, { volume: 0.9, at, minDist: 4, maxDist: 45 })) this.scream();
  }
  encounter(at) { this.playClip('chichi', { volume: 0.7, at, minDist: 3, maxDist: 25 }); }
  noiseBuffer(seconds) {
    const n = Math.floor(this.ctx.sampleRate * seconds), b = this.ctx.createBuffer(1, n, this.ctx.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }
  env(gain, t0, a, d, peak = 1) {
    gain.gain.cancelScheduledValues(t0);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(peak, t0 + a);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + a + d);
  }
  tone(freq, type, a, d, peak, slideTo = null) {
    if (!this.ctx) return;
    const t0 = this.ctx.currentTime;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t0);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t0 + a + d);
    this.env(g, t0, a, d, peak);
    o.connect(g).connect(this.master); o.start(t0); o.stop(t0 + a + d + 0.05);
  }
  noise(a, d, peak, filterHz = 1200, type = 'bandpass') {
    if (!this.ctx) return;
    const t0 = this.ctx.currentTime;
    const src = this.ctx.createBufferSource(); src.buffer = this.noiseBuffer(a + d + 0.1);
    const f = this.ctx.createBiquadFilter(); f.type = type; f.frequency.value = filterHz; f.Q.value = 0.8;
    const g = this.ctx.createGain();
    this.env(g, t0, a, d, peak);
    src.connect(f).connect(g).connect(this.master); src.start(t0); src.stop(t0 + a + d + 0.1);
  }
  thump(vol = 0.5) { this.tone(58, 'sine', 0.01, 0.22, vol, 38); }
  breath(vol = 0.35) { this.noise(0.12, 0.35, vol, 900); }
  gasp(vol = 0.6) { this.noise(0.03, 0.25, vol, 1800); this.tone(420, 'triangle', 0.02, 0.15, vol * 0.3, 260); }
  creak() { this.tone(220, 'sawtooth', 0.15, 0.35, 0.12, 160); this.noise(0.05, 0.3, 0.08, 500); }
  whoosh() { this.noise(0.05, 0.2, 0.35, 2200, 'highpass'); }
  hit() { this.noise(0.005, 0.18, 0.7, 700, 'lowpass'); this.tone(90, 'square', 0.005, 0.12, 0.4, 50); }
  tick() { this.tone(1600, 'square', 0.002, 0.03, 0.12); }
  sting() { this.tone(110, 'sawtooth', 0.02, 1.4, 0.5, 55); this.noise(0.02, 1.2, 0.3, 300, 'lowpass'); }
  scream() { this.tone(700, 'sawtooth', 0.05, 0.6, 0.35, 380); this.noise(0.05, 0.5, 0.25, 2500); }
  door() { this.noise(0.01, 0.12, 0.25, 400, 'lowpass'); }
  siren(on) {
    if (!this.ctx) return;
    if (on && !this.sirenNodes) {
      const o = this.ctx.createOscillator(), g = this.ctx.createGain(), lfo = this.ctx.createOscillator(), lg = this.ctx.createGain();
      o.type = 'square'; o.frequency.value = 700; lfo.frequency.value = 0.9; lg.gain.value = 250;
      lfo.connect(lg).connect(o.frequency); g.gain.value = 0.05;
      o.connect(g).connect(this.master); o.start(); lfo.start();
      this.sirenNodes = { o, g, lfo };
    } else if (!on && this.sirenNodes) {
      const { o, g, lfo } = this.sirenNodes;
      g.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
      setTimeout(() => { try { o.stop(); lfo.stop(); } catch {} }, 1100);
      this.sirenNodes = null;
    }
  }
  /** Heartbeat driven by how close the killer is (0 = calm). */
  heartbeat(dt, intensity) {
    if (!this.ctx || intensity <= 0) { this.heartTimer = 0; return; }
    const period = 1.1 - intensity * 0.6;
    this.heartTimer += dt;
    if (this.heartTimer >= period) { this.heartTimer = 0; this.thump(0.25 + intensity * 0.5); setTimeout(() => this.thump(0.15 + intensity * 0.35), 160); }
  }
}
