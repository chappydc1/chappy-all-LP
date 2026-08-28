"use client";

import { useAdvertorialData } from "../VitalityDigestTopBar/context";
import { VitalityDigestCommentThread } from "./components/VitalityDigestCommentThread";

export const VitalityDigestCommentsSection = (): React.ReactElement => {
  const { content, media } = useAdvertorialData();
  const { comments } = content;

  return (
    <div className="flex flex-col w-full border border-neutral-400/70 m-2.5 p-2.5 rounded-[10px]">
      <div className="flex flex-col w-full gap-2.5">
        <p className="text-neutral-500 font-bold text-[15px] leading-[19.5px] px-2.5 pt-[5px] pb-2.5">
          {comments.header}
        </p>
        {comments.items.map((comment) => (
          <VitalityDigestCommentThread
            key={comment.id}
            comment={comment}
            avatars={media.commentAvatars}
            reactionIcons={media.reactionIcons}
          />
        ))}
      </div>
    </div>
  );
};
