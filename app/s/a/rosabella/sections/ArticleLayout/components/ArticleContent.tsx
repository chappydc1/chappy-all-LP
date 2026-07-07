"use client";

import { useAdvertorial } from "../../LandingPage/context";
import { RosabellaArticleHeader } from "./ArticleHeader";
import { RosabellaReasonSection } from "./ReasonSection";
import { RosabellaCallToActionSection } from "./CallToActionSection";
import { RosabellaCommentsSection } from "./CommentsSection";

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
        ratingText={copy.ratingText}
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
        bodyContent={
          <>
            <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
              Studies show that{" "}
            </span>
            <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
              Moringa
            </strong>
            <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
              {" "}
              can help lower blood sugar and cholesterol. It also has{" "}
            </span>
            <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
              antioxidant
            </strong>
            <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
              {" "}
              and{" "}
            </span>
            <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
              anti-inflammatory
            </strong>
            <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
              {" "}
              benefits that support overall health.
            </span>
          </>
        }
      />
      <RosabellaArticleHeader variant="default" />

      {/* Intro / Problem section */}
      <RosabellaReasonSection
        containerClassName="text-[23.4583px] box-border caret-transparent leading-[28.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 p-2.5 md:text-3xl md:leading-9"
        variant="title"
        title="Have You Felt Constantly Drained No Matter What You Try?"
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
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            Maybe you&apos;ve noticed your energy levels crashing by midday…
          </span>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <br />
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            Or your mind feels foggy, making it harder to focus or remember
            things…
          </span>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <br />
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            Maybe your body feels just tired and sluggish, and no matter how
            much you rest, you{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            never feel fully recharged
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            …
          </span>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <br />
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            And after trying{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            endless vitamins, diets, and morning routines
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            {" "}
            - with little to no change - you start to wonder if this is just
            your new normal.
          </span>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <br />
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            It&apos;s{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            frustrating
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            ,{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            exhausting
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            , and leaves you feeling{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            trapped in a cycle of stress and burnout
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            .
          </span>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <br />
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            But it{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            doesn&apos;t have to be like this.
          </strong>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <br />
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            Because scientists have finally discovered the{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            real reason why so many people feel chronically drained
          </strong>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            It&apos;s called{" "}
          </span>
          <strong className="text-lime-500 text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            <u className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] underline md:text-xl md:leading-[30px]">
              <a
                href={copy.ctaUrl}
                className="text-green-600 text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] underline md:text-xl md:leading-[30px]"
              >
                Rosabella Moringa
              </a>
              .
            </u>
          </strong>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <br />
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            And people who&apos;ve tried it are experiencing{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            noticeable improvements in their energy, focus, metabolism, and
            sleep within just a few weeks.
          </strong>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <br />
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            So if you&apos;re wondering whether{" "}
          </span>
          <strong className="text-lime-500 text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            <u className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] underline md:text-xl md:leading-[30px]">
              <a
                href={copy.ctaUrl}
                className="text-green-600 text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] underline md:text-xl md:leading-[30px]"
              >
                Rosabella Moringa
              </a>
            </u>
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            {" "}
            can really work for you, here are{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            5 reasons why thousands of people are choosing it over every other
            supplement on the market:
          </strong>
        </p>
      </RosabellaReasonSection>

      {/* Reason 1 */}
      <RosabellaReasonSection
        containerClassName="text-[23.4583px] box-border caret-transparent leading-[28.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-5 p-2.5 md:text-3xl md:leading-9"
        variant="title"
        title="1.Fixes The Core Reason You're Exhausted, Stressed, and Stuck"
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
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            Nothing else on the market is proven to fix the{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            real
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            {" "}
            cause of low energy, brain fog, and stubborn weight gain -{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            chronically high cortisol.
          </strong>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            When cortisol stays high, it:
          </span>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            ❌ Drains energy
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            {" "}
            no matter how much you rest.
          </span>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            ❌ Slows metabolism
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            , making weight loss harder.
          </span>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            ❌ Disrupts sleep
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            , leaving you groggy and restless.
          </span>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            ❌ Causes brain fog
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            {" "}
            and forgetfulness.
          </span>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            Rosabella Moringa is the only natural solution designed to lower
            cortisol and restore your energy, metabolism, and focus.
          </strong>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            With powerful adaptogens and nutrients, it helps:
          </span>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            ✅ Boost energy naturally
          </strong>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            ✅ Improve metabolism and weight loss
          </strong>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            ✅ Sharpen focus and clear brain fog
          </strong>
        </p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            ✅ Promote deep, restful sleep
          </strong>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            Thousands are already feeling the difference.{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            Try it today, risk-free.
          </strong>
        </p>
      </RosabellaReasonSection>

      {/* Reason 2 */}
      <RosabellaReasonSection
        containerClassName="text-[23.4583px] box-border caret-transparent leading-[28.15px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 p-2.5 md:text-3xl md:leading-9"
        variant="title"
        title="2.No Side-Effects - 100% From Nature"
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
        <div className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] w-full md:text-xl md:leading-[30px]">
          <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            <span className="text-black text-xl box-border caret-transparent leading-[30px] outline-[3px]">
              Most supplements for energy, stress, and metabolism come with a
              long list of side effects - jitters, crashes, headaches,
              grogginess, and even hormone imbalances.
            </span>
          </p>
          <p><br /></p>
          <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            <strong className="text-black text-xl font-bold box-border caret-transparent leading-[30px] outline-[3px]">
              Rosabella Moringa is different.
            </strong>
          </p>
          <p><br /></p>
          <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            <span className="text-black text-xl box-border caret-transparent leading-[30px] outline-[3px]">
              Made with{" "}
            </span>
            <strong className="text-black text-xl font-bold box-border caret-transparent leading-[30px] outline-[3px]">
              100% natural ingredients
            </strong>
            <span className="text-black text-xl box-border caret-transparent leading-[30px] outline-[3px]">
              , it works with your body to lower cortisol, boost energy, and
              restore balance -{" "}
            </span>
            <strong className="text-black text-xl font-bold box-border caret-transparent leading-[30px] outline-[3px]">
              without harsh stimulants or synthetic additives.
            </strong>
          </p>
          <p><br /></p>
          <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            <span className="text-black text-xl box-border caret-transparent leading-[30px] outline-[3px]">
              You get real, lasting results without the risks. No crashes, no
              grogginess, no dependency - just a natural way to feel better
              every day.
            </span>
          </p>
        </div>
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
        title="3.First Results In 2-3 Weeks"
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
        title="4.Thousands of People Worldwide Love It and Can't Live Without It"
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
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            Designed to{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            lower cortisol and restore balance
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            , it has helped people regain their energy, improve focus, sleep
            better, and feel like themselves again.
          </span>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            Those who tried it can&apos;t stop talking about how quickly they
            felt the difference -{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            more energy, clearer thinking, and a body that finally feels in
            sync.
          </strong>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            With consistent use, they&apos;ve seen{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            remarkable transformations
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            {" "}
            - proving that Rosabella Moringa truly works.
          </span>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            Join the thousands who have found a{" "}
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            real solution
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            {" "}
            for lasting energy, focus, and well-being. Your transformation
            starts today.
          </span>
        </p>
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
        title="5.100% Risk-Free Guarantee"
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
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            Unlike other supplements,&nbsp;
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            we guarantee real results.
          </strong>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            That&apos;s why we offer our&nbsp;
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            &quot;Feel the Transformation or Get Your Money Back&quot;
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            &nbsp;Guarantee.
          </span>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            If you don&apos;t experience&nbsp;
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            constant energy that keeps you going strong, crystal-clear focus,
            deep, restful sleep, and a body that finally feels in balance
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            &nbsp;- simply contact us, and we&apos;ll give you a full refund.
          </span>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            No questions asked. No hassle.
          </strong>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            With&nbsp;
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            thousands already experiencing
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            &nbsp;life-changing results with Rosabella Moringa - and with
            our&nbsp;
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            100% risk-free guarantee
          </strong>
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            &nbsp;- the only thing you lose is the chance to finally feel like
            the best version of yourself.
          </span>
        </p>
        <p><br /></p>
        <p className="text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
          <span className="text-black text-[20.4583px] box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            Try it today,&nbsp;
          </span>
          <strong className="text-black text-[20.4583px] font-bold box-border caret-transparent leading-[30.6875px] outline-[3px] md:text-xl md:leading-[30px]">
            completely risk-free.
          </strong>
        </p>
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
