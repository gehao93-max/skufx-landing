// src/app/terms/page.tsx
import type { Metadata } from "next";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using SkuFx.",
};

export default function Terms() {
  return (
    <>
      <TopNav />
      <main className="bg-cream-50">
        <article className="prose prose-slate container-narrow py-20 max-w-none lg:py-28">
          <h1 className="text-section-h1 text-slate-900">Terms of Service</h1>
          <p className="text-[13px] text-slate-500">Last updated: May 23, 2026</p>

          <h2>1. Acceptance</h2>
          <p>By accessing or using SkuFx, you agree to these terms. If you don&apos;t agree, don&apos;t use the service.</p>

          <h2>2. Account</h2>
          <p>You&apos;re responsible for keeping your login credentials secure. Notify us at <a href={`mailto:${COMPANY.emails.security}`}>{COMPANY.emails.security}</a> if you suspect unauthorized access.</p>

          <h2>3. Acceptable use</h2>
          <ul>
            <li>Don&apos;t use SkuFx to violate Amazon&apos;s Terms of Service or any law.</li>
            <li>Don&apos;t attempt to access other customers&apos; data.</li>
            <li>Don&apos;t scrape or attempt to extract SkuFx itself.</li>
          </ul>

          <h2>4. Amazon SP-API</h2>
          <p>If you authorize SP-API access through SkuFx, you grant us permission to retrieve, store, and process data from your authorized Amazon seller accounts solely for providing SkuFx features. You can revoke this authorization at any time from Seller Central.</p>

          <h2>5. Subscription &amp; billing</h2>
          <p>Pricing and billing terms are presented when you subscribe. Subscriptions auto-renew unless cancelled before the renewal date.</p>

          <h2>6. Termination</h2>
          <p>You can cancel anytime. We may suspend or terminate accounts that violate these terms.</p>

          <h2>7. Disclaimers</h2>
          <p>SkuFx is provided &quot;as is&quot;. Insights and recommendations are informational — your business decisions are your own.</p>

          <h2>8. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, our total liability is limited to the amount you paid us in the 12 months preceding the claim.</p>

          <h2>9. Governing law</h2>
          <p>These terms are governed by the laws of the People&apos;s Republic of China.</p>

          <h2>10. Contact</h2>
          <p>
            {COMPANY.name}<br/>
            <a href={`mailto:${COMPANY.emails.support}`}>{COMPANY.emails.support}</a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
