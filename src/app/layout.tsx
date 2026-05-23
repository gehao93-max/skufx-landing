import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
