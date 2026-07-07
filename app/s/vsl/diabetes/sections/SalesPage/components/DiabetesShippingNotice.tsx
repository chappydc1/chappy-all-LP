export type DiabetesShippingNoticeProps = {
  imageSrc: string;
  imageAlt: string;
  shippingText: string;
  highlightedText: string;
  orderText: string;
  recommendationText: string;
};

export const DiabetesShippingNotice = (props: DiabetesShippingNoticeProps) => {
  return (
    <div className="relative text-black box-border caret-transparent h-auto max-w-full outline-[3px] w-[370px] border-yellow-600 mx-auto my-6 pl-[98px] pr-[5px] py-2.5 rounded-[14px] border-2 border-solid md:h-[90px] md:max-w-none md:w-[710px] md:my-12 md:pl-[150px] md:pr-[25px] md:pt-[17px] md:pb-[15px]">
      <div className="absolute bg-yellow-600 box-border caret-transparent h-full outline-[3px] w-[70px] pl-[7px] pr-[5px] py-[19px] rounded-l-xl left-0 top-0 md:h-auto md:w-auto after:accent-auto after:border-l-yellow-600 after:box-border after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:right-[-13px] after:text-center after:no-underline after:indent-[0px] after:normal-case after:top-[calc(50%_-_60px)] after:visible after:w-0 after:border-l-[15px] after:border-y-transparent after:border-y-[58px] after:border-separate after:font-nunito_sans after:md:border-y-[45px] after:md:top-0">
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className="absolute box-border caret-transparent max-w-full outline-[3px] top-[calc(50%_-_20px)] w-[65px] mx-auto md:static md:w-auto md:top-auto"
        />
      </div>
      <p className="text-lg font-bold box-border caret-transparent leading-[26px] outline-[3px] text-left md:text-[22px] md:leading-[30px]">
        {props.shippingText}{" "}
        <span className="text-yellow-600 text-lg box-border caret-transparent leading-[26px] outline-[3px] md:text-[22px] md:leading-[30px]">
          {props.highlightedText}
        </span>{" "}
        {props.orderText}
      </p>
      <p className="text-[13px] box-border caret-transparent leading-[21px] outline-[3px] text-left mb-4 md:text-base md:leading-6">
        {props.recommendationText}
      </p>
    </div>
  );
};
