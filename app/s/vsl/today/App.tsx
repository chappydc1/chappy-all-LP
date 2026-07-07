import { TodayHeader } from "./sections/Header";
import { TodayMainContent } from "./sections/MainContent";
import { TodayOfferSection } from "./sections/OfferSection";
import { TodayCommentsSection } from "./sections/CommentsSection";
import { TodayFooter } from "./sections/Footer";

export const TodayApp = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-none outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-montserrat">
      <TodayHeader />
      <TodayMainContent />
      <TodayOfferSection />
      <TodayCommentsSection />
      <TodayFooter />
      <img
        src="/images/today/background_netting.webp"
        alt=""
        className="fixed box-border caret-transparent h-[1000px] object-cover object-[50%_0%] outline-[3px] w-full z-[-1] left-0 top-0"
      />
      <div className="box-border caret-transparent hidden outline-[3px]"></div>
    </body>
  );
};
