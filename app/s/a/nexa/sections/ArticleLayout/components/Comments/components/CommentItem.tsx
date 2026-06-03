// @ts-nocheck
export type CommentReply = {
  imageUrl: string;
  authorName: string;
  commentText: string;
  timeText: string;
};

export type CommentItemProps = {
  rootClassName: string;
  avatarUrl: string;
  contentClassName: string;
  authorName: string;
  authorClassName: string;
  commentText: string;
  commentWrapperClassName: string;
  commentTextClassName: string;
  actionsClassName: string;
  timeText: string;
  mentionName?: string;
  showAuthorHeaderWrapper?: boolean;
  authorHeaderClassName?: string;
  authorSpanClassName?: string;
  showAuthorBreak?: boolean;
  timeSuffix?: string;
  reply?: CommentReply;
};

export const CommentItem = (props: CommentItemProps) => {
  return (
    <div
      className={`box-border caret-transparent flex outline-[3px] ${props.rootClassName}`}
    >
      {props.showAuthorHeaderWrapper ? (
        <div className={props.contentClassName}>
          <img
            title=""
            src={props.avatarUrl}
            href=""
            alt=""
            className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
          />
          <div className="box-border caret-transparent outline-[3px] min-h-[auto] min-w-[auto] pb-3 px-2.5">
            <div
              className={`text-indigo-800 font-bold box-border caret-transparent outline-[3px] font-montserrat ${props.authorHeaderClassName}`}
            >
              <div className={props.authorClassName}>
                <span className={props.authorSpanClassName}>
                  {props.authorName}
                </span>
              </div>
              {props.showAuthorBreak ? (
                <div className="box-border caret-transparent outline-[3px]">
                  <span className={props.authorSpanClassName}>
                    <br className="box-border caret-transparent outline-[3px]" />
                  </span>
                </div>
              ) : null}
            </div>
            <div className={props.commentWrapperClassName}>
              <div className={props.commentTextClassName}>
                {props.mentionName ? (
                  <div className="box-border caret-transparent outline-[3px] pb-[5px]">
                    <span className="text-indigo-800 font-bold box-border caret-transparent outline-[3px]">
                      {props.mentionName}
                    </span>
                  </div>
                ) : null}
                <span className="box-border caret-transparent outline-[3px] font-montserrat">
                  {props.commentText}
                </span>
              </div>
            </div>
            <div className={props.actionsClassName}>
              <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                Like
              </div>
              <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                ·
              </div>
              <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                Reply
              </div>
              <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                ·
              </div>
              <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
                {props.timeText}
                {props.timeSuffix ? (
                  <span className="text-neutral-900 box-border caret-transparent outline-[3px]">
                    {props.timeSuffix}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <img
            title=""
            src={props.avatarUrl}
            href=""
            alt=""
            className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
          />
          <div className={props.contentClassName}>
            <div className={props.authorClassName}>{props.authorName}</div>
            <div className={props.commentWrapperClassName}>
              <div className="box-border caret-transparent outline-[3px] text-left">
                <span className={props.commentTextClassName}>
                  {props.commentText}
                </span>
              </div>
            </div>
            <div className={props.actionsClassName}>
              <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                Like
              </div>
              <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                ·
              </div>
              <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                Reply
              </div>
              <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                ·
              </div>
              <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
                {props.timeText}
                {props.timeSuffix ? (
                  <span className="text-neutral-900 box-border caret-transparent outline-[3px]">
                    {props.timeSuffix}
                  </span>
                ) : null}
              </div>
            </div>
            {props.reply ? (
              <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-[5px]">
                <img
                  title=""
                  src={props.reply.imageUrl}
                  href=""
                  alt=""
                  className="text-black box-border caret-transparent h-[45px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[45px] mt-0.5"
                />
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
                  <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
                    {props.reply.authorName}
                  </div>
                  <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
                    <div className="box-border caret-transparent outline-[3px] text-left">
                      <span className="box-border caret-transparent outline-[3px] font-montserrat">
                        {props.reply.commentText}
                      </span>
                    </div>
                  </div>
                  <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
                    <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                      Like
                    </div>
                    <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                      ·
                    </div>
                    <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                      Reply
                    </div>
                    <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                      ·
                    </div>
                    <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
                      {props.reply.timeText}
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
              </div>
            ) : null}
          </div>
          <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
        </>
      )}
    </div>
  );
};
