"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { formatMoney } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MinusIcon, PlusIcon, TrashIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

export function CartDrawer() {
  const { lines, isOpen, closeCart, updateQuantity, removeItem, subtotal, itemCount } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCart]);

  return (
    <div
      className={cn("fixed inset-0 z-[110]", isOpen ? "pointer-events-auto" : "pointer-events-none")}
      aria-hidden={!isOpen}
    >
      <div
        onClick={closeCart}
        className={cn(
          "absolute inset-0 bg-[var(--color-charcoal)]/45 backdrop-blur-[2px] transition-opacity duration-400",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[var(--color-background)] shadow-2xl transition-transform duration-450 ease-[var(--ease-out-quart)]",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-5">
          <h2 className="font-serif text-2xl">
            Your Bag <span className="text-[var(--color-ink-soft)] text-base">({itemCount})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full hover:bg-[var(--color-mint-pale)]"
          >
            <CloseIcon />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <p className="font-serif text-xl text-[var(--color-ink-muted)]">Your bag is empty</p>
            <p className="text-sm text-[var(--color-ink-soft)]">
              Explore the collection and find your posture fix.
            </p>
            <Button href="/products" onClick={closeCart} size="sm" className="mt-2">
              Browse products
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto divide-y divide-[var(--color-border)] px-6">
              {lines.map((line) => (
                <li key={line.lineId} className="flex gap-4 py-5">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                    <Image src={line.image.src} alt={line.image.alt} fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        href={`/products/${line.handle}`}
                        onClick={closeCart}
                        className="font-serif text-base leading-tight hover:text-[var(--color-mint-dark)]"
                      >
                        {line.title}
                      </Link>
                      <p className="mt-0.5 text-xs text-[var(--color-ink-muted)]">{line.variantTitle}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-[var(--color-border-strong)]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(line.lineId, line.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-[var(--color-mint-pale)]"
                        >
                          <MinusIcon width={14} height={14} />
                        </button>
                        <span className="min-w-[1.2rem] text-center text-sm font-medium">{line.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(line.lineId, line.quantity + 1)}
                          aria-label="Increase quantity"
                          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-[var(--color-mint-pale)]"
                        >
                          <PlusIcon width={14} height={14} />
                        </button>
                      </div>
                      <span className="font-medium">{formatMoney(line.price * line.quantity)}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(line.lineId)}
                    aria-label={`Remove ${line.title} from bag`}
                    className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center self-start rounded-full text-[var(--color-ink-soft)] hover:bg-[var(--color-error)]/10 hover:text-[var(--color-error)]"
                  >
                    <TrashIcon width={15} height={15} />
                  </button>
                </li>
              ))}
            </ul>

            <div className="border-t border-[var(--color-border)] px-6 py-6">
              <div className="mb-1 flex items-center justify-between text-sm text-[var(--color-ink-muted)]">
                <span>Shipping</span>
                <span>{subtotal >= 60 ? "Free" : "Calculated at checkout"}</span>
              </div>
              <div className="mb-5 flex items-center justify-between font-serif text-xl">
                <span>Subtotal</span>
                <span>{formatMoney(subtotal)}</span>
              </div>
              <Button size="lg" className="w-full">
                Checkout &middot; {formatMoney(subtotal)}
              </Button>
              <p className="mt-3 text-center text-[11px] text-[var(--color-ink-soft)]">
                This is a frontend demo — checkout is not connected to a live payment processor.
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
