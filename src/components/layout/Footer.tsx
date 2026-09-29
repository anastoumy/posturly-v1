import Link from "next/link";
import { ShieldCheckIcon, TruckIcon, LeafIcon } from "@/components/ui/Icons";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

const shopLinks = [
  { href: "/products", label: "All Products" },
  { href: "/products?category=correctors", label: "Posture Correctors" },
  { href: "/products?category=seating", label: "Seating Support" },
  { href: "/products?category=recovery", label: "Recovery & Traction" },
];

const companyLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/faq", label: "FAQ" },
  { href: "/faq#shipping", label: "Shipping & Returns" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-charcoal)] text-[#e9e6de]">
      <div className="mx-auto max-w-[var(--content-max)] px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:gap-16">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-serif text-3xl">Posturley</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#a8a49b]">
              Clinical precision, everyday comfort. Ergonomic essentials engineered to fix
              how you sit, stand, and stretch.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7d7a72]">Shop</p>
            <ul className="mt-4 space-y-3">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#c9c6bd] transition-colors hover:text-[var(--color-mint)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7d7a72]">Company</p>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#c9c6bd] transition-colors hover:text-[var(--color-mint)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7d7a72]">Stay Aligned</p>
            <p className="mt-4 text-sm text-[#c9c6bd]">
              Posture tips and early access to new drops. No spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 border-y border-[#3a3d38] py-8 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <TruckIcon className="text-[var(--color-mint)]" />
            <span className="text-sm text-[#c9c6bd]">Free shipping over $60</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheckIcon className="text-[var(--color-mint)]" />
            <span className="text-sm text-[#c9c6bd]">30-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-3">
            <LeafIcon className="text-[var(--color-mint)]" />
            <span className="text-sm text-[#c9c6bd]">Designed for everyday ergonomics</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-[11px] text-[#7d7a72]">
            © {new Date().getFullYear()} Posturley. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#7d7a72]">
            Frontend demo build &middot; hardcoded catalog
          </p>
        </div>
      </div>
    </footer>
  );
}
