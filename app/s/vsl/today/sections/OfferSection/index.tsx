import { TodayCountdownBanner } from "./components/TodayCountdownBanner";
import { TodayPricingSection } from "./components/TodayPricingSection";
import { TodayGuaranteeSection } from "./components/TodayGuaranteeSection";
import { TodayFAQSection } from "./components/TodayFAQSection";

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
