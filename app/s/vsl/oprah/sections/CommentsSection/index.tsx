"use client";

import { useEffect, useRef } from "react";
import { OprahCommentHeader } from "./components/OprahCommentHeader";
import { OprahCommentItem } from "./components/OprahCommentItem";
import { OprahReplyItem } from "./components/OprahReplyItem";

export const OprahCommentsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const revealItems = el.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-white box-border caret-transparent flex flex-col max-w-full w-full px-5 md:px-0"
    >
      <div className="items-stretch box-border caret-transparent gap-x-px flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-px w-full mx-auto pt-2.5 pb-[60px] md:flex-nowrap md:max-w-[972px] md:pt-[25px] md:pb-[50px]">
        <OprahCommentHeader />
        <OprahCommentItem
          avatarSrc="/images/oprah/hEMtnu2001596.webp"
          name="Sarah Smith"
          comment="OMG! My doctor couldn&#39;t believe it. I lost so much weight that he thought I was anorexic. But when the test results came back, I was healthier than ever!"
          actionText="15m – 1h"
          actionBarClass="mt-[-18px] ml-[77px]"
        />
        <OprahReplyItem
          variant="comment"
          variantClass="gap-x-px gap-y-px ml-[65px] md:ml-[100px]"
          avatarSrc="/images/oprah/kbPeho2025190.webp"
          authorName="Jennifer Taylor"
          commentText="Sarah Smith Girl, I lost 11 pounds in a week! This natural Zepbound is unreal!"
        />
        <OprahReplyItem
          variant="actions"
          variantClass="text-blue-800 text-[13px] gap-x-px leading-[19.5px] gap-y-px text-left ml-[121px] mt-0 font-roboto md:text-sm md:leading-[21px] md:ml-[170px] md:mt-1.5"
          paragraphExtraClass="text-[13px] leading-[19.5px] md:text-sm md:leading-[21px]"
          likeIconClass="text-[13px] h-[13px] leading-[19.5px] w-[13px] mx-[0.91px] md:text-sm md:h-3.5 md:leading-[21px] md:w-3.5 md:mx-[0.98px]"
          replyIconClass="text-[13px] h-[13px] leading-[19.5px] w-[13px] mx-[0.91px] md:text-sm md:h-3.5 md:leading-[21px] md:w-3.5 md:mx-[0.98px]"
          actionText="Reply – 15m – 1h"
        />
        <OprahCommentItem
          avatarSrc="/images/oprah/aAtbjA2058308.webp"
          name="Olivia Moore"
          comment="I&#39;ve been using this natural Zepbound for just over 3 weeks, and my pants are already falling off! Even my husband complimented me today! Thank you for helping so many people without asking for anything in return."
          actionText="15m – 1h"
          actionBarClass="mt-[-18px] ml-[77px]"
          replies={[
            {
              avatarSrc: "/images/oprah/cIxqDb2133076.webp",
              name: "Emily Johnson",
              comment: "Olivia Moore That&#39;s unreal, beautiful! Did you do anything in your routine besides the recipe?",
              actionText: "33 – 1h",
              actionBarClass: "text-[13px] leading-[19.5px] -mt-3 md:text-sm md:leading-[21px] md:mt-1.5",
              actionTextClass: "text-[13px] leading-[19.5px] md:text-sm md:leading-[21px]",
            },
            {
              avatarSrc: "/images/oprah/aAtbjA2058308.webp",
              name: "Olivia Moore",
              comment: "Emily Johnson No, just the recipe! I didn&#39;t do any diets or step foot in the gym. It&#39;s crazy how something so simple is making me lose so much weight!",
              actionText: "33 – 1h",
              actionBarClass: "text-[13px] leading-[19.5px] -mt-3 md:text-sm md:leading-[21px] md:mt-1.5",
              actionTextClass: "text-[13px] leading-[19.5px] md:text-sm md:leading-[21px]",
            },
          ]}
        />
        <OprahReplyItem
          variant="actions"
          variantClass="relative text-blue-800 text-sm box-border caret-transparent gap-x-px leading-[21px] max-w-full min-h-[auto] gap-y-px text-left ml-[121px] -mt-0.5 font-roboto md:ml-56 md:mt-1.5"
          actionText="Reply – 15 – 1h"
          likeIconClass="h-3.5 w-3.5 mx-[0.98px]"
          replyIconClass="h-3.5 w-3.5 mx-[0.98px]"
        />
        <OprahCommentItem
          avatarSrc="/images/oprah/IeAIgy2205219.webp"
          name="Elizabeth Miller"
          comment="I found this video before considering bariatric surgery! It&#39;s only been 29 days since I started, but I&#39;ve already lost 28 pounds! It feels like I have my 19-year-old body back, and I have so much energy to play with my kids and grandkids!"
          actionText="23 – 1h"
          actionBarClass="ml-[79px] -mt-4"
        />
        <OprahCommentItem
          avatarSrc="/images/oprah/KtysvY2314645.webp"
          name="Abigail Martinez"
          comment="This is the most honest and well-explained solution I&#39;ve ever seen! No long videos and no asking for anything at the end! Thank you so much!"
          actionText="13 – 1h"
          actionBarClass="mt-[-17px] ml-[77px]"
        />
        <OprahReplyItem
          variant="comment"
          variantClass="gap-x-px gap-y-px ml-[65px] md:ml-[100px]"
          avatarSrc="/images/oprah/JSKEQM2241629.webp"
          authorName="Natalie Clark"
          commentText="Abigail Martinez I researched online and found several scientific articles that prove this natural Zepbound really works! Here, the numbers on the scale keep dropping, you should try it too!"
        />
        <OprahReplyItem
          variant="actions"
          variantClass="text-blue-800 text-sm gap-x-px leading-[21px] gap-y-px text-left ml-[121px] -mt-0.5 font-roboto md:ml-[167px] md:mt-[5px]"
          actionText="Reply – 13 – 1h"
          likeIconClass="h-3.5 w-3.5 mx-[0.98px]"
          replyIconClass="h-3.5 w-3.5 mx-[0.98px]"
        />
        <OprahCommentItem
          avatarSrc="/images/oprah/pberKS2391370.webp"
          name="Jessica Brown"
          comment="Finally, someone who explains everything in just a few minutes without medical jargon! I&#39;m starting this morning! Thank you for being so clear and direct."
          actionText="13 – 1h"
          outerClass="md:pt-[29px]"
          actionBarClass="mt-[-15px] ml-[79px]"
          replies={[
            {
              avatarSrc: "/images/oprah/FEksgJ2345870.webp",
              name: "Chloe Garcia",
              comment: "After 3 weeks, my belly is finally flat like a board, I&#39;ve lost 26 pounds without even dieting! I already feel lighter and more beautiful!",
              actionText: "13 – 1h",
              actionBarClass: "text-sm leading-[21px] mt-[-19px] md:mt-[-13px]",
            },
          ]}
        />
      </div>
    </div>
  );
};
