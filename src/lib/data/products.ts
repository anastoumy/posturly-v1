import type {
  Product,
  ProductOption,
  ProductOptionValue,
  ProductVariant,
} from "@/lib/types";

function img(
  src: string,
  alt: string,
  width: number,
  height: number,
) {
  return { src, alt, width, height };
}

/* ------------------------------------------------------------------ */
/*  01 — Adjustable Magnetic Posture Corrector ("The Corrector")      */
/* ------------------------------------------------------------------ */

const correctorSizes: ProductOptionValue[] = [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
  { value: "3XL", label: "3XL" },
  { value: "4XL", label: "4XL", available: false },
];

const correctorColors: ProductOptionValue[] = [
  { value: "Black", label: "Onyx Black", swatch: "#1a1a1a" },
  { value: "White", label: "Bone White", swatch: "#f3efe6" },
];

const correctorOptions: ProductOption[] = [
  { id: "size", name: "Size", type: "size", values: correctorSizes },
  { id: "color", name: "Color", type: "color", values: correctorColors },
];

const correctorVariants: ProductVariant[] = correctorSizes.flatMap((size) =>
  correctorColors.map((color) => ({
    id: `corrector-${size.value}-${color.value}`.toLowerCase(),
    title: `${size.label} / ${color.label}`,
    price: 58,
    compareAtPrice: 89,
    available: size.available !== false,
    inventory: size.available !== false ? 24 : 0,
    selectedOptions: { Size: size.value, Color: color.value },
    image:
      color.value === "Black"
        ? img(
            "/products/corrector/05-flatlay-black.png",
            "Adjustable Magnetic Posture Corrector in Onyx Black, flat lay",
            2304,
            1728,
          )
        : img(
            "/products/corrector/04-flatlay-white.png",
            "Adjustable Magnetic Posture Corrector in Bone White, flat lay",
            2304,
            1728,
          ),
  })),
);

const corrector: Product = {
  id: "prod_corrector",
  handle: "magnetic-posture-corrector",
  title: "The Corrector — Adjustable Magnetic Posture Brace",
  tagline: "Stand taller by tonight.",
  category: "correctors",
  categoryLabel: "Posture Correctors",
  shortDescription:
    "A discreet, fully adjustable back brace that retrains your shoulders into alignment — engineered to disappear under any shirt.",
  description: [
    "The Corrector is a discreet back support brace designed to encourage a more upright posture during daily wear. A four-point adjustable strap system creates a secure, personalized fit calibrated to your frame, while a featherweight construction keeps it comfortable through a full day at a desk, on a commute, or moving through light activity.",
    "Every stitch is built to sit low-profile under clothing — there is no bulk, no visible seams through fabric, and no compromise on the clean lines of your outfit. The result is a brace that works quietly in the background while you get on with your day.",
    "A unisex fit across seven sizes means The Corrector adapts to your body rather than the other way around. Whichever size you land on, the strap system fine-tunes the last inch of fit so the brace feels tailored, not generic.",
  ],
  benefits: [
    {
      title: "Instant shoulder retraction",
      description:
        "Cross-back straps gently pull the shoulders into alignment the moment you fasten it — no stretching or breaking-in period.",
      icon: "align",
    },
    {
      title: "All-day comfort",
      description:
        "Breathable neoprene and elastic fabric panels move with your body instead of digging in, even through a full 8-hour wear.",
      icon: "feather",
    },
    {
      title: "Invisible under clothing",
      description:
        "A slim, low-profile silhouette means it stays hidden under t-shirts, blouses, and button-downs alike.",
      icon: "eye-off",
    },
    {
      title: "Fully adjustable fit",
      description:
        "Independent strap tensioning at the shoulders and waist lets you dial in exactly the right amount of support.",
      icon: "sliders",
    },
  ],
  featuredImage: img(
    "/products/corrector/01-worn-studio.png",
    "The Corrector posture brace worn, rear studio view",
    2304,
    1728,
  ),
  images: [
    img(
      "/products/corrector/01-worn-studio.png",
      "The Corrector posture brace worn, rear studio view",
      2304,
      1728,
    ),
    img(
      "/products/corrector/02-lifestyle-woman.png",
      "Woman wearing The Corrector posture brace under a white t-shirt",
      2304,
      1728,
    ),
    img(
      "/products/corrector/03-lifestyle-office.png",
      "The Corrector posture brace worn at a home office desk",
      2304,
      1728,
    ),
    img(
      "/products/corrector/04-flatlay-white.png",
      "The Corrector posture brace in Bone White, flat lay",
      2304,
      1728,
    ),
    img(
      "/products/corrector/05-flatlay-black.png",
      "The Corrector posture brace in Onyx Black, flat lay",
      2304,
      1728,
    ),
    img(
      "/products/corrector/06-detail-magnets.png",
      "Detail of therapeutic magnet points along the spine panel",
      2304,
      1728,
    ),
    img(
      "/products/corrector/07-detail-closure.png",
      "Detail of the adjustable front strap closure system",
      2304,
      1728,
    ),
  ],
  price: 58,
  compareAtPrice: 89,
  rating: 4.8,
  reviewCount: 1042,
  tags: ["bestseller", "posture", "back-support", "office"],
  badge: "Best Seller",
  options: correctorOptions,
  variants: correctorVariants,
  specs: [
    { label: "Product type", value: "Posture corrector / back support brace" },
    { label: "Target use", value: "Daily posture support for office, home & travel" },
    { label: "Fit", value: "Unisex, adjustable" },
    { label: "Materials", value: "Neoprene, elastic fabric" },
    { label: "Colors", value: "Black, White" },
    { label: "Package contents", value: "1 posture corrector" },
  ],
  sizeGuide: {
    headers: ["Size", "Fits Waist", "Flat Length", "Strap Length", "Back Length"],
    rows: [
      { size: "S", "Fits Waist": "25.6\"–30.3\" / 65–77cm", "Flat Length": "31.5\" / 80cm", "Strap Length": "12.6\"–17.7\" / 32–45cm", "Back Length": "14.2\" / 36cm" },
      { size: "M", "Fits Waist": "30.3\"–34.7\" / 77–88cm", "Flat Length": "35.4\" / 90cm", "Strap Length": "13.0\"–18.1\" / 33–46cm", "Back Length": "14.6\" / 37cm" },
      { size: "L", "Fits Waist": "34.7\"–38.6\" / 88–98cm", "Flat Length": "38.6\" / 98cm", "Strap Length": "13.8\"–18.9\" / 35–48cm", "Back Length": "14.6\" / 37cm" },
      { size: "XL", "Fits Waist": "36.2\"–41.3\" / 92–105cm", "Flat Length": "40.2\" / 102cm", "Strap Length": "15.4\"–20.3\" / 39–51.5cm", "Back Length": "14.6\" / 37cm" },
      { size: "XXL", "Fits Waist": "43.3\"–47.2\" / 110–120cm", "Flat Length": "47.2\" / 120cm", "Strap Length": "16.5\"–21.7\" / 42–55cm", "Back Length": "15.2\" / 38.5cm" },
      { size: "3XL", "Fits Waist": "47.2\"–51.2\" / 120–130cm", "Flat Length": "51.2\" / 130cm", "Strap Length": "18.1\"–26.4\" / 46–67cm", "Back Length": "15.4\" / 39cm" },
    ],
  },
  whatsIncluded: ["1× The Corrector posture brace", "Fit & care guide"],
  reviews: [
    {
      author: "Daniel R.",
      location: "Austin, TX",
      rating: 5,
      title: "Wore it under a dress shirt all day",
      body: "Nobody at the office noticed I was wearing it, but by 3pm my shoulders were still back instead of hunched over my keyboard. Sizing was spot-on with the guide.",
      verified: true,
    },
    {
      author: "Priya M.",
      location: "Toronto, ON",
      rating: 5,
      title: "Finally, adjustable straps that actually hold",
      body: "I've tried two cheaper correctors that loosened within an hour. This one keeps its tension through a full work day and my commute.",
      verified: true,
    },
    {
      author: "Marcus T.",
      location: "Leeds, UK",
      rating: 4,
      title: "Great support, took a day to adjust",
      body: "Very effective at pulling the shoulders back — took about a day of shorter wear sessions before I could keep it on for 6+ hours comfortably.",
      verified: true,
    },
  ],
  faqs: [
    {
      question: "Will it be visible under my clothes?",
      answer:
        "No — the brace is designed with a slim profile specifically to sit flat under t-shirts, blouses, and button-downs without printing through the fabric.",
    },
    {
      question: "How long should I wear it per day when starting out?",
      answer:
        "We recommend 20–30 minutes on your first day, gradually building to 4–6 hours as your muscles adapt. Comfort should always come before duration.",
    },
    {
      question: "Can I wear it while exercising?",
      answer:
        "It's built for light activity, commuting, and desk work. For high-intensity training we'd suggest removing it, since sweat can loosen the strap tension.",
    },
    {
      question: "How do I pick between two sizes?",
      answer:
        "If you're between sizes, size up — the strap system has enough range to cinch down, but a too-small brace can't expand comfortably.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  02 — Memory Foam Lumbar Support Cushion Set ("The Companion")     */
/* ------------------------------------------------------------------ */

const cushionColors: ProductOptionValue[] = [
  { value: "DeepSpaceGray", label: "Deep Space Gray", swatch: "#54585c" },
  { value: "ClassicBlack", label: "Classic Black", swatch: "#1a1a1a" },
  { value: "WarmBeige", label: "Warm Beige", swatch: "#e4d3b8" },
  { value: "SkyBlue", label: "Sky Blue", swatch: "#a9c9e0" },
  { value: "SageGreen", label: "Sage Green", swatch: "#b7c9ac" },
  { value: "GoldenLeaf", label: "Golden Leaf Yellow", swatch: "#e9c661" },
  { value: "BusinessBrown", label: "Business Brown", swatch: "#6b4c3b" },
  { value: "GentlemanGray", label: "Gentleman Gray", swatch: "#9a978f" },
  { value: "CherryBlossom", label: "Cherry Blossom Pink", swatch: "#eec6cd" },
];

const cushionConfigs: ProductOptionValue[] = [
  { value: "Lumbar", label: "Lumbar Pillow Only" },
  { value: "Seat", label: "Seat Cushion Only" },
  { value: "Set", label: "Complete Set (Best Value)" },
];

const cushionConfigPrice: Record<string, { price: number; compareAt: number }> = {
  Lumbar: { price: 34, compareAt: 49 },
  Seat: { price: 44, compareAt: 62 },
  Set: { price: 72, compareAt: 108 },
};

const cushionOptions: ProductOption[] = [
  { id: "config", name: "Configuration", type: "text", values: cushionConfigs },
  { id: "color", name: "Color", type: "color", values: cushionColors },
];

const cushionVariants: ProductVariant[] = cushionConfigs.flatMap((config) =>
  cushionColors.map((color) => ({
    id: `cushion-${config.value}-${color.value}`.toLowerCase(),
    title: `${config.label} / ${color.label}`,
    price: cushionConfigPrice[config.value].price,
    compareAtPrice: cushionConfigPrice[config.value].compareAt,
    available: true,
    inventory: 40,
    selectedOptions: { Configuration: config.value, Color: color.value },
  })),
);

const cushion: Product = {
  id: "prod_cushion",
  handle: "lumbar-support-cushion-set",
  title: "The Companion — Memory Foam Lumbar & Seat Set",
  tagline: "Sit for hours. Feel like minutes.",
  category: "seating",
  categoryLabel: "Seating Support",
  shortDescription:
    "A contoured memory-foam seat cushion and matching lumbar pillow that redistribute pressure across your hips and lower back for hours of comfortable sitting.",
  description: [
    "The Companion pairs a contoured seat cushion with a matching lumbar pillow to improve comfort during long stretches of sitting. Slow-rebound memory foam is shaped to help distribute pressure more evenly across the hips and lower back, making it a practical upgrade for office chairs, home workstations, and everyday seating.",
    "Both pieces are engineered together — the seat cushion's coccyx cut-out relieves tailbone pressure while the lumbar pillow keeps the natural curve of your spine supported, so your posture holds up even during long work sessions or drives.",
    "A minimalist silhouette and a nine-color range make it easy to match The Companion to any interior, from a clinical home office to a warmer, lived-in study — without turning your chair into a medical appliance.",
  ],
  benefits: [
    {
      title: "Even pressure distribution",
      description:
        "Contoured memory foam cradles the hips and tailbone, reducing the numbness and fidgeting that comes with hours of flat seating.",
      icon: "layers",
    },
    {
      title: "Spine-true lumbar curve",
      description:
        "The matching lumbar pillow locks into your chair's backrest to maintain the natural S-curve of your lower spine.",
      icon: "align",
    },
    {
      title: "Non-slip base",
      description:
        "A textured underside keeps the cushion anchored to your chair, even through hours of shifting and rolling.",
      icon: "grip",
    },
    {
      title: "Breathable, washable cover",
      description:
        "The cloth outer resists heat build-up during long sits and zips off for easy cleaning.",
      icon: "wind",
    },
  ],
  featuredImage: img(
    "/products/cushion/02-lifestyle-office.webp",
    "The Companion memory foam seat cushion and lumbar pillow on an office chair",
    800,
    800,
  ),
  images: [
    img(
      "/products/cushion/02-lifestyle-office.webp",
      "The Companion memory foam seat cushion and lumbar pillow on an office chair",
      800,
      800,
    ),
    img(
      "/products/cushion/01-lifestyle-desk.webp",
      "The Companion cushion set installed on an ergonomic desk chair",
      800,
      800,
    ),
    img(
      "/products/cushion/03-detail-seated.webp",
      "Close up of someone seated on The Companion seat cushion",
      790,
      700,
    ),
    img(
      "/products/cushion/04-detail-profile.webp",
      "Side profile of the contoured memory foam cushion showing 7.5cm loft",
      790,
      829,
    ),
  ],
  price: 72,
  compareAtPrice: 108,
  rating: 4.7,
  reviewCount: 683,
  tags: ["seating", "lumbar", "office", "wfh"],
  badge: "New",
  options: cushionOptions,
  variants: cushionVariants,
  specs: [
    { label: "Product type", value: "Seat cushion and lumbar support set" },
    { label: "Filling", value: "Memory foam" },
    { label: "Outer material", value: "Cloth" },
    { label: "Style", value: "Minimalist" },
    { label: "Pattern", value: "Solid color" },
    { label: "Package size", value: "400 × 400 × 170mm" },
    { label: "Package contents", value: "1× lumbar pillow, 1× seat cushion (per configuration)" },
  ],
  whatsIncluded: [
    "1× Contoured memory foam seat cushion (Seat / Set configurations)",
    "1× Matching lumbar pillow (Lumbar / Set configurations)",
    "Removable, washable cover",
  ],
  reviews: [
    {
      author: "Alicia W.",
      location: "Portland, OR",
      rating: 5,
      title: "My tailbone thanks me",
      body: "I sit for 9+ hours a day for work and this cut the end-of-day ache almost completely. The cut-out for the tailbone makes a bigger difference than I expected.",
      verified: true,
    },
    {
      author: "Ben O.",
      location: "Manchester, UK",
      rating: 5,
      title: "Bought it for my car, now want a second one",
      body: "Originally grabbed the lumbar pillow for road trips. It's so good I ordered the full set for my desk chair too.",
      verified: true,
    },
    {
      author: "Sara K.",
      location: "Chicago, IL",
      rating: 4,
      title: "Foam is firmer than I expected",
      body: "Took about a week to break in, but now it's the perfect balance of support without feeling like a rock. Color match to my chair is great too.",
      verified: true,
    },
  ],
  faqs: [
    {
      question: "Will this fit my office chair?",
      answer:
        "The seat cushion fits any standard chair, car seat, or dining chair (approx. 40 × 40cm). The lumbar pillow's straps adjust to fit most chair backs, including mesh office chairs.",
    },
    {
      question: "What's the difference between the three configurations?",
      answer:
        "Lumbar Pillow Only supports your lower back; Seat Cushion Only supports hips and tailbone; the Complete Set includes both pieces at the best combined value.",
    },
    {
      question: "Is the cover removable for washing?",
      answer:
        "Yes, both the seat cushion and lumbar pillow covers unzip for machine washing on a cold, gentle cycle. Air dry only — do not tumble dry the memory foam insert.",
    },
    {
      question: "How long does the foam take to break in?",
      answer:
        "Most customers find the ideal firmness within 5–7 days of regular use as the memory foam adjusts to your body's pressure points.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  03 — Neck Hammock Neck Stretcher ("The Decompressor")             */
/* ------------------------------------------------------------------ */

const hammockBundles: ProductOptionValue[] = [
  { value: "Standard", label: "Standard Kit" },
  { value: "EyeMask", label: "Kit + Travel Eye Mask" },
];

const hammockOptions: ProductOption[] = [
  { id: "bundle", name: "Bundle", type: "text", values: hammockBundles },
];

const hammockVariants: ProductVariant[] = hammockBundles.map((bundle) => ({
  id: `hammock-${bundle.value}`.toLowerCase(),
  title: bundle.label,
  price: bundle.value === "Standard" ? 38 : 46,
  compareAtPrice: bundle.value === "Standard" ? 58 : 68,
  available: true,
  inventory: 60,
  selectedOptions: { Bundle: bundle.value },
}));

const hammock: Product = {
  id: "prod_hammock",
  handle: "neck-hammock-stretcher",
  title: "The Decompressor — Neck Hammock Stretcher",
  tagline: "A five-minute reset for a tension-loaded neck.",
  category: "recovery",
  categoryLabel: "Recovery & Traction",
  shortDescription:
    "A portable cervical traction hammock that hooks over any door for a guided, cushioned neck stretch in under five minutes.",
  description: [
    "The Decompressor is a portable cervical traction accessory designed to support gentle neck relaxation and stretching. It attaches to any standard door and creates a simple suspension setup you can use at home, in the office, or while travelling — no assembly, no bulky equipment.",
    "Compact enough to fold into its included pouch and store in a desk drawer or carry-on, it offers a straightforward way to add a short decompression routine to your day between meetings or after a long drive.",
    "The soft, shape-memory cotton core cushions the base of your skull and jaw at every contact point, so the stretch feels supportive rather than strained, even during longer sessions.",
  ],
  benefits: [
    {
      title: "Set up in under a minute",
      description:
        "Loop it over any standard door, clip the adjustable strap, and you're ready — no tools, no wall mounting.",
      icon: "timer",
    },
    {
      title: "Cushioned, shape-memory core",
      description:
        "Soft cotton padding cradles the head and jaw, distributing weight evenly instead of pressing on any single point.",
      icon: "shield",
    },
    {
      title: "Adjustable traction angle",
      description:
        "The dual-strap system lets you fine-tune stretch intensity and head elevation to match your comfort level.",
      icon: "sliders",
    },
    {
      title: "Travel-ready",
      description:
        "Folds into its drawstring pouch small enough for a carry-on, so your recovery routine travels with you.",
      icon: "briefcase",
    },
  ],
  featuredImage: img(
    "/products/hammock/01-main-assembled.png",
    "The Decompressor neck hammock, fully assembled three-quarter view",
    713,
    716,
  ),
  images: [
    img(
      "/products/hammock/01-main-assembled.png",
      "The Decompressor neck hammock, fully assembled three-quarter view",
      713,
      716,
    ),
    img(
      "/products/hammock/02-flatlay.png",
      "The Decompressor neck hammock, flat lay with straps",
      476,
      489,
    ),
    img(
      "/products/hammock/03-flatlay-alt.png",
      "The Decompressor neck hammock with all straps and carabiners laid out",
      733,
      718,
    ),
    img(
      "/products/hammock/05-detail-foam.png",
      "Close up of the shape-memory cotton cushion core",
      726,
      721,
    ),
    img(
      "/products/hammock/04-pouch.webp",
      "The Decompressor's compact drawstring travel pouch",
      1000,
      1000,
    ),
    img(
      "/products/hammock/06-door-mount.webp",
      "Demonstration of the over-the-door strap and carabiner mount",
      1000,
      1000,
    ),
  ],
  price: 38,
  compareAtPrice: 58,
  rating: 4.6,
  reviewCount: 512,
  tags: ["neck", "recovery", "travel", "stretch"],
  options: hammockOptions,
  variants: hammockVariants,
  specs: [
    { label: "Product type", value: "Neck traction hammock / stretcher" },
    { label: "Inner core material", value: "Shape memory cotton" },
    { label: "Jacket material", value: "Cotton cloth + knitted fabric" },
    { label: "Size", value: "50 × 20 × 2.5cm" },
    { label: "Package size", value: "200 × 100 × 100mm" },
    { label: "Package contents", value: "1× hammock, straps, carabiner, pouch" },
  ],
  whatsIncluded: [
    "1× Neck hammock cushion",
    "2× Adjustable nylon straps",
    "1× Elastic traction cord with carabiners",
    "1× Drawstring travel pouch",
  ],
  reviews: [
    {
      author: "Jordan L.",
      location: "Denver, CO",
      rating: 5,
      title: "Five minutes and my neck cracks are gone",
      body: "I hang it on my office door between calls. Sounds silly until you try it — the tension release is immediate.",
      verified: true,
    },
    {
      author: "Fatima N.",
      location: "Dubai, UAE",
      rating: 4,
      title: "Great for after long flights",
      body: "Packs down tiny. I used it in a hotel room after a 14-hour flight and my neck felt human again.",
      verified: true,
    },
    {
      author: "Chris B.",
      location: "Sydney, AU",
      rating: 5,
      title: "Better than my physio's version",
      body: "My physiotherapist recommended cervical traction and this is more comfortable than the clinic's version, plus I can use it daily at home.",
      verified: true,
    },
  ],
  faqs: [
    {
      question: "Do I need any tools to install it?",
      answer:
        "No installation required — the strap simply loops over the top of any standard interior door and the door itself provides the anchor point.",
    },
    {
      question: "How long should each session last?",
      answer:
        "Start with 3–5 minutes to let your neck muscles adjust, and most users comfortably build up to 10–15 minute sessions.",
    },
    {
      question: "Is it safe to use every day?",
      answer:
        "Yes, gentle daily traction is generally well tolerated. As with any stretching routine, stop if you feel sharp pain and consult a physician for existing neck conditions.",
    },
    {
      question: "Will it fit narrow doors or unusual door frames?",
      answer:
        "The strap system adjusts to fit the vast majority of standard interior doors. It is not designed for sliding or bifold doors.",
    },
  ],
};

export const products: Product[] = [corrector, cushion, hammock];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getRelatedProducts(handle: string, limit = 2): Product[] {
  return products.filter((p) => p.handle !== handle).slice(0, limit);
}

export const categories = [
  { value: "all", label: "All Products" },
  { value: "correctors", label: "Posture Correctors" },
  { value: "seating", label: "Seating Support" },
  { value: "recovery", label: "Recovery & Traction" },
];
