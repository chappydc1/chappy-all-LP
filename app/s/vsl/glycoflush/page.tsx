import { GlycoflushHeader } from "./sections/GlycoflushHeader";
import { GlycoflushOfferBanner } from "./sections/GlycoflushOfferBanner";
import { GlycoflushPricingSection } from "./sections/GlycoflushPricingSection";
import { GlycoflushGuaranteeSection } from "./sections/GlycoflushGuaranteeSection";
import { GlycoflushCommentsSection } from "./sections/GlycoflushCommentsSection";
import { GlycoflushFooter } from "./sections/GlycoflushFooter";

export default function VSLPage() {
  return (
    <div className="caret-transparent outline-[3px]">
      <GlycoflushHeader />
      <GlycoflushOfferBanner />
      <GlycoflushPricingSection />
      <GlycoflushGuaranteeSection />
      <GlycoflushCommentsSection />
      <GlycoflushFooter />
    </div>
  );
}
