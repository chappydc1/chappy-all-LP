export const DesktopHeader = () => {
  return (
    <div className="items-center box-border caret-transparent hidden justify-around outline-[3px] w-full md:flex">
      <div className="self-stretch box-border caret-transparent flex basis-0 grow shrink-0 justify-start outline-[3px]">
        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] py-[15px]">
          <a
            href="/"
            className="relative box-border caret-transparent block max-w-[187.5px] outline-[3px] w-[90px] md:max-w-screen-sm"
          >
            <img
              alt="Feals"
              className="aspect-[auto_689_/_226] box-border caret-transparent opacity-0 outline-[3px] align-baseline invisible w-full"
            />
          </a>
        </div>
      </div>
      <div className="self-stretch box-border caret-transparent flex outline-[3px]">
        <nav className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent flex h-full outline-[3px]">
            <div className="box-border caret-transparent outline-[3px]">
              <a
                href="/collections/all"
                className="items-center box-border caret-transparent flex h-full outline-[3px] px-[15px] py-[5px]"
              >
                <span className="box-border caret-transparent block outline-[3px] text-nowrap">
                  Shop
                </span>
              </a>
            </div>
            <div className="box-border caret-transparent outline-[3px]">
              <a
                href="/pages/discover"
                className="items-center box-border caret-transparent flex h-full outline-[3px] px-[15px] py-[5px]"
              >
                <span className="box-border caret-transparent block outline-[3px] text-nowrap">
                  Learn
                </span>
              </a>
            </div>
            <div className="box-border caret-transparent outline-[3px]">
              <a
                href="https://feals.com/pages/product-finder?utm_source=quiz&utm_medium=referral"
                className="items-center box-border caret-transparent flex h-full outline-[3px] px-[15px] py-[5px]"
              >
                <span className="box-border caret-transparent block outline-[3px] text-nowrap">
                  Take the Quiz
                </span>
              </a>
            </div>
            <div className="absolute bg-stone-500/10 box-border caret-transparent h-0.5 outline-[3px] w-0 z-[-1] left-0 -bottom-1"></div>
            <div className="box-border caret-transparent outline-[3px]"></div>
          </div>
        </nav>
      </div>
      <div className="self-stretch box-border caret-transparent flex basis-0 grow shrink-0 justify-end outline-[3px]">
        <div className="box-border caret-transparent flex mr-[-15px] outline-[3px]">
          <div className="box-border caret-transparent outline-[3px]">
            <span className="relative items-center box-border caret-transparent flex h-full outline-[3px] pl-[5px] pr-[15px] py-[5px]">
              (844) 311-9090
            </span>
          </div>
          <div className="box-border caret-transparent outline-[3px]">
            <a
              href="#rivo"
              className="relative items-center box-border caret-transparent flex h-full outline-[3px] px-[15px] py-[5px]"
            >
              <img
                src="/images/feals/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent h-[30px] outline-[3px] w-[17px]"
              />
              <span className="box-border caret-transparent block outline-[3px] pl-[5px]">
                Account
              </span>
            </a>
          </div>
          <div className="box-border caret-transparent outline-[3px]">
            <a
              href="/cart"
              className="relative items-center box-border caret-transparent flex h-full outline-[3px] px-[15px] py-[5px]"
            >
              <img
                src="/images/feals/icon-5.svg"
                alt="Icon"
                className="box-border caret-transparent h-[30px] outline-[3px] w-[17px]"
              />
              <span className="box-border caret-transparent block outline-[3px] pl-[5px]">
                Cart
              </span>
              <span className="relative box-border caret-transparent block outline-[3px]">
                <span className="box-border caret-transparent hidden outline-[3px]">
                  $0.00
                </span>
                <span className="box-border caret-transparent hidden outline-[3px]"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
