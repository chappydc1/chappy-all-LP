export type FooterColumnItem = {
  href: string;
  label: string;
  iconSrc?: string;
  iconAlt?: string;
};

export type FooterColumnProps = {
  title: string;
  items: FooterColumnItem[];
  listClassName?: string;
  itemClassName?: string;
  spanClassName?: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-content caret-transparent min-h-0 min-w-0 outline-[3px] w-auto mt-10 px-0 md:box-border md:min-h-[auto] md:min-w-[auto] md:w-1/5 md:mt-0 md:px-[19px]">
      <div className="text-[15px] font-bold caret-transparent tracking-[1.11px] leading-[25.65px] outline-[3px] uppercase font-geogrotesquecondboldweb">
        {props.title}
      </div>
      <ul
        className={`caret-transparent list-none outline-[3px] mt-4 pl-0 ${props.listClassName ?? ""}`}
      >
        {props.items.map((item) => (
          <li
            key={`${item.href}-${item.label}`}
            className={`caret-transparent outline-[3px] ${props.itemClassName ?? ""}`}
          >
            <a href={item.href} className="caret-transparent outline-[3px]">
              <span
                className={`caret-transparent outline-[3px] ${props.spanClassName ?? ""}`}
              >
                {item.label}
              </span>
              {item.iconSrc ? (
                <img
                  src={item.iconSrc}
                  alt={item.iconAlt ?? ""}
                  className="caret-transparent inline h-[25px] outline-[3px] align-baseline w-[25px] md:hidden"
                />
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
