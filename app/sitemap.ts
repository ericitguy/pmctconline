import type { MetadataRoute } from "next";
import { programmes } from "@/lib/programmes";

const base = "https://www.pmctconline.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/programmes",
    "/impact",
    "/stories",
    "/team",
    "/gallery",
    "/donate",
    "/get-involved",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const programmeRoutes = programmes.map((p) => ({
    url: `${base}/programmes/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...programmeRoutes];
}
