import { StageCard } from "./components/StageCard"

export const StagesSection = () => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] pt-[60px] pb-[30px] px-5 md:flex-nowrap md:pb-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-center font-montserrat md:text-[32px] md:leading-[41.6px]">
            Why Feeling &#39;Off&#39; Is Not a Willpower Problem
          </div>
          <div className="box-border caret-transparent flex flex-col outline-[3px] w-full mt-[30px] md:flex-row md:mt-10">
            <StageCard
              imageUrl="/lp-images-files-videos-fonts/p/rosabella-1/96.png"
              stage="Stage 1"
              title="Early Warning Signs"
              description="You feel tired even after a full night of sleep. Your hands and feet are always cold and your energy feels inconsistent throughout the day."
            />
            <div className="box-border caret-transparent basis-5 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full"></div>
            <StageCard
              imageUrl="/lp-images-files-videos-fonts/p/rosabella-1/99.png"
              stage="Stage 2"
              title="Your Body Starts Slowing Down"
              description="Daily tasks feel harder than they used to. You notice more brain fog, less stamina, and a heavy feeling that does not go away no matter how much you rest."
            />
            <div className="box-border caret-transparent basis-5 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full"></div>
            <StageCard
              imageUrl="/lp-images-files-videos-fonts/p/rosabella-1/97.png"
              stage="Stage 3"
              title="It Becomes Your New Normal"
              description="You stop expecting to feel good. Fatigue, sluggishness, and poor circulation start feeling like just part of getting older. But they do not have to be."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
