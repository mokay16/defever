import Reveal from "./Reveal";
import { gallery } from "@/lib/content";

const gradients = [
  "from-navy/25 via-paper-alt to-red/18",
  "from-red/20 via-paper-alt to-navy/20",
  "from-navy/30 via-paper-alt to-navy/10",
];

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
      />
      <circle cx="12" cy="13.5" r="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Gallery() {
  return (
    <section className="bg-paper pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-red">
            Life in Pictures
          </span>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-2 max-w-xl text-ink-soft">
            Photos coming soon — placeholders below are sized and ready to
            drop in real images.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((caption, i) => (
            <Reveal key={caption} delay={(i % 4) * 70} className="h-full">
              <figure className="group">
                <div
                  className={`flex aspect-square items-center justify-center rounded-md border border-ink/10 bg-gradient-to-br ${gradients[i % gradients.length]} transition-transform duration-300 group-hover:scale-[1.02]`}
                >
                  <CameraIcon className="h-7 w-7 text-ink/25" />
                </div>
                <figcaption className="mt-2 text-xs leading-snug text-ink-soft/80">
                  {caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
