import type { Metadata } from "next";
import { CTABand } from "@/components/CTABand";
import { ProgramCard } from "@/components/ProgramCard";
import { PageHeader, Section } from "@/components/Section";
import { programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Bal Sanskar, Shlokas & Sanskrit, Indian languages, yoga, music, arts and Gita for teens. Gurukul programs for children aged 5–18.",
  alternates: { canonical: "/programs/" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Learning that stays with them for life"
        intro="Every program combines knowledge, values and joy. Children can join one or combine several, and we place them by ability so no one is held back or left behind."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </Section>
      <CTABand title="Not sure which program fits?" text="Tell us your child's age and interests and we'll recommend a starting point. The first trial class is on us." />
    </>
  );
}
