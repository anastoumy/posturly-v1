import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { Button } from "@/components/ui/Button";
import { AlignIcon, LeafIcon, ShieldCheckIcon } from "@/components/ui/Icons";
import { getProductByHandle } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Why Posturley exists, how we design our products, and the philosophy behind Clinical Luxury.",
};

const values = [
  {
    icon: AlignIcon,
    title: "Function first, always",
    body: "Every product earns its place in the catalog by measurably improving how a body feels — comfort is never sacrificed for aesthetics, and aesthetics are never sacrificed for comfort.",
  },
  {
    icon: LeafIcon,
    title: "Designed to disappear",
    body: "The best ergonomic tool is one you forget you're wearing. We obsess over low-profile silhouettes and breathable materials so support never feels like a burden.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Backed without conditions",
    body: "If a product doesn't earn a place in your routine within 30 days, we take it back. No forms, no fine print.",
  },
];

const timeline = [
  { year: "2022", title: "The frustration", body: "Our founder, a former physical therapist, grew tired of recommending posture correctors that looked clinical and felt worse." },
  { year: "2023", title: "First prototype", body: "Ten prototypes and forty office volunteers later, The Corrector's four-point strap system was born." },
  { year: "2024", title: "40,000 desks", body: "Word of mouth (and a lot of ergonomic anxiety) grew Posturley into a household name for anyone who sits for a living." },
  { year: "2025", title: "The full collection", body: "The Companion cushion set and The Decompressor neck hammock joined the lineup, rounding out a head-to-hip approach to posture." },
];

export default function AboutPage() {
  const hero = getProductByHandle("magnetic-posture-corrector")!;

  return (
    <div>
      <section className="mx-auto max-w-[var(--content-max)] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-mint-dark)]">
              Our Story
            </p>
            <h1 className="mt-4 font-serif text-display leading-[1.05] text-[var(--color-ink)]">
              We build the ergonomics
              <br /> you actually want to use.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-ink-muted)]">
              Posturley began with a simple observation: the products that
              actually corrected posture looked like medical equipment, and the
              products that looked good rarely worked. We set out to close that
              gap — engineering for both.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <Tilt3D intensity={6} className="mx-auto max-w-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[var(--color-border)] shadow-2xl">
                <Image
                  src={hero.images[2].src}
                  alt={hero.images[2].alt}
                  fill
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover"
                />
              </div>
            </Tilt3D>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-[var(--section-padding)]">
        <div className="mx-auto max-w-[var(--content-max)] px-5 sm:px-8">
          <Reveal className="max-w-lg">
            <h2 className="font-serif text-display leading-tight text-[var(--color-ink)]">
              What we believe
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-mint-pale)] text-[var(--color-mint-dark)]">
                  <v.icon />
                </span>
                <h3 className="mt-4 font-serif text-xl text-[var(--color-ink)]">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--content-max)] px-5 py-[var(--section-padding)] sm:px-8">
        <Reveal className="max-w-lg">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-mint-dark)]">
            Timeline
          </p>
          <h2 className="mt-3 font-serif text-display leading-tight text-[var(--color-ink)]">
            From one frustrated therapist to 40,000 desks.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-0 border-l border-[var(--color-border-strong)]">
          {timeline.map((item, i) => (
            <Reveal
              key={item.year}
              delay={i * 90}
              className="relative pb-10 pl-8 last:pb-0"
            >
              <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-mint)] bg-[var(--color-background)]" />
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--color-mint-dark)]">
                {item.year}
              </p>
              <h3 className="mt-1 font-serif text-xl text-[var(--color-ink)]">{item.title}</h3>
              <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-mint-pale)] py-[var(--section-padding)]">
        <Reveal className="mx-auto max-w-xl px-6 text-center">
          <h2 className="font-serif text-display leading-tight text-[var(--color-ink)]">
            Ready to sit — and stand — better?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/products" size="lg">
              Shop the collection
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
