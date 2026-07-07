export type DerilaMobileMenuProps = {
  variant: string;
  containerVariantClass: string;
  iconSrc: string;
  iconAlt: string;
  trackingHref: string;
  trackingText: string;
  contactHref: string;
  contactText: string;
  orderHref: string;
  orderText: string;
};

export const DerilaMobileMenu = (props: DerilaMobileMenuProps) => {
  return (
    <div
      className={`box-border caret-transparent outline-[3px] ${props.containerVariantClass}`}
    >
      {props.variant === "links" ? (
        <>
          <a
            href={props.trackingHref}
            className="text-white text-base box-border caret-transparent outline-[3px] text-center uppercase mt-5 mx-[15px] md:text-sm md:mt-0 md:mx-[7px]"
          >
            {props.trackingText}
          </a>
          <a
            href={props.contactHref}
            className="text-white text-base box-border caret-transparent outline-[3px] text-center uppercase mt-5 mx-[15px] md:text-sm md:mt-0 md:mx-[7px]"
          >
            {props.contactText}
          </a>
          <a
            href={props.orderHref}
            className="text-white text-base box-border caret-transparent max-w-[250px] outline-[3px] text-center underline uppercase mt-5 mb-2.5 mx-[15px] p-2.5 rounded-lg md:text-sm md:mx-[7px] md:my-0"
          >
            {props.orderText}
          </a>
        </>
      ) : (
        <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] w-[30px] md:hidden md:min-h-0 md:min-w-0">
          <div className="bg-white box-border caret-transparent h-0.5 outline-[3px] mb-1"></div>
          <div className="bg-white box-border caret-transparent h-0.5 outline-[3px] mb-1"></div>
          <div className="bg-white box-border caret-transparent h-0.5 outline-[3px]"></div>
          <div className="box-border caret-transparent hidden outline-[3px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={props.iconSrc}
              alt={props.iconAlt}
              className="box-border caret-transparent outline-[3px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};
