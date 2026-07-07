import adv from "../copy.json";
import media from "../media.json";
import { DerilaCookieCategory } from "./CookieCategory";

export const DerilaCookiePreferences = () => {
  const { cookies } = adv;
  const { icons } = media;

  return (
    <div className="fixed bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent gap-x-3 hidden flex-col max-w-none outline-[3px] gap-y-3 w-fit z-[1000000] m-2 p-4 rounded-2xl bottom-0 inset-x-0 md:max-w-[359px] md:m-6 md:px-6">
      <div className="box-border caret-transparent flex justify-between outline-[3px]">
        <p className="text-sm font-semibold box-border caret-transparent leading-[21px] outline-[3px]">
          {cookies.title}
        </p>
        <button className="bg-transparent caret-transparent block h-5 outline-[3px] text-center p-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icons.cookieClose.src} alt={icons.cookieClose.alt} className="box-border caret-transparent h-5 outline-[3px]" />
        </button>
      </div>
      <div className="box-border caret-transparent max-h-[400px] outline-[3px] overflow-auto">
        <p className="text-xs box-border caret-transparent leading-[18px] outline-[3px] pb-2">
          {cookies.intro}{" "}
          <a
            href={cookies.cookiePolicyUrl}
            className="text-red-400 box-border caret-transparent outline-[3px] underline hover:text-fuchsia-600 hover:no-underline"
          >
            {cookies.cookiePolicyText}
          </a>
        </p>
        <p className="text-xs font-semibold box-border caret-transparent leading-[18px] outline-[3px] mb-4">
          {cookies.controlText}
        </p>
        <div className="bg-zinc-100 box-border caret-transparent outline-[3px] p-4 rounded-[10px]">
          <div className="box-border caret-transparent outline-[3px]"></div>
          {cookies.categories.map((cat, i) => (
            <DerilaCookieCategory
              key={cat.title}
              containerVariant={i === 0 ? "items-start" : "items-center"}
              firstIconWrapperVariant={i === 0 ? "" : "hidden"}
              secondIconWrapperVariant={i === 0 ? "hidden" : ""}
              title={cat.title}
              isAlwaysActive={cat.alwaysActive}
              description={cat.description}
              descriptionVariant={i === 0 ? "" : "hidden"}
            />
          ))}
        </div>
      </div>
      <button className="text-xs font-semibold bg-blue-500 caret-transparent leading-[18px] outline-[3px] text-center w-full px-0 py-1.5 rounded-[10px]">
        {cookies.saveButton}
      </button>
    </div>
  );
};
