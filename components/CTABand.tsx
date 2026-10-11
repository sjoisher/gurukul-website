import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function CTABand({
  title = "Come and see a class for yourself",
  text = "The first trial class is free. Bring your child, meet the teachers and see if Gurukul feels right for your family.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-page overflow-hidden rounded-3xl bg-maroon px-6 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-sand/85">{text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/admissions/#trial" className="btn-primary">Book a free trial</Link>
          <a href={whatsappLink()} className="btn-ghost-light" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
