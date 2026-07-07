import { HeroContent } from "../Hero/components/HeroContent";
import { HeroMedia } from "../Hero/components/HeroMedia";

export const Hero = () => {
  return (
    <div className="relative items-center bg-stone-100 box-border caret-transparent flex basis-[0%] shrink-0 flex-wrap justify-center max-w-full outline-[3px] z-10 mx-0 pb-0 px-0 rounded-[1px] md:bg-neutral-100 md:flex-nowrap md:mx-px md:pb-px md:px-px">
      <div className="relative items-start bg-stone-100 box-border caret-transparent flex basis-full flex-col-reverse grow max-w-[1400px] min-h-[25px] outline-[3px] w-min py-0 md:items-center md:basis-0 md:flex-row md:py-px">
        <HeroContent />
        <HeroMedia />
      </div>
    </div>
  );
};
