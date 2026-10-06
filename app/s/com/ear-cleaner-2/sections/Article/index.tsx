import { isArticleBlock } from "../../types";
import type { EarCleaner2Copy, EarCleaner2Media } from "../../types";
import { EarCleaner2ArticleBlocks } from "./components/EarCleaner2ArticleBlocks";
import { EarCleaner2ArticleTop } from "./components/EarCleaner2ArticleTop";
import { EarCleaner2AuthorBox } from "./components/EarCleaner2AuthorBox";
import { EarCleaner2ReviewCard } from "./components/EarCleaner2ReviewCard";
import { EarCleaner2Sidebar } from "./components/EarCleaner2Sidebar";

type ArticleProps = {
  copy: EarCleaner2Copy;
  media: EarCleaner2Media;
};

export function EarCleaner2Article({ copy, media }: ArticleProps): JSX.Element {
  const featured = copy.products[0];
  const featuredMedia = media.products[0];

  return (
    <div className="relative mx-auto block max-w-[1032px] px-4 py-10 md:flex md:gap-8 md:pb-16">
      <div className="min-w-0 max-w-[670px] flex-1">
        <EarCleaner2ArticleTop
          article={copy.article}
          ctaUrl={copy.ctaUrl}
          daysAgo={copy.daysAgo}
          authorName={copy.author.name}
          authorPhoto={media.authorPhoto}
        />
        <EarCleaner2ArticleBlocks
          blocks={copy.article.blocks.filter(isArticleBlock)}
          media={media}
          ctaUrl={copy.ctaUrl}
        />
        <EarCleaner2ReviewCard
          card={copy.reviewCard}
          product={featured}
          productMedia={featuredMedia}
        />
        <EarCleaner2AuthorBox
          author={copy.author}
          photo={media.authorPhoto}
        />
      </div>
      <EarCleaner2Sidebar
        product={featured}
        productMedia={featuredMedia}
        labels={copy.labels}
      />
    </div>
  );
}
