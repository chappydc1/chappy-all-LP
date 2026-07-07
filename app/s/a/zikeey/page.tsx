import { ZikeeyAdBanner } from "./components/ZikeeyAdBanner";
import { ZikeeyArticleHeader } from "./components/ZikeeyArticleHeader";
import { ZikeeyMainArticle } from "./components/ZikeeyMainArticle";
import { ZikeeySidebar } from "./components/ZikeeySidebar";
import { ZikeeyMobileFixedCTA } from "./components/ZikeeyMobileFixedCTA";
import { ZikeeyFooter } from "./components/ZikeeyFooter";

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
