import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/lib/content";

export function ProgramCard({ program }: { program: Program }) {
  const Icon = program.icon;
  return (
    <Link
      href={`/programs/${program.slug}/`}
      className="card group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-saffron/50 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-maroon text-saffron-light">
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-maroon">{program.ages}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-ink">
        {program.name}
        {program.sanskrit && (
          <span className="ml-2 text-base font-normal text-muted" lang="hi">{program.sanskrit}</span>
        )}
      </h3>
      <p className="mt-2 flex-1 leading-relaxed text-muted">{program.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-maroon">
        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
