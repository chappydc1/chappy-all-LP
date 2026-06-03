import { CountdownTimer } from "../AnnouncementBar/components/CountdownTimer";

export const AnnouncementBar = () => {
  return (
    <div className="sticky box-border z-[99999] top-0">
      <div className="relative box-border flex flex-col w-full">
        <div className="text-white items-center bg-indigo-900 box-border gap-x-2 flex justify-center min-h-[auto] min-w-[auto] gap-y-2 w-full px-[1%] py-2 md:gap-x-5 md:gap-y-5 md:px-0 animate-fade-in">
          <div className="items-center box-border flex flex-col justify-center min-h-[auto] min-w-[auto]">
            <div className="text-[12.75px] font-black box-border leading-[15.3px] min-h-[auto] min-w-[auto] uppercase md:text-lg md:leading-[21.6px] animate-pulse-soft">
              🌼 SPRING SPECIAL 🌸
            </div>
            <div className="text-[12.1875px] font-bold box-border leading-[18.2812px] min-h-[auto] min-w-[auto] uppercase md:text-base md:leading-6">
              UP TO 58% OFF WITH FREE GIFTS
            </div>
          </div>
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};
