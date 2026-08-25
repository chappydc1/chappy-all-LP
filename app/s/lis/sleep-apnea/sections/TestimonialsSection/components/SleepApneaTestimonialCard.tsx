export type SleepApneaTestimonialCardProps = {
  className: string;
  title: string;
  description: string;
  authorName: string;
};

export const SleepApneaTestimonialCard = (props: SleepApneaTestimonialCardProps) => {
  return (
    <div
      className={`box-border caret-transparent basis-[90%] shrink-0 min-h-[auto] outline-[3px] pl-4 md:basis-[33.333%] md:pl-6 ${props.className}`}
    >
      <div className="items-center bg-white box-border caret-transparent gap-x-8 flex flex-col h-full outline-[3px] gap-y-8 border overflow-hidden px-4 py-5 rounded-lg border-solid md:py-6">
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 w-full">
          <div className="items-center box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1">
            <img
              src="/images/gruns/icon-21.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] w-4"
            />
            <img
              src="/images/gruns/icon-21.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] w-4"
            />
            <img
              src="/images/gruns/icon-21.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] w-4"
            />
            <img
              src="/images/gruns/icon-21.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] w-4"
            />
            <img
              src="/images/gruns/icon-21.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] w-4"
            />
          </div>
          <div className="items-center box-border caret-transparent gap-x-2 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-center w-full">
            <p className="text-xl font-semibold box-border caret-transparent tracking-[-1px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-2xl md:tracking-[-1.2px] md:leading-[28.8px]">
              {props.title}
            </p>
            <p className="text-base font-medium box-border caret-transparent leading-[25.6px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-lg md:leading-[28.8px]">
              {props.description}
            </p>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-auto">
          <p className="text-base font-bold box-border caret-transparent leading-[25.6px] min-h-[auto] min-w-[auto] outline-[3px] md:text-lg md:font-medium md:leading-[28.8px]">
            {props.authorName}
          </p>
          <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
            <img
              src="/images/gruns/icon-22.svg"
              alt="Icon"
              className="box-border caret-transparent h-5 outline-[3px] w-5"
            />
            <span className="text-base font-medium box-border caret-transparent block leading-[25.6px] min-h-[auto] min-w-[auto] outline-[3px] md:text-lg md:leading-[28.8px]">
              Verified Purchase
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
