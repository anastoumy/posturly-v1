"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({
  items,
  className,
  defaultOpenIndex,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpenIndex?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex ?? null,
  );

  return (
    <div className={cn("divide-y divide-[var(--color-border)]", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full min-h-[44px] cursor-pointer items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[15px] font-medium text-[var(--color-ink)] sm:text-base">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] transition-transform duration-300",
                  isOpen && "rotate-45 bg-[var(--color-mint)] border-[var(--color-mint)]",
                )}
                aria-hidden
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-all duration-400 ease-[var(--ease-out-quart)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="pb-5 pr-10 text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
