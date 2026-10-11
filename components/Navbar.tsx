"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-sand bg-parchment/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-sand text-maroon" : "text-ink hover:text-maroon"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/admissions/#trial" className="btn-primary ml-3 !py-2">
            Book a free trial
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-sand bg-parchment px-4 pb-6 pt-2 md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-sand py-3 text-base font-medium text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/admissions/#trial" className="btn-primary mt-5 w-full">
            Book a free trial
          </Link>
        </nav>
      )}
    </header>
  );
}
