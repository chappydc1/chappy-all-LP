export const StickyBanner = () => {
  return (
    <section className="fixed text-white items-center bg-zinc-800 shadow-[rgba(0,0,0,0.25)_0px_0px_4px_0px] box-border caret-transparent block max-h-0 w-full z-[100] p-2 -bottom-4 md:hidden">
      <div className="items-center bg-slate-800 box-border caret-transparent flex">
        <div className="text-xs font-bold bg-emerald-600 box-border caret-transparent h-full leading-4 min-h-[auto] min-w-[auto] px-[18px] py-0.5 md:text-base md:leading-6 md:min-h-0 md:min-w-0">
          <span className="text-xs box-border caret-transparent leading-4 md:text-base md:leading-6">
            #1
          </span>
        </div>
        <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] px-2 md:min-h-0 md:min-w-0">
          <span className="text-xs font-bold box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] capitalize md:text-sm md:leading-5 md:min-h-0 md:min-w-0">
            best seller
          </span>
          <a
            href="https://tagsleyshop.com/pp/us/"
            className="relative text-xs font-bold box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] ml-2 pl-2 border-l border-solid border-white md:text-sm md:leading-5 md:min-h-0 md:min-w-0 hover:text-blue-600 hover:border-b-blue-600 hover:border-r-blue-600 hover:border-t-blue-600"
          >
            Tagsley
          </a>
        </div>
      </div>
      <div className="bg-white box-border caret-transparent gap-x-6 grid grid-cols-[max-content_1fr] grid-rows-[1fr] justify-between gap-y-6 p-2 md:gap-x-[normal] md:flex md:grid-cols-none md:grid-rows-none md:gap-y-[normal] md:pb-3.5">
        <div className="items-center box-border caret-transparent gap-x-2 grid grid-cols-[40px_1px_1fr] grid-rows-[repeat(2,20px)] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <img
            src="/images/primepicks/MV8uanBn.jpg"
            alt="PrimePicks.Review image"
            className="box-border caret-transparent col-end-2 col-start-1 row-end-3 row-start-1 h-10 max-w-full min-h-[auto] min-w-[auto] w-10 md:min-h-0 md:min-w-0"
          />
          <div className="bg-zinc-100 box-border caret-transparent col-end-3 col-start-2 row-end-3 row-start-1 h-full min-h-[auto] min-w-[auto] w-px md:min-h-0 md:min-w-0"></div>
          <div className="items-baseline box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] gap-y-1 md:min-h-0 md:min-w-0">
            <span className="text-zinc-800 text-xs font-bold box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] md:text-sm md:min-h-0 md:min-w-0">
              9.8
            </span>
            <img
              src="/images/primepicks/star-5.svg"
              alt="PrimePicks.Review image"
              className="box-border caret-transparent col-end-4 col-start-3 row-end-2 row-start-1 h-3 max-w-full min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
            />
          </div>
          <span className="text-neutral-600 text-xs font-semibold box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] md:text-sm md:min-h-0 md:min-w-0">
            Excellent
          </span>
        </div>
        <a
          href="https://tagsleyshop.com/pp/us/"
          className="relative text-base font-bold items-center bg-indigo-600 shadow-[rgb(2,26,49)_0px_2px_0px_0px] box-border caret-transparent gap-x-3 flex justify-center leading-4 min-h-[auto] min-w-[auto] gap-y-3 text-center uppercase px-2 py-3 rounded-[15px] md:text-xl md:leading-6 md:min-h-0 md:min-w-[167px] md:px-0 md:py-2"
        >
          Visit Site
        </a>
      </div>
    </section>
  );
};
