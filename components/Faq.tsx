import { ChevronDown } from "lucide-react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-sand rounded-2xl border border-sand bg-parchment">
      {items.map((item) => (
        <details key={item.q} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown className="h-5 w-5 shrink-0 text-saffron transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
