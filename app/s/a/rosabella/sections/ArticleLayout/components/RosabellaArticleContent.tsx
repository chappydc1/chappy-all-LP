"use client";

import { useAdvertorial } from "../../LandingPage/context";
import { RosabellaArticleHeader } from "./RosabellaArticleHeader";
import { RosabellaReasonSection } from "./RosabellaReasonSection";
import { RosabellaCallToActionSection } from "./RosabellaCallToActionSection";
import { RosabellaCommentsSection } from "./RosabellaCommentsSection";

const pClass =
  "text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]";

export const RosabellaArticleContent = () => {
  const { copy, media } = useAdvertorial();

  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full md:w-9/12">
      <RosabellaArticleHeader variant="breadcrumb" breadcrumbText={copy.breadcrumb} />
      <RosabellaArticleHeader variant="headline" headline={copy.headline} />
      <RosabellaArticleHeader variant="subheadline" subheadline={copy.subheadline} />
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
        quoteText={copy.quoteText}
        quoteAuthor={copy.quoteAuthor}
      />
      <RosabellaArticleHeader
        variant="body"
        bodyContent={<span className={pClass}>{copy.introBody}</span>}
      />
      <RosabellaArticleHeader variant="default" />

      {/* Intro / Problem section */}
      <RosabellaReasonSection
        containerClassName="text-[23.4583px] box-border caret-transparent leading-[28.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 p-2.5 md:text-3xl md:leading-9"
        variant="title"
        title={copy.introSection.title}
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
        <p className={pClass}>{copy.introSection.p1}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.introSection.p2}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.introSection.p3}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.introSection.p4}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.introSection.p5}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.introSection.p6}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.introSection.p7}</p>
        <p className={pClass}>{copy.introSection.p8}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.introSection.p9}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.introSection.p10}</p>
      </RosabellaReasonSection>

      {/* Reason 1 */}
      <RosabellaReasonSection
        containerClassName="text-[23.4583px] box-border caret-transparent leading-[28.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-5 p-2.5 md:text-3xl md:leading-9"
        variant="title"
        title={copy.reason1Section.title}
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
        <p className={pClass}>{copy.reason1Section.p1}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason1Section.p2}</p>
        <p className={pClass}><br /></p>
        {copy.reason1Section.problems.map((problem) => (
          <p key={problem} className={pClass}>{problem}</p>
        ))}
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason1Section.p3}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason1Section.p4}</p>
        <p className={pClass}><br /></p>
        {copy.reason1Section.benefits.map((benefit) => (
          <p key={benefit} className={pClass}>{benefit}</p>
        ))}
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason1Section.p5}</p>
      </RosabellaReasonSection>

      {/* Reason 2 */}
      <RosabellaReasonSection
        containerClassName="text-[23.4583px] box-border caret-transparent leading-[28.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 p-2.5 md:text-3xl md:leading-9"
        variant="title"
        title={copy.reason2Section.title}
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
        <p className={pClass}>{copy.reason2Section.p1}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason2Section.p2}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason2Section.p3}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason2Section.p4}</p>
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
        title={copy.reason3Section.title}
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
        title={copy.reason4Section.title}
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
        <p className={pClass}>{copy.reason4Section.p1}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason4Section.p2}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason4Section.p3}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason4Section.p4}</p>
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
        title={copy.reason5Section.title}
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
        <p className={pClass}>{copy.reason5Section.p1}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason5Section.p2}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason5Section.p3}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason5Section.p4}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason5Section.p5}</p>
        <p className={pClass}><br /></p>
        <p className={pClass}>{copy.reason5Section.p6}</p>
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
        href={copy.ctaUrl}
        ctaText={copy.ctaText}
        ctaClassName="text-sm hidden min-h-0 min-w-0 px-2.5 py-5 md:text-xl md:flex md:tracking-[0.4px] md:leading-6 md:min-h-[auto] md:min-w-[auto]"
        ctaSpanClassName="text-white text-3xl box-border caret-transparent inline tracking-[0.28px] leading-9 min-h-0 min-w-0 outline-[3px] pointer-events-none text-center md:block md:tracking-[0.4px] md:min-h-[auto] md:min-w-[auto]"
      />

      <RosabellaCallToActionSection
        variant="ctaButton"
        href={copy.ctaUrl}
        ctaText={copy.ctaText}
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
        href={copy.ctaUrl}
        ctaText={copy.ctaText}
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
