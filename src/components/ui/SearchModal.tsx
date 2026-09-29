"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { products } from "@/lib/data/products";
import { PriceDisplay } from "@/components/product/PriceDisplay";
import { CloseIcon, SearchIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [prevOpen, setPrevOpen] = useState(open);

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (!open) setQuery("");
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q)),
    );
  }, [query]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[95] flex items-start justify-center px-4 pt-24",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-[var(--color-charcoal)]/50 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        className={cn(
          "relative w-full max-w-xl overflow-hidden rounded-2xl bg-[var(--color-surface)] shadow-2xl transition-all duration-300",
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
        )}
      >
        <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-5 py-4">
          <SearchIcon className="text-[var(--color-ink-soft)]" />
          <input
            autoFocus={open}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, e.g. posture, cushion, neck..."
            className="flex-1 bg-transparent text-[15px] outline-none placeholder:text-[var(--color-ink-soft)]"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="flex min-h-[36px] min-w-[36px] cursor-pointer items-center justify-center rounded-full hover:bg-[var(--color-mint-pale)]"
          >
            <CloseIcon width={16} height={16} />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="px-4 py-10 text-center text-sm text-[var(--color-ink-muted)]">
              No products found for &ldquo;{query}&rdquo;.
            </p>
          ) : (
            results.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.handle}`}
                onClick={onClose}
                className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-[var(--color-mint-pale)]"
              >
                <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-lg bg-[var(--color-background)]">
                  <Image
                    src={product.featuredImage.src}
                    alt={product.featuredImage.alt}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-serif text-lg leading-tight">{product.title}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                    {product.categoryLabel}
                  </p>
                </div>
                <PriceDisplay price={product.price} compareAtPrice={product.compareAtPrice} size="sm" />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
