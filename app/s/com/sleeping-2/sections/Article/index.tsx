import { isArticleBlock } from "../../types";
import type { Sleeping2Copy, Sleeping2Media } from "../../types";
import { Sleeping2ArticleBlocks } from "./components/Sleeping2ArticleBlocks";
import { Sleeping2ArticleTop } from "./components/Sleeping2ArticleTop";
import { Sleeping2AuthorBox } from "./components/Sleeping2AuthorBox";
import { Sleeping2ReviewCard } from "./components/Sleeping2ReviewCard";
import { Sleeping2Sidebar } from "./components/Sleeping2Sidebar";

type ArticleProps = {
  copy: Sleeping2Copy;
  media: Sleeping2Media;
};

export function Sleeping2Article({ copy, media }: ArticleProps): JSX.Element {
  const featured = copy.products[0];
  const featuredMedia = media.products[0];

  return (
    <div className="relative mx-auto block max-w-[1032px] px-4 py-10 md:flex md:gap-8 md:pb-16">
      <div className="min-w-0 max-w-[670px] flex-1">
        <Sleeping2ArticleTop
          article={copy.article}
          ctaUrl={copy.ctaUrl}
          daysAgo={copy.daysAgo}
          authorName={copy.author.name}
          authorPhoto={media.authorPhoto}
        />
        <Sleeping2ArticleBlocks
          blocks={copy.article.blocks.filter(isArticleBlock)}
          media={media}
          ctaUrl={copy.ctaUrl}
        />
        <Sleeping2ReviewCard
          card={copy.reviewCard}
          product={featured}
          productMedia={featuredMedia}
        />
        <Sleeping2AuthorBox
          author={copy.author}
          photo={media.authorPhoto}
        />
      </div>
      <Sleeping2Sidebar
        product={featured}
        productMedia={featuredMedia}
        labels={copy.labels}
      />
    </div>
  );
}
