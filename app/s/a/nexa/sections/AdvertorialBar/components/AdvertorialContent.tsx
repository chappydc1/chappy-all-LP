// @ts-nocheck
import adv from "../../../adv.json";
import media from "../../../media.json";

export const AdvertorialContent = () => {
  return (
    <div className="relative box-border caret-transparent basis-full grow max-w-full min-h-[25px] outline-[3px] w-min p-px md:basis-0">
      <div className="self-center bg-transparent box-border caret-transparent flex justify-around outline-[3px] w-full pl-2.5 pr-[15px] py-2 md:justify-between md:py-3">
        <img
          title=""
          src={media.logo}
          href=""
          alt=""
          className="text-black box-border caret-transparent hidden basis-[0%] shrink-0 h-[17px] max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[78.414px] rounded-[1px] md:block md:h-5 md:min-h-[auto] md:min-w-[auto] md:w-[35px]"
        />
        <div className="text-sm self-center box-border caret-transparent leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] w-2/5 px-0 font-montserrat md:text-base md:leading-4 md:w-full md:px-2.5">
          <div className="text-stone-500 text-xs box-border caret-transparent leading-3 outline-[3px] p-px md:text-sm md:leading-[14px]">
            {adv.advertorialBar.label}
          </div>
        </div>
        <div className="items-center self-center box-border caret-transparent hidden justify-end min-h-0 min-w-0 outline-[3px] w-[30%] px-2.5 md:flex md:min-h-[auto] md:min-w-[auto]">
          <img
            title=""
            src={media.flag}
            href=""
            alt=""
            className="text-black box-border caret-transparent inline h-[13px] max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[21px] mr-2.5 md:block md:h-4 md:min-h-[auto] md:min-w-[auto] md:w-[27px]"
          />
          <div className="text-[11px] font-semibold box-border caret-transparent leading-[11px] min-h-0 min-w-0 outline-[3px] p-px font-montserrat md:text-xs md:leading-3 md:min-h-[auto] md:min-w-[auto]">
            {adv.advertorialBar.trendingText}
          </div>
        </div>
      </div>
    </div>
  );
};
