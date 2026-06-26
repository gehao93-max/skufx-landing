import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "SkuFx",
      "url": "https://skufx.com",
      "logo": "https://skufx.com/logo.svg",
    },
    {
      "@type": "SoftwareApplication",
      "name": "SkuFx",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description":
        "The Amazon Operator's Platform — keyword research, brand monitoring, inventory, orders, and finance for Amazon brand owners.",
      "offers": { "@type": "Offer", "url": "https://skufx.com/pricing", "availability": "https://schema.org/InStock" },
      "featureList": [
        "Keyword opportunity analyzer",
        "AI-powered new product pipeline",
        "Real-time listing & hijacker protection",
        "Price & BSR monitoring",
        "FBA inventory tracking",
        "Order management",
        "Finance & profit dashboard",
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "SkuFx — The Amazon Operator's Platform",
    template: "%s · SkuFx",
  },
  description: "From keyword research to ERP — everything your Amazon brand needs to scale, on one unified platform.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://skufx.com"),
  openGraph: {
    title: "SkuFx — The Amazon Operator's Platform",
    description: "From keyword research to ERP — everything your Amazon brand needs to scale, on one unified platform.",
    url: "https://skufx.com",
    siteName: "SkuFx",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
