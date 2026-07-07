export const FealsMobileHeader = () => {
  return (
    <div className="box-border caret-transparent grid grid-cols-[repeat(3,1fr)] outline-[3px] md:hidden">
      <div className="box-border caret-transparent flex justify-start outline-[3px]">
        <button
          aria-label="Open menu"
          className="appearance-none content-center items-center bg-transparent caret-transparent flex h-full justify-start min-w-[60px] outline-[3px] text-center text-ellipsis text-nowrap pl-0"
        >
          <img
            src="/images/feals/icon-2.svg"
            alt="Icon"
            className="box-border caret-transparent h-[30px] outline-[3px] text-nowrap w-5"
          />
        </button>
      </div>
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
      <div className="box-border caret-transparent flex justify-end outline-[3px]">
        <a
          href="/cart"
          className="content-center items-center box-border caret-transparent flex h-full justify-end min-w-[60px] outline-[3px]"
        >
          <img
            src="/images/feals/icon-3.svg"
            alt="Icon"
            className="box-border caret-transparent h-[30px] outline-[3px] w-5"
          />
          <span className="relative box-border caret-transparent block outline-[3px]">
            <span className="box-border caret-transparent hidden outline-[3px]">
              $0.00
            </span>
            <span className="box-border caret-transparent hidden outline-[3px]"></span>
          </span>
        </a>
      </div>
    </div>
  );
};
