import media from "../media.json";

export type CookieCategoryProps = {
  containerVariant: string;
  firstIconWrapperVariant: string;
  secondIconWrapperVariant: string;
  title: string;
  isAlwaysActive: boolean;
  description: string;
  descriptionVariant: string;
};

export const CookieCategory = (props: CookieCategoryProps) => {
  const { icons } = media;

  return (
    <div
      className={`box-border caret-transparent gap-x-3 flex justify-between outline-[3px] gap-y-3 border-zinc-300 py-3 border-b border-solid ${props.containerVariant}`}
    >
      <button className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] caret-transparent flex h-5 justify-center outline-[3px] text-center w-5 p-0 rounded-full">
        <div className={`box-border caret-transparent outline-[3px] ${props.firstIconWrapperVariant}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icons.cookieOn.src} alt={icons.cookieOn.alt} className="box-border caret-transparent h-3 outline-[3px] w-3" />
        </div>
        <div className={`box-border caret-transparent outline-[3px] ${props.secondIconWrapperVariant}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icons.cookieOff.src} alt={icons.cookieOff.alt} className="box-border caret-transparent h-3 outline-[3px] w-3" />
        </div>
      </button>
      <div className="box-border caret-transparent gap-x-2 flex flex-col outline-[3px] gap-y-2 w-full">
        <div className="items-center box-border caret-transparent flex justify-between outline-[3px]">
          <span className="text-xs font-semibold box-border caret-transparent block leading-5 outline-[3px]">
            {props.title}
          </span>
          <div className="box-border caret-transparent outline-[3px]"></div>
          {props.isAlwaysActive ? (
            <>
              <span className="text-blue-500 text-xs font-bold box-border caret-transparent block leading-[18px] outline-[3px]">
                Always Active
              </span>
              <div className="box-border caret-transparent outline-[3px]"></div>
            </>
          ) : (
            <>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent flex outline-[3px]">
                <label className="items-center box-border caret-transparent flex outline-[3px] mb-2">
                  <div className="relative bg-blue-500 box-border caret-transparent h-5 outline-[3px] w-9 rounded-full after:accent-auto after:bg-white after:box-border after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-4 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-4 after:border after:rounded-full after:border-separate after:border-solid after:border-white after:left-0.5 after:top-0.5 after:font-montserrat"></div>
                </label>
              </div>
            </>
          )}
        </div>
        <p className={`text-xs box-border caret-transparent leading-[18px] outline-[3px] ${props.descriptionVariant}`}>
          {props.description}
        </p>
      </div>
    </div>
  );
};
