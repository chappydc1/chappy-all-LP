import { TopBar } from "./sections/TopBar";
import { ArticleHero } from "./sections/ArticleHero";
import { CommentsSection } from "./sections/CommentsSection";
import { Footer } from "./sections/Footer";
import { StickyCta } from "./sections/StickyCta";

export default function NebrooV2AdvPage(): React.JSX.Element {
  return (
    <div className="text-neutral-800 text-base not-italic normal-nums font-normal bg-white">
      <TopBar />
      <ArticleHero />
      <CommentsSection />
      <Footer />
      <StickyCta />
    </div>
  );
}
