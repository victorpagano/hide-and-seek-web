// The slasher house, ported from Unity's SlasherHouseBuilder / HideAndSeekHouseDetailer /
// HideAndSeekBuilder. Everything is authored in PLAN units (x 0..32 east, z 0..24 north,
// front door faces -z) stretched by S in x/z, metres in y, exactly like the C#. The builder
// works in Unity house-local metres and the world conversion happens once at the end
// (three.js is right handed, so plan north becomes world -z).
//
// Output: boxes (static geometry + collision), covers (movable door leaves / curtains / lids),
// spots (hiding spots), rooms (search rooms), lights, points (spawns, cameras, paths).

export const S = 1.3;
export const PLAN_W = 32, PLAN_D = 24;
export const W = PLAN_W * S, D = PLAN_D * S;
export const H = 4, T = 0.25, SLAB = 0.25, GROUND = -0.6;
export const DOOR_H = 2.6, DOOR_W = 1.6, ARCH_H = 3.2, WIN_W = 2, SILL_H = 1;
export const STEP_H = 0.2, STEP_D = 0.32, STAIR_W = 2.6, RAIL_H = 1.1, FENCE_H = 2.2;
export const ORIGIN = { x: 8, y: 0.6, z: -10 };
export const UP = H, ATTIC = 2 * H, CELLAR = -H, YARD = GROUND;

export const LOT = { x0: -2.3, z0: -18, x1: 46, z1: 40 };
export const DRIVEWAY = { x0: 36.5, z0: -18, x1: 41.5, z1: 26 };
export const GARAGE = { x0: 34, z0: 26, x1: 44, z1: 34 };

// Blockout tints (BO_*.mat _BaseColor) and the hide-and-seek extras.
export const C = {
  wall: [0.74, 0.72, 0.68], floor: [0.42, 0.40, 0.38], wood: [0.42, 0.27, 0.16], woodLight: [0.63, 0.48, 0.31],
  dark: [0.07, 0.07, 0.08], metal: [0.62, 0.64, 0.67], fabric: [0.33, 0.36, 0.43], porcelain: [0.92, 0.92, 0.9],
  accent: [0.48, 0.22, 0.22], grass: [0.36, 0.52, 0.30], roof: [0.22, 0.20, 0.22], concrete: [0.42, 0.42, 0.42],
  drape: [0.45, 0.14, 0.16], leaf: [0.22, 0.4, 0.2], plastic: [0.2, 0.28, 0.24], paper: [0.78, 0.72, 0.58],
  rug: [0.35, 0.25, 0.22], tile: [0.7, 0.82, 0.85], sheet: [0.82, 0.8, 0.74], tarp: [0.2, 0.3, 0.42],
  slat: [0.62, 0.64, 0.67], lattice: [0.55, 0.42, 0.28],
};

// ---------------------------------------------------------------- vector helpers (Unity-local metres)
const v3 = (x, y, z) => ({ x, y, z });
const add = (a, b) => v3(a.x + b.x, a.y + b.y, a.z + b.z);
const mul = (a, k) => v3(a.x * k, a.y * k, a.z * k);
const FWD = v3(0, 0, 1), BACK = v3(0, 0, -1), LEFT = v3(-1, 0, 0), RIGHT = v3(1, 0, 0);
export const plan = (x, y, z) => v3(x * S, y, z * S);

// Local frame for a pivot whose local +z points along `fwd` (axis aligned) - mirrors Quaternion.LookRotation(fwd, up).
function frame(fwd) {
  const right = v3(fwd.z, 0, -fwd.x); // Unity: right = up x forward for LookRotation
  return { fwd, right, up: v3(0, 1, 0) };
}
function local(fr, c, lx, ly, lz) {
  return add(c, add(add(mul(fr.right, lx), mul(fr.up, ly)), mul(fr.fwd, lz)));
}
function localSize(fr, w, h, d) {
  return Math.abs(fr.fwd.x) > 0.5 ? v3(d, h, w) : v3(w, h, d);
}

// ---------------------------------------------------------------- builder
class Builder {
  constructor() {
    this.boxes = [];   // { shape, c, s, color, solid, rotX, name }
    this.covers = [];  // { id, name, parts:[{c,s,color,shape}] relative to pivot, pivot, hinge:{axis,open}, slide:{open} }
    this.spots = [];   // { id, key, label, room, entry, hidden, dir, pose, eye, coverId }
    this.rooms = [];
    this.lights = [];
    this.points = {};
    this.removed = new Set();
  }
  box(name, c, s, color, opts = {}) {
    const b = { name, shape: opts.shape || 'box', c, s, color, solid: opts.solid !== false, rotX: opts.rotX || 0 };
    this.boxes.push(b);
    return b;
  }
  prop(name, p, y, s, color, opts) { return this.box(name, plan(p[0], y, p[1]), s, color, opts); }
  remove(name) {
    const i = this.boxes.findIndex(b => b.name === name);
    if (i >= 0) this.boxes.splice(i, 1);
  }
  legs(name, c, y0, height, width, depth, color) {
    for (const sx of [-1, 1]) for (const sz of [-1, 1])
      this.box(name + '_Leg', v3(c.x + sx * (width / 2 - 0.08), y0 + height / 2, c.z + sz * (depth / 2 - 0.08)), v3(0.12, height, 0.12), color);
  }
  bed(name, p, y0, size, color) {
    const clearance = 0.45, c = plan(p[0], 0, p[1]);
    const mattress = Math.max(0.35, size.y - clearance);
    this.box(name, v3(c.x, y0 + clearance + mattress / 2, c.z), v3(size.x, mattress, size.z), color);
    this.box(name + '_Frame', v3(c.x, y0 + clearance - 0.04, c.z), v3(size.x + 0.1, 0.08, size.z + 0.1), C.wood);
    this.legs(name, c, y0, clearance, size.x, size.z, C.dark);
    this.box(name + '_Head', v3(c.x, y0 + 0.6, c.z - size.z / 2 - 0.09), v3(size.x + 0.1, 1.2, 0.08), C.wood);
  }
  table(name, p, y0, size, color, top = 0.1) {
    const c = plan(p[0], 0, p[1]);
    this.box(name, v3(c.x, y0 + size.y - top / 2, c.z), v3(size.x, top, size.z), color);
    this.legs(name, c, y0, size.y - top, size.x, size.z, color);
  }
  basin(name, p, y0, size, color) {
    const c = plan(p[0], 0, p[1]), t = 0.08;
    this.box(name, v3(c.x, y0 + t / 2, c.z), v3(size.x, t, size.z), color);
    this.box(name + '_W', v3(c.x - size.x / 2 + t / 2, y0 + size.y / 2, c.z), v3(t, size.y, size.z), color);
    this.box(name + '_E', v3(c.x + size.x / 2 - t / 2, y0 + size.y / 2, c.z), v3(t, size.y, size.z), color);
    this.box(name + '_S', v3(c.x, y0 + size.y / 2, c.z - size.z / 2 + t / 2), v3(size.x, size.y, t), color);
    this.box(name + '_N', v3(c.x, y0 + size.y / 2, c.z + size.z / 2 - t / 2), v3(size.x, size.y, t), color);
  }
  /** Axis-aligned wall from plan a to b with openings { at, width (m), bottom, top }. */
  wall(name, a, b, y0, height, color, ...openings) {
    const ax = a[0] * S, az = a[1] * S, bx = b[0] * S, bz = b[1] * S;
    const dx = bx - ax, dz = bz - az, length = Math.hypot(dx, dz), ux = dx / length, uz = dz / length;
    const segment = (from, to, yb, yt, label) => {
      if (to - from < 0.01 || yt - yb < 0.01) return;
      const mx = ax + ux * (from + to) / 2, mz = az + uz * (from + to) / 2;
      const s = v3(Math.abs(ux) * (to - from) + Math.abs(uz) * T, yt - yb, Math.abs(uz) * (to - from) + Math.abs(ux) * T);
      this.box(name + '_' + label, v3(mx, (yb + yt) / 2, mz), s, color);
    };
    const alongX = Math.abs(ux) > 0.5;
    const axisStart = alongX ? ax : az, sign = alongX ? Math.sign(ux) : Math.sign(uz);
    let cursor = 0, n = 0;
    const sorted = openings.slice().sort((p, q) => (p.at * S - axisStart) * sign - (q.at * S - axisStart) * sign);
    for (const o of sorted) {
      const along = (o.at * S - axisStart) * sign;
      const start = along - o.width / 2, end = along + o.width / 2;
      segment(cursor, start, y0, y0 + height, 'S' + n);
      segment(start, end, y0, y0 + o.bottom, 'Sill' + n);
      segment(start, end, y0 + o.top, y0 + height, 'Hdr' + n);
      cursor = end; n++;
    }
    segment(cursor, length, y0, y0 + height, 'S' + n);
  }
  rail(name, a, b, y0) {
    const ax = a[0] * S, az = a[1] * S, bx = b[0] * S, bz = b[1] * S;
    this.box(name, v3((ax + bx) / 2, y0 + RAIL_H / 2, (az + bz) / 2), v3(Math.max(Math.abs(bx - ax), 0.1), RAIL_H, Math.max(Math.abs(bz - az), 0.1)), C.wood);
  }
  /** Slab whose top is at topY covering a plan rect [x0,z0,x1,z1] minus plan holes. */
  floor(name, area, topY, thickness, color, ...holes) {
    const sc = r => ({ x0: r[0] * S, z0: r[1] * S, x1: r[2] * S, z1: r[3] * S });
    const pieces = [];
    split(sc(area), holes.map(sc), 0, pieces);
    pieces.forEach((r, i) => this.box(name + '_' + i, v3((r.x0 + r.x1) / 2, topY - thickness / 2, (r.z0 + r.z1) / 2), v3(r.x1 - r.x0, thickness, r.z1 - r.z0), color));
  }
  stairs(name, foot, y0, dir, width, rise, color, stepH = STEP_H, stepD = STEP_D) {
    const bottom = plan(foot[0], y0, foot[1]);
    width *= S; stepD *= S;
    const steps = Math.round(rise / stepH);
    for (let i = 0; i < steps; i++) {
      const h = (i + 1) * stepH;
      const centre = add(add(bottom, mul(dir, (i + 0.5) * stepD)), v3(0, h / 2, 0));
      const size = v3(Math.abs(dir.x) * stepD + Math.abs(dir.z) * width, h, Math.abs(dir.z) * stepD + Math.abs(dir.x) * width);
      this.box(name + '_' + i, centre, size, color);
    }
  }
  light(name, p, y, color, range, intensity = 1.8) {
    this.lights.push({ name, p: plan(p[0], y, p[1]), color, range: range * S, intensity });
  }
  room(name, x0, x1, z0, z1, floorY, scanX, scanZ) {
    this.rooms.push({ name, min: plan(x0, floorY - 0.3, z0), max: plan(x1, floorY + 3.2, z1), scan: plan(scanX, floorY, scanZ), floorY });
  }
  chair(name, p, y, color, armchair) {
    const c = plan(p[0], 0, p[1]);
    this.box(name + '_Seat', v3(c.x, y + 0.42, c.z), v3(armchair ? 0.9 : 0.5, 0.12, armchair ? 0.9 : 0.5), color);
    this.box(name + '_Back', v3(c.x, y + 0.75, c.z - (armchair ? 0.38 : 0.2)), v3(armchair ? 0.9 : 0.5, 0.7, 0.12), color);
    if (armchair) for (const sx of [-1, 1]) this.box(name + '_Arm', v3(c.x + sx * 0.4, y + 0.55, c.z), v3(0.12, 0.6, 0.9), color);
    else this.legs(name, c, y, 0.36, 0.5, 0.5, color);
  }
  rug(name, p, y, size) { this.box(name, plan(p[0], y + 0.01, p[1]), v3(size[0], 0.02, size[1]), C.rug, { solid: false }); }
  picture(name, p, y, facing, size) {
    const c = plan(p[0], y, p[1]);
    const s = Math.abs(facing.x) > 0.5 ? v3(0.04, size[1], size[0]) : v3(size[0], size[1], 0.04);
    this.box(name, c, s, C.accent, { solid: false });
  }
  lamp(name, p, y, height = 1.6) {
    const c = plan(p[0], 0, p[1]);
    this.box(name + '_Pole', v3(c.x, y + height / 2, c.z), v3(0.06, height, 0.06), C.metal, { shape: 'cyl' });
    this.box(name + '_Shade', v3(c.x, y + height, c.z), v3(0.36, 0.28, 0.36), C.paper, { shape: 'cyl', solid: false });
  }
  nightstands(tag, bed, y, bedWidth) {
    for (const sx of [-1, 1]) {
      const c = plan(bed[0], 0, bed[1]);
      this.box('Nightstand_' + tag, v3(c.x + sx * (bedWidth / 2 + 0.35), y + 0.28, c.z - 0.6), v3(0.5, 0.56, 0.45), C.wood);
    }
  }

  // ------------------------------------------------------------ covers + spots
  cover(name, pivot, fr, parts, motion) {
    const id = this.covers.length;
    // parts are given in pivot-local (lx, ly, lz, w, h, d, color): stored as local offsets so the renderer can pose them.
    this.covers.push({ id, name, pivot, fwd: fr.fwd, parts, motion });
    return id;
  }
  spot(key, label, room, entry, hidden, dir, pose, coverId, eye) {
    const id = this.spots.length;
    this.spots.push({ id, key, label, room, entry, hidden, dir, pose, coverId, eye: eye ?? (pose === 'lie' ? 0.35 : pose === 'crouch' ? 0.85 : 1.5) });
  }

  /** Enclosed closet: back, sides, top, plinth, two louvred leaves that swing open. Local +z = open front. */
  closet(name, p, y0, size, open, label, room, louvered = true) {
    const fr = frame(open), c = plan(p[0], y0, p[1]), t = 0.06, [w, h, d] = [size.x, size.y, size.z];
    const color = C.woodLight;
    this.box(name + '_Back', local(fr, c, 0, h / 2, -d / 2 + t / 2), localSize(fr, w, h, t), color);
    this.box(name + '_L', local(fr, c, -w / 2 + t / 2, h / 2, 0), localSize(fr, t, h, d), color);
    this.box(name + '_R', local(fr, c, w / 2 - t / 2, h / 2, 0), localSize(fr, t, h, d), color);
    this.box(name + '_Top', local(fr, c, 0, h - t / 2, 0), localSize(fr, w, t, d), color, { solid: false });
    this.box(name + '_Plinth', local(fr, c, 0, 0.05, 0), localSize(fr, w, 0.1, d), color, { solid: false });
    const parts = [];
    for (const side of [-1, 1]) {
      // each leaf hangs from the front corner and covers half the opening
      parts.push({ hinge: [side * (w / 2 - t / 2), 0, d / 2], leaf: [-side * (w / 4 - t / 2), h / 2 + 0.03, 0, w / 2 - t, h - 0.1, 0.035], color: C.wood, slats: louvered, openAngle: -side * 1.75 });
    }
    const coverId = this.cover(name + '_Doors', c, fr, parts, 'hinge');
    this.spot(name, label, room, local(fr, c, 0, 0, d / 2 + 0.75), local(fr, c, 0, 0, -0.05), fr.fwd, 'stand', coverId);
  }
  /** Curtains 2.5 m wide standing 0.55 m off the wall with returns; the panel slides aside when checked. */
  drape(name, wallP, y0, into, room) {
    const fr = frame(into), c = plan(wallP[0], y0, wallP[1]);
    const w = 2.5, h = 2.85, depth = 0.55, t = 0.035, wallFace = T / 2;
    this.box(name + '_Rod', local(fr, c, 0, h + 0.08, depth), localSize(fr, w + 0.2, 0.05, 0.05), C.metal, { solid: false, shape: 'cyl' });
    for (const side of [-1, 1]) this.box(name + '_Return', local(fr, c, side * (w / 2 - t / 2), h / 2, depth / 2 + wallFace / 2), localSize(fr, t, h, depth - wallFace), C.drape, { solid: false });
    this.box(name + '_Net', local(fr, c, 0, 1.8, wallFace + 0.02), localSize(fr, w, 1.7, 0.02), C.sheet, { solid: false });
    const coverId = this.cover(name + '_Panel', c, fr, [{ hinge: [0, 0, depth], leaf: [0, h / 2, 0, w, h, t], color: C.drape }], 'slide');
    this.spot(name, 'hide behind the curtains', room, local(fr, c, 0, 0, depth + 0.7), local(fr, c, 0, 0, wallFace + (depth - wallFace) / 2), fr.fwd, 'stand', coverId);
  }
  /** Skirt panels under a bed down to 10 cm off the floor; you lie under the mattress. */
  bedSkirt(bed, p, y0, entry, room) {
    const c = plan(p[0], y0, p[1]), hem = 0.10, top = 0.41, bw = 2.2, bd = 1.8;
    const ph = top - hem, py = y0 + hem + ph / 2;
    this.box(bed + '_SkirtW', v3(c.x - bw / 2, py, c.z), v3(0.02, ph, bd), C.sheet, { solid: false });
    this.box(bed + '_SkirtE', v3(c.x + bw / 2, py, c.z), v3(0.02, ph, bd), C.sheet, { solid: false });
    this.box(bed + '_SkirtS', v3(c.x, py, c.z - bd / 2), v3(bw, ph, 0.02), C.sheet, { solid: false });
    this.box(bed + '_SkirtN', v3(c.x, py, c.z + bd / 2), v3(bw, ph, 0.02), C.sheet, { solid: false });
    const e = plan(entry[0], y0, entry[1]);
    const dir = norm(v3(e.x - c.x, 0, e.z - c.z));
    this.spot(bed, 'hide under the bed', room, e, c, dir, 'lie', -1, 0.3);
  }
  /** Apron panels hanging from a table top to 12 cm off the floor. */
  tableApron(table, p, y0, size, top, entry, label, room, color) {
    const c = plan(p[0], y0, p[1]), hem = 0.12, bottom = y0 + hem, topY = y0 + size.y - top + 0.04;
    const ph = topY - bottom, py = (topY + bottom) / 2;
    this.box(table + '_ApronW', v3(c.x - size.x / 2, py, c.z), v3(0.02, ph, size.z), color, { solid: false });
    this.box(table + '_ApronE', v3(c.x + size.x / 2, py, c.z), v3(0.02, ph, size.z), color, { solid: false });
    this.box(table + '_ApronS', v3(c.x, py, c.z - size.z / 2), v3(size.x, ph, 0.02), color, { solid: false });
    this.box(table + '_ApronN', v3(c.x, py, c.z + size.z / 2), v3(size.x, ph, 0.02), color, { solid: false });
    const e = plan(entry[0], y0, entry[1]);
    this.spot(table, label, room, e, c, norm(v3(e.x - c.x, 0, e.z - c.z)), 'lie', -1, 0.3);
  }
  /** Cabinet panels on three sides of the island, a curtain across the entry side. */
  islandPanels(island, p, y0, size, entry, room) {
    const c = plan(p[0], y0, p[1]), e = plan(entry[0], y0, entry[1]);
    const fr = frame(norm(v3(e.x - c.x, 0, e.z - c.z)));
    const w = Math.abs(fr.fwd.x) > 0.5 ? size.z : size.x, d = Math.abs(fr.fwd.x) > 0.5 ? size.x : size.z, h = size.y - 0.1, t = 0.03;
    this.box(island + '_PanelBack', local(fr, c, 0, h / 2, -d / 2), localSize(fr, w, h, t), C.woodLight, { solid: false });
    this.box(island + '_PanelL', local(fr, c, -w / 2, h / 2, 0), localSize(fr, t, h, d), C.woodLight, { solid: false });
    this.box(island + '_PanelR', local(fr, c, w / 2, h / 2, 0), localSize(fr, t, h, d), C.woodLight, { solid: false });
    const coverId = this.cover(island + '_Curtain', c, fr, [{ hinge: [0, 0, d / 2], leaf: [0, h / 2, 0, w, h - 0.05, t], color: C.sheet }], 'slide');
    this.spot(island, 'hide under the island', room, local(fr, c, 0, 0, d / 2 + 0.8), c, fr.fwd, 'lie', coverId, 0.3);
  }
  deskPanels(desk, p, y0, size, entry, room) {
    const c = plan(p[0], y0, p[1]), e = plan(entry[0], y0, entry[1]);
    const fr = frame(norm(v3(e.x - c.x, 0, e.z - c.z)));
    const w = size.x, d = size.z, h = size.y - 0.1, t = 0.03;
    this.box(desk + '_Modesty', local(fr, c, 0, h / 2, -d / 2), localSize(fr, w, h, t), C.wood, { solid: false });
    this.box(desk + '_SideL', local(fr, c, -w / 2, h / 2, 0), localSize(fr, t, h, d), C.wood, { solid: false });
    this.box(desk + '_SideR', local(fr, c, w / 2, h / 2, 0), localSize(fr, t, h, d), C.wood, { solid: false });
    this.spot(desk, 'hide under the desk', room, local(fr, c, 0, 0, d / 2 + 0.7), local(fr, c, -0.2, 0, 0), fr.fwd, 'lie', -1, 0.3);
  }
  /** Wardrobe you can stand in with a single door that shuts. size = (width, height, depth), open = world dir. */
  wardrobe(name, p, y0, size, open, label, room, color = C.dark) {
    const fr = frame(open), c = plan(p[0], y0, p[1]), t = 0.06, [w, h, d] = [size.x, size.y, size.z];
    this.box(name + '_Back', local(fr, c, 0, h / 2, -d / 2 + t / 2), localSize(fr, w, h, t), color);
    this.box(name + '_L', local(fr, c, -w / 2 + t / 2, h / 2, 0), localSize(fr, t, h, d), color);
    this.box(name + '_R', local(fr, c, w / 2 - t / 2, h / 2, 0), localSize(fr, t, h, d), color);
    this.box(name + '_Top', local(fr, c, 0, h - t / 2, 0), localSize(fr, w, t, d), color, { solid: false });
    this.box(name + '_Plinth', local(fr, c, 0, 0.05, 0), localSize(fr, w, 0.1, d), color, { solid: false });
    const coverId = this.cover(name + '_Door', c, fr, [{ hinge: [-w / 2 + t / 2, 0, d / 2], leaf: [w / 2 - t / 2, h / 2 + 0.03, 0, w - t, h - 0.1, 0.035], color: C.wood, openAngle: 1.75 }], 'hinge');
    this.spot(name, label, room, local(fr, c, 0, 0, d / 2 + 0.75), local(fr, c, 0, 0, -0.05), fr.fwd, 'stand', coverId);
  }
  /** Tiled stall around an existing tub with a curtain across the open side. */
  showerStall(tub, p, y0, size, open, entry, label, room) {
    const fr = frame(open), c = plan(p[0], y0, p[1]), top = 2.1, t = 0.04;
    const w = Math.abs(fr.fwd.x) > 0.5 ? size.z : size.x, d = Math.abs(fr.fwd.x) > 0.5 ? size.x : size.z;
    this.box(tub + '_StallBack', local(fr, c, 0, top / 2, -d / 2 - 0.05), localSize(fr, w + 0.2, top, t), C.tile);
    this.box(tub + '_StallL', local(fr, c, -w / 2 - 0.05, top / 2, 0), localSize(fr, t, top, d + 0.1), C.tile);
    this.box(tub + '_StallR', local(fr, c, w / 2 + 0.05, top / 2, 0), localSize(fr, t, top, d + 0.1), C.tile);
    this.box(tub + '_StallRod', local(fr, c, 0, top, d / 2 + 0.05), localSize(fr, w + 0.2, 0.04, 0.04), C.metal, { solid: false, shape: 'cyl' });
    const coverId = this.cover(tub + '_Curtain', c, fr, [{ hinge: [0, 0, d / 2 + 0.05], leaf: [0, top / 2 + 0.02, 0, w + 0.2, top - 0.08, 0.02], color: C.plastic }], 'slide');
    const e = plan(entry[0], y0, entry[1]);
    this.spot(tub, label, room, e, add(c, v3(0, 0.08, 0)), fr.fwd, 'lie', coverId, 0.5);
  }
  /** Lid hinged along the back edge of an existing basin. */
  freezerLid(freezer, p, y0, size, entry, label, room) {
    const c = plan(p[0], y0, p[1]), e = plan(entry[0], y0, entry[1]);
    const fr = frame(norm(v3(e.x - c.x, 0, e.z - c.z)));
    const w = Math.abs(fr.fwd.x) > 0.5 ? size.z : size.x, d = Math.abs(fr.fwd.x) > 0.5 ? size.x : size.z;
    const coverId = this.cover(freezer + '_Lid', c, fr, [{ hinge: [0, size.y, -d / 2], leaf: [0, 0.03, d / 2, w, 0.06, d], color: C.metal, openAngle: -1.3, axis: 'x' }], 'lid');
    this.spot(freezer, label, room, e, add(c, v3(0, 0.08, 0)), fr.fwd, 'lie', coverId, 0.5);
  }
  /** Box with a lid hinged along the far edge. Local +z = toward the entry. */
  chest(name, p, y0, size, color, entry, label, room) {
    const c = plan(p[0], y0, p[1]), e = plan(entry[0], y0, entry[1]);
    const fr = frame(norm(v3(e.x - c.x, 0, e.z - c.z))), t = 0.05;
    const w = Math.abs(fr.fwd.x) > 0.5 ? size.z : size.x, d = Math.abs(fr.fwd.x) > 0.5 ? size.x : size.z, h = size.y;
    this.box(name + '_Floor', local(fr, c, 0, t / 2, 0), localSize(fr, w, t, d), color);
    this.box(name + '_Back', local(fr, c, 0, h / 2, -d / 2 + t / 2), localSize(fr, w, h, t), color);
    this.box(name + '_Front', local(fr, c, 0, h / 2, d / 2 - t / 2), localSize(fr, w, h, t), color);
    this.box(name + '_L', local(fr, c, -w / 2 + t / 2, h / 2, 0), localSize(fr, t, h, d), color);
    this.box(name + '_R', local(fr, c, w / 2 - t / 2, h / 2, 0), localSize(fr, t, h, d), color);
    const coverId = this.cover(name + '_Lid', c, fr, [{ hinge: [0, h, -d / 2], leaf: [0, 0.03, d / 2, w, 0.06, d], color: C.wood, openAngle: -1.4, axis: 'x' }], 'lid');
    this.spot(name, label, room, e, add(c, v3(0, 0.06, 0)), fr.fwd, 'lie', coverId, 0.45);
  }
  /** Bar counter along x with a gap behind it against the wall. */
  bar(name, p, y0, room) {
    const c = plan(p[0], y0, p[1]), fr = frame(FWD), w = 3.2;
    this.box(name + '_Counter', local(fr, c, 0, 0.55, -0.35), localSize(fr, w, 1.1, 0.5), C.wood);
    this.box(name + '_Worktop', local(fr, c, 0, 1.12, -0.1), localSize(fr, w + 0.1, 0.05, 1.0), C.dark, { solid: false });
    this.box(name + '_ShelfBack', local(fr, c, 0, 0.9, 1.05), localSize(fr, w, 1.8, 0.3), C.woodLight);
    for (let i = 0; i < 3; i++) this.box(name + '_Stool', local(fr, c, -1 + i, 0.35, -0.9), v3(0.35, 0.7, 0.35), C.dark, { shape: 'cyl' });
    this.spot(name, 'hide behind the bar', room, local(fr, c, 1.9, 0, 0.15), local(fr, c, -0.3, 0, 0.2), v3(1, 0, 0), 'crouch', -1, 0.85);
  }
  locker(name, p, y0, label, room) {
    const w = 0.7, h = 2, d = 0.65;
    this.closet(name, p, y0, v3(w, h, d), FWD, label, room, false);
  }
  /** Tarp hanging over the open side of an existing workbench. */
  workbenchTarp(bench, p, y0, size, open, label, room) {
    const fr = frame(open), c = plan(p[0], y0, p[1]), t = 0.02;
    const w = Math.abs(fr.fwd.x) > 0.5 ? size.z : size.x, d = Math.abs(fr.fwd.x) > 0.5 ? size.x : size.z, h = size.y - 0.08;
    this.box(bench + '_TarpBack', local(fr, c, 0, h / 2, -d / 2), localSize(fr, w, h, t), C.tarp, { solid: false });
    this.box(bench + '_TarpL', local(fr, c, -w / 2, h / 2, 0), localSize(fr, t, h, d), C.tarp, { solid: false });
    this.box(bench + '_TarpR', local(fr, c, w / 2, h / 2, 0), localSize(fr, t, h, d), C.tarp, { solid: false });
    const coverId = this.cover(bench + '_Tarp', c, fr, [{ hinge: [0, h, d / 2], leaf: [0, -h / 2, 0, w, h, t], color: C.tarp, openAngle: -1.2, axis: 'x' }], 'lid');
    this.spot(bench, label, room, local(fr, c, 0, 0, d / 2 + 0.75), local(fr, c, 0, 0, -0.05), fr.fwd, 'lie', coverId, 0.3);
  }
  crateFort(y0) {
    for (const n of ['OldCrates_A', 'OldCrates_A2', 'OldCrates_B']) this.remove(n);
    const c = plan(20.1, y0, 10), fr = frame(FWD);
    for (const side of [-1, 1]) {
      this.box('CrateStack_' + side, local(fr, c, side * 0.8, 0.5, 0), v3(1, 1, 1), C.wood);
      this.box('CrateStack_' + side + '_2', local(fr, c, side * 0.8, 1.5, 0), v3(1, 1, 1), C.wood);
    }
    this.box('CrateBoard', local(fr, c, 0, 1, -0.5), localSize(fr, 0.6, 2, 0.05), C.woodLight);
    const coverId = this.cover('CrateFront', c, fr, [{ hinge: [0, 0, 0.55], leaf: [0, 0.5, 0, 0.7, 1, 0.5], color: C.wood, slideDir: 'y', slideAmount: 1.2 }], 'slide');
    this.spot('OldCrates', 'hide between the crates', 'Cellar', local(fr, c, 0, 0, 1.4), c, fr.fwd, 'stand', coverId);
  }
  dustSheetSofa(name, p, y0, entry, label, room) {
    const c = plan(p[0], y0, p[1]), e = plan(entry[0], y0, entry[1]);
    const fr = frame(norm(v3(e.x - c.x, 0, e.z - c.z)));
    const w = 1.1, h = 1.05, len = 2.3, t = 0.02;
    // the sofa runs across the entry direction; sheet over it
    this.box(name + '_Seat', local(fr, c, 0, 0.25, 0), localSize(fr, len, 0.5, w), C.fabric);
    this.box(name + '_Back', local(fr, c, 0, 0.55, -w / 2 + 0.12), localSize(fr, len, h, 0.24), C.fabric);
    this.box(name + '_SheetTop', local(fr, c, 0, h + 0.05, 0), localSize(fr, len + 0.2, t, w + 0.2), C.sheet, { solid: false });
    this.box(name + '_SheetBack', local(fr, c, 0, h / 2, -w / 2 - 0.1), localSize(fr, len + 0.2, h + 0.1, t), C.sheet, { solid: false });
    for (const side of [-1, 1]) this.box(name + '_SheetEnd', local(fr, c, side * (len / 2 + 0.1), h / 2, 0), localSize(fr, t, h + 0.1, w + 0.2), C.sheet, { solid: false });
    const coverId = this.cover(name + '_Sheet', c, fr, [{ hinge: [0, h + 0.05, w / 2 + 0.1], leaf: [0, -h / 2, 0, len + 0.2, h, t], color: C.sheet, openAngle: -1.3, axis: 'x' }], 'lid');
    this.spot(name, label, room, local(fr, c, 0, 0, w / 2 + 0.7), local(fr, c, 0.15, 0.4, 0), fr.fwd, 'lie', coverId, 0.75);
  }
  kneewall(name, p, y0, label, room) {
    const c = plan(p[0], y0, p[1]), fr = frame(FWD), w = 3, h = 1.15, d = 1, t = 0.04;
    this.box(name + '_Top', local(fr, c, 0, h, 0), localSize(fr, w, t, d), C.wall, { solid: false });
    this.box(name + '_Front', local(fr, c, 0.9, h / 2, d / 2), localSize(fr, 1.2, h, t), C.wall);
    this.box(name + '_Front2', local(fr, c, -1.2, h / 2, d / 2), localSize(fr, 0.6, h, t), C.wall);
    for (const side of [-1, 1]) this.box(name + '_End', local(fr, c, side * w / 2, h / 2, 0), localSize(fr, t, h, d), C.wall);
    const coverId = this.cover(name + '_Hatch', c, fr, [{ hinge: [-0.9, 0, d / 2], leaf: [0.45, h / 2, 0, 0.9, h - 0.05, 0.03], color: C.woodLight, openAngle: 1.6 }], 'hinge');
    this.spot(name, label, room, local(fr, c, 0, 0, d / 2 + 0.7), local(fr, c, 0.6, 0, -0.1), fr.fwd, 'lie', coverId, 0.45);
  }
  shed(name, p, y0, label, room) {
    const c = plan(p[0], y0, p[1]), fr = frame(BACK), w = 3, h = 2.5, d = 2.4, t = 0.08;
    this.box(name + '_Back', local(fr, c, 0, h / 2, -d / 2), localSize(fr, w, h, t), C.woodLight);
    this.box(name + '_L', local(fr, c, -w / 2, h / 2, 0), localSize(fr, t, h, d), C.woodLight);
    this.box(name + '_R', local(fr, c, w / 2, h / 2, 0), localSize(fr, t, h, d), C.woodLight);
    this.box(name + '_Roof', local(fr, c, 0, h, 0), localSize(fr, w + 0.3, t, d + 0.3), C.roof, { solid: false });
    this.box(name + '_FrontL', local(fr, c, -0.95, h / 2, d / 2), localSize(fr, 1.1, h, t), C.woodLight);
    this.box(name + '_FrontR', local(fr, c, 0.95, h / 2, d / 2), localSize(fr, 1.1, h, t), C.woodLight);
    this.box(name + '_Lintel', local(fr, c, 0, h - 0.2, d / 2), localSize(fr, 1, 0.4, t), C.woodLight, { solid: false });
    this.box(name + '_Mower', local(fr, c, -0.9, 0.3, -0.6), v3(0.6, 0.6, 0.9), C.accent);
    const coverId = this.cover(name + '_Door', c, fr, [{ hinge: [-0.45, 0, d / 2], leaf: [0.45, h / 2 - 0.1, 0, 0.9, h - 0.4, 0.04], color: C.wood, openAngle: 1.7 }], 'hinge');
    this.spot(name, label, room, local(fr, c, 0, 0, d / 2 + 0.8), local(fr, c, 0.3, 0.08, -0.3), fr.fwd, 'stand', coverId);
  }
  dogHouse(name, p, y0, label, room) {
    const c = plan(p[0], y0, p[1]), fr = frame(BACK), w = 1.2, h = 1.1, d = 1.5, t = 0.05;
    this.box(name + '_Floor', local(fr, c, 0, t / 2, 0), localSize(fr, w, t, d), C.woodLight);
    this.box(name + '_Back', local(fr, c, 0, h / 2, -d / 2), localSize(fr, w, h, t), C.woodLight);
    this.box(name + '_L', local(fr, c, -w / 2, h / 2, 0), localSize(fr, t, h, d), C.woodLight);
    this.box(name + '_R', local(fr, c, w / 2, h / 2, 0), localSize(fr, t, h, d), C.woodLight);
    this.box(name + '_Roof', local(fr, c, 0, h, 0), localSize(fr, w + 0.2, t, d + 0.2), C.roof, { solid: false });
    this.box(name + '_FrontTop', local(fr, c, 0, h - 0.15, d / 2), localSize(fr, w, 0.3, t), C.woodLight, { solid: false });
    const coverId = this.cover(name + '_Flap', c, fr, [{ hinge: [0, h - 0.3, d / 2], leaf: [0, -(h - 0.3) / 2, 0, w - 0.1, h - 0.3, 0.02], color: C.plastic, openAngle: -1.2, axis: 'x' }], 'lid');
    this.spot(name, label, room, local(fr, c, 0, 0, d / 2 + 0.8), local(fr, c, 0, 0.06, -0.25), fr.fwd, 'lie', coverId, 0.4);
  }
  wheelieBins(p, y0, label, room) {
    const c = plan(p[0], y0, p[1]), fr = frame(RIGHT), w = 0.8, h = 1.3, d = 0.9, t = 0.03;
    this.box('Bin2', local(fr, c, -1.0, h / 2, 0), localSize(fr, w, h, d), C.plastic);
    this.box('Bin_Floor', local(fr, c, 0, t / 2, 0), localSize(fr, w, t, d), C.plastic);
    this.box('Bin_Back', local(fr, c, 0, h / 2, -d / 2), localSize(fr, w, h, t), C.plastic);
    this.box('Bin_L', local(fr, c, -w / 2, h / 2, 0), localSize(fr, t, h, d), C.plastic);
    this.box('Bin_R', local(fr, c, w / 2, h / 2, 0), localSize(fr, t, h, d), C.plastic);
    this.box('Bin_Front', local(fr, c, 0, h / 2, d / 2), localSize(fr, w, h, t), C.plastic);
    const coverId = this.cover('Bin_Lid', c, fr, [{ hinge: [0, h, -d / 2], leaf: [0, 0.02, d / 2, w + 0.04, 0.04, d + 0.04], color: C.plastic, openAngle: -1.6, axis: 'x' }], 'lid');
    this.spot('Bin', label, room, local(fr, c, 0, 0, d / 2 + 0.7), local(fr, c, 0, 0.05, 0), fr.fwd, 'crouch', coverId, 0.6);
  }
  carTrunk(label, room) {
    this.remove('Car');
    const cx = (GARAGE.x0 + 2.6) * S, cz = (GARAGE.z0 + 4) * S, y0 = GROUND;
    const fr = frame(BACK), c = v3(cx, y0, cz - 2.4); // pivot at the rear bumper, +z (local) points out the back
    this.box('Car_Body', v3(cx, y0 + 0.8, cz + 0.7), v3(2.2, 1.5, 3.4), C.dark);
    this.box('Car_Cab', v3(cx, y0 + 1.55, cz + 0.4), v3(1.9, 0.5, 2.2), C.metal);
    const w = 2.0, d = 1.3, t = 0.05;
    this.box('Car_TrunkFloor', local(fr, c, 0, 0.32, -d / 2), localSize(fr, w, t, d), C.dark);
    this.box('Car_TrunkBumper', local(fr, c, 0, 0.55, 0), localSize(fr, 2.2, 0.5, 0.1), C.dark);
    this.box('Car_TrunkL', local(fr, c, -w / 2, 0.65, -d / 2), localSize(fr, 0.1, 0.7, d), C.dark);
    this.box('Car_TrunkR', local(fr, c, w / 2, 0.65, -d / 2), localSize(fr, 0.1, 0.7, d), C.dark);
    const coverId = this.cover('Car_TrunkLid', c, fr, [{ hinge: [0, 1.0, -d], leaf: [0, 0.03, d / 2, w + 0.2, 0.06, d], color: C.dark, openAngle: -1.2, axis: 'x' }], 'lid');
    this.spot('CarTrunk', label, room, local(fr, c, 0, 0, 0.8), local(fr, c, 0, 0.36, -d / 2), fr.fwd, 'lie', coverId, 0.5);
  }
  hedge(name, p, y0, label, room) {
    const c = plan(p[0], y0, p[1]), fr = frame(RIGHT), len = 5, h = 2.2, d = 1.4;
    this.box(name + '_A', local(fr, c, -len / 4 - 0.4, h / 2, 0), localSize(fr, len / 2 - 0.8, h, d), C.leaf);
    this.box(name + '_B', local(fr, c, len / 4 + 0.4, h / 2, 0), localSize(fr, len / 2 - 0.8, h, d), C.leaf);
    this.box(name + '_Top', local(fr, c, 0, h - 0.25, -0.2), localSize(fr, 1.8, 0.5, d - 0.4), C.leaf, { solid: false });
    this.box(name + '_Back', local(fr, c, 0, h / 2, -d / 2 + 0.15), localSize(fr, 1.8, h, 0.3), C.leaf);
    const coverId = this.cover(name + '_Branches', c, fr, [{ hinge: [0, 0, d / 2 - 0.2], leaf: [0, h / 2, 0, 1.6, h, 0.4], color: C.leaf, slideDir: 'y', slideAmount: 1.9 }], 'slide');
    this.spot(name, label, room, local(fr, c, 0, 0, d / 2 + 0.8), local(fr, c, 0, 0, -0.1), fr.fwd, 'stand', coverId);
  }
  porchCrawlspace(name, label, room) {
    const deckDepth = 3.5 * S, y0 = GROUND, skirtH = -SLAB - y0; // lawn to the underside of the deck
    const fr = frame(BACK);
    const front = -deckDepth;
    // lattice skirt along the front of the porch, a gap beside the steps you crawl through
    const gapX = 16 * S + 3.2, gapW = 1.2;
    this.box(name + '_SkirtW', v3((gapX - gapW / 2 - 1) / 2, y0 + skirtH / 2, front), v3(gapX - gapW / 2 + 1, skirtH, 0.05), C.lattice, { solid: false });
    this.box(name + '_SkirtE', v3((gapX + gapW / 2 + W + 1) / 2, y0 + skirtH / 2, front), v3(W + 1 - gapX - gapW / 2, skirtH, 0.05), C.lattice, { solid: false });
    const c = v3(gapX, y0, front);
    const coverId = this.cover(name + '_Lattice', c, fr, [{ hinge: [-gapW / 2, 0, 0], leaf: [gapW / 2, skirtH / 2, 0, gapW, skirtH, 0.05], color: C.lattice, openAngle: 1.5 }], 'hinge');
    this.spot(name, label, room, v3(gapX, y0, front - 0.9), v3(gapX, y0, front + 1.1), fr.fwd, 'lie', coverId, 0.18);
  }
}

function norm(v) { const l = Math.hypot(v.x, v.y, v.z) || 1; return v3(v.x / l, v.y / l, v.z / l); }
function split(area, holes, index, out) {
  for (; index < holes.length; index++) {
    const h = holes[index];
    if (!(area.x0 < h.x1 && h.x0 < area.x1 && area.z0 < h.z1 && h.z0 < area.z1)) continue;
    const x0 = Math.max(h.x0, area.x0), x1 = Math.min(h.x1, area.x1), z0 = Math.max(h.z0, area.z0), z1 = Math.min(h.z1, area.z1);
    if (x0 > area.x0) split({ x0: area.x0, z0: area.z0, x1: x0, z1: area.z1 }, holes, index + 1, out);
    if (x1 < area.x1) split({ x0: x1, z0: area.z0, x1: area.x1, z1: area.z1 }, holes, index + 1, out);
    if (z0 > area.z0) split({ x0, z0: area.z0, x1, z1: z0 }, holes, index + 1, out);
    if (z1 < area.z1) split({ x0, z0: z1, x1, z1: area.z1 }, holes, index + 1, out);
    return;
  }
  out.push(area);
}
const Door = (at, width = DOOR_W) => ({ at, width, bottom: 0, top: DOOR_H });
const Window = (at, width = WIN_W) => ({ at, width, bottom: SILL_H, top: DOOR_H });
const Arch = (at, width = 3) => ({ at, width, bottom: 0, top: ARCH_H });
const Opening = (at, width, bottom, top) => ({ at, width, bottom, top });

// ==================================================================== the house

export function buildPlan() {
  const b = new Builder();
  buildLot(b); buildBasement(b); buildGroundFloor(b); buildSecondFloor(b); buildAttic(b); buildExterior(b); buildYard(b); buildLights(b);
  furnish(b);
  buildRooms(b);
  buildPoints(b);
  return finalize(b);
}

function buildLot(b) {
  b.floor('Lawn', [LOT.x0, LOT.z0, LOT.x1, LOT.z1], GROUND, 0.4, C.grass, [0, 0, PLAN_W, PLAN_D]);
  b.floor('Street', [LOT.x0 - 6, LOT.z0 - 12, LOT.x1 + 14, LOT.z0], GROUND - 0.02, 0.4, C.concrete);
  b.floor('Driveway', [DRIVEWAY.x0, DRIVEWAY.z0, DRIVEWAY.x1, DRIVEWAY.z1], GROUND + 0.04, 0.1, C.concrete);
  b.floor('FrontPath', [14.4, -6.2, 36.5, -4.4], GROUND + 0.04, 0.1, C.concrete);
  const trees = [[6, -12], [26, -13], [-1, 10], [44, 12], [30, 32], [10, 34], [20, 37], [44, 38]];
  trees.forEach((t, i) => {
    const p = plan(t[0], 0, t[1]);
    b.box('Tree' + i + '_Trunk', v3(p.x, GROUND + 2.5, p.z), v3(0.6, 2.5, 0.6), C.wood, { shape: 'cyl' });
    b.box('Tree' + i + '_Canopy', v3(p.x, GROUND + 6.5, p.z), v3(6, 5, 6), C.grass, { shape: 'sphere', solid: false });
  });
}

function buildBasement(b) {
  const y0 = -H;
  b.floor('CellarFloor', [0, 0, PLAN_W, PLAN_D], y0, SLAB, C.floor);
  b.wall('B_South', [0, 0], [PLAN_W, 0], y0, H, C.wall, Opening(6, 1.2, 3.2, 3.8), Opening(26, 1.2, 3.2, 3.8));
  b.wall('B_North', [0, PLAN_D], [PLAN_W, PLAN_D], y0, H, C.wall);
  b.wall('B_West', [0, 0], [0, PLAN_D], y0, H, C.wall);
  b.wall('B_East', [PLAN_W, 0], [PLAN_W, PLAN_D], y0, H, C.wall);
  b.wall('Furnace-East', [10, 0], [10, 8], y0, H, C.wall, Door(4));
  b.wall('Furnace-North', [0, 8], [10, 8], y0, H, C.wall);
  b.wall('Wine-West', [22, 0], [22, 8], y0, H, C.wall, Door(4));
  b.wall('Wine-North', [22, 8], [PLAN_W, 8], y0, H, C.wall);
  b.wall('Storage-East', [10, 16], [10, PLAN_D], y0, H, C.wall, Door(20));
  b.wall('Storage-South', [0, 16], [10, 16], y0, H, C.wall);
  for (const p of [[16, 4], [16, 12], [26, 12], [10.5, 12], [21, 20]]) b.prop('Pillar', p, y0 + H / 2, v3(0.4, H, 0.4), C.metal);
  b.prop('Furnace', [3, 3], y0 + 1.2, v3(1.6, 2.4, 1.6), C.metal);
  b.prop('WaterHeater', [6, 1.5], y0 + 1, v3(0.8, 2, 0.8), C.metal, { shape: 'cyl' });
  b.prop('Workbench', [16, 23.4], y0 + 0.45, v3(2.4, 0.9, 0.8), C.wood);
  b.basin('ChestFreezer', [28, 21], y0, v3(1.6, 1, 0.8), C.metal);
  b.prop('StorageShelf', [0.3, 20], y0 + 1.2, v3(0.6, 2.4, 4), C.wood);
  b.prop('WineRack', [31.7, 4], y0 + 1.2, v3(0.6, 2.4, 6), C.wood);
  b.prop('OldCrates_A', [19.4, 10], y0 + 0.5, v3(1, 1, 1), C.wood);
  b.prop('OldCrates_A2', [19.4, 10], y0 + 1.5, v3(1, 1, 1), C.wood);
  b.prop('OldCrates_B', [20.8, 10], y0 + 0.5, v3(1, 1, 1), C.wood);
  b.stairs('CellarStairs', [19.6, 18.6], y0, LEFT, STAIR_W, H, C.wood);
}

function buildGroundFloor(b) {
  const y0 = 0;
  b.floor('GroundFloor', [0, 0, PLAN_W, PLAN_D], y0, SLAB, C.floor, [13.2, 17.3, 18.2, 19.9]);
  b.wall('G_South', [0, 0], [PLAN_W, 0], y0, H, C.wall, Opening(16, 2.2, 0, 2.8), Window(3), Window(8), Window(23), Window(28));
  b.wall('G_North', [0, PLAN_D], [PLAN_W, PLAN_D], y0, H, C.wall, Window(4), Window(9), Door(16), Window(30));
  b.wall('G_West', [0, 0], [0, PLAN_D], y0, H, C.wall, Window(4), Window(8), Window(15), Window(21));
  b.wall('G_East', [PLAN_W, 0], [PLAN_W, PLAN_D], y0, H, C.wall, Window(3), Window(7), Window(12), Window(16), Window(21));
  b.wall('Living-Foyer', [12, 0], [12, 12], y0, H, C.wall, Arch(6));
  b.wall('Living-Den', [0, 12], [12, 12], y0, H, C.wall, Door(6));
  b.wall('Den-Rec', [0, 18], [12, 18], y0, H, C.wall, Door(3));
  b.wall('WestWing-Hall', [12, 12], [12, PLAN_D], y0, H, C.wall, Door(14.5), Door(22));
  b.wall('Foyer-BackHall', [12, 12], [20, 12], y0, H, C.wall, Arch(17));
  b.wall('BackHall-Mudroom', [12, 17], [20, 17], y0, H, C.wall, Door(19));
  b.wall('Foyer-Dining', [20, 0], [20, 12], y0, H, C.wall, Arch(5));
  b.wall('Dining-Kitchen', [20, 10], [PLAN_W, 10], y0, H, C.wall, Door(26, 2));
  b.wall('BackHall-Kitchen', [20, 12], [20, 17], y0, H, C.wall, Door(14.5));
  b.wall('Mudroom-Service', [20, 17], [20, PLAN_D], y0, H, C.wall, Door(19.5));
  b.wall('Kitchen-Service', [20, 18], [PLAN_W, 18], y0, H, C.wall, Door(30));
  b.stairs('GrandStairs', [13.3, 2.4], y0, FWD, STAIR_W, H, C.wood);
  b.stairs('ServiceStairs', [21, 22.5], y0, RIGHT, 3, H, C.wood);
  b.prop('Couch_1', [6, 3.8], y0 + 0.45, v3(3, 0.9, 1.1), C.fabric);
  b.prop('Couch_2', [6, 8.2], y0 + 0.45, v3(3, 0.9, 1.1), C.fabric);
  b.prop('CoffeeTable', [6, 6], y0 + 0.25, v3(1.6, 0.5, 0.9), C.wood);
  b.prop('Fireplace', [0.3, 6], y0 + 0.8, v3(0.8, 1.6, 2.2), C.accent);
  b.table('Desk', [3, 15], y0, v3(2, 0.8, 1), C.wood);
  b.prop('Bookshelf', [7, 17.7], y0 + 1.2, v3(4, 2.4, 0.5), C.wood);
  b.table('PoolTable', [6, 21], y0, v3(2.7, 0.9, 1.5), C.fabric, 0.3);
  b.prop('Washer', [13, 23.5], y0 + 0.5, v3(1.4, 1, 0.7), C.metal);
  b.table('DiningTable', [26, 5], y0, v3(4.5, 0.8, 1.5), C.wood);
  b.table('KitchenIsland', [26, 14], y0, v3(3, 0.95, 1.3), C.porcelain, 0.12);
  b.prop('Counter_East', [31.7, 14], y0 + 0.475, v3(0.8, 0.95, 9), C.porcelain);
  b.prop('Fridge', [21, 17.6], y0 + 1, v3(1, 2, 0.9), C.metal);
  b.prop('PantryShelf', [31.75, 21], y0 + 1.2, v3(0.6, 2.4, 3), C.wood);
}

function buildSecondFloor(b) {
  const y0 = H;
  b.floor('SecondFloor', [0, 0, PLAN_W, PLAN_D], y0, SLAB, C.floor, [12, 0, 17, 8.8], [22.4, 21, 27.4, 24]);
  b.wall('U_South', [0, 0], [PLAN_W, 0], y0, H, C.wall, Window(3), Window(8), Window(18.5), Window(23), Window(28));
  b.wall('U_North', [0, PLAN_D], [PLAN_W, PLAN_D], y0, H, C.wall, Window(3), Window(8), Window(16), Window(30));
  b.wall('U_West', [0, 0], [0, PLAN_D], y0, H, C.wall, Window(4), Window(8), Window(15), Window(21));
  b.wall('U_East', [PLAN_W, 0], [PLAN_W, PLAN_D], y0, H, C.wall, Window(3), Window(7), Window(12), Window(16), Window(22));
  b.wall('U_WestWing-Hall', [12, 0], [12, PLAN_D], y0, H, C.wall, Door(10.4), Door(17), Door(21));
  b.wall('Master-Bed2', [0, 12], [12, 12], y0, H, C.wall);
  b.wall('Bed2-Bed3', [0, 18], [12, 18], y0, H, C.wall);
  b.wall('MasterBath-East', [5, 8], [5, 12], y0, H, C.wall);
  b.wall('MasterBath-South', [0, 8], [5, 8], y0, H, C.wall, Door(2.5));
  b.wall('EastWing-Hall', [20, 0], [20, 14], y0, H, C.wall, Door(5), Door(10));
  b.wall('Bed4-South', [20, 9], [PLAN_W, 9], y0, H, C.wall);
  b.wall('Bath-Arm', [20, 14], [26, 14], y0, H, C.wall);
  b.wall('Bath-Bed5', [26, 9], [26, 18], y0, H, C.wall, Door(16));
  b.wall('Bed5-Corridor', [26, 18], [PLAN_W, 18], y0, H, C.wall);
  b.rail('BalconyRail', [17, 0.25], [17, 8.8], y0);
  b.rail('LandingRail', [14.6, 8.8], [17, 8.8], y0);
  b.rail('ServiceRail_West', [22.4, 21], [22.4, 24], y0);
  b.rail('ServiceRail_South', [22.4, 21], [27.4, 21], y0);
  b.stairs('AtticStairs', [13, 14.3], y0, RIGHT, STAIR_W, H, C.wood);
  const bed = v3(2.2, 0.6, 1.8);
  b.bed('Bed_Master', [4, 3], y0, bed, C.fabric);
  b.bed('Bed_2', [4, 15], y0, bed, C.fabric);
  b.bed('Bed_3', [4, 21], y0, bed, C.fabric);
  b.bed('Bed_4', [27, 3], y0, bed, C.fabric);
  b.bed('Bed_5', [29, 13.5], y0, bed, C.fabric);
  b.table('Desk_2', [9, 15], y0, v3(1.6, 0.8, 0.8), C.wood);
  b.basin('Tub_Master', [0.6, 10], y0, v3(0.9, 0.7, 2), C.porcelain);
  b.basin('Tub', [25.5, 11.5], y0, v3(0.9, 0.7, 2), C.porcelain);
}

function buildAttic(b) {
  const y0 = 2 * H;
  b.floor('AtticFloor', [0, 0, PLAN_W, PLAN_D], y0, SLAB, C.floor, [14.4, 13, 19.4, 15.6]);
  b.rail('StairRail_North', [14.4, 15.6], [19.4, 15.6], y0);
  b.rail('StairRail_South', [14.4, 13], [19.4, 13], y0);
  const overhang = 0.5, run = D / 2 + overhang, rise = 6.5, angle = Math.atan2(rise, run), length = Math.hypot(run, rise);
  b.box('Roof_South', v3(W / 2, y0 + rise / 2, (D / 2 - overhang) / 2), v3(W + 2 * overhang, SLAB, length), C.roof, { rotX: -angle, solid: false });
  b.box('Roof_North', v3(W / 2, y0 + rise / 2, (D / 2 + D + overhang) / 2), v3(W + 2 * overhang, SLAB, length), C.roof, { rotX: angle, solid: false });
  const slope = rise / run;
  for (let band = 0; band < Math.floor(rise); band++) {
    const halfWidth = run - (band + 1) / slope;
    if (halfWidth <= 0.5) break;
    for (const x of [0, W]) b.box('Gable_' + band, v3(x, y0 + band + 0.5, D / 2), v3(T, 1, halfWidth * 2), C.wall);
  }
  for (const x of [0.25, 0.5, 0.75]) b.box('RidgePost', v3(x * W, y0 + rise / 2, D / 2), v3(0.25, rise, 0.25), C.wood);
  const chimney = plan(0.5, 0, 6);
  const chimneyBase = y0 + (chimney.z + overhang) * slope - 0.6;
  b.box('Chimney', v3(chimney.x, chimneyBase + 1.5, chimney.z), v3(1, 3, 1), C.accent, { solid: false });
  b.prop('Crate_1', [5, 11], y0 + 0.4, v3(0.8, 0.8, 0.8), C.wood);
  b.prop('Crate_2', [5.7, 11.5], y0 + 0.4, v3(0.8, 0.8, 0.8), C.wood);
  b.prop('Crate_3', [5.3, 11.2], y0 + 1.2, v3(0.8, 0.8, 0.8), C.wood);
  b.prop('Crate_4', [26, 13], y0 + 0.4, v3(0.8, 0.8, 0.8), C.wood);
  b.prop('Trunk', [12, 9], y0 + 0.3, v3(1.2, 0.6, 0.6), C.accent);
  b.prop('Mattress', [27, 10], y0 + 0.15, v3(1.8, 0.3, 2.2), C.fabric);
}

function buildExterior(b) {
  const deckDepth = 3.5 * S;
  b.box('PorchDeck', v3(W / 2, -SLAB / 2, -deckDepth / 2), v3(W + 2, SLAB, deckDepth), C.woodLight);
  b.box('PorchRoof', v3(W / 2, H, -deckDepth / 2 - 0.15), v3(W + 2.6, SLAB, deckDepth + 0.3), C.roof, { solid: false });
  for (const px of [-0.65, 3.4, 7.6, 11.8, 14.2, 17.8, 20.2, 24.4, 28.6, 32.65])
    b.box('PorchPost', v3(px * S, (GROUND + H - 0.1) / 2, -deckDepth + 0.15), v3(0.2, H - 0.1 - GROUND, 0.2), C.woodLight);
  b.stairs('PorchSteps', [16, -4.4], GROUND, FWD, 3.2, -GROUND, C.woodLight, 0.2, 0.3);
  b.stairs('BackSteps', [16, PLAN_D + 1.1], GROUND, BACK, 2.4, -GROUND, C.woodLight, 0.2, 0.3);
}

function buildYard(b) {
  const gateX = (DRIVEWAY.x0 + DRIVEWAY.x1) / 2, gateW = (DRIVEWAY.x1 - DRIVEWAY.x0) * S + 0.6;
  b.wall('Fence_South', [LOT.x0, LOT.z0], [LOT.x1, LOT.z0], GROUND, FENCE_H, C.woodLight, Opening(gateX, gateW, 0, FENCE_H));
  b.wall('Fence_North', [LOT.x0, LOT.z1], [LOT.x1, LOT.z1], GROUND, FENCE_H, C.woodLight);
  b.wall('Fence_West', [LOT.x0, LOT.z0], [LOT.x0, LOT.z1], GROUND, FENCE_H, C.woodLight);
  b.wall('Fence_East', [LOT.x1, LOT.z0], [LOT.x1, LOT.z1], GROUND, FENCE_H, C.woodLight);
  const pillars = [];
  for (let x = LOT.x0; x < LOT.x1; x += 8) { pillars.push([x, LOT.z0]); pillars.push([x, LOT.z1]); }
  for (let z = LOT.z0; z < LOT.z1; z += 8) { pillars.push([LOT.x0, z]); pillars.push([LOT.x1, z]); }
  pillars.push([LOT.x1, LOT.z1]); pillars.push([LOT.x1, LOT.z0]);
  for (const p of pillars) if (Math.abs(p[0] - gateX) * S > gateW / 2 + 0.6 || p[1] !== LOT.z0)
    b.prop('FencePillar', p, GROUND + (FENCE_H + 0.4) / 2, v3(0.6, FENCE_H + 0.4, 0.6), C.accent);
  // Gate: piers + two leaves on hinges (covers with ids recorded in points)
  const gateCentre = plan(gateX, 0, LOT.z0);
  const leafW = gateW / 2 - 0.35;
  b.points.gateLeaves = [];
  for (const side of [-1, 1]) {
    b.box('GatePier', add(gateCentre, v3(side * gateW / 2, GROUND + (FENCE_H + 0.6) / 2, 0)), v3(0.6, FENCE_H + 0.6, 0.6), C.accent);
    const hinge = add(gateCentre, v3(side * (gateW / 2 - 0.3), GROUND, 0));
    const inward = -side * (leafW / 2 + 0.02);
    const fr = frame(FWD);
    const id = b.cover(side < 0 ? 'GateLeaf_L' : 'GateLeaf_R', hinge, fr, [
      { hinge: [0, 0, 0], leaf: [inward, FENCE_H / 2, 0, leafW, FENCE_H, 0.12], color: C.metal, openAngle: side * 1.5, bars: true },
      { hinge: [0, 0, 0], leaf: [inward, FENCE_H + 0.05, 0, leafW, 0.15, 0.2], color: C.dark, openAngle: side * 1.5 },
      { hinge: [0, 0, 0], leaf: [inward, 0.3, 0, leafW, 0.6, 0.16], color: C.dark, openAngle: side * 1.5 },
    ], 'hinge');
    b.points.gateLeaves.push(id);
  }
  b.points.gateBlocker = { c: add(gateCentre, v3(0, GROUND + FENCE_H / 2, 0)), s: v3(gateW, FENCE_H, 0.3) };
  const garageH = 3.4;
  b.floor('GarageFloor', [GARAGE.x0, GARAGE.z0, GARAGE.x1, GARAGE.z1], GROUND + 0.04, 0.1, C.concrete);
  b.wall('Garage_West', [GARAGE.x0, GARAGE.z0], [GARAGE.x0, GARAGE.z1], GROUND, garageH, C.wall);
  b.wall('Garage_North', [GARAGE.x0, GARAGE.z1], [GARAGE.x1, GARAGE.z1], GROUND, garageH, C.wall, Window((GARAGE.x0 + GARAGE.x1) / 2, 1.6));
  b.wall('Garage_East', [GARAGE.x1, GARAGE.z0], [GARAGE.x1, GARAGE.z1], GROUND, garageH, C.wall);
  b.floor('GarageRoof', [GARAGE.x0 - 0.3, GARAGE.z0 - 0.6, GARAGE.x1 + 0.3, GARAGE.z1 + 0.3], GROUND + garageH + SLAB, SLAB, C.roof);
  b.box('GarageHeader', plan((GARAGE.x0 + GARAGE.x1) / 2, GROUND + garageH - 0.3, GARAGE.z0), v3((GARAGE.x1 - GARAGE.x0) * S, 0.6, T), C.wall, { solid: false });
  b.prop('GaragePost', [(GARAGE.x0 + GARAGE.x1) / 2, GARAGE.z0], GROUND + garageH / 2, v3(0.3, garageH, 0.3), C.wood);
  b.prop('Car', [GARAGE.x0 + 2.6, GARAGE.z0 + 4], GROUND + 0.8, v3(2.2, 1.5, 4.8), C.dark);
  b.prop('Garage_Workbench', [GARAGE.x1 - 1.2, GARAGE.z1 - 0.6], GROUND + 0.5, v3(2.6, 0.9, 0.9), C.wood);
  b.prop('Garage_Shelf', [GARAGE.x1 - 0.3, GARAGE.z0 + 3], GROUND + 1.2, v3(0.5, 2.4, 3), C.wood);
  b.prop('OilDrum_1', [GARAGE.x0 + 0.6, GARAGE.z1 - 0.7], GROUND + 0.45, v3(0.6, 0.9, 0.6), C.metal, { shape: 'cyl' });
  b.prop('OilDrum_2', [GARAGE.x0 + 1.3, GARAGE.z1 - 0.7], GROUND + 0.45, v3(0.6, 0.9, 0.6), C.metal, { shape: 'cyl' });
  b.prop('Mower', [GARAGE.x0 + 1, GARAGE.z0 + 1], GROUND + 0.35, v3(0.6, 0.7, 1), C.accent);
  b.prop('Shed', [8, 37.5], GROUND + 1.3, v3(3, 2.6, 2.4), C.woodLight);
  b.prop('WoodPile', [12, 37.8], GROUND + 0.5, v3(2, 1, 1), C.wood);
  b.prop('SwingFrame', [26, 34], GROUND + 1.25, v3(3, 2.5, 0.2), C.metal);
}

function buildLights(b) {
  const warm = [1, 0.88, 0.72], cold = [0.78, 0.88, 1], c = H - 0.4;
  b.light('Foyer', [16, 6], 2 * H - 1, warm, 16, 2.4);
  b.light('Living', [6, 6], c, warm, 12);
  b.light('Den', [6, 15], c, warm, 10);
  b.light('RecRoom', [6, 21], c, warm, 10);
  b.light('BackHall', [16, 14.5], c, warm, 9);
  b.light('Mudroom', [16, 21], c, warm, 9);
  b.light('Dining', [26, 5], c, warm, 11);
  b.light('Kitchen', [26, 14], c, warm, 11);
  b.light('Service', [26, 20.5], c, warm, 9);
  b.light('Gallery', [16, 14], H + c, warm, 12);
  b.light('RearHall', [16, 21], H + c, warm, 9);
  b.light('Master', [6, 5], H + c, warm, 11);
  b.light('MasterBath', [2.5, 10], H + c, cold, 6);
  b.light('Bedroom2', [6, 15], H + c, warm, 9);
  b.light('Bedroom3', [6, 21], H + c, warm, 9);
  b.light('Bedroom4', [26, 4.5], H + c, warm, 10);
  b.light('Bathroom', [23, 11.5], H + c, cold, 7);
  b.light('Bedroom5', [29, 13.5], H + c, warm, 9);
  b.light('Corridor', [26, 20], H + c, warm, 9);
  b.light('Attic_West', [6, 12], 2 * H + 2, warm, 11, 1.1);
  b.light('Attic_Centre', [16, 12], 2 * H + 2.5, warm, 14, 1.1);
  b.light('Attic_East', [26, 12], 2 * H + 2, warm, 11, 1.1);
  b.light('Furnace', [5, 4], -0.5, cold, 10);
  b.light('WineCellar', [27, 4], -0.5, cold, 10);
  b.light('Cellar_South', [16, 8], -0.5, cold, 14);
  b.light('Cellar_North', [16, 18], -0.5, cold, 14);
  b.light('Storage', [5, 20], -0.5, cold, 10);
  b.light('Porch', [16, -1.8], H - 0.6, warm, 10);
  b.light('Garage', [(GARAGE.x0 + GARAGE.x1) / 2, (GARAGE.z0 + GARAGE.z1) / 2], GROUND + 3, cold, 10);
  b.light('Gate', [(DRIVEWAY.x0 + DRIVEWAY.x1) / 2, LOT.z0 + 1], GROUND + 3, warm, 9);
  b.light('Backyard', [16, 30], GROUND + 3.5, cold, 12, 1);
}

// ------------------------------------------------------------ furnishing + hiding spots (HideAndSeekHouseDetailer)
function furnish(b) {
  let y = 0;
  // Living room
  b.rug('Rug_Living', [6, 6], y, [4.5, 3.4]);
  b.prop('TvStand', [9.2, 11.6], y + 0.3, v3(1.6, 0.6, 0.5), C.dark);
  b.prop('Tv', [9.2, 11.6], y + 1.05, v3(1.3, 0.8, 0.1), C.metal);
  b.chair('Armchair_1', [2.6, 3.5], y, C.fabric, true);
  b.chair('Armchair_2', [2.6, 8.5], y, C.fabric, true);
  b.prop('SideTable', [2.6, 6], y + 0.3, v3(0.5, 0.6, 0.5), C.wood);
  b.lamp('FloorLamp_Living', [10.8, 9.6], y);
  b.prop('Mantel', [0.9, 6], y + 1.62, v3(0.5, 0.08, 2.6), C.wood, { solid: false });
  b.picture('Picture_Living', [6, 0.15], y + 1.9, FWD, [1.2, 0.8]);
  b.drape('Drape_Living_W', [0, 8], y, RIGHT, 'Living room');
  b.drape('Drape_Living_S', [8, 0], y, FWD, 'Living room');
  // Foyer
  b.prop('Console', [18.6, 1.2], y + 0.42, v3(1.4, 0.84, 0.45), C.wood);
  b.prop('CoatRack', [19.4, 8.4], y + 0.9, v3(0.12, 1.8, 0.12), C.dark, { shape: 'cyl' });
  b.prop('UmbrellaStand', [14.6, 0.7], y + 0.3, v3(0.3, 0.6, 0.3), C.metal, { shape: 'cyl' });
  b.prop('Chandelier', [16, 6], 2 * UP - 1.4, v3(1.2, 0.5, 1.2), C.accent, { shape: 'sphere', solid: false });
  b.rug('Runner_Foyer', [17.5, 6], y, [1.6, 6]);
  b.closet('CoatCloset', [19.25, 11.2], y, v3(1.8, 2.4, 1.5), BACK, 'hide in the coat closet', 'Foyer');
  // Den
  b.chair('OfficeChair', [3, 13.4], y, C.dark, false);
  b.prop('FilingCabinet', [0.5, 13], y + 0.65, v3(0.5, 1.3, 0.6), C.metal);
  b.prop('Bookshelf_Den2', [0.3, 17], y + 1.1, v3(0.4, 2.2, 2.2), C.wood);
  b.rug('Rug_Den', [6, 15], y, [3, 2.4]);
  b.deskPanels('Desk', [3, 15], y, v3(2, 0.8, 1), [3, 13.8], 'Den');
  b.drape('Drape_Den', [0, 15], y, RIGHT, 'Den');
  // Rec room
  b.prop('CueRack', [0.25, 21], y + 1.2, v3(0.1, 1.4, 1.2), C.wood, { solid: false });
  b.prop('Arcade', [11.6, 19.2], y + 0.9, v3(0.7, 1.8, 0.8), C.accent);
  b.prop('Jukebox', [11.6, 20.3], y + 0.75, v3(0.9, 1.5, 0.6), C.dark);
  b.bar('Bar', [6.5, 23.05], y, 'Rec room');
  b.closet('RecCloset', [0.9, 19.2], y, v3(1.4, 2.4, 1.3), RIGHT, 'hide in the storage closet', 'Rec room');
  b.tableApron('PoolTable', [6, 21], y, v3(2.7, 0.9, 1.5), 0.3, [6, 19.4], 'hide under the pool table', 'Rec room', C.dark);
  // Back hall
  b.prop('HallBench', [16, 16.6], y + 0.25, v3(1.4, 0.5, 0.45), C.wood);
  b.closet('HallCloset', [12.6, 12.8], y, v3(1.4, 2.4, 1.3), RIGHT, 'hide in the hall closet', 'Back hall');
  // Mudroom
  b.prop('Dryer', [14.2, 23.5], y + 0.5, v3(1.4, 1, 0.7), C.metal);
  b.prop('BootBench', [12.4, 20], y + 0.22, v3(0.45, 0.44, 1.2), C.wood);
  b.closet('UtilityCloset', [19.25, 23.15], y, v3(1.5, 2.4, 1.5), LEFT, 'hide in the utility closet', 'Mudroom');
  // Dining
  for (let i = 0; i < 3; i++) { b.chair('DiningChair_S' + i, [24.6 + i * 1.4, 4.05], y, C.wood, false); b.chair('DiningChair_N' + i, [24.6 + i * 1.4, 5.95], y, C.wood, false); }
  b.prop('Sideboard', [25.5, 0.45], y + 0.5, v3(2.4, 1, 0.55), C.wood);
  b.prop('Chandelier_Dining', [26, 5], UP - 1.2, v3(1, 0.4, 1), C.accent, { shape: 'sphere', solid: false });
  b.rug('Rug_Dining', [26, 5], y, [6, 3.2]);
  b.tableApron('DiningTable', [26, 5], y, v3(4.5, 0.8, 1.5), 0.1, [26, 6.6], 'hide under the tablecloth', 'Dining room', C.sheet);
  b.drape('Drape_Dining', [32, 7], y, LEFT, 'Dining room');
  // Kitchen
  b.prop('Counter_South', [23.4, 10.45], y + 0.475, v3(3.6, 0.95, 0.65), C.porcelain);
  b.prop('Stove', [24.4, 10.45], y + 0.475, v3(0.8, 0.95, 0.65), C.metal);
  b.prop('Hood', [24.4, 10.45], y + 2.05, v3(0.9, 0.4, 0.55), C.metal, { solid: false });
  b.prop('Uppers_South', [23.4, 10.4], y + 1.95, v3(3.6, 0.8, 0.4), C.woodLight, { solid: false });
  b.prop('Uppers_East', [31.75, 14], y + 1.95, v3(0.4, 0.8, 6), C.woodLight, { solid: false });
  b.prop('Microwave', [22.2, 10.5], y + 1.15, v3(0.5, 0.3, 0.4), C.metal, { solid: false });
  b.islandPanels('KitchenIsland', [26, 14], y, v3(3, 0.95, 1.3), [26, 12.5], 'Kitchen');
  b.closet('Pantry', [20.95, 11.3], y, v3(2, 2.4, 2), RIGHT, 'hide in the pantry', 'Kitchen', false);
  // Service room
  b.prop('Boiler', [30.8, 23], y + 0.9, v3(0.9, 1.8, 0.9), C.metal, { shape: 'cyl' });
  b.prop('ServiceShelf', [28.5, 23.7], y + 1.1, v3(2.4, 2.2, 0.4), C.metal);
  b.closet('BroomCloset', [28.1, 18.75], y, v3(1.2, 2.4, 1.1), FWD, 'hide in the broom closet', 'Service room');

  // ---- second floor
  y = UP;
  b.nightstands('Master', [4, 3], y, 2.2);
  b.prop('Dresser_Master', [6, 0.5], y + 0.55, v3(1.6, 1.1, 0.55), C.wood);
  b.chair('Armchair_Master', [9.6, 7.5], y, C.fabric, true);
  b.lamp('FloorLamp_Master', [10.5, 8.8], y);
  b.rug('Rug_Master', [4, 5], y, [3.6, 3]);
  b.bedSkirt('Bed_Master', [4, 3], y, [5.6, 3], 'Master bedroom');
  b.wardrobe('Wardrobe_Master', [11.6, 4], y, v3(2, 2.2, 0.9), LEFT, 'hide in the wardrobe', 'Master bedroom');
  b.drape('Drape_Master', [0, 4], y, RIGHT, 'Master bedroom');
  b.prop('Toilet_Master', [3.8, 11.4], y + 0.25, v3(0.45, 0.5, 0.7), C.porcelain);
  b.prop('Vanity_Master', [3.8, 8.55], y + 0.45, v3(1.2, 0.9, 0.55), C.porcelain);
  b.showerStall('Tub_Master', [0.6, 10], y, v3(0.9, 0.7, 2), RIGHT, [1.7, 10], 'hide in the shower', 'Master bathroom');
  b.nightstands('Bed2', [4, 15], y, 2.2);
  b.prop('Dresser_2', [1, 17.6], y + 0.55, v3(1.4, 1.1, 0.5), C.wood);
  b.chair('DeskChair_2', [9, 13.9], y, C.dark, false);
  b.rug('Rug_2', [4, 16], y, [3, 2]);
  b.bedSkirt('Bed_2', [4, 15], y, [5.6, 15], 'Bedroom 2');
  b.closet('Closet_2', [10.4, 17.3], y, v3(2.2, 2.4, 1.5), BACK, 'hide in the closet', 'Bedroom 2');
  b.drape('Drape_2', [0, 15], y, RIGHT, 'Bedroom 2');
  b.nightstands('Bed3', [4, 21], y, 2.2);
  b.prop('ToyShelf', [0.3, 22.5], y + 0.8, v3(0.4, 1.6, 1.4), C.woodLight);
  b.prop('KidTable', [8.5, 22], y + 0.3, v3(0.9, 0.6, 0.9), C.accent);
  b.rug('Rug_3', [6, 21], y, [3, 2.4]);
  b.bedSkirt('Bed_3', [4, 21], y, [5.6, 21], 'Bedroom 3');
  b.chest('ToyChest', [8.2, 19.3], y, v3(1.5, 0.7, 0.9), C.accent, [8.2, 20.4], 'hide in the toy chest', 'Bedroom 3');
  b.closet('Closet_3', [10.6, 23.25], y, v3(1.8, 2.4, 1.4), BACK, 'hide in the closet', 'Bedroom 3');
  b.prop('HallTable', [18.6, 11], y + 0.42, v3(1.2, 0.84, 0.4), C.wood);
  b.prop('PlantPot', [19.3, 2], y + 0.3, v3(0.5, 0.6, 0.5), C.accent, { shape: 'cyl' });
  b.prop('Plant', [19.3, 2], y + 1.1, v3(0.9, 1, 0.9), C.leaf, { shape: 'sphere', solid: false });
  b.rug('Runner_Gallery', [18.3, 20.5], y, [1.4, 7]);
  b.closet('LinenCloset', [21, 23.25], y, v3(1.6, 2.4, 1.4), BACK, 'hide in the linen closet', 'Rear hall');
  b.nightstands('Bed4', [27, 3], y, 2.2);
  b.prop('Dresser_4', [25.5, 0.5], y + 0.55, v3(1.6, 1.1, 0.55), C.wood);
  b.prop('Bookcase_4', [20.3, 7.5], y + 1, v3(0.4, 2, 1.6), C.wood);
  b.rug('Rug_4', [27, 5.5], y, [3.4, 2.6]);
  b.bedSkirt('Bed_4', [27, 3], y, [25.4, 3], 'Bedroom 4');
  b.wardrobe('Wardrobe_4', [31.6, 5], y, v3(2, 2.2, 0.9), LEFT, 'hide in the wardrobe', 'Bedroom 4');
  b.drape('Drape_4', [32, 3], y, LEFT, 'Bedroom 4');
  b.prop('Toilet', [21, 13.2], y + 0.25, v3(0.45, 0.5, 0.7), C.porcelain);
  b.prop('Vanity', [23, 9.5], y + 0.45, v3(1.2, 0.9, 0.55), C.porcelain);
  b.prop('LinenCabinet', [24.6, 9.45], y + 1, v3(0.6, 2, 0.5), C.woodLight);
  b.showerStall('Tub', [25.5, 11.5], y, v3(0.9, 0.7, 2), LEFT, [24.4, 11.5], 'hide in the shower', 'Bathroom');
  b.nightstands('Bed5', [29, 13.5], y, 2.2);
  b.prop('Dresser_5', [31.5, 17.3], y + 0.55, v3(0.55, 1.1, 1.4), C.wood);
  b.prop('Desk_5', [28, 17.4], y + 0.4, v3(1.4, 0.8, 0.6), C.wood);
  b.chair('DeskChair_5', [28, 16.6], y, C.dark, false);
  b.rug('Rug_5', [29, 11.5], y, [3, 2.2]);
  b.bedSkirt('Bed_5', [29, 13.5], y, [27.4, 13.5], 'Bedroom 5');
  b.closet('Closet_5', [28, 9.75], y, v3(2, 2.4, 1.5), FWD, 'hide in the closet', 'Bedroom 5');
  b.drape('Drape_5', [32, 12], y, LEFT, 'Bedroom 5');

  // ---- attic
  y = ATTIC;
  b.prop('RolledCarpet_1', [9, 16], y + 0.2, v3(0.4, 0.4, 2.4), C.rug, { shape: 'cyl' });
  b.prop('RolledCarpet_2', [9.5, 16.3], y + 0.55, v3(0.35, 0.35, 2.2), C.drape, { shape: 'cyl', solid: false });
  b.prop('DressForm_Post', [20, 17], y + 0.7, v3(0.08, 1.4, 0.08), C.metal, { shape: 'cyl' });
  b.prop('DressForm', [20, 17], y + 1.6, v3(0.45, 0.7, 0.3), C.fabric, { shape: 'sphere', solid: false });
  b.chair('RockingChair', [17, 8], y, C.wood, true);
  for (let i = 0; i < 5; i++) b.prop('BoxStack_' + i, [14 + i * 0.9, 19.5], y + 0.35 + (i % 2) * 0.7, v3(0.75, 0.7, 0.75), C.paper);
  b.prop('OldLamp', [23, 15.5], y + 0.6, v3(0.4, 1.2, 0.4), C.metal, { shape: 'cyl' });
  b.remove('Trunk');
  b.chest('SteamerTrunk', [12, 9], y, v3(1.5, 0.75, 0.85), C.accent, [12, 10.2], 'hide in the trunk', 'Attic');
  b.wardrobe('OldWardrobe', [22, 10], y, v3(1.2, 2, 0.7), BACK, 'hide in the old wardrobe', 'Attic');
  b.kneewall('Kneewall', [9, 3.3], y, 'hide in the crawlspace', 'Attic');

  // ---- basement
  y = CELLAR;
  b.prop('CoalBin', [7.5, 6.5], y + 0.4, v3(1.4, 0.8, 1), C.dark);
  b.prop('Ducting', [3, 6], y + 3.2, v3(0.5, 0.5, 4), C.metal, { solid: false });
  for (let i = 0; i < 4; i++) b.prop('Barrel_' + i, [24 + i * 1.3, 1.2], y + 0.55, v3(0.9, 1.1, 0.9), C.wood, { shape: 'cyl' });
  b.prop('TastingTable', [27, 5.5], y + 0.45, v3(1.2, 0.9, 0.7), C.wood);
  b.prop('JarShelf', [9.7, 22.6], y + 1, v3(0.4, 2, 3), C.metal);
  b.prop('OldBike', [3, 17], y + 0.45, v3(0.2, 0.9, 1.7), C.metal);
  b.locker('Locker_A', [24.2, 8.6], y, 'hide in the locker', 'Cellar');
  b.locker('Locker_B', [24.9, 8.6], y, 'hide in the locker', 'Cellar');
  b.remove('Workbench');
  b.table('Workbench', [16, 23.4], y, v3(2.4, 0.9, 0.8), C.wood, 0.08);
  b.workbenchTarp('Workbench', [16, 23.4], y, v3(2.4, 0.9, 0.8), BACK, 'hide under the workbench', 'Cellar');
  b.crateFort(y);
  b.freezerLid('ChestFreezer', [28, 21], y, v3(1.6, 1, 0.8), [28, 19.6], 'hide in the freezer', 'Cellar');
  b.dustSheetSofa('SheetSofa', [5, 19.5], y, [7.2, 19.5], 'hide under the dust sheet', 'Storage');

  // ---- outside
  y = YARD;
  b.chair('PorchChair_1', [6, -2.2], 0, C.woodLight, true);
  b.chair('PorchChair_2', [26, -2.2], 0, C.woodLight, true);
  b.prop('PorchSwing', [10.5, -3], 0.55, v3(1.8, 0.5, 0.6), C.woodLight);
  b.porchCrawlspace('UnderPorch', 'hide under the porch', 'Porch');
  b.hedge('Hedge', [-1.6, 12], y, 'hide in the hedge', 'West yard');
  for (let i = 0; i < 6; i++) b.prop('Bush_' + i, [-1.3, 2 + i * 1.6], y + 0.6, v3(1.3, 1.2, 1.3), C.leaf, { shape: 'sphere' });
  for (let i = 0; i < 5; i++) b.prop('Bush_N' + i, [3 + i * 1.5, 39.2], y + 0.6, v3(1.3, 1.2, 1.3), C.leaf, { shape: 'sphere' });
  b.dogHouse('DogHouse', [30, 36.5], y, 'hide in the dog house', 'Back yard');
  b.wheelieBins([35.4, 23.5], y, 'hide in the bin', 'East yard');
  b.remove('Shed');
  b.shed('Shed', [8, 37.5], y, 'hide in the shed', 'Back yard');
  b.carTrunk('hide in the trunk', 'Garage');
  b.remove('Garage_Workbench');
  const gb = [GARAGE.x1 - 1.2, GARAGE.z1 - 0.6];
  b.table('Garage_Workbench', gb, y, v3(2.6, 0.9, 0.9), C.wood, 0.08);
  b.workbenchTarp('Garage_Workbench', gb, y, v3(2.6, 0.9, 0.9), BACK, 'hide under the workbench', 'Garage');
  b.prop('Trampoline', [20, 30], y + 0.45, v3(3, 0.15, 3), C.dark, { shape: 'cyl' });
  b.prop('BirdBath', [6, 30], y + 0.5, v3(0.7, 1, 0.7), C.porcelain, { shape: 'cyl' });
}

function buildRooms(b) {
  b.room('Living room', 0, 12, 0, 12, 0, 9, 6);
  b.room('Den', 0, 12, 12, 18, 0, 6, 14);
  b.room('Rec room', 0, 12, 18, 24, 0, 9.5, 21);
  b.room('Foyer', 12, 20, 0, 12, 0, 17, 9);
  b.room('Back hall', 12, 20, 12, 17, 0, 16, 14.5);
  b.room('Mudroom', 12, 20, 17, 24, 0, 16, 21);
  b.room('Dining room', 20, 32, 0, 10, 0, 23, 7.5);
  b.room('Kitchen', 20, 32, 10, 18, 0, 23.5, 16);
  b.room('Service room', 20, 32, 18, 24, 0, 29, 20);
  b.room('Master bedroom', 0, 12, 0, 12, UP, 7, 6);
  b.room('Bedroom 2', 0, 12, 12, 18, UP, 6, 13.5);
  b.room('Bedroom 3', 0, 12, 18, 24, UP, 7, 22);
  b.room('Gallery', 12, 20, 0, 24, UP, 18, 11);
  b.room('Bedroom 4', 20, 32, 0, 9, UP, 24, 6);
  b.room('Bathroom', 20, 26, 9, 14, UP, 22.5, 12);
  b.room('Bedroom 5', 26, 32, 9, 18, UP, 28, 11);
  b.room('Rear hall', 20, 32, 14, 24, UP, 23, 19);
  b.room('Attic west', 0, 12, 3, 21, ATTIC, 7, 14);
  b.room('Attic centre', 12, 20, 3, 21, ATTIC, 16, 9);
  b.room('Attic east', 20, 32, 3, 21, ATTIC, 24, 15);
  b.room('Furnace room', 0, 10, 0, 8, CELLAR, 6, 5.5);
  b.room('Wine cellar', 22, 32, 0, 8, CELLAR, 26, 4);
  b.room('Storage', 0, 10, 16, 24, CELLAR, 5, 21);
  b.room('Cellar', 10, 22, 0, 24, CELLAR, 15, 12);
  b.room('Cellar east', 22, 32, 8, 24, CELLAR, 26, 15);
  b.room('Garage', 34, 44, 26, 34, YARD, 39, 30);
  b.room('Porch', -1, 33, -4.6, 0, YARD, 16, -2);
  b.room('Front yard', -2.3, 46, -18, -4.6, YARD, 28, -10);
  b.room('West yard', -2.3, 0, 0, 24, YARD, -1, 12);
  b.room('East yard', 32, 46, 0, 26, YARD, 39, 12);
  b.room('Back yard', -2.3, 46, 24, 40, YARD, 20, 32);
}

function buildPoints(b) {
  const p = b.points;
  p.killerWait = plan(39, YARD + 0.1, -24);
  p.killerSpawn = plan(16, 0.1, -2.2);
  p.huddle = [plan(4.5, 0, 5.1), plan(4.5, 0, 7), plan(7.5, 0, 7.2), plan(7.6, 0, 4.9), plan(6, 0, 4.1)];
  p.meetingCam = { pos: plan(10.2, 1.9, 1.9), look: plan(6, 1.1, 6) };
  p.cruiserStart = plan(62, YARD, -25);
  p.arrivePath = [plan(48, YARD, -24.5), plan(39, YARD, -22)];
  p.leavePath = [plan(39, YARD, -27), plan(-6, YARD, -27)];
  p.exit = plan(39, YARD, -20.5);
  p.rescueCam = { pos: plan(46, YARD + 2.4, -27.5), look: plan(38.5, YARD + 1.2, -17) };
  p.cruiserSize = v3(2.1, 1.5, 4.9);
}

// ------------------------------------------------------------ Unity-local -> three.js world
function toWorld(v) { return [ORIGIN.x + v.x, ORIGIN.y + v.y, -(ORIGIN.z + v.z)]; }
function dirWorld(v) { return [v.x, v.y, -v.z]; }
function finalize(b) {
  const boxes = b.boxes.map(x => ({ name: x.name, shape: x.shape, c: toWorld(x.c), s: [x.s.x, x.s.y, x.s.z], color: x.color, solid: x.solid, rotX: -x.rotX }));
  const covers = b.covers.map(cv => ({
    id: cv.id, name: cv.name, motion: cv.motion, pivot: toWorld(cv.pivot), fwd: dirWorld(cv.fwd),
    parts: cv.parts.map(pt => ({ ...pt })),
  }));
  const spots = b.spots.map(s => ({ ...s, entry: toWorld(s.entry), hidden: toWorld(s.hidden), dir: dirWorld(s.dir) }));
  const rooms = b.rooms.map(r => {
    const a = toWorld(r.min), c = toWorld(r.max);
    return { name: r.name, min: [Math.min(a[0], c[0]), Math.min(a[1], c[1]), Math.min(a[2], c[2])], max: [Math.max(a[0], c[0]), Math.max(a[1], c[1]), Math.max(a[2], c[2])], scan: toWorld(r.scan), floorY: r.floorY + ORIGIN.y };
  });
  const lights = b.lights.map(l => ({ ...l, p: toWorld(l.p) }));
  const P = b.points;
  const points = {
    killerWait: toWorld(P.killerWait), killerSpawn: toWorld(P.killerSpawn), huddle: P.huddle.map(toWorld),
    meetingCam: { pos: toWorld(P.meetingCam.pos), look: toWorld(P.meetingCam.look) },
    cruiserStart: toWorld(P.cruiserStart), arrivePath: P.arrivePath.map(toWorld), leavePath: P.leavePath.map(toWorld), exit: toWorld(P.exit),
    rescueCam: { pos: toWorld(P.rescueCam.pos), look: toWorld(P.rescueCam.look) },
    cruiserSize: [P.cruiserSize.x, P.cruiserSize.y, P.cruiserSize.z],
    gateLeaves: P.gateLeaves, gateBlocker: { c: toWorld(P.gateBlocker.c), s: [P.gateBlocker.s.x, P.gateBlocker.s.y, P.gateBlocker.s.z] },
  };
  return { boxes, covers, spots, rooms, lights, points };
}
