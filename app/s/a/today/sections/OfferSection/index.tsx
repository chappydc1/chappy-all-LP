import { CountdownBanner } from "../OfferSection/components/CountdownBanner";
import { PricingSection } from "../OfferSection/components/PricingSection";
import { GuaranteeSection } from "../OfferSection/components/GuaranteeSection";
import { FAQSection } from "../OfferSection/components/FAQSection";

export const OfferSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <CountdownBanner />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
    </div>
  );
};
