import { HearInsurancePlans } from "../InsuranceAndFooterSection/components/InsurancePlans";
import { HearBenefits } from "../InsuranceAndFooterSection/components/Benefits";
import { HearFooter } from "../InsuranceAndFooterSection/components/Footer";

export const HearInsuranceAndFooterSection = () => {
  return (
    <div className="caret-transparent max-w-[518px] outline-[3px] mx-auto px-[25px]">
      <HearInsurancePlans />
      <HearBenefits />
      <HearFooter />
    </div>
  );
};
