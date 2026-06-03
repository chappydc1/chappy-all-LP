import { InsurancePlans } from "../InsuranceAndFooterSection/components/InsurancePlans";
import { Benefits } from "../InsuranceAndFooterSection/components/Benefits";
import { Footer } from "../InsuranceAndFooterSection/components/Footer";

export const InsuranceAndFooterSection = () => {
  return (
    <div className="caret-transparent max-w-[518px] outline-[3px] mx-auto px-[25px]">
      <InsurancePlans />
      <Benefits />
      <Footer />
    </div>
  );
};
