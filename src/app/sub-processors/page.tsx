// src/app/sub-processors/page.tsx
import type { Metadata } from "next";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sub-processors",
  description: "Third-party sub-processors used by SkuFx to operate the platform.",
};

const SUB_PROCESSORS = [
  {
    name: "Vercel, Inc.",
    service: "Marketing site hosting",
    data: "Public marketing traffic; web request logs",
    location: "Global (USA primary)",
  },
  {
    name: "RackNerd LLC",
    service: "Application & database hosting (all seller data)",
    data: "All seller SP-API data; account data",
    location: "United States",
  },
  {
    name: "Alibaba Cloud (Aliyun)",
    service: "DNS management",
    data: "DNS query metadata only (no seller data)",
    location: "China",
  },
  {
    name: "GitHub, Inc.",
    service: "Source code repository",
    data: "Application source code (no seller data)",
    location: "United States",
  },
  {
    name: "Sentry (Functional Software, Inc.)",
    service: "Error tracking",
    data: "Application error logs (no PII)",
    location: "United States",
  },
  {
    name: "Tencent Cloud (Exmail)",
    service: "Business email",
    data: "Support & operational emails (no seller PII)",
    location: "China",
  },
];

export default function SubProcessors() {
  return (
    <>
      <TopNav />
      <main className="bg-cream-50">
        <article className="prose prose-slate container-narrow py-20 max-w-none lg:py-28">
          <h1 className="text-section-h1 text-slate-900">Sub-processors</h1>
          <p className="text-[13px] text-slate-500">
            Last updated: June 25, 2026
          </p>
          <p>
            SkuFx uses the following sub-processors to operate the platform. Each is bound by a data
            processing agreement.
          </p>

          <div className="not-prose mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-[14px]">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-5 py-3.5 text-left text-[12px] font-bold uppercase tracking-wide text-slate-500">
                    Sub-processor
                  </th>
                  <th className="px-5 py-3.5 text-left text-[12px] font-bold uppercase tracking-wide text-slate-500">
                    Service
                  </th>
                  <th className="px-5 py-3.5 text-left text-[12px] font-bold uppercase tracking-wide text-slate-500">
                    Data Processed
                  </th>
                  <th className="px-5 py-3.5 text-left text-[12px] font-bold uppercase tracking-wide text-slate-500">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {SUB_PROCESSORS.map((sp) => (
                  <tr key={sp.name}>
                    <td className="px-5 py-4 font-medium text-slate-900">{sp.name}</td>
                    <td className="px-5 py-4 text-slate-600">{sp.service}</td>
                    <td className="px-5 py-4 text-slate-600">{sp.data}</td>
                    <td className="px-5 py-4 text-slate-600">{sp.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Change Notification</h2>
          <p>
            We notify active customers at least 30 days before adding a new sub-processor that handles
            Amazon seller data.
          </p>
          <p>
            To subscribe to notifications, email{" "}
            <a href="mailto:subprocessor-updates@skufx.com">subprocessor-updates@skufx.com</a> with
            your registered SkuFx account email.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about our sub-processors?{" "}
            <a href={`mailto:${COMPANY.emails.privacy}`}>{COMPANY.emails.privacy}</a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
