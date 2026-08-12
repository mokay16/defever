import { site } from "@/lib/content";

const links = [
  { href: "#priorities", label: "Priorities" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Kathleen's Work" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              {site.candidateName}
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-red-light">
              {site.office} &middot; {site.electionYear}
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-paper/70 transition-colors hover:text-red-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="text-sm text-paper/70 transition-colors hover:text-red-light"
          >
            Back to top ↑
          </a>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-paper/45">
          <p>
            Paid for by {site.candidateName} for {site.office} {site.electionYear}.
          </p>
          <p className="mt-1">
            &copy; {site.electionYear} {site.candidateName} for {site.office}.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
