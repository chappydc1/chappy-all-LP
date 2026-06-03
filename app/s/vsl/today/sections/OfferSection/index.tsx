import { CountdownBanner } from "../OfferSection/components/CountdownBanner";
import { PricingSection } from "../OfferSection/components/PricingSection";
import { GuaranteeSection } from "../OfferSection/components/GuaranteeSection";
import { FAQSection } from "../OfferSection/components/FAQSection";

export const OfferSection = () => {
  return (
    <div className="box-border caret-transparent hidden outline-[3px]">
      <CountdownBanner />
      <img
        src="https://sugarhealthnotice.com/news/begin/watch/wtc-2/assets/img/separador.svg"
        alt=""
        className="relative items-center box-border caret-transparent flex flex-col justify-center max-w-full object-contain outline-[3px] text-center z-10 mx-auto"
      />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
    </div>
  );
};
