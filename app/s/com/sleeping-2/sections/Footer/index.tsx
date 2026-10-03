import { BackToTopIcon } from "../../components/icons";
import type { Sleeping2Copy } from "../../types";

type FooterProps = {
  footer: Sleeping2Copy["footer"];
  linkUrls: string[];
  logo: string;
};

export function Sleeping2Footer({ footer, linkUrls, logo }: FooterProps): JSX.Element {
  return (
    <footer className="bg-[#232F3E] pb-[92px] min-[1032px]:pb-0">
      <section className="mx-auto max-w-[1032px] p-4 md:px-4 md:py-6">
        <div className="px-[13px] py-3 text-center text-xs leading-[18px] text-white md:text-left">
          {footer.disclaimer}
        </div>
        <div className="my-4 h-px bg-[#E9E9E9]" />
        <nav className="block md:flex md:items-center md:justify-between">
          <div className="hidden max-w-[194px] md:block">
            <img
              src={logo}
              alt="PrimePicks"
              className="h-[30px] w-auto"
            />
          </div>
          <div className="my-6 flex flex-wrap justify-center gap-4 md:my-0">
            {footer.navLabels.map((label, index) => (
              <a
                key={label}
                href={linkUrls[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-6 text-white no-underline transition-colors hover:text-[#E0E0E0]"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#main-product"
            className="mx-auto flex w-fit gap-2 rounded-[20px] bg-[#636363] px-4 py-2 text-center text-xs font-bold leading-4 text-white no-underline md:mx-0"
          >
            <span>{footer.backToTop}</span>
            <BackToTopIcon />
          </a>
        </nav>
        <div className="my-4 h-px bg-[#E9E9E9]" />
        <p className="text-center text-sm leading-5 text-white md:text-left">{footer.copyright}</p>
      </section>
    </footer>
  );
}
