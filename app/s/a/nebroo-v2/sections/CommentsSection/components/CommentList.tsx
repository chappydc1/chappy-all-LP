import { CommentItem } from "./CommentItem";

type CommentReply = {
  author: string;
  text: string;
  likeCount: string;
  time: string;
  showReactionIcon: boolean;
};
type CommentCopy = {
  author: string;
  text: string;
  likeCount: string;
  time: string;
  showReactionIcon: boolean;
  replies: CommentReply[];
};
type CommentMedia = {
  avatarSrc: string;
  replyAvatars?: string[];
};

type Props = {
  copy: CommentCopy[];
  media: CommentMedia[];
  sharedMedia: { reactionIconSrc: string };
};

export const CommentList = ({ copy, media, sharedMedia }: Props) => {
  return (
    <div className="relative box-border caret-transparent outline-[3px] mb-[15px] top-2.5 md:mb-[-150px] md:top-auto">
      <ul className="box-border caret-transparent outline-[3px] pl-0 font-montserrat">
        {copy.map((comment, i) => {
          const m = media[i] ?? { avatarSrc: "" };
          const replies = comment.replies.map((r, j) => ({
            ...r,
            imageSrc: m.replyAvatars?.[j] ?? "",
            listItemClassName: "border-gray-300 border-l border-dotted",
          }));
          return (
            <CommentItem
              key={`${comment.author}-${i}`}
              imageSrc={m.avatarSrc}
              author={comment.author}
              text={comment.text}
              likeCount={comment.likeCount}
              time={comment.time}
              showReactionIcon={comment.showReactionIcon}
              replies={replies}
              reactionIconSrc={sharedMedia.reactionIconSrc}
            />
          );
        })}
      </ul>
    </div>
  );
};
