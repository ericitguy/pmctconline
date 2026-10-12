"use client";

import { useState } from "react";
import { submitEnquiry } from "@/app/actions";

const topics = [
  "Volunteering",
  "Partnership",
  "Training enquiry",
  "Donation",
  "Other",
];

export default function EnquiryForm({
  kind,
  className = "",
}: {
  kind: "volunteer" | "partnership" | "general";
  className?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !email || !message) {
      setStatus("error");
      setError("Please fill in your name, email and a short message.");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await submitEnquiry({
        name,
        email,
        phone: String(fd.get("phone") || ""),
        topic: String(fd.get("topic") || ""),
        message,
        kind,
      });
      if (!res.ok) throw new Error(res.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className={`rounded-xl border border-gold/50 bg-goldsoft/20 p-8 text-center ${className}`}>
        <p className="font-serif text-2xl font-medium text-forest">Thank you.</p>
        <p className="mt-3 text-leading text-charcoal/70">
          Your message has been received. A member of the PMCTC team will reply
          as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputCls =
    "mt-2 w-full rounded-lg border border-forest/15 bg-ivory px-4 py-3 text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-forest focus:ring-1 focus:ring-forest/30";

  return (
    <form onSubmit={onSubmit} className={className} noValidate>
      <div className="grid gap-5">
        <label className="block">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
            Your Name <span className="text-terracotta">*</span>
          </span>
          <input name="name" type="text" required className={inputCls} placeholder="Full name" />
        </label>
        <label className="block">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
            Email <span className="text-terracotta">*</span>
          </span>
          <input name="email" type="email" required className={inputCls} placeholder="you@example.com" />
        </label>
        <label className="block">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
            Phone <span className="text-charcoal/30">(optional)</span>
          </span>
          <input name="phone" type="tel" className={inputCls} placeholder="050 123 4567" />
        </label>
        <label className="block">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
            Topic
          </span>
          <select
            name="topic"
            className={inputCls}
            defaultValue={kind === "partnership" ? "Partnership" : kind === "volunteer" ? "Volunteering" : "Other"}
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
            Message <span className="text-terracotta">*</span>
          </span>
          <textarea
            name="message"
            required
            rows={5}
            className={inputCls}
            placeholder={
              kind === "partnership"
                ? "Tell us about your organisation and how you'd like to work together."
                : "How would you like to help PMCTC?"
            }
          />
        </label>

        {status === "error" && (
          <p role="alert" className="rounded-lg border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm text-forest">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-forest py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ivory transition-all hover:bg-forest-deep disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        <p className="text-xs leading-relaxed text-charcoal/50">
          By submitting this form you agree that PMCTC may store and use these
          details to reply to your message. We never sell or share your
          personal information. See our{" "}
          <a href="/privacy" className="underline underline-offset-2">
            privacy policy
          </a>
          .
        </p>
        <p className="text-xs italic text-charcoal/40">
          Delivery Inbox placeholder: form submissions are logged to the
          server; email/SMS delivery routing is configured before launch.
        </p>
      </div>
    </form>
  );
}
