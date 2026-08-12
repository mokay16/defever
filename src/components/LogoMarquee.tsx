import Image from "next/image";

const logos = [
  { src: "/tiburon-logo.jpeg", alt: "Town of Tiburon" },
  { src: "/uconn-logo.png", alt: "University of Connecticut School of Law" },
  { src: "/rotary-logo.png", alt: "Rotary International" },
  { src: "/depaul-logo.jpeg", alt: "DePaul University" },
  { src: "/firewise-logo.jpeg", alt: "Firewise USA" },
  { src: "/msu-logo.png", alt: "Michigan State University" },
  { src: "/aida-logo.jpeg", alt: "Association Internationale de Droit des Assurances" },
  { src: "/kd-bar-assoc-logo.jpeg", alt: "The State Bar of California" },
  { src: "/LWVMarinCounty_rgb.png", alt: "League of Women Voters of Marin County" },
];

// Rendered twice back-to-back so the track can translate exactly -50% and
// loop seamlessly with no visible seam or reset jump.
const track = [...logos, ...logos];

export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-6 hover:[animation-play-state:paused]">
        {track.map((logo, i) => (
          <div
            key={i}
            className="flex h-20 w-40 shrink-0 items-center justify-center rounded-md border border-ink/10 bg-white p-4 shadow-sm"
          >
            <div className="relative h-full w-full">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
