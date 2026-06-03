import { GlycoflushPricingGrid } from "../GlycoflushPricingSection/components/GlycoflushPricingGrid";

export const GlycoflushPricingSection = () => {
  return (
    <div className="relative bg-red-800 box-border caret-transparent hidden flex-col max-w-full outline-[3px] w-full z-[2] mx-auto px-[5px] md:px-2.5">
      <div className="box-border caret-transparent gap-x-[30px] flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] outline-[3px] gap-y-[30px] w-full mx-auto pt-10 pb-[30px] md:gap-x-5 md:flex-nowrap md:max-w-[1100px] md:gap-y-5 md:pt-[50px] md:pb-10">
        <GlycoflushPricingGrid />
      </div>
    </div>
  );
};
