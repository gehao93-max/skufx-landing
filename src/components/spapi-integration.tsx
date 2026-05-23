// src/components/spapi-integration.tsx
import { ShieldCheck } from "lucide-react";
import { SP_API_ROLES } from "@/lib/content";
import { SectionEyebrow } from "./section-eyebrow";

export function SpApiIntegration() {
  return (
    <section className="bg-cream-50 py-20 lg:py-28">
      <div className="container-narrow">
        <div className="rounded-2xl border border-slate-200 bg-slate-900 p-10 lg:p-14">
          <div className="flex flex-col gap-2">
            <SectionEyebrow label="Direct Integration" className="text-amber-400" />
            <h2 className="text-[32px] font-extrabold tracking-tight text-white">
              Powered by Amazon Selling Partner API
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-300">
              SkuFx integrates directly with Amazon SP-API. With your authorized account, we access:
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3.5 md:grid-cols-2">
            {SP_API_ROLES.map((role) => (
              <li key={role.name} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-amber-500/20 text-amber-400">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                <div className="text-[14px] leading-snug">
                  <span className="font-semibold text-white">{role.name}</span>
                  <span className="text-slate-400"> — {role.purpose}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 border-t border-slate-700 pt-6 text-[13px] leading-relaxed text-slate-400">
            Your data stays yours. Revoke access anytime from Seller Central.
          </p>
        </div>
      </div>
    </section>
  );
}
