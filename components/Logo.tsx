import Link from "next/link";
import { site } from "@/lib/site";

export function LotusMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#6B1E1E" />
      <g fill="#F6E3CC">
        <path d="M24 10c3.6 4.2 5.4 8.6 5.4 13S27.6 31.8 24 34c-3.6-2.2-5.4-6.6-5.4-11S20.4 14.2 24 10z" />
        <path d="M12 18c4.6.6 8.2 2.8 10.4 6.4 1 1.6 1.6 3.6 1.6 9.6-5.2-.8-8.8-3-10.6-6.4C12.2 25.4 11.8 22.2 12 18z" opacity=".85" />
        <path d="M36 18c-4.6.6-8.2 2.8-10.4 6.4-1 1.6-1.6 3.6-1.6 9.6 5.2-.8 8.8-3 10.6-6.4 1.2-2.2 1.6-5.4 1.4-9.6z" opacity=".85" />
      </g>
      <path d="M13 36.5h22" stroke="#D9822B" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <LotusMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold text-maroon">{site.name}</span>
        <span className="mt-0.5 text-[11px] tracking-[0.18em] text-muted uppercase">गुरुकुल</span>
      </span>
    </Link>
  );
}
