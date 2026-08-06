type FooterLink = { label: string; href: string };
type Props = {
  brandName: string;
  copyrightYear: string;
  phone: string;
  phoneHref: string;
  email: string;
  links: FooterLink[];
};

export const FooterLinks = ({ brandName, copyrightYear, phone, phoneHref, email, links }: Props) => {
  return (
    <div className="text-neutral-500 text-xs box-border caret-transparent leading-[22px] outline-[3px] text-center mt-[15px] px-px py-2.5 font-montserrat md:text-base md:px-2.5">
      {brandName} - Copyright {copyrightYear} - All Rights Reserved.
      <div className="text-blue-700 text-xs box-border caret-transparent outline-[3px] md:text-base">
        {links.map((link, i) => (
          <span key={link.href}>
            <a
              title={link.label}
              href={link.href}
              className="text-blue-700 text-xs box-border caret-transparent max-w-full outline-[3px] text-center md:text-base"
            >
              <u className="text-xs box-border caret-transparent outline-[3px] underline md:text-base">
                {link.label}
              </u>
            </a>
            {i < links.length - 1 && " - "}
          </span>
        ))}
      </div>
      <div className="text-xs box-border caret-transparent flex justify-center outline-[3px] md:text-base">
        <a
          title="Phone link"
          href={phoneHref}
          className="text-blue-700 text-xs box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-base"
        >
          {phone}
        </a>
        <div className="text-xs box-border caret-transparent basis-[0%] shrink-0 min-h-[auto] min-w-[auto] outline-[3px] ml-[5px] mr-px rounded-[1px] md:text-base">
          <a
            title=""
            href={`mailto:${email}`}
            className="text-blue-600 text-xs box-border caret-transparent max-w-full outline-[3px] text-center md:text-base hover:text-sky-700 hover:border-sky-700"
          >
            <strong className="text-blue-700 text-xs font-bold box-border caret-transparent outline-[3px] md:text-base">
              {email}
            </strong>
          </a>
        </div>
      </div>
    </div>
  );
};
