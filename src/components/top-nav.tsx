// src/components/top-nav.tsx
import Link from "next/link";
import Image from "next/image";

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-cream-50/80 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="SkuFx" width={120} height={32} className="h-8 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-7 text-[14px] font-medium text-slate-600 md:flex">
          <Link href="/features" className="hover:text-slate-900 transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
          <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
          <Link href="/security" className="hover:text-slate-900 transition-colors">Security</Link>
          <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://app.skufx.com"
            className="hidden text-[14px] font-medium text-slate-600 hover:text-slate-900 sm:block"
          >
            Sign in
          </Link>
          <Link
            href="/#request-access"
            className="rounded-lg bg-slate-900 px-4 py-2 text-[14px] font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            Request access
          </Link>
        </div>
      </div>
    </header>
  );
}
