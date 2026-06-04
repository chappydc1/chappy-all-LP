"use client";

import { AmalaTopBar } from "./sections/AmalaTopBar";
import { AmalaBrandHeader } from "./sections/AmalaBrandHeader";
import { AmalaProductHero } from "./sections/AmalaProductHero";
import { AmalaContentSection } from "./sections/AmalaContentSection";
import { AmalaStatsSection } from "./sections/AmalaStatsSection";
import { AmalaTestimonialsSection } from "./sections/AmalaTestimonialsSection";
import { AmalaPromiseSection } from "./sections/AmalaPromiseSection";
import { AmalaTimelineSection } from "./sections/AmalaTimelineSection";
import { AmalaComparisonSection } from "./sections/AmalaComparisonSection";
import { AmalaOfferSection } from "./sections/AmalaOfferSection";
import { AmalaFaqSection } from "./sections/AmalaFaqSection";
import { AmalaStickyMobileCta } from "./sections/AmalaStickyMobileCta";
import { AmalaFooter } from "./sections/AmalaFooter";
import type { AmalaProductHeroContent } from "./sections/AmalaProductHero/types";

type AmalaContentSections = {
  hiddenDeficiencies: any;
  cellularSupport: any;
};

type AmalaAppProps = {
  contentSections: AmalaContentSections;
  productHero: AmalaProductHeroContent;
};

export const AmalaApp = ({ contentSections, productHero }: AmalaAppProps) => {
  return (
    <div className="text-gray-500 text-[13px] not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[19.5px] list-outside list-disc outline-[3px] pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-sans_serif">
      <div
        className="text-gray-800 text-sm bg-white bg-no-repeat box-border caret-transparent leading-[21px] outline-[3px] text-center font-libre_franklin"
      >
        <main
          className="items-center box-border caret-transparent flex flex-col min-h-[1000px] outline-[3px] w-full"
        >
          <AmalaTopBar />
          <AmalaBrandHeader />
          <AmalaProductHero content={productHero} />
          <AmalaContentSection {...contentSections.hiddenDeficiencies} />
          <AmalaStatsSection />
          <AmalaContentSection {...contentSections.cellularSupport} />
          <AmalaTestimonialsSection
            sectionVariant="hidden"
            title="See Why This Clinically-Studied Molecule Is Used Daily for Longevity Optimization"
            desktopTestimonials={[
              {
                layout: "default",
                containerVariant:
                  "relative basis-full max-w-full min-h-[25px] w-full p-px md:p-2.5",
                innerWrapperVariant:
                  "bg-zinc-300/30 flex flex-col w-full border border-zinc-700 rounded-[10px] border-solid md:flex-row",
                imageWrapperVariant: "w-full md:w-[70%]",
                imageUrl:
                  "/s/sal/amala/1763159900122_testemonial_card01.webp",
                imageAlt: "",
                imageClassName:
                  "text-black inline border-zinc-700 rounded-l-[10px] border-b border-l border-t border-solid",
                quote:
                  '"PiPi Tea Ceremonial Matcha is my new moment of self-care in the morning! It’s the most delicious and pure matcha I’ve ever tasted. Every morning feels like a little ritual now. You can really taste the quality in every sip."',
                quoteClassName: "text-lg leading-[27px] mb-[15px]",
                ratingImageUrl:
                  "/s/sal/amala/1760839096564_trustpilot_review.png",
                ratingImageAlt: "",
                reviewerName: "Chloe B.",
                reviewerNameClassName:
                  "text-[16.9583px] font-bold leading-[25.4375px] md:text-base md:leading-6",
                verifiedText: "Verified Buyer",
                verifiedTextClassName:
                  "text-[16.9583px] leading-[25.4375px] md:text-base md:leading-6",
                badgeIconUrl:
                  "/s/sal/amala/28.png",
                badgeIconAlt: "",
                avatarUrl: "",
                avatarAlt: "",
                cardClassName: "",
                textBlockClassName:
                  "text-lime-600 text-[16.9583px] font-bold leading-6 md:text-base",
                reviewerRowClassName: "",
                reviewBodyClassName: "",
              },
              {
                layout: "default",
                containerVariant:
                  "relative basis-full max-w-full min-h-[25px] w-full p-2.5",
                innerWrapperVariant:
                  "bg-zinc-300/30 w-full border border-zinc-700 rounded-[10px] border-solid",
                imageWrapperVariant: "w-[70%]",
                imageUrl:
                  "/s/sal/amala/1763160922349_testemonial_card02.webp",
                imageAlt: "",
                imageClassName:
                  "text-black inline border-zinc-700 rounded-l-[10px] border-b border-l border-t border-solid",
                quote:
                  '"This organic ceremonial matcha has been amazing for helping me maintain emotional balance and reduce feelings of stress and irritability throughout the day. it gives me steady, clean energy without the crazy crashes that coffee does!"',
                quoteClassName: "text-lg",
                ratingImageUrl:
                  "/s/sal/amala/1760839096564_trustpilot_review.png",
                ratingImageAlt: "",
                reviewerName: "Isabella K. ",
                reviewerNameClassName:
                  "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedText: "Verified Buyer",
                verifiedTextClassName:
                  "text-lime-600 text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                badgeIconUrl:
                  "/s/sal/amala/28.png",
                badgeIconAlt: "",
                avatarUrl: "",
                avatarAlt: "",
                cardClassName: "",
                textBlockClassName:
                  "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                reviewerRowClassName: "",
                reviewBodyClassName: "",
              },
              {
                layout: "default",
                containerVariant:
                  "relative basis-full max-w-full min-h-[25px] w-full p-2.5",
                innerWrapperVariant:
                  "bg-zinc-300/30 w-full border border-zinc-700 rounded-[10px] border-solid",
                imageWrapperVariant: "w-[70%]",
                imageUrl:
                  "/s/sal/amala/1763161308906_testemonial_card03.webp",
                imageAlt: "",
                imageClassName:
                  "text-black inline border-zinc-700 rounded-l-[10px] border-b border-l border-t border-solid",
                quote:
                  "\"I'm very picky about the matcha I drink, and this one just hits different! It's 100% organic, so it has this naturally smooth and slightly sweet flavor. I love having it in the morning — it gets me through the rest of the day without feeling tired or drained.\"",
                quoteClassName: "text-lg leading-[27px]",
                ratingImageUrl:
                  "/s/sal/amala/1760839096564_trustpilot_review.png",
                ratingImageAlt: "",
                reviewerName: "Mia S.",
                reviewerNameClassName:
                  "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedText: "Verified Buyer",
                verifiedTextClassName:
                  "text-lime-600 text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                badgeIconUrl:
                  "/s/sal/amala/28.png",
                badgeIconAlt: "",
                avatarUrl: "",
                avatarAlt: "",
                cardClassName: "",
                textBlockClassName:
                  "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                reviewerRowClassName: "",
                reviewBodyClassName: "",
              },
              {
                layout: "default",
                containerVariant:
                  "relative basis-full max-w-full min-h-[25px] w-full p-2.5",
                innerWrapperVariant:
                  "bg-zinc-300/30 w-full border border-zinc-700 rounded-[10px] border-solid",
                imageWrapperVariant: "w-[70%]",
                imageUrl:
                  "/s/sal/amala/1763161513697_testemonial_card04.webp",
                imageAlt: "",
                imageClassName:
                  "text-black inline border-zinc-700 rounded-l-[10px] border-b border-l border-t border-solid",
                quote:
                  '"The flavor of this matcha is extraordinary, and I absolutely love how I feel after drinking it in the morning. It makes me feel so good and relaxed every time. The quality is exceptional, and it has definitely become a staple in my daily routine."',
                quoteClassName: "text-lg leading-[27px]",
                ratingImageUrl:
                  "/s/sal/amala/1760839096564_trustpilot_review.png",
                ratingImageAlt: "",
                reviewerName: "Sophia B. ",
                reviewerNameClassName:
                  "text-[16.9583px] font-bold leading-[25.4375px] md:text-base md:leading-6",
                verifiedText: "Verified Buyer",
                verifiedTextClassName:
                  "text-[16.9583px] leading-[25.4375px] md:text-base md:leading-6",
                badgeIconUrl:
                  "/s/sal/amala/28.png",
                badgeIconAlt: "",
                avatarUrl: "",
                avatarAlt: "",
                cardClassName: "",
                textBlockClassName:
                  "text-lime-600 text-[16.9583px] font-bold leading-[25.4375px] md:text-base md:leading-6",
                reviewerRowClassName: "",
                reviewBodyClassName: "",
              },
            ]}
            mobileTestimonials={[
              {
                layout: "default",
                containerVariant:
                  "relative basis-full max-w-full min-h-[25px] w-full p-px md:p-2.5",
                innerWrapperVariant:
                  "bg-zinc-300/30 flex flex-col w-full border border-zinc-700 rounded-[10px] border-solid md:flex-row",
                imageWrapperVariant: "w-full md:w-[70%]",
                imageUrl:
                  "/s/sal/amala/1763162111286_testemonial_card01_mobile.webp",
                imageAlt: "",
                imageClassName:
                  "text-black inline border-zinc-700 rounded-t-[10px] rounded-bl-none border-b-0 border-l border-r border-t border-solid md:rounded-tr-none md:rounded-bl-[10px] md:border-r-0 md:border-b",
                quote:
                  '"PiPi Tea Ceremonial Matcha is my new moment of self-care in the morning! It’s the most delicious and pure matcha I’ve ever tasted. Every morning feels like a little ritual now. You can really taste the quality in every sip."',
                quoteClassName:
                  "text-black text-base box-border caret-transparent leading-6 outline-[3px] text-left mb-[15px] md:text-lg md:leading-[27px]",
                ratingImageUrl:
                  "/s/sal/amala/1760839096564_trustpilot_review.png",
                ratingImageAlt: "",
                reviewerName: "Chloe B.",
                reviewerNameClassName:
                  "text-sm font-bold box-border caret-transparent leading-[21px] outline-[3px] md:text-base md:leading-6",
                verifiedText: "Verified Buyer",
                verifiedTextClassName:
                  "text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                badgeIconUrl:
                  "/s/sal/amala/28.png",
                badgeIconAlt: "",
                avatarUrl: "",
                avatarAlt: "",
                cardClassName: "",
                textBlockClassName:
                  "text-lime-600 text-sm font-bold box-border caret-transparent leading-6 outline-[3px] md:text-base",
                reviewerRowClassName: "",
                reviewBodyClassName: "",
              },
              {
                layout: "default",
                containerVariant:
                  "relative basis-full max-w-full min-h-[25px] w-full pt-2.5 pb-0 px-0 md:pb-2.5 md:px-2.5",
                innerWrapperVariant:
                  "bg-zinc-300/30 flex-col w-full border border-zinc-700 rounded-[10px] border-solid md:flex-row",
                imageWrapperVariant: "w-full md:w-[70%]",
                imageUrl:
                  "/s/sal/amala/1763162175131_testemonial_card02_mobile.webp",
                imageAlt: "",
                imageClassName:
                  "text-black inline border-zinc-700 rounded-tl-[10px] rounded-bl-none border-b-0 border-l border-r border-t border-solid md:rounded-bl-[10px] md:border-r-0 md:border-b",
                quote:
                  '"This organic ceremonial matcha has been amazing for helping me maintain emotional balance and reduce feelings of stress and irritability throughout the day. it gives me steady, clean energy without the crazy crashes that coffee does!"',
                quoteClassName:
                  "text-[15px] leading-[22.5px] md:text-lg md:leading-[27px]",
                ratingImageUrl:
                  "/s/sal/amala/1760839096564_trustpilot_review.png",
                ratingImageAlt: "",
                reviewerName: "Isabella K.",
                reviewerNameClassName:
                  "text-sm font-bold box-border caret-transparent leading-[21px] outline-[3px] md:text-base md:leading-6",
                verifiedText: "Verified Buyer",
                verifiedTextClassName:
                  "text-lime-600 text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                badgeIconUrl:
                  "/s/sal/amala/28.png",
                badgeIconAlt: "",
                avatarUrl: "",
                avatarAlt: "",
                cardClassName: "",
                textBlockClassName:
                  "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                reviewerRowClassName: "",
                reviewBodyClassName: "",
              },
              {
                layout: "default",
                containerVariant:
                  "relative basis-full max-w-full min-h-[25px] w-full pt-2.5 pb-0 px-0 md:pb-2.5 md:px-2.5",
                innerWrapperVariant:
                  "bg-zinc-300/30 flex-col w-full border border-zinc-700 rounded-[10px] border-solid md:flex-row",
                imageWrapperVariant: "w-full md:w-[70%]",
                imageUrl:
                  "/s/sal/amala/1763162328868_testemonial_card03_mobile.webp",
                imageAlt: "",
                imageClassName:
                  "text-black inline border-zinc-700 rounded-t-[10px] rounded-bl-none border-b-0 border-l border-r border-t border-solid md:rounded-tr-none md:rounded-bl-[10px] md:border-r-0 md:border-b",
                quote:
                  "\"I'm very picky about the matcha I drink, and this one just hits different! It's 100% organic, so it has this naturally smooth and slightly sweet flavor. I love having it in the morning — it gets me through the rest of the day without feeling tired or drained.\"",
                quoteClassName:
                  "text-base leading-6 md:text-lg md:leading-[27px]",
                ratingImageUrl:
                  "/s/sal/amala/1760839096564_trustpilot_review.png",
                ratingImageAlt: "",
                reviewerName: "Mia S.",
                reviewerNameClassName:
                  "text-sm font-bold leading-[21px] md:text-base md:leading-6",
                verifiedText: "Verified Buyer",
                verifiedTextClassName:
                  "text-lime-600 text-[16.9583px] leading-[25.4375px] md:text-base md:leading-6",
                badgeIconUrl:
                  "/s/sal/amala/28.png",
                badgeIconAlt: "",
                avatarUrl: "",
                avatarAlt: "",
                cardClassName: "",
                textBlockClassName:
                  "text-sm font-bold leading-[21px] md:text-base md:leading-6",
                reviewerRowClassName: "",
                reviewBodyClassName: "",
              },
              {
                layout: "default",
                containerVariant:
                  "relative basis-full max-w-full min-h-[25px] w-full pt-2.5 pb-0 px-0 md:pb-2.5 md:px-2.5",
                innerWrapperVariant:
                  "bg-zinc-300/30 flex flex-col w-full border border-zinc-700 rounded-[10px] border-solid md:flex-row",
                imageWrapperVariant: "w-full md:w-[70%]",
                imageUrl:
                  "/s/sal/amala/1763162413178_testemonial_card04_mobile.webp",
                imageAlt: "",
                imageClassName:
                  "text-black inline border-zinc-700 rounded-t-[10px] rounded-bl-none border-b-0 border-l border-r border-t border-solid md:rounded-tr-none md:rounded-bl-[10px] md:border-r-0 md:border-b",
                quote:
                  '"The flavor of this matcha is extraordinary, and I absolutely love how I feel after drinking it in the morning. It makes me feel so good and relaxed every time. The quality is exceptional, and it has definitely become a staple in my daily routine."',
                quoteClassName:
                  "text-base leading-6 md:text-lg md:leading-[27px]",
                ratingImageUrl:
                  "/s/sal/amala/1760839096564_trustpilot_review.png",
                ratingImageAlt: "",
                reviewerName: "Sophia B.",
                reviewerNameClassName:
                  "text-sm font-bold box-border caret-transparent leading-[21px] outline-[3px] md:text-base md:leading-6",
                verifiedText: "Verified Buyer",
                verifiedTextClassName:
                  "text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                badgeIconUrl:
                  "/s/sal/amala/28.png",
                badgeIconAlt: "",
                avatarUrl: "",
                avatarAlt: "",
                cardClassName: "",
                textBlockClassName:
                  "text-lime-600 text-sm font-bold box-border caret-transparent leading-[21px] outline-[3px] md:text-base md:leading-6",
                reviewerRowClassName: "",
                reviewBodyClassName: "",
              },
            ]}
            ctaContainerVariant="mt-10 md:mt-5"
            ctaSectionVariant=""
            ctaWrapperVariant=""
            ctaContentVariant=""
            ctaButtonVariant="bg-zinc-700"
            ctaInnerButtonVariant=""
            ctaMediaRowVariant=""
            ctaMediaWrapperVariant=""
            ctaMediaInnerVariant="mt-5"
            ctaMediaItemVariant=""
            ctaImageWrapperVariant=""
            ctaImageSrc="/s/sal/amala/20.svg"
            ctaImageAlt=""
            ctaImageSizes="1170px"
            ctaImageClassName=""
            ctaTextWrapperVariant=""
            ctaHeadingTag="p"
            ctaHeadingText="90-Day Money Back Guarantee"
            ctaHeadingClassName="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-base md:leading-6"
            ctaText="BUY NOW & SAVE"
            ctaTitle="BUY NOW & SAVE"
          />
          <AmalaPromiseSection
            heading="Rosabella Moringa Promise"
            sectionVariant="relative bg-zinc-300/30 hidden"
            outerClassName=""
            contentClassName=""
            headingWrapperClassName="text-black text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] text-center w-full md:text-[35px] md:leading-[42px]"
            desktopListWrapperClassName="box-border caret-transparent flex flex-col outline-[3px] w-full"
            mobileListWrapperClassName="box-border caret-transparent flex flex-col outline-[3px] w-full"
            leftIconSrc="/s/sal/amala/19.svg"
            rightIconSrc="/s/sal/amala/18.svg"
            leftIconClassName="absolute box-border caret-transparent max-w-full outline-[3px] w-full bottom-0 md:bottom-[-45px]"
            rightIconClassName="absolute box-border caret-transparent max-w-full outline-[3px] w-full top-0 md:top-[-45px]"
            showTopIcons="true"
            desktopItems={[
              {
                imageSrc: "/s/sal/amala/31.png",
                text: "Clean and Traceable",
                alt: "",
                title: "",
                layoutVariant: "",
              },
              {
                imageSrc: "/s/sal/amala/32.png",
                text: "Freshly Harvested",
                alt: "",
                title: "",
                layoutVariant: "",
              },
              {
                imageSrc: "/s/sal/amala/33.png",
                text: "No Artificial Additives",
                alt: "",
                title: "",
                layoutVariant: "default",
              },
              {
                imageSrc: "/s/sal/amala/40.png",
                text: "Gluten Free",
                alt: "",
                title: "",
                layoutVariant: "default",
              },
              {
                imageSrc: "/s/sal/amala/41.png",
                text: "Non-GMO",
                alt: "",
                title: "",
                layoutVariant: "",
              },
              {
                imageSrc: "/s/sal/amala/44.png",
                text: "Manufactured in an FDA-Registered Facility",
                alt: "",
                title: "",
                layoutVariant: "default",
              },
            ]}
            mobileItems={[
              {
                imageSrc: "/s/sal/amala/31.png",
                text: "Clean and Traceable",
                alt: "",
                title: "",
                layoutVariant: "",
              },
              {
                imageSrc: "/s/sal/amala/32.png",
                text: "Freshly Harvested",
                alt: "",
                title: "",
                layoutVariant: "",
              },
              {
                imageSrc: "/s/sal/amala/33.png",
                text: "No Artificial Additives",
                alt: "",
                title: "",
                layoutVariant: "default",
              },
              {
                imageSrc: "/s/sal/amala/40.png",
                text: "Gluten Free",
                alt: "",
                title: "",
                layoutVariant: "default",
              },
              {
                imageSrc: "/s/sal/amala/41.png",
                text: "Non-GMO",
                alt: "",
                title: "",
                layoutVariant: "",
              },
              {
                imageSrc: "/s/sal/amala/44.png",
                text: "Manufactured in an FDA-Registered Facility",
                alt: "",
                title: "",
                layoutVariant: "default",
              },
            ]}
          />
          <AmalaPromiseSection
            heading="PrimeCell H2 Promise"
            sectionVariant="flex min-h-[auto] min-w-[auto] border-emerald-800/20 border-b"
            outerClassName="min-h-[auto] min-w-[auto]"
            contentClassName="min-h-[auto] min-w-[auto]"
            headingWrapperClassName="text-black text-[27.0583px] box-border caret-transparent leading-[32.47px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-[35px] md:leading-[42px]"
            desktopListWrapperClassName="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            mobileListWrapperClassName="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            leftIconSrc=""
            rightIconSrc=""
            leftIconClassName=""
            rightIconClassName=""
            showTopIcons="false"
            desktopItems={[
              {
                imageSrc:
                  "/s/sal/amala/1763968601409_Artboard_1_2.png",
                text: "10+ PPM Concentration",
                alt: "",
                title: "",
                layoutVariant: "default",
              },
              {
                imageSrc:
                  "/s/sal/amala/1763969613132_Artboard_2.png",
                text: "Third-Party Tested",
                alt: "",
                title: "",
                layoutVariant: "",
              },
              {
                imageSrc:
                  "/s/sal/amala/1763969626478_Artboard_6.png",
                text: "No Fillers or Additives",
                alt: "",
                title: "",
                layoutVariant: "default",
              },
              {
                imageSrc:
                  "/s/sal/amala/1763969636410_Artboard_5.png",
                text: "Non-GMO",
                alt: "",
                title: "",
                layoutVariant: "default",
              },
              {
                imageSrc:
                  "/s/sal/amala/1763969646394_Artboard_3.png",
                text: "FDA-Registered Facility",
                alt: "",
                title: "",
                layoutVariant: "default",
              },
              {
                imageSrc:
                  "/s/sal/amala/1763969660423_Artboard_4.png",
                text: "GMP Certified",
                alt: "",
                title: "",
                layoutVariant: "",
              },
            ]}
            mobileItems={[
              {
                imageSrc:
                  "/s/sal/amala/1763968601409_Artboard_1_2.png",
                text: "10+ PPM Concentration",
                alt: "",
                title: "",
                layoutVariant: "compactWrapped",
              },
              {
                imageSrc:
                  "/s/sal/amala/1763969613132_Artboard_2.png",
                text: "Third-Party Tested",
                alt: "",
                title: "",
                layoutVariant: "default",
              },
              {
                imageSrc:
                  "/s/sal/amala/1763969626478_Artboard_6.png",
                text: "No Fillers or Additives",
                alt: "",
                title: "",
                layoutVariant: "compactWrapped",
              },
              {
                imageSrc:
                  "/s/sal/amala/1763969636410_Artboard_5.png",
                text: "Non-GMO",
                alt: "",
                title: "",
                layoutVariant: "compact",
              },
              {
                imageSrc:
                  "/s/sal/amala/1763969646394_Artboard_3.png",
                text: "FDA-Registered Facility",
                alt: "",
                title: "",
                layoutVariant: "compactWrapped",
              },
              {
                imageSrc:
                  "/s/sal/amala/1763969660423_Artboard_4.png",
                text: "GMP Certified",
                alt: "",
                title: "",
                layoutVariant: "compact",
              },
            ]}
          />
          <AmalaTimelineSection />
          <AmalaComparisonSection />
          <section
            className="items-center bg-no-repeat box-border caret-transparent hidden flex-col justify-items-center outline-[3px] w-full bg-center px-[15px] py-[45px] md:py-[60px]"
          >
            <div
              className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] outline-[3px] text-start w-full bg-center md:flex-row"
            >
              <div
                className="box-border caret-transparent outline-[3px] align-top w-full"
              >
                <div
                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                >
                  <div
                    className="text-black text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] text-center w-full md:text-[35px] md:leading-[42px]"
                  >
                    <div
                      className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] w-full md:text-[35px] md:leading-[42px]"
                    >
                      <p
                        className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]"
                      >
                        <strong
                          className="text-[27.0583px] font-bold box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]"
                        >
                          How to Prepare Ceremonial Matcha
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                >
                  <div
                    className="box-border caret-transparent flex flex-col outline-[3px] w-full"
                  >
                    <div
                      className="items-start box-border caret-transparent flex flex-col flex-wrap mt-10 md:flex-row"
                    >
                      <div
                        className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
                      >
                        <div
                          className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                        >
                          <div
                            className="box-border caret-transparent flex flex-col outline-[3px] w-full"
                          >
                            <div
                              className="items-start box-border caret-transparent flex flex-wrap"
                            >
                              <div
                                className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px]"
                              >
                                <div
                                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                                >
                                  <div
                                    className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full mb-5"
                                  >
                                    <img
                                      src="/s/sal/amala/1762567172520_Step01.webp"
                                      alt=""
                                      title=""
                                      className="box-border caret-transparent h-full max-w-full outline-[3px] w-full rounded-md"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                                >
                                  <div
                                    className="text-black text-[20.4583px] box-border caret-transparent leading-[24.55px] outline-[3px] text-center w-full md:text-[23px] md:leading-[27.6px]"
                                  >
                                    <div
                                      className="text-[20.4583px] box-border caret-transparent leading-[24.55px] outline-[3px] w-full md:text-[23px] md:leading-[27.6px]"
                                    >
                                      <p
                                        className="text-[20.4583px] box-border caret-transparent leading-[24.55px] outline-[3px] md:text-[23px] md:leading-[27.6px]"
                                      >
                                        <strong
                                          className="text-[20.4583px] font-bold box-border caret-transparent leading-[24.55px] outline-[3px] md:text-[23px] md:leading-[27.6px]"
                                        >
                                          Measure
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                                >
                                  <div
                                    className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] text-center w-full mt-2.5 md:text-lg md:leading-[27px]"
                                  >
                                    <div
                                      className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
                                    >
                                      <p
                                        className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                                      >
                                        Add 1-2 teaspoons of ceremonial matcha
                                        powder to your bowl or cup.
                                        <br className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]" />
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-10 min-w-10 outline-[3px] w-10"
                      >
                        <div
                          className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                        >
                          <div
                            className="box-border caret-transparent flex flex-col outline-[3px] w-full"
                          >
                            <div
                              className="items-start box-border caret-transparent flex flex-wrap mt-[30px]"
                            >
                              <div
                                className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px]"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
                      >
                        <div
                          className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                        >
                          <div
                            className="box-border caret-transparent flex flex-col outline-[3px] w-full"
                          >
                            <div
                              className="items-start box-border caret-transparent flex flex-wrap"
                            >
                              <div
                                className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px]"
                              >
                                <div
                                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                                >
                                  <div
                                    className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full mb-5"
                                  >
                                    <img
                                      src="/s/sal/amala/1762906518710_step02_v2.webp"
                                      alt=""
                                      title=""
                                      className="box-border caret-transparent h-full max-w-full outline-[3px] w-full rounded-md"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                                >
                                  <div
                                    className="text-black text-[20.4583px] box-border caret-transparent leading-[24.55px] outline-[3px] text-center w-full md:text-[23px] md:leading-[27.6px]"
                                  >
                                    <div
                                      className="text-[20.4583px] box-border caret-transparent leading-[24.55px] outline-[3px] w-full md:text-[23px] md:leading-[27.6px]"
                                    >
                                      <p
                                        className="text-[20.4583px] box-border caret-transparent leading-[24.55px] outline-[3px] md:text-[23px] md:leading-[27.6px]"
                                      >
                                        <strong
                                          className="text-[20.4583px] font-bold box-border caret-transparent leading-[24.55px] outline-[3px] md:text-[23px] md:leading-[27.6px]"
                                        >
                                          Add Water &amp; Whisk
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                                >
                                  <div
                                    className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] text-center w-full mt-2.5 md:text-lg md:leading-[27px]"
                                  >
                                    <div
                                      className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
                                    >
                                      <p
                                        className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                                      >
                                        Pour 2-4 oz of hot water (175°F) and
                                        whisk vigorously for 15-30 seconds until
                                        frothy.
                                        <br className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]" />
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-10 min-w-10 outline-[3px] w-10"
                      >
                        <div
                          className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                        >
                          <div
                            className="box-border caret-transparent flex flex-col outline-[3px] w-full"
                          >
                            <div
                              className="items-start box-border caret-transparent flex flex-wrap mt-[30px]"
                            >
                              <div
                                className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px]"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
                      >
                        <div
                          className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                        >
                          <div
                            className="box-border caret-transparent flex flex-col outline-[3px] w-full"
                          >
                            <div
                              className="items-start box-border caret-transparent flex flex-wrap"
                            >
                              <div
                                className="box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px]"
                              >
                                <div
                                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                                >
                                  <div
                                    className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full mb-5"
                                  >
                                    <img
                                      src="/s/sal/amala/1762907146975_step03_v2.webp"
                                      alt=""
                                      title=""
                                      className="box-border caret-transparent h-full max-w-full outline-[3px] w-full rounded-md"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                                >
                                  <div
                                    className="text-black text-[20.4583px] box-border caret-transparent leading-[24.55px] outline-[3px] text-center w-full md:text-[23px] md:leading-[27.6px]"
                                  >
                                    <div
                                      className="text-[20.4583px] box-border caret-transparent leading-[24.55px] outline-[3px] w-full md:text-[23px] md:leading-[27.6px]"
                                    >
                                      <p
                                        className="text-[20.4583px] box-border caret-transparent leading-[24.55px] outline-[3px] md:text-[23px] md:leading-[27.6px]"
                                      >
                                        <strong
                                          className="text-[20.4583px] font-bold box-border caret-transparent leading-[24.55px] outline-[3px] md:text-[23px] md:leading-[27.6px]"
                                        >
                                          Enjoy
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                                >
                                  <div
                                    className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] text-center w-full mt-2.5 md:text-lg md:leading-[27px]"
                                  >
                                    <div
                                      className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
                                    >
                                      <p
                                        className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
                                      >
                                        Drink immediately hot, add milk for a
                                        latte, or pour over ice. Drink daily for
                                        full benefits.
                                        <br className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]" />
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <AmalaOfferSection />
          <AmalaTestimonialsSection
            sectionVariant="min-h-[auto] min-w-[auto]"
            title="What Our Customers Are Saying"
            showRatingSummary="true"
            ratingValue="4.8"
            ratingImageUrl="/s/sal/amala/7.png"
            ratingImageAlt=""
            ratingLabel="Average Rating"
            ratingSummaryRows={[
              {
                percentage: "88%",
                barWidthClassName: "w-[88%]",
                starsImageUrl:
                  "/s/sal/amala/7.png",
                starsImageAlt: "",
              },
              {
                percentage: "12%",
                barWidthClassName: "w-[12%]",
                starsImageUrl:
                  "/s/sal/amala/9.png",
                starsImageAlt: "",
              },
              {
                percentage: "0%",
                barWidthClassName: "w-[0%]",
                starsImageUrl:
                  "/s/sal/amala/10.png",
                starsImageAlt: "",
              },
              {
                percentage: "0%",
                barWidthClassName: "w-[0%]",
                starsImageUrl:
                  "/s/sal/amala/11.png",
                starsImageAlt: "",
              },
              {
                percentage: "0%",
                barWidthClassName: "w-[0%]",
                starsImageUrl:
                  "/s/sal/amala/13.png",
                starsImageAlt: "",
              },
            ]}
            desktopImageColumns="4"
            desktopTestimonials={[
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/1763722487387_customer_2.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `I started taking PrimeCell H2 during a particularly stressful quarter at work and honestly didn't expect much - I've tried every supplement out there. But this is different. My recovery time after workouts cut in half, my afternoon crashes disappeared, and my brain fog lifted within the first week. I'm tracking my HRV and it's improved 15 points. This isn't placebo - this is cellular optimization working. Total game changer!`,
                reviewerName: "Michael T.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/1763722566969_customer_4.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `Fast shipping and exactly as described. I've been using it for about a month now as part of my longevity stack. The mental clarity is real - I can focus for hours without that foggy feeling I used to get. Also noticed my sleep quality improved significantly (tracking with Oura Ring). The science behind molecular hydrogen is solid, and this product delivers on the promise.`,
                reviewerName: "David R.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/1763722716927_customer_9.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `Very fast shipping. Quality is outstanding - you can tell this isn't some underdosed Amazon knockoff. I've been using it daily for 6 weeks and my energy levels are consistently high without any crashes. My wife even commented that I "seem sharper" lately. Making this a permanent part of my protocol.`,
                reviewerName: "Marcus P.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/1763722627006_customer_5.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `PrimeCell H2 has seriously upgraded my biohacking routine. I've been trying to reduce my reliance on stimulants, and this gives me sustained energy and mental clarity without any jitters or crash. I'm also noticing faster recovery between training sessions. The hydrogen concentration is legit - I tested it myself. This is now foundational in my stack.`,
                reviewerName: "Brian H.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/1763722446289_customer_1.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `So impressed! My PrimeCell H2 arrived in just 2 days, and I could tell the quality was legit from the packaging alone. I've been taking one tablet every morning for three weeks now - it dissolves fast, has a light fizz, and I genuinely feel more energized throughout the day without needing my usual 3pm coffee. My joints feel better too. Wish I'd found this sooner.`,
                reviewerName: "Sarah K.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/1763722531282_customer_3.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `PrimeCell H2 is smooth, effective, and has become my non-negotiable morning ritual. I drop one tablet in my water bottle before my workout and the difference in recovery is incredible. I'm 47 and keeping up with guys in their 20s at CrossFit. My inflammation markers dropped on my last blood panel too. This is the real deal.`,
                reviewerName: "Jennifer L.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/1763722755280_customer_10.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `I've been keeping a bottle at my desk and taking it every morning with my first glass of water. The tablets dissolve completely in about 60 seconds - no weird aftertaste or residue. Three weeks in and I'm sleeping deeper, recovering faster from runs, and my skin actually looks better. The science checks out and so do my results.`,
                reviewerName: "Amanda C.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/1763722801190_customer_11.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `Fast shipping and excellent product. The effervescent tablets are convenient and actually pleasant to take - not like choking down horse pills. I'm two months in and the cumulative effects are undeniable: better energy, sharper focus, visible improvements in my skin, and my joint pain is almost gone. My functional medicine doctor was impressed with my latest lab results. Highly recommend.`,
                reviewerName: "Rachel M.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
            ]}
            mobileTestimonials={[
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/1763722487387_customer_2.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `I started taking PrimeCell H2 during a particularly stressful quarter at work and honestly didn't expect much - I've tried every supplement out there. But this is different. My recovery time after workouts cut in half, my afternoon crashes disappeared, and my brain fog lifted within the first week. I'm tracking my HRV and it's improved 15 points. This isn't placebo - this is cellular optimization working. Total game changer!`,
                reviewerName: "Michael T.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/p-2.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `Fast shipping and exactly as described. I've been using it for about a month now as part of my longevity stack. The mental clarity is real - I can focus for hours without that foggy feeling I used to get. Also noticed my sleep quality improved significantly (tracking with Oura Ring). The science behind molecular hydrogen is solid, and this product delivers on the promise.`,
                reviewerName: "David R.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/p-3.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `Very fast shipping. Quality is outstanding - you can tell this isn't some underdosed Amazon knockoff. I've been using it daily for 6 weeks and my energy levels are consistently high without any crashes. My wife even commented that I "seem sharper" lately. Making this a permanent part of my protocol.`,
                reviewerName: "Marcus P.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/p-4.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `PrimeCell H2 has seriously upgraded my biohacking routine. I've been trying to reduce my reliance on stimulants, and this gives me sustained energy and mental clarity without any jitters or crash. I'm also noticing faster recovery between training sessions. The hydrogen concentration is legit - I tested it myself. This is now foundational in my stack.`,
                reviewerName: "Brian H.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/p-5.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `PrimeCell H2 is smooth, effective, and has become my non-negotiable morning ritual. I drop one tablet in my water bottle before my workout and the difference in recovery is incredible. I'm 47 and keeping up with guys in their 20s at CrossFit. My inflammation markers dropped on my last blood panel too. This is the real deal.`,
                reviewerName: "Jennifer L.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/p-6.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `I've been keeping a bottle at my desk and taking it every morning with my first glass of water. The tablets dissolve completely in about 60 seconds - no weird aftertaste or residue. Three weeks in and I'm sleeping deeper, recovering faster from runs, and my skin actually looks better. The science checks out and so do my results.`,
                reviewerName: "Amanda C.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                avatarUrl: "/s/sal/amala/p-7.webp",
                avatarAlt: "",
                imageUrl: "",
                imageAlt: "",
                containerVariant: "relative flex flex-col basis-[0%] grow min-h-[25px] p-2",
                innerWrapperVariant: "bg-white rounded-xl shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px]",
                quote: `Fast shipping and excellent product. The effervescent tablets are convenient and actually pleasant to take - not like choking down horse pills. I'm two months in and the cumulative effects are undeniable: better energy, sharper focus, visible improvements in my skin, and my joint pain is almost gone. My functional medicine doctor was impressed with my latest lab results. Highly recommend.`,
                reviewerName: "Rachel M.",
                verifiedText: "Verified Buyer",
                ratingImageUrl: "/s/sal/amala/7.png",
                ratingImageAlt: "",
                badgeIconUrl: "/s/sal/amala/28.png",
                badgeIconAlt: "",
                reviewerNameClassName: "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName: "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
            ]}
            showCompactTestimonials="false"
            compactTestimonials={[
              {
                layout: "compact",
                quote: `I started taking PrimeCell H2 during a particularly stressful quarter at work and honestly didn't expect much - I've tried every supplement out there. But this is different. My recovery time after workouts cut in half, my afternoon crashes disappeared, and my brain fog lifted within the first week. I'm tracking my HRV and it's improved 15 points. This isn't placebo - this is cellular optimization working. Total game changer!`,
                reviewerName: "Michael T.",
                verifiedText: "Verified Buyer",
                containerVariant:
                  "max-w-full min-h-[auto] min-w-full w-full md:max-w-none md:min-w-0 md:w-auto",
                reviewerNameClassName:
                  "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName:
                  "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewerRowClassName: "md:text-base md:leading-6",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                quote: `Fast shipping and exactly as described. I've been using it for about a month now as part of my longevity stack. The mental clarity is real - I can focus for hours without that foggy feeling I used to get. Also noticed my sleep quality improved significantly (tracking with Oura Ring). The science behind molecular hydrogen is solid, and this product delivers on the promise.`,
                reviewerName: "David R.",
                verifiedText: "Verified Buyer",
                reviewerNameClassName:
                  "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName:
                  "text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewerRowClassName: "md:text-base md:leading-6",
                reviewBodyClassName:
                  "text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px]",
              },
              {
                layout: "compact",
                quote: `PrimeCell H2 is smooth, effective, and has become my non-negotiable morning ritual. I drop one tablet in my water bottle before my workout and the difference in recovery is incredible. I'm 47 and keeping up with guys in their 20s at CrossFit. My inflammation markers dropped on my last blood panel too. This is the real deal.`,
                reviewerName: "Jennifer L.",
                verifiedText: "Verified Buyer",
                reviewerNameClassName:
                  "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName:
                  "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewerRowClassName:
                  "text-[16.9583px] box-border caret-transparent leading-[25.4375px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mr-[5px] md:text-base md:leading-6",
                reviewBodyClassName:
                  "text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[15px] md:text-base md:leading-6",
              },
              {
                layout: "compact",
                quote: `Very fast shipping. Quality is outstanding - you can tell this isn't some underdosed Amazon knockoff. I've been using it daily for 6 weeks and my energy levels are consistently high without any crashes. My wife even commented that I "seem sharper" lately. Making this a permanent part of my protocol.`,
                reviewerName: "Marcus P.",
                verifiedText: "Verified Buyer",
                reviewerNameClassName:
                  "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName:
                  "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewerRowClassName: "md:text-base md:leading-6",
                reviewBodyClassName: "text-[16.0583px] leading-[24.0875px]",
              },
              {
                layout: "compact",
                quote: `I've been keeping a bottle at my desk and taking it every morning with my first glass of water. The tablets dissolve completely in about 60 seconds - no weird aftertaste or residue. Three weeks in and I'm sleeping deeper, recovering faster from runs, and my skin actually looks better. The science checks out and so do my results.`,
                reviewerName: "Amanda C.",
                verifiedText: "Verified Buyer",
                reviewerNameClassName:
                  "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName:
                  "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewerRowClassName: "",
                reviewBodyClassName: "",
              },
              {
                layout: "compact",
                quote: `PrimeCell H2 has seriously upgraded my biohacking routine. I've been trying to reduce my reliance on stimulants, and this gives me sustained energy and mental clarity without any jitters or crash. I'm also noticing faster recovery between training sessions. The hydrogen concentration is legit - I tested it myself. This is now foundational in my stack.`,
                reviewerName: "Brian H.",
                verifiedText: "Verified Buyer",
                reviewerNameClassName:
                  "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName:
                  "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewerRowClassName: "md:text-base md:leading-6",
                reviewBodyClassName:
                  "text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px]",
              },
              {
                layout: "compact",
                quote: `Fast shipping and excellent product. The effervescent tablets are convenient and actually pleasant to take - not like choking down horse pills. I'm two months in and the cumulative effects are undeniable: better energy, sharper focus, visible improvements in my skin, and my joint pain is almost gone. My functional medicine doctor was impressed with my latest lab results. Highly recommend.`,
                reviewerName: "Rachel M.",
                verifiedText: "Verified Buyer",
                reviewerNameClassName:
                  "text-[16.9583px] font-bold box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6",
                verifiedTextClassName:
                  "text-gray-800 text-[13.4583px] font-bold box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]",
                reviewerRowClassName: "md:text-[17px] md:leading-[25.5px]",
                reviewBodyClassName: "text-[17.4583px] leading-[26.1875px]",
              },
            ]}
            ctaContainerVariant="min-h-[auto] min-w-[auto] mt-10 md:mt-[50px]"
            ctaSectionVariant="min-h-[auto]"
            ctaWrapperVariant="min-w-[auto]"
            ctaContentVariant="min-h-[auto] min-w-[auto]"
            ctaButtonVariant="bg-gray-800 min-h-[auto] min-w-[auto]"
            ctaInnerButtonVariant=""
            ctaMediaRowVariant=""
            ctaMediaWrapperVariant="min-h-[auto] min-w-[auto]"
            ctaMediaInnerVariant="min-h-[auto] min-w-[auto]"
            ctaMediaItemVariant="min-h-[auto]"
            ctaImageWrapperVariant="min-h-[auto] min-w-[auto]"
            ctaImageSrc="/s/sal/amala/20.svg"
            ctaImageAlt=""
            ctaImageSizes="1170px"
            ctaImageClassName="min-h-[auto] min-w-[auto]"
            ctaTextWrapperVariant="min-h-[auto] min-w-[auto]"
            ctaHeadingTag="h1"
            ctaHeadingText="90-Day Money Back Guarantee"
            ctaHeadingClassName="text-[16.0583px] font-medium box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-base md:leading-6"
            ctaText="BUY NOW & SAVE"
            ctaTitle="BUY NOW & SAVE"
          />
          <AmalaFaqSection />
          <AmalaStickyMobileCta />
          <AmalaFooter />
        </main>
      </div>
      <div className="box-border caret-transparent hidden outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]">
        <a
          href="https://checkoutchamp.com/"
          title="Powered by CheckoutChamp"
          className="text-blue-600 box-border caret-transparent max-w-full outline-[3px]"
        ></a>
      </div>
    </div>
  );
};
