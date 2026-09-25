"use client";

import { useState, type FormEvent } from "react";

const fieldClasses =
  "w-full rounded-sm border border-ink/15 bg-paper px-4 py-3 text-ink placeholder:text-ink-soft/50 outline-none transition-colors focus:border-navy";

const checkboxes = [
  { name: "addToSupporters", label: "Please add me to your list of supporters" },
  { name: "yardSign", label: "I would like a yard sign" },
  { name: "volunteer", label: "I would like to volunteer" },
  { name: "canvass", label: "I would like to canvass" },
  { name: "emailUpdates", label: "Get updates and news via email" },
] as const;

export default function EndorsementForm() {
  const [status, setStatus] = useState<"error" | "idle" | "sending" | "sent">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/endorse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          title: data.get("title"),
          endorsementText: data.get("endorsementText"),
          ...Object.fromEntries(
            checkboxes.map(({ name }) => [name, data.get(name) === "on"]),
          ),
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
          Thank you for your endorsement!
        </p>
        <p className="mt-2 text-ink-soft">
          Kathleen&apos;s team has received it and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm text-ink-soft">
            First Name <span className="text-red">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className={fieldClasses}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm text-ink-soft">
            Last Name <span className="text-red">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            className={fieldClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="endorse-email" className="mb-1.5 block text-sm text-ink-soft">
          Email <span className="text-red">*</span>
        </label>
        <input
          id="endorse-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="title" className="mb-1.5 block text-sm text-ink-soft">
          Title or Organization
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="e.g. Tiburon resident, Reed parent, Business owner"
          className={fieldClasses}
        />
      </div>

      <div>
        <label htmlFor="endorsementText" className="mb-1.5 block text-sm text-ink-soft">
          Endorsement
        </label>
        <textarea
          id="endorsementText"
          name="endorsementText"
          rows={5}
          placeholder="Why are you supporting Kathleen? (optional)"
          className={fieldClasses}
        />
      </div>

      <fieldset className="space-y-3">
        <legend className="sr-only">Ways to help</legend>
        {checkboxes.map(({ name, label }) => (
          <label key={name} className="flex items-start gap-3 text-ink">
            <input
              type="checkbox"
              name={name}
              defaultChecked={name === "addToSupporters"}
              className="mt-1 h-4 w-4 shrink-0 accent-navy"
            />
            <span>{label}</span>
          </label>
        ))}
      </fieldset>

      {status === "error" && (
        <p className="text-sm text-red">
          Something went wrong submitting your endorsement. Please try again
          in a moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-sm bg-navy-deep px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Submitting…" : "Submit Endorsement"}
      </button>
    </form>
  );
}
