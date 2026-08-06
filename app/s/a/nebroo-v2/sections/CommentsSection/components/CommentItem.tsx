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
  imageSrc: string;
  author: string;
  text: string;
  likeCount: string;
  time: string;
  showReactionIcon: boolean;
  replies: CommentReply[];
  reactionIconSrc: string;
};

export const CommentItem = (props: CommentItemProps) => {
  return (
    <li className="items-start box-border caret-transparent flex outline-[3px] mt-2.5">
      <img
        src={props.imageSrc}
        title=""
        alt=""
        className="box-border caret-transparent float-left h-12 max-w-[95%] min-h-[auto] min-w-[auto] outline-[3px] w-[50px] mr-2 mt-[5px]"
      />
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] ml-2.5 font-helvetica">
        <h3 className="text-indigo-800 font-bold box-border caret-transparent leading-[16.8px] outline-[3px] mb-1 text-left">
          {props.author}
        </h3>
        <p className="text-black box-border caret-transparent outline-[3px] mb-[3px]">
          {props.text}
        </p>
        <div className="box-border caret-transparent h-[25px] outline-[3px]">
          <p className="text-xs box-border caret-transparent leading-[18px] outline-[3px]">
            <span className="text-indigo-800 box-border caret-transparent outline-[3px] hover:underline">Like</span>
            {" · "}
            <span className="text-indigo-800 box-border caret-transparent outline-[3px] hover:underline">Reply</span>
            {" · "}
            {props.showReactionIcon && (
              <img
                src={props.reactionIconSrc}
                title=""
                alt=""
                className="relative box-border caret-transparent inline h-[15px] max-w-[95%] outline-[3px] w-[13px] bottom-[3px]"
              />
            )}
            <span className="text-black box-border caret-transparent outline-[3px]">{props.likeCount}</span>
            {" · "}
            <span className="text-black box-border caret-transparent outline-[3px]">{props.time}</span>
          </p>
        </div>
        {props.replies.length > 0 && (
          <ul className="box-border caret-transparent list-[circle] outline-[3px] pl-0 border-b-neutral-800 border-l-gray-300 border-r-neutral-800 border-t-neutral-800 border-l">
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
                  <p className="text-black box-border caret-transparent outline-[3px] mb-[3px]">{reply.text}</p>
                  <div className="box-border caret-transparent h-[25px] outline-[3px]">
                    <p className="text-xs box-border caret-transparent leading-[18px] outline-[3px]">
                      <span className="text-indigo-800 box-border caret-transparent outline-[3px] hover:underline">Like</span>
                      {" · "}
                      <span className="text-indigo-800 box-border caret-transparent outline-[3px] hover:underline">Reply</span>
                      {" · "}
                      {reply.showReactionIcon && (
                        <img
                          src={props.reactionIconSrc}
                          title=""
                          alt=""
                          className="relative box-border caret-transparent inline h-[15px] max-w-[95%] outline-[3px] w-[13px] bottom-[3px]"
                        />
                      )}
                      <span className="text-black box-border caret-transparent outline-[3px]">{reply.likeCount}</span>
                      {" · "}
                      <span className="text-black box-border caret-transparent outline-[3px]">{reply.time}</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};
