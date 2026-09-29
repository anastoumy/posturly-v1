import { formatMoney } from "@/lib/format";
import { cn } from "@/lib/cn";

export function PriceDisplay({
  price,
  compareAtPrice,
  size = "md",
  className,
}: {
  price: number;
  compareAtPrice?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const onSale = !!compareAtPrice && compareAtPrice > price;
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-2xl",
  }[size];

  return (
    <span className={cn("inline-flex items-baseline gap-2", className)}>
      <span className={cn("font-medium", onSale ? "text-[var(--color-mint-dark)]" : "text-[var(--color-ink)]", sizeClasses)}>
        {formatMoney(price)}
      </span>
      {onSale && (
        <span className="text-[var(--color-ink-soft)] line-through text-sm">
          {formatMoney(compareAtPrice!)}
        </span>
      )}
    </span>
  );
}
