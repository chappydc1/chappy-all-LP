export const ReviewCard = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="relative bg-white box-border caret-transparent gap-x-10 grid grid-cols-[1fr] border-slate-800 mt-[35px] p-4 rounded-[10px] border-2 border-solid md:grid-cols-[1fr_1fr] md:mt-8 md:px-6 md:py-8">
        <div className="absolute items-center bg-amber-500 box-border caret-transparent flex h-12 justify-center w-12 z-10 p-2 left-2 -top-2 before:accent-auto before:border-b-amber-600 before:border-r-amber-600 before:box-border before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-2 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-1 before:border-l-transparent before:border-l-[3px] before:border-t-transparent before:border-b-[7px] before:border-separate before:border-r before:border-t before:border-solid before:-left-1 before:top-0 before:font-open_sans after:accent-auto after:border-l-amber-500 after:border-r-amber-500 after:border-t-amber-500 after:box-border after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-b-transparent after:border-x-[24px] after:border-y-[12px] after:border-separate after:border-solid after:left-0 after:top-[38px] after:font-open_sans">
          <span className="text-white text-[26px] font-bold box-border caret-transparent block leading-8 min-h-[auto] min-w-[auto]">
            #1
          </span>
          <div className="absolute box-border caret-transparent h-8 w-full top-[72px]"></div>
        </div>
        <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto]">
          <div className="box-border caret-transparent gap-x-4 flex justify-between min-h-[auto] min-w-[auto] gap-y-4 mb-8">
            <a
              href="https://tagsleyshop.com/pp/us/"
              className="relative text-blue-600 font-semibold box-border caret-transparent block min-h-[auto] min-w-[auto] w-6/12 md:w-auto"
            >
              <img
                src="/images/primepicks/MV8uanBn.jpg"
                alt="product"
                className="aspect-[auto_120_/_120] box-border caret-transparent max-h-[120px] max-w-[120px] w-full mx-auto md:w-[120px] md:mx-0"
              />
            </a>
            <div className="border-l-zinc-100 box-border caret-transparent min-h-[auto] min-w-[auto] w-6/12 pl-[26px] border-l border-solid md:w-auto md:pl-0 md:border-l-black md:border-l-0">
              <div className="box-border caret-transparent flex justify-center">
                <span className="text-zinc-800 text-sm font-bold box-border caret-transparent block leading-[18px] min-h-[auto] min-w-[auto] text-center">
                  Review Score
                </span>
              </div>
              <h4 className="text-zinc-800 text-4xl font-bold box-border caret-transparent leading-10 text-center">
                9.8
              </h4>
              <img
                src="/images/primepicks/green-stars.svg"
                alt="Stars Rating"
                className="aspect-[auto_98_/_18] box-border caret-transparent max-w-full w-[98px] mx-auto my-1"
              />
              <div className="text-neutral-600 text-sm font-semibold box-border caret-transparent leading-[18px] text-center">
                Excellent
              </div>
              <div className="text-zinc-500 text-xs box-border caret-transparent leading-4 text-center break-all">
                9,137 Customer Reviews
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            <div className="box-border caret-transparent flex justify-between mb-1">
              <span className="text-zinc-800 text-xs font-semibold box-border caret-transparent block leading-3 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                Quality
              </span>
              <span className="text-zinc-800 text-xs font-bold box-border caret-transparent block leading-3 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                10
              </span>
            </div>
            <div className="relative bg-neutral-200 box-border caret-transparent h-3 w-full mr-5 mb-2 rounded-sm">
              <div className="absolute bg-emerald-500 box-border caret-transparent h-full w-full rounded-sm left-0 top-0"></div>
            </div>
            <div className="box-border caret-transparent flex justify-between mb-1">
              <span className="text-zinc-800 text-xs font-semibold box-border caret-transparent block leading-3 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                Easy to Use
              </span>
              <span className="text-zinc-800 text-xs font-bold box-border caret-transparent block leading-3 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                10
              </span>
            </div>
            <div className="relative bg-neutral-200 box-border caret-transparent h-3 w-full mr-5 mb-2 rounded-sm">
              <div className="absolute bg-emerald-500 box-border caret-transparent h-full w-full rounded-sm left-0 top-0"></div>
            </div>
            <div className="box-border caret-transparent flex justify-between mb-1">
              <span className="text-zinc-800 text-xs font-semibold box-border caret-transparent block leading-3 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                Price
              </span>
              <span className="text-zinc-800 text-xs font-bold box-border caret-transparent block leading-3 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                9
              </span>
            </div>
            <div className="relative bg-neutral-200 box-border caret-transparent h-3 w-full mr-5 mb-2 rounded-sm">
              <div className="absolute bg-emerald-500 box-border caret-transparent h-full w-[90%] rounded-sm left-0 top-0"></div>
            </div>
            <div className="box-border caret-transparent flex justify-between mb-1">
              <span className="text-zinc-800 text-xs font-semibold box-border caret-transparent block leading-3 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                Support
              </span>
              <span className="text-zinc-800 text-xs font-bold box-border caret-transparent block leading-3 min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                9
              </span>
            </div>
            <div className="relative bg-neutral-200 box-border caret-transparent h-3 w-full mr-5 mb-2 rounded-sm">
              <div className="absolute bg-emerald-500 box-border caret-transparent h-full w-[90%] rounded-sm left-0 top-0"></div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
          <h4 className="text-zinc-800 text-2xl font-bold box-border caret-transparent leading-8 text-center mb-2">
            #1 Tracking Card of 2026
          </h4>
          <span className="text-neutral-600 text-sm box-border caret-transparent leading-5 font-open_sans">
            <p className="box-border caret-transparent mb-2.5">
              Tagsley delivers pinpoint tracking accuracy, fast charging,
              5-month battery life, and credit card thickness in one sleek
              design. Its Apple “Find My” integration provides worldwide
              tracking coverage while wireless charging keeps you powered up.
              Perfect for anyone who wants to never lose their personal
              belongings again.
            </p>
          </span>
          <div className="items-center box-border caret-transparent gap-x-1 flex justify-center gap-y-1 mt-4 md:gap-x-2 md:gap-y-2">
            <a
              href="https://tagsleyshop.com/pp/us/"
              className="relative text-blue-600 font-semibold box-border caret-transparent block min-h-[auto] min-w-[auto]"
            >
              <span className="text-red-700 text-sm font-bold box-border caret-transparent leading-4 text-center font-open_sans">
                Limited Time Deal:
              </span>
            </a>
            <a
              href="https://tagsleyshop.com/pp/us/"
              className="relative text-white text-sm font-bold items-center bg-red-700 box-border caret-transparent gap-x-1 block leading-4 min-h-[auto] min-w-[auto] gap-y-1 px-2 py-1 rounded-[5px]"
            >
              70% Off
            </a>
          </div>
          <a
            href="https://tagsleyshop.com/pp/us/"
            className="relative text-white text-xl font-bold items-center bg-indigo-600 shadow-[rgb(2,26,49)_0px_2px_0px_0px] box-border caret-transparent gap-x-1.5 flex justify-center min-w-[210px] gap-y-1.5 text-center w-full mt-4 mb-[22px] px-6 py-5 rounded-[15px]"
          >
            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto]">
              Click Here to Get 70%{" "}
            </span>
            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto]">
              <img
                src="/images/primepicks/icon-1.svg"
                alt="Icon"
                className="box-border caret-transparent h-3.5 w-[15px]"
              />
            </span>
          </a>
          <div className="relative items-start bg-white shadow-[rgba(0,0,0,0.15)_0px_1px_10px_0px] box-border caret-transparent flex w-fit mx-auto p-2 rounded-[10px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:translate-x-[-5px] after:visible after:border-b-white after:border-b-[10px] after:border-x-transparent after:border-x-[5px] after:border-separate after:border-solid after:left-2/4 after:-top-2.5 after:font-open_sans">
            <img
              src="/images/primepicks/subtract.svg"
              alt="PrimePicks.Review"
              className="aspect-[auto_16_/_16] box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] w-4 mr-1"
            />
            <span className="text-sky-900 text-xs font-semibold box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] text-left ml-1">
              2,184 people bought this week
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
