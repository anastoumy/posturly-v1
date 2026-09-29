"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/lib/types";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

export function ProductGallery({
  images,
  title,
  activeIndex,
  onActiveIndexChange,
}: {
  images: ProductImage[];
  title: string;
  /** optional controlled index (e.g. synced with a color variant) */
  activeIndex?: number;
  onActiveIndexChange?: (index: number) => void;
}) {
  const [internalActive, setInternalActive] = useState(0);
  const active = activeIndex ?? internalActive;
  const image = images[active] ?? images[0];

  const goTo = (index: number) => {
    const next = ((index % images.length) + images.length) % images.length;
    if (onActiveIndexChange) onActiveIndexChange(next);
    else setInternalActive(next);
  };

  return (
    <div className="lg:sticky lg:top-24">
      <Tilt3D intensity={5} className="relative">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_30px_70px_-25px_rgba(26,26,26,0.25)]">
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
            style={{ animation: "fadeIn 0.4s ease" }}
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex min-h-[44px] min-w-[44px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[var(--color-surface)]/90 text-[var(--color-ink)] shadow-md transition-transform hover:scale-105"
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex min-h-[44px] min-w-[44px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[var(--color-surface)]/90 text-[var(--color-ink)] shadow-md transition-transform hover:scale-105"
              >
                <ChevronRightIcon />
              </button>
            </>
          )}

          <span className="absolute bottom-3 right-3 rounded-full bg-[var(--color-charcoal)]/70 px-2.5 py-1 font-mono text-[10px] text-white">
            {active + 1} / {images.length}
          </span>
        </div>
      </Tilt3D>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`View image ${i + 1} of ${title}`}
            aria-current={active === i}
            className={cn(
              "relative h-20 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-all",
              active === i
                ? "border-[var(--color-mint)]"
                : "border-transparent opacity-70 hover:opacity-100",
            )}
          >
            <Image src={img.src} alt={img.alt} fill sizes="64px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
