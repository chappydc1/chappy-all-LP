import { TodayCountdownBanner } from "../OfferSection/components/CountdownBanner";
import { TodayPricingSection } from "../OfferSection/components/PricingSection";
import { TodayGuaranteeSection } from "../OfferSection/components/GuaranteeSection";
import { TodayFAQSection } from "../OfferSection/components/FAQSection";

export const TodayOfferSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <TodayCountdownBanner />
      <TodayPricingSection />
      <TodayGuaranteeSection />
      <TodayFAQSection />
    </div>
  );
};
