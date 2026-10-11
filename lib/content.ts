// Content edited at /admin (Sveltia CMS), read from content/*.json at build
// time. Every text field holds all three languages: { en, hi, gu }.

import fs from "node:fs";
import path from "node:path";
import type { Lang } from "./i18n";
import contact from "@/content/contact.json";
import csr from "@/content/csr.json";
import gallery from "@/content/gallery.json";
import glance from "@/content/glance.json";
import teachers from "@/content/teachers.json";
import trustees from "@/content/trustees.json";
import videos from "@/content/videos.json";

type Localized = Record<Lang, string>;

export type Photo = { sm: string; lg: string; w: number; h: number };

type NewsFile = { date: string; title: Localized; body: Localized; image?: string; link?: string };

const root = process.cwd();

let manifest: Record<string, Photo> | undefined;

/** Web-sized copies of a photo in content/photos/, made by scripts/media.mjs. */
export function photo(src: string): Photo {
  manifest ??= JSON.parse(fs.readFileSync(path.join(root, ".cache/media.json"), "utf8")) as Record<string, Photo>;
  const p = manifest[src];
  if (!p) throw new Error(`No web-sized copy of ${src}. Run "npm run media".`);
  return p;
}

// An editor may leave a translation blank: fall back to English.
const pick = (l: Localized | undefined, lang: Lang) => (l?.[lang] || l?.en || "").trim();

function news(lang: Lang) {
  const dir = path.join(root, "content/news");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as NewsFile)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((n) => ({
      date: n.date,
      title: pick(n.title, lang),
      body: pick(n.body, lang),
      image: n.image ? photo(n.image) : undefined,
      link: n.link?.trim() || undefined,
    }));
}

export function content(lang: Lang) {
  return {
    glance: glance.items.map((g) => ({ value: pick(g.value, lang), label: pick(g.label, lang) })),
    teachers: teachers.people.map((p) => ({ name: pick(p.name, lang), note: pick(p.note, lang) })),
    trustees: trustees.trustees.map((t) => pick(t.name, lang)),
    gallery: gallery.photos.map((p) => ({ ...photo(p.image), caption: pick(p.caption, lang) })),
    stem: videos.stem.map((v) => ({
      video: v.video,
      poster: v.poster || undefined,
      seconds: v.seconds || undefined,
      caption: pick(v.caption, lang),
    })),
    csr: {
      total: pick(csr.total, lang),
      centreFacts: csr.centreFacts.map((f) => ({ label: pick(f.label, lang), value: pick(f.value, lang) })),
      levels: csr.levels.map((l) => ({ title: pick(l.title, lang), amount: pick(l.amount, lang), text: pick(l.text, lang) })),
    },
    address: pick(contact.address, lang).split("\n").map((s) => s.trim()).filter(Boolean),
    bank: { name: pick(contact.bank.name, lang), accountName: pick(contact.bank.accountName, lang) },
    news: news(lang),
  };
}

export type Content = ReturnType<typeof content>;
