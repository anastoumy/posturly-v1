"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import { categories } from "@/lib/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { cn } from "@/lib/cn";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export function ProductListing({
  products,
  initialCategory = "all",
}: {
  products: Product[];
  initialCategory?: string;
}) {
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list =
      category === "all" ? products : products.filter((p) => p.category === category);
    list = [...list];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [products, category, sort]);

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => setCategory(c.value)}
              className={cn(
                "min-h-[40px] cursor-pointer rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors",
                category === c.value
                  ? "border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-background)]"
                  : "border-[var(--color-border-strong)] text-[var(--color-ink-muted)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-[var(--color-ink-muted)]">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="min-h-[40px] cursor-pointer rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-ink)] outline-none"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-6 text-sm text-[var(--color-ink-soft)]">
        {filtered.length} product{filtered.length !== 1 ? "s" : ""}
      </p>

      <div className="mt-6">
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
