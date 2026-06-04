"use client";
import { useState } from "react";

export type ReplyItemProps = {
  variant: "comment" | "actions";
  variantClass: string;
  // Comment variant props
  avatarSrc?: string;
  authorName?: string;
  commentText?: string;
  // Actions variant props
  actionText?: string;
  likeIconClass?: string;
  replyIconClass?: string;
  paragraphExtraClass?: string;
};

export const ReplyItem = (props: ReplyItemProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  if (props.variant === "comment") {
    return (
      <div
        className={`relative box-border caret-transparent max-w-full min-h-[auto] ${props.variantClass}`}
      >
        <div className="box-border caret-transparent text-left overflow-hidden">
          <div className="box-border caret-transparent leading-4 w-full">
            <div className="box-border caret-transparent inline-block">
              <div className="box-border caret-transparent table-cell align-middle pr-[15px]">
                <img
                  src={props.avatarSrc}
                  alt=""
                  className="aspect-[auto_50_/_50] box-border caret-transparent inline h-[43px] object-cover align-baseline w-[43px] rounded-[9px] md:h-[53px] md:w-[53px] transition-transform duration-200 hover:scale-105"
                />
              </div>
              <div className="box-border caret-transparent table-cell text-start align-middle">
                <div className="text-blue-700 text-base font-bold box-border caret-transparent leading-[17.6px] font-arial md:text-[17px] md:leading-[22px]">
                  {props.authorName}
                </div>
                <div className="text-zinc-600 text-[11px] box-border caret-transparent font-arial md:text-sm">
                  {props.commentText}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setLiked((prev) => {
      setLikeCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  };

  return (
    <div
      className={`relative box-border caret-transparent max-w-full min-h-[auto] ${props.variantClass}`}
    >
      <p
        className={`box-border caret-transparent mb-[14.4px] flex items-center gap-1 flex-wrap ${props.paragraphExtraClass ?? ""}`.trim()}
      >
        <button
          onClick={handleLike}
          className={`like-btn font-inherit text-inherit ${liked ? "text-blue-600" : ""}`}
          aria-label="Like"
        >
          <img
            role="img"
            alt="👍"
            src="/images/pinksalt/1f44d.svg"
            className={`box-border caret-transparent inline max-w-full ${props.likeIconClass}`}
            style={{ filter: liked ? "none" : undefined }}
          />
          {" Like"}
          {likeCount > 0 && (
            <span className="ml-0.5 text-blue-600 font-semibold">{likeCount}</span>
          )}
        </button>
        {"     "}
        <span className="reply-btn font-inherit text-inherit">
          <img
            role="img"
            alt="🔁"
            src="/images/pinksalt/1f501.svg"
            className={`box-border caret-transparent inline max-w-full ${props.replyIconClass}`}
          />
          {` ${props.actionText}`}
        </span>
      </p>
    </div>
  );
};
