import { FealsMobileHeader } from "./components/FealsMobileHeader";
import { FealsDesktopHeader } from "./components/FealsDesktopHeader";

export const FealsHeader = () => {
  return (
    <div className="box-border caret-transparent hidden outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <header
          role="banner"
          className="absolute text-stone-500 bg-white box-border caret-transparent hidden outline-[3px] w-full z-[5000]"
        >
          <div className="box-border caret-transparent outline-[3px] w-full mx-auto px-4 md:px-8 after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-stone-500 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[23.04px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-ll_brown_regular_web">
            <FealsMobileHeader />
            <FealsDesktopHeader />
          </div>
        </header>
        <nav
          aria-label="Main menu"
          className="text-stone-500 box-border caret-transparent hidden outline-[3px]"
        ></nav>
      </div>
      <div className="relative box-border caret-transparent h-0 outline-[3px] invisible z-[-1]"></div>
    </div>
  );
};
