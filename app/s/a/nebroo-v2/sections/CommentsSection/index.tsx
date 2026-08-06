import { CommentInput } from "./components/CommentInput";
import { CommentList } from "./components/CommentList";

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

export const CommentsSection = ({ copy, media, sharedMedia }: Props) => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full min-h-full outline-[3px] p-2.5 md:flex-nowrap">
      <div className="relative bg-white box-border caret-transparent basis-full grow max-w-[1200px] min-h-[25px] outline-[3px] w-min mx-auto px-0 py-2.5 md:basis-0 md:px-2.5">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="text-black box-border caret-transparent outline-[3px] font-montserrat">
            <span className="box-border caret-transparent outline-[3px]">
              <b className="text-lg font-bold box-border caret-transparent leading-[27px] outline-[3px]">
                Comments
              </b>
            </span>
          </div>
        </div>
        <CommentInput />
        <CommentList copy={copy} media={media} sharedMedia={sharedMedia} />
      </div>
    </div>
  );
};
