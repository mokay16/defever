import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = "Kathleen Defever for Tiburon Town Council";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#132a4c",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#e2646d",
          }}
        >
          {`${site.office} · ${site.electionYear}`}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: "#ffffff",
            marginTop: 24,
          }}
        >
          {site.candidateName}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            marginTop: 28,
            color: "rgba(247,242,231,0.8)",
            maxWidth: 950,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
