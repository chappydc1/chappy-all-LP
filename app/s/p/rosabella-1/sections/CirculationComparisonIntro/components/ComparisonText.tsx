import copy from "../../../copy.json"

export const ComparisonText = () => {
  const { eyebrow, headline, body } = copy.mechanism;
  return (
    <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] w-full">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div className="text-emerald-800 font-semibold box-border caret-transparent tracking-[-0.32px] leading-[20.8px] outline-[3px] text-left mb-2.5 font-montserrat">
          {eyebrow}
        </div>
        <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-left font-montserrat md:text-[32px] md:leading-[41.6px]">
          {headline}
        </div>
        <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] text-left mt-4 font-montserrat md:text-base md:leading-[20.8px]">
          {body}
        </div>
      </div>
    </div>
  );
};
