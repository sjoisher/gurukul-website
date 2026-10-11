import type { MetadataRoute } from "next";
import { programs } from "@/lib/content";
import { nav, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...nav.map((n) => n.href), ...programs.map((p) => `/programs/${p.slug}/`)];
  return paths.map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 }));
}
