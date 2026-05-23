// src/components/trust-bar.tsx
import { Building2, Calendar, Layers, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/lib/content";

const ITEMS = [
  { icon: Building2, label: `Operated by ${COMPANY.name}` },
  { icon: Calendar, label: `${COMPANY.yearsOnAmazon} years on Amazon US` },
  { icon: Layers, label: `${COMPANY.modules} integrated modules` },
  { icon: ShieldCheck, label: "SP-API Integration — Pending Approval" },
];

export function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-6">
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[13px] font-medium text-slate-600 lg:grid-cols-4 lg:gap-6">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 flex-shrink-0 text-amber-600" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
