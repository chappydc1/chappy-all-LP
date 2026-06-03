// @ts-nocheck
export type ArticleHeaderProps = {
  variant: string;
  breadcrumbText: string;
  expertLabel: string;
  expertText: string;
  headlineText: string;
  subheadlineText: string;
  ratingsImageSrc: string;
  ratingsText: string;
  mainImageSrc: string;
  authorImageSrc: string;
  authorText: string;
  verifiedImageSrc: string;
  dateText: string;
};

export const ArticleHeader = (props: ArticleHeaderProps) => {
  if (props.variant === "breadcrumb") {
    return (
      <p className="text-[13px] box-border caret-transparent leading-[13px] outline-[3px] text-left py-[5px] font-montserrat md:text-sm md:leading-[14px] md:pt-2.5">
        {props.breadcrumbText}
      </p>
    );
  }

  if (props.variant === "expert") {
    return (
      <div className="box-border caret-transparent outline-[3px] text-[32px] font-bold leading-8 mt-[15px] font-helvetica">
        <div className="box-border caret-transparent outline-[3px] text-[27px] leading-[33px] text-left font-montserrat md:text-[40px] md:leading-[50px]">
          <span className="text-black text-[27px] font-normal box-border caret-transparent leading-[33px] outline-[3px] md:text-[40px] md:leading-[50px]">
            {props.expertLabel}
          </span>
          {props.expertText}
        </div>
      </div>
    );
  }

  if (props.variant === "headline") {
    return (
      <div className="box-border caret-transparent outline-[3px] text-base font-bold leading-[22px] text-left mt-[13px] p-px font-montserrat md:text-lg md:leading-[25px]">
        <span className="text-black text-base bg-yellow-400 box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          {props.headlineText}
        </span>
        {props.subheadlineText}
      </div>
    );
  }

  if (props.variant === "ratings") {
    return (
      <div className="box-border caret-transparent outline-[3px] items-center self-center flex pr-2.5 pt-[7px] pb-3">
        <img
          title=""
          src={props.ratingsImageSrc}
          href=""
          alt=""
          className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline h-3.5 w-[70px] md:h-[17px] md:w-[81px]"
        />
        <p className="text-cyan-700 text-[13px] box-border caret-transparent float-left leading-[14px] min-h-[auto] min-w-[auto] outline-[3px] pl-[18px] pr-2.5 font-montserrat md:text-sm">
          {props.ratingsText}
        </p>
      </div>
    );
  }

  if (props.variant === "mainImage") {
    return (
      <div className="box-border caret-transparent outline-[3px] flex pr-px pt-3 md:pr-2.5">
        <img
          title=""
          src={props.mainImageSrc}
          alt=""
          href=""
          className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline items-center h-[166px] justify-start w-[366px] rounded-[20px] md:h-[380px] md:w-[810px]"
        />
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent outline-[3px] items-center self-center flex justify-start w-full mt-2.5 pl-px pr-2.5 pt-3 pb-[5px] md:mt-[7px] md:pb-3">
      <img
        title=""
        src={props.authorImageSrc}
        href=""
        alt=""
        className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline h-7 w-7 rounded-[25px] md:h-10 md:w-10"
      />
      <div className="box-border caret-transparent outline-[3px] text-sm leading-[14px] min-h-[auto] min-w-[auto] pl-0 pr-px py-px font-helvetica md:text-[15px] md:leading-[15px] md:pl-2.5">
        <b className="text-sm font-semibold box-border caret-transparent leading-[14px] outline-[3px] md:text-[15px] md:leading-[15px]">
          <b className="text-[13px] font-bold box-border caret-transparent leading-[13px] outline-[3px] font-montserrat md:text-[15px] md:leading-[15px]">
            {props.authorText}
          </b>
        </b>
      </div>
      <img
        title=""
        src={props.verifiedImageSrc}
        href=""
        alt=""
        className="text-black box-border caret-transparent h-5 max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-5 mx-[3px] md:h-[25px] md:w-[26px] md:ml-[7px] md:mr-0"
      />
      <div className="text-[15px] box-border caret-transparent leading-[15px] min-h-[auto] min-w-[auto] outline-[3px] pl-0 pr-px py-px font-helvetica md:pl-2.5">
        <i className="text-[13px] box-border caret-transparent leading-[13px] outline-[3px] font-montserrat md:text-[15px] md:leading-[15px]">
          {props.dateText}
        </i>
      </div>
    </div>
  );
};
