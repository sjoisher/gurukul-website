import type { Metadata } from "next";
import { GraduationCap, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { CTABand } from "@/components/CTABand";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import { pillars } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gurukul brings the guru–shishya tradition to modern families, nurturing values, knowledge, the arts and community in children aged 5–18.",
  alternates: { canonical: "/about/" },
};

const teacherQualities = [
  { icon: GraduationCap, title: "Deep subject knowledge", text: "Teachers trained in Sanskrit, music, yoga or their language, many with formal qualifications." },
  { icon: HeartHandshake, title: "Patience and warmth", text: "We hire for how a teacher makes children feel, as much as for what they know." },
  { icon: ShieldCheck, title: "Safe and checked", text: "Every teacher and volunteer follows our child-safety guidelines." },
  { icon: Sparkles, title: "Living the values", text: "Our teachers model the sanskar we hope children will carry with them." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Gurukul"
        title="An ancient way of learning, for children growing up today"
        intro="Guru means the one who removes darkness. Kul means family. A gurukul is a family of learning, and that is what we set out to build."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our story" title="Why Gurukul exists" />
            <div className="prose-gurukul mt-6">
              <p>
                Many parents share the same worry. Their children are thriving at school, but the stories, prayers,
                languages and festivals they grew up with are slipping away a little more with each generation.
              </p>
              <p>
                Gurukul was started to answer that. We wanted a place where children don&apos;t just memorise a shloka,
                they understand it. Where they don&apos;t just attend a festival, they know why it matters. And where
                they find friends who share their roots.
              </p>
              <p>
                We take inspiration from the guru–shishya parampara: learning that happens through relationship,
                example and practice, not just instruction. Our classes are small, our teachers are warm, and our
                community is at the heart of everything.
              </p>
            </div>
          </div>
          <div className="grid gap-5 self-start sm:grid-cols-2">
            <div className="rounded-2xl bg-maroon p-7 text-white sm:col-span-2">
              <p className="eyebrow !text-saffron-light">Our mission</p>
              <p className="mt-3 font-display text-2xl leading-snug">
                To help every child grow up rooted in Indian values and culture, and confident enough to carry them
                into the modern world.
              </p>
            </div>
            <div className="card p-7">
              <p className="eyebrow">Our vision</p>
              <p className="mt-3 leading-relaxed text-muted">
                A generation that knows its heritage, lives its values and shares them with pride.
              </p>
            </div>
            <div className="card p-7">
              <p className="eyebrow">Our promise</p>
              <p className="mt-3 leading-relaxed text-muted">
                Small groups, meaningful learning and a community your family will feel part of.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-y border-sand bg-white">
        <SectionHeading align="center" eyebrow="What we nurture" title="Our four pillars" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map(({ icon: Icon, title, subtitle, text }) => (
            <div key={title} className="flex gap-5 rounded-2xl bg-parchment p-7">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-saffron-light text-maroon">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {title} <span className="text-base font-normal text-muted">· {subtitle}</span>
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our teachers"
          title="Gurus who teach with heart"
          intro="The teacher is the heart of a gurukul. Here's what we look for in everyone who teaches here."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teacherQualities.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-6">
              <Icon className="h-6 w-6 text-saffron" />
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand title="Become part of the Gurukul family" />
    </>
  );
}
