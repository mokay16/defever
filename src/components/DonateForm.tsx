"use client";

import { useState } from "react";
import ActBlueLink from "./ActBlueLink";
import { site } from "@/lib/content";

// Mirrors the amounts on Kathleen's ActBlue form, so the chosen amount
// lands on a matching pre-selected option there.
const AMOUNTS = [50, 100, 300, 500, 1000, 3000, 5000];

function actBlueLink(amount: number | null) {
  const url = new URL(site.actBlueUrl);
  url.searchParams.set("refcode", "website");
  if (amount) url.searchParams.set("amount", String(amount));
  return url.toString();
}

const formatAmount = (n: number) => `$${n.toLocaleString("en-US")}`;

// Looks like the ActBlue form, but only picks the amount: both pay buttons
// open the real ActBlue form in a pop-up (ActBlueLink), where the donor
// enters their details and chooses card or Google Pay. Nothing about the
// payment is handled here.
export default function DonateForm() {
  const [selected, setSelected] = useState<number | null>(AMOUNTS[0]);
  const [other, setOther] = useState("");

  const otherAmount = Math.floor(Number(other));
  const amount = other ? (otherAmount >= 1 ? otherAmount : null) : selected;
  const href = actBlueLink(amount);

  return (
    <div className="rounded-md border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
      {/* The badge drops below the title on narrow phones. */}
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
        <h2 className="basis-full font-display text-2xl font-semibold uppercase leading-tight tracking-wide text-ink sm:basis-auto">
          Donate to Kathleen Defever!
        </h2>
        <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-sm border border-ink/10 px-2 py-1 text-[11px] text-ink-soft">
          <LockIcon className="h-3 w-3" />
          Secured by ActBlue
        </span>
      </div>
      <p className="mt-3 leading-relaxed text-ink-soft">
        Pitch in today to support Kathleen Defever for Tiburon Town Council.
        Together, we can move our community forward.
      </p>

      <fieldset className="mt-7">
        <legend className="font-semibold text-ink">Choose an amount:</legend>
        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {AMOUNTS.map((value) => {
            const isSelected = !other && selected === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={isSelected}
                onClick={() => {
                  setSelected(value);
                  setOther("");
                }}
                className={`relative rounded-sm px-3 py-3.5 font-semibold transition-colors ${
                  isSelected
                    ? "bg-navy text-white"
                    : "bg-paper text-ink hover:bg-paper-alt"
                }`}
              >
                {isSelected && (
                  <CheckIcon className="absolute left-1.5 top-1.5 h-3 w-3" />
                )}
                {formatAmount(value)}
              </button>
            );
          })}
          <label
            className={`flex items-center rounded-sm border px-3 transition-colors ${
              other ? "border-navy bg-white" : "border-ink/15 bg-paper"
            }`}
          >
            <span className="font-semibold text-ink-soft">$</span>
            <input
              type="number"
              inputMode="numeric"
              min={1}
              step={1}
              placeholder="Other"
              aria-label="Other amount in dollars"
              value={other}
              onChange={(e) => setOther(e.target.value)}
              className="w-full bg-transparent py-3 pl-1 font-semibold text-ink outline-none placeholder:font-normal placeholder:text-ink-soft/60 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </label>
        </div>
      </fieldset>

      <div className="mt-7 space-y-3">
        <ActBlueLink
          href={href}
          className="flex w-full items-center justify-center gap-2.5 rounded-sm bg-navy px-6 py-4 font-semibold text-white transition-colors hover:bg-navy-deep"
        >
          <CardIcon className="h-5 w-5" />
          Pay with card
          {amount ? ` · ${formatAmount(amount)}` : ""}
        </ActBlueLink>

        <div className="flex items-center gap-3 text-xs text-ink-soft/70">
          <span className="h-px flex-1 bg-ink/10" />
          or
          <span className="h-px flex-1 bg-ink/10" />
        </div>

        <ActBlueLink
          href={href}
          className="flex w-full items-center justify-center rounded-sm bg-black px-6 py-4 font-semibold text-white transition-colors hover:bg-ink"
        >
          Donate with Google Pay
        </ActBlueLink>
      </div>

      <p className="mt-5 text-center text-xs leading-relaxed text-ink-soft/70">
        A secure ActBlue window opens to finish your donation. Have an
        ActBlue Express account? You can give in seconds.
      </p>
    </div>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 12.5 10 17 19 7" />
    </svg>
  );
}

function CardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 10h19M6.5 15h4" />
    </svg>
  );
}
