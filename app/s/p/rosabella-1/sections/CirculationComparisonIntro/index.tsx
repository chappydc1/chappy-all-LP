import { ComparisonText } from "./components/ComparisonText"
import { SupplementComparison } from "./components/SupplementComparison"

export const CirculationComparisonIntro = () => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] pb-[30px] px-5 md:flex-nowrap md:pb-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="box-border caret-transparent flex flex-col outline-[3px] w-full md:flex-row">
          <ComparisonText />
          <div className="box-border caret-transparent basis-[30px] shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[70px] md:basis-[70px]"></div>
          <SupplementComparison />
        </div>
      </div>
    </div>
  );
};
