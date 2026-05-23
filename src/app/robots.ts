// src/app/robots.ts
import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://skufx.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/thanks" },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
