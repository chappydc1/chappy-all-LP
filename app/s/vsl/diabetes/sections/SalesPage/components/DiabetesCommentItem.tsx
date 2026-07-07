export type DiabetesCommentItemProps = {
  classVariant: string;
  imageSrc: string;
  authorName: string;
  commentText: string;
  timeText: string;
  likeCount: string;
};

export const DiabetesCommentItem = (props: DiabetesCommentItemProps) => {
  return (
    <div
      className={`relative text-[13px] items-start box-border caret-transparent gap-x-[8.125px] flex justify-start leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[8.125px] w-full md:text-base md:gap-x-2.5 md:leading-6 md:gap-y-2.5 ${props.classVariant}`}
    >
      <img
        src={props.imageSrc}
        alt=""
        className="text-[13px] box-border caret-transparent leading-[19.5px] max-h-[39px] max-w-[39px] min-h-[auto] min-w-[auto] object-cover outline-[3px] rounded-[20.3125px] md:text-base md:leading-6 md:max-h-12 md:max-w-12 md:rounded-[25px]"
      />
      <div className="text-[13px] box-border caret-transparent leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-6">
        <div className="text-zinc-950 text-[13px] bg-gray-100 box-border caret-transparent leading-[19.5px] outline-[3px] pt-[4.875px] pb-[9.75px] px-[9.75px] rounded-[9.75px] md:text-base md:leading-6 md:pt-1.5 md:pb-3 md:px-3 md:rounded-xl">
          <p className="text-blue-800 font-bold box-border caret-transparent max-w-max outline-[3px]">
            {props.authorName}
          </p>
          <p className="box-border caret-transparent outline-[3px] text-left w-fit">
            {props.commentText}
          </p>
        </div>
        <div className="text-[13px] items-center box-border caret-transparent gap-x-[4.0625px] flex justify-start leading-[19.5px] outline-[3px] gap-y-[4.0625px] ml-[9.75px] mt-[1.625px] md:text-base md:gap-x-[5px] md:leading-6 md:gap-y-[5px] md:ml-3 md:mt-0.5">
          <div className="text-zinc-500 text-[10.4px] font-semibold box-border caret-transparent block leading-[15.6px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[12.8px] md:leading-[19.2px]">
            Like
          </div>
          <span className="text-zinc-500 text-[10.4px] box-border caret-transparent block leading-[15.6px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[12.8px] md:leading-[19.2px]">
            ·
          </span>
          <div className="relative text-zinc-500 text-[10.4px] font-semibold box-border caret-transparent block leading-[15.6px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[12.8px] md:leading-[19.2px]">
            Reply
          </div>
          <span className="text-zinc-500 text-[10.4px] box-border caret-transparent block leading-[15.6px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[12.8px] md:leading-[19.2px]">
            ·
          </span>
          <time className="text-zinc-500 text-[10.4px] box-border caret-transparent block leading-[15.6px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[12.8px] md:leading-[19.2px]">
            {props.timeText}
          </time>
        </div>
      </div>
      <div className="absolute text-zinc-500 text-[11.375px] items-center bg-white bottom-[-7.10938px] box-border caret-transparent flex leading-[11.375px] outline-[3px] border border-gray-200 pr-[2.84375px] py-[0.710938px] rounded-[71.0938px] border-solid right-0 md:text-sm md:leading-[14px] md:pr-[3.5px] md:py-[0.875px] md:rounded-[87.5px] md:bottom-0 before:accent-auto before:box-border before:caret-transparent before:text-zinc-500 before:block before:text-[11.375px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[11.375px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-nunito_sans before:md:text-sm before:md:leading-[14px]">
        {props.likeCount}
      </div>
    </div>
  );
};
