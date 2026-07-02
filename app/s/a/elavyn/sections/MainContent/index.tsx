import { JournalHeader } from "./components/JournalHeader";
import { ArticleHero } from "./components/ArticleHero";
import { ProductOffer } from "./components/ProductOffer";
import { CommentsSection } from "./components/CommentsSection";

export const MainContent = () => {
  return (
    <main
      role="main"
      className="text-[15px] box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] md:text-base md:leading-[28.8px]"
    >
      <JournalHeader />
      <ArticleHero />
      <ProductOffer />
      <CommentsSection />
    </main>
  );
};
