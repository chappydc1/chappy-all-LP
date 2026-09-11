export type CustomerReviewCardProps = {
  rating: string;
  reviewText: string;
  customerImageUrl: string;
  customerName: string;
};

export const CustomerReviewCard = (props: CustomerReviewCardProps) => {
  return (
    <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] w-full">
      <div className="items-center box-border caret-transparent flex justify-start outline-[3px] w-full">
        <img
          title=""
          src="/lp-images-files-videos-fonts/p/rosabella-1/44.svg"
          alt=""
          className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-20 mr-2"
        />
        <div className="text-black text-sm font-medium box-border caret-transparent tracking-[-0.32px] leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] font-montserrat md:text-base md:leading-[20.8px]">
          {props.rating}
        </div>
      </div>
      <div className="text-black text-[13px] box-border caret-transparent tracking-[-0.32px] leading-[16.9px] outline-[3px] text-left mt-3 font-montserrat md:text-base md:leading-[20.8px]">
        {props.reviewText}
      </div>
      <div className="items-center box-border caret-transparent flex justify-start outline-[3px] w-full mt-3">
        <img
          title=""
          src={props.customerImageUrl}
          alt=""
          className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[26px] mr-2.5 md:w-[30px]"
        />
        <div className="text-black text-[13px] box-border caret-transparent tracking-[-0.32px] leading-[16.9px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
          {props.customerName}
        </div>
      </div>
    </div>
  );
};
