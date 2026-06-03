export type CommentItemProps = {
  containerClassName: string;
  imageSrc: string;
  imageAlt: string;
  authorName: string;
  commentText: string;
  timeText: string;
  timeClassName: string;
  replyComment: React.ReactNode;
};

export const CommentItem = (props: CommentItemProps) => {
  return (
    <div
      className={`items-start box-border caret-transparent gap-x-3 flex outline-[3px] gap-y-3 ${props.containerClassName}`}
    >
      <img
        src={props.imageSrc}
        alt={props.imageAlt}
        className="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent h-11 max-w-full min-h-[auto] min-w-[auto] object-contain outline-[3px] w-11 rounded-sm"
      />
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div className="bg-gray-100 box-border caret-transparent outline-[3px] p-3 rounded-[18px]">
          <p className="text-gray-700 text-base font-bold box-border caret-transparent leading-5 outline-[3px] mb-4 md:text-xl md:leading-[25px] hover:underline">
            {props.authorName}
          </p>
          <p className="text-gray-700 text-base box-border caret-transparent leading-6 outline-[3px] mb-4 md:text-xl md:leading-[30px]">
            {props.commentText}
          </p>
        </div>
        <div className="text-gray-500 text-[11px] font-bold items-center box-border caret-transparent gap-x-2 flex leading-[16.5px] outline-[3px] gap-y-2 ml-2 mt-1">
          <span className="text-indigo-800 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] hover:underline">
            Like
          </span>
          {" · "}
          <span className="text-indigo-800 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] hover:underline">
            Reply
          </span>
          {" · "}
          <span
            className={`${props.timeClassName} font-normal items-center box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1`}
          >
            {props.timeText}
          </span>
        </div>
        {props.replyComment}
      </div>
    </div>
  );
};
