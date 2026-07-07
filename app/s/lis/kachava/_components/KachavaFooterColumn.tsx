type FooterColumnItem =
  | { type: "link"; label: string; href: string }
  | { type: "button"; label: string };

type SocialLink = {
  id: string;
  label: string;
  href: string;
  iconSrc: string;
};

type FooterColumnProps = {
  title: string;
  items: FooterColumnItem[];
  socialLinks?: SocialLink[];
};

export function KachavaFooterColumn({ title, items, socialLinks }: FooterColumnProps) {
  return (
    <div className="box-border caret-transparent gap-x-6 flex flex-col justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
      <div className="box-content caret-black gap-x-[normal] block flex-row min-h-0 min-w-0 outline-0 gap-y-[normal] md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:flex-col md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:gap-y-3">
        <h4 className="text-base font-bold box-content caret-black leading-[normal] min-h-0 min-w-0 outline-0 md:text-lg md:font-black md:box-border md:caret-transparent md:leading-7 md:min-h-[auto] md:min-w-[auto] md:outline-[3px]">
          {title}
        </h4>
        <ul className="box-content caret-black gap-x-[normal] block flex-row min-h-0 min-w-0 outline-0 gap-y-[normal] pl-10 md:box-border md:caret-transparent md:gap-x-1.5 md:flex md:flex-col md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:gap-y-1.5 md:pl-0">
          {items.map((item) => (
            <li
              key={`${item.type}-${item.label}`}
              className="box-content caret-black min-h-0 min-w-0 outline-0 md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[3px]"
            >
              {item.type === "link" ? (
                <a
                  href={item.href}
                  className="box-content caret-black inline outline-0 md:box-border md:caret-transparent md:inline-block md:outline-[3px] hover:underline"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  title={item.label}
                  className="static bg-zinc-100 caret-black outline-0 text-center w-auto rounded-none md:relative md:bg-transparent md:caret-transparent md:outline-[3px] md:text-left md:w-full md:p-0 md:rounded-md hover:underline"
                >
                  <div className="box-content caret-black block outline-0 md:box-border md:caret-transparent md:contents md:outline-[3px]">
                    {item.label}
                  </div>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      {socialLinks && socialLinks.length > 0 && (
        <div className="box-border caret-transparent gap-x-1.5 flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 my-1 md:my-0">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              aria-label={`Open ${social.label} in a new window or tab`}
              className="box-border caret-transparent block h-6 min-h-[auto] min-w-[auto] outline-[3px] w-6"
            >
              <div className="box-border caret-transparent contents outline-[3px]">
                <picture className="box-border caret-transparent outline-[3px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={social.iconSrc}
                    alt={social.label}
                    className="aspect-[auto_24_/_24] box-border caret-transparent max-w-full outline-[3px] w-full"
                  />
                </picture>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
