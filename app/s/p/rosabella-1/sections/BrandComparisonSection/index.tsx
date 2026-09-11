import copy from "../../copy.json"
import { ComparisonTable } from "./components/ComparisonTable"

export const BrandComparisonSection = () => {
  const { eyebrow, heading } = copy.brandComparison;
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] px-5 py-[30px] md:flex-nowrap md:py-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="text-emerald-800 font-semibold box-border caret-transparent tracking-[-0.32px] leading-[20.8px] outline-[3px] text-center mb-2.5 font-montserrat">
            {eyebrow}
          </div>
          <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-center font-montserrat md:text-[32px] md:leading-[41.6px]">
            {heading}
          </div>
          <ComparisonTable />
        </div>
      </div>
    </div>
  );
};
