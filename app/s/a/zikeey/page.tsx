import { ZikeeyAdBanner } from "./components/AdBanner";
import { ZikeeyArticleHeader } from "./components/ArticleHeader";
import { ZikeeyMainArticle } from "./components/MainArticle";
import { ZikeeySidebar } from "./components/Sidebar";
import { ZikeeyMobileFixedCTA } from "./components/MobileFixedCTA";
import { ZikeeyFooter } from "./components/Footer";

export default function ZikeeyPage() {
  return (
    <div>
      <ZikeeyAdBanner />
      <ZikeeyArticleHeader />
      <div className="flex flex-col max-w-[1100px] mx-auto md:flex-row md:items-start">
        <ZikeeyMainArticle />
        <ZikeeySidebar />
      </div>
      <ZikeeyMobileFixedCTA />
      <ZikeeyFooter />
    </div>
  );
}
