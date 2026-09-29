"use client";

import type { ProductOption } from "@/lib/types";
import { cn } from "@/lib/cn";

export function VariantSelector({
  options,
  selectedOptions,
  onChange,
  isValueAvailable,
}: {
  options: ProductOption[];
  selectedOptions: Record<string, string>;
  onChange: (optionName: string, value: string) => void;
  isValueAvailable: (optionName: string, value: string) => boolean;
}) {
  return (
    <div className="space-y-6">
      {options.map((option) => {
        const selectedValue = selectedOptions[option.name];
        const selectedLabel = option.values.find((v) => v.value === selectedValue)?.label;

        return (
          <div key={option.id}>
            <div className="mb-3 flex items-baseline justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink-muted)]">
                {option.name}
              </p>
              {selectedLabel && (
                <p className="text-sm text-[var(--color-ink-soft)]">{selectedLabel}</p>
              )}
            </div>

            {option.type === "color" ? (
              <div className="flex flex-wrap gap-3">
                {option.values.map((value) => {
                  const available = isValueAvailable(option.name, value.value);
                  const selected = selectedValue === value.value;
                  return (
                    <button
                      key={value.value}
                      type="button"
                      disabled={!available}
                      onClick={() => onChange(option.name, value.value)}
                      title={value.label}
                      aria-label={value.label}
                      aria-pressed={selected}
                      className={cn(
                        "relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 transition-all disabled:cursor-not-allowed disabled:opacity-35",
                        selected ? "border-[var(--color-mint-dark)] scale-105" : "border-transparent hover:border-[var(--color-border-strong)]",
                      )}
                    >
                      <span
                        className="h-8 w-8 rounded-full border border-black/10"
                        style={{ background: value.swatch ?? "#ccc" }}
                      />
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2.5">
                {option.values.map((value) => {
                  const available = isValueAvailable(option.name, value.value);
                  const selected = selectedValue === value.value;
                  return (
                    <button
                      key={value.value}
                      type="button"
                      disabled={!available}
                      onClick={() => onChange(option.name, value.value)}
                      aria-pressed={selected}
                      className={cn(
                        "min-h-[44px] cursor-pointer rounded-full border px-5 text-sm font-medium transition-all disabled:cursor-not-allowed disabled:text-[var(--color-ink-soft)] disabled:line-through disabled:opacity-50",
                        selected
                          ? "border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-background)]"
                          : "border-[var(--color-border-strong)] text-[var(--color-ink)] hover:border-[var(--color-ink)]",
                      )}
                    >
                      {value.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
