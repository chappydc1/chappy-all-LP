export const AbcNewsNotificationPopover = () => {
  return (
    <div className="static box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] md:relative">
      <div className="box-border caret-transparent outline-[3px]">
        <button className="bg-transparent caret-transparent h-[43px] outline-[3px] text-center text-nowrap w-[45px] mx-px rounded-[50%] font-sansseriffont hover:bg-indigo-200">
          <img
            src="/images/abc-news/icon-3.svg"
            alt="Icon"
            className="box-border caret-transparent inline h-6 outline-[3px] pointer-events-none text-nowrap align-baseline w-6"
          />
        </button>
      </div>
      <div className="absolute bg-white border-t-amber-500 shadow-[rgba(0,0,0,0.75)_0px_6px_24px_-5px] box-border caret-transparent hidden leading-4 outline-[3px] text-left w-full z-[-100000] pt-5 pb-[25px] px-5 border-t-2 right-0 top-[54px] md:w-[460px] md:-right-7 md:top-12">
        <div className="absolute bg-white box-border caret-transparent outline-[3px] -mt-5 border-b-white border-b-2 right-[118px] md:right-[75px] before:accent-auto before:border-b-amber-500 before:box-border before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-none before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:w-0 before:border-t-transparent before:border-x-transparent before:border-separate before:border-[15px] before:border-solid before:left-2/4 before:bottom-full before:font-sansseriffont after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-4 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-0 after:ml-[3px] after:border-t-transparent after:border-b-white after:border-x-transparent after:border-separate after:border-[12px] after:border-solid after:left-2/4 after:bottom-full after:font-sansseriffont"></div>
        <div className="absolute bg-stone-300 box-border caret-transparent h-[18px] outline-[3px] w-[18px] z-[1] rounded-[14px] right-[27px] top-[18px] before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:w-2 before:rounded-[1px] before:border-separate before:left-[5px] before:top-2 before:font-sansseriffont after:accent-auto after:bg-white after:box-border after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-4 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-2 after:rounded-[1px] after:border-separate after:left-[5px] after:top-2 after:font-sansseriffont"></div>
        <span className="text-amber-500 text-xs font-bold box-border caret-transparent block tracking-[2px] outline-[3px] uppercase">
          Interest Successfully Added
        </span>
        <div className="box-border caret-transparent outline-[3px] py-[15px]">
          <div className="text-[21px] box-border caret-transparent flex leading-[24.99px] outline-[3px]">
            We&#39;ll notify you here with news about
          </div>
          <div className="box-border caret-transparent outline-[3px]"></div>
        </div>
        <div className="text-sm box-border caret-transparent flex tracking-[0.2px] leading-[18.06px] outline-[3px]">
          Turn on desktop notifications for breaking stories about interest?{" "}
        </div>
        <label className="relative box-border caret-transparent block h-[30px] outline-[3px] w-[60px] top-2.5">
          <input
            type="checkbox"
            className="bg-transparent box-border caret-transparent hidden leading-[18.4px] outline-[3px] text-start overflow-visible p-0 font-sansseriffont"
          />
          <span className="absolute bg-zinc-50 box-border caret-transparent block outline-[3px] border-zinc-300 rounded-[34px] border-2 border-solid inset-0 before:accent-auto before:bg-stone-300 before:box-border before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-5 before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:w-5 before:rounded-[50%] before:border-separate before:left-1 before:bottom-[3px] before:font-sansseriffont"></span>
          <span className="absolute text-[10px] font-semibold box-border caret-transparent content-['Off'] block outline-[3px] uppercase right-[9px] top-2 before:accent-auto before:bg-stone-300 before:box-border before:caret-transparent before:text-black before:text-[10px] before:not-italic before:normal-nums before:font-semibold before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:uppercase before:invisible before:border-separate before:font-sansseriffont">
            Off
          </span>
        </label>
      </div>
    </div>
  );
};
