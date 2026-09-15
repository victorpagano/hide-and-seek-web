// three.js side: the scene, the night lighting, billboard characters (Kevin, the three NPC
// girls/guys and the four-frame killer walk), the police cruiser and the camera rigs.
import * as THREE from 'three';
import { buildHouse } from './house.js';
import { clamp, lerp, lerpAngle, isTouch } from './util.js';

const BOOM = 2.8, PIVOT_H = 1.5, SHOULDER = 0.55;

export class View {
  constructor(canvas, plan) {
    this.plan = plan;
    this.mobile = isTouch();
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: !this.mobile, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.mobile ? 1.25 : 1.5));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x05060c);
    this.scene.fog = new THREE.FogExp2(0x05060c, 0.016);
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.08, 220);
    this.scene.add(new THREE.HemisphereLight(0x2a3552, 0x0b0a10, 0.55));
    const moon = new THREE.DirectionalLight(0x8090c0, 0.45);
    moon.position.set(-30, 60, 20);
    this.scene.add(moon);
    this.house = buildHouse(plan, this.scene);
    this.world = this.house.world;
    this.covers = this.house.covers;
    this.chars = new Map();
    this.textures = new Map();
    this.loader = new THREE.TextureLoader();
    this.cruiser = this.makeCruiser();
    this.blink = 0;
    this.camMode = { type: 'fixed', pos: plan.points.meetingCam.pos, look: plan.points.meetingCam.look };
    this.camPos = new THREE.Vector3(); this.camLook = new THREE.Vector3();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }
  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }
  texture(name) {
    if (!this.textures.has(name)) {
      const t = this.loader.load(`./sprites/${name}.png`);
      t.colorSpace = THREE.SRGBColorSpace;
      t.minFilter = THREE.LinearMipmapLinearFilter;
      this.textures.set(name, t);
    }
    return this.textures.get(name);
  }
  makeCruiser() {
    const g = new THREE.Group();
    const s = this.plan.points.cruiserSize;
    const body = new THREE.Mesh(new THREE.BoxGeometry(s[0], s[1] * 0.6, s[2]), new THREE.MeshLambertMaterial({ color: 0x1b1f2e }));
    body.position.y = s[1] * 0.3 + 0.25;
    const cab = new THREE.Mesh(new THREE.BoxGeometry(s[0] * 0.9, s[1] * 0.45, s[2] * 0.45), new THREE.MeshLambertMaterial({ color: 0xe8e8ee }));
    cab.position.set(0, s[1] * 0.6 + 0.25 + s[1] * 0.2, 0.1);
    const doors = new THREE.Mesh(new THREE.BoxGeometry(s[0] + 0.02, s[1] * 0.3, s[2] * 0.4), new THREE.MeshLambertMaterial({ color: 0xe8e8ee }));
    doors.position.y = s[1] * 0.45;
    this.lightRed = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.15, 0.25), new THREE.MeshBasicMaterial({ color: 0xff2020 }));
    this.lightBlue = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.15, 0.25), new THREE.MeshBasicMaterial({ color: 0x2040ff }));
    this.lightRed.position.set(-0.35, cab.position.y + s[1] * 0.3, 0.1);
    this.lightBlue.position.set(0.35, cab.position.y + s[1] * 0.3, 0.1);
    this.cruiserLight = new THREE.PointLight(0xff3030, 0, 18, 1.5);
    this.cruiserLight.position.set(0, 2.2, 0);
    for (let i = 0; i < 4; i++) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.25, 12), new THREE.MeshLambertMaterial({ color: 0x111111 }));
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set((i % 2 ? 1 : -1) * s[0] / 2, 0.35, (i < 2 ? 1 : -1) * s[2] * 0.32);
      g.add(wheel);
    }
    g.add(body, cab, doors, this.lightRed, this.lightBlue, this.cruiserLight);
    const p = this.plan.points.cruiserStart;
    g.position.set(p[0], p[1], p[2]);
    this.scene.add(g);
    return g;
  }
  setCruiser(x, y, z, yaw, siren, dt) {
    this.cruiser.position.set(x, y, z);
    this.cruiser.rotation.y = yaw;
    this.blink += dt * 6;
    const on = siren && Math.sin(this.blink) > 0, on2 = siren && Math.sin(this.blink) <= 0;
    this.lightRed.material.color.setHex(on ? 0xff3030 : 0x400000);
    this.lightBlue.material.color.setHex(on2 ? 0x3050ff : 0x000040);
    this.cruiserLight.intensity = siren ? 10 : 0;
    this.cruiserLight.color.setHex(on ? 0xff3030 : 0x3050ff);
  }

  // ------------------------------------------------------------ characters
  addChar(e) {
    if (this.chars.has(e.id)) return this.chars.get(e.id);
    const frames = e.sprite === 'killer' ? ['killer-walk-1', 'killer-walk-2', 'killer-walk-3', 'killer-walk-4']
      : e.sprite === 'kevin-idle' ? ['kevin-idle', 'kevin-walk-1', 'kevin-idle', 'kevin-walk-2'] : [e.sprite];
    const mat = new THREE.SpriteMaterial({ map: this.texture(frames[0]), transparent: true, alphaTest: 0.35, depthWrite: true, fog: true });
    const sprite = new THREE.Sprite(mat);
    const height = e.sprite === 'killer' ? 2.0 : 1.78;
    sprite.scale.set(height * (288 / 512), height, 1);
    this.scene.add(sprite);
    const label = this.makeLabel(e.name);
    this.scene.add(label);
    const c = { e, sprite, frames, height, phase: 0, bob: 0, label, lastPos: [...e.pos] };
    this.chars.set(e.id, c);
    return c;
  }
  makeLabel(text) {
    const cv = document.createElement('canvas'); cv.width = 256; cv.height = 48;
    const g = cv.getContext('2d');
    g.font = '600 26px "Segoe UI", system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.shadowColor = '#000'; g.shadowBlur = 6; g.fillStyle = '#efe6d8';
    g.fillText(text, 128, 24);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
    const m = new THREE.SpriteMaterial({ map: t, transparent: true, depthTest: false, depthWrite: false });
    const s = new THREE.Sprite(m);
    s.scale.set(1.6, 0.3, 1);
    return s;
  }
  removeChar(id) {
    const c = this.chars.get(id);
    if (!c) return;
    this.scene.remove(c.sprite);
    this.scene.remove(c.label);
    this.chars.delete(id);
  }
  /** Position/animate a character from its (interpolated) view state. */
  updateChar(c, pos, yaw, spd, dead, hiddenVisible, dt, isLocalThirdPerson) {
    const s = c.sprite;
    const height = c.height;
    if (dead) {
      s.visible = true;
      s.material.rotation = 1.35;
      s.material.color.setRGB(0.45, 0.2, 0.2);
      s.position.set(pos[0], pos[1] + 0.45, pos[2]);
      s.scale.set(height * (288 / 512), height, 1);
      c.label.visible = false;
      return;
    }
    s.material.rotation = 0;
    s.material.color.setRGB(1, 1, 1);
    s.visible = hiddenVisible;
    c.label.visible = hiddenVisible && !isLocalThirdPerson;
    const moved = Math.hypot(pos[0] - c.lastPos[0], pos[2] - c.lastPos[2]);
    c.lastPos = [...pos];
    c.phase += moved * 0.9;
    const bob = Math.abs(Math.sin(c.phase * Math.PI)) * 0.05 * clamp(spd * 2, 0, 1);
    s.position.set(pos[0], pos[1] + height / 2 + bob, pos[2]);
    c.label.position.set(pos[0], pos[1] + height + 0.2, pos[2]);
    if (c.frames.length > 1) {
      const frame = spd > 0.05 ? Math.floor((c.phase * 0.55) % c.frames.length) : 0;
      const tex = this.texture(c.frames[frame]);
      if (s.material.map !== tex) { s.material.map = tex; s.material.needsUpdate = true; }
    }
  }

  // ------------------------------------------------------------ camera rigs
  /** Over-the-shoulder camera around a body. */
  thirdPerson(pos, yaw, pitch, dt, snap = false) {
    const pivot = new THREE.Vector3(pos[0], pos[1] + PIVOT_H, pos[2]);
    const dir = new THREE.Vector3(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch));
    const right = new THREE.Vector3(Math.cos(yaw), 0, Math.sin(yaw));
    const shoulderPivot = pivot.clone().addScaledVector(right, SHOULDER);
    const wanted = shoulderPivot.clone().addScaledVector(dir, -BOOM);
    // pull in on walls
    const t = this.world.rayT([shoulderPivot.x, shoulderPivot.y, shoulderPivot.z], [wanted.x, wanted.y, wanted.z]);
    const camPos = shoulderPivot.clone().lerp(wanted, Math.max(0.12, t - 0.06));
    const lookAt = shoulderPivot.clone().addScaledVector(dir, 10);
    if (snap) { this.camPos.copy(camPos); this.camLook.copy(lookAt); }
    else { this.camPos.lerp(camPos, Math.min(1, dt * 22)); this.camLook.lerp(lookAt, Math.min(1, dt * 30)); }
    this.camera.position.copy(this.camPos);
    this.camera.lookAt(this.camLook);
    this.camera.fov = 62;
    this.camera.updateProjectionMatrix();
  }
  /** First person from inside a hiding spot. */
  peek(pos, eye, yaw, pitch) {
    this.camera.position.set(pos[0], pos[1] + eye, pos[2]);
    const dir = new THREE.Vector3(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch));
    this.camera.lookAt(this.camera.position.clone().add(dir));
    this.camPos.copy(this.camera.position);
    this.camLook.copy(this.camera.position).add(dir.multiplyScalar(10));
    this.camera.fov = 70;
    this.camera.updateProjectionMatrix();
  }
  fixed(pos, look, fov = 50) {
    this.camera.position.set(pos[0], pos[1], pos[2]);
    this.camera.lookAt(look[0], look[1], look[2]);
    this.camPos.copy(this.camera.position); this.camLook.set(look[0], look[1], look[2]);
    this.camera.fov = fov;
    this.camera.updateProjectionMatrix();
  }
  /** Slow orbit around somebody (spectating). */
  orbit(pos, angle, dt) {
    const target = new THREE.Vector3(pos[0], pos[1] + 1.3, pos[2]);
    const wanted = target.clone().add(new THREE.Vector3(Math.sin(angle) * 4.5, 2.2, Math.cos(angle) * 4.5));
    const t = this.world.rayT([target.x, target.y, target.z], [wanted.x, wanted.y, wanted.z]);
    const p = target.clone().lerp(wanted, Math.max(0.15, t - 0.05));
    this.camPos.lerp(p, Math.min(1, dt * 6));
    this.camLook.lerp(target, Math.min(1, dt * 8));
    this.camera.position.copy(this.camPos); this.camera.lookAt(this.camLook);
    this.camera.fov = 58; this.camera.updateProjectionMatrix();
  }
  render() { this.renderer.render(this.scene, this.camera); }
}
