"use client";

import { useEffect, useState } from "react";
import { HeartHandshake, Menu, X } from "lucide-react";
import { langLabel, langPath, langShort, langs, type Dict, type Lang } from "@/lib/i18n";
import { Mark } from "./Mark";

export function Header({ lang, t }: { lang: Lang; t: Dict }) {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  // Keep the visitor on the same section when switching language.
  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  const switcher = (
    <ul className="flex items-center gap-1 rounded-full bg-sand/70 p-1 text-sm" aria-label="Language">
      {langs.map((l) => (
        <li key={l}>
          <a
            href={langPath[l] + hash}
            hrefLang={l}
            lang={l}
            aria-current={l === lang ? "true" : undefined}
            title={langLabel[l]}
            className={`block rounded-full px-3 py-1 font-medium xl:px-2.5 transition-colors ${
              l === lang ? "bg-white text-earth shadow-sm" : "text-muted hover:text-earth"
            }`}
          >
            <span className="xl:hidden">{langLabel[l]}</span>
            <span className="hidden xl:inline">{langShort[l]}</span>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-sand bg-parchment/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <Mark className="h-9 w-9 shrink-0" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-semibold text-earth">{t.shortName}</span>
            <span className="block truncate text-xs text-muted">{t.place}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Sections">
          {t.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="rounded-full px-2.5 py-2 text-sm font-medium text-ink hover:text-earth">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {switcher}
          <a href="#support" className="btn-primary !px-5 !py-2">
            <HeartHandshake className="h-4 w-4" /> {t.donate}
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-ink xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t.menu.close : t.menu.open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-sand bg-parchment xl:hidden">
          <nav className="container-page grid grid-cols-2 gap-x-6 py-3 sm:grid-cols-4" aria-label="Sections">
            {t.nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="border-b border-sand py-3 font-medium">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="container-page flex flex-wrap items-center justify-between gap-3 pb-5 lg:hidden">
            {switcher}
            <a href="#support" onClick={() => setOpen(false)} className="btn-primary !py-2">
              <HeartHandshake className="h-4 w-4" /> {t.donate}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
