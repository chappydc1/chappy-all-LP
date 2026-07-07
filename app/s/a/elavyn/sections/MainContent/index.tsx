import { ElavynJournalHeader } from "./components/ElavynJournalHeader";
import { ElavynArticleHero } from "./components/ElavynArticleHero";
import { ElavynProductOffer } from "./components/ElavynProductOffer";
import { ElavynCommentsSection } from "./components/ElavynCommentsSection";

export const ElavynMainContent = () => {
  return (
    <main
      role="main"
      className="text-[15px] box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] md:text-base md:leading-[28.8px]"
    >
      <ElavynJournalHeader />
      <ElavynArticleHero />
      <ElavynProductOffer />
      <ElavynCommentsSection />
    </main>
  );
};
