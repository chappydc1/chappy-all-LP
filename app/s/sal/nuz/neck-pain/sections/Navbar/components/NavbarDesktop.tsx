import { content } from "../../../content";

export const NavbarDesktop = () => {
  return (
    <div
      role="banner"
      className="relative bg-sky-950 box-border caret-transparent hidden z-0 md:block"
    >
      <div className="items-center box-border caret-transparent flex justify-start max-w-none mx-auto md:justify-center md:max-w-[1200px]">
        <a
          href="#"
          className="relative text-zinc-800 box-border caret-transparent block float-left min-h-0 min-w-0 pl-2.5 md:min-h-[auto] md:min-w-[auto] md:pl-0 transition-opacity duration-200 hover:opacity-80"
        >
          <img
            src={content.navbar.logoUrl}
            alt={content.navbar.logoAlt}
            className="box-border caret-transparent inline-block h-[46px] max-w-full w-[100px] md:w-auto"
          />
          <img
            src={content.navbar.logoSecondaryUrl}
            alt={content.navbar.logoAlt}
            className="box-border caret-transparent block h-[46px] max-w-full w-[100px] mt-[3px] md:hidden md:w-[111.5px] md:mt-0"
          />
        </a>
        <a
          href={content.global.ctaHref}
          className="relative text-white text-[18.2px] items-center bg-green-500 box-border caret-transparent block float-right max-w-full no-underline mt-[7px] px-[19px] py-[7px] rounded-[30px] left-[27px] md:hidden transition-all duration-200 active:scale-95 cursor-pointer"
        >
          <div className="text-white text-[15px] font-bold box-border caret-transparent">{content.global.orderNowShort}</div>
        </a>
      </div>
    </div>
  );
};
