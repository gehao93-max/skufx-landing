// src/app/connect/page.tsx
import type { Metadata } from "next";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";
import { SectionEyebrow } from "@/components/section-eyebrow";

export const metadata: Metadata = {
  title: "Connect Your Amazon Account",
  description:
    "How to connect your Amazon Seller Central account to SkuFx via official OAuth authorization. Takes 60 seconds.",
};

const STEPS = [
  {
    number: "01",
    title: 'Click "Connect with Amazon"',
    body: 'After signing up for SkuFx, click the "Connect with Amazon" button. You\'ll be redirected to Amazon\'s authorization page.',
  },
  {
    number: "02",
    title: "Sign in to Seller Central",
    body: "You'll see Amazon's official authorization page. Sign in with your Seller Central credentials — SkuFx never sees your password.",
  },
  {
    number: "03",
    title: "Review and Authorize",
    body: 'Amazon shows exactly which permissions SkuFx is requesting. Review them and click "Confirm" to authorize.',
  },
  {
    number: "04",
    title: "Return to SkuFx",
    body: "You're automatically redirected to your ERP Dashboard. Data starts syncing immediately.",
  },
];

const FAQS = [
  {
    q: "Does SkuFx see my Amazon password?",
    a: "No. Authentication is entirely on Amazon's side via Login with Amazon (LWA) OAuth. We only receive a token, never your credentials.",
  },
  {
    q: "Can SkuFx modify my listings without permission?",
    a: "No. Any write operation requires your explicit per-action approval within SkuFx. We request read-only roles by default.",
  },
  {
    q: "Can other SkuFx users see my data?",
    a: "No. We use PostgreSQL Row-Level Security to ensure complete data isolation. No cross-account access is technically possible.",
  },
  {
    q: "Where is my data stored?",
    a: "On encrypted servers in the United States (Los Angeles, CA), operated by RackNerd LLC. All data is encrypted at rest (AES-256) and in transit (TLS 1.3).",
  },
];

export default function Connect() {
  return (
    <>
      <TopNav />
      <main className="bg-cream-50">
        <div className="container-narrow py-20 lg:py-28">
          <SectionEyebrow label="SP-API Integration" />
          <h1 className="mt-3 text-section-h1 text-slate-900 lg:text-[44px]">
            How to Connect Your Amazon Account
          </h1>
          <p className="mt-4 text-body-lg text-slate-600">
            SkuFx integrates with your Amazon Seller Central account through Amazon&apos;s official
            OAuth authorization (Login with Amazon). The connection takes 60 seconds.
          </p>

          {/* Steps */}
          <div className="mt-14 space-y-5">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="font-mono text-[32px] font-extrabold leading-none text-amber-400/60">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-[17px] font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What we access */}
          <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-[22px] font-bold text-slate-900">What We Access</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
              We access only what you explicitly authorize. All permissions are shown on Amazon&apos;s
              authorization page before you confirm.
            </p>
            <ul className="mt-5 space-y-2.5 text-[14px] leading-snug text-slate-700">
              {[
                "FBA inventory levels (available, reserved, inbound)",
                "Order data (count, revenue, fulfillment status)",
                "Sales and traffic reports",
                "Financial events (fees, refunds, settlement)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Data security */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-[22px] font-bold text-slate-900">Your Data Is Yours</h2>
            <ul className="mt-4 space-y-2.5 text-[14px] leading-snug text-slate-700">
              {[
                "Each seller's data is logically isolated — no cross-account access",
                "Data is encrypted at rest (AES-256) and in transit (TLS 1.3)",
                "We never use your data to compete with you",
                "We never share your data with other sellers or third parties",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Revoking */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-[22px] font-bold text-slate-900">Revoking Access</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-slate-500">
                  From Amazon Seller Central
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-slate-700">
                  Apps &amp; Services → Manage Your Apps → SkuFx → Revoke
                </p>
              </div>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-slate-500">
                  From SkuFx
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-slate-700">
                  Settings → Connected Accounts → Disconnect
                </p>
              </div>
            </div>
            <p className="mt-5 text-[13px] leading-relaxed text-slate-500">
              Upon revocation, all your SP-API data is permanently deleted within 24 hours, including
              from backup systems within 30 days.
            </p>
          </section>

          {/* FAQ */}
          <section className="mt-14">
            <h2 className="text-[24px] font-bold text-slate-900">FAQ</h2>
            <div className="mt-6 space-y-5">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-[15px] font-semibold text-slate-900">{q}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
