import { FealsHeroCta } from "../../Hero/components/HeroCta";

export const FealsHeroContent = () => {
  return (
    <div className="relative text-stone-500 items-center self-stretch bg-stone-50 box-border caret-transparent flex flex-col grow-0 shrink-0 justify-center max-h-[1144px] max-w-full min-h-px min-w-[auto] outline-[3px] font-ll_brown_regular_web md:grow md:shrink">
      <div className="items-center box-border caret-transparent contents shrink-0 justify-center min-h-0 min-w-0 outline-[3px] w-full md:flex md:min-h-[auto] md:min-w-[auto]">
        <div className="relative items-center box-border caret-transparent gap-x-4 flex flex-col-reverse shrink-0 grid-cols-[repeat(1,minmax(0px,1fr))] h-auto justify-center max-w-screen-xl min-h-px min-w-[auto] outline-[3px] gap-y-4 w-full pt-0 pb-6 px-0 md:gap-x-8 md:grid md:flex-row md:grid-cols-[repeat(2,minmax(0px,1fr))] md:h-[480px] md:gap-y-0 md:pt-4 md:px-8">
          <div className="relative items-center self-stretch box-border caret-transparent gap-x-2 flex basis-auto flex-col grow justify-start max-w-full min-h-px outline-[3px] gap-y-2 px-4 md:items-start md:gap-x-4 md:basis-0 md:justify-center md:gap-y-4 md:px-0">
            <div className="text-stone-600 text-[32px] font-medium self-stretch box-border caret-transparent shrink-0 tracking-[-1px] leading-9 min-h-[auto] min-w-[auto] outline-[3px] break-words text-center font-bookmania md:text-5xl md:font-normal md:self-auto md:leading-[54px] md:text-start md:font-bookmania">
              <span className="text-[32px] font-medium box-border caret-transparent leading-9 outline-[3px] break-words text-center w-full font-bookmania md:text-5xl md:font-normal md:leading-[54px] md:text-start md:font-bookmania">
                <h1 className="text-[32px] font-medium box-border caret-transparent leading-9 outline-[3px] break-words text-center font-bookmania md:text-5xl md:font-normal md:leading-[54px] md:text-start md:font-bookmania">
                  5 Reasons Why
                </h1>
                <h1 className="text-[32px] font-medium box-border caret-transparent leading-9 outline-[3px] break-words text-center font-bookmania md:text-5xl md:font-normal md:leading-[54px] md:text-start md:font-bookmania">
                  People are Switching to Microdosed Gummies.
                </h1>
              </span>
            </div>
            <div className="text-stone-600 text-lg self-stretch box-border caret-transparent shrink-0 leading-[25.2px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center md:text-xl md:leading-7 md:text-left">
              <span className="text-lg box-border caret-transparent leading-[25.2px] outline-[3px] break-words text-center w-full md:text-xl md:leading-7 md:text-left">
                <p className="text-lg box-border caret-transparent leading-[25.2px] outline-[3px] break-words text-center md:text-xl md:leading-7 md:text-left">
                  Get the relaxing buzz without the hangover, calories, or
                  regret.
                </p>
              </span>
            </div>
            <FealsHeroCta />
          </div>
          <div className="relative items-center self-stretch box-border caret-transparent flex basis-auto grow-0 shrink-0 h-[260px] justify-center max-w-full min-h-px outline-[3px] md:basis-0 md:grow md:shrink md:h-auto">
            <picture
              role="link"
              className="items-center self-stretch box-border caret-transparent flex basis-0 grow h-auto object-cover outline-[3px] overflow-x-auto overflow-y-hidden md:h-full"
            >
              <img
                src="/images/feals/74.png"
                className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};
