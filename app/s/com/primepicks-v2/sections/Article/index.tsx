import { isArticleBlock } from "../../types";
import type { PrimepicksV2Copy, PrimepicksV2Media } from "../../types";
import { PrimepicksV2ArticleBlocks } from "./components/PrimepicksV2ArticleBlocks";
import { PrimepicksV2ArticleTop } from "./components/PrimepicksV2ArticleTop";
import { PrimepicksV2AuthorBox } from "./components/PrimepicksV2AuthorBox";
import { PrimepicksV2ReviewCard } from "./components/PrimepicksV2ReviewCard";
import { PrimepicksV2Sidebar } from "./components/PrimepicksV2Sidebar";

type ArticleProps = {
  copy: PrimepicksV2Copy;
  media: PrimepicksV2Media;
};

export function PrimepicksV2Article({ copy, media }: ArticleProps): JSX.Element {
  const featured = copy.products[0];
  const featuredMedia = media.products[0];

  return (
    <div className="relative mx-auto block max-w-[1032px] px-4 py-10 md:flex md:gap-8 md:pb-16">
      <div className="min-w-0 max-w-[670px] flex-1">
        <PrimepicksV2ArticleTop
          article={copy.article}
          ctaUrl={copy.ctaUrl}
          daysAgo={copy.daysAgo}
          authorName={copy.author.name}
          authorPhoto={media.authorPhoto}
        />
        <PrimepicksV2ArticleBlocks
          blocks={copy.article.blocks.filter(isArticleBlock)}
          media={media}
          ctaUrl={copy.ctaUrl}
        />
        <PrimepicksV2ReviewCard
          card={copy.reviewCard}
          product={featured}
          productMedia={featuredMedia}
        />
        <PrimepicksV2AuthorBox
          author={copy.author}
          photo={media.authorPhoto}
        />
      </div>
      <PrimepicksV2Sidebar
        product={featured}
        productMedia={featuredMedia}
        labels={copy.labels}
      />
    </div>
  );
}
