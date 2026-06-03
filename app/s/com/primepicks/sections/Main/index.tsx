import { HeroSection } from "../HeroSection";
import { ProductListSection } from "../ProductListSection";
import { FeaturedReviewSection } from "../FeaturedReviewSection";
import { StickyBanner } from "../Main/components/StickyBanner";

export const Main = () => {
  return (
    <main className="box-border caret-transparent">
      <HeroSection />
      <ProductListSection />
      <FeaturedReviewSection />
      <StickyBanner />
    </main>
  );
};
