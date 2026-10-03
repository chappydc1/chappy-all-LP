import { isArticleBlock } from "../../types";
import type { BestPilatesGripSocksCopy, BestPilatesGripSocksMedia } from "../../types";
import { BestPilatesGripSocksArticleBlocks } from "./components/BestPilatesGripSocksArticleBlocks";
import { BestPilatesGripSocksArticleTop } from "./components/BestPilatesGripSocksArticleTop";
import { BestPilatesGripSocksAuthorBox } from "./components/BestPilatesGripSocksAuthorBox";
import { BestPilatesGripSocksReviewCard } from "./components/BestPilatesGripSocksReviewCard";
import { BestPilatesGripSocksSidebar } from "./components/BestPilatesGripSocksSidebar";

type ArticleProps = {
  copy: BestPilatesGripSocksCopy;
  media: BestPilatesGripSocksMedia;
};

export function BestPilatesGripSocksArticle({ copy, media }: ArticleProps): JSX.Element {
  const featured = copy.products[0];
  const featuredMedia = media.products[0];

  return (
    <div className="relative mx-auto block max-w-[1032px] px-4 py-10 md:flex md:gap-8 md:pb-16">
      <div className="min-w-0 max-w-[670px] flex-1">
        <BestPilatesGripSocksArticleTop
          article={copy.article}
          ctaUrl={copy.ctaUrl}
          daysAgo={copy.daysAgo}
          authorName={copy.author.name}
          authorPhoto={media.authorPhoto}
        />
        <BestPilatesGripSocksArticleBlocks
          blocks={copy.article.blocks.filter(isArticleBlock)}
          media={media}
          ctaUrl={copy.ctaUrl}
        />
        <BestPilatesGripSocksReviewCard
          card={copy.reviewCard}
          product={featured}
          productMedia={featuredMedia}
        />
        <BestPilatesGripSocksAuthorBox
          author={copy.author}
          photo={media.authorPhoto}
        />
      </div>
      <BestPilatesGripSocksSidebar
        product={featured}
        productMedia={featuredMedia}
        labels={copy.labels}
      />
    </div>
  );
}
