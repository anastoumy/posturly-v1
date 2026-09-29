"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { ProductGallery } from "@/components/product/ProductGallery";
import { VariantSelector } from "@/components/product/VariantSelector";
import { QuantityStepper } from "@/components/product/QuantityStepper";
import { PriceDisplay } from "@/components/product/PriceDisplay";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { benefitIconMap, ShieldCheckIcon, TruckIcon } from "@/components/ui/Icons";
import { discountPercent } from "@/lib/format";

export function ProductExperience({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();

  const defaultOptions = useMemo(() => {
    const initial: Record<string, string> = {};
    for (const option of product.options) {
      const firstAvailable =
        option.values.find((v) => v.available !== false) ?? option.values[0];
      initial[option.name] = firstAvailable.value;
    }
    return initial;
  }, [product.options]);

  const [selectedOptions, setSelectedOptions] = useState(defaultOptions);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const selectedVariant = useMemo(() => {
    return product.variants.find((v) =>
      Object.entries(selectedOptions).every(([key, value]) => v.selectedOptions[key] === value),
    );
  }, [product.variants, selectedOptions]);

  function isValueAvailable(optionName: string, value: string) {
    return product.variants.some((v) => {
      if (v.selectedOptions[optionName] !== value) return false;
      if (!v.available) return false;
      return Object.entries(selectedOptions).every(
        ([key, val]) => key === optionName || v.selectedOptions[key] === val,
      );
    });
  }

  function handleOptionChange(optionName: string, value: string) {
    const next = { ...selectedOptions, [optionName]: value };
    setSelectedOptions(next);

    if (optionName === "Color") {
      const variant = product.variants.find((v) =>
        Object.entries(next).every(([k, val]) => v.selectedOptions[k] === val),
      );
      if (variant?.image) {
        const index = product.images.findIndex((img) => img.src === variant.image!.src);
        if (index >= 0) setActiveImageIndex(index);
      }
    }
  }

  function handleAddToCart() {
    if (!selectedVariant) return;
    addItem({
      productId: product.id,
      variantId: selectedVariant.id,
      handle: product.handle,
      title: product.title,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      compareAtPrice: selectedVariant.compareAtPrice,
      image: selectedVariant.image ?? product.featuredImage,
      quantity,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  }

  const price = selectedVariant?.price ?? product.price;
  const compareAtPrice = selectedVariant?.compareAtPrice ?? product.compareAtPrice;
  const onSale = !!compareAtPrice && compareAtPrice > price;
  const pct = onSale ? discountPercent(compareAtPrice!, price) : 0;
  const outOfStock = selectedVariant ? !selectedVariant.available : false;

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
      <ProductGallery
        images={product.images}
        title={product.title}
        activeIndex={activeImageIndex}
        onActiveIndexChange={setActiveImageIndex}
      />

      <div>
        <div className="flex items-center gap-2">
          {product.badge && <Badge tone="charcoal">{product.badge}</Badge>}
          {onSale && <Badge tone="mint">Save {pct}%</Badge>}
        </div>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
          {product.categoryLabel}
        </p>
        <h1 className="mt-2 font-serif text-title leading-[1.05] text-[var(--color-ink)]">
          {product.title}
        </h1>
        <p className="mt-2 text-lg text-[var(--color-ink-muted)]">{product.tagline}</p>

        <div className="mt-4">
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        <div className="mt-5">
          <PriceDisplay price={price} compareAtPrice={compareAtPrice} size="lg" />
        </div>

        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
          {product.shortDescription}
        </p>

        <div className="mt-8">
          <VariantSelector
            options={product.options}
            selectedOptions={selectedOptions}
            onChange={handleOptionChange}
            isValueAvailable={isValueAvailable}
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <QuantityStepper quantity={quantity} onChange={setQuantity} />
          <Button
            size="lg"
            onClick={handleAddToCart}
            disabled={outOfStock}
            className="flex-1 sm:flex-none sm:min-w-[220px]"
          >
            {outOfStock ? "Out of stock" : justAdded ? "Added to Bag" : "Add to Bag"}
          </Button>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-xs text-[var(--color-ink-soft)]">
          <button type="button" onClick={openCart} className="cursor-pointer underline underline-offset-2 hover:text-[var(--color-ink)]">
            View bag
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-mint-pale)]/50 p-5 sm:grid-cols-2">
          <div className="flex items-center gap-2.5">
            <TruckIcon className="shrink-0 text-[var(--color-mint-dark)]" />
            <span className="text-sm text-[var(--color-ink-muted)]">Free shipping over $60</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheckIcon className="shrink-0 text-[var(--color-mint-dark)]" />
            <span className="text-sm text-[var(--color-ink-muted)]">30-day money-back guarantee</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {product.benefits.map((benefit) => {
            const Icon = benefitIconMap[benefit.icon];
            return (
              <div key={benefit.title} className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-mint-pale)] text-[var(--color-mint-dark)]">
                  {Icon && <Icon width={17} height={17} />}
                </span>
                <div>
                  <p className="text-sm font-medium text-[var(--color-ink)]">{benefit.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
