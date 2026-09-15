// Walkability grid + A* — the NavMesh stand-in for the bots. Every 0.5 m column is sampled
// for standable box tops (with head clearance), neighbours connect when the height
// difference is a step (so stairs link the floors), and paths are string-pulled afterwards.

const CELL = 0.5;
const STEP = 0.45;
const BODY_R = 0.37; // a hair wider than the mover (0.35) so a path never hugs a jamb the body cannot pass
const BODY_H = 1.6;

export class NavGrid {
  constructor(world, bounds) {
    this.world = world;
    this.minx = bounds.minx; this.minz = bounds.minz;
    this.cols = Math.ceil((bounds.maxx - bounds.minx) / CELL);
    this.rows = Math.ceil((bounds.maxz - bounds.minz) / CELL);
    this.columns = new Array(this.cols * this.rows); // array of node ids per column
    this.nx = []; this.ny = []; this.nz = []; this.ncol = [];
    this.adj = [];
    this._build();
  }

  _build() {
    const w = this.world;
    const tmp = [];
    for (let j = 0; j < this.rows; j++) for (let i = 0; i < this.cols; i++) {
      const x = this.minx + (i + 0.5) * CELL, z = this.minz + (j + 0.5) * CELL;
      const hits = w.query(x - 0.05, -100, z - 0.05, x + 0.05, 100, z + 0.05, tmp);
      const tops = [];
      for (const b of hits) {
        if (Math.min(b.max[0] - b.min[0], b.max[2] - b.min[2]) < 0.35) continue; // thin things are not floors
        const top = b.max[1];
        if (!tops.some(t => Math.abs(t - top) < 0.05)) tops.push(top);
      }
      tops.sort((a, b) => a - b);
      let ids = null;
      for (const top of tops) {
        // head clearance; boxes that are merely a step up (the next stair tread) do not count
        const blockers = w.query(x - BODY_R, top + 0.06, z - BODY_R, x + BODY_R, top + BODY_H, z + BODY_R, []);
        if (blockers.some(b => b.max[1] > top + STEP)) continue;
        const id = this.nx.length;
        this.nx.push(x); this.ny.push(top); this.nz.push(z); this.ncol.push(j * this.cols + i);
        (ids || (ids = [])).push(id);
      }
      this.columns[j * this.cols + i] = ids;
    }
    // neighbours
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
    for (let id = 0; id < this.nx.length; id++) {
      const col = this.ncol[id], i = col % this.cols, j = (col - i) / this.cols, y = this.ny[id];
      const list = [];
      const pick = (di, dj) => {
        const ii = i + di, jj = j + dj;
        if (ii < 0 || jj < 0 || ii >= this.cols || jj >= this.rows) return -1;
        const ids = this.columns[jj * this.cols + ii];
        if (!ids) return -1;
        let best = -1, bd = STEP;
        for (const n of ids) { const d = Math.abs(this.ny[n] - y); if (d <= bd) { bd = d; best = n; } }
        return best;
      };
      for (let k = 0; k < 8; k++) {
        const [di, dj] = dirs[k];
        const n = pick(di, dj);
        if (n < 0) continue;
        if (k >= 4 && (pick(di, 0) < 0 || pick(0, dj) < 0)) continue; // no corner cutting
        list.push(n);
      }
      this.adj.push(list);
    }
    this.nodeCount = this.nx.length;
  }

  nearest(p, maxRadius = 2.5) {
    const i0 = Math.floor((p[0] - this.minx) / CELL), j0 = Math.floor((p[2] - this.minz) / CELL);
    const r = Math.ceil(maxRadius / CELL);
    let best = -1, bd = Infinity;
    for (let j = j0 - r; j <= j0 + r; j++) for (let i = i0 - r; i <= i0 + r; i++) {
      if (i < 0 || j < 0 || i >= this.cols || j >= this.rows) continue;
      const ids = this.columns[j * this.cols + i];
      if (!ids) continue;
      for (const n of ids) {
        const dx = this.nx[n] - p[0], dz = this.nz[n] - p[2], dy = this.ny[n] - p[1];
        const d = dx * dx + dz * dz + dy * dy * 4;
        if (d < bd) { bd = d; best = n; }
      }
    }
    return best;
  }

  /** A* from world point a to b. Returns an array of [x,y,z] (excluding the start) or null. */
  findPath(a, b) {
    const s = this.nearest(a), g = this.nearest(b);
    if (s < 0 || g < 0) return null;
    if (s === g) return [[this.nx[g], this.ny[g], this.nz[g]]];
    const N = this.nodeCount;
    const gScore = this._g || (this._g = new Float32Array(N));
    const came = this._came || (this._came = new Int32Array(N));
    const closed = this._closed || (this._closed = new Uint8Array(N));
    const stamp = this._stampArr || (this._stampArr = new Int32Array(N));
    const st = (this._stamp = (this._stamp || 0) + 1);
    const gx = this.nx[g], gy = this.ny[g], gz = this.nz[g];
    const h = (n) => { const dx = Math.abs(this.nx[n] - gx), dz = Math.abs(this.nz[n] - gz); return Math.max(dx, dz) + 0.41 * Math.min(dx, dz) + Math.abs(this.ny[n] - gy) * 2; };
    const open = new Heap();
    stamp[s] = st; gScore[s] = 0; came[s] = -1; closed[s] = 0;
    open.push(s, h(s));
    let found = false, expanded = 0;
    while (open.size > 0) {
      const cur = open.pop();
      if (cur === g) { found = true; break; }
      if (closed[cur] === st) continue;
      closed[cur] = st;
      if (++expanded > 60000) break;
      const cy = this.ny[cur];
      for (const n of this.adj[cur]) {
        if (closed[n] === st) continue;
        const dx = this.nx[n] - this.nx[cur], dz = this.nz[n] - this.nz[cur];
        const cost = Math.hypot(dx, dz) + Math.abs(this.ny[n] - cy) * 1.5;
        const ng = gScore[cur] + cost;
        if (stamp[n] !== st || ng < gScore[n]) {
          stamp[n] = st; gScore[n] = ng; came[n] = cur; closed[n] = 0;
          open.push(n, ng + h(n));
        }
      }
    }
    if (!found) return null;
    const ids = [];
    for (let n = g; n !== -1; n = came[n]) ids.push(n);
    ids.reverse();
    return this._smooth(ids);
  }

  _smooth(ids) {
    const pts = ids.map(n => [this.nx[n], this.ny[n], this.nz[n]]);
    const out = [];
    let i = 0;
    while (i < pts.length - 1) {
      let j = pts.length - 1;
      while (j > i + 1 && !this._clear(pts[i], pts[j])) j--;
      out.push(pts[j]);
      i = j;
    }
    return out.length ? out : [pts[pts.length - 1]];
  }

  /** Straight walk from a to b stays on connected nodes of similar height? */
  _clear(a, b) {
    const dx = b[0] - a[0], dz = b[2] - a[2], dy = b[1] - a[1];
    const len = Math.hypot(dx, dz);
    if (Math.abs(dy) > STEP && len > 0.01) return false; // stairs: keep the grid's own route
    const steps = Math.ceil(len / 0.25);
    let prevY = a[1];
    for (let k = 1; k <= steps; k++) {
      const t = k / steps, x = a[0] + dx * t, z = a[2] + dz * t;
      const i = Math.floor((x - this.minx) / CELL), j = Math.floor((z - this.minz) / CELL);
      if (i < 0 || j < 0 || i >= this.cols || j >= this.rows) return false;
      const ids = this.columns[j * this.cols + i];
      if (!ids) return false;
      let ok = false, y = prevY;
      for (const n of ids) if (Math.abs(this.ny[n] - prevY) <= STEP) { ok = true; y = this.ny[n]; break; }
      if (!ok) return false;
      // keep clear of walls: the body must fit (cells next to walls exist, so also probe the side offsets)
      const px = -dz / len * BODY_R, pz = dx / len * BODY_R;
      if (!this._hasNodeNear(x + px, z + pz, y) || !this._hasNodeNear(x - px, z - pz, y)) return false;
      prevY = y;
    }
    return true;
  }
  _hasNodeNear(x, z, y) {
    const i = Math.floor((x - this.minx) / CELL), j = Math.floor((z - this.minz) / CELL);
    if (i < 0 || j < 0 || i >= this.cols || j >= this.rows) return false;
    const ids = this.columns[j * this.cols + i];
    if (!ids) return false;
    for (const n of ids) if (Math.abs(this.ny[n] - y) <= STEP) return true;
    return false;
  }

  /** A random walkable point within radius of p (same-ish floor), or null. */
  randomNear(p, radius, rng = Math.random) {
    for (let tries = 0; tries < 12; tries++) {
      const ang = rng() * Math.PI * 2, r = radius * (0.4 + 0.6 * rng());
      const n = this.nearest([p[0] + Math.cos(ang) * r, p[1], p[2] + Math.sin(ang) * r], 1.2);
      if (n >= 0 && Math.abs(this.ny[n] - p[1]) < 1.5) return [this.nx[n], this.ny[n], this.nz[n]];
    }
    return null;
  }
  node(n) { return [this.nx[n], this.ny[n], this.nz[n]]; }
}

class Heap {
  constructor() { this.items = []; this.keys = []; }
  get size() { return this.items.length; }
  push(item, key) {
    const items = this.items, keys = this.keys;
    items.push(item); keys.push(key);
    let i = items.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (keys[p] <= keys[i]) break;
      [items[p], items[i]] = [items[i], items[p]]; [keys[p], keys[i]] = [keys[i], keys[p]];
      i = p;
    }
  }
  pop() {
    const items = this.items, keys = this.keys;
    const top = items[0];
    const last = items.pop(), lastKey = keys.pop();
    if (items.length > 0) {
      items[0] = last; keys[0] = lastKey;
      let i = 0;
      for (;;) {
        const l = 2 * i + 1, r = l + 1;
        let m = i;
        if (l < items.length && keys[l] < keys[m]) m = l;
        if (r < items.length && keys[r] < keys[m]) m = r;
        if (m === i) break;
        [items[m], items[i]] = [items[i], items[m]]; [keys[m], keys[i]] = [keys[i], keys[m]];
        i = m;
      }
    }
    return top;
  }
}
