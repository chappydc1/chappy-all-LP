export const ComparisonTable = () => {
  return (
    <div className="box-border caret-transparent flex max-w-[774px] outline-[3px] w-full mt-[76px] md:mt-[139px] mx-auto">
      <div className="relative bg-pink-400 box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] w-full pt-[42px] pb-4 rounded-bl rounded-br rounded-tl rounded-tr md:pt-8">
        <img
          title=""
          src="/lp-images-files-videos-fonts/p/rosabella-1/1779537039377_beet_img_1_.webp"
          alt=""
          className="absolute text-black box-border caret-transparent max-h-[70px] max-w-full outline-[3px] top-[-52px] translate-x-[-50.0%] left-2/4 md:max-h-[152px] md:top-[-113px]"
        />
        <div className="box-border caret-transparent outline-[3px] w-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="items-center box-border caret-transparent flex h-[70px] justify-center outline-[3px] w-full md:h-[74px]"
            >
              <img
                title=""
                src="/lp-images-files-videos-fonts/p/rosabella-1/31.svg"
                alt=""
                className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[23px] md:w-[37px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="box-border caret-transparent basis-[43.75%] shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-[43.75%] pt-[42px] pb-4 md:basis-[46%] md:w-[46%] md:pt-8">
        {[
          "1,300mg Pure Beetroot Per Serving",
          "Naturally Rich in Nitrates",
          "One Ingredient, Nothing Hidden",
          "Supports Daily Blood Flow",
          "Third Party Tested",
          "90 Day Money Back Guarantee",
        ].map((label, i, arr) => (
          <div
            key={i}
            className={`items-center box-border caret-transparent flex h-[70px] justify-center outline-[3px] w-full px-2.5 md:h-[74px]${i < arr.length - 1 ? " border-stone-200 border-b border-solid" : ""}`}
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
          src="/lp-images-files-videos-fonts/p/rosabella-1/29.avif"
          alt=""
          className="absolute text-black box-border caret-transparent max-h-[70px] max-w-full outline-[3px] top-[-52px] translate-x-[-50.0%] left-2/4 md:max-h-[152px] md:top-[-113px]"
        />
        <div className="box-border caret-transparent outline-[3px] w-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="items-center box-border caret-transparent flex h-[70px] justify-center outline-[3px] w-full md:h-[74px]"
            >
              <img
                title=""
                src="/lp-images-files-videos-fonts/p/rosabella-1/32.svg"
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
