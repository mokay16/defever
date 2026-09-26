import Image from "next/image";
import type { Priority } from "@/lib/content";

// A priority's Tiburon photo, with its Creative Commons credit (when the
// license requires one) overlaid in the corner.
export default function PriorityPhoto({
  priority,
  sizes,
  className = "",
}: {
  priority: Priority;
  sizes: string;
  className?: string;
}) {
  const { image, credit } = priority;

  return (
    <figure
      className={`relative overflow-hidden bg-navy-deep ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-cover"
      />
      {credit && (
        <figcaption className="absolute bottom-0 right-0 rounded-tl-sm bg-ink/60 px-2 py-1 text-[10px] leading-none text-white/85 backdrop-blur-sm">
          <a
            href={credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline"
          >
            {credit.text}
          </a>
        </figcaption>
      )}
    </figure>
  );
}
