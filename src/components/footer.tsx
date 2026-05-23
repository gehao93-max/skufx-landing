// src/components/footer.tsx
import Link from "next/link";
import { COMPANY } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-cream-100">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 font-semibold text-slate-900">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 text-sm font-extrabold text-slate-900">
                Fx
              </span>
              <span>SkuFx</span>
            </div>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-slate-600">
              The Amazon Operator&apos;s Platform — from keyword research to ERP, for brand owners who build at scale.
            </p>
            <p className="mt-4 text-[12px] text-slate-500">
              {COMPANY.name}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Product</p>
            <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
              <li><Link href="/features" className="hover:text-amber-700">Features</Link></li>
              <li><Link href="/security" className="hover:text-amber-700">Security</Link></li>
              <li><Link href="https://app.skufx.com" className="hover:text-amber-700">Sign in</Link></li>
              <li><Link href="/#request-access" className="hover:text-amber-700">Request Access</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Company</p>
            <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
              <li><Link href="/about" className="hover:text-amber-700">About</Link></li>
              <li><Link href="/contact" className="hover:text-amber-700">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Legal</p>
            <ul className="mt-3 space-y-2 text-[14px] text-slate-700">
              <li><Link href="/privacy" className="hover:text-amber-700">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-amber-700">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-amber-700">Cookie Policy</Link></li>
              <li><Link href="/dpa" className="hover:text-amber-700">DPA</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 text-[12px] text-slate-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a href={`mailto:${COMPANY.emails.support}`} className="hover:text-amber-700">{COMPANY.emails.support}</a>
            <a href={`mailto:${COMPANY.emails.privacy}`} className="hover:text-amber-700">{COMPANY.emails.privacy}</a>
            <a href={`mailto:${COMPANY.emails.security}`} className="hover:text-amber-700">{COMPANY.emails.security}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
