import { Header } from "./sections/Header";
import { MainContent } from "./sections/MainContent";
import { OfferSection } from "./sections/OfferSection";
import { CommentsSection } from "./sections/CommentsSection";
import { Footer } from "./sections/Footer";

export default function VslTodayPage() {
  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-none outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-montserrat">
      <Header />
      <MainContent />
      <OfferSection />
      <CommentsSection />
      <Footer />
    </div>
  );
}
