import { PinksaltCommentHeader } from "../CommentsSection/components/CommentHeader";
import { PinksaltCommentItem, PinksaltReply } from "../CommentsSection/components/CommentItem";
import { PinksaltReplyItem } from "../CommentsSection/components/ReplyItem";

type AdvReply = {
  id?: string;
  type: string;
  name?: string;
  text?: string;
  actionText?: string;
};

type AdvComment = {
  id: string;
  name: string;
  text: string;
  actionText: string;
  replies?: AdvReply[];
};

type CommentsSectionProps = {
  header?: string;
  comments?: AdvComment[];
  avatars?: Record<string, string>;
};

export const PinksaltCommentsSection = ({
  header = "959 Comments",
  comments = [],
  avatars = {},
}: CommentsSectionProps) => {
  return (
    <div className="relative bg-white flex flex-col max-w-full w-full px-5 md:px-0">
      <div className="items-stretch gap-x-px flex flex-col grow flex-wrap h-full max-w-[min(100%,767px)] min-h-[auto] min-w-[auto] gap-y-px w-full mx-auto pt-2.5 pb-[60px] md:flex-nowrap md:max-w-[972px] md:pt-[25px] md:pb-[50px]">
        <PinksaltCommentHeader header={header} />

        {comments.map((comment) => {
          const nestedReplies: PinksaltReply[] = (comment.replies ?? [])
            .filter((r) => r.type === "nested")
            .map((r) => ({
              avatarSrc: avatars[r.id ?? ""] ?? "",
              name: r.name ?? "",
              comment: r.text ?? "",
              actionText: r.actionText ?? "",
              actionBarClass: "text-[13px] leading-[19.5px] -mt-3 md:text-sm md:leading-[21px] md:mt-1.5",
              actionTextClass: "text-[13px] leading-[19.5px] md:text-sm md:leading-[21px]",
            }));

          const standaloneReplies = (comment.replies ?? []).filter((r) => r.type === "comment");
          const actionReplies = (comment.replies ?? []).filter((r) => r.type === "actions");

          return (
            <div key={comment.id}>
              <PinksaltCommentItem
                avatarSrc={avatars[comment.id] ?? ""}
                name={comment.name}
                comment={comment.text}
                actionText={comment.actionText}
                actionBarClass="mt-[-18px] ml-[77px]"
                replies={nestedReplies.length ? nestedReplies : undefined}
              />
              {standaloneReplies.map((r) => (
                <PinksaltReplyItem
                  key={r.id}
                  variant="comment"
                  variantClass="gap-x-px gap-y-px ml-[65px] md:ml-[100px]"
                  avatarSrc={avatars[r.id ?? ""] ?? ""}
                  authorName={r.name}
                  commentText={r.text}
                />
              ))}
              {actionReplies.map((r, i) => (
                <PinksaltReplyItem
                  key={`${comment.id}-action-${i}`}
                  variant="actions"
                  variantClass="text-blue-800 text-sm gap-x-px leading-[21px] gap-y-px text-left ml-[121px] -mt-0.5 font-roboto md:ml-[170px] md:mt-1.5"
                  likeIconClass="h-3.5 w-3.5 mx-[0.98px]"
                  replyIconClass="h-3.5 w-3.5 mx-[0.98px]"
                  actionText={r.actionText}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
