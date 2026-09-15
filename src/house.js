// Turns the plan into three.js meshes (one merged mesh for all the static blockout, tinted per
// box with a metre grid like the Unity TriplanarGrid material), the collision world, and the
// movable covers (doors, curtains, lids, gate leaves).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { CollisionWorld } from './collision.js';

export function makeGridTexture() {
  const size = 256;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, size, size);
  g.strokeStyle = 'rgba(0,0,0,0.10)';
  g.lineWidth = 1;
  for (let i = 1; i < 4; i++) {
    g.beginPath(); g.moveTo(i * size / 4, 0); g.lineTo(i * size / 4, size); g.stroke();
    g.beginPath(); g.moveTo(0, i * size / 4); g.lineTo(size, i * size / 4); g.stroke();
  }
  g.strokeStyle = 'rgba(0,0,0,0.28)';
  g.lineWidth = 3;
  g.strokeRect(1.5, 1.5, size - 3, size - 3);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function boxGeometry(s) {
  const g = new THREE.BoxGeometry(s[0], s[1], s[2]);
  const uv = g.attributes.uv;
  // BoxGeometry faces: +x -x (depth x height), +y -y (width x depth), +z -z (width x height); scale to metres.
  const scales = [[s[2], s[1]], [s[2], s[1]], [s[0], s[2]], [s[0], s[2]], [s[0], s[1]], [s[0], s[1]]];
  for (let f = 0; f < 6; f++) for (let v = 0; v < 4; v++) {
    const i = f * 4 + v;
    uv.setXY(i, uv.getX(i) * scales[f][0], uv.getY(i) * scales[f][1]);
  }
  return g;
}
function shapeGeometry(shape, s) {
  if (shape === 'cyl') {
    const g = new THREE.CylinderGeometry(s[0] / 2, s[0] / 2, s[1], 14, 1);
    if (s[2] !== s[0]) g.scale(1, 1, s[2] / s[0]);
    return g;
  }
  if (shape === 'sphere') {
    const g = new THREE.SphereGeometry(0.5, 12, 8);
    g.scale(s[0], s[1], s[2]);
    return g;
  }
  return boxGeometry(s);
}
function colorize(g, color) {
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = color[0]; arr[i * 3 + 1] = color[1]; arr[i * 3 + 2] = color[2]; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}

export function buildHouse(plan, scene) {
  const tex = makeGridTexture();
  const material = new THREE.MeshLambertMaterial({ map: tex, vertexColors: true });
  const world = new CollisionWorld();
  const geos = [];
  for (const b of plan.boxes) {
    const g = colorize(shapeGeometry(b.shape, b.s), b.color);
    if (b.rotX) g.rotateX(b.rotX);
    g.translate(b.c[0], b.c[1], b.c[2]);
    geos.push(g);
    if (b.solid) world.addBox(b.c, b.s, b.name);
  }
  const merged = mergeGeometries(geos, false);
  for (const g of geos) g.dispose();
  const mesh = new THREE.Mesh(merged, material);
  mesh.frustumCulled = false;
  scene.add(mesh);

  // Movable covers
  const covers = plan.covers.map(cv => makeCover(cv, material, scene));

  // Room lights
  const lights = [];
  for (const l of plan.lights) {
    const light = new THREE.PointLight(new THREE.Color(l.color[0], l.color[1], l.color[2]), l.intensity * 8, l.range, 1.6);
    light.position.set(l.p[0], l.p[1], l.p[2]);
    scene.add(light);
    lights.push(light);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(l.color[0], l.color[1], l.color[2]) }));
    bulb.position.copy(light.position);
    scene.add(bulb);
  }
  return { mesh, world, covers, lights, material };
}

/** Frame of a cover in world space: local +z = fwd, local +x = right (mirrors the builder's frame). */
export function coverFrame(fwd) {
  const f = new THREE.Vector3(fwd[0], fwd[1], fwd[2]);
  const r = new THREE.Vector3(-fwd[2], 0, fwd[0]); // (fz,0,fx) in Unity-local becomes (-fz? ) -> see plan.js: right_w = (fz, 0, fx) with fz already flipped
  // plan.js flips z on the way out: fwd_w = (fx, 0, -fz), right_w = (fz, 0, fx) = (-fwd_w.z, 0, fwd_w.x)
  return { f, r, u: new THREE.Vector3(0, 1, 0) };
}

function makeCover(cv, material, scene) {
  const root = new THREE.Group();
  const { f, r, u } = coverFrame(cv.fwd);
  const pivot = new THREE.Vector3(cv.pivot[0], cv.pivot[1], cv.pivot[2]);
  const parts = [];
  for (const pt of cv.parts) {
    const hingePos = pivot.clone().addScaledVector(r, pt.hinge[0]).addScaledVector(u, pt.hinge[1]).addScaledVector(f, pt.hinge[2]);
    const hinge = new THREE.Object3D();
    hinge.position.copy(hingePos);
    const [lx, ly, lz, w, h, d] = pt.leaf;
    const along = Math.abs(f.x) > 0.5; // leaf width runs along world z when the front faces +-x
    const size = along ? [d, h, w] : [w, h, d];
    const centre = new THREE.Vector3().addScaledVector(r, lx).addScaledVector(u, ly).addScaledVector(f, lz);
    let mesh;
    if (pt.slats) {
      // Louvred leaf: stiles + rails and 13 cm slats on a 10 cm pitch tilted so you can peek
      // out between them (the Unity concealment recipe), no solid panel.
      mesh = new THREE.Object3D();
      mesh.position.copy(centre);
      const frameMat = material;
      const stile = (x) => { const m = new THREE.Mesh(colorize(boxGeometry(along ? [d, h, 0.08] : [0.08, h, d]), pt.color), frameMat); m.position.addScaledVector(r, x); return m; };
      const rail = (y) => { const m = new THREE.Mesh(colorize(boxGeometry(along ? [d, 0.12, w] : [w, 0.12, d]), pt.color), frameMat); m.position.addScaledVector(u, y); return m; };
      mesh.add(stile(-w / 2 + 0.04), stile(w / 2 - 0.04), rail(h / 2 - 0.06), rail(-h / 2 + 0.06));
      const slatGeo = colorize(boxGeometry(along ? [0.13, 0.012, w - 0.16] : [w - 0.16, 0.012, 0.13]), [0.42, 0.34, 0.24]);
      const count = Math.floor((h - 0.24) / 0.1);
      for (let i = 0; i < count; i++) {
        const slat = new THREE.Mesh(slatGeo, frameMat);
        slat.position.addScaledVector(u, -h / 2 + 0.12 + 0.05 + i * 0.1);
        slat.quaternion.setFromAxisAngle(r, -0.78); // outer edge slopes down-and-out
        mesh.add(slat);
      }
    } else {
      mesh = new THREE.Mesh(colorize(boxGeometry(size), pt.color), material);
      mesh.position.copy(centre);
    }
    hinge.add(mesh);
    if (pt.bars) {
      const barMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1e });
      for (let i = 0; i < 6; i++) {
        const bar = new THREE.Mesh(new THREE.BoxGeometry(0.05, h, 0.05), barMat);
        bar.position.copy(mesh.position).addScaledVector(r, -w / 2 + 0.2 + i * (w - 0.4) / 5).addScaledVector(f, 0.08);
        hinge.add(bar);
      }
    }
    root.add(hinge);
    parts.push({ hinge, pt, r, f, u });
  }
  scene.add(root);
  const cover = {
    id: cv.id, name: cv.name, motion: cv.motion, root, parts, open: 0,
    set(frac) {
      this.open = frac;
      for (const { hinge, pt, r, f, u } of parts) {
        if (cv.motion === 'hinge') hinge.rotation.set(0, (pt.openAngle ?? 1.6) * frac, 0);
        else if (cv.motion === 'lid') hinge.quaternion.setFromAxisAngle(r, Math.abs(pt.openAngle ?? 1.3) * frac);
        else if (cv.motion === 'slide') {
          const amount = pt.slideAmount ?? (pt.leaf[3] * 0.85);
          if (pt.slideDir === 'y') hinge.position.copy(hingeBase(hinge)).addScaledVector(u, amount * frac);
          else hinge.position.copy(hingeBase(hinge)).addScaledVector(r, amount * frac);
        }
      }
    },
  };
  return cover;
}
function hingeBase(hinge) {
  if (!hinge.userData.base) hinge.userData.base = hinge.position.clone();
  return hinge.userData.base;
}
