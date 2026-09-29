"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/cn";

export function ProductInfoTabs({ product }: { product: Product }) {
  const tabs = [
    "Description",
    "Specifications",
    ...(product.sizeGuide ? ["Size Guide"] : []),
    "Shipping & Returns",
  ];
  const [active, setActive] = useState(tabs[0]);

  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-1 border-b border-[var(--color-border)]">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            onClick={() => setActive(tab)}
            aria-selected={active === tab}
            className={cn(
              "min-h-[44px] cursor-pointer border-b-2 px-4 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors",
              active === tab
                ? "border-[var(--color-mint-dark)] text-[var(--color-ink)]"
                : "border-transparent text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="py-8">
        {active === "Description" && (
          <div className="max-w-2xl space-y-4">
            {product.description.map((paragraph, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
                {paragraph}
              </p>
            ))}
            <div className="pt-2">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-ink)]">
                What&apos;s included
              </p>
              <ul className="space-y-1.5">
                {product.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-ink-muted)]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-mint-dark)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {active === "Specifications" && (
          <dl className="max-w-2xl divide-y divide-[var(--color-border)]">
            {product.specs.map((spec) => (
              <div key={spec.label} className="grid grid-cols-2 gap-4 py-3 text-sm">
                <dt className="text-[var(--color-ink-soft)]">{spec.label}</dt>
                <dd className="text-[var(--color-ink)]">{spec.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {active === "Size Guide" && product.sizeGuide && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border-strong)]">
                  {product.sizeGuide.headers.map((h) => (
                    <th
                      key={h}
                      className="whitespace-nowrap py-3 pr-6 text-left font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.sizeGuide.rows.map((row) => (
                  <tr key={row.size} className="border-b border-[var(--color-border)]">
                    {product.sizeGuide!.headers.map((h) => (
                      <td key={h} className="whitespace-nowrap py-3 pr-6 text-[var(--color-ink-muted)]">
                        {row[h]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {active === "Shipping & Returns" && (
          <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
            <p>
              Orders ship within 1–2 business days. Standard delivery arrives in 3–7
              business days; free on all orders over $60.
            </p>
            <p>
              Not the right fit? Return any unused item within 30 days of delivery
              for a full refund — no questions asked.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
