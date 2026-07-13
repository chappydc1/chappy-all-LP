import copy from "../../../copy.json";
import media from "../../../media.json";

type CommentItem = {
  name: string;
  text: string;
  time: string;
  avatar: keyof typeof media.avatars;
  reactionCount?: string;
  replies?: CommentItem[];
};

function CommentReactions({
  reactionCount,
}: {
  reactionCount?: string;
}): React.ReactElement | null {
  if (!reactionCount) return null;
  return (
    <div className="relative right-0.5 bottom-3.5 flex items-center gap-[5px] self-end rounded-[50px] bg-white px-1 shadow-[rgba(0,0,0,0.2)_0px_1px_3px_0px]">
      <span className="flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={media.reactionLike.src} alt="" className="z-[1] w-[18px]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={media.reactionHeart.src} alt="" className="-ml-[7px] w-[18px]" />
      </span>
      <span className="text-xs leading-3 text-neutral-500">{reactionCount}</span>
    </div>
  );
}

function CommentRow({
  comment,
  isReply,
}: {
  comment: CommentItem;
  isReply: boolean;
}): React.ReactElement {
  return (
    <div className="flex gap-2.5 pt-[5px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={media.avatars[comment.avatar]}
        alt=""
        className={isReply ? "rounded-full w-[35px]" : "rounded-full w-[45px]"}
      />
      <div className="flex flex-1 flex-col">
        <div className="w-fit rounded-[20px] bg-gray-100 p-2.5 text-[15px] leading-[22.5px] text-black">
          <p className="font-bold">{comment.name}</p>
          <p>{comment.text}</p>
        </div>
        <div className="mx-2.5 mt-1 flex items-center justify-between">
          <div className="flex gap-2 text-xs font-bold leading-3 text-neutral-500">
            <span>Like</span>
            <span>Reply</span>
            <span className="font-normal">{comment.time}</span>
          </div>
          <CommentReactions reactionCount={comment.reactionCount} />
        </div>
      </div>
    </div>
  );
}

function CommentThread({ comment }: { comment: CommentItem }): React.ReactElement {
  return (
    <div>
      <CommentRow comment={comment} isReply={false} />
      {comment.replies ? (
        <div className="ml-10 flex flex-col">
          {comment.replies.map((reply) => (
            <CommentRow key={`${reply.name}-${reply.time}-${reply.text}`} comment={reply} isReply />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function VitalitydigestCommentsSection(): React.ReactElement {
  const comments = copy.comments as CommentItem[];
  return (
    <div className="flex flex-col gap-[5px] rounded-[10px] border border-solid border-neutral-400/70 p-2.5">
      <p className="pb-2.5 text-[15px] font-bold leading-[19.5px] text-neutral-500">
        All comments &#9661;
      </p>
      {comments.map((comment) => (
        <CommentThread key={`${comment.name}-${comment.text}`} comment={comment} />
      ))}
    </div>
  );
}
