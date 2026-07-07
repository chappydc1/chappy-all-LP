import { ElavynJournalHeader } from "./components/JournalHeader";
import { ElavynArticleHero } from "./components/ArticleHero";
import { ElavynProductOffer } from "./components/ProductOffer";
import { ElavynCommentsSection } from "./components/CommentsSection";

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
