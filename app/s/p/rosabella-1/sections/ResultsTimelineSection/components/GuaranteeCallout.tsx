import copy from "../../../copy.json"
import media from "../../../media.json"

export const GuaranteeCallout = () => {
  const { title, text } = copy.resultsTimeline.guarantee;
  return (
    <div className="bg-[linear-gradient(270deg,rgb(245,250,247)_0px,rgb(245,250,247)_100%)] box-border caret-transparent max-w-[706px] outline-[3px] w-full border border-gray-300 mt-[30px] p-3 rounded-sm border-solid md:mt-[54px] md:p-6">
      <div className="items-center box-border caret-transparent flex outline-[3px] w-full">
        <img
          title=""
          src={media.icons.guaranteeShield}
          alt=""
          className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[21px] mr-2"
        />
        <div className="text-base font-semibold box-border caret-transparent tracking-[-0.32px] leading-[20.8px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-xl md:leading-[26px]">
          {title}
        </div>
      </div>
      <div className="text-black text-sm box-border caret-transparent tracking-[-0.32px] leading-[18.2px] outline-[3px] text-left mt-2 font-montserrat md:text-base md:leading-[20.8px]">
        {text}
      </div>
    </div>
  );
};
