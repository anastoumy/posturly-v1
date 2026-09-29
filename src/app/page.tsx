import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { BrandStory } from "@/components/sections/BrandStory";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClosingCta } from "@/components/sections/ClosingCta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureStrip />
      <FeaturedProducts />
      <BrandStory />
      <Testimonials />
      <ClosingCta />
    </>
  );
}
