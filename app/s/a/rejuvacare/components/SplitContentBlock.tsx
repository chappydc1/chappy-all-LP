export type RejuvacareSplitContentBlockProps = {
  rootVariantClass: string;
  contentVariantClass: string;
  title: string;
  bodyClass: string;
  body: React.ReactNode;
  mediaVariantClass: string;
  mediaTitleClass: string;
  media: React.ReactNode;
};

export const RejuvacareSplitContentBlock = (props: RejuvacareSplitContentBlockProps) => {
  return (
    <div
      className={`items-center box-border caret-transparent flex flex-col-reverse outline-[3px] w-full p-px ${props.rootVariantClass}`}
    >
      <div
        className={`self-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full md:pr-2.5 md:py-3 ${props.contentVariantClass}`}
      >
        <div className="text-stone-700 text-[32px] font-extrabold box-border caret-transparent leading-[38.4px] min-h-[auto] min-w-[auto] outline-[3px] text-left p-px font-open_sans md:text-[40px] md:leading-[48px]">
          <div className="text-neutral-900 text-[23px] font-bold box-border caret-transparent hidden leading-[33px] outline-[3px] font-montserrat md:text-[33px] md:block md:leading-[42px]">
            {props.title}
          </div>
        </div>
        <div
          className={`text-[17px] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat ${props.bodyClass}`}
        >
          {props.body}
        </div>
      </div>
      <div
        className={`box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full py-px md:mt-0 ${props.mediaVariantClass}`}
      >
        <div
          className={`text-neutral-900 text-[23px] font-bold box-border caret-transparent block leading-[33px] outline-[3px] text-left mb-5 font-montserrat md:text-[33px] md:hidden md:leading-[42px] ${props.mediaTitleClass}`}
        >
          {props.title}
        </div>
        {props.media}
      </div>
    </div>
  );
};
