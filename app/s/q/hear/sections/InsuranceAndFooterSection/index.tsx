import { HearInsurancePlans } from "./components/HearInsurancePlans";
import { HearBenefits } from "./components/HearBenefits";
import { HearFooter } from "./components/HearFooter";

export const HearInsuranceAndFooterSection = () => {
  return (
    <div className="caret-transparent max-w-[518px] outline-[3px] mx-auto px-[25px]">
      <HearInsurancePlans />
      <HearBenefits />
      <HearFooter />
    </div>
  );
};
