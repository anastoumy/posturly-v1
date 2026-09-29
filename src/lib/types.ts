export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductOptionValue {
  value: string;
  label: string;
  /** Optional swatch color for color-type options */
  swatch?: string;
  /** If false, this specific value is unavailable across the board */
  available?: boolean;
}

export interface ProductOption {
  id: string;
  name: string;
  type: "size" | "color" | "text";
  values: ProductOptionValue[];
}

export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  available: boolean;
  inventory?: number;
  selectedOptions: Record<string, string>;
  image?: ProductImage;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface SizeGuideRow {
  size: string;
  [key: string]: string;
}

export interface ProductReview {
  author: string;
  location: string;
  rating: number;
  title: string;
  body: string;
  verified?: boolean;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  tagline: string;
  category: string;
  categoryLabel: string;
  shortDescription: string;
  description: string[];
  benefits: { title: string; description: string; icon: string }[];
  featuredImage: ProductImage;
  images: ProductImage[];
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  badge?: "New" | "Best Seller" | "Sale" | "Limited";
  options: ProductOption[];
  variants: ProductVariant[];
  specs: ProductSpec[];
  sizeGuide?: { headers: string[]; rows: SizeGuideRow[] };
  whatsIncluded: string[];
  reviews: ProductReview[];
  faqs: { question: string; answer: string }[];
}

export interface CartLine {
  lineId: string;
  productId: string;
  variantId: string;
  handle: string;
  title: string;
  variantTitle: string;
  price: number;
  compareAtPrice?: number;
  image: ProductImage;
  quantity: number;
}
