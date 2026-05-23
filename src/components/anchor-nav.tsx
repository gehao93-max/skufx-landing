// src/components/anchor-nav.tsx
"use client";
import { useEffect, useState } from "react";

const ITEMS = [
  { id: "intelligence", label: "Intelligence" },
  { id: "operations", label: "Operations" },
  { id: "erp", label: "ERP Core" },
];

export function AnchorNav() {
  const [active, setActive] = useState<string>("intelligence");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ITEMS.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="sticky top-16 z-30 border-b border-slate-200 bg-cream-50/85 backdrop-blur-md">
      <div className="container-wide">
        <div className="flex h-12 gap-8 text-[13px] font-semibold">
          {ITEMS.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`relative flex items-center transition-colors ${
                active === it.id ? "text-amber-700" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {it.label}
              {active === it.id && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-amber-500" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
