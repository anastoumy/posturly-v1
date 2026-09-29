"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/product/PriceDisplay";
import { StarRating } from "@/components/ui/StarRating";
import { discountPercent } from "@/lib/format";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const secondImage = product.images[1] ?? product.featuredImage;
  const onSale = !!product.compareAtPrice && product.compareAtPrice > product.price;
  const pct = onSale ? discountPercent(product.compareAtPrice!, product.price) : 0;

  return (
    <Link
      href={`/products/${product.handle}`}
      className="product-card group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
        <Image
          src={product.featuredImage.src}
          alt={product.featuredImage.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}
        />
        <Image
          src={secondImage.src}
          alt={secondImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
        />

        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.badge && <Badge tone="charcoal">{product.badge}</Badge>}
          {onSale && <Badge tone="mint">-{pct}%</Badge>}
        </div>

        <span
          className={`absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-charcoal)] shadow-lg transition-all duration-300 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          aria-hidden
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <div className="mt-4 space-y-1.5">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
          {product.categoryLabel}
        </p>
        <h3 className="font-serif text-xl leading-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-mint-dark)]">
          {product.title}
        </h3>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        <PriceDisplay price={product.price} compareAtPrice={product.compareAtPrice} />
      </div>
    </Link>
  );
}
