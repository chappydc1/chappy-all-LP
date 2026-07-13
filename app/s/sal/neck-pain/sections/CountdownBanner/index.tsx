import { CountdownTimer } from "./components/CountdownTimer";
import { content } from "../../content";

export const CountdownBanner = () => {
  const c = content.countdownBanner;
  return (
    <div
      className="lp-countdown-banner-inner relative text-black text-[11.2px] font-bold items-stretch bg-stone-950 bg-size-[cover,cover] box-border caret-transparent flex flex-col h-[45px] justify-center max-h-[65px] min-h-[45px] z-[999] overflow-hidden bg-[position:0px,0px_0px,50%] top-[0%] inset-x-[0%] md:text-base md:h-[65px] md:bg-[position:0px,20%_top] md:top-auto md:inset-x-auto"
      style={{
        ["--banner-mobile" as string]: `url('${c.backgroundMobile}')`,
        ["--banner-desktop" as string]: `url('${c.backgroundDesktop}')`,
      }}
    >
      <div className="text-white text-[11.2px] items-center box-border caret-transparent gap-x-6 flex justify-center min-h-[auto] min-w-[auto] gap-y-2 px-1.5 md:text-base">
        <img
          src={c.leftIcon}
          alt=""
          className="text-[11.2px] box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] ml-0.5 md:text-base md:h-[6%] md:ml-0"
        />
        <div className="text-[11.2px] box-border caret-transparent flex basis-[0%] grow justify-center min-h-[auto] min-w-[auto] md:text-base md:hidden md:basis-auto md:grow-0 md:justify-normal md:min-h-0 md:min-w-0">
          <img
            src={c.rightIconMobile}
            alt=""
            className="absolute text-[11.2px] box-border caret-transparent block h-12 max-w-full object-contain w-auto -bottom-px md:static md:text-base md:inline-block md:h-[70px] md:object-fill md:w-full md:bottom-auto"
          />
        </div>
        <div className="relative text-[11.2px] box-border caret-transparent hidden min-h-0 min-w-0 md:text-base md:flex md:min-h-[auto] md:min-w-[auto]">
          <img
            src={c.rightIconDesktop}
            alt=""
            className="text-[11.2px] box-border caret-transparent inline-block h-[70px] max-w-full min-h-0 min-w-0 w-full md:text-base md:block md:min-h-[auto] md:min-w-[auto]"
          />
        </div>
        <CountdownTimer />
      </div>
    </div>
  );
};
