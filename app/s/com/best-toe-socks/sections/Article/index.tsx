import { isArticleBlock } from "../../types";
import type { BestToeSocksCopy, BestToeSocksMedia } from "../../types";
import { BestToeSocksArticleBlocks } from "./components/BestToeSocksArticleBlocks";
import { BestToeSocksArticleTop } from "./components/BestToeSocksArticleTop";
import { BestToeSocksAuthorBox } from "./components/BestToeSocksAuthorBox";
import { BestToeSocksReviewCard } from "./components/BestToeSocksReviewCard";
import { BestToeSocksSidebar } from "./components/BestToeSocksSidebar";

type ArticleProps = {
  copy: BestToeSocksCopy;
  media: BestToeSocksMedia;
};

export function BestToeSocksArticle({ copy, media }: ArticleProps): JSX.Element {
  const featured = copy.products[0];
  const featuredMedia = media.products[0];

  return (
    <div className="relative mx-auto block max-w-[1032px] px-4 py-10 md:flex md:gap-8 md:pb-16">
      <div className="min-w-0 max-w-[670px] flex-1">
        <BestToeSocksArticleTop
          article={copy.article}
          ctaUrl={copy.ctaUrl}
          daysAgo={copy.daysAgo}
          authorName={copy.author.name}
          authorPhoto={media.authorPhoto}
        />
        <BestToeSocksArticleBlocks
          blocks={copy.article.blocks.filter(isArticleBlock)}
          media={media}
          ctaUrl={copy.ctaUrl}
        />
        <BestToeSocksReviewCard
          card={copy.reviewCard}
          product={featured}
          productMedia={featuredMedia}
        />
        <BestToeSocksAuthorBox
          author={copy.author}
          photo={media.authorPhoto}
        />
      </div>
      <BestToeSocksSidebar
        product={featured}
        productMedia={featuredMedia}
        labels={copy.labels}
      />
    </div>
  );
}
