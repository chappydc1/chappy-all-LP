export const NavbarLogo = () => {
  return (
    <h2 className="text-2xl font-bold box-border caret-transparent leading-[27.6px] min-h-[auto] min-w-[auto] outline-[3px] ml-2.5 mr-0 mt-2 md:ml-0 md:mr-[22px] md:mt-3">
      <div className="box-border caret-transparent outline-[3px]">
        <a
          aria-label="ABCN Logo"
          href="/"
          className="text-sky-900 box-border caret-transparent hover:text-blue-900 hover:border-blue-900"
        >
          <div className="bg-[url('https://c.animaapp.com/mov1hivmUrwXF6/assets/logo.svg')] bg-no-repeat bg-contain box-border caret-transparent brightness-[0.1] h-[38px] outline-[3px] w-[108px] bg-center md:h-[46px] md:w-[116px]"></div>
          <span className="text-transparent text-[0px] box-border leading-[0px] outline-[3px]">
            ABC News
          </span>
        </a>
      </div>
    </h2>
  );
};
