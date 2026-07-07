export const TodayNewsBar = () => {
  return (
    <div className="items-center border-b-gray-200 border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent gap-x-2.5 flex max-w-[1200px] outline-[3px] gap-y-2.5 mx-auto px-3 py-2 border-b border-solid md:gap-x-3.5 md:gap-y-3.5 md:px-5 md:py-2.5">
      <div className="relative text-zinc-800 text-[11px] font-bold items-center bg-zinc-100 border-b-gray-200 border-l-orange-400 border-r-gray-200 border-t-gray-200 box-border caret-transparent flex tracking-[0.5px] leading-[16.5px] min-h-[auto] min-w-[auto] outline-[3px] uppercase text-nowrap px-3 py-[3px] border-l-4 border-solid md:text-[13px] md:leading-[19.5px] md:px-4 md:py-1.5">
        BREAKING NEWS
      </div>
      <span className="text-zinc-800 text-xs box-border caret-transparent block leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[13px] md:leading-[19.5px]">
        May. 6, 2026, 10:49 PM UTC
      </span>
    </div>
  );
};
