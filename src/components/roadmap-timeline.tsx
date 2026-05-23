// src/components/roadmap-timeline.tsx
import { Check, Clock } from "lucide-react";
import { ROADMAP_PHASES } from "@/lib/content";
import { SectionEyebrow } from "./section-eyebrow";

export function RoadmapTimeline() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow label="Product Roadmap" />
          <h2 className="mt-3 text-section-h1 text-slate-900">From now through 2027.</h2>
          <p className="mt-4 text-body-lg text-slate-600">
            Public roadmap, updated quarterly. SP-API role rollout tied to the same schedule.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ROADMAP_PHASES.map((phase) => {
            const isNow = phase.quarter === "Now";
            return (
              <div
                key={phase.quarter}
                className={`relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                  isNow
                    ? "border-amber-300 bg-amber-50 shadow-lg shadow-amber-500/10 hover:shadow-xl hover:shadow-amber-500/25"
                    : "border-slate-200 bg-cream-50 hover:border-slate-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[13px] font-bold text-slate-900">{phase.quarter}</span>
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    isNow
                      ? "animate-pulse-soft bg-amber-500 text-slate-900"
                      : "bg-slate-200 text-slate-700"
                  }`}>
                    {isNow ? <Check className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                    {phase.label}
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5 text-[13px] leading-snug text-slate-700">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
