export type CommentItemProps = {
  name: string;
  imageUrl: string;
  comment: string;
  containerClassName?: string;
};

export const CommentItem = (props: CommentItemProps) => {
  return (
    <div
      className={`items-start box-border caret-transparent gap-x-[13.2px] flex min-h-[auto] min-w-[auto] gap-y-[13.2px] ${props.containerClassName || ""}`.trim()}
    >
      <img
        src={props.imageUrl}
        className="box-border caret-transparent min-h-[auto] min-w-[auto] w-[44.35px] md:w-[63.36px]"
      />
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <span className="text-indigo-800 text-[15.84px] font-bold box-border caret-transparent block leading-[23.76px]">
          {props.name}
        </span>
        <span className="text-black text-[15.84px] box-border caret-transparent leading-[23.76px]">
          {props.comment}
        </span>
      </div>
    </div>
  );
};
