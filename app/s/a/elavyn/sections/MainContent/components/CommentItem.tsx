// @ts-nocheck
import media from "../../../media.json";

export type CommentItemReply = {
  avatarUrl?: string;
  author: string;
  text: string;
  likes: string;
  time: string;
  showReactionIcon?: boolean;
};

export type CommentItemProps = {
  className: string;
  avatarUrl?: string;
  author: string;
  text: string;
  likes: string;
  time: string;
  showReactionIcon?: boolean;
  imageUrl?: string;
  replies?: CommentItemReply[];
};

export const CommentItem = (props: CommentItemProps) => {
  return (
    <li className={props.className}>
      <img
        src={props.avatarUrl}
        alt=""
        className="text-[15px] box-border caret-transparent float-left leading-[27px] max-w-full object-cover outline-[3px] w-12 mr-2 mt-[5px] rounded-[50%] md:text-base md:leading-[28.8px]"
      />
      <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
        <h3 className="text-indigo-800 text-base font-bold box-border caret-transparent inline-block leading-[20.8px] max-w-full outline-[3px] text-left font-helvetica">
          {props.author}
        </h3>
        <p className="text-black text-base box-border caret-transparent tracking-[normal] leading-5 max-w-full outline-[3px] break-words text-left my-1 font-helvetica">
          {props.text}
        </p>
        {props.imageUrl ? (
          <img
            src={props.imageUrl}
            alt=""
            className="text-[15px] box-border caret-transparent h-[200px] leading-[27px] max-w-full outline-[3px] my-1.5 rounded-bl rounded-br rounded-tl rounded-tr md:text-base md:leading-[28.8px]"
          />
        ) : null}
        <div className="text-[15px] box-border caret-transparent h-[25px] leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
          <p className="text-black text-base box-border caret-transparent tracking-[normal] leading-5 max-w-full outline-[3px] break-words text-left my-1 font-helvetica">
            <span className="text-slate-500 text-sm box-border caret-transparent max-w-full outline-[3px] break-words">
              Like
            </span>
            {" · "}
            <span className="text-slate-500 text-sm box-border caret-transparent max-w-full outline-[3px] break-words">
              Reply
            </span>
            {" · "}
            {props.showReactionIcon ? (
              <>
                <img
                  src={media.comments.reactionIcon}
                  alt=""
                  className="relative box-border caret-transparent max-w-full outline-[3px] break-words w-[13px] bottom-[3px]"
                />
                <span className="text-zinc-500 text-sm box-border caret-transparent max-w-full outline-[3px] break-words">
                  {props.likes}
                </span>
              </>
            ) : (
              <span className="text-zinc-500 text-sm box-border caret-transparent max-w-full outline-[3px] break-words">
                {props.likes}
              </span>
            )}
            {" · "}
            <span className="text-zinc-500 text-sm box-border caret-transparent max-w-full outline-[3px] break-words">
              {props.time}
            </span>
          </p>
        </div>
        {props.replies && props.replies.length > 0 ? (
          <ul className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] mt-1.5 pl-[52px] md:text-base md:leading-[28.8px]">
            {props.replies.map((reply, index) => (
              <li
                className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 md:text-base md:leading-[28.8px]"
                key={`${reply.author}-${index}`}
              >
                <img
                  src={reply.avatarUrl}
                  alt=""
                  className="text-[15px] box-border caret-transparent float-left leading-[27px] max-w-full object-cover outline-[3px] w-9 mr-2 mt-[5px] rounded-[50%] md:text-base md:leading-[28.8px]"
                />
                <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                  <h3 className="text-indigo-800 text-base font-bold box-border caret-transparent inline-block leading-[20.8px] max-w-full outline-[3px] text-left font-helvetica">
                    {reply.author}
                  </h3>
                  <p className="text-black text-base box-border caret-transparent tracking-[normal] leading-5 max-w-full outline-[3px] break-words text-left my-1 font-helvetica">
                    {reply.text}
                  </p>
                  <div className="text-[15px] box-border caret-transparent h-[25px] leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                    <p className="text-black text-base box-border caret-transparent tracking-[normal] leading-5 max-w-full outline-[3px] break-words text-left my-1 font-helvetica">
                      <span className="text-slate-500 text-sm box-border caret-transparent max-w-full outline-[3px] break-words">
                        Like
                      </span>
                      {" · "}
                      <span className="text-slate-500 text-sm box-border caret-transparent max-w-full outline-[3px] break-words">
                        Reply
                      </span>
                      {" · "}
                      {reply.showReactionIcon ? (
                        <>
                          <img
                            src={media.comments.reactionIcon}
                            alt=""
                            className="relative box-border caret-transparent max-w-full outline-[3px] break-words w-[13px] bottom-[3px]"
                          />
                          <span className="text-zinc-500 text-sm box-border caret-transparent max-w-full outline-[3px] break-words">
                            {reply.likes}
                          </span>
                        </>
                      ) : (
                        <span className="text-zinc-500 text-sm box-border caret-transparent max-w-full outline-[3px] break-words">
                          {reply.likes}
                        </span>
                      )}
                      {" · "}
                      <span className="text-zinc-500 text-sm box-border caret-transparent max-w-full outline-[3px] break-words">
                        {reply.time}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
};
