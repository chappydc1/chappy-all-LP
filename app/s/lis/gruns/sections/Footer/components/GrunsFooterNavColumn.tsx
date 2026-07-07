export type GrunsFooterNavColumnProps = {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
  showLogo: string;
  logoSrc: string;
  logoAlt: string;
};

export const GrunsFooterNavColumn = (props: GrunsFooterNavColumnProps) => {
  return (
    <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border-t border-solid border-white md:border-t-0">
      <button className="text-amber-400 text-2xl items-center bg-transparent caret-transparent flex justify-between leading-6 outline-[3px] pointer-events-auto text-center w-full mb-4 pt-4 pb-0 px-0 font-retail_display md:pointer-events-none md:pt-0">
        {props.showLogo === "true" ? (
          <>
            <img
              src={props.logoSrc}
              alt={props.logoAlt}
              className="aspect-[auto_208_/_30] box-border caret-transparent h-[30px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] pointer-events-auto md:pointer-events-none"
            />
            <span className="box-border caret-transparent outline-[3px] pointer-events-auto md:pointer-events-none absolute block h-px text-nowrap w-px overflow-hidden -m-px">
              {props.title}
            </span>
          </>
        ) : (
          props.title
        )}
        <span className="relative box-border caret-transparent flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] pointer-events-auto md:hidden md:min-h-0 md:min-w-0 md:pointer-events-none">
          <img
            src="/images/gruns/icon-32.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 outline-[3px] pointer-events-auto w-6 md:pointer-events-none"
          />
        </span>
      </button>
      <ul
        role="list"
        className="box-border caret-transparent gap-x-1 flex flex-col max-h-[500px] outline-[3px] gap-y-1 overflow-hidden pl-0 pb-5"
      >
        {props.links.map((link) => (
          <li
            className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"
            key={`${link.href}-${link.label}`}
          >
            <a
              href={link.href}
              className="text-white text-lg font-medium box-border caret-transparent block leading-[28.8px] outline-[3px] md:text-sm md:leading-[22.4px]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};
