import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes = [
  { path: "", priority: 1 },
  { path: "/endorsements", priority: 0.8 },
  { path: "/priorities", priority: 0.8 },
  { path: "/about", priority: 0.8 },
  { path: "/journey", priority: 0.7 },
  { path: "/achievements", priority: 0.6 },
  { path: "/donate", priority: 0.9 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
