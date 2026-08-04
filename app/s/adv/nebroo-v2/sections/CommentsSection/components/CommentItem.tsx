export type CommentReply = {
  imageSrc: string;
  author: string;
  text: string;
  likeCount: string;
  time: string;
  listItemClassName: string;
  showReactionIcon: boolean;
};

export type CommentItemProps = {
  itemClassName: string;
  imageSrc: string;
  contentClassName: string;
  author: string;
  authorClassName: string;
  text: string;
  textElement: string;
  textClassName: string;
  likeCount: string;
  likeCountClassName: string;
  time: string;
  showReactionIcon: boolean;
  showEmptyBeforeText: boolean;
  showEmptyAfterText: boolean;
  repliesListClassName: string;
  replies: CommentReply[];
};

export const CommentItem = (props: CommentItemProps) => {
  return (
    <li
      className={`items-start box-border caret-transparent flex outline-[3px] mt-2.5 ${props.itemClassName}`}
    >
      <img
        src={props.imageSrc}
        title=""
        alt=""
        className="box-border caret-transparent float-left h-12 max-w-[95%] min-h-[auto] min-w-[auto] outline-[3px] w-[50px] mr-2 mt-[5px]"
      />
      <div
        className={`box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] ml-2.5 font-helvetica ${props.contentClassName}`}
      >
        <h3
          className={`text-indigo-800 font-bold box-border caret-transparent leading-[16.8px] outline-[3px] mb-1 ${props.authorClassName}`}
        >
          {props.author}
        </h3>
        {props.showEmptyBeforeText ? (
          <p className="box-border caret-transparent outline-[3px] mb-[3px]"></p>
        ) : null}
        {props.textElement === "div" ? (
          <div
            className={`box-border caret-transparent outline-[3px] ${props.textClassName}`}
          >
            {props.text}
          </div>
        ) : (
          <p className={props.textClassName}>{props.text}</p>
        )}
        {props.showEmptyAfterText ? (
          <p className="box-border caret-transparent outline-[3px]"></p>
        ) : null}
        <div className="box-border caret-transparent h-[25px] outline-[3px]">
          <p className="text-xs box-border caret-transparent leading-[18px] outline-[3px]">
            <span className="text-indigo-800 box-border caret-transparent outline-[3px] hover:underline">
              Like
            </span>
            {" · "}
            <span className="text-indigo-800 box-border caret-transparent outline-[3px] hover:underline">
              Reply
            </span>
            {" · "}
            {props.showReactionIcon ? (
              <img
                src="https://c.animaapp.com/mrj44hg5QubImt/assets/22.avif"
                title=""
                alt=""
                className="relative box-border caret-transparent inline h-[15px] max-w-[95%] outline-[3px] w-[13px] bottom-[3px]"
              />
            ) : null}
            <span className={props.likeCountClassName}>{props.likeCount}</span>
            {" · "}
            <span className="text-black box-border caret-transparent outline-[3px]">
              {props.time}
            </span>
          </p>
        </div>
        {props.replies.length > 0 ? (
          <ul
            className={`box-border caret-transparent list-[circle] outline-[3px] pl-0 ${props.repliesListClassName}`}
          >
            {props.replies.map((reply, index) => (
              <li
                key={`${reply.author}-${index}`}
                className={`items-start box-border caret-transparent flex outline-[3px] ${reply.listItemClassName}`}
              >
                <img
                  src={reply.imageSrc}
                  title=""
                  alt=""
                  className="box-border caret-transparent float-left h-9 max-w-[95%] min-h-[auto] min-w-[auto] outline-[3px] w-10 mr-2 mt-[5px]"
                />
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] ml-2.5">
                  <h3 className="text-indigo-800 font-bold box-border caret-transparent leading-[16.8px] outline-[3px] mb-1">
                    {reply.author}
                  </h3>
                  <p className="text-black box-border caret-transparent outline-[3px] mb-[3px]">
                    {reply.text}
                  </p>
                  <div className="box-border caret-transparent h-[25px] outline-[3px]">
                    <p className="text-xs box-border caret-transparent leading-[18px] outline-[3px]">
                      <span className="text-indigo-800 box-border caret-transparent outline-[3px] hover:underline">
                        Like
                      </span>
                      {" · "}
                      <span className="text-indigo-800 box-border caret-transparent outline-[3px] hover:underline">
                        Reply
                      </span>
                      {" · "}
                      {reply.showReactionIcon ? (
                        <img
                          src="https://c.animaapp.com/mrj44hg5QubImt/assets/22.avif"
                          title=""
                          alt=""
                          className="relative box-border caret-transparent inline h-[15px] max-w-[95%] outline-[3px] w-[13px] bottom-[3px]"
                        />
                      ) : null}
                      <span className="text-black box-border caret-transparent outline-[3px]">
                        {reply.likeCount}
                      </span>
                      {" · "}
                      <span className="text-black box-border caret-transparent outline-[3px]">
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
