import type { Metadata } from "next";
import { products } from "@/lib/data/products";
import { ProductListing } from "@/components/product/ProductListing";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse Posturley's full collection of posture correctors, seating support, and recovery essentials.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  return (
    <div className="mx-auto max-w-[var(--content-max)] px-5 py-16 sm:px-8 sm:py-20">
      <Reveal className="max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-mint-dark)]">
          The Collection
        </p>
        <h1 className="mt-3 font-serif text-display leading-tight text-[var(--color-ink)]">
          Every desk deserves better posture.
        </h1>
        <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
          Three tools, one goal — helping your body hold the position it was
          built for.
        </p>
      </Reveal>

      <div className="mt-12">
        <ProductListing products={products} initialCategory={category ?? "all"} />
      </div>
    </div>
  );
}
