// Breath minigame (port of BreathMinigame): while hidden with the killer close, every ten
// seconds a short round where your bar dodges falling blocks. A hit = you gasp = a clue for him.
export class BreathMinigame {
  constructor(input, onResult) {
    this.input = input; this.onResult = onResult;
    this.el = document.getElementById('breath');
    this.canvas = this.el.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.active = false;
    this.nextAt = 0;
  }
  start() {
    this.active = true; this.el.hidden = false;
    this.t = 0; this.duration = 4.5; this.blocks = []; this.spawnAt = 0.3; this.failed = false;
    this.barX = 0.5; this.barW = 0.16;
  }
  finish(failed) {
    this.active = false; this.el.hidden = true;
    this.onResult(failed);
  }
  update(dt, lookX = 0) {
    if (!this.active) return;
    this.t += dt;
    const W = this.canvas.width, H = this.canvas.height;
    // the bar follows the pointer / finger / A-D
    let target = this.input.pointerX;
    if (!this.input.touch) {
      if (this.input.keys.has('KeyA') || this.input.keys.has('ArrowLeft')) this.barX -= dt * 1.4;
      if (this.input.keys.has('KeyD') || this.input.keys.has('ArrowRight')) this.barX += dt * 1.4;
      if (this.input.locked) this.barX += lookX * 0.7;
      else this.barX += (target - this.barX) * Math.min(1, dt * 14);
    } else this.barX += (target - this.barX) * Math.min(1, dt * 14);
    this.barX = Math.max(this.barW / 2, Math.min(1 - this.barW / 2, this.barX));
    if (this.t >= this.spawnAt && this.t < this.duration - 1.2) {
      this.spawnAt = this.t + 0.45 + Math.random() * 0.4;
      this.blocks.push({ x: Math.random(), y: -0.1, w: 0.1 + Math.random() * 0.12, v: 0.55 + Math.random() * 0.3 });
    }
    for (const b of this.blocks) b.y += b.v * dt;
    const barY = 0.84;
    for (const b of this.blocks) {
      if (b.y > barY - 0.1 && b.y < barY + 0.1 && Math.abs(b.x - this.barX) < (b.w + this.barW) / 2) { this.failed = true; }
    }
    this.blocks = this.blocks.filter(b => b.y < 1.2);
    // draw
    const g = this.ctx;
    g.clearRect(0, 0, W, H);
    g.fillStyle = 'rgba(255,255,255,0.06)';
    g.fillRect(0, 0, W * (1 - this.t / this.duration), 4);
    for (const b of this.blocks) { g.fillStyle = '#c8352c'; g.fillRect((b.x - b.w / 2) * W, b.y * H - 8, b.w * W, 16); }
    g.fillStyle = this.failed ? '#ff6f66' : '#efe6d8';
    g.fillRect((this.barX - this.barW / 2) * W, barY * H - 6, this.barW * W, 12);
    if (this.failed) this.finish(true);
    else if (this.t >= this.duration) this.finish(false);
  }
}
