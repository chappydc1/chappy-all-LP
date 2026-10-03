import { buildArticleBlocks } from "../../types";
import type { BestToeSocksCopy, BestToeSocksLinks, BestToeSocksMedia } from "../../types";
import { BestToeSocksArticleBlocks } from "./components/BestToeSocksArticleBlocks";
import { BestToeSocksArticleTop } from "./components/BestToeSocksArticleTop";
import { BestToeSocksAuthorBox } from "./components/BestToeSocksAuthorBox";
import { BestToeSocksReviewCard } from "./components/BestToeSocksReviewCard";
import { BestToeSocksSidebar } from "./components/BestToeSocksSidebar";

type ArticleProps = {
  copy: BestToeSocksCopy;
  links: BestToeSocksLinks;
  media: BestToeSocksMedia;
  daysAgo: number;
};

export function BestToeSocksArticle({ copy, links, media, daysAgo }: ArticleProps): JSX.Element {
  const featured = copy.productRankings.items[0];
  const featuredUrl = links.productRankings[0];
  const featuredMedia = media.products[0];

  return (
    <div className="relative mx-auto block max-w-[1032px] px-4 py-10 md:flex md:gap-8 md:pb-16">
      <div className="min-w-0 max-w-[670px] flex-1">
        <BestToeSocksArticleTop
          article={copy.review}
          ctaUrl={links.cta}
          daysAgo={daysAgo}
          authorName={copy.author.name}
          authorPhoto={media.authorPhoto}
        />
        <BestToeSocksArticleBlocks
          blocks={buildArticleBlocks(copy, media)}
          media={media}
          ctaUrl={links.cta}
        />
        <BestToeSocksReviewCard
          card={copy.finalCta}
          product={featured}
          href={featuredUrl}
          productMedia={featuredMedia}
        />
        <BestToeSocksAuthorBox
          author={copy.author}
          photo={media.authorPhoto}
        />
      </div>
      <BestToeSocksSidebar
        product={featured}
        href={featuredUrl}
        productMedia={featuredMedia}
        labels={copy.ui}
      />
    </div>
  );
}
