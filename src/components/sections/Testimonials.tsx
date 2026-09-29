import { products } from "@/lib/data/products";
import { Reveal } from "@/components/ui/Reveal";
import { StarRating } from "@/components/ui/StarRating";

const allReviews = products.flatMap((p) =>
  p.reviews.map((r) => ({ ...r, product: p.title })),
);

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[var(--content-max)] px-5 py-[var(--section-padding)] sm:px-8">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-mint-dark)]">
          Social Proof
        </p>
        <h2 className="mt-3 font-serif text-display leading-tight text-[var(--color-ink)]">
          Loved by desks everywhere.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allReviews.slice(0, 6).map((review, i) => (
          <Reveal
            key={`${review.author}-${review.product}`}
            delay={(i % 3) * 90}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <StarRating rating={review.rating} showCount={false} />
            <p className="font-serif text-lg leading-snug text-[var(--color-ink)]">
              &ldquo;{review.title}&rdquo;
            </p>
            <p className="flex-1 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              {review.body}
            </p>
            <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-4">
              <div>
                <p className="text-sm font-medium">{review.author}</p>
                <p className="text-xs text-[var(--color-ink-soft)]">{review.location}</p>
              </div>
              <p className="max-w-[40%] text-right font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-mint-dark)]">
                {review.product.split(" — ")[0]}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
