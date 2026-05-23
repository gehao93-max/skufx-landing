// src/components/feature-showcase.tsx
import Image from "next/image";
import type { FeatureItem } from "@/lib/content";

const STATUS_STYLE = {
  available: "bg-emerald-100 text-emerald-800 border-emerald-200",
  coming: "bg-slate-100 text-slate-600 border-slate-200",
};

interface Props {
  feature: FeatureItem;
  align?: "image-left" | "image-right";
  mockupSize?: { w: number; h: number };
}

export function FeatureShowcase({ feature, align = "image-left", mockupSize = { w: 1280, h: 800 } }: Props) {
  const Icon = feature.icon;
  // Use lg:order to swap visual position on desktop. DOM order stays image→text so mobile
  // shows image-on-top (better UX than text-then-image). lg:col-start- caused sparse
  // grid placement bug: imgCol(col-start=2) advanced the auto-flow cursor past col 2,
  // then textCol(col-start=1) wrapped to row 2 — looked stacked instead of side-by-side.
  const imgCol = (
    <div className={align === "image-right" ? "lg:order-2" : "lg:order-1"}>
      <div className="relative rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-300/20">
        <Image
          src={`/mockups/${feature.mockup}`}
          width={mockupSize.w}
          height={mockupSize.h}
          alt={feature.name}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
  const textCol = (
    <div className={align === "image-right" ? "lg:order-1" : "lg:order-2"}>
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-100 text-amber-700">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <h3 className="text-[26px] font-bold leading-tight text-slate-900">{feature.name}</h3>
        {feature.status === "coming" && (
          <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${STATUS_STYLE.coming}`}>
            Coming {feature.comingQuarter}
          </span>
        )}
      </div>
      <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">{feature.description}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {feature.spApiRoles.map((role) => (
          <span
            key={role}
            className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-mono font-semibold text-slate-700"
          >
            SP-API · {role}
          </span>
        ))}
      </div>
    </div>
  );
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {imgCol}
      {textCol}
    </div>
  );
}
