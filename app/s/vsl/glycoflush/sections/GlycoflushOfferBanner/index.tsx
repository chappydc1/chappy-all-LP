import { GlycoflushCountdownTimer } from "../GlycoflushOfferBanner/components/GlycoflushCountdownTimer";

export const GlycoflushOfferBanner = () => {
  return (
    <div className="relative bg-red-800 box-border caret-transparent hidden flex-col max-w-full outline-[3px] w-full z-20 mx-auto px-[15px] md:z-[2] md:px-5">
      <div className="items-center box-border caret-transparent gap-x-2.5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] outline-[3px] gap-y-2.5 w-full mx-auto py-[5px] md:flex-nowrap md:max-w-[min(100%,1140px)] md:pt-10 md:pb-5">
        <div className="relative self-center box-border caret-transparent gap-x-2.5 hidden max-w-full outline-[3px] gap-y-2.5 text-center w-[95%] md:self-auto md:w-auto">
          <h2 className="text-white text-2xl font-semibold box-border caret-transparent leading-[28.8px] outline-[3px] font-poppins md:text-[32px] md:leading-[38.4px]">
            Claim your Discounted Glyco Lean now
            <span className="text-yellow-400 text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] md:text-[32px] md:leading-[38.4px]">
              <b className="text-2xl font-black box-border caret-transparent leading-[28.8px] outline-[3px] md:text-[32px] md:leading-[38.4px]">
                While Supplies Last!
              </b>
            </span>
          </h2>
        </div>
        <GlycoflushCountdownTimer />
      </div>
    </div>
  );
};
