import { TodayCountdownBanner } from "./components/TodayCountdownBanner";
import { TodayPricingSection } from "./components/TodayPricingSection";
import { TodayGuaranteeSection } from "./components/TodayGuaranteeSection";
import { TodayFAQSection } from "./components/TodayFAQSection";

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
