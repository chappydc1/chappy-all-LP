import { GlycoflushVideoPlayer } from "../GlycoflushVideoSection/components/GlycoflushVideoPlayer";

export const GlycoflushVideoSection = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] outline-[3px] gap-y-5 w-full pt-2.5 px-2.5 md:flex-nowrap md:pt-0 md:px-0">
      <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] outline-[3px] gap-y-5 w-full">
        <GlycoflushVideoPlayer />
      </div>
      <div className="relative box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] outline-[3px] gap-y-5 w-full pt-2.5 pb-0 px-0 md:flex-nowrap md:p-5">
        <div className="relative box-border caret-transparent gap-x-5 hidden max-w-full outline-[3px] gap-y-5"></div>
      </div>
    </div>
  );
};
