import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { PageHeader, Section, SectionHeading } from "@/components/Section";
import { admissionSteps, faqs } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions",
  description: "How to join Gurukul: book a free trial class, choose a program and register. Answers to common questions from parents.",
  alternates: { canonical: "/admissions/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Joining Gurukul is simple"
        intro="Admissions are open through the year, subject to space in each batch. Start with a free trial class and take it from there."
      />

      <Section>
        <SectionHeading eyebrow="How it works" title="Four easy steps" />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((s, i) => (
            <li key={s.title} className="card relative p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron font-display text-lg font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="trial" className="border-y border-sand bg-sand/60">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              eyebrow="Free trial class"
              title="Come and see for yourself"
              intro="Fill in the form and we'll get back to you with a trial slot. Prefer to chat? Message us on WhatsApp."
            />
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-8">
              <MessageCircle className="h-4 w-4" /> WhatsApp {site.phone}
            </a>
            <div className="mt-10 rounded-2xl bg-white p-6">
              <h3 className="font-display text-lg font-semibold">What to bring</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
                <li>Comfortable clothing (Indian wear is lovely but not required)</li>
                <li>A notebook and pencil</li>
                <li>A water bottle</li>
                <li>Curiosity!</li>
              </ul>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </Section>

      <Section id="faq">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQ" title="Questions from parents" intro="If your question isn't here, just ask. We're happy to help." />
          <Faq items={faqs} />
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
