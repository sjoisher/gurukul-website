import type { MetadataRoute } from "next";
import { langPath, langs } from "@/lib/i18n";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(langs.map((l) => [l, `${site.url}${langPath[l]}`]));
  return langs.map((l) => ({
    url: `${site.url}${langPath[l]}`,
    changeFrequency: "monthly",
    priority: l === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
