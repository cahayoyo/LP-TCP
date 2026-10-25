// Generate siluet peta Indonesia sebagai komponen Astro inline SVG.
// Sumber data: Natural Earth (public domain) via repo superpikar/indonesia-geojson.
// Jalankan: node scripts/gen-indo-map.mjs
const res = await fetch("https://raw.githubusercontent.com/superpikar/indonesia-geojson/master/indonesia.geojson");
const geo = await res.json();

const rings = [];
let minLon = 999, maxLon = -999, minLat = 999, maxLat = -999;
const track = ([lon, lat]) => {
  if (lon < minLon) minLon = lon;
  if (lon > maxLon) maxLon = lon;
  if (lat < minLat) minLat = lat;
  if (lat > maxLat) maxLat = lat;
};
for (const f of geo.features) {
  const g = f.geometry;
  if (g.type === "MultiPolygon") for (const poly of g.coordinates) for (const ring of poly) { for (const p of ring) track(p); rings.push(ring); }
  else if (g.type === "Polygon") for (const ring of g.coordinates) { for (const p of ring) track(p); rings.push(ring); }
}

const dLon = maxLon - minLon, dLat = maxLat - minLat;
const W = 1000, H = Math.round((dLat / dLon) * W);
const S = W / dLon;
const EPS = 0.28;

const decimate = (ring) => {
  const out = [];
  for (const [lon, lat] of ring) {
    const px = (lon - minLon) * S, py = (maxLat - lat) * S;
    const last = out[out.length - 1];
    if (!last || Math.hypot(px - last[0], py - last[1]) >= EPS * S) out.push([px, py]);
  }
  if (out.length > 2 && Math.hypot(out[0][0] - out[out.length - 1][0], out[0][1] - out[out.length - 1][1]) < EPS * S) out.pop();
  return out;
};

const parts = [];
for (const ring of rings) {
  const pts = decimate(ring);
  if (pts.length < 4) continue;
  parts.push("M" + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join("L") + "Z");
}
const d = parts.join("");

const astro = `---
// Siluet peta Indonesia, digenerate scripts/gen-indo-map.mjs (data Natural Earth, public domain).
interface Props {
  class?: string;
}

const { class: className } = Astro.props;
---

<svg class={className} viewBox="0 0 ${W} ${H}" fill="currentColor" fill-rule="evenodd" aria-hidden="true"><path d="${d}"></path></svg>
`;

const { writeFileSync } = await import("node:fs");
writeFileSync(new URL("../src/components/MapIndonesia.astro", import.meta.url), astro);
console.log(`OK viewBox 0 0 ${W} ${H}, ${parts.length} pulau, path ${(d.length / 1024).toFixed(1)} KB`);
