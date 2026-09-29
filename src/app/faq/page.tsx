import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Posturley products, shipping, and returns.",
};

const groups = [
  {
    id: "products",
    title: "Products & Fit",
    items: [
      {
        question: "How do I know which product is right for me?",
        answer:
          "If you spend your day at a desk, start with The Corrector for upper-back posture or The Companion for seated comfort. If tension concentrates in your neck, The Decompressor is built specifically for that. Many customers use two together — most commonly The Corrector with The Companion.",
      },
      {
        question: "Are your products unisex?",
        answer:
          "Yes — The Corrector, The Companion, and The Decompressor are all designed with adjustable, unisex sizing systems that fit a broad range of body types.",
      },
      {
        question: "How do I clean my product?",
        answer:
          "The Corrector's neoprene panels can be spot-cleaned with a damp cloth. The Companion's covers unzip for cold, gentle machine washing. The Decompressor's cotton core should be spot-cleaned only — do not submerge.",
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping & Delivery",
    items: [
      {
        question: "How long does shipping take?",
        answer:
          "Orders are processed within 1–2 business days and arrive within 3–7 business days via standard shipping. Shipping is free on all orders over $60.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "We currently ship across the US, Canada, UK, and EU. International delivery times range from 7–14 business days depending on destination.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Yes — you'll receive a tracking link by email as soon as your order ships.",
      },
    ],
  },
  {
    id: "returns",
    title: "Returns & Guarantee",
    items: [
      {
        question: "What's your return policy?",
        answer:
          "Every product comes with a 30-day money-back guarantee. If it's not right for you, return it unused within 30 days of delivery for a full refund — no questions asked.",
      },
      {
        question: "How do I start a return?",
        answer:
          "Email our support team with your order number and we'll send a prepaid return label within one business day.",
      },
    ],
  },
  {
    id: "orders",
    title: "Orders & Payment",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "This storefront is currently a frontend demo, so checkout is not connected to a live payment processor. In production, Posturley would support major credit cards and popular digital wallets via Shopify's hosted checkout.",
      },
      {
        question: "Can I change or cancel my order after placing it?",
        answer:
          "Reach out within 2 hours of placing your order and we'll do our best to adjust it before it enters fulfillment.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-mint-dark)]">
          Support
        </p>
        <h1 className="mt-3 font-serif text-display leading-tight text-[var(--color-ink)]">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
          Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll get back to you
          within one business day.
        </p>
      </Reveal>

      <div className="mt-16 space-y-14">
        {groups.map((group) => (
          <div key={group.id} id={group.id}>
            <Reveal>
              <h2 className="font-serif text-2xl text-[var(--color-ink)]">{group.title}</h2>
            </Reveal>
            <div className="mt-4">
              <Accordion items={group.items} />
            </div>
          </div>
        ))}
      </div>

      <Reveal className="mt-20 rounded-2xl border border-[var(--color-border)] bg-[var(--color-mint-pale)] p-8 text-center">
        <h3 className="font-serif text-xl text-[var(--color-ink)]">Still have questions?</h3>
        <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
          Our support team typically replies within a few hours.
        </p>
        <div className="mt-5 flex justify-center">
          <Button href="/products" variant="outline">
            Browse products instead
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
