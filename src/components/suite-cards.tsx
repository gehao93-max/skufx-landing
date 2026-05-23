// src/components/suite-cards.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SUITES } from "@/lib/content";
import { SectionEyebrow } from "./section-eyebrow";

const BADGE_STYLE = {
  amber: "bg-amber-100 text-amber-800 border-amber-200",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
  emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
};

export function SuiteCards() {
  return (
    <section className="bg-cream-50 py-20 lg:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow label="The Platform" />
          <h2 className="mt-3 text-section-h1 text-slate-900">Three suites. One operating system.</h2>
          <p className="mt-4 text-body-lg text-slate-600">
            SkuFx replaces five separate tools with one platform that grows from product research to full ERP.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {SUITES.map((suite) => (
            <div
              key={suite.id}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-100 text-amber-700">
                  <suite.icon className="h-6 w-6" />
                </div>
                <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${BADGE_STYLE[suite.badgeColor]}`}>
                  {suite.badge}
                </span>
              </div>

              <h3 className="mt-5 text-[22px] font-bold text-slate-900">{suite.name}</h3>
              <p className="mt-1.5 text-[14px] font-medium text-slate-500">{suite.tagline}</p>
              <p className="mt-4 flex-1 text-[14px] leading-[1.65] text-slate-600">{suite.description}</p>

              <Link
                href={`/features#${suite.id}`}
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-slate-900 group-hover:text-amber-700 transition-colors"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
