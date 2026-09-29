import type { Product } from "@/lib/types";
import { StarRating } from "@/components/ui/StarRating";
import { Reveal } from "@/components/ui/Reveal";

export function ReviewsSection({ product }: { product: Product }) {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl text-[var(--color-ink)]">Customer Reviews</h2>
          <div className="mt-2">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {product.reviews.map((review, i) => (
          <Reveal
            key={review.author}
            delay={i * 80}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <StarRating rating={review.rating} showCount={false} />
            <p className="mt-3 font-serif text-lg leading-snug">{review.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              {review.body}
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border)] pt-3">
              <p className="text-sm font-medium">{review.author}</p>
              <p className="text-xs text-[var(--color-ink-soft)]">{review.location}</p>
            </div>
            {review.verified && (
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-mint-dark)]">
                Verified purchase
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
