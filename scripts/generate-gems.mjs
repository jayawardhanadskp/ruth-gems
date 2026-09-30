// Generates the faceted gem illustrations in public/images/gems.
// Run: node scripts/generate-gems.mjs
import { writeFileSync } from "node:fs";

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const mix = (c, t, k) => c.map((v, i) => Math.round(v + (t[i] - v) * k));
const css = (c) => `rgb(${c.join(",")})`;
const shade = (base, k) =>
  k >= 0 ? css(mix(base, [255, 255, 255], k)) : css(mix(base, [0, 0, 0], -k));
const pt = (cx, cy, r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
const poly = (pts, fill, extra = "") =>
  `<polygon points="${pts.map((p) => p.map((n) => n.toFixed(1)).join(",")).join(" ")}" fill="${fill}" stroke="rgba(255,255,255,.28)" stroke-width=".8" stroke-linejoin="round" ${extra}/>`;
const LIGHT = -Math.PI * 0.75; // light from top-left

function wrap(body, id, base) {
  const c = hex(base);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" role="img" aria-hidden="true">
<defs>
<radialGradient id="g${id}" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="${css(mix(c, [255, 255, 255], 0.55))}" stop-opacity=".55"/><stop offset="1" stop-color="${base}" stop-opacity="0"/></radialGradient>
<filter id="s${id}" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="${shade(c, -0.6)}" flood-opacity=".28"/></filter>
</defs>
<circle cx="120" cy="120" r="112" fill="url(#g${id})"/>
<g filter="url(#s${id})">${body}</g>
</svg>`;
}

function brilliant(base, n, id, rot = 0) {
  const c = hex(base), cx = 120, cy = 120, R = 82;
  const step = (Math.PI * 2) / n, half = step / 2;
  const T = (i) => pt(cx, cy, R * 0.42, rot + i * step);
  const M = (i) => pt(cx, cy, R * 0.72, rot + i * step + half);
  const O = (i) => pt(cx, cy, R, rot + i * step);
  let out = "";
  for (let i = 0; i < n; i++) {
    const a = rot + i * step;
    const l = Math.cos(a + half - LIGHT);
    out += poly([O(i), M(i), O(i + 1)], shade(c, l * 0.22 - 0.12));
    out += poly([T(i), M(i - 1), O(i), M(i)], shade(c, Math.cos(a - LIGHT) * 0.3 + (i % 2 ? 0.05 : -0.04)));
    out += poly([T(i), T(i + 1), M(i)], shade(c, l * 0.3 + 0.12));
  }
  const table = Array.from({ length: n }, (_, i) => T(i));
  out += poly(table, shade(c, 0.32));
  out += `<ellipse cx="104" cy="100" rx="16" ry="9" fill="#fff" opacity=".55" transform="rotate(-28 104 100)"/>`;
  return wrap(out, id, base);
}

function stepCut(base, id) {
  const c = hex(base), cx = 120, cy = 120, W = 66, H = 86, cut = 24;
  const ring = (k) => {
    const w = W - k * 15, h = H - k * 19, ch = Math.max(cut - k * 5, 6);
    return [
      [cx - w + ch, cy - h], [cx + w - ch, cy - h], [cx + w, cy - h + ch], [cx + w, cy + h - ch],
      [cx + w - ch, cy + h], [cx - w + ch, cy + h], [cx - w, cy + h - ch], [cx - w, cy - h + ch],
    ];
  };
  const normals = [-Math.PI / 2, -Math.PI / 4, 0, 0, Math.PI / 2, Math.PI * 0.75, Math.PI, Math.PI];
  // side j of the 8-gon runs p[j] -> p[j+1]; compute true outward normals
  let out = "";
  for (let k = 0; k < 3; k++) {
    const a = ring(k), b = ring(k + 1);
    for (let j = 0; j < 8; j++) {
      const p = a[j], q = a[(j + 1) % 8];
      const nx = (q[1] - p[1]), ny = -(q[0] - p[0]);
      const ang = Math.atan2(ny, nx);
      const l = Math.cos(ang - LIGHT);
      out += poly([a[j], a[(j + 1) % 8], b[(j + 1) % 8], b[j]], shade(c, l * 0.26 - 0.06 + k * 0.04));
    }
  }
  out += poly(ring(3), shade(c, 0.3));
  out += `<path d="M78 66 L112 66 L78 112 Z" fill="#fff" opacity=".32"/>`;
  void normals;
  return wrap(out, id, base);
}

function cabochon(base, id) {
  const c = hex(base);
  const body = `<ellipse cx="120" cy="124" rx="78" ry="64" fill="${shade(c, -0.25)}"/>
<ellipse cx="120" cy="120" rx="78" ry="64" fill="url(#cab${id})"/>
<path d="M120 62 Q132 120 120 178 Q108 120 120 62Z" fill="#fff6d8" opacity=".9"/>
<path d="M120 70 Q127 120 120 170 Q113 120 120 70Z" fill="#fff" opacity=".9"/>
<ellipse cx="92" cy="92" rx="20" ry="10" fill="#fff" opacity=".45" transform="rotate(-30 92 92)"/>`;
  const svg = wrap(body, id, base);
  return svg.replace("</defs>", `<radialGradient id="cab${id}" cx="38%" cy="32%" r="80%"><stop offset="0" stop-color="${shade(c, 0.45)}"/><stop offset=".55" stop-color="${base}"/><stop offset="1" stop-color="${shade(c, -0.4)}"/></radialGradient></defs>`);
}

const gems = {
  ruby: brilliant("#b5122e", 16, "ru", Math.PI / 16),
  sapphire: brilliant("#23409e", 8, "sa", Math.PI / 8),
  spinel: brilliant("#d1457a", 12, "sp"),
  alexandrite: stepCut("#2c8a78", "al"),
  "cats-eye": cabochon("#c4922a", "ce"),
  emerald: stepCut("#0e7a47", "em"),
};
for (const [name, svg] of Object.entries(gems)) {
  writeFileSync(`public/images/gems/${name}.svg`, svg);
}
console.log("wrote", Object.keys(gems).length, "gems");

// ---- shape line icons (gold hairline) ----
const S = 'fill="none" stroke="#8d6f31" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"';
const icon = (inner) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 80" aria-hidden="true"><g ${S}>${inner}</g></svg>`;
const spokes = (cx, cy, r1, r2, n, rot = 0) =>
  Array.from({ length: n }, (_, i) => {
    const a = rot + (i * 2 * Math.PI) / n;
    const [x1, y1] = pt(cx, cy, r1, a), [x2, y2] = pt(cx, cy, r2, a);
    return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}"/>`;
  }).join("");
const shapeIcons = {
  round: icon(`<circle cx="48" cy="40" r="31"/><circle cx="48" cy="40" r="19"/><circle cx="48" cy="40" r="9"/>${spokes(48, 40, 9, 31, 12)}`),
  cushion: icon(`<rect x="15" y="10" width="66" height="60" rx="18"/><rect x="29" y="22" width="38" height="36" rx="9"/><path d="M22 18L32 27M74 18L64 27M22 62L32 53M74 62L64 53"/>`),
  emerald: icon(`<path d="M28 8H68L84 24V56L68 72H28L12 56V24Z"/><path d="M33 17H63L74 28V52L63 63H33L22 52V28Z"/><path d="M40 27H56L62 33V47L56 53H40L34 47V33Z"/><path d="M28 8L33 17M68 8L63 17M84 24L74 28M84 56L74 52M68 72L63 63M28 72L33 63M12 56L22 52M12 24L22 28"/>`),
  pear: icon(`<path d="M48 6C52 20 72 32 72 50C72 64 62 74 48 74C34 74 24 64 24 50C24 32 44 20 48 6Z"/><path d="M48 22C50 32 62 38 62 50C62 59 56 65 48 65C40 65 34 59 34 50C34 38 46 32 48 22Z"/><path d="M48 6L48 22M24 50L34 50M72 50L62 50M48 74L48 65"/>`),
  heart: icon(`<path d="M48 72C20 52 10 38 10 26C10 15 18 8 28 8C37 8 44 13 48 20C52 13 59 8 68 8C78 8 86 15 86 26C86 38 76 52 48 72Z"/><path d="M48 58C30 44 24 35 24 27C24 22 28 19 32 19C39 19 45 25 48 30C51 25 57 19 64 19C68 19 72 22 72 27C72 35 66 44 48 58Z"/>`),
  cabochon: icon(`<ellipse cx="48" cy="40" rx="36" ry="28"/><ellipse cx="48" cy="40" rx="25" ry="18"/><path d="M33 33Q40 26 52 25"/>`),
};
for (const [name, svg] of Object.entries(shapeIcons)) {
  writeFileSync(`public/images/shapes/${name}.svg`, svg);
}
console.log("wrote", Object.keys(shapeIcons).length, "shape icons");
