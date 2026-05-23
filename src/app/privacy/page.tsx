// src/app/privacy/page.tsx
import type { Metadata } from "next";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SkuFx collects, uses, and protects your data — including Amazon SP-API data.",
};

export default function Privacy() {
  return (
    <>
      <TopNav />
      <main className="bg-cream-50">
        <article className="prose prose-slate container-narrow py-20 max-w-none lg:py-28">
          <h1 className="text-section-h1 text-slate-900">Privacy Policy</h1>
          <p className="text-[13px] text-slate-500">
            Version 2.0 &bull; Effective date: May 23, 2026 &bull; Last updated: May 23, 2026
          </p>

          {/* 1 */}
          <h2>1. Introduction &amp; Scope</h2>
          <p>
            SkuFx (&quot;SkuFx&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is operated by{" "}
            <strong>{COMPANY.name}</strong> (the &quot;Company&quot;), a company incorporated in
            Liaoyang, Liaoning Province, People&apos;s Republic of China. We are the data controller for personal
            information processed under this Policy.
          </p>
          <p>
            This Privacy Policy describes how we collect, use, store, share, and protect information
            when you visit skufx.com, use the SkuFx application at app.skufx.com, or authorize
            SkuFx to access your Amazon Selling Partner API (&quot;SP-API&quot;) data.
          </p>
          <p>By using SkuFx, you agree to this Policy. If you do not agree, please discontinue use.</p>

          {/* 2 */}
          <h2>2. Information We Collect</h2>

          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>
              <strong>Registration data:</strong> name, email address, company name.
            </li>
            <li>
              <strong>Payment data:</strong> billing address and payment method (processed by our
              payment provider; we do not store full card numbers).
            </li>
            <li>
              <strong>Communications:</strong> messages you send via support, contact forms, or
              email.
            </li>
          </ul>

          <h3>2.2 Amazon Seller Data (via SP-API)</h3>
          <p>
            If you authorize SkuFx to connect to your Amazon Seller Central account via Login with
            Amazon (LWA) OAuth, we retrieve and process the following data to provide Business ERP
            features:
          </p>
          <ul>
            <li>
              <strong>FBA inventory data:</strong> available units, reserved, inbound, and
              damaged units per SKU.
            </li>
            <li>
              <strong>Order data:</strong> Order ID, status, amount, fulfillment channel, marketplace,
              purchase date. Order data may include ship-to city, state, and postal code — treated as
              PII: stored in separately encrypted fields, automatically deleted 30 days after order
              delivery, never displayed at individual order level, used only for aggregated regional
              analytics.
            </li>
            <li>
              <strong>Sales &amp; traffic reports:</strong> sessions, conversion rate, units sold,
              revenue by date and ASIN.
            </li>
            <li>
              <strong>Financial events:</strong> FBA fees, platform commissions, refunds, promotional
              discounts, adjustments.
            </li>
            <li>
              <strong>Settlement records:</strong> disbursement amounts and timing.
            </li>
          </ul>
          <p>
            <strong>We do NOT request and do NOT access:</strong> buyer names, emails, or street
            addresses; Direct-to-Consumer Shipping data; Buyer Communications or Solicitation data;
            Tax Invoice or Tax Remittance data.
          </p>
          <p>
            <strong>
              We use SP-API data solely to provide SkuFx features to you.
            </strong>{" "}
            We do not aggregate your data across seller accounts, do not use it for our own retail
            operations, and do not share it with any third party except as described in Section 5.
          </p>

          <h3>2.3 Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Technical data:</strong> IP address, browser type and version, operating
              system, referrer URL.
            </li>
            <li>
              <strong>Usage data:</strong> pages visited, features used, timestamps, session
              duration.
            </li>
            <li>
              <strong>Cookies:</strong> see Section 9 for details.
            </li>
          </ul>

          {/* 3 */}
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and improve the SkuFx platform and its features.</li>
            <li>Authenticate your account and maintain session security.</li>
            <li>
              Process SP-API data to generate keyword analyses, listing audits, inventory insights,
              ERP dashboards, and other features you have enabled.
            </li>
            <li>
              Send transactional emails (account confirmations, billing receipts, alerts you have
              configured).
            </li>
            <li>Respond to your support requests.</li>
            <li>Detect, investigate, and prevent security incidents and fraudulent activity.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <p>
            We do not sell your personal information. We do not use your SP-API data for advertising
            or train machine-learning models on it beyond the features you have contracted for.
          </p>

          {/* 4 */}
          <h2>4. Data Storage and Security</h2>
          <p>
            Your data is stored on servers located in the United States operated by our hosting
            provider (see the sub-processor list in Section 5). We implement the following controls:
          </p>
          <ul>
            <li>
              <strong>Encryption at rest:</strong> AES-256 for all SP-API data and personal data
              stored in our database.
            </li>
            <li>
              <strong>Encryption in transit:</strong> TLS 1.3 for all communications between your
              browser and our servers.
            </li>
            <li>
              <strong>Credential protection:</strong> Amazon LWA refresh tokens are stored using
              envelope encryption (Fernet); secrets are stored in a secrets vault, never in
              plaintext.
            </li>
            <li>
              <strong>Access control:</strong> role-based access control (RBAC), multi-factor
              authentication (MFA) for all staff, principle of least privilege, and separation of
              duties.
            </li>
            <li>
              <strong>Audit logging:</strong> all access to production data by staff is logged and
              retained for one year.
            </li>
            <li>
              <strong>Vulnerability management:</strong> dependency scanning, container scanning, and
              annual penetration testing. Critical vulnerabilities are remediated within 7 days.
            </li>
          </ul>

          {/* 5 */}
          <h2>5. Multi-Tenant Data Isolation</h2>
          <p>
            SkuFx processes data for many independent sellers as a public solution provider. We
            guarantee:
          </p>
          <ul>
            <li>
              <strong>Database isolation:</strong> PostgreSQL Row-Level Security ensures queries are
              always scoped to a single seller. No cross-account data access is technically possible,
              even for SkuFx engineers.
            </li>
            <li>
              <strong>No cross-seller analytics:</strong> we do not aggregate or benchmark data
              across seller accounts.
            </li>
            <li>
              <strong>Engineering access:</strong> all production data access by SkuFx staff is
              audit-logged and requires documented justification.
            </li>
            <li>
              <strong>No competitive use:</strong> we never use your Amazon data for our own retail
              operations or to benefit other customers.
            </li>
          </ul>

          {/* 6 */}
          <h2>6. Data Sharing and Disclosure</h2>
          <p>
            <strong>
              We do not share your SP-API data or personal information with any third party for
              commercial purposes.
            </strong>{" "}
            We may share data only in the following circumstances:
          </p>
          <ul>
            <li>
              <strong>Sub-processors:</strong> we engage service providers who process data on our
              behalf under contractual data processing obligations. See the complete, current list at{" "}
              <a href="/sub-processors">skufx.com/sub-processors</a>. We notify active customers at
              least 30 days before adding any new sub-processor that handles Amazon seller data.
            </li>
            <li>
              <strong>Legal requirements:</strong> we may disclose information when required by law,
              regulation, court order, or lawful government request. Where permitted, we will notify
              you before complying.
            </li>
            <li>
              <strong>Business transfers:</strong> if SkuFx is acquired or merges with another
              entity, your information may be transferred. We will notify you by email before your
              information becomes subject to a materially different privacy policy.
            </li>
          </ul>

          {/* 7 */}
          <h2>7. Data Retention</h2>
          <p>We retain different categories of data for different periods:</p>
          <ul>
            <li>
              <strong>FBA inventory snapshots:</strong> 1 year (days-of-supply trend analysis).
            </li>
            <li>
              <strong>Orders (with PII fields):</strong>{" "}
              <strong>buyer location (city/state/postal code) deleted 30 days after order delivery</strong>,
              in compliance with Amazon&apos;s Developer Protection Policy (DPP).
            </li>
            <li>
              <strong>Order aggregates (no PII):</strong> 2 years (sales analytics).
            </li>
            <li>
              <strong>Sales &amp; traffic reports:</strong> 2 years (trend analysis).
            </li>
            <li>
              <strong>Financial events:</strong> 1 year (profit calculation).
            </li>
            <li>
              <strong>Settlement records:</strong> 7 years (tax compliance).
            </li>
            <li>
              <strong>LWA refresh tokens:</strong> retained until you revoke SP-API authorization,
              then deleted within 24 hours (stored encrypted with Fernet).
            </li>
            <li>
              <strong>Application logs:</strong> 1 year.
            </li>
            <li>
              <strong>Audit logs:</strong> 3 years.
            </li>
            <li>
              <strong>Backup snapshots:</strong> 30 days, encrypted.
            </li>
            <li>
              <strong>Account data:</strong> retained for the duration of your subscription plus 90
              days after cancellation, unless you request earlier deletion.
            </li>
          </ul>
          <p>
            <strong>Upon revocation of SP-API authorization</strong> (via Seller Central → Apps
            &amp; Services → Manage Your Apps), we delete all cached SP-API data within 24 hours and
            send you a confirmation email.
          </p>

          {/* 8 */}
          <h2>8. Your Rights and Choices</h2>
          <p>
            Depending on your jurisdiction, you may have the following rights regarding your personal
            data:
          </p>
          <ul>
            <li>
              <strong>Right to access:</strong> request a copy of the personal data we hold about
              you.
            </li>
            <li>
              <strong>Right to rectification:</strong> request correction of inaccurate or
              incomplete data.
            </li>
            <li>
              <strong>Right to erasure:</strong> request deletion of your personal data.
            </li>
            <li>
              <strong>Right to data portability:</strong> request your data in a machine-readable
              format.
            </li>
            <li>
              <strong>Right to restrict processing:</strong> request that we limit how we use your
              data.
            </li>
            <li>
              <strong>Right to object:</strong> object to processing based on legitimate interests.
            </li>
            <li>
              <strong>Right to withdraw consent:</strong> where processing is based on consent,
              withdraw it at any time without affecting the lawfulness of prior processing.
            </li>
          </ul>
          <p>
            To exercise these rights, email{" "}
            <a href={`mailto:${COMPANY.emails.privacy}`}>{COMPANY.emails.privacy}</a>. We will
            respond within 30 days. To revoke SP-API authorization specifically, go to Seller Central
            → Apps &amp; Services → Manage Your Apps — we will process deletion within 24 hours.
          </p>
          <p>
            If you are in the European Economic Area (EEA) and believe we have not handled your
            request correctly, you have the right to lodge a complaint with your local supervisory
            authority.
          </p>

          {/* 9 */}
          <h2>9. International Data Transfers</h2>
          <p>
            {COMPANY.name} is incorporated in the People&apos;s Republic of China. Your data is
            processed and stored on servers in the United States. When we transfer personal data from
            the EEA or United Kingdom to the United States, we rely on Standard Contractual Clauses
            (SCCs) approved by the European Commission (Article 46(2)(c) GDPR) as the legal transfer
            mechanism.
          </p>
          <p>
            We comply with applicable Chinese data-export regulations, including the requirements
            under China&apos;s Personal Information Protection Law (PIPL) and Data Security Law
            (DSL) for cross-border data transfers.
          </p>
          <p>
            For data processing agreements or questions about cross-border transfers, contact{" "}
            <a href={`mailto:${COMPANY.emails.privacy}`}>{COMPANY.emails.privacy}</a>.
          </p>

          {/* 10 */}
          <h2>10. Cookies and Tracking</h2>
          <p>We use the following cookies on skufx.com and app.skufx.com:</p>
          <ul>
            <li>
              <strong>Strictly necessary cookies:</strong> session authentication token, CSRF token,
              theme preference. Required for the service to function; cannot be disabled.
            </li>
            <li>
              <strong>Performance cookies:</strong> Vercel Speed Insights (anonymous, aggregated
              page-load metrics; no personally identifiable information is sent). You can disable
              these in your browser settings.
            </li>
          </ul>
          <p>
            We do <strong>not</strong> use advertising cookies, cross-site tracking pixels, or
            third-party analytics platforms that build user profiles. See our full{" "}
            <a href="/cookies">Cookie Policy</a> for details.
          </p>

          {/* 11 */}
          <h2>11. Children&apos;s Privacy</h2>
          <p>
            SkuFx is intended solely for business use by individuals 18 years of age or older. We do
            not knowingly collect personal information from children under 13. If you believe a child
            under 13 has provided us with personal information, please contact{" "}
            <a href={`mailto:${COMPANY.emails.privacy}`}>{COMPANY.emails.privacy}</a> and we will
            delete it promptly.
          </p>

          {/* 12 */}
          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Policy from time to time. When we make material changes, we will
            update the &quot;Last updated&quot; date at the top of this page and notify active users
            by email at least 14 days before the change takes effect. Historical versions of this
            Policy are available on request.
          </p>

          {/* 13 */}
          <h2>13. Contact Us</h2>
          <p>
            <strong>Data Controller &amp; Data Protection Officer:</strong>
            <br />
            {COMPANY.name}
            <br />
            Room 1002, 1st Floor, Building D, No. 36-4 Tianfu Road,
            Wensheng District, Liaoyang City, Liaoning Province,
            People&apos;s Republic of China
            <br />
            <a href={`mailto:${COMPANY.emails.privacy}`}>{COMPANY.emails.privacy}</a>
          </p>
          <p>
            <strong>Security concerns:</strong>{" "}
            <a href={`mailto:${COMPANY.emails.security}`}>{COMPANY.emails.security}</a>
          </p>
          <p>
            <strong>General support:</strong>{" "}
            <a href={`mailto:${COMPANY.emails.support}`}>{COMPANY.emails.support}</a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
