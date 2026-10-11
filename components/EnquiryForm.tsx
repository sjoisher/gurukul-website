"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { programs } from "@/lib/content";
import { site } from "@/lib/site";

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "error";

export function EnquiryForm({ heading = "Book a free trial class" }: { heading?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [program, setProgram] = useState("");

  // Carry ?program=<slug> from a program page's "Enquire" link into the form.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("program");
    const match = programs.find((p) => p.slug === slug);
    if (match) setProgram(match.name);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!endpoint) {
      const body = Array.from(data.entries())
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "Gurukul enquiry",
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card flex flex-col items-center p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-leaf" />
        <h3 className="mt-4 font-display text-2xl font-semibold">Dhanyavaad!</h3>
        <p className="mt-2 text-muted">
          We have your enquiry and will be in touch within two working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <h3 className="font-display text-2xl font-semibold">{heading}</h3>
      <p className="mt-1 text-sm text-muted">We usually reply within two working days.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Parent's name" name="Parent name" required autoComplete="name" />
        <Field label="Phone / WhatsApp" name="Phone" type="tel" required autoComplete="tel" />
        <Field label="Email" name="Email" type="email" autoComplete="email" className="sm:col-span-2" />
        <Field label="Child's name" name="Child name" />
        <Field label="Child's age" name="Child age" type="number" min={3} max={18} required />

        <label className="sm:col-span-2">
          <span className="field-label">Interested in</span>
          <select
            name="Program"
            className="field-input"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
          >
            <option value="">Not sure yet — please advise</option>
            {programs.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name} ({p.ages})
              </option>
            ))}
          </select>
        </label>

        <label className="sm:col-span-2">
          <span className="field-label">Anything we should know?</span>
          <textarea name="Message" rows={4} className="field-input" />
        </label>
      </div>

      {/* Honeypot for form services that support it */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
      {status === "error" && (
        <p className="mt-3 text-sm text-maroon" role="alert">
          Something went wrong. Please try again, or email us at{" "}
          <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  className = "",
  ...props
}: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={className}>
      <span className="field-label">
        {label}
        {props.required && <span className="text-saffron-dark"> *</span>}
      </span>
      <input className="field-input" {...props} />
    </label>
  );
}
