import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductByHandle, getRelatedProducts, products } from "@/lib/data/products";
import { ProductExperience } from "@/components/product/ProductExperience";
import { ProductInfoTabs } from "@/components/product/ProductInfoTabs";
import { ReviewsSection } from "@/components/product/ReviewsSection";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) return {};
  return {
    title: product.title,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) notFound();

  const related = getRelatedProducts(handle);

  return (
    <div className="mx-auto max-w-[var(--content-max)] px-5 py-12 sm:px-8 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
        <Link href="/products" className="hover:text-[var(--color-ink)]">
          Shop
        </Link>{" "}
        / {product.categoryLabel}
      </nav>

      <ProductExperience product={product} />

      <div className="mt-20 border-t border-[var(--color-border)] pt-4">
        <ProductInfoTabs product={product} />
      </div>

      <div className="mt-16 border-t border-[var(--color-border)] pt-16">
        <ReviewsSection product={product} />
      </div>

      <div className="mt-16 border-t border-[var(--color-border)] pt-16">
        <Reveal>
          <h2 className="font-serif text-2xl text-[var(--color-ink)]">Frequently Asked Questions</h2>
        </Reveal>
        <div className="mt-6 max-w-2xl">
          <Accordion items={product.faqs} defaultOpenIndex={0} />
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20 border-t border-[var(--color-border)] pt-16">
          <Reveal>
            <h2 className="font-serif text-2xl text-[var(--color-ink)]">You might also like</h2>
          </Reveal>
          <div className="mt-8">
            <ProductGrid products={related} />
          </div>
        </div>
      )}
    </div>
  );
}
