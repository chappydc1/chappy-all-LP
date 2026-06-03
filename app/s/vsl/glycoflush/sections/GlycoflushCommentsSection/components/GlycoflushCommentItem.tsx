export type GlycoflushCommentItemProps = {
  avatarSrc: string;
  avatarAlt: string;
  avatarClassName: string;
  avatarSizes?: string;
  name: string;
  comment: string;
  reactionSrc: string;
  reactionAlt: string;
  reactionSizes?: string;
  reactionCount: string;
  timeText: string;
};

export const GlycoflushCommentItem = (props: GlycoflushCommentItemProps) => {
  return (
    <div className="relative box-border caret-transparent gap-x-[5px] flex flex-wrap min-h-[auto] outline-[3px] gap-y-[5px] w-full pt-2.5 pb-10 px-2.5 md:gap-x-5 md:flex-nowrap md:gap-y-5 md:pt-5 md:px-5">
      <div className="relative box-border caret-transparent gap-x-[5px] max-w-full min-h-[auto] outline-[3px] gap-y-[5px] text-center w-[15%] md:gap-x-5 md:gap-y-5 md:w-[6%]">
        <img
          src={props.avatarSrc}
          alt={props.avatarAlt}
          sizes={props.avatarSizes}
          className={`box-border caret-transparent inline-block max-w-full outline-[3px] rounded-[200px] ${props.avatarClassName}`}
        />
      </div>
      <div className="relative bg-gray-100 box-border caret-transparent gap-x-5 flex flex-col flex-wrap min-h-[auto] outline-[3px] gap-y-5 w-4/5 pt-2.5 pb-0 px-2.5 rounded-[10px] md:flex-nowrap md:w-[94%] md:p-5">
        <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] outline-[3px] gap-y-5">
          <h2 className="text-blue-800 text-lg font-extrabold box-border caret-transparent leading-[18px] outline-[3px] font-roboto">
            {props.name}
          </h2>
        </div>
        <div className="relative box-border caret-transparent gap-x-5 max-w-full min-h-[auto] outline-[3px] gap-y-5">
          <h2 className="text-[15px] font-light box-border caret-transparent leading-[25px] outline-[3px] font-roboto md:text-lg">
            {props.comment}
          </h2>
        </div>
        <div className="relative items-center self-center box-border caret-transparent gap-x-0 flex flex-wrap justify-between mb-[-30px] min-h-[auto] outline-[3px] gap-y-0 w-full -mt-5 md:flex-nowrap md:mb-[-50px]">
          <div className="relative self-start box-border caret-transparent gap-x-0 max-w-full min-h-[auto] outline-[3px] gap-y-0 pt-5">
            <h2 className="text-neutral-400 text-xs font-extralight box-border caret-transparent leading-[25px] outline-[3px] font-roboto md:text-sm">
              <b className="text-xs font-normal box-border caret-transparent outline-[3px] md:text-sm">
                Like
              </b>{" "}
              🞄{" "}
              <b className="text-xs font-normal box-border caret-transparent outline-[3px] md:text-sm">
                Reply
              </b>{" "}
              🞄 {props.timeText}
            </h2>
          </div>
          <div className="relative items-center self-center bg-white box-border caret-transparent gap-x-[5px] flex flex-wrap justify-center min-h-[auto] outline-[3px] gap-y-[5px] w-[30%] border border-stone-300 px-[3px] py-0.5 rounded-[200px] border-solid md:flex-nowrap md:w-[70px]">
            <div className="relative self-center box-border caret-transparent gap-x-[5px] mt-[-5px] max-w-full min-h-[auto] outline-[3px] gap-y-[5px] text-center w-3/5">
              <img
                src={props.reactionSrc}
                alt={props.reactionAlt}
                sizes={props.reactionSizes}
                className="aspect-[auto_439_/_217] box-border caret-transparent inline-block max-w-full outline-[3px] w-[439px]"
              />
            </div>
            <div className="relative self-center box-border caret-transparent gap-x-[5px] max-w-full min-h-[auto] outline-[3px] gap-y-[5px]">
              <h2 className="text-neutral-400 text-sm font-light box-border caret-transparent leading-[25px] outline-[3px] font-roboto">
                {props.reactionCount}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
