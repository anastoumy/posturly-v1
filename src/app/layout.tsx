import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Martian_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ToastProvider } from "@/context/ToastContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { ToastViewport } from "@/components/ui/Toast";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Posturley — Premium Posture & Ergonomic Essentials",
    template: "%s · Posturley",
  },
  description:
    "Precision-engineered posture correctors, seating support, and recovery tools designed to fix how you sit, stand, and stretch.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${dmSans.variable} ${martianMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--color-background)] text-[var(--color-ink)]">
        <ToastProvider>
          <CartProvider>
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <CartDrawer />
            <ToastViewport />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
