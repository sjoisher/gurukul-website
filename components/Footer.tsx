import { langLabel, langPath, langs, type Dict, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer({ lang, t }: { lang: Lang; t: Dict }) {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="shrink-0 rounded-2xl bg-white p-2"><Logo className="h-16 w-auto" /></span>
            <span className="font-display text-lg font-semibold text-white">{t.name}</span>
          </div>
          <p className="mt-3 text-sm">{t.hero.tagline}</p>
          <p className="mt-4 text-sm text-saffron-light">{t.motto}</p>
          <p className="mt-4 text-xs leading-relaxed text-white/55">
            {t.trust.intro}
            <br />
            {t.trust.facts.map((f) => `${f.label}: ${f.value}`).join(" · ")}
          </p>
        </div>
        <nav aria-label="Sections">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {t.nav.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="hover:text-white">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="space-y-2 text-sm">
          <p><a href={`tel:+91${site.phone}`} className="hover:text-white">{site.phone}</a> · <a href={`tel:+91${site.phone2}`} className="hover:text-white">{site.phone2}</a></p>
          <p><a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a></p>
          <p className="pt-2">
            {langs.map((l, i) => (
              <span key={l}>
                {i > 0 && " · "}
                <a href={langPath[l]} hrefLang={l} lang={l} className={l === lang ? "font-semibold text-white" : "hover:text-white"}>{langLabel[l]}</a>
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-5 text-xs text-white/50">{t.footer}</p>
      </div>
    </footer>
  );
}
