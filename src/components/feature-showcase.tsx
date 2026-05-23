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
  const imgCol = (
    <div className={align === "image-left" ? "lg:col-start-1" : "lg:col-start-2"}>
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
    <div className={align === "image-left" ? "lg:col-start-2" : "lg:col-start-1"}>
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
