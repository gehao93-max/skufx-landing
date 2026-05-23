// src/components/security-section.tsx
import Link from "next/link";
import { Lock, ShieldCheck, KeyRound, AlertCircle, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "./section-eyebrow";

const PILLARS = [
  { icon: Lock, title: "AES-256 at Rest", note: "All seller data encrypted on-disk." },
  { icon: ShieldCheck, title: "TLS 1.3 in Transit", note: "Modern ciphers, no legacy fallback." },
  { icon: KeyRound, title: "MFA for All Internal Accounts", note: "TOTP enforced; no password-only access." },
  { icon: AlertCircle, title: "24-Hour Breach Notification", note: "Committed under Amazon DPP." },
];

export function SecuritySection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow label="Security" />
          <h2 className="mt-3 text-section-h1 text-slate-900">Built to Amazon&apos;s Data Protection Policy.</h2>
          <p className="mt-4 text-body-lg text-slate-600">
            SkuFx meets every requirement of the SP-API Data Protection Policy (DPP), with controls audited annually.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, note }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-cream-50 p-5">
              <Icon className="h-5 w-5 text-amber-600" />
              <p className="mt-3 text-[14px] font-semibold text-slate-900">{title}</p>
              <p className="mt-1 text-[12px] leading-relaxed text-slate-600">{note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/security"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-slate-900 hover:text-amber-700"
          >
            Full security details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
