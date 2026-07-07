export const AbcNewsLivePromo = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] mb-10 mx-auto">
      <div className="box-border caret-transparent flex outline-[3px] py-[18px]">
        <span className="relative bg-zinc-100 box-border caret-transparent block h-[18px] min-h-0 min-w-0 outline-[3px] w-[18px] mr-2 mt-1 rounded-[50%] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:bg-red-600 before:box-border before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-2 before:tracking-[normal] before:leading-[18.4px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-2 before:rounded-[50%] before:border-separate before:left-[5px] before:top-[5px] before:font-sansseriffont"></span>
        <h3 className="text-[22px] font-bold box-border caret-transparent tracking-[-0.66px] leading-6 min-h-0 min-w-0 outline-[3px] align-top font-post_grotesk md:text-2xl md:tracking-[-0.72px] md:leading-[26px] md:min-h-[auto] md:min-w-[auto]">
          ABC News Live
        </h3>
      </div>
      <figure className="relative box-border caret-transparent max-w-full outline-[3px] overflow-hidden rounded-md">
        <div className="relative box-border caret-transparent outline-[3px] overflow-hidden pb-[56.25%]"></div>
        <div className="absolute box-border caret-transparent outline-[3px] w-full z-[2] inset-0">
          <img
            alt="ABC News Live"
            src="/images/abc-news/53.jpg"
            className="box-border caret-transparent inline outline-[3px] align-top w-full"
          />
        </div>
      </figure>
      <p className="text-stone-500 text-sm box-border caret-transparent tracking-[-0.28px] leading-[18px] outline-[3px] mt-2 font-post_grotesk md:leading-5">
        24/7 coverage of breaking news and live events
      </p>
    </div>
  );
};
