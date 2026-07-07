export const JonesDesktopHeader = () => {
  return (
    <div className="sticky items-center self-stretch bg-white box-border caret-transparent hidden shrink-0 h-[60px] justify-center max-w-full min-h-px min-w-0 outline-[3px] z-[2147483647] px-3 py-[15px] top-0 md:flex md:h-auto md:min-w-[auto] md:px-[50px]">
      <div className="relative items-center self-auto box-border caret-transparent flex basis-0 grow shrink justify-center max-w-full min-h-px min-w-0 outline-[3px] w-auto md:self-stretch md:basis-auto md:grow-0 md:shrink-0 md:justify-between md:min-w-[auto] md:w-1/5">
        <picture className="items-center box-border caret-transparent flex basis-auto grow-0 shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-[210px] rounded-[50px] md:basis-0 md:grow md:shrink md:w-auto">
          <img
            src="/images/jones/134.png"
            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
          />
        </picture>
      </div>
      <picture
        role="button"
        className="absolute items-center box-border caret-transparent flex shrink-0 max-w-[400px] object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] left-[30px] top-[45%] md:static md:hidden md:z-auto md:left-auto md:top-auto"
      >
        <img
          src="/images/jones/141.png"
          className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
        />
      </picture>
      <picture
        role="button"
        className="absolute items-center box-border caret-transparent hidden shrink-0 max-w-[400px] object-cover opacity-0 outline-[3px] overflow-x-auto overflow-y-hidden z-0 left-[30px] top-[43%] md:static md:opacity-100 md:z-auto md:left-auto md:top-auto"
      >
        <img
          src="/images/jones/144.png"
          className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
        />
      </picture>
      <div className="relative items-center self-stretch box-border caret-transparent gap-x-[70px] flex basis-0 grow justify-center max-w-full min-h-px outline-[3px] gap-y-[70px]"></div>
      <a
        role="link"
        href="https://www.jonesroadbeauty.com/pages/what-the-foundation-custom-quiz"
        className="text-white text-sm font-bold self-center bg-black box-border caret-transparent hidden shrink-0 tracking-[2px] leading-5 min-h-0 min-w-0 outline-[3px] text-center overflow-hidden px-5 py-3 rounded-[3px] font-basemonowideweb md:text-xs md:block md:min-h-[auto] md:min-w-[auto] md:px-[26px]"
      >
        <span className="text-sm box-border caret-transparent outline-[3px] w-full md:text-xs">
          <p className="text-sm box-border caret-transparent outline-[3px] md:text-xs">
            SHOP NOW
          </p>
        </span>
      </a>
    </div>
  );
};
