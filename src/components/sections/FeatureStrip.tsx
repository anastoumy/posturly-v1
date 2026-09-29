import { LeafIcon, ShieldCheckIcon, TruckIcon, TimerIcon } from "@/components/ui/Icons";

const features = [
  { icon: TruckIcon, title: "Free shipping", desc: "On every order over $60" },
  { icon: ShieldCheckIcon, title: "30-day guarantee", desc: "Try it risk-free, full refund" },
  { icon: TimerIcon, title: "5-minute routines", desc: "Built for busy schedules" },
  { icon: LeafIcon, title: "Ergonomics-first", desc: "Designed with physiotherapists" },
];

export function FeatureStrip() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-[var(--content-max)] grid-cols-2 gap-6 px-5 py-10 sm:px-8 lg:grid-cols-4 lg:gap-8">
        {features.map((f) => (
          <div key={f.title} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-mint-pale)] text-[var(--color-mint-dark)]">
              <f.icon />
            </span>
            <div>
              <p className="text-sm font-medium leading-tight text-[var(--color-ink)]">{f.title}</p>
              <p className="text-xs leading-tight text-[var(--color-ink-muted)]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
