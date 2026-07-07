import { TodayHeader } from "./sections/Header";
import { TodayMainContent } from "./sections/MainContent";
import { TodayOfferSection } from "./sections/OfferSection";
import { TodayCommentsSection } from "./sections/CommentsSection";
import { TodayFooter } from "./sections/Footer";

export default function TodayVslTodayPage() {
  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-none outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-montserrat">
      <TodayHeader />
      <TodayMainContent />
      <TodayOfferSection />
      <TodayCommentsSection />
      <TodayFooter />
    </div>
  );
}
