// src/components/section-eyebrow.tsx
export function SectionEyebrow({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <p className={`text-[11px] font-bold uppercase tracking-[0.08em] text-amber-700 ${className}`}>
      {label}
    </p>
  );
}
