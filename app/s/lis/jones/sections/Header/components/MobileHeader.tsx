export const MobileHeader = () => {
  return (
    <div className="sticky items-center self-stretch bg-white box-border caret-transparent flex shrink-0 h-[60px] justify-between max-w-full min-h-px min-w-[auto] outline-[3px] z-[2147483647] px-3 py-2.5 top-0 md:hidden md:h-auto md:min-w-0 md:px-[50px]">
      <div className="relative items-center self-auto box-border caret-transparent flex basis-0 grow shrink justify-center max-w-full min-h-px outline-[3px] w-auto md:self-stretch md:basis-auto md:grow-0 md:shrink-0 md:justify-between md:w-1/5">
        <picture className="items-center box-border caret-transparent flex basis-auto grow-0 shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-[210px] rounded-[50px] md:basis-0 md:grow md:shrink md:w-auto">
          <img
            src="/images/jones/134.png"
            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
          />
        </picture>
      </div>
      <picture
        role="button"
        className="absolute items-center box-border caret-transparent flex shrink-0 max-w-[400px] object-cover outline-[3px] overflow-x-auto overflow-y-hidden translate-y-[-50.0%] z-[1000000] left-[30px] top-[45%] md:static md:hidden md:transform-none md:z-auto md:left-auto md:top-auto"
      >
        <img
          src="/images/jones/141.png"
          className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
        />
      </picture>
      <picture
        role="button"
        className="absolute items-center box-border caret-transparent hidden shrink-0 max-w-[400px] object-cover opacity-0 outline-[3px] overflow-x-auto overflow-y-hidden z-0 ml-[5px] left-[30px] top-[43%] md:static md:opacity-100 md:z-auto md:ml-0 md:left-auto md:top-auto"
      >
        <img
          src="/images/jones/144.png"
          className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
        />
      </picture>
      <a
        role="link"
        href="https://jonesroadbeauty.com/pages/miracle-balm-quiz/"
        className="text-white text-sm font-thin bg-black box-border caret-transparent hidden shrink-0 h-[46px] tracking-[2px] leading-5 outline-[3px] text-center w-[210px] overflow-hidden px-5 py-3 rounded-[3px] font-basemonowideweb md:text-base md:inline md:px-[25px]"
      >
        <span className="text-sm box-border caret-transparent outline-[3px] w-full md:text-base">
          <p className="text-sm box-border caret-transparent outline-[3px] md:text-base">
            FIND MY SHADE
          </p>
        </span>
      </a>
      <div className="absolute items-center self-auto bg-stone-100 box-border caret-transparent gap-x-0 hidden basis-auto flex-col grow-0 shrink-0 justify-center max-w-full min-h-px outline-[3px] gap-y-0 w-full z-[1] left-0 top-20 md:relative md:self-stretch md:bg-transparent md:gap-x-[70px] md:basis-0 md:flex-row md:grow md:shrink md:gap-y-[70px] md:w-auto md:z-auto md:left-auto md:top-auto">
        <a
          role="link"
          href="https://jonesroadbeauty.com/pages/wtf-quiz"
          className="text-white text-sm font-normal self-start bg-black box-border caret-transparent flex grow shrink tracking-[2px] leading-5 outline-[3px] text-center w-auto overflow-hidden ml-[50px] my-[30px] px-5 py-3 rounded-lg font-basemonowideweb md:text-xs md:font-bold md:self-auto md:inline md:grow-0 md:shrink-0 md:w-1/5 md:ml-0 md:my-0 md:px-8"
        >
          <span className="text-sm font-normal box-border caret-transparent block outline-[3px] w-full md:text-xs md:font-bold md:inline">
            <p className="text-sm font-normal box-border caret-transparent outline-[3px] md:text-xs md:font-bold">
              SHOP NOW
            </p>
          </span>
        </a>
      </div>
      <div className="absolute box-border caret-transparent h-0 outline-[3px] pointer-events-none w-0 left-0 top-0"></div>
    </div>
  );
};
