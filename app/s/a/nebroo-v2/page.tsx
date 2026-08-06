import copy from "./copy.json";
import media from "./media.json";

import { TopBar } from "./sections/TopBar";
import { ArticleHero } from "./sections/ArticleHero";
import { CommentsSection } from "./sections/CommentsSection";
import { Footer } from "./sections/Footer";
import { StickyCta } from "./sections/StickyCta";

export default function NebrooV2Page(): React.JSX.Element {
  return (
    <div className="text-neutral-800 text-base not-italic normal-nums font-normal bg-white">
      <TopBar copy={copy.topBar} media={media.topBar} />
      <ArticleHero
        alertBanner={copy.alertBanner}
        copy={copy.article}
        media={media.article}
        reviewsCopy={copy.reviews}
        reviewsMedia={media.reviews}
        sidebarMedia={media.sidebar}
      />
      <CommentsSection copy={copy.comments} media={media.comments} sharedMedia={media.shared} />
      <Footer copy={copy.footer} media={media.footer} />
      <StickyCta ctaUrl={copy.article.ctaUrl} ctaLabel={copy.article.ctaLabelSticky} />
    </div>
  );
}
