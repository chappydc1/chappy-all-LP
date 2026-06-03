import { GlycoflushGuaranteeContent } from "../GlycoflushGuaranteeSection/components/GlycoflushGuaranteeContent";

export const GlycoflushGuaranteeSection = () => {
  return (
    <div className="relative items-center bg-red-800 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center max-w-full outline-[3px] gap-y-5 w-full mx-auto p-2.5 md:flex-nowrap">
      <GlycoflushGuaranteeContent />
    </div>
  );
};
