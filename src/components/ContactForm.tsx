"use client";

import { useState, type FormEvent } from "react";

const fieldClasses =
  "w-full rounded-sm border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink-soft/50 outline-none transition-colors focus:border-navy";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to a real endpoint (e.g. an API route or form
    // service) once one is chosen. For now we confirm receipt in the UI.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-md border border-navy/25 bg-navy/8 p-8 text-center">
        <p className="font-display text-xl font-semibold uppercase tracking-wide text-navy">
          Thank you for reaching out.
        </p>
        <p className="mt-2 text-ink-soft">
          Your message has been received. Kathleen&apos;s team will follow up
          soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-ink-soft">
          Name <span className="text-red">*</span>
        </label>
        <input id="name" name="name" type="text" required className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-ink-soft">
          Email <span className="text-red">*</span>
        </label>
        <input id="email" name="email" type="email" required className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="website" className="mb-1.5 block text-sm text-ink-soft">
          Website
        </label>
        <input id="website" name="website" type="url" className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-ink-soft">
          Message <span className="text-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={fieldClasses}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-navy-deep px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-navy sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
}
