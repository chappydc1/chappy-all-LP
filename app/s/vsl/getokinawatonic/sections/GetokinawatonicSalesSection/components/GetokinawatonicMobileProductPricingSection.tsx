export type GetokinawatonicMobileProductPricingSectionProps = {
  firstLinkHref: string;
  firstImageSrc: string;
  firstImageAlt: string;
  firstImageClassName: string;
  secondLinkHref: string;
  secondImageSrc: string;
  secondImageAlt: string;
  secondImageClassName: string;
  thirdLinkHref: string;
  thirdImageSrc: string;
  thirdImageAlt: string;
  thirdImageClassName: string;
};

export const GetokinawatonicMobileProductPricingSection = (
  props: GetokinawatonicMobileProductPricingSectionProps,
) => {
  return (
    <div className="box-border caret-transparent block outline-[3px] my-[8%] md:hidden">
      <div className="box-border caret-transparent outline-[3px] mx-0 md:ml-[-15px] md:mr-[-15px] before:accent-auto before:box-border before:caret-transparent before:text-teal-500 before:table before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4286px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-apple_system after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-teal-500 after:table after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21.4286px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-apple_system">
        <div className="relative box-border caret-transparent float-none min-h-px outline-[3px] w-auto px-[15px] md:float-left md:w-[33.3333%] md:px-0">
          <a
            href={props.firstLinkHref}
            className="box-border caret-transparent outline-[3px] hover:outline-0 hover:underline"
          >
            <img
              src={props.firstImageSrc}
              alt={props.firstImageAlt}
              className={props.firstImageClassName}
            />
          </a>
        </div>

        <div className="relative box-border caret-transparent float-none min-h-px outline-[3px] w-auto px-[15px] md:float-left md:w-[33.3333%] md:px-0">
          <a
            href={props.secondLinkHref}
            className="box-border caret-transparent outline-[3px] hover:outline-0 hover:underline"
          >
            <img
              src={props.secondImageSrc}
              alt={props.secondImageAlt}
              className={props.secondImageClassName}
            />
          </a>
        </div>

        <div className="relative box-border caret-transparent block float-none min-h-px outline-[3px] w-auto px-[15px] md:hidden md:float-left md:w-[33.3333%] md:px-0">
          <a
            href={props.thirdLinkHref}
            className="box-border caret-transparent outline-[3px] hover:outline-0 hover:underline"
          >
            <img
              src={props.thirdImageSrc}
              alt={props.thirdImageAlt}
              className={props.thirdImageClassName}
            />
          </a>
        </div>

        <div className="box-border caret-transparent outline-[3px]"></div>
      </div>
    </div>
  );
};
