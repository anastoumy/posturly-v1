"use client";

import { MinusIcon, PlusIcon } from "@/components/ui/Icons";

export function QuantityStepper({
  quantity,
  onChange,
  max = 10,
}: {
  quantity: number;
  onChange: (quantity: number) => void;
  max?: number;
}) {
  return (
    <div className="flex items-center rounded-full border border-[var(--color-border-strong)]">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        aria-label="Decrease quantity"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full hover:bg-[var(--color-mint-pale)]"
      >
        <MinusIcon width={15} height={15} />
      </button>
      <span className="min-w-[2rem] text-center text-sm font-medium" aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        aria-label="Increase quantity"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full hover:bg-[var(--color-mint-pale)]"
      >
        <PlusIcon width={15} height={15} />
      </button>
    </div>
  );
}
