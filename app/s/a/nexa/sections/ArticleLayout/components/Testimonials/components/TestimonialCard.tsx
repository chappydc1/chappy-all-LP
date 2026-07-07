// @ts-nocheck
export type NexaTestimonialCardProps = {
  rootVariant: string;
  imageSrc: string;
  imageClassName: string;
  contentClassName: string;
  name: string;
  testimonialWrapperClassName: string;
  testimonialInnerClassName: string;
  testimonialOuterSpanClassName: string;
  testimonialTextClassName: string;
  testimonialText: string;
  showTrailingBreak: string;
};

export const NexaTestimonialCard = (props: NexaTestimonialCardProps) => {
  return (
    <div
      className={`bg-gray-200 box-border caret-transparent block outline-[3px] w-full pt-0 pb-[5px] px-0 md:flex md:pt-3 md:px-2.5 ${props.rootVariant}`}
    >
      <div className="box-border caret-transparent basis-[30%] shrink-0 min-h-0 min-w-0 outline-[3px] w-full pt-0 pb-3 px-0 md:min-h-[auto] md:min-w-[auto] md:pt-3 md:px-[5px]">
        <img
          title=""
          src={props.imageSrc}
          href=""
          alt=""
          className={`text-black box-border caret-transparent inline max-w-full outline-[3px] align-baseline ${props.imageClassName}`}
        />
      </div>
      <div
        className={`box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full pl-2.5 pb-3 md:min-h-[auto] md:min-w-[auto] md:pr-2.5 ${props.contentClassName}`}
      >
        <div className="items-center self-center box-border caret-transparent flex outline-[3px] w-full pt-3 pb-[5px] px-2.5">
          <img
            title=""
            src="/images/nexa/1732520123546_1723972557_user_approve.webp"
            href=""
            alt=""
            className="text-black box-border caret-transparent h-[25px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[25px] md:h-[35px] md:w-[35px]"
          />
          <div className="text-base font-bold box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:leading-[18px] md:pl-2.5">
            {props.name}
          </div>
          <div className="text-base font-bold box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-3 pr-px py-px font-montserrat md:text-lg md:hidden md:leading-[18px] md:min-h-0 md:min-w-0 md:pl-2.5">
            ⭐️⭐️⭐️⭐️⭐️
          </div>
          <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
            |
          </div>
          <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
            Rating: ⭐️⭐️⭐️⭐️⭐️
          </div>
        </div>
        <div
          className={`box-border caret-transparent leading-[21px] outline-[3px] pt-[5px] pb-2.5 font-montserrat md:pr-[5px] ${props.testimonialWrapperClassName}`}
        >
          <div
            className={`box-border caret-transparent outline-[3px] text-left md:pr-2.5 ${props.testimonialInnerClassName}`}
          >
            <span className={props.testimonialOuterSpanClassName}>
              <span
                className={`text-black text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-[17px] md:leading-6 ${props.testimonialTextClassName}`}
              >
                {props.testimonialText}
                {props.showTrailingBreak === "true" ? (
                  <br className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-[17px] md:leading-6" />
                ) : null}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
