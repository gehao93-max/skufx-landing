// src/app/dpa/page.tsx
import type { Metadata } from "next";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description:
    "SkuFx Data Processing Agreement (DPA) — sub-processor list and GDPR obligations.",
};

export default function DPA() {
  return (
    <>
      <TopNav />
      <main className="bg-cream-50">
        <article className="prose prose-slate container-narrow py-20 max-w-none lg:py-28">
          <h1 className="text-section-h1 text-slate-900">Data Processing Agreement</h1>
          <p className="text-[13px] text-slate-500">
            Version 1.0 &bull; Effective date: May 23, 2026 &bull; Last updated: June 25, 2026
          </p>
          <p>
            This Data Processing Agreement (&quot;DPA&quot;) is incorporated into and forms part of
            the SkuFx Terms of Service between <strong>{COMPANY.name}</strong> (&quot;Processor&quot;
            , &quot;SkuFx&quot;) and you (&quot;Controller&quot;). It applies where the Controller
            is subject to data protection law that requires a data processing agreement (e.g., the EU
            General Data Protection Regulation (GDPR), the UK GDPR, or equivalent legislation).
          </p>
          <p>
            Enterprise customers requiring a signed DPA should contact{" "}
            <a href={`mailto:${COMPANY.emails.privacy}`}>{COMPANY.emails.privacy}</a> to request a
            countersigned copy.
          </p>

          <h2>1. Definitions</h2>
          <ul>
            <li>
              <strong>Controller:</strong> you, the SkuFx customer who determines the purposes and
              means of processing personal data.
            </li>
            <li>
              <strong>Processor:</strong> {COMPANY.name} (SkuFx), acting on the Controller&apos;s
              instructions.
            </li>
            <li>
              <strong>Personal Data:</strong> any information relating to an identified or
              identifiable natural person, as defined by applicable law.
            </li>
            <li>
              <strong>Processing:</strong> any operation performed on personal data (collection,
              storage, retrieval, use, disclosure, deletion).
            </li>
            <li>
              <strong>Sub-processor:</strong> a third party engaged by the Processor to assist in
              processing personal data.
            </li>
            <li>
              <strong>Services:</strong> the SkuFx SaaS platform as described in the Terms of
              Service.
            </li>
          </ul>

          <h2>2. Scope and Purpose</h2>
          <p>
            The Processor processes personal data solely to provide the Services to the Controller,
            as described in the Terms of Service and Privacy Policy. Processing is limited to the
            categories of data and data subjects listed in Schedule A of this DPA.
          </p>

          <h2>3. Processor Obligations</h2>
          <p>The Processor shall:</p>
          <ul>
            <li>
              Process personal data only on documented instructions from the Controller (which
              includes these Terms and the features you enable).
            </li>
            <li>
              Ensure that persons authorized to process personal data are bound by confidentiality
              obligations.
            </li>
            <li>
              Implement appropriate technical and organizational security measures as described in our{" "}
              <a href="/privacy">Privacy Policy</a> (Section 4) and <a href="/security">Security</a>{" "}
              page.
            </li>
            <li>
              Assist the Controller in responding to data subject rights requests (access,
              rectification, erasure, portability) without undue delay.
            </li>
            <li>
              Delete or return personal data upon termination of the Services, unless storage is
              required by law.
            </li>
            <li>
              Make available to the Controller information necessary to demonstrate compliance with
              this DPA.
            </li>
          </ul>

          <h2>4. Sub-processors</h2>
          <p>
            The Controller authorizes the Processor to engage sub-processors. The Processor will
            notify the Controller at least 30 days before adding or replacing a sub-processor by
            updating this page and emailing active users. If the Controller objects, it may terminate
            the affected Services per the Terms of Service.
          </p>
          <p>Current sub-processors:</p>
          <table>
            <thead>
              <tr>
                <th>Sub-processor</th>
                <th>Service</th>
                <th>Data Processed</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vercel, Inc.</td>
                <td>Marketing website hosting (Next.js)</td>
                <td>Public marketing traffic; web request logs</td>
                <td>Global (USA primary)</td>
              </tr>
              <tr>
                <td>RackNerd LLC</td>
                <td>Application backend &amp; database hosting</td>
                <td>All seller SP-API data; account data</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Alibaba Cloud (Aliyun)</td>
                <td>DNS management</td>
                <td>DNS query metadata only (no seller data)</td>
                <td>China</td>
              </tr>
              <tr>
                <td>GitHub, Inc.</td>
                <td>Source code repository</td>
                <td>Application source code (no seller data)</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Sentry (Functional Software, Inc.)</td>
                <td>Error tracking</td>
                <td>Application error logs (no PII)</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Tencent Cloud (Exmail)</td>
                <td>Business email</td>
                <td>Support &amp; operational emails (sellers&apos; own non-PII summaries)</td>
                <td>China</td>
              </tr>
            </tbody>
          </table>

          <h2>5. Data Subject Rights</h2>
          <p>
            The Processor shall, to the extent technically feasible, assist the Controller in
            fulfilling its obligations to respond to data subject requests under Articles 15–22 GDPR.
            Requests should be submitted to{" "}
            <a href={`mailto:${COMPANY.emails.privacy}`}>{COMPANY.emails.privacy}</a>. We will
            acknowledge within 72 hours and respond fully within 30 days.
          </p>

          <h2>6. Security Incident Notification</h2>
          <p>
            The Processor shall notify the Controller without undue delay and in any event within{" "}
            <strong>24 hours</strong> of becoming aware of a personal data breach affecting the
            Controller&apos;s data. Notification will be sent to the Controller&apos;s registered
            email address and will include: (a) a description of the incident; (b) categories and
            approximate number of individuals and records affected; (c) likely consequences; (d)
            measures taken or proposed.
          </p>
          <p>
            Security incidents should also be reported to{" "}
            <a href={`mailto:${COMPANY.emails.security}`}>{COMPANY.emails.security}</a>.
          </p>

          <h2>7. Audits and Inspections</h2>
          <p>
            The Processor shall make available information necessary to demonstrate compliance with
            this DPA and cooperate with reasonable audit requests. Audits shall be conducted with at
            least 30 days&apos; written notice, at the Controller&apos;s cost, and shall not
            unreasonably disrupt the Processor&apos;s operations.
          </p>

          <h2>8. International Data Transfers</h2>
          <p>
            Where the Controller is established in the EEA or UK and personal data is transferred to
            the Processor or sub-processors outside the EEA/UK, such transfers are made pursuant to
            Standard Contractual Clauses (SCCs) adopted by the European Commission (Decision
            2021/914). A copy of the applicable SCCs is available on request from{" "}
            <a href={`mailto:${COMPANY.emails.privacy}`}>{COMPANY.emails.privacy}</a>.
          </p>

          <h2>9. Term and Termination</h2>
          <p>
            This DPA remains in force for the duration of the Controller&apos;s subscription to the
            Services. It terminates automatically upon termination or expiry of the Terms of Service.
          </p>

          <h2>10. Return or Deletion of Data</h2>
          <p>
            Upon termination of the Services, the Processor shall, at the Controller&apos;s
            election: (a) return a copy of the Controller&apos;s personal data in a machine-readable
            format; or (b) securely delete all personal data. Deletion will be completed within 30
            days of termination. The Processor may retain data where required by applicable law, in
            which case it will notify the Controller.
          </p>

          <h2>Schedule A — Details of Processing</h2>

          <h3>Categories of Data Subjects</h3>
          <ul>
            <li>
              The Controller&apos;s Amazon buyer customers (order and shipping data only, if the
              Orders role is granted).
            </li>
            <li>The Controller&apos;s registered users on SkuFx (account data).</li>
          </ul>

          <h3>Categories of Personal Data</h3>
          <ul>
            <li>Account data: name, email address, company name, IP address.</li>
            <li>
              SP-API data: as described in the SkuFx <a href="/privacy">Privacy Policy</a>, Section
              2.2, limited to the roles authorized by the Controller.
            </li>
          </ul>

          <h3>Purpose and Legal Basis of Processing</h3>
          <ul>
            <li>Purpose: provision of the SkuFx SaaS platform features.</li>
            <li>
              Legal basis (GDPR): Article 6(1)(b) — processing necessary for the performance of a
              contract.
            </li>
          </ul>

          <h3>Retention Period</h3>
          <p>
            As set out in the SkuFx <a href="/privacy">Privacy Policy</a>, Section 6.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
