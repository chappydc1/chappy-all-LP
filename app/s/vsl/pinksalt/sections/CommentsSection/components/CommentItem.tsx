"use client";
import { useState } from "react";

export type PinksaltReply = {
  avatarSrc: string;
  name: string;
  comment: string;
  actionText: string;
  actionBarClass: string;
  actionTextClass?: string;
};

export type PinksaltCommentItemProps = {
  variant?: "image-only";
  avatarSrc?: string;
  name?: string;
  comment?: string;
  actionText?: string;
  outerClass?: string;
  actionBarClass?: string;
  replies?: PinksaltReply[];
};

const ActionBar = ({
  actionText,
  barClass,
  textClass,
}: {
  actionText?: string;
  barClass?: string;
  textClass?: string;
}) => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setLiked((prev) => {
      setCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  };

  return (
    <div
      className={`relative text-blue-800 text-sm box-border caret-transparent gap-x-5 leading-[21px] max-w-full min-h-[auto] gap-y-5 text-left font-roboto md:ml-[95px] md:-mt-8 ${barClass}`}
    >
      <p className={`box-border caret-transparent mb-[14.4px] flex items-center gap-1 flex-wrap ${textClass ?? ""}`}>
        <button
          onClick={handleLike}
          className={`like-btn font-inherit text-inherit ${liked ? "text-blue-600" : ""}`}
          aria-label="Like"
        >
          <img
            role="img"
            alt="👍"
            src="/images/pinksalt/1f44d.svg"
            className="box-border caret-transparent inline max-w-full h-3.5 w-3.5 mx-[0.98px]"
          />
          {" Like"}
          {count > 0 && (
            <span className="ml-0.5 text-blue-600 font-semibold">{count}</span>
          )}
        </button>
        {"     "}
        <span className="reply-btn font-inherit text-inherit">
          <img
            role="img"
            alt="🔁"
            src="/images/pinksalt/1f501.svg"
            className="box-border caret-transparent inline max-w-full h-3.5 w-3.5 mx-[0.98px]"
          />
          {` Reply – ${actionText}`}
        </span>
      </p>
    </div>
  );
};

export const PinksaltCommentItem = (props: PinksaltCommentItemProps) => {
  if (props.variant === "image-only") {
    return (
      <img
        src={props.avatarSrc}
        alt=""
        className="aspect-[auto_50_/_50] box-border caret-transparent inline h-[63px] object-cover align-baseline w-[63px] rounded-[9px] md:h-[86px] md:w-[86px]"
      />
    );
  }

  return (
    <div
      className={`relative content-start bg-white box-border caret-transparent gap-x-5 grid grid-cols-[repeat(1,1fr)] grid-rows-[repeat(1,1fr)] justify-start min-h-[auto] gap-y-5 w-full pt-[25px] px-0 md:px-[55px] ${props.outerClass ?? "md:pt-[30px]"}`}
    >
      <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5">
        <div className="box-border caret-transparent text-left overflow-hidden">
          <div className="box-border caret-transparent leading-4 w-full">
            <div className="box-border caret-transparent inline-block">
              <div className="box-border caret-transparent table-cell align-middle pr-[15px]">
                <img
                  src={props.avatarSrc}
                  alt=""
                  className="aspect-[auto_50_/_50] box-border caret-transparent inline h-[63px] object-cover align-baseline w-[63px] rounded-[9px] md:h-[86px] md:w-[86px] transition-transform duration-200 hover:scale-105"
                />
              </div>
              <div className="box-border caret-transparent table-cell text-start align-middle">
                <div className="text-blue-700 text-base font-bold box-border caret-transparent leading-[17.6px] font-arial md:text-[17px] md:leading-[22px]">
                  {props.name}
                </div>
                <div className="text-zinc-600 text-xs box-border caret-transparent font-arial md:text-sm">
                  {props.comment}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ActionBar
        actionText={props.actionText}
        barClass={props.actionBarClass}
      />
      {props.replies &&
        props.replies.map((reply, index) => (
          <div key={index}>
            <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 ml-[65px] md:ml-[100px]">
              <div className="box-border caret-transparent text-left overflow-hidden">
                <div className="box-border caret-transparent leading-4 w-full">
                  <div className="box-border caret-transparent inline-block">
                    <div className="box-border caret-transparent table-cell align-middle pr-[15px]">
                      <img
                        src={reply.avatarSrc}
                        alt=""
                        className="aspect-[auto_50_/_50] box-border caret-transparent inline h-[43px] object-cover align-baseline w-[43px] rounded-[9px] md:h-[53px] md:w-[53px] transition-transform duration-200 hover:scale-105"
                      />
                    </div>
                    <div className="box-border caret-transparent table-cell text-start align-middle">
                      <div className="text-blue-700 text-base font-bold box-border caret-transparent leading-[17.6px] font-arial md:text-[17px] md:leading-[22px]">
                        {reply.name}
                      </div>
                      <div className="text-zinc-600 text-[11px] box-border caret-transparent font-arial md:text-sm">
                        {reply.comment}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`relative text-blue-800 box-border caret-transparent gap-x-5 max-w-full min-h-[auto] gap-y-5 text-left ml-[121px] font-roboto md:ml-[170px] ${reply.actionBarClass}`}
            >
              <ActionBar
                actionText={reply.actionText}
                barClass=""
                textClass={reply.actionTextClass}
              />
            </div>
          </div>
        ))}
    </div>
  );
};
