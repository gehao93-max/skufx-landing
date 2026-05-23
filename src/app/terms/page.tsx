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
          <p className="text-[13px] text-slate-500">
            Version 1.0 &bull; Effective date: May 23, 2026 &bull; Last updated: May 23, 2026
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using SkuFx at skufx.com or app.skufx.com (the &quot;Service&quot;),
            you (&quot;User&quot;, &quot;you&quot;) agree to be bound by these Terms of Service
            (&quot;Terms&quot;). If you are entering into these Terms on behalf of a company or
            other legal entity, you represent that you have authority to bind that entity. If you do
            not agree, do not use the Service.
          </p>
          <p>
            These Terms are between you and <strong>{COMPANY.name}</strong> (&quot;SkuFx&quot;,
            &quot;we&quot;, &quot;us&quot;).
          </p>

          <h2>2. Description of Service</h2>
          <p>
            SkuFx is a SaaS platform for Amazon brand owners providing keyword research, competitor
            intelligence, listing management, FBA inventory tracking, order management, and financial
            analytics. Features may vary by subscription plan. SkuFx integrates with Amazon Selling
            Partner API (&quot;SP-API&quot;) to retrieve data from your authorized Amazon Seller
            Central accounts.
          </p>

          <h2>3. Account Registration &amp; Eligibility</h2>
          <p>
            To use SkuFx you must: (a) be at least 18 years old; (b) be a legitimate Amazon seller
            or authorized representative; (c) provide accurate registration information; and (d) keep
            your account credentials confidential. You are responsible for all activity under your
            account. Notify us immediately at{" "}
            <a href={`mailto:${COMPANY.emails.security}`}>{COMPANY.emails.security}</a> if you
            suspect unauthorized access.
          </p>

          <h2>4. User Obligations and Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use SkuFx to violate Amazon&apos;s Terms of Service, Selling Partner API Developer
              Agreement, or any applicable law.
            </li>
            <li>Attempt to access, scrape, or extract data from other users&apos; accounts.</li>
            <li>Reverse-engineer, decompile, or create derivative works of the SkuFx platform.</li>
            <li>
              Resell, sublicense, or redistribute SkuFx or SP-API data obtained through SkuFx to
              third parties.
            </li>
            <li>
              Upload malicious code, conduct denial-of-service attacks, or interfere with the
              Service&apos;s operation.
            </li>
            <li>
              Use SkuFx to aggregate or benchmark Amazon data across unrelated seller accounts for
              purposes other than your own operations.
            </li>
          </ul>

          <h2>5. SP-API Integration Specific Terms</h2>
          <p>
            When you authorize SkuFx to access your Seller Central account through Login with Amazon
            (LWA) OAuth, you grant SkuFx permission to retrieve, store, and process data from your
            authorized Amazon seller accounts solely to provide the SkuFx features you have enabled.
          </p>
          <ul>
            <li>
              Authorization is limited to the SP-API roles you select; enabling additional roles is
              your choice and your responsibility.
            </li>
            <li>
              You can revoke authorization at any time from Seller Central → Apps &amp; Services →
              Manage Your Apps. Upon revocation, we delete all cached SP-API data within 24 hours.
            </li>
            <li>
              SkuFx will not use your SP-API data for any purpose other than providing your
              contracted services, including not using it for our own retail operations or sharing it
              with third parties for commercial purposes.
            </li>
            <li>
              Data retrieved via SP-API is subject to Amazon&apos;s Developer Protection Policy
              (DPP). By using SkuFx, you acknowledge that you have reviewed Amazon&apos;s relevant
              policies.
            </li>
          </ul>

          <h2>6. Subscription, Billing &amp; Refunds</h2>
          <p>
            Subscription plans and pricing are presented at checkout. Subscriptions are billed in
            advance on a monthly or annual cycle and auto-renew unless cancelled before the renewal
            date. You may cancel at any time via account settings or by contacting{" "}
            <a href={`mailto:${COMPANY.emails.support}`}>{COMPANY.emails.support}</a>. Cancellation
            takes effect at the end of the current billing period. We do not offer prorated refunds
            for mid-period cancellations except where required by applicable law.
          </p>

          <h2>7. Intellectual Property Rights</h2>
          <p>
            The SkuFx platform, including all software, algorithms, designs, and documentation, is
            owned by {COMPANY.name} and protected by intellectual property laws. You are granted a
            limited, non-exclusive, non-transferable license to use the Service for your internal
            business purposes during your subscription.
          </p>
          <p>
            You retain ownership of all data you upload or that is retrieved on your behalf via
            SP-API. You grant SkuFx a limited license to process this data solely to deliver the
            Service. AI-generated outputs (e.g., listing drafts) produced using your data belong to
            you; SkuFx retains the right to improve its underlying models using only anonymized,
            aggregated signals.
          </p>

          <h2>8. Disclaimers and Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
            WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. We do not warrant that: (a) the
            Service will be uninterrupted or error-free; (b) SP-API data will be 100% accurate (data
            is sourced from Amazon and subject to Amazon&apos;s own accuracy); (c) insights or
            recommendations will result in any particular business outcome.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, {COMPANY.name.toUpperCase()}
            &apos;S TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS
            OR THE SERVICE SHALL NOT EXCEED THE GREATER OF: (A) THE TOTAL FEES YOU PAID TO SKUFX IN
            THE 12 MONTHS PRECEDING THE CLAIM, OR (B) USD $100. IN NO EVENT SHALL WE BE LIABLE FOR
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF
            PROFITS, DATA, GOODWILL, OR BUSINESS INTERRUPTION.
          </p>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless {COMPANY.name} and its officers,
            directors, employees, and agents from any claims, damages, losses, or expenses
            (including reasonable legal fees) arising from: (a) your violation of these Terms; (b)
            your use of the Service; (c) your violation of Amazon&apos;s Terms of Service or
            Developer Agreement; or (d) your violation of any third-party rights.
          </p>

          <h2>11. Termination</h2>
          <p>
            You may cancel your subscription and close your account at any time. We may suspend or
            terminate your access immediately if: (a) you violate these Terms or Amazon&apos;s
            policies; (b) we are required to do so by law; or (c) we discontinue the Service with 30
            days&apos; written notice. Upon termination, your license to use the Service ends and we
            will delete your data per our retention policy (see our{" "}
            <a href="/privacy">Privacy Policy</a>).
          </p>

          <h2>12. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of the People&apos;s Republic of China. Any dispute
            arising out of or in connection with these Terms shall first be submitted to good-faith
            negotiation. If unresolved within 30 days, it shall be submitted to binding arbitration
            administered by the China International Economic and Trade Arbitration Commission
            (CIETAC) in Beijing, in accordance with its arbitration rules. The arbitral award shall
            be final and binding.
          </p>

          <h2>13. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Material changes will be communicated by
            email at least 14 days before taking effect. Continued use of the Service after that date
            constitutes acceptance of the revised Terms. Historical versions are available on
            request.
          </p>

          <h2>14. Contact Information</h2>
          <p>
            <strong>{COMPANY.name}</strong>
            <br />
            Liaoning, People&apos;s Republic of China
            <br />
            General: <a href={`mailto:${COMPANY.emails.support}`}>{COMPANY.emails.support}</a>
            <br />
            Privacy: <a href={`mailto:${COMPANY.emails.privacy}`}>{COMPANY.emails.privacy}</a>
            <br />
            Security: <a href={`mailto:${COMPANY.emails.security}`}>{COMPANY.emails.security}</a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
