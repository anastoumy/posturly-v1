import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-mint-pale)] py-[var(--section-padding)]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-mint)]/30 spin-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-mint)]/40"
      />

      <Reveal className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-serif text-display leading-tight text-[var(--color-ink)]">
          Your posture won&apos;t fix itself.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-[var(--color-ink-muted)]">
          Join 40,000+ people who decided today was the day. Free shipping,
          30-day guarantee, zero risk.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="/products" size="lg">
            Shop the collection
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
