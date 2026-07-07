type FooterLink = { text: string; href: string };

type FooterProps = {
  links?: FooterLink[];
  disclaimer?: string;
};

export const PinksaltFooter = ({
  links = [
    { text: "Terms of Use", href: "#" },
    { text: "Privacy Policy", href: "#" },
  ],
  disclaimer = "The result of this content may vary from person to person, depending on each organism. Copying or reproducing all images and text on this site is expressly prohibited, and violators subject to appropriate sanctions. The information contained on this website or in emails sent is prepared for educational purposes only. It is not intended to replace advice or treatment from professionals in the area. Some reviews or testimonials may be fictitious.",
}: FooterProps) => {
  return (
    <div className="relative bg-zinc-800 box-border caret-transparent flex flex-col max-w-full w-full mx-auto px-2.5">
      <div className="box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-5 w-full mx-auto py-2.5 md:flex-nowrap md:max-w-[min(100%,1140px)]">
        <div className="relative text-neutral-500 box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 text-center font-roboto">
          <p className="box-border caret-transparent mb-[14.4px] flex flex-wrap justify-center gap-x-2">
            {links.map((link, i) => (
              <>
                {i > 0 && <span key={`sep-${i}`}>|</span>}
                <a
                  key={link.text}
                  href={link.href}
                  className="hover:text-neutral-300 transition-colors duration-200 underline-offset-2 hover:underline"
                >
                  {link.text}
                </a>
              </>
            ))}
          </p>
        </div>
        <div className="relative text-neutral-500 box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 text-center font-roboto">
          <p className="box-border caret-transparent mb-[14.4px] text-xs md:text-sm leading-relaxed">
            {disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
};
