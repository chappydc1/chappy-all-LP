import copy from "../../copy.json";
import { EarCleanerCountdownTimer } from "./components/EarCleanerCountdownTimer";

export const EarCleanerAnnouncementBar = () => {
  const { badge, offer, timer_seconds } = copy.announcement_bar;

  return (
    <div className="sticky box-border z-[99999] top-0">
      <div className="relative box-border flex flex-col w-full">
        <div className="text-white items-center bg-indigo-900 box-border gap-x-2 flex justify-center min-h-[auto] min-w-[auto] gap-y-2 w-full px-[1%] py-2 md:gap-x-5 md:gap-y-5 md:px-0 animate-fade-in">
          <div className="items-center box-border flex flex-col justify-center min-h-[auto] min-w-[auto] text-center">
            <div className="text-[12.75px] font-black box-border leading-[15.3px] min-h-[auto] min-w-[auto] uppercase md:text-lg md:leading-[21.6px] animate-pulse-soft">
              {badge}
            </div>
            <div className="text-[11px] font-bold box-border leading-[16px] min-h-[auto] min-w-[auto] uppercase md:text-base md:leading-6">
              {offer}
            </div>
          </div>
          <EarCleanerCountdownTimer initialSeconds={timer_seconds} />
        </div>
      </div>
    </div>
  );
};
