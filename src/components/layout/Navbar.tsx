"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { CartIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/ui/Icons";
import { SearchModal } from "@/components/ui/SearchModal";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/products", label: "Shop" },
  { href: "/about", label: "Our Story" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-[var(--color-mint)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--color-charcoal)]"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-[var(--color-border)] bg-[var(--color-background)]/85 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.02)]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[var(--content-max)] items-center justify-between px-5 py-4 sm:px-8">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-[var(--color-ink)] transition-colors hover:bg-[var(--color-mint-pale)] lg:hidden"
          >
            <MenuIcon />
          </button>

          <Link
            href="/"
            className="font-serif text-2xl font-medium tracking-tight text-[var(--color-ink)] sm:text-[26px]"
          >
            Posturley
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
              className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full text-[var(--color-ink)] transition-colors hover:bg-[var(--color-mint-pale)]"
            >
              <SearchIcon />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${itemCount} items`}
              className="relative flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full text-[var(--color-ink)] transition-colors hover:bg-[var(--color-mint-pale)]"
            >
              <CartIcon />
              {itemCount > 0 && (
                <span
                  key={itemCount}
                  className="absolute right-0.5 top-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-[var(--color-mint)] px-1 font-mono text-[10px] leading-none text-[var(--color-charcoal)]"
                  style={{ animation: "toastIn 0.3s var(--ease-spring)" }}
                >
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[90] lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={cn(
            "absolute inset-0 bg-[var(--color-charcoal)]/40 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute left-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-[var(--color-background)] px-6 py-5 shadow-2xl transition-transform duration-400 ease-[var(--ease-out-quart)]",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl">Posturley</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full hover:bg-[var(--color-mint-pale)]"
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-[var(--color-border)] py-4 font-serif text-2xl text-[var(--color-ink)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="mt-auto font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
            Free shipping over $60 &middot; 30-day returns
          </p>
        </div>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
