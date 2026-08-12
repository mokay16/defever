"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/lib/content";
import { CloseIcon, MenuIcon } from "./icons";

const links = [
  { href: "#priorities", label: "Priorities" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#work", label: "Kathleen's Work" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-navy-deep/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(198,49,59,0.3)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/site-logo.png"
            alt="Kathleen DeFever for Tiburon Town Council"
            width={44}
            height={44}
            className="rounded-sm border border-white/15"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-white">
              {site.candidateName}
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-red-light">
              {site.office} &middot; {site.electionYear}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 xl:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-[0.08em] text-paper/85 transition-colors hover:text-red-light"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-sm bg-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-light xl:inline-block"
        >
          Get Involved
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-white xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy-deep px-6 pb-6 pt-2 xl:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base uppercase tracking-[0.08em] text-paper/85"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-sm bg-red px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Get Involved
          </a>
        </div>
      )}
    </header>
  );
}
