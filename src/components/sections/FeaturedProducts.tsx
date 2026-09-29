import Link from "next/link";
import { products } from "@/lib/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-[var(--content-max)] px-5 py-[var(--section-padding)] sm:px-8">
      <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-mint-dark)]">
            The Collection
          </p>
          <h2 className="mt-3 font-serif text-display leading-tight text-[var(--color-ink)]">
            Three problems, solved.
          </h2>
        </div>
        <Link
          href="/products"
          className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-ink)] underline decoration-[var(--color-mint)] decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
        >
          View all products
        </Link>
      </Reveal>

      <div className="mt-14">
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
