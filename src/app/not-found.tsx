import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-mint-pale)] blur-3xl float-slower"
      />
      <div className="relative">
        <p className="animate-in font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-mint-dark)]">
          Error 404
        </p>
        <h1 className="animate-in delay-1 mt-4 font-serif text-[clamp(4rem,14vw,9rem)] leading-none text-[var(--color-ink)]">
          Off-Posture
        </h1>
        <p className="animate-in delay-2 mx-auto mt-4 max-w-md text-lg text-[var(--color-ink-muted)]">
          This page slouched out of existence. Let&apos;s get you back to something
          upright.
        </p>
        <div className="animate-in delay-3 mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/" size="lg">
            Back home
          </Button>
          <Button href="/products" variant="outline" size="lg">
            Shop products
          </Button>
        </div>
      </div>
    </div>
  );
}
