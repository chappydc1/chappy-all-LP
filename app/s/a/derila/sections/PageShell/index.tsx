import { Navbar } from "../Navbar";
import { ArticleLayout } from "../ArticleLayout";
import { StickyBottomCta } from "../../components/StickyBottomCta";
import { Footer } from "../Footer";
import { CookiePreferences } from "../../components/CookiePreferences";
import adv from "../../adv.json";

export const PageShell = () => {
  return (
    <div className="text-base box-border caret-transparent leading-6 max-w-[2000px] outline-[3px] mx-auto">
      <Navbar />
      <ArticleLayout />
      <StickyBottomCta label={adv.stickyBar.ctaButton} productUrl={adv.productUrl} />
      <Footer />
      <div className="box-border caret-transparent outline-[3px]"></div>
      <CookiePreferences />
      <iframe
        src={adv.trackerUrl}
        className="box-border caret-transparent h-px outline-[3px] w-px"
      />
    </div>
  );
};
