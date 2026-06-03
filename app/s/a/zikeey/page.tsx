import { AdBanner } from "./components/AdBanner";
import { ArticleHeader } from "./components/ArticleHeader";
import { MainArticle } from "./components/MainArticle";
import { Sidebar } from "./components/Sidebar";
import { MobileFixedCTA } from "./components/MobileFixedCTA";
import { Footer } from "./components/Footer";

export default function ZikeeyPage() {
  return (
    <div>
      <AdBanner />
      <ArticleHeader />
      <div className="flex flex-col max-w-[1100px] mx-auto md:flex-row md:items-start">
        <MainArticle />
        <Sidebar />
      </div>
      <MobileFixedCTA />
      <Footer />
    </div>
  );
}
