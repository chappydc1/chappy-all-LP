export type TestimonialCardProps = {
  ariaLabel: string;
  title: string;
  ratingIconUrl: string;
  rating: string;
  testimonial: string;
  customerImageUrl: string;
  customerName: string;
  date: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className="relative items-start bg-white box-border caret-transparent gap-x-0 flex flex-col shrink-0 justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-[238.833px] mr-3 p-3.5 rounded-sm md:w-[318.857px] md:mr-4 md:px-[15px] md:py-4"
    >
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left">
        <div className="text-black text-base font-semibold box-border caret-transparent tracking-[-0.54px] leading-4 outline-[3px] font-montserrat md:text-lg md:leading-[18px]">
          {props.title}
        </div>
        <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2 mt-3">
          <img
            src={props.ratingIconUrl}
            alt=""
            title=""
            className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
          />
          <div className="text-black text-sm font-medium box-border caret-transparent leading-[15.4px] min-h-[auto] min-w-[auto] outline-[3px] font-montserrat md:text-base md:leading-[17.6px]">
            {props.rating}
          </div>
        </div>
        <div className="text-black text-[13px] box-border caret-transparent tracking-[-0.32px] leading-[16.9px] outline-[3px] mt-3 font-montserrat md:text-base md:leading-[20.8px]">
          {props.testimonial}
        </div>
      </div>
      <div className="items-center box-border caret-transparent gap-x-2.5 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 text-left mt-4 md:mt-3">
        <img
          src={props.customerImageUrl}
          alt=""
          title=""
          className="box-border caret-transparent max-w-[26px] min-h-[auto] min-w-[26px] object-cover outline-[3px] rounded-sm md:max-w-9 md:min-w-9"
        />
        <div className="box-border caret-transparent gap-x-[3px] flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-[3px]">
          <div className="text-black text-[13px] box-border caret-transparent tracking-[-0.32px] leading-[16.9px] min-h-[auto] min-w-[auto] outline-[3px] font-montserrat md:text-sm md:leading-[18.2px]">
            {props.customerName}
          </div>
          <div className="text-black text-[11px] box-border caret-transparent tracking-[-0.32px] leading-[14.3px] min-h-[auto] min-w-[auto] outline-[3px] font-montserrat md:text-sm md:leading-[18.2px]">
            {props.date}
          </div>
        </div>
      </div>
    </div>
  );
};
