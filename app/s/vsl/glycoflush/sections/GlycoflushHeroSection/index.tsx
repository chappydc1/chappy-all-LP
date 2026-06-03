import { GlycoflushHeroLogo } from "../GlycoflushHeroSection/components/GlycoflushHeroLogo";
import { GlycoflushHeroSchedule } from "../GlycoflushHeroSection/components/GlycoflushHeroSchedule";

export const GlycoflushHeroSection = () => {
  return (
    <div className="relative items-start box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap min-h-[auto] outline-[3px] gap-y-2.5 w-full pt-[60px] pb-[75px] md:flex-nowrap">
      <GlycoflushHeroLogo />
      <GlycoflushHeroSchedule />
    </div>
  );
};
