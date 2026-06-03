import { GlycoflushCommentsHeader } from "../GlycoflushCommentsSection/components/GlycoflushCommentsHeader";
import { GlycoflushCommentList } from "../GlycoflushCommentsSection/components/GlycoflushCommentList";

export const GlycoflushCommentsSection = () => {
  return (
    <div className="relative bg-white box-border caret-transparent flex flex-col max-w-full outline-[3px] w-full mx-auto px-2.5">
      <div className="box-border caret-transparent gap-x-2.5 flex flex-col grow flex-wrap h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 w-full mx-auto py-2.5 md:gap-x-5 md:flex-nowrap md:max-w-[1000px] md:gap-y-5">
        <div className="relative box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap min-h-[auto] outline-[3px] gap-y-2.5 w-full p-0 md:gap-x-5 md:flex-nowrap md:gap-y-5 md:p-2.5">
          <GlycoflushCommentsHeader />
          <GlycoflushCommentList />
        </div>
      </div>
    </div>
  );
};
