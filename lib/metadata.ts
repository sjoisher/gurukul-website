import type { Metadata } from "next";
import { dict, htmlLang, langPath, type Lang } from "./i18n";

export function pageMetadata(lang: Lang): Metadata {
  const t = dict[lang];
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: langPath[lang],
      languages: {
        "en-IN": langPath.en,
        "hi-IN": langPath.hi,
        "gu-IN": langPath.gu,
        "x-default": langPath.en,
      },
    },
    openGraph: {
      type: "website",
      title: t.meta.title,
      description: t.meta.description,
      url: langPath[lang],
      siteName: t.name,
      locale: htmlLang[lang].replace("-", "_"),
      images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: t.name }],
    },
    twitter: { card: "summary_large_image" },
  };
}
