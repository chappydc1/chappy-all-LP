import { TodayCountdownBanner } from "../OfferSection/components/CountdownBanner";
import { TodayPricingSection } from "../OfferSection/components/PricingSection";
import { TodayGuaranteeSection } from "../OfferSection/components/GuaranteeSection";
import { TodayFAQSection } from "../OfferSection/components/FAQSection";

export const TodayOfferSection = () => {
  return (
    <div className="box-border caret-transparent hidden outline-[3px]">
      <TodayCountdownBanner />
      <img
        src="/images/today/separador.svg"
        alt=""
        className="relative items-center box-border caret-transparent flex flex-col justify-center max-w-full object-contain outline-[3px] text-center z-10 mx-auto"
      />
      <TodayPricingSection />
      <TodayGuaranteeSection />
      <TodayFAQSection />
    </div>
  );
};
