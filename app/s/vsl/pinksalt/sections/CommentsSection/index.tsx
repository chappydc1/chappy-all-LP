import { PinksaltCommentHeader } from "./components/PinksaltCommentHeader";
import { PinksaltCommentItem, PinksaltReply } from "./components/PinksaltCommentItem";
import { PinksaltReplyItem } from "./components/PinksaltReplyItem";

type AdvReply = {
  name: string;
  text: string;
  actionText?: string;
};

type AdvComment = {
  name: string;
  text: string;
  actionText: string;
  replies?: AdvReply[];
  replyActionText?: string;
};

type CommentAvatarKeys = {
  avatar: string;
  replies: string[];
};

type CommentsSectionProps = {
  header?: string;
  comments?: AdvComment[];
  avatars?: Record<string, string>;
  avatarKeys?: CommentAvatarKeys[];
};

const STANDALONE_REPLY_COMMENT_INDEXES = new Set([0, 3]);

export const PinksaltCommentsSection = ({
  header = "959 Comments",
  comments = [],
  avatars = {},
  avatarKeys = [],
}: CommentsSectionProps) => {
  return (
    <div className="relative bg-white flex flex-col max-w-full w-full px-5 md:px-0">
      <div className="items-stretch gap-x-px flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-px w-full mx-auto pt-2.5 pb-[60px] md:flex-nowrap md:max-w-[972px] md:pt-[25px] md:pb-[50px]">
        <PinksaltCommentHeader header={header} />

        {comments.map((comment, commentIndex) => {
          const keys = avatarKeys[commentIndex];
          const replies = (comment.replies ?? []).map((r, i) => ({
            ...r,
            avatarSrc: avatars[keys?.replies[i] ?? ""] ?? "",
          }));
          const isStandalone = STANDALONE_REPLY_COMMENT_INDEXES.has(commentIndex);
          const nestedReplies: PinksaltReply[] = (isStandalone ? [] : replies)
            .map((r) => ({
              avatarSrc: r.avatarSrc,
              name: r.name,
              comment: r.text,
              actionText: r.actionText ?? "",
              actionBarClass: "text-[13px] leading-[19.5px] -mt-3 md:text-sm md:leading-[21px] md:mt-1.5",
              actionTextClass: "text-[13px] leading-[19.5px] md:text-sm md:leading-[21px]",
            }));

          const standaloneReplies = isStandalone ? replies : [];

          return (
            <div key={commentIndex}>
              <PinksaltCommentItem
                avatarSrc={avatars[keys?.avatar ?? ""] ?? ""}
                name={comment.name}
                comment={comment.text}
                actionText={comment.actionText}
                actionBarClass="mt-[-18px] ml-[77px]"
                replies={nestedReplies.length ? nestedReplies : undefined}
              />
              {standaloneReplies.map((r, i) => (
                <PinksaltReplyItem
                  key={i}
                  variant="comment"
                  variantClass="gap-x-px gap-y-px ml-[65px] md:ml-[100px]"
                  avatarSrc={r.avatarSrc}
                  authorName={r.name}
                  commentText={r.text}
                />
              ))}
              {comment.replyActionText && (
                <PinksaltReplyItem
                  variant="actions"
                  variantClass="text-blue-800 text-sm gap-x-px leading-[21px] gap-y-px text-left ml-[121px] -mt-0.5 font-roboto md:ml-[170px] md:mt-1.5"
                  likeIconClass="h-3.5 w-3.5 mx-[0.98px]"
                  replyIconClass="h-3.5 w-3.5 mx-[0.98px]"
                  actionText={comment.replyActionText}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
