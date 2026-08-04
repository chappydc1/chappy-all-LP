export type ArticleHeaderProps = {
  variant: string;
  breadcrumbText: string;
  titleBoldText: string;
  titleText: string;
  imageTitle: string;
  imageSrc: string;
  imageHref: string;
  imageAlt: string;
  imageCaption: string;
};

export const ArticleHeader = (props: ArticleHeaderProps) => {
  if (props.variant === "breadcrumb") {
    return (
      <div className="font-medium box-border caret-transparent outline-[3px] text-left font-montserrat text-zinc-400 hidden leading-4 px-px md:block">
        {props.breadcrumbText}
      </div>
    );
  }

  if (props.variant === "title") {
    return (
      <div className="font-medium box-border caret-transparent outline-[3px] text-left font-montserrat text-[26px] leading-9 mt-px p-px md:text-[40px] md:leading-[48px] md:mt-5">
        <div className="text-[26px] box-border caret-transparent leading-9 outline-[3px] md:text-[40px] md:leading-[48px]">
          <span className="text-[26px] box-border caret-transparent basis-[0%] shrink-0 leading-9 outline-[3px] rounded-[1px] md:text-[40px] md:leading-[48px]">
            <b className="text-[26px] font-bold box-border caret-transparent leading-9 outline-[3px] md:text-[40px] md:leading-[48px]">
              {props.titleBoldText}
            </b>
            {props.titleText}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="font-medium box-border caret-transparent outline-[3px] text-left font-montserrat text-[26px] leading-9 mt-px p-px md:text-[40px] md:leading-[48px] md:mt-5">
      <div className="text-[26px] box-border caret-transparent leading-9 outline-[3px] md:text-[40px] md:leading-[48px]">
        <div className="text-[26px] items-center self-center box-border caret-transparent flex leading-9 outline-[3px] w-full p-px md:text-[40px] md:leading-[48px]">
          <img
            title={props.imageTitle}
            src={props.imageSrc}
            alt={props.imageAlt}
            className="text-black text-[26px] box-border caret-transparent leading-9 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[15%] md:text-[40px] md:leading-[48px] md:w-[7%]"
          />
          <div className="text-[17px] box-border caret-transparent leading-9 min-h-[auto] min-w-[auto] outline-[3px] p-px md:leading-[48px]">
            <b className="font-bold box-border caret-transparent leading-9 outline-[3px] ml-[5px] md:leading-[48px]">
              {props.imageCaption}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};
