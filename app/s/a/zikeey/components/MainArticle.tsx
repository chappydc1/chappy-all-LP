import adv from "../copy.json";
import { ZikeeyArticleMeta } from "./ArticleMeta";
import { ZikeeyArticleStory } from "./ArticleStory";
import { ZikeeyArticleFeatures } from "./ArticleFeatures";
import { ZikeeyArticleReviews } from "./ArticleReviews";
import { ZikeeyArticleConclusion } from "./ArticleConclusion";
import { ZikeeyArticleCTA } from "./ArticleCTA";
import { renderText } from "../utils/renderText";

export function ZikeeyMainArticle() {
  const { headline, productName, productUrl, closingParagraphs } = adv.article;

  return (
    <div className="basis-0 grow max-w-[740px] min-w-0 mx-auto px-2.5 pb-2.5 md:px-5 md:pb-5 pt-1">
      <div className="max-w-full">
        <h1 className="text-[28px] font-bold leading-tight mb-[25px] md:text-5xl">
          {headline}
        </h1>
        <ZikeeyArticleMeta />
        <ZikeeyArticleStory />
        <ZikeeyArticleFeatures />
        <ZikeeyArticleReviews />
        <ZikeeyArticleConclusion />
        {closingParagraphs.map((text, i) => (
          <p
            key={i}
            className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]"
          >
            {renderText(text)}
          </p>
        ))}
        <ZikeeyArticleCTA />
      </div>
    </div>
  );
}
