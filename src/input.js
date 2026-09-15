// Keyboard + pointer-lock mouse on desktop, a virtual stick + drag-to-look + buttons on touch.
import { isTouch } from './util.js';

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.move = [0, 0];        // x right, y forward (-1..1)
    this.lookDelta = [0, 0];   // accumulated pixels/points this frame
    this.use = false; this.attack = false; this.cycle = false; this.menu = false;
    this.pointerX = 0;         // 0..1 across the screen (breath minigame)
    this.touch = isTouch();
    this.enabled = false;
    this.sensitivity = 0.0022;
    this.touchSensitivity = 0.006;
    this._bindKeyboard();
    this._bindMouse();
    if (this.touch) this._bindTouch();
  }
  _bindKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      this.keys.add(e.code);
      if (e.code === 'KeyE') this.use = true;
      if (e.code === 'Tab') { this.cycle = true; e.preventDefault(); }
      if (e.code === 'Space') e.preventDefault();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
  }
  _bindMouse() {
    const c = this.canvas;
    c.addEventListener('mousedown', (e) => {
      if (!this.enabled) return;
      if (document.pointerLockElement !== c && !this.touch) { this.requestLock(); return; }
      if (e.button === 0) this.attack = true;
    });
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement === c) { this.lookDelta[0] += e.movementX; this.lookDelta[1] += e.movementY; }
      this.pointerX = e.clientX / window.innerWidth;
    });
  }
  get locked() { return this.touch || document.pointerLockElement === this.canvas; }
  requestLock() {
    if (this.touch || !this.canvas.requestPointerLock) return;
    try { const p = this.canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* not allowed here */ }
  }
  releaseLock() { if (document.exitPointerLock && document.pointerLockElement) document.exitPointerLock(); }

  _bindTouch() {
    const stick = document.getElementById('stick'), knob = stick.querySelector('i');
    const look = document.getElementById('lookzone');
    let stickId = null, stickOrigin = [0, 0];
    const radius = 55;
    stick.addEventListener('touchstart', (e) => {
      const t = e.changedTouches[0];
      stickId = t.identifier; stickOrigin = [t.clientX, t.clientY];
      e.preventDefault();
    }, { passive: false });
    const onStickMove = (e) => {
      for (const t of e.changedTouches) if (t.identifier === stickId) {
        let dx = t.clientX - stickOrigin[0], dy = t.clientY - stickOrigin[1];
        const l = Math.hypot(dx, dy);
        if (l > radius) { dx *= radius / l; dy *= radius / l; }
        knob.style.transform = `translate(${dx}px, ${dy}px)`;
        this.move = [dx / radius, -dy / radius];
      }
      e.preventDefault();
    };
    const onStickEnd = (e) => {
      for (const t of e.changedTouches) if (t.identifier === stickId) {
        stickId = null; this.move = [0, 0]; knob.style.transform = '';
      }
    };
    stick.addEventListener('touchmove', onStickMove, { passive: false });
    stick.addEventListener('touchend', onStickEnd);
    stick.addEventListener('touchcancel', onStickEnd);

    let lookId = null, last = [0, 0];
    look.addEventListener('touchstart', (e) => {
      if (lookId !== null) return;
      const t = e.changedTouches[0];
      lookId = t.identifier; last = [t.clientX, t.clientY];
      this.pointerX = t.clientX / window.innerWidth;
      e.preventDefault();
    }, { passive: false });
    look.addEventListener('touchmove', (e) => {
      for (const t of e.changedTouches) if (t.identifier === lookId) {
        this.lookDelta[0] += (t.clientX - last[0]) * (this.touchSensitivity / this.sensitivity);
        this.lookDelta[1] += (t.clientY - last[1]) * (this.touchSensitivity / this.sensitivity);
        last = [t.clientX, t.clientY];
        this.pointerX = t.clientX / window.innerWidth;
      }
      e.preventDefault();
    }, { passive: false });
    const lookEnd = (e) => { for (const t of e.changedTouches) if (t.identifier === lookId) lookId = null; };
    look.addEventListener('touchend', lookEnd);
    look.addEventListener('touchcancel', lookEnd);

    const bind = (id, flag) => {
      const el = document.getElementById(id);
      el.addEventListener('touchstart', (e) => { this[flag] = true; e.preventDefault(); }, { passive: false });
    };
    bind('btnUse', 'use'); bind('btnAttack', 'attack'); bind('btnCycle', 'cycle'); bind('btnMenu', 'menu');
    // the breath minigame reads pointerX from the whole screen
    window.addEventListener('touchmove', (e) => { if (e.touches.length) this.pointerX = e.touches[e.touches.length - 1].clientX / window.innerWidth; }, { passive: true });
  }

  /** Call once per frame after reading: returns { move, look } and clears one-shot flags afterwards via consume(). */
  poll() {
    if (!this.touch) {
      let x = 0, y = 0;
      if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) y += 1;
      if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) y -= 1;
      if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1;
      if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1;
      const l = Math.hypot(x, y);
      this.move = l > 1 ? [x / l, y / l] : [x, y];
    }
    const look = [this.lookDelta[0] * this.sensitivity, this.lookDelta[1] * this.sensitivity];
    this.lookDelta[0] = 0; this.lookDelta[1] = 0;
    const out = { move: this.move, look, use: this.use, attack: this.attack, cycle: this.cycle, menu: this.menu, enabled: this.enabled };
    this.use = false; this.attack = false; this.cycle = false; this.menu = false;
    return out;
  }
}
