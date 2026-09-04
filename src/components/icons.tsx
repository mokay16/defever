type IconProps = {
  className?: string;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function PriorityIcon({
  name,
  className,
}: IconProps & { name: string }) {
  switch (name) {
    case "storefront":
      return (
        <svg {...base} className={className}>
          <path d="M3 9.5 4.5 4h15L21 9.5" />
          <path d="M3 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 3-2.4" />
          <path d="M4.5 9.5V20h15V9.5" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    case "route":
      return (
        <svg {...base} className={className}>
          <circle cx="6" cy="19" r="2.2" />
          <circle cx="18" cy="5" r="2.2" />
          <path d="M8 19h7a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3H9a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h7" />
        </svg>
      );
    case "hands":
      return (
        <svg {...base} className={className}>
          <path d="M12 21c-3-1.5-7-4.5-7-9V6l4-2 3 1.5L15 4l4 2v6c0 4.5-4 7.5-7 9Z" />
          <path d="M9.5 11.5 12 13l2.5-1.5" />
        </svg>
      );
    case "flame":
      return (
        <svg {...base} className={className}>
          <path d="M12 22c4.4 0 7-2.8 7-6.8 0-3-2-5-3.2-7.3-.5 1.6-1.5 2.6-2.3 2.6.6-2.6-.3-5.6-3-7.5.6 2.6-1 4.7-2.7 6.6C6.2 11.3 5 13 5 15.2 5 19.2 7.6 22 12 22Z" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...base} className={className}>
          <path d="M4 20c8.8 0 16-7.2 16-16-8.8 0-16 7.2-16 16Z" />
          <path d="M4 20c0-6 3-10.5 8-13" />
        </svg>
      );
    case "building":
      return (
        <svg {...base} className={className}>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" />
          <path d="M10 21v-4h4v4" />
        </svg>
      );
    case "home":
      return (
        <svg {...base} className={className}>
          <path d="M4 11.5 12 4l8 7.5" />
          <path d="M6 10v10h12V10" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    case "heart":
      return (
        <svg {...base} className={className}>
          <path d="M12 20S3 14.5 3 8.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 9 1.5C21 14.5 12 20 12 20Z" />
        </svg>
      );
    default:
      return null;
  }
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
