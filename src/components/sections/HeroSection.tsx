"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { StarRating } from "@/components/ui/StarRating";
import { getProductByHandle } from "@/lib/data/products";

export function HeroSection() {
  const corrector = getProductByHandle("magnetic-posture-corrector")!;
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] pt-8 sm:pt-12">
      {/* ambient background blobs for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[var(--color-mint-pale)] opacity-70 blur-3xl drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 h-[420px] w-[420px] rounded-full bg-[var(--color-mint)]/15 blur-3xl float-slower"
      />

      <div className="relative mx-auto grid max-w-[var(--content-max)] grid-cols-1 items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        <div className="relative z-10 max-w-xl">
          <span className="animate-in inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)]/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint)] pulse-ring" />
            Clinical Luxury, Everyday Ergonomics
          </span>

          <h1 className="animate-in delay-1 mt-6 font-serif text-hero leading-[0.98] tracking-tight text-[var(--color-ink)]">
            Stand taller.
            <br />
            <span className="text-[var(--color-mint-dark)]">Feel lighter.</span>
          </h1>

          <p className="animate-in delay-2 mt-6 max-w-md text-lg leading-relaxed text-[var(--color-ink-muted)]">
            Precision-engineered posture correctors, seating support, and recovery
            tools — designed to disappear into your day and fix the way you sit,
            stand, and stretch.
          </p>

          <div className="animate-in delay-3 mt-9 flex flex-wrap items-center gap-4">
            <Button href="/products" size="lg">
              Shop the collection
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <Link
              href="/about"
              className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-ink)] underline decoration-[var(--color-mint)] decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Our Story
            </Link>
          </div>

          <div className="animate-in delay-4 mt-10 flex items-center gap-6 border-t border-[var(--color-border)] pt-6">
            <StarRating rating={4.8} reviewCount={2237} />
            <span className="hidden h-8 w-px bg-[var(--color-border)] sm:block" />
            <p className="hidden font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)] sm:block">
              Trusted by 40,000+ desks worldwide
            </p>
          </div>
        </div>

        {/* 3D interactive hero visual */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <Tilt3D intensity={7} className="w-full max-w-md">
            <div className="relative aspect-[4/5] w-full">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[var(--color-mint-pale)] via-[var(--color-surface)] to-[var(--color-background)] shadow-[0_50px_100px_-30px_rgba(26,26,26,0.35)]" />
              <div className="absolute inset-4 overflow-hidden rounded-[24px]" style={{ transform: "translateZ(20px)" }}>
                <Image
                  src={corrector.featuredImage.src}
                  alt={corrector.featuredImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover"
                />
              </div>

              {/* floating spec card */}
              <div
                className="float-slow absolute -left-8 top-10 hidden w-44 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 p-4 shadow-xl backdrop-blur sm:block"
                style={{ transform: "translateZ(60px)" }}
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                  Adjustable Fit
                </p>
                <p className="mt-1 font-serif text-lg leading-tight">7 sizes, 2 colors</p>
              </div>

              {/* floating rating card */}
              <div
                className="float-slower absolute -right-6 bottom-10 w-40 rounded-2xl border border-[var(--color-border)] bg-[var(--color-charcoal)] p-4 text-[var(--color-background)] shadow-xl"
                style={{ transform: "translateZ(80px)", ["--float-rot" as string]: "-2deg" }}
              >
                <div className="flex items-center gap-1 text-[var(--color-mint)]">
                  <StarRating rating={4.8} showCount={false} />
                </div>
                <p className="mt-1.5 text-xs text-[#c9c6bd]">&ldquo;Nobody noticed I was wearing it&rdquo;</p>
              </div>
            </div>
          </Tilt3D>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="relative z-10 hidden justify-center pb-8 sm:flex">
        <div className="flex flex-col items-center gap-2 text-[var(--color-ink-soft)]">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em]">Scroll</span>
          <span className="h-9 w-px animate-pulse bg-[var(--color-ink-soft)]" />
        </div>
      </div>
    </section>
  );
}
