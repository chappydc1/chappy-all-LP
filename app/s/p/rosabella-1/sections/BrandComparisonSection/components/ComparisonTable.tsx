import copy from "../../../copy.json"
import media from "../../../media.json"

export const ComparisonTable = () => {
  const { features } = copy.brandComparison;
  return (
    <div className="box-border caret-transparent flex max-w-[774px] outline-[3px] w-full mt-[76px] md:mt-[139px] mx-auto">
      <div className="relative bg-pink-400 box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] w-full pt-[42px] pb-4 rounded-bl rounded-br rounded-tl rounded-tr md:pt-8">
        <img
          title=""
          src={media.brandComparison.rosabellaBottle}
          alt=""
          className="absolute text-black box-border caret-transparent max-h-[70px] max-w-full outline-[3px] top-[-52px] translate-x-[-50.0%] left-2/4 md:max-h-[152px] md:top-[-113px]"
        />
        <div className="box-border caret-transparent outline-[3px] w-full">
          {features.map((_, i) => (
            <div
              key={i}
              className="items-center box-border caret-transparent flex h-[70px] justify-center outline-[3px] w-full md:h-[74px]"
            >
              <img
                title=""
                src={media.brandComparison.checkIcon}
                alt=""
                className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[23px] md:w-[37px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="box-border caret-transparent basis-[43.75%] shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[43.75%] pt-[42px] pb-4 md:basis-[46%] md:w-[46%] md:pt-8">
        {features.map((label, i) => (
          <div
            key={i}
            className={`items-center box-border caret-transparent flex h-[70px] justify-center outline-[3px] w-full px-2.5 md:h-[74px]${i < features.length - 1 ? " border-stone-200 border-b border-solid" : ""}`}
          >
            <div className="text-[15px] box-border caret-transparent tracking-[-0.4px] leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] font-montserrat md:text-xl md:leading-[26px] text-center">
              {label}
            </div>
          </div>
        ))}
      </div>
      <div className="relative bg-zinc-100 box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] w-full pt-[42px] pb-4 rounded-bl rounded-br rounded-tl rounded-tr md:pt-8">
        <img
          title=""
          src={media.brandComparison.competitorImage}
          alt=""
          className="absolute text-black box-border caret-transparent max-h-[70px] max-w-full outline-[3px] top-[-52px] translate-x-[-50.0%] left-2/4 md:max-h-[152px] md:top-[-113px]"
        />
        <div className="box-border caret-transparent outline-[3px] w-full">
          {features.map((_, i) => (
            <div
              key={i}
              className="items-center box-border caret-transparent flex h-[70px] justify-center outline-[3px] w-full md:h-[74px]"
            >
              <img
                title=""
                src={media.brandComparison.crossIcon}
                alt=""
                className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[23px] md:w-[37px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
