// src/app/privacy/page.tsx
import type { Metadata } from "next";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SkuFx collects, uses, and protects your data.",
};

export default function Privacy() {
  return (
    <>
      <TopNav />
      <main className="bg-cream-50">
        <article className="prose prose-slate container-narrow py-20 max-w-none lg:py-28">
          <h1 className="text-section-h1 text-slate-900">Privacy Policy</h1>
          <p className="text-[13px] text-slate-500">Last updated: May 23, 2026</p>

          <h2>1. Who we are</h2>
          <p>
            SkuFx (&quot;we&quot;, &quot;us&quot;) is operated by {COMPANY.name} (the &quot;Company&quot;). We provide a SaaS platform for Amazon brand owners.
          </p>

          <h2>2. What data we collect</h2>
          <p>We collect two categories of data:</p>
          <ul>
            <li><strong>Account data:</strong> name, email address, company name, IP address, browser user agent.</li>
            <li><strong>SP-API data:</strong> if you authorize SP-API access, we receive Brand Analytics reports, listings, pricing, FBA inventory, orders, and financial events for the Amazon seller accounts you authorize.</li>
          </ul>

          <h2>3. How we use it</h2>
          <ul>
            <li>To provide the SkuFx features you signed up for (keyword analysis, listing protection, ERP dashboards, etc.).</li>
            <li>To respond to your support requests.</li>
            <li>To send transactional emails (account confirmations, alerts you&apos;ve enabled).</li>
          </ul>
          <p>We do not sell your data. We do not share your SP-API data with any third party.</p>

          <h2>4. SP-API data handling</h2>
          <ul>
            <li>Encrypted at rest with AES-256.</li>
            <li>Encrypted in transit with TLS 1.3.</li>
            <li>Accessed only by SkuFx engineering staff under audit log.</li>
            <li>Retained only for the duration of your active subscription. Upon revocation of SP-API authorization (which you can do at any time from Seller Central), all data is deleted within 24 hours.</li>
          </ul>

          <h2>5. Cookies &amp; tracking</h2>
          <p>
            The skufx.com marketing site does not use third-party analytics or advertising cookies. The app.skufx.com application uses functional cookies only (session token, theme preference).
          </p>

          <h2>6. Your rights</h2>
          <p>You can request a copy of your data, correction, or deletion at any time by emailing <a href={`mailto:${COMPANY.emails.privacy}`}>{COMPANY.emails.privacy}</a>.</p>

          <h2>7. Changes</h2>
          <p>We&apos;ll update this page when the policy changes and notify active users by email when the change is material.</p>

          <h2>8. Contact</h2>
          <p>
            {COMPANY.name}<br/>
            <a href={`mailto:${COMPANY.emails.privacy}`}>{COMPANY.emails.privacy}</a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
