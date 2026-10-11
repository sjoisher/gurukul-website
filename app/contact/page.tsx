import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHeader, Section } from "@/components/Section";
import { fullAddress, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Gurukul by phone, WhatsApp or email, or send us an enquiry.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const items = [
    { icon: Phone, label: "Call", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Message us", href: whatsappLink() },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Visit", value: fullAddress() },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you"
        intro="Whether you have a question about a program or want to book a trial class, reach out however suits you best."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {items.map(({ icon: Icon, label, value, href }) => {
              const body = (
                <>
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-light text-maroon">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted">{label}</span>
                    <span className="mt-0.5 block break-words font-medium text-ink">{value}</span>
                  </span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card flex items-center gap-4 p-5 transition-colors hover:border-saffron/50"
                >
                  {body}
                </a>
              ) : (
                <div key={label} className="card flex items-center gap-4 p-5">{body}</div>
              );
            })}
            <div className="card p-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                <Clock className="h-4 w-4 text-saffron" /> Class hours
              </p>
              <ul className="mt-2 space-y-1">
                {site.sessions.map((s) => (
                  <li key={s.day}><span className="font-medium">{s.day}</span> · <span className="text-muted">{s.time}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <EnquiryForm heading="Send us a message" />
        </div>
      </Section>

      {site.mapEmbedUrl && (
        <div className="mx-auto max-w-page px-4 pb-16 sm:px-6 sm:pb-24">
          <iframe
            src={site.mapEmbedUrl}
            title={`Map showing ${site.name}`}
            className="h-[380px] w-full rounded-2xl border border-sand"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </>
  );
}
