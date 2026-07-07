export type NebrooReviewCardProps = {
  containerVariantClass: string;
  avatarSrc: string;
  reviewerName: string;
  nameExtraClass?: string;
  reviewText: React.ReactNode;
  reviewExtraClass?: string;
  starSrc: string;
};

export const NebrooReviewCard = (props: NebrooReviewCardProps) => {
  return (
    <div
      className={`items-center bg-sky-100 shadow-[rgba(119,119,119,0.73)_1px_1px_3px_0.5px] box-border caret-transparent flex flex-col min-h-0 min-w-0 w-full mx-px rounded-[15px] md:min-h-[auto] md:min-w-[auto] md:mx-[15px] ${props.containerVariantClass}`}
    >
      <img
        title=""
        src={props.avatarSrc}
        
        alt=""
        className="text-black shadow-[rgb(166,166,166)_1px_1px_5px_0.3px] box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] w-[300px] mt-[15px] rounded-[15px]"
      />
      <div
        className={`text-[17px] font-bold box-border caret-transparent leading-[17px] min-h-[auto] min-w-[auto] text-left mt-[15px] mb-[5px] p-2.5 ${props.nameExtraClass ?? ""}`}
      >
        {props.reviewerName}
      </div>
      <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] text-center w-full">
        <img
          title=""
          src={props.starSrc}
          alt=""
          
          className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
        />
        <img
          title=""
          src={props.starSrc}
          alt=""
          
          className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
        />
        <img
          title=""
          src={props.starSrc}
          alt=""
          
          className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
        />
        <img
          title=""
          src={props.starSrc}
          alt=""
          
          className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
        />
        <img
          title=""
          src={props.starSrc}
          alt=""
          
          className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
        />
      </div>
      <div
        className={`text-[17px] box-border caret-transparent leading-[26px] min-h-[auto] min-w-[auto] text-left mt-2.5 pb-2.5 px-2.5 ${props.reviewExtraClass ?? ""}`}
      >
        <span className="box-border caret-transparent">
          <i className="italic box-border caret-transparent">
            {props.reviewText}
          </i>
          <br className="box-border caret-transparent" />
        </span>
        <span className="box-border caret-transparent"></span>
      </div>
    </div>
  );
};
