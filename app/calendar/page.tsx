import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { CTABand } from "@/components/CTABand";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import { festivals, sampleSession } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Calendar",
  description: "Gurukul's weekly class timings and the festivals we celebrate together through the year.",
  alternates: { canonical: "/calendar/" },
};

export default function CalendarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Calendar"
        title="Our week and our year"
        intro="Classes run every weekend through the school year, and each festival brings families together for a celebration."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Every week" title="Class timings" />
            <div className="mt-8 space-y-4">
              {site.sessions.map((s) => (
                <div key={s.day} className="card flex items-center justify-between p-6">
                  <span className="font-display text-xl font-semibold">{s.day}</span>
                  <span className="inline-flex items-center gap-2 text-muted">
                    <Clock className="h-4 w-4 text-saffron" /> {s.time}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              Each program meets in its own slot within these hours. We&apos;ll share your child&apos;s exact batch time on registration.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="In each class" title="The rhythm of a session" />
            <ol className="mt-8 divide-y divide-sand rounded-2xl border border-sand bg-white">
              {sampleSession.map((step) => (
                <li key={step.title} className="flex gap-5 px-6 py-4">
                  <span className="w-14 shrink-0 pt-0.5 text-sm font-semibold text-saffron-dark">{step.duration}</span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="text-sm text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section className="border-t border-sand bg-white">
        <SectionHeading
          eyebrow="Through the year"
          title="Festivals we celebrate"
          intro="Festival dates follow the lunar calendar and change every year. We confirm each celebration with families a few weeks ahead."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {festivals.map((f) => (
            <li key={f.name} className="flex gap-4 rounded-2xl bg-parchment p-6">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-saffron" aria-hidden />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-saffron-dark">{f.month}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{f.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <div className="pt-16 sm:pt-24">
        <CTABand title="Join us for the next celebration" text="Festival celebrations are open to prospective families too. It's a lovely way to meet us." />
      </div>
    </>
  );
}
