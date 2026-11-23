import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const routes = ["/", "/about", "/gallery", "/contact", "/privacy-policy"];
const lastModified = new Date("2026-11-22T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
