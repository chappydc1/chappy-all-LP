type LegalLink =
  | { label: string; href: string; type?: never }
  | { label: string; type: "button"; href?: never };

type FooterBottomProps = {
  copyright: string;
  legalLinks: LegalLink[];
  paymentIcons: { id: string; src: string; alt: string }[];
  privacyChoicesIconSrc: string;
};

export function KachavaFooterBottom({ copyright, legalLinks, paymentIcons, privacyChoicesIconSrc }: FooterBottomProps) {
  return (
    <div className="text-stone-800 bg-stone-400 box-border caret-transparent outline-[3px] px-2 md:px-14">
      <div className="box-border caret-transparent flex flex-col flex-wrap justify-between max-w-none outline-[3px] mx-auto md:flex-row md:max-w-[1440px]">
        <div className="text-xs box-border caret-transparent gap-x-4 flex flex-col leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 pt-4 pb-5 px-4 md:gap-x-8 md:flex-row md:gap-y-8 md:pb-4">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-center">
            {copyright}
          </div>
          <div className="box-border caret-transparent gap-x-4 grid flex-nowrap grid-cols-[repeat(2,minmax(0px,1fr))] justify-normal min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 md:gap-x-8 md:flex md:flex-wrap md:justify-center">
            {legalLinks.map((link) =>
              link.type === "button" ? (
                <button
                  key={link.label}
                  title={link.label}
                  className="relative items-center bg-transparent border-b-stone-400 caret-transparent gap-x-1 flex flex-row-reverse col-end-[-1] col-start-1 justify-center justify-self-center max-h-[50px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 text-center no-underline w-[calc(50%_-_8px)] pt-0 pb-1 px-0 rounded-md border-b md:underline md:w-auto md:pb-0 md:border-b-0 hover:no-underline"
                >
                  <div className="box-border caret-transparent contents outline-[3px]">
                    {link.label}
                    <div className="box-border caret-transparent contents outline-[3px]">
                      <picture className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={privacyChoicesIconSrc}
                          alt=""
                          className="aspect-[auto_420_/_420] box-border caret-transparent max-w-9 outline-[3px] w-[420px]"
                        />
                      </picture>
                    </div>
                  </div>
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative border-b-stone-400 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline pb-1 border-b border-solid md:underline md:pb-0 md:border-b-0 hover:no-underline"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
        <div className="items-center box-border caret-transparent gap-x-3 flex flex-wrap justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 p-4 md:py-2">
          {paymentIcons.map((icon) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={icon.id}
              src={icon.src}
              alt={icon.alt}
              className="box-border caret-transparent h-6 outline-[3px] w-9"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
