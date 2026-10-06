import { EarCleanerArticleHeader } from "./components/ArticleHeader";
import { EarCleanerArticleSection } from "./components/ArticleSection";
import { EarCleanerOfferSection } from "./components/OfferSection";
import { EarCleanerStickyBuyBar } from "./components/EarCleanerStickyBuyBar";

export const EarCleanerMain = () => {
  return (
    <main className="box-border caret-transparent">
      <EarCleanerArticleHeader />
      <EarCleanerArticleSection />
      <EarCleanerOfferSection />
      <EarCleanerStickyBuyBar />
    </main>
  );
};
