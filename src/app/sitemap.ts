// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://skufx.com";
const ROUTES = ["", "/features", "/pricing", "/about", "/contact", "/security", "/privacy", "/terms", "/cookies", "/dpa", "/connect", "/sub-processors"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
