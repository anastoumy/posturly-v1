# Posturley — Product Requirements Document (PRD) & Business Requirements Document (BRD)

**Version:** 1.0  
**Date:** May 2026  
**Prepared by:** Product & Engineering Team  
**Status:** Draft

---

# TABLE OF CONTENTS

1. [Executive Summary](#executive-summary)
2. [Business Requirements Document (BRD)](#brd)
3. [Product Requirements Document (PRD)](#prd)
4. [UI/UX Design Specification (ui-ux-pro-max)](#uiux)
5. [Shopify Integration Architecture](#shopify)
6. [Technical Specification](#tech)
7. [File Structure](#file-structure)
8. [Milestones & Timeline](#milestones)

---

# 1. Executive Summary

**Posturley** is a premium direct-to-consumer (DTC) e-commerce brand selling posture-correction and ergonomic health products. The storefront is a **headless Next.js application** powered by the **Shopify Storefront API**, using **TeemDrop** as the dropshipping fulfillment backend. The UI is designed to the **ui-ux-pro-max** standard — a high-fidelity, luxury-health aesthetic that converts browsers into buyers through motion, editorial typography, and exceptional spatial composition.

---

# 2. Business Requirements Document (BRD)

## 2.1 Business Objectives

| #   | Objective                                           | KPI                                   |
| --- | --------------------------------------------------- | ------------------------------------- |
| 1   | Launch a fully operational dropshipping storefront  | Go-live within 8 weeks                |
| 2   | Drive DTC sales with zero inventory overhead        | Fulfilled 100% via TeemDrop → Shopify |
| 3   | Achieve brand perception of a premium health brand  | Bounce rate < 40%, AOV > $65          |
| 4   | Build an SEO-optimized, high-performance storefront | Lighthouse score > 90                 |
| 5   | Enable scalable product catalog management          | Managed entirely via Shopify Admin    |

## 2.2 Business Context

- **Model:** Dropshipping via TeemDrop (fulfillment) + Shopify (commerce backend) + Next.js (headless frontend)
- **Target Market:** Health-conscious professionals aged 25–45, remote workers, ergonomics buyers
- **Revenue Model:** Product margin on each order after TeemDrop fulfillment cost
- **Competitive Advantage:** Brand identity, UI quality, and content-driven SEO — not product exclusivity

## 2.3 Stakeholders

| Role               | Responsibility                              |
| ------------------ | ------------------------------------------- |
| Business Owner     | Brand direction, product selection, pricing |
| Frontend Developer | Next.js app, Shopify API integration        |
| Shopify Admin      | Product catalog, inventory, orders          |
| TeemDrop Account   | Supplier sourcing, fulfillment setup        |

## 2.4 Business Constraints

- No custom warehousing — TeemDrop handles all fulfillment
- No real payment processing until Shopify store is on a paid plan
- Shopify development store used during build phase; migrated to paid plan at launch
- UI must load in under 2 seconds on 4G connections

## 2.5 Success Criteria

- Customers can browse, add to cart, and complete checkout end-to-end
- Orders automatically sync to Shopify → TeemDrop fulfills without manual intervention
- All product data (title, price, images, variants) driven by Shopify CMS — zero hardcoding
- Storefront scores > 90 on Google PageSpeed Insights

---

# 3. Product Requirements Document (PRD)

## 3.1 Product Overview

Posturley is a **Next.js 14+ App Router** headless storefront. It queries Shopify via the **Storefront GraphQL API** and renders a premium brand experience. The cart and checkout flow redirect to Shopify-hosted checkout. Products, collections, prices, and inventory are managed entirely inside Shopify Admin.

## 3.2 Core Pages & Features

### 3.2.1 Page Map

| Page            | Route                   | Description                                        |
| --------------- | ----------------------- | -------------------------------------------------- |
| Homepage        | `/`                     | Hero, featured products, brand story, social proof |
| Product Listing | `/products`             | Full catalog grid with filters                     |
| Collection Page | `/collections/[handle]` | Category-scoped product grid                       |
| Product Detail  | `/products/[handle]`    | PDP with images, variants, add-to-cart             |
| Cart (Drawer)   | Global overlay          | Slide-in cart with line items, totals              |
| Checkout        | Shopify-hosted          | Redirect to `checkout.shopify.com`                 |
| About           | `/about`                | Brand story, mission, team                         |
| FAQ             | `/faq`                  | Accordion-style answers                            |
| 404             | `/not-found`            | Custom branded error page                          |

### 3.2.2 Functional Requirements

#### FR-01 — Product Catalog

- Display all products from Shopify via Storefront API
- Support collections/categories
- Show product title, price, images, description, and variants
- Display sale prices and "Out of Stock" badges correctly
- Support product image galleries (multiple images per product)

#### FR-02 — Product Variants

- Render size, color, and other variant selectors
- Disable unavailable variant combinations
- Update price and image when variant changes
- Show variant-specific inventory status

#### FR-03 — Cart System

- Global cart state using React Context + `useReducer`
- Add to cart, update quantity, remove line items
- Persist cart to Shopify (create/update cart via Storefront API)
- Show subtotal, quantity badge on cart icon
- Cart drawer slides in from the right

#### FR-04 — Checkout

- "Checkout" button directs to Shopify-hosted checkout URL (`cart.checkoutUrl`)
- Cart ID persisted in `localStorage` to survive page refreshes
- Checkout handles payment, shipping, and order confirmation natively in Shopify

#### FR-05 — Search

- Predictive search using Shopify `predictiveSearch` query
- Debounced input, keyboard navigable results
- Shows product image, title, price in results

#### FR-06 — SEO & Metadata

- Dynamic `<title>` and `<meta description>` per page from Shopify SEO fields
- `og:image` pulled from product featured image
- `sitemap.xml` generated from Shopify products and collections
- Structured data (JSON-LD) for products

#### FR-07 — Performance

- React Server Components for all data-fetching pages
- `next/image` for all Shopify CDN images
- Full-page ISR (Incremental Static Regeneration) with 60s revalidation
- No layout shift (CLS = 0)

---

## 3.3 Non-Functional Requirements

| Category        | Requirement                                                         |
| --------------- | ------------------------------------------------------------------- |
| Performance     | LCP < 2.5s, FID < 100ms, CLS < 0.1                                  |
| Accessibility   | WCAG 2.1 AA compliant                                               |
| Browser Support | Chrome, Safari, Firefox, Edge (latest 2 versions)                   |
| Mobile          | Fully responsive, mobile-first                                      |
| Security        | No API secrets exposed client-side; Storefront token is public-safe |
| Scalability     | ISR + CDN handles traffic spikes without server strain              |

---

# 4. UI/UX Design Specification (ui-ux-pro-max)

## 4.1 Design Philosophy

The Posturley UI follows the **ui-ux-pro-max** standard: every pixel is intentional. The aesthetic direction is **"Clinical Luxury"** — the precision of medical design meets the warmth of a premium wellness brand. Think: Aesop meets ergonomic science.

### 4.2 Aesthetic Direction

- **Theme:** Light base, deep charcoal accents, warm cream tones, surgical mint green as the signature accent
- **Mood:** Clean, confident, trustworthy — not sterile, not flashy
- **Differentiation:** Oversized editorial typography paired with clinical whitespace and precise micro-animations

### 4.3 Typography

```css
/* Display / Hero */
font-family: "Cormorant Garamond", serif; /* elegant, editorial */

/* Body / UI */
font-family: "DM Sans", sans-serif; /* modern, readable */

/* Accent / Labels */
font-family: "Martian Mono", monospace; /* technical precision feel */
```

**Type Scale:**
| Token | Size | Usage |
|-------|------|-------|
| `--text-hero` | 96px / 6rem | Homepage hero headline |
| `--text-display` | 64px / 4rem | Section headlines |
| `--text-title` | 40px / 2.5rem | Product titles, page headers |
| `--text-body` | 16px / 1rem | Body copy |
| `--text-label` | 11px / 0.688rem | Tags, badges, captions |

### 4.4 Color System

```css
:root {
  /* Core Palette */
  --color-background: #f7f5f0; /* warm cream — never pure white */
  --color-surface: #ffffff; /* card surfaces */
  --color-ink: #1a1a1a; /* primary text */
  --color-ink-muted: #6b6b6b; /* secondary text */
  --color-border: #e8e4dd; /* subtle dividers */

  /* Signature Accent */
  --color-mint: #4ecba6; /* CTAs, highlights, badges */
  --color-mint-dark: #38a888; /* hover states */
  --color-mint-pale: #ebf9f4; /* tinted backgrounds */

  /* States */
  --color-error: #e05252;
  --color-success: #4ecba6;
  --color-warning: #f0a033;
}
```

### 4.5 Motion & Animation

All animations use **CSS custom properties** and `@keyframes` for performance. No JS animation libraries in the critical path.

```css
/* Staggered page load reveal */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.delay-1 {
  animation-delay: 0.1s;
}
.delay-2 {
  animation-delay: 0.2s;
}
.delay-3 {
  animation-delay: 0.3s;
}

/* Product card hover lift */
.product-card {
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease;
}
.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

/* CTA button */
.btn-primary {
  transition:
    background 0.2s ease,
    transform 0.15s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
}
.btn-primary:active {
  transform: translateY(0px);
}
```

### 4.6 Spatial Composition Rules

- **Minimum section padding:** `clamp(80px, 10vw, 160px)` top and bottom
- **Max content width:** `1280px`, centered
- **Grid:** 12-column CSS Grid; product grids use `auto-fill, minmax(280px, 1fr)`
- **Card border-radius:** `16px` for product cards, `8px` for UI elements
- **Image ratio:** `4:5` portrait for product images (keeps grid uniform)

### 4.7 Component Inventory

| Component           | Behavior                                                          |
| ------------------- | ----------------------------------------------------------------- |
| `<Navbar>`          | Sticky, blurs background on scroll; cart badge animates on add    |
| `<HeroSection>`     | Full-viewport height, staggered text reveal, scroll indicator     |
| `<ProductCard>`     | Hover lift + image swap on hover (second image), quick-add button |
| `<CartDrawer>`      | Right-side slide-in, backdrop blur, smooth open/close             |
| `<VariantSelector>` | Pill-style buttons; unavailable variants show strikethrough       |
| `<ImageGallery>`    | Thumbnail strip below main image; touch-swipeable on mobile       |
| `<Badge>`           | "Sale", "New", "Out of Stock" — monospace font, mint or charcoal  |
| `<PriceDisplay>`    | Shows sale price in mint, original struck through in muted        |
| `<SearchModal>`     | Full-overlay search with live Shopify predictive results          |
| `<Toast>`           | Slide-in confirmation on add-to-cart, auto-dismisses at 3s        |

---

# 5. Shopify Integration Architecture

## 5.1 Overview

```
Next.js (Frontend)
     │
     ├── lib/shopify/client.ts       ← Core API client
     ├── lib/shopify/queries/        ← All GraphQL queries
     ├── lib/shopify/mutations/      ← Cart mutations
     ├── lib/shopify/types.ts        ← TypeScript interfaces
     └── lib/shopify/helpers.ts      ← Data formatters
     │
     ▼
Shopify Storefront API (GraphQL)
     │
     ▼
Shopify Admin (Products, Orders, Inventory)
     │
     ▼
TeemDrop (Fulfillment)
```

## 5.2 Environment Variables

```bash
# .env.local
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-public-storefront-token
SHOPIFY_API_VERSION=2025-01
```

> ⚠️ The Storefront Access Token is intentionally public-safe — it only grants read access to storefront data and cannot modify admin data. Never expose the Admin API key.

## 5.3 Core API Client — `lib/shopify/client.ts`

```typescript
const domain = process.env.SHOPIFY_STORE_DOMAIN!;
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const apiVersion = process.env.SHOPIFY_API_VERSION ?? "2025-01";

const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

interface ShopifyFetchOptions<V = Record<string, unknown>> {
  query: string;
  variables?: V;
  cache?: RequestCache;
  tags?: string[];
}

export async function shopifyFetch<T, V = Record<string, unknown>>({
  query,
  variables,
  cache = "force-cache",
  tags,
}: ShopifyFetchOptions<V>): Promise<{ status: number; body: T }> {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({ query, variables }),
      cache,
      next: tags ? { tags } : undefined,
    });

    const body = await res.json();

    if (body.errors) {
      console.error("[Shopify API Errors]", body.errors);
      throw new Error(body.errors[0]?.message ?? "Shopify API error");
    }

    return { status: res.status, body: body.data as T };
  } catch (err) {
    console.error("[shopifyFetch] Failed:", err);
    throw err;
  }
}
```

## 5.4 GraphQL Queries — `lib/shopify/queries/`

### products.ts

```typescript
export const PRODUCTS_QUERY = `#graphql
  query GetProducts($first: Int!, $after: String) {
    products(first: $first, after: $after, sortKey: BEST_SELLING) {
      pageInfo { hasNextPage endCursor }
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice { amount currencyCode }
          }
          compareAtPriceRange {
            minVariantPrice { amount currencyCode }
          }
          featuredImage { url altText width height }
          images(first: 5) {
            edges { node { url altText width height } }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                availableForSale
                price { amount currencyCode }
                compareAtPrice { amount currencyCode }
                selectedOptions { name value }
              }
            }
          }
          tags
          seo { title description }
        }
      }
    }
  }
`;

export const PRODUCT_BY_HANDLE_QUERY = `#graphql
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      priceRange {
        minVariantPrice { amount currencyCode }
        maxVariantPrice { amount currencyCode }
      }
      featuredImage { url altText width height }
      images(first: 20) {
        edges { node { url altText width height } }
      }
      options { id name values }
      variants(first: 100) {
        edges {
          node {
            id
            title
            availableForSale
            quantityAvailable
            price { amount currencyCode }
            compareAtPrice { amount currencyCode }
            selectedOptions { name value }
            image { url altText }
          }
        }
      }
      seo { title description }
      tags
    }
  }
`;
```

### collections.ts

```typescript
export const COLLECTIONS_QUERY = `#graphql
  query GetCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          image { url altText }
        }
      }
    }
  }
`;

export const COLLECTION_BY_HANDLE_QUERY = `#graphql
  query GetCollectionByHandle($handle: String!, $first: Int!) {
    collection(handle: $handle) {
      id
      title
      description
      handle
      image { url altText }
      products(first: $first) {
        edges {
          node {
            id title handle
            priceRange { minVariantPrice { amount currencyCode } }
            featuredImage { url altText width height }
            variants(first: 1) {
              edges { node { id availableForSale } }
            }
          }
        }
      }
    }
  }
`;
```

### search.ts

```typescript
export const PREDICTIVE_SEARCH_QUERY = `#graphql
  query PredictiveSearch($query: String!) {
    predictiveSearch(query: $query, types: [PRODUCT, COLLECTION]) {
      products {
        id title handle
        priceRange { minVariantPrice { amount currencyCode } }
        featuredImage { url altText }
      }
      collections {
        id title handle
        image { url altText }
      }
    }
  }
`;
```

## 5.5 Cart Mutations — `lib/shopify/mutations/cart.ts`

```typescript
export const CREATE_CART_MUTATION = `#graphql
  mutation CreateCart($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          subtotalAmount { amount currencyCode }
          totalAmount { amount currencyCode }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id title
                  price { amount currencyCode }
                  product { title handle featuredImage { url altText } }
                  selectedOptions { name value }
                }
              }
              cost {
                totalAmount { amount currencyCode }
              }
            }
          }
        }
      }
      userErrors { field message }
    }
  }
`;

export const ADD_TO_CART_MUTATION = `#graphql
  mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id checkoutUrl totalQuantity
        cost { subtotalAmount { amount currencyCode } }
        lines(first: 100) {
          edges {
            node {
              id quantity
              merchandise {
                ... on ProductVariant {
                  id title
                  price { amount currencyCode }
                  product { title handle featuredImage { url altText } }
                }
              }
            }
          }
        }
      }
      userErrors { field message }
    }
  }
`;

export const UPDATE_CART_MUTATION = `#graphql
  mutation UpdateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id totalQuantity
        cost { subtotalAmount { amount currencyCode } }
        lines(first: 100) {
          edges {
            node { id quantity
              merchandise {
                ... on ProductVariant {
                  id title price { amount currencyCode }
                  product { title featuredImage { url } }
                }
              }
            }
          }
        }
      }
      userErrors { field message }
    }
  }
`;

export const REMOVE_FROM_CART_MUTATION = `#graphql
  mutation RemoveFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id totalQuantity
        cost { subtotalAmount { amount currencyCode } }
        lines(first: 100) {
          edges { node { id quantity } }
        }
      }
      userErrors { field message }
    }
  }
`;
```

## 5.6 TypeScript Types — `lib/shopify/types.ts`

```typescript
export interface Money {
  amount: string;
  currencyCode: string;
}

export interface ShopifyImage {
  url: string;
  altText: string | null;
  width?: number;
  height?: number;
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable?: number;
  price: Money;
  compareAtPrice: Money | null;
  selectedOptions: { name: string; value: string }[];
  image?: ShopifyImage;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml?: string;
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice?: Money;
  };
  compareAtPriceRange?: {
    minVariantPrice: Money;
  };
  featuredImage: ShopifyImage;
  images: { edges: { node: ShopifyImage }[] };
  variants: { edges: { node: ProductVariant }[] };
  options?: { id: string; name: string; values: string[] }[];
  tags: string[];
  seo?: { title: string; description: string };
}

export interface CartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    price: Money;
    selectedOptions: { name: string; value: string }[];
    product: {
      title: string;
      handle: string;
      featuredImage: ShopifyImage;
    };
  };
  cost: { totalAmount: Money };
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
  };
  lines: { edges: { node: CartLine }[] };
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
  description?: string;
  image?: ShopifyImage;
}
```

## 5.7 Helper Functions — `lib/shopify/helpers.ts`

```typescript
import type { Money, Product, Cart, CartLine } from "./types";

/** Format Money object → "$29.99" */
export function formatMoney({ amount, currencyCode }: Money): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}

/** Check if a product has a sale price */
export function isOnSale(product: Product): boolean {
  const compareAt = product.compareAtPriceRange?.minVariantPrice?.amount;
  const current = product.priceRange.minVariantPrice.amount;
  return !!compareAt && parseFloat(compareAt) > parseFloat(current);
}

/** Calculate discount percentage */
export function discountPercent(original: string, sale: string): number {
  const o = parseFloat(original);
  const s = parseFloat(sale);
  return Math.round(((o - s) / o) * 100);
}

/** Flatten cart lines from edges */
export function flattenCartLines(cart: Cart): CartLine[] {
  return cart.lines.edges.map(({ node }) => node);
}

/** Get total item count in cart */
export function cartItemCount(cart: Cart | null): number {
  return cart?.totalQuantity ?? 0;
}

/** Build a variant lookup map from product */
export function buildVariantMap(product: Product) {
  return product.variants.edges.reduce(
    (acc, { node }) => {
      const key = node.selectedOptions
        .map((o) => `${o.name}:${o.value}`)
        .join("|");
      acc[key] = node;
      return acc;
    },
    {} as Record<string, (typeof product.variants.edges)[0]["node"]>,
  );
}
```

## 5.8 Server Actions — `lib/shopify/actions.ts`

```typescript
"use server";

import { shopifyFetch } from "./client";
import {
  CREATE_CART_MUTATION,
  ADD_TO_CART_MUTATION,
  UPDATE_CART_MUTATION,
  REMOVE_FROM_CART_MUTATION,
} from "./mutations/cart";
import type { Cart } from "./types";

export async function createCart(
  variantId: string,
  quantity = 1,
): Promise<Cart> {
  const { body } = await shopifyFetch<{ cartCreate: { cart: Cart } }>({
    query: CREATE_CART_MUTATION,
    variables: { input: { lines: [{ merchandiseId: variantId, quantity }] } },
    cache: "no-store",
  });
  return body.cartCreate.cart;
}

export async function addToCart(
  cartId: string,
  variantId: string,
  quantity = 1,
): Promise<Cart> {
  const { body } = await shopifyFetch<{ cartLinesAdd: { cart: Cart } }>({
    query: ADD_TO_CART_MUTATION,
    variables: { cartId, lines: [{ merchandiseId: variantId, quantity }] },
    cache: "no-store",
  });
  return body.cartLinesAdd.cart;
}

export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number,
): Promise<Cart> {
  const { body } = await shopifyFetch<{ cartLinesUpdate: { cart: Cart } }>({
    query: UPDATE_CART_MUTATION,
    variables: { cartId, lines: [{ id: lineId, quantity }] },
    cache: "no-store",
  });
  return body.cartLinesUpdate.cart;
}

export async function removeFromCart(
  cartId: string,
  lineId: string,
): Promise<Cart> {
  const { body } = await shopifyFetch<{ cartLinesRemove: { cart: Cart } }>({
    query: REMOVE_FROM_CART_MUTATION,
    variables: { cartId, lineIds: [lineId] },
    cache: "no-store",
  });
  return body.cartLinesRemove.cart;
}
```

## 5.9 Data Fetching Functions — `lib/shopify/index.ts`

```typescript
import { shopifyFetch } from "./client";
import { PRODUCTS_QUERY, PRODUCT_BY_HANDLE_QUERY } from "./queries/products";
import {
  COLLECTIONS_QUERY,
  COLLECTION_BY_HANDLE_QUERY,
} from "./queries/collections";
import { PREDICTIVE_SEARCH_QUERY } from "./queries/search";
import type { Product, Collection } from "./types";

export async function getAllProducts(first = 48) {
  const { body } = await shopifyFetch<{
    products: { edges: { node: Product }[] };
  }>({
    query: PRODUCTS_QUERY,
    variables: { first },
    tags: ["products"],
  });
  return body.products.edges.map(({ node }) => node);
}

export async function getProductByHandle(handle: string) {
  const { body } = await shopifyFetch<{ product: Product }>({
    query: PRODUCT_BY_HANDLE_QUERY,
    variables: { handle },
    tags: [`product-${handle}`],
  });
  return body.product;
}

export async function getAllCollections() {
  const { body } = await shopifyFetch<{
    collections: { edges: { node: Collection }[] };
  }>({
    query: COLLECTIONS_QUERY,
    variables: { first: 20 },
    tags: ["collections"],
  });
  return body.collections.edges.map(({ node }) => node);
}

export async function getCollectionByHandle(handle: string, first = 24) {
  const { body } = await shopifyFetch<{
    collection: Collection & { products: { edges: { node: Product }[] } };
  }>({
    query: COLLECTION_BY_HANDLE_QUERY,
    variables: { handle, first },
    tags: [`collection-${handle}`],
  });
  return body.collection;
}

export async function predictiveSearch(query: string) {
  const { body } = await shopifyFetch<{
    predictiveSearch: {
      products: Product[];
      collections: Collection[];
    };
  }>({
    query: PREDICTIVE_SEARCH_QUERY,
    variables: { query },
    cache: "no-store",
  });
  return body.predictiveSearch;
}
```

---

# 6. Technical Specification

## 6.1 Tech Stack

| Layer            | Technology                                               |
| ---------------- | -------------------------------------------------------- |
| Framework        | Next.js 14+ (App Router)                                 |
| Language         | TypeScript                                               |
| Styling          | Tailwind CSS + CSS custom properties                     |
| State (Cart)     | React Context + useReducer + localStorage                |
| Commerce Backend | Shopify Storefront API (GraphQL)                         |
| Fulfillment      | TeemDrop via Shopify                                     |
| Fonts            | Google Fonts (Cormorant Garamond, DM Sans, Martian Mono) |
| Deployment       | Vercel                                                   |
| Image CDN        | Shopify CDN via `next/image`                             |

## 6.2 Cart Context — `context/CartContext.tsx`

```typescript
'use client';

import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { createCart, addToCart, updateCartLine, removeFromCart } from '@/lib/shopify/actions';
import type { Cart } from '@/lib/shopify/types';

const CART_ID_KEY = 'posturley_cart_id';

interface CartState {
  cart: Cart | null;
  isOpen: boolean;
  isLoading: boolean;
}

type CartAction =
  | { type: 'SET_CART'; cart: Cart }
  | { type: 'SET_OPEN'; open: boolean }
  | { type: 'SET_LOADING'; loading: boolean };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'SET_CART':    return { ...state, cart: action.cart };
    case 'SET_OPEN':    return { ...state, isOpen: action.open };
    case 'SET_LOADING': return { ...state, isLoading: action.loading };
    default: return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  openCart: () => void;
  closeCart: () => void;
} | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: null,
    isOpen: false,
    isLoading: false,
  });

  // Restore cart from localStorage on mount
  useEffect(() => {
    const storedCartId = localStorage.getItem(CART_ID_KEY);
    // Could fetch cart by ID here if Shopify exposes it
  }, []);

  const addItem = useCallback(async (variantId: string, quantity = 1) => {
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const cartId = localStorage.getItem(CART_ID_KEY);
      const cart = cartId
        ? await addToCart(cartId, variantId, quantity)
        : await createCart(variantId, quantity);

      localStorage.setItem(CART_ID_KEY, cart.id);
      dispatch({ type: 'SET_CART', cart });
      dispatch({ type: 'SET_OPEN', open: true });
    } finally {
      dispatch({ type: 'SET_LOADING', loading: false });
    }
  }, []);

  const updateItem = useCallback(async (lineId: string, quantity: number) => {
    const cartId = localStorage.getItem(CART_ID_KEY);
    if (!cartId) return;
    dispatch({ type: 'SET_LOADING', loading: true });
    try {
      const cart = await updateCartLine(cartId, lineId, quantity);
      dispatch({ type: 'SET_CART', cart });
    } finally {
      dispatch({ type: 'SET_LOADING', loading: false });
    }
  }, []);

  const removeItem = useCallback(async (lineId: string) => {
    const cartId = localStorage.getItem(CART_ID_KEY);
    if (!cartId) return;
    const cart = await removeFromCart(cartId, lineId);
    dispatch({ type: 'SET_CART', cart });
  }, []);

  return (
    <CartContext.Provider value={{
      state,
      addItem,
      updateItem,
      removeItem,
      openCart:  () => dispatch({ type: 'SET_OPEN', open: true }),
      closeCart: () => dispatch({ type: 'SET_OPEN', open: false }),
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
```

---

# 7. File Structure

```
posturley/
├── app/
│   ├── layout.tsx                    # Root layout, fonts, CartProvider
│   ├── page.tsx                      # Homepage
│   ├── products/
│   │   ├── page.tsx                  # All products listing
│   │   └── [handle]/
│   │       └── page.tsx              # Product detail page
│   ├── collections/
│   │   └── [handle]/
│   │       └── page.tsx              # Collection page
│   ├── about/page.tsx
│   ├── faq/page.tsx
│   └── not-found.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── CartDrawer.tsx
│   ├── product/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductGallery.tsx
│   │   ├── VariantSelector.tsx
│   │   ├── AddToCartButton.tsx
│   │   └── PriceDisplay.tsx
│   ├── cart/
│   │   ├── CartLine.tsx
│   │   └── CartSummary.tsx
│   ├── ui/
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Toast.tsx
│   │   └── SearchModal.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── FeaturedProducts.tsx
│       ├── BrandStory.tsx
│       └── SocialProof.tsx
│
├── context/
│   └── CartContext.tsx
│
├── lib/
│   └── shopify/
│       ├── client.ts                 # Core fetch client
│       ├── index.ts                  # Data fetching functions
│       ├── actions.ts                # Server Actions (cart mutations)
│       ├── types.ts                  # TypeScript interfaces
│       ├── helpers.ts                # Formatters & utilities
│       ├── queries/
│       │   ├── products.ts
│       │   ├── collections.ts
│       │   └── search.ts
│       └── mutations/
│           └── cart.ts
│
├── public/
│   └── fonts/                        # Self-hosted font fallbacks
│
├── .env.local                        # Shopify credentials (gitignored)
├── .env.example                      # Template for env vars
├── next.config.ts                    # next/image Shopify CDN config
├── tailwind.config.ts
└── tsconfig.json
```

## 7.1 next.config.ts — Image Domain

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
};

export default nextConfig;
```

---

# 8. Milestones & Timeline

| Week | Milestone            | Deliverables                                                         |
| ---- | -------------------- | -------------------------------------------------------------------- |
| 1    | Foundation           | Next.js project setup, Shopify dev store, API client, types, queries |
| 2    | Core Pages           | Homepage, product listing, product detail (RSC)                      |
| 3    | Cart System          | CartContext, CartDrawer, add/update/remove, checkout redirect        |
| 4    | UI Polish            | Animations, typography, color system, responsive layouts             |
| 5    | Collections & Search | Collection pages, predictive search modal                            |
| 6    | SEO & Performance    | Metadata, sitemap, JSON-LD, ISR, image optimization                  |
| 7    | QA & Testing         | Cross-browser, mobile, Lighthouse audit, accessibility               |
| 8    | Launch               | Shopify paid plan, Vercel production deploy, TeemDrop live           |

---

_Document prepared for the Posturley engineering and product team. All code samples are production-ready starting points and should be reviewed for security and performance before deployment._
