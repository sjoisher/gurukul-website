import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { programs } from "@/lib/content";
import { fullAddress, nav, site } from "@/lib/site";
import { LotusMark } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-maroon-dark text-sand">
      <div className="mx-auto grid max-w-page gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <LotusMark />
            <span className="font-display text-xl font-semibold text-white">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-sand/80">{site.tagline}</p>
          <p className="mt-4 font-display text-lg italic text-saffron-light">
            विद्या ददाति विनयम्
          </p>
          <p className="text-xs text-sand/60">Knowledge gives humility.</p>
        </div>

        <div>
          <h2 className="footer-heading">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Programs</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link href={`/programs/${p.slug}/`} className="hover:text-white">{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Visit us</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
              <span>{fullAddress()}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">{site.phone}</a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a>
            </li>
          </ul>
          <ul className="mt-4 space-y-1 text-sm text-sand/80">
            {site.sessions.map((s) => (
              <li key={s.day}>
                <span className="font-medium text-white">{s.day}</span> · {s.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-4 py-5 text-xs text-sand/60 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>सर्वे भवन्तु सुखिनः · May all be happy.</p>
        </div>
      </div>
    </footer>
  );
}
