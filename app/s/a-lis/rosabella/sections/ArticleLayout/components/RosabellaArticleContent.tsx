"use client";

import { Fragment } from "react";
import { useAdvertorial } from "../../LandingPage/context";
import { RosabellaArticleHeader } from "./RosabellaArticleHeader";
import { RosabellaReasonSection } from "./RosabellaReasonSection";
import { RosabellaCallToActionSection } from "./RosabellaCallToActionSection";
import { RosabellaCommentsSection } from "./RosabellaCommentsSection";

const pClass =
  "text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]";

// Auto-links every mention of the product name inside a plain-text paragraph,
// so copy.json can stay plain (LLM-editable) while the CTA link is preserved.
const withProductLink = (text: string, productName: string, url: string) => {
  if (!productName) return text;
  const parts = text.split(productName);
  if (parts.length === 1) return text;
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <a href={url} className="text-green-600 underline">
          {productName}
        </a>
      )}
    </Fragment>
  ));
};

export const RosabellaArticleContent = () => {
  const { copy, links, media } = useAdvertorial();

  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full md:w-9/12">
      <RosabellaArticleHeader variant="breadcrumb" breadcrumbText={copy.hero.breadcrumb} />
      <RosabellaArticleHeader variant="headline" headline={copy.hero.headline} />
      <RosabellaArticleHeader variant="subheadline" subheadline={copy.hero.subheadline} />
      <RosabellaArticleHeader
        variant="rating"
        ratingImageUrl={media.starsImage}
        ratingImageSizes="100px"
        ratingText="3,791 Ratings"
      />
      <RosabellaArticleHeader
        variant="heroImage"
        heroImageUrl={media.heroImage}
        heroImageSizes="858px"
      />
      <RosabellaArticleHeader
        variant="quote"
        quoteText={copy.hero.quoteText}
        quoteAuthor={copy.hero.quoteAuthor}
      />
      <RosabellaArticleHeader
        variant="body"
        bodyContent={<span className={pClass}>{copy.hero.body}</span>}
      />
      <RosabellaArticleHeader variant="default" />

      {/* Intro / Problem section */}
      <RosabellaReasonSection
        containerClassName="text-[23.4583px] box-border caret-transparent leading-[28.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 p-2.5 md:text-3xl md:leading-9"
        variant="title"
        title={copy.problem.headline}
        titleTag="h1"
        titleStrongClassName="text-black text-[23.4583px] font-bold box-border caret-transparent leading-[28.15px] outline-[3px] md:text-3xl md:leading-9"
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster=""
        videoSrc=""
        children={null}
      />
      <RosabellaReasonSection
        containerClassName="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 mx-2.5"
        variant="image"
        title=""
        titleTag="h1"
        titleStrongClassName=""
        imageSrc={media.rosabellaWebp}
        imageSizes="858px"
        imageClassName="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-full rounded-[10px]"
        videoPoster=""
        videoSrc=""
        children={null}
      />
      <RosabellaReasonSection
        containerClassName="text-[20.4583px] box-border caret-transparent leading-[30.6875px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 p-2.5 md:text-xl md:leading-[30px]"
        variant="content"
        title=""
        titleTag="p"
        titleStrongClassName=""
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster=""
        videoSrc=""
      >
        <p className={pClass}>{copy.problem.body[0]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.problem.body[1]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.problem.body[2]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.problem.body[3]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.problem.body[4]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.problem.body[5]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.problem.body[6]}</p>
        <p className={pClass}>
          {withProductLink(copy.problem.body[7], copy.ui.productName, links.cta)}
        </p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.problem.body[8]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>
          {withProductLink(copy.problem.body[9], copy.ui.productName, links.cta)}
        </p>
      </RosabellaReasonSection>

      {/* Reason 1 */}
      <RosabellaReasonSection
        containerClassName="text-[23.4583px] box-border caret-transparent leading-[28.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-5 p-2.5 md:text-3xl md:leading-9"
        variant="title"
        title={copy.reasonsWhy[0].headline}
        titleTag="p"
        titleStrongClassName="text-[23.4583px] font-bold box-border caret-transparent leading-[28.15px] outline-[3px] md:text-3xl md:leading-9"
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster=""
        videoSrc=""
        children={null}
      />
      <RosabellaReasonSection
        containerClassName="items-start box-border caret-transparent hidden flex-col min-h-0 min-w-0 outline-[3px] w-full mt-2.5 md:flex md:min-h-[auto] md:min-w-[auto]"
        variant="image"
        title=""
        titleTag="h1"
        titleStrongClassName=""
        imageSrc={media.reason1ImageDesktop}
        imageSizes="669px"
        imageClassName="aspect-[auto_669_/_567] box-border caret-transparent inline h-[567px] max-w-full min-h-0 min-w-0 outline-[3px] align-baseline w-[669px] md:block md:min-h-[auto] md:min-w-[auto]"
        videoPoster=""
        videoSrc=""
        children={null}
      />
      <RosabellaReasonSection
        containerClassName="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 md:hidden md:min-h-0 md:min-w-0"
        variant="image"
        title=""
        titleTag="h1"
        titleStrongClassName=""
        imageSrc={media.reason1ImageMobile}
        imageSizes=""
        imageClassName="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-full md:inline md:min-h-0 md:min-w-0"
        videoPoster=""
        videoSrc=""
        children={null}
      />
      <RosabellaReasonSection
        containerClassName="text-[20.4583px] box-border caret-transparent leading-[30.6875px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 p-2.5 md:text-xl md:leading-[30px]"
        variant="content"
        title=""
        titleTag="p"
        titleStrongClassName=""
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster=""
        videoSrc=""
      >
        <p className={pClass}>{copy.reasonsWhy[0].problemIntro[0]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[0].problemIntro[1]}</p>
        <p className={pClass}><br /></p>
        {copy.reasonsWhy[0].problems.map((problem) => (
          <p key={problem} className={pClass}>{problem}</p>
        ))}
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[0].solutionIntro[0]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[0].solutionIntro[1]}</p>
        <p className={pClass}><br /></p>
        {copy.reasonsWhy[0].benefits.map((benefit) => (
          <p key={benefit} className={pClass}>{benefit}</p>
        ))}
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[0].closing}</p>
      </RosabellaReasonSection>

      {/* Reason 2 */}
      <RosabellaReasonSection
        containerClassName="text-[23.4583px] box-border caret-transparent leading-[28.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 p-2.5 md:text-3xl md:leading-9"
        variant="title"
        title={copy.reasonsWhy[1].headline}
        titleTag="p"
        titleStrongClassName="text-[23.4583px] font-bold box-border caret-transparent leading-[28.15px] outline-[3px] md:text-3xl md:leading-9"
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster=""
        videoSrc=""
        children={null}
      />
      <RosabellaReasonSection
        containerClassName="text-[20.4583px] box-border caret-transparent leading-[30.6875px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 pt-2.5 px-2.5 md:text-xl md:leading-[30px]"
        variant="content"
        title=""
        titleTag="h1"
        titleStrongClassName=""
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster=""
        videoSrc=""
      >
        <p className={pClass}>{copy.reasonsWhy[1].body[0]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[1].body[1]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[1].body[2]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[1].body[3]}</p>
      </RosabellaReasonSection>
      <RosabellaReasonSection
        containerClassName="relative bg-black box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden mt-2.5 mx-2.5 rounded-[10px]"
        variant="video"
        title=""
        titleTag="h1"
        titleStrongClassName=""
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster={media.videos.video1.poster}
        videoSrc={media.videos.video1.src}
        children={null}
      />

      {/* Reason 3 */}
      <RosabellaReasonSection
        containerClassName="text-[23.4583px] leading-[28.15px] min-h-[auto] min-w-[auto] mt-2.5 p-2.5 md:text-3xl md:leading-9"
        variant="title"
        title={copy.reasonsWhy[2].headline}
        titleTag="h1"
        titleStrongClassName="text-[23.4583px] font-bold box-border caret-transparent leading-[28.15px] outline-[3px] md:text-3xl md:leading-9"
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster=""
        videoSrc=""
        children={null}
      />
      <RosabellaReasonSection
        containerClassName="relative bg-black box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden mt-2.5 mx-2.5 rounded-[10px]"
        variant="video"
        title=""
        titleTag="h1"
        titleStrongClassName=""
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster={media.videos.video2.poster}
        videoSrc={media.videos.video2.src}
        children={null}
      />

      {/* Reason 4 */}
      <RosabellaReasonSection
        containerClassName="text-[23.4583px] box-border caret-transparent leading-[28.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 p-2.5 md:text-3xl md:leading-9"
        variant="title"
        title={copy.reasonsWhy[3].headline}
        titleTag="h1"
        titleStrongClassName="text-black text-[23.4583px] font-bold box-border caret-transparent leading-[28.15px] outline-[3px] md:text-3xl md:leading-9"
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster=""
        videoSrc=""
        children={null}
      />
      <RosabellaReasonSection
        containerClassName="text-[20.4583px] box-border caret-transparent leading-[30.6875px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 p-2.5 md:text-xl md:leading-[30px]"
        variant="content"
        title=""
        titleTag="p"
        titleStrongClassName=""
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster=""
        videoSrc=""
      >
        <p className={pClass}>{copy.reasonsWhy[3].body[0]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[3].body[1]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[3].body[2]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[3].body[3]}</p>
      </RosabellaReasonSection>
      <RosabellaReasonSection
        containerClassName="min-h-[auto] min-w-[auto] mt-2.5"
        variant="empty"
        title=""
        titleTag="h1"
        titleStrongClassName=""
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster=""
        videoSrc=""
        children={null}
      />

      {/* Reason 5 */}
      <RosabellaReasonSection
        containerClassName="text-black text-[23.4583px] box-border caret-transparent leading-[28.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-5 p-2.5 md:text-3xl md:leading-9"
        variant="title"
        title={copy.reasonsWhy[4].headline}
        titleTag="p"
        titleStrongClassName="text-[23.4583px] font-bold box-border caret-transparent leading-[28.15px] outline-[3px] md:text-3xl md:leading-9"
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster=""
        videoSrc=""
        children={null}
      />
      <RosabellaReasonSection
        containerClassName="text-[20.4583px] box-border caret-transparent leading-[30.6875px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 p-2.5 md:text-xl md:leading-[30px]"
        variant="content"
        title=""
        titleTag="h1"
        titleStrongClassName=""
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster=""
        videoSrc=""
      >
        <p className={pClass}>{copy.reasonsWhy[4].body[0]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[4].body[1]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[4].body[2]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[4].body[3]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[4].body[4]}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reasonsWhy[4].body[5]}</p>
      </RosabellaReasonSection>
      <RosabellaReasonSection
        containerClassName="relative bg-black box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden mt-2.5 mx-2.5 rounded-[10px]"
        variant="video"
        title=""
        titleTag="h1"
        titleStrongClassName=""
        imageSrc=""
        imageSizes=""
        imageClassName=""
        videoPoster={media.videos.video3.poster}
        videoSrc={media.videos.video3.src}
        children={null}
      />

      <RosabellaCallToActionSection
        variant="ctaButton"
        href={links.cta}
        ctaText={copy.finalCta.ctaText}
        ctaClassName="text-sm hidden min-h-0 min-w-0 px-2.5 py-5 md:text-xl md:flex md:tracking-[0.4px] md:leading-6 md:min-h-[auto] md:min-w-[auto]"
        ctaSpanClassName="text-white text-3xl box-border caret-transparent inline tracking-[0.28px] leading-9 min-h-0 min-w-0 outline-[3px] pointer-events-none text-center md:block md:tracking-[0.4px] md:min-h-[auto] md:min-w-[auto]"
      />

      <RosabellaCallToActionSection
        variant="ctaButton"
        href={links.cta}
        ctaText={copy.finalCta.ctaText}
        ctaClassName="px-[5px] py-[15px] md:hidden md:min-h-0 md:min-w-0"
        ctaSpanClassName="text-white text-[17px] box-border caret-transparent block leading-[20.4px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none text-center md:inline md:min-h-0 md:min-w-0"
      />
      <RosabellaCallToActionSection
        variant="heroImage"
        href=""
        ctaText=""
        ctaClassName=""
        ctaSpanClassName=""
      />
      <RosabellaCallToActionSection
        variant="updateOffer"
        href=""
        ctaText=""
        ctaClassName=""
        ctaSpanClassName=""
      />
      <RosabellaCallToActionSection
        variant="trustAndCta"
        href={links.cta}
        ctaText={copy.finalCta.ctaText}
        ctaClassName=""
        ctaSpanClassName=""
      />
      <RosabellaCallToActionSection
        variant="default"
        href="#"
        ctaText=""
        ctaClassName=""
        ctaSpanClassName=""
      />
      <RosabellaCommentsSection />
    </div>
  );
};
