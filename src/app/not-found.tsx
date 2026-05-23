// src/app/not-found.tsx
import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <TopNav />
      <main className="bg-cream-50">
        <div className="container-narrow py-32 text-center">
          <p className="font-mono text-[14px] font-bold text-amber-600">404</p>
          <h1 className="mt-4 text-section-h1 text-slate-900">Page not found.</h1>
          <p className="mt-4 text-body-lg text-slate-600">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <Link
            href="/"
            className="mt-8 inline-flex h-11 items-center rounded-lg bg-slate-900 px-6 text-[15px] font-semibold text-white hover:bg-slate-800"
          >
            ← Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
