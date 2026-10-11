import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, MessageCircle } from "lucide-react";
import { CTABand } from "@/components/CTABand";
import { Faq } from "@/components/Faq";
import { ProgramCard } from "@/components/ProgramCard";
import { Section, SectionHeading } from "@/components/Section";
import { approach, faqs, festivals, pillars, programs, sampleSession } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-saffron-light/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-page items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="eyebrow">Indian values · languages · arts · for ages 5–18</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Where children grow <span className="text-maroon">rooted</span> in tradition and{" "}
              <span className="text-saffron-dark">confident</span> in the world.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Gurukul brings the timeless guru–shishya way of learning to modern families. Shlokas, stories,
              languages, music and yoga, taught in small, joyful groups by teachers who care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/admissions/#trial" className="btn-primary">
                Book a free trial class <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/programs/" className="btn-secondary">Explore programs</Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {site.sessions.map((s) => (
                <li key={s.day} className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-saffron" />
                  <span><strong className="font-semibold text-ink">{s.day}</strong> {s.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Shloka card */}
          <figure className="card relative mx-auto w-full max-w-md p-8 sm:p-10">
            <div aria-hidden className="absolute inset-x-8 top-0 h-1 rounded-b bg-gradient-to-r from-saffron via-maroon to-leaf" />
            <p className="eyebrow">Shloka of the week</p>
            <blockquote className="mt-5 font-display text-2xl leading-relaxed text-maroon" lang="sa">
              ॐ सह नाववतु ।<br />
              सह नौ भुनक्तु ।<br />
              सह वीर्यं करवावहै ।<br />
              तेजस्वि नावधीतमस्तु<br />
              मा विद्विषावहै ॥
            </blockquote>
            <figcaption className="mt-6 border-t border-sand pt-5 text-sm leading-relaxed text-muted">
              <em>“May we be protected together, nourished together, and work together with energy. May our
              learning be radiant, and may there be no discord between us.”</em>
              <span className="mt-2 block text-xs uppercase tracking-wider text-muted/80">
                Taittiriya Upanishad · the prayer teacher and student share before every lesson
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Pillars */}
      <Section className="border-y border-sand bg-white">
        <SectionHeading
          align="center"
          eyebrow="What we nurture"
          title="Four pillars of a Gurukul education"
          intro="A gurukul was never just a school. It was a family of learning. We hold on to that spirit."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, subtitle, text }) => (
            <div key={title} className="rounded-2xl bg-parchment p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-light text-maroon">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {title} <span className="text-base font-normal text-muted">· {subtitle}</span>
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Programs */}
      <Section>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Programs"
            title="Something for every age and interest"
            intro="Children can join one program or combine several. We'll help you choose the right fit."
          />
          <Link href="/programs/" className="inline-flex items-center gap-1.5 font-semibold text-maroon hover:underline">
            View all programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 6).map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </Section>

      {/* A session + approach */}
      <Section className="bg-sand/60">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Inside a class"
              title="What a typical session looks like"
              intro="Every session follows a familiar rhythm, so children settle quickly and know what comes next."
            />
            <ol className="mt-10 space-y-0">
              {sampleSession.map((step, i) => (
                <li key={step.title} className="relative flex gap-5 pb-7 last:pb-0">
                  {i < sampleSession.length - 1 && (
                    <span aria-hidden className="absolute left-[27px] top-10 h-[calc(100%-2.5rem)] w-px bg-saffron/40" />
                  )}
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-saffron/40 bg-white text-center text-[11px] font-semibold leading-tight text-saffron-dark">
                    {step.duration}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                    <p className="text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our approach"
              title="Why families choose Gurukul"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {approach.map((a, i) => (
                <div key={a.title} className="card p-6">
                  <span className="font-display text-3xl font-semibold text-saffron">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold">{a.title}</h3>
                  <p className="mt-1.5 text-muted">{a.text}</p>
                </div>
              ))}
            </div>
            <blockquote className="mt-8 rounded-2xl border-l-4 border-saffron bg-white p-6">
              <p className="font-display text-xl text-maroon" lang="sa">
                गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः
              </p>
              <p className="mt-2 text-sm text-muted">
                The guru is honoured as the creator, sustainer and transformer of the student’s understanding.
              </p>
            </blockquote>
          </div>
        </div>
      </Section>

      {/* Festivals */}
      <Section>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Celebrations"
            title="A year shaped by festivals"
            intro="Every festival is a lesson. Children learn the story, make something with their hands and celebrate together with their families."
          />
          <Link href="/calendar/" className="inline-flex items-center gap-1.5 font-semibold text-maroon hover:underline">
            <CalendarDays className="h-4 w-4" /> Full calendar
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {festivals
            .filter((f) => ["Guru Purnima", "Janmashtami", "Navratri", "Diwali"].includes(f.name))
            .map((f) => (
              <div key={f.name} className="rounded-2xl border border-sand bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-saffron-dark">{f.month}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.note}</p>
              </div>
            ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-sand bg-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              eyebrow="Questions"
              title="Parents often ask"
              intro="Can't find what you're looking for? We're happy to talk."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
              <Link href="/admissions/#faq" className="btn-secondary">All FAQs</Link>
            </div>
          </div>
          <Faq items={faqs.slice(0, 4)} />
        </div>
      </Section>

      <div className="pt-16 sm:pt-24">
        <CTABand />
      </div>
    </>
  );
}
