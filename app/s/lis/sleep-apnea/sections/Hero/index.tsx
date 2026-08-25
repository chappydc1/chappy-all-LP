import { SleepApneaHeroMedia } from "./components/SleepApneaHeroMedia";
import { SleepApneaHeroContent } from "./components/SleepApneaHeroContent";
import { SleepApneaStickyCtaBar } from "./components/SleepApneaStickyCtaBar";

export const SleepApneaHero = () => {
  return (
    <section className="box-border caret-transparent outline-[3px]">
      <div className="relative [align-items:normal] bg-white box-border caret-transparent gap-x-[normal] flex flex-col max-w-[1140px] outline-[3px] gap-y-[normal] mx-auto pt-5 pb-9 px-5 md:items-center md:gap-x-14 md:flex-row md:gap-y-14 md:px-0">
        <SleepApneaHeroMedia />
        <SleepApneaHeroContent />
        <SleepApneaStickyCtaBar />
      </div>
    </section>
  );
};
