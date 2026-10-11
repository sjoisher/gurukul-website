// Makes web-sized copies of the photos named in content/*.json, so a full-size
// photo uploaded through /admin never reaches visitors as-is.
//
// Originals live in content/photos/ (outside public/, so they are never
// deployed) and are named in the content files as /photos/<path>.
//
// For each photo it writes a 600px-wide thumbnail and a copy at most 1600px on
// its longer side to public/images/generated/, and records their paths and
// size in .cache/media.json for lib/content.ts. Runs before `next dev` and
// `next build`. File names carry a hash of the original, so a replaced photo
// gets a new URL (and browsers can cache them for good); unchanged photos are
// skipped.

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const outDir = path.join(root, "public/images/generated");
const manifestPath = path.join(root, ".cache/media.json");

const read = (f) => JSON.parse(fs.readFileSync(path.join(root, f), "utf8"));
// Photos the page uses outside the gallery (hero, about and vision sections).
const sources = new Set(["/photos/gallery/14.jpg", "/photos/gallery/7.jpg", "/photos/gallery/5.jpg", "/photos/gallery/9.jpg", "/photos/gallery/20.jpg"]);
for (const p of read("content/gallery.json").photos) sources.add(p.image);
for (const f of fs.readdirSync(path.join(root, "content/news")).filter((f) => f.endsWith(".json"))) {
  const image = read(`content/news/${f}`).image;
  if (image) sources.add(image);
}

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(path.dirname(manifestPath), { recursive: true });

const manifest = {};
const keep = new Set();
let made = 0;
const missing = [];

for (const src of sources) {
  const file = path.join(root, "content", src);
  if (!src.startsWith("/photos/") || !fs.existsSync(file)) {
    missing.push(src);
    continue;
  }
  const hash = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex").slice(0, 8);
  const slug = src.replace(/^\/photos\//, "").replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9]+/g, "-") + "-" + hash;
  const sizes = { sm: { file: `${slug}-600.jpg`, resize: { width: 600 } }, lg: { file: `${slug}-1600.jpg`, resize: { width: 1600, height: 1600, fit: "inside" } } };
  for (const { file: name, resize } of Object.values(sizes)) {
    const out = path.join(outDir, name);
    keep.add(name);
    if (fs.existsSync(out)) continue;
    await sharp(file).rotate().resize({ ...resize, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toFile(out);
    made++;
  }
  const { width, height } = await sharp(path.join(outDir, sizes.lg.file)).metadata();
  manifest[src] = { sm: `/images/generated/${sizes.sm.file}`, lg: `/images/generated/${sizes.lg.file}`, w: width, h: height };
}

if (missing.length) {
  console.error(`media: these photos are named in content/ but are not in content/photos/:\n  ${missing.join("\n  ")}`);
  process.exit(1);
}

for (const f of fs.readdirSync(outDir)) if (!keep.has(f)) fs.rmSync(path.join(outDir, f));
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`media: ${sources.size} photos, ${made} files written`);
