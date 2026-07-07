import { DerilaNavbar } from "../Navbar";
import { DerilaArticleLayout } from "../ArticleLayout";
import { DerilaStickyBottomCta } from "../../components/StickyBottomCta";
import { DerilaFooter } from "../Footer";
import { DerilaCookiePreferences } from "../../components/CookiePreferences";
import adv from "../../copy.json";

export const DerilaPageShell = () => {
  return (
    <div className="text-base box-border caret-transparent leading-6 max-w-[2000px] outline-[3px] mx-auto">
      <DerilaNavbar />
      <DerilaArticleLayout />
      <DerilaStickyBottomCta label={adv.stickyBar.ctaButton} productUrl={adv.productUrl} />
      <DerilaFooter />
      <div className="box-border caret-transparent outline-[3px]"></div>
      <DerilaCookiePreferences />
      <iframe
        src={adv.trackerUrl}
        className="box-border caret-transparent h-px outline-[3px] w-px"
      />
    </div>
  );
};
