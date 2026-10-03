import { buildArticleBlocks } from "../../types";
import type { Sleeping2Copy, Sleeping2Links, Sleeping2Media } from "../../types";
import { Sleeping2ArticleBlocks } from "./components/Sleeping2ArticleBlocks";
import { Sleeping2ArticleTop } from "./components/Sleeping2ArticleTop";
import { Sleeping2AuthorBox } from "./components/Sleeping2AuthorBox";
import { Sleeping2ReviewCard } from "./components/Sleeping2ReviewCard";
import { Sleeping2Sidebar } from "./components/Sleeping2Sidebar";

type ArticleProps = {
  copy: Sleeping2Copy;
  links: Sleeping2Links;
  media: Sleeping2Media;
  daysAgo: number;
};

export function Sleeping2Article({ copy, links, media, daysAgo }: ArticleProps): JSX.Element {
  const featured = copy.productRankings.items[0];
  const featuredUrl = links.productRankings[0];
  const featuredMedia = media.products[0];

  return (
    <div className="relative mx-auto block max-w-[1032px] px-4 py-10 md:flex md:gap-8 md:pb-16">
      <div className="min-w-0 max-w-[670px] flex-1">
        <Sleeping2ArticleTop
          article={copy.review}
          ctaUrl={links.cta}
          daysAgo={daysAgo}
          authorName={copy.author.name}
          authorPhoto={media.authorPhoto}
        />
        <Sleeping2ArticleBlocks
          blocks={buildArticleBlocks(copy, media)}
          media={media}
          ctaUrl={links.cta}
        />
        <Sleeping2ReviewCard
          card={copy.finalCta}
          product={featured}
          href={featuredUrl}
          productMedia={featuredMedia}
        />
        <Sleeping2AuthorBox
          author={copy.author}
          photo={media.authorPhoto}
        />
      </div>
      <Sleeping2Sidebar
        product={featured}
        href={featuredUrl}
        productMedia={featuredMedia}
        labels={copy.ui}
      />
    </div>
  );
}
