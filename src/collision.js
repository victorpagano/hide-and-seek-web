// Axis-aligned box world: a spatial hash over static AABBs, a stepping character mover
// (the CharacterController stand-in) and segment raycasts for line of sight.

const CELL = 4;

export class CollisionWorld {
  constructor() {
    this.boxes = [];          // { min:[x,y,z], max:[x,y,z], id }
    this.cells = new Map();   // "i,j" -> array of box indices
    this.stamp = new Int32Array(0);
    this.stampValue = 1;
  }

  addAABB(min, max, tag = null) {
    const id = this.boxes.length;
    this.boxes.push({ min, max, id, tag });
    this._insert(id);
    if (this.stamp.length < this.boxes.length) {
      const s = new Int32Array(this.boxes.length + 512);
      s.set(this.stamp);
      this.stamp = s;
    }
    return id;
  }
  addBox(c, s, tag) {
    return this.addAABB([c[0] - s[0] / 2, c[1] - s[1] / 2, c[2] - s[2] / 2], [c[0] + s[0] / 2, c[1] + s[1] / 2, c[2] + s[2] / 2], tag);
  }
  removeById(id) {
    const b = this.boxes[id];
    if (!b) return;
    this._forCells(b.min, b.max, (key) => {
      const arr = this.cells.get(key);
      if (!arr) return;
      const i = arr.indexOf(id);
      if (i >= 0) arr.splice(i, 1);
    });
    this.boxes[id] = null;
  }
  _forCells(min, max, fn) {
    const i0 = Math.floor(min[0] / CELL), i1 = Math.floor(max[0] / CELL);
    const j0 = Math.floor(min[2] / CELL), j1 = Math.floor(max[2] / CELL);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) fn(i + ',' + j);
  }
  _insert(id) {
    const b = this.boxes[id];
    this._forCells(b.min, b.max, (key) => {
      let arr = this.cells.get(key);
      if (!arr) { arr = []; this.cells.set(key, arr); }
      arr.push(id);
    });
  }

  /** Boxes overlapping the xz rect [minx,maxx]x[minz,maxz] and the y range [miny,maxy]. */
  query(minx, miny, minz, maxx, maxy, maxz, out = []) {
    out.length = 0;
    const stamp = ++this.stampValue;
    const i0 = Math.floor(minx / CELL), i1 = Math.floor(maxx / CELL);
    const j0 = Math.floor(minz / CELL), j1 = Math.floor(maxz / CELL);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const arr = this.cells.get(i + ',' + j);
      if (!arr) continue;
      for (let k = 0; k < arr.length; k++) {
        const id = arr[k];
        if (this.stamp[id] === stamp) continue;
        this.stamp[id] = stamp;
        const b = this.boxes[id];
        if (!b) continue;
        if (b.min[0] < maxx && b.max[0] > minx && b.min[1] < maxy && b.max[1] > miny && b.min[2] < maxz && b.max[2] > minz) out.push(b);
      }
    }
    return out;
  }

  /** Highest solid top at or below fromY (+0.1) under the point, or null. */
  groundAt(x, z, fromY, searchDown = 6) {
    const hits = this.query(x - 0.05, fromY - searchDown, z - 0.05, x + 0.05, fromY + 0.1, z + 0.05, this._tmp);
    let best = null;
    for (const b of hits) if (b.max[1] <= fromY + 0.1 && (best === null || b.max[1] > best)) best = b.max[1];
    return best;
  }

  /** Fraction along a->b of the first box hit (1 = clear). */
  rayT(a, b, ignoreTag = null) {
    const minx = Math.min(a[0], b[0]), maxx = Math.max(a[0], b[0]);
    const miny = Math.min(a[1], b[1]), maxy = Math.max(a[1], b[1]);
    const minz = Math.min(a[2], b[2]), maxz = Math.max(a[2], b[2]);
    const hits = this.query(minx, miny, minz, maxx, maxy, maxz, this._tmp2);
    const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
    let best = 1;
    for (const box of hits) {
      if (ignoreTag && box.tag === ignoreTag) continue;
      let t0 = 0, t1 = 1, ok = true;
      for (let axis = 0; axis < 3; axis++) {
        const d = axis === 0 ? dx : axis === 1 ? dy : dz;
        const o = a[axis];
        if (Math.abs(d) < 1e-9) { if (o < box.min[axis] || o > box.max[axis]) { ok = false; break; } continue; }
        let ta = (box.min[axis] - o) / d, tb = (box.max[axis] - o) / d;
        if (ta > tb) { const t = ta; ta = tb; tb = t; }
        if (ta > t0) t0 = ta;
        if (tb < t1) t1 = tb;
        if (t0 > t1) { ok = false; break; }
      }
      if (ok && t0 < best) best = t0;
    }
    return best;
  }

  /** Segment a->b blocked by any box? Slab test. */
  blocked(a, b, ignoreTag = null) {
    const minx = Math.min(a[0], b[0]), maxx = Math.max(a[0], b[0]);
    const miny = Math.min(a[1], b[1]), maxy = Math.max(a[1], b[1]);
    const minz = Math.min(a[2], b[2]), maxz = Math.max(a[2], b[2]);
    const hits = this.query(minx, miny, minz, maxx, maxy, maxz, this._tmp2);
    const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
    for (const box of hits) {
      if (ignoreTag && box.tag === ignoreTag) continue;
      let t0 = 0, t1 = 1;
      let ok = true;
      for (let axis = 0; axis < 3; axis++) {
        const d = axis === 0 ? dx : axis === 1 ? dy : dz;
        const o = a[axis];
        if (Math.abs(d) < 1e-9) { if (o < box.min[axis] || o > box.max[axis]) { ok = false; break; } continue; }
        let ta = (box.min[axis] - o) / d, tb = (box.max[axis] - o) / d;
        if (ta > tb) { const t = ta; ta = tb; tb = t; }
        if (ta > t0) t0 = ta;
        if (tb < t1) t1 = tb;
        if (t0 > t1) { ok = false; break; }
      }
      if (ok) return true;
    }
    return false;
  }

  /**
   * Move a standing box character (feet at pos, half width r, height h) by delta with step-up.
   * pos is mutated. Returns { grounded, blocked }.
   */
  moveCharacter(pos, vel, r, h, dt, step = 0.45, gravity = -20) {
    const skin = 0.02;
    let blocked = false;
    const tmp = this._tmp3;
    // horizontal axes one at a time
    for (const axis of [0, 2]) {
      const d = vel[axis] * dt;
      if (Math.abs(d) < 1e-7) continue;
      pos[axis] += d;
      for (let iter = 0; iter < 3; iter++) {
        const hits = this.query(pos[0] - r, pos[1] + skin, pos[2] - r, pos[0] + r, pos[1] + h, pos[2] + r, tmp);
        if (hits.length === 0) break;
        let lift = -1;
        let pushed = false;
        for (const b of hits) {
          const rise = b.max[1] - pos[1];
          if (rise > 0 && rise <= step) { if (rise > lift) lift = rise; continue; }
          // push back out along the axis
          pos[axis] = d > 0 ? b.min[axis] - r - skin : b.max[axis] + r + skin;
          pushed = true;
          blocked = true;
        }
        if (pushed) continue;
        if (lift > 0) {
          const ny = pos[1] + lift;
          const above = this.query(pos[0] - r, ny + skin, pos[2] - r, pos[0] + r, ny + h, pos[2] + r, this._tmp4);
          if (above.length === 0) { pos[1] = ny; break; }
          // cannot step: push out of the steppable boxes instead
          for (const b of hits) { pos[axis] = d > 0 ? b.min[axis] - r - skin : b.max[axis] + r + skin; }
          blocked = true;
        }
      }
    }
    // vertical
    vel[1] += gravity * dt;
    const dy = vel[1] * dt;
    pos[1] += dy;
    let grounded = false;
    const hits = this.query(pos[0] - r + 0.05, pos[1] - 0.01, pos[2] - r + 0.05, pos[0] + r - 0.05, pos[1] + h, pos[2] + r - 0.05, tmp);
    for (const b of hits) {
      if (dy <= 0 && b.max[1] >= pos[1] - 0.01 && b.max[1] <= pos[1] - dy + step) {
        pos[1] = b.max[1]; vel[1] = 0; grounded = true;
      } else if (dy > 0 && b.min[1] <= pos[1] + h && b.min[1] >= pos[1] + h - dy - 0.05) {
        pos[1] = b.min[1] - h - skin; vel[1] = 0;
      }
    }
    if (!grounded) {
      // sticky ground check so walking down stairs does not become a series of hops
      const g = this.groundAt(pos[0], pos[2], pos[1], 0.3);
      if (g !== null && pos[1] - g < 0.3 && vel[1] <= 0) { pos[1] = g; vel[1] = 0; grounded = true; }
    }
    return { grounded, blocked };
  }
}
CollisionWorld.prototype._tmp = [];
CollisionWorld.prototype._tmp2 = [];
CollisionWorld.prototype._tmp3 = [];
CollisionWorld.prototype._tmp4 = [];
