"use client";

import { useState, type FormEvent } from "react";

const fieldClasses =
  "w-full rounded-sm border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink-soft/50 outline-none transition-colors focus:border-navy";

export default function ContactForm() {
  const [status, setStatus] = useState<"error" | "idle" | "sending" | "sent">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          website: data.get("website"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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

      {status === "error" && (
        <p className="text-sm text-red">
          Something went wrong sending your message. Please try again in a
          moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-sm bg-navy-deep px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
