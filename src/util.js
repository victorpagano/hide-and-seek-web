// Small array-vector helpers shared by the headless sim and the client.
export const dist2d = (a, b) => Math.hypot(a[0] - b[0], a[2] - b[2]);
export const dist3d = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
export const wrapAngle = (a) => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
export const lerpAngle = (a, b, t) => a + wrapAngle(b - a) * t;
export const yawTo = (from, to) => Math.atan2(to[0] - from[0], -(to[2] - from[2])); // yaw 0 looks down -z
export const forward = (yaw) => [Math.sin(yaw), 0, -Math.cos(yaw)];
export const rand = (lo, hi) => lo + Math.random() * (hi - lo);
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export function shuffle(arr) { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
export const roomContains = (r, p) => p[0] >= r.min[0] && p[0] <= r.max[0] && p[1] >= r.min[1] && p[1] <= r.max[1] && p[2] >= r.min[2] && p[2] <= r.max[2];
export const isTouch = () => ('ontouchstart' in window) || navigator.maxTouchPoints > 1;
export const SPRITES = { kevin: 'kevin-idle', killer: 'killer', bots: ['final-girl', 'jockey', 'pop-girl'] };
export const BOT_NAMES = ['Final Girl', 'Jock', 'Popular Girl'];
export const SURVIVOR_SEATS = 4;
