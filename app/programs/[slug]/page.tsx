import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock, Users } from "lucide-react";
import { CTABand } from "@/components/CTABand";
import { ProgramCard } from "@/components/ProgramCard";
import { Section, SectionHeading } from "@/components/Section";
import { programs } from "@/lib/content";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) return {};
  return {
    title: `${program.name} (${program.ages})`,
    description: program.summary,
    alternates: { canonical: `/programs/${program.slug}/` },
  };
}

export default function ProgramPage({ params }: Props) {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) notFound();
  const Icon = program.icon;
  const others = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <>
      <div className="border-b border-sand bg-sand/50">
        <div className="mx-auto max-w-page px-4 py-14 sm:px-6 sm:py-20">
          <Link href="/programs/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-maroon">
            <ArrowLeft className="h-4 w-4" /> All programs
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon text-saffron-light">
              <Icon className="h-7 w-7" />
            </span>
            {program.sanskrit && <span className="font-display text-2xl text-maroon" lang="hi">{program.sanskrit}</span>}
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">{program.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{program.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm">
            <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium">
              <Users className="h-4 w-4 text-saffron" /> {program.ages}
            </li>
            <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium">
              <Clock className="h-4 w-4 text-saffron" /> {program.format}
            </li>
          </ul>
        </div>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading eyebrow="About this program" title="How it works" />
            <div className="prose-gurukul mt-6">
              {program.description.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
          <aside className="card self-start p-7">
            <h2 className="font-display text-xl font-semibold">What your child will gain</h2>
            <ul className="mt-5 space-y-3">
              {program.outcomes.map((o) => (
                <li key={o} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                  <span className="text-muted">{o}</span>
                </li>
              ))}
            </ul>
            <Link href={`/admissions/?program=${program.slug}#trial`} className="btn-primary mt-7 w-full">
              Enquire about {program.name}
            </Link>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-sand bg-white">
        <SectionHeading eyebrow="Also popular" title="Other programs" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </Section>

      <div className="pt-16 sm:pt-24">
        <CTABand />
      </div>
    </>
  );
}
