import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/ui/Reveal";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[var(--color-border-strong)] py-24 text-center">
        <p className="text-[var(--color-ink-muted)]">No products match this filter yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, i) => (
        <Reveal key={product.id} delay={(i % 3) * 90}>
          <ProductCard product={product} priority={i < 3} />
        </Reveal>
      ))}
    </div>
  );
}
