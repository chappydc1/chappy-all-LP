import { GrunsNewsletterSignup } from "../Footer/components/NewsletterSignup";
import { GrunsFooterNav } from "../Footer/components/FooterNav";
import { GrunsFooterLegal } from "../Footer/components/FooterLegal";

export const GrunsFooter = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <footer
        aria-label="Site footer"
        className="bg-green-950 box-border caret-transparent outline-[3px] p-6 md:p-14"
      >
        <div className="box-border caret-transparent block grid-cols-none max-w-[1440px] outline-[3px] mx-auto md:grid md:grid-cols-[repeat(12,minmax(0px,1fr))]">
          <GrunsNewsletterSignup />
          <GrunsFooterNav />
        </div>
        <GrunsFooterLegal variant="gap-x-[normal] gap-y-[normal] md:gap-x-8 md:gap-y-8" />
        <GrunsFooterLegal variant="gap-x-3 gap-y-3 mt-8 pr-0 md:pr-[25%]" />
        <GrunsFooterLegal variant="items-center justify-normal mt-8 md:justify-between" />
      </footer>
    </div>
  );
};
