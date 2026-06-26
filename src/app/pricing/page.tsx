// src/app/pricing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "SkuFx pricing is custom-quoted to your catalog size and the modules you use. Get a tailored quote for your Amazon brand.",
};

// Illustrative scopes — every plan is custom-quoted, no fixed list price.
const SCENARIOS = [
  {
    name: "Single Brand",
    blurb: "One Amazon brand getting started with research and brand protection.",
    points: [
      "Product Studio + Market Intelligence modules",
      "Keyword research & competitor tracking",
      "Real-time listing protection",
      "Email support",
    ],
  },
  {
    name: "Multi-Brand",
    blurb: "Several brands or marketplaces running the full operating platform.",
    points: [
      "Everything in Single Brand",
      "Business ERP modules (as released)",
      "Multiple seller accounts",
      "Priority onboarding",
    ],
    featured: true,
  },
  {
    name: "Agency / Enterprise",
    blurb: "Agencies and large operators managing many seller accounts.",
    points: [
      "Everything in Multi-Brand",
      "Custom roles & data scopes",
      "Dedicated account contact",
      "Volume-based terms",
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <TopNav />
      <main className="bg-cream-50">
        <div className="container-wide py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow label="Pricing" />
            <h1 className="mt-3 text-section-h1 text-slate-900 lg:text-[44px]">
              Simple, custom pricing.
            </h1>
            <p className="mt-4 text-body-lg text-slate-600">
              SkuFx is priced per quote — there is no fixed list price. Your quote is based on the
              number of brands and Amazon seller accounts you run, the modules you enable, and your
              data volume. We&apos;ll put together a tailored proposal after a short conversation.
            </p>
          </div>

          {/* Illustrative scopes — all custom-quoted */}
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
            {SCENARIOS.map((s) => (
              <div
                key={s.name}
                className={`flex flex-col rounded-2xl border bg-white p-7 ${
                  s.featured
                    ? "border-amber-300 shadow-lg shadow-amber-500/10"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                <h3 className="text-card-h3 text-slate-900">{s.name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{s.blurb}</p>
                <p className="mt-5 font-mono text-[22px] font-extrabold text-slate-900">
                  Custom quote
                </p>
                <ul className="mt-5 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#request-access"
                  className={`mt-7 inline-flex h-11 items-center justify-center rounded-lg px-5 text-[14px] font-semibold transition-colors ${
                    s.featured
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "border border-slate-200 bg-white text-slate-900 hover:border-amber-400"
                  }`}
                >
                  Get a quote
                </Link>
              </div>
            ))}
          </div>

          {/* Closing CTA */}
          <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-card-h3 text-slate-900">Not sure which scope fits?</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
              Tell us about your catalog and we&apos;ll recommend the right setup and pricing.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/#request-access"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-6 text-[15px] font-semibold text-white hover:bg-slate-800"
              >
                Get a quote
              </Link>
              <a
                href={`mailto:${COMPANY.emails.support}?subject=SkuFx pricing inquiry`}
                className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-[15px] font-semibold text-slate-900 hover:border-slate-300"
              >
                Email sales
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
