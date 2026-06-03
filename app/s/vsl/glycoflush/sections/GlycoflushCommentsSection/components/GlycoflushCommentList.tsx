import { GlycoflushCommentItem } from "../../GlycoflushCommentsSection/components/GlycoflushCommentItem";

export const GlycoflushCommentList = () => {
  return (
    <div className="relative bg-white box-border caret-transparent gap-x-0 flex flex-col flex-wrap min-h-[auto] outline-[3px] gap-y-0 w-full border border-stone-300 p-2.5 rounded-[20px] border-solid md:flex-nowrap">
      <GlycoflushCommentItem
        avatarSrc="https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/Screenshot_9-1.png"
        avatarAlt=""
        avatarClassName="aspect-[auto_43_/_49] box-border caret-transparent inline-block max-w-full outline-[3px] w-[43px] rounded-[200px]"
        name="Linda M."
        comment="Day 7 and my sugar dropped to 97. I honestly cried when I saw the meter. Thank you, Dr. Phill."
        reactionSrc="https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/@fbreaction.webp"
        reactionAlt=""
        reactionSizes="(max-width: 439px) 100vw, 439px"
        reactionCount="92"
        timeText="4h"
      />
      <GlycoflushCommentItem
        avatarSrc="https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/Screenshot_10-1.png"
        avatarAlt=""
        avatarClassName="aspect-[auto_43_/_50] w-[43px]"
        name="Samantha R. "
        comment="I’ve seen a ton of diabetes ‘cures’ online. This one hit different. Feels legit for the first time."
        reactionSrc="https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/@fbreaction.webp"
        reactionAlt=""
        reactionSizes="(max-width: 439px) 100vw, 439px"
        reactionCount="18"
        timeText="🞄 4h"
      />
      <GlycoflushCommentItem
        avatarSrc="https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/Screenshot_11-1.png"
        avatarAlt=""
        avatarClassName="aspect-[auto_42_/_48] w-[42px]"
        name="Ben H."
        comment="Okay… I usually skip these long videos. But I watched every second of this. Something about her story just felt real."
        reactionSrc="https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/@fbreaction.webp"
        reactionAlt=""
        reactionSizes="(max-width: 439px) 100vw, 439px"
        reactionCount="20"
        timeText="4h"
      />
      <GlycoflushCommentItem
        avatarSrc="https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/Screenshot_12-1.png"
        avatarAlt=""
        avatarClassName="aspect-[auto_39_/_46] w-[39px]"
        name="Amy D."
        comment="Not gonna lie — I thought this was a scam at first. But I just made it. It’s worth a shot. I just reversed my diabetes in less than 7 days..."
        reactionSrc="https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/@fbreaction.webp"
        reactionAlt=""
        reactionSizes="(max-width: 439px) 100vw, 439px"
        reactionCount="23"
        timeText="🞄 4h"
      />
      <GlycoflushCommentItem
        avatarSrc="https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/prtdepo01-3-1.webp"
        avatarAlt=""
        avatarClassName="aspect-[auto_800_/_800] box-border caret-transparent inline-block max-w-full outline-[3px] w-[800px] rounded-[200px]"
        avatarSizes="(max-width: 800px) 100vw, 800px"
        name="Carlos R."
        comment="My dad has been on insulin for 12 years. After 2 weeks on this, his doctor said ‘I don’t know what you’re doing, but keep doing it."
        reactionSrc="https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/@fbreaction.webp"
        reactionAlt=""
        reactionSizes="(max-width: 439px) 100vw, 439px"
        reactionCount="23"
        timeText="4h"
      />
      <GlycoflushCommentItem
        avatarSrc="https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/Screenshot_14-1.png"
        avatarAlt=""
        avatarClassName="aspect-[auto_39_/_47] w-[39px]"
        name="Deborah W."
        comment="Didn’t change my diet, didn’t start exercising. Just started this recipe. My energy is coming back. This is real."
        reactionSrc="https://cnbanetworks.com/glycoflush-36cad7c7-6174-46ca-a980-7acc87e61ad5/assets/img/@fbreaction.webp"
        reactionAlt=""
        reactionSizes="(max-width: 439px) 100vw, 439px"
        reactionCount="32"
        timeText="4h"
      />
      <div className="relative box-border caret-transparent gap-x-0 max-w-full min-h-[auto] outline-[3px] gap-y-0 text-center pt-5 pb-[5px] md:py-0">
        <h2 className="text-zinc-600 text-sm font-extrabold box-border caret-transparent leading-[14px] outline-[3px] font-roboto md:text-base md:leading-4">
          This post is no longer receiving comments!
        </h2>
      </div>
    </div>
  );
};
