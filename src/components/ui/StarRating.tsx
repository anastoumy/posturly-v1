import { StarIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

export function StarRating({
  rating,
  reviewCount,
  className,
  showCount = true,
}: {
  rating: number;
  reviewCount?: number;
  className?: string;
  showCount?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5 text-[var(--color-mint-dark)]">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < Math.round(rating)} />
        ))}
      </div>
      {showCount && reviewCount !== undefined && (
        <span className="text-xs text-[var(--color-ink-muted)]">
          {rating.toFixed(1)} ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
}
