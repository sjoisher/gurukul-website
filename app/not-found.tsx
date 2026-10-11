import { dict, langPath, langs } from "@/lib/i18n";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold">{dict.en.name}</h1>
      <p className="mt-4 text-lg text-muted">This page doesn&apos;t exist. · यह पृष्ठ उपलब्ध नहीं है। · આ પાનું ઉપલબ્ધ નથી.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {langs.map((l) => (
          <a key={l} href={langPath[l]} className="btn-secondary" lang={l}>
            {dict[l].nav[0].label} →
          </a>
        ))}
      </div>
    </main>
  );
}
