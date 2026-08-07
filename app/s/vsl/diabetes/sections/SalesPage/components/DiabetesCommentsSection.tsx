import { DiabetesCommentThread } from "./DiabetesCommentThread";

export const DiabetesCommentsSection = () => {
  return (
    <div className="box-border caret-transparent max-w-none outline-[3px] w-full mx-auto px-3 md:max-w-[1140px]">
      <div className="text-[13px] box-border caret-transparent leading-[19.5px] outline-[3px] w-full m-auto font-helvetica md:text-base md:leading-6">
        <h2 className="text-neutral-600 text-[14.3px] box-border caret-transparent leading-[17.16px] outline-[3px] text-left mt-[30.3875px] mb-[8.9375px] font-nunito_sans md:text-[17.6px] md:leading-[21.12px] md:mt-[37.4px] md:mb-[11px]">
          <b className="text-[14.3px] font-bold box-border caret-transparent leading-[17.16px] outline-[3px] md:text-[17.6px] md:leading-[21.12px]">
            36,158 Comments
          </b>
        </h2>
        <DiabetesCommentThread />
      </div>
    </div>
  );
};
