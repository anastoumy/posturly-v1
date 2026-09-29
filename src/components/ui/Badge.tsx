import { cn } from "@/lib/cn";

type BadgeTone = "mint" | "charcoal" | "error" | "outline";

const toneClasses: Record<BadgeTone, string> = {
  mint: "bg-[var(--color-mint)] text-[var(--color-charcoal)]",
  charcoal: "bg-[var(--color-charcoal)] text-[var(--color-background)]",
  error: "bg-[var(--color-error)] text-white",
  outline:
    "bg-[var(--color-surface)] text-[var(--color-ink-muted)] border border-[var(--color-border-strong)]",
};

export function Badge({
  children,
  tone = "charcoal",
  className,
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] leading-none",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
