import { PrimepicksHeroSection } from "../HeroSection";
import { PrimepicksProductListSection } from "../ProductListSection";
import { PrimepicksFeaturedReviewSection } from "../FeaturedReviewSection";
import { PrimepicksStickyBanner } from "../Main/components/StickyBanner";

export const PrimepicksMain = () => {
  return (
    <main className="box-border caret-transparent">
      <PrimepicksHeroSection />
      <PrimepicksProductListSection />
      <PrimepicksFeaturedReviewSection />
      <PrimepicksStickyBanner />
    </main>
  );
};
