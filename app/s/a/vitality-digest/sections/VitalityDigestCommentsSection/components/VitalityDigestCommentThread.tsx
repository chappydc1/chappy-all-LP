import type { CommentEntry } from "../../VitalityDigestTopBar/context";

export type VitalityDigestCommentThreadProps = {
  comment: CommentEntry;
  avatars: Record<string, string>;
  reactionIcons: string[];
};

const VitalityDigestCommentBubble = ({
  comment,
  avatars,
  reactionIcons,
  isReply,
}: VitalityDigestCommentThreadProps & { isReply: boolean }): React.ReactElement => {
  return (
    <div className={`flex w-full ${isReply ? "gap-2.5" : "gap-2.5 mt-[5px]"}`}>
      <img
        alt=""
        src={avatars[comment.avatarKey]}
        className={`rounded-full shrink-0 ${isReply ? "w-[35px] h-[35px]" : "w-[45px] h-[45px]"}`}
      />
      <div className="flex flex-col w-full">
        <div className="bg-gray-100 text-black text-[15px] leading-[22.5px] w-full mx-2.5 p-2.5 rounded-[20px]">
          <p className="font-bold m-0">{comment.author}</p>
          <p className="m-0">{comment.text}</p>
        </div>
        <div className="mx-2.5 flex items-center justify-between">
          <div>
            <span className="text-neutral-500 text-xs font-bold leading-3 mr-2">
              Like
            </span>
            <span className="text-neutral-500 text-xs font-bold leading-3 mr-2">
              Reply
            </span>
            <span className="text-neutral-500 text-xs leading-3">
              {comment.time}
            </span>
          </div>
          {comment.reactionCount ? (
            <div className="items-center bg-white shadow-[rgba(0,0,0,0.2)_0px_1px_3px_0px] flex relative px-1 rounded-[50px]">
              {reactionIcons.map((icon, index) => (
                <img
                  key={icon}
                  src={icon}
                  alt=""
                  className={`inline w-[18px] ${index > 0 ? "ml-[-7px]" : "z-[1]"}`}
                />
              ))}
              <span className="text-neutral-500 block text-xs leading-3">
                {comment.reactionCount}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export const VitalityDigestCommentThread = ({
  comment,
  avatars,
  reactionIcons,
}: VitalityDigestCommentThreadProps): React.ReactElement => {
  return (
    <div className="w-full">
      <VitalityDigestCommentBubble
        comment={comment}
        avatars={avatars}
        reactionIcons={reactionIcons}
        isReply={false}
      />
      {comment.replies ? (
        <div className="pl-10 mt-[5px] flex flex-col gap-[5px]">
          {comment.replies.map((reply) => (
            <VitalityDigestCommentBubble
              key={reply.id}
              comment={reply}
              avatars={avatars}
              reactionIcons={reactionIcons}
              isReply
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
