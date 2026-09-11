import copy from "../../../copy.json"
import media from "../../../media.json"

export const SupplementComparison = () => {
  const { comparisonHeading, comparisonCallout } = copy.circulationComparison;
  return (
    <div className="box-border caret-transparent basis-full shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full md:basis-[578px] md:w-[578px]">
      <div className="box-border caret-transparent outline-[3px] w-full">
        <div className="text-black text-xl font-semibold box-border caret-transparent tracking-[-0.96px] leading-[26px] outline-[3px] font-montserrat md:text-2xl md:leading-[31.2px]">
          {comparisonHeading}
        </div>
        <img
          title=""
          src={media.circulationComparison.statsChart}
          alt=""
          className="text-black box-border caret-transparent inline max-w-full outline-[3px] w-[264px] mt-6"
        />
        <div className="bg-neutral-100 box-border caret-transparent outline-[3px] w-full mt-6 p-4 rounded-lg">
          <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
            {comparisonCallout}
          </div>
        </div>
      </div>
    </div>
  );
};
