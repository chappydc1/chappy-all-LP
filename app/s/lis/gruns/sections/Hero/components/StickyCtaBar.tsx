export const GrunsStickyCtaBar = () => {
  return (
    <div className="fixed bg-neutral-200 box-border caret-transparent outline-[3px] translate-y-[100.0%] z-[9] p-4 top-auto bottom-0 inset-x-0 md:translate-y-[-100.0%] md:px-9 md:py-3 md:top-0 md:bottom-auto">
      <div className="[align-items:normal] box-border caret-transparent block justify-normal max-w-[420px] outline-[3px] w-auto mx-auto md:items-center md:flex md:justify-between md:max-w-[1140px] md:w-full">
        <div className="box-border caret-transparent hidden min-h-0 min-w-0 order-none outline-[3px] md:block md:min-h-[auto] md:min-w-[auto] md:order-1">
          <img
            src="/images/gruns/icon-8.svg"
            alt="Icon"
            className="box-border caret-transparent h-[30px] outline-[3px] w-[70px]"
          />
        </div>
        <a
          href="#offers"
          className="text-white text-lg font-semibold items-center bg-green-700 box-border caret-transparent flex h-14 justify-center tracking-[-0.54px] leading-[28.8px] min-h-0 min-w-0 order-none outline-[3px] w-full mb-2 px-8 py-0 rounded-[3.35544e+07px] md:text-base md:h-full md:tracking-[-0.48px] md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto] md:order-3 md:w-max md:mb-0 md:px-6 md:py-3"
        >
          Save 52% + Free Shipping
        </a>
        <div className="items-center box-border caret-transparent gap-x-2 flex justify-center min-h-0 min-w-0 order-none outline-[3px] gap-y-2 md:gap-x-3 md:justify-between md:min-h-[auto] md:min-w-[auto] md:order-2 md:gap-y-3">
          <div className="items-center box-border caret-transparent gap-x-0.5 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-0.5">
            <img
              src="/images/gruns/icon-9.svg"
              alt="Icon"
              className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
            />
            <img
              src="/images/gruns/icon-9.svg"
              alt="Icon"
              className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
            />
            <img
              src="/images/gruns/icon-9.svg"
              alt="Icon"
              className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
            />
            <img
              src="/images/gruns/icon-9.svg"
              alt="Icon"
              className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
            />
            <img
              src="/images/gruns/icon-9.svg"
              alt="Icon"
              className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
            />
          </div>
          <div className="box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 md:gap-x-2.5 md:gap-y-2.5">
            <div className="text-xs font-medium box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[22.4px]">
              <span className="text-green-700 text-xs box-border caret-transparent leading-3 outline-[3px] md:text-sm md:leading-[22.4px]">
                4.8
              </span>
              stars
            </div>
            <div className="text-xs font-medium box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[22.4px]">
              •
            </div>
            <div className="text-xs font-medium box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[22.4px]">
              <span className="text-green-700 text-xs box-border caret-transparent leading-3 outline-[3px] md:text-sm md:leading-[22.4px]">
                100K+
              </span>
              reviews
            </div>
            <div className="text-xs font-medium box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[22.4px]">
              •
            </div>
            <div className="text-xs font-medium box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[22.4px]">
              <span className="text-green-700 text-xs box-border caret-transparent leading-3 outline-[3px] md:text-sm md:leading-[22.4px]">
                1M+
              </span>
              members
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
