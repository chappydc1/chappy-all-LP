export type BenefitListProps = {
  containerVariant: string;
  imageVariant: string;
  contentVariant: string;
  textContainerVariant: string;
  textWrapperClassName: string;
  text: string;
  hasNestedText: boolean;
};

export const BenefitList = (props: BenefitListProps) => {
  return (
    <div
      className={`box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full mb-3 ${props.containerVariant}`}
    >
      <div className="items-center box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] outline-[3px] w-9">
        <img
          title=""
          src="/images/rejuvacare/1722846383829_icon_check.webp"
          alt=""
          className={`text-black box-border caret-transparent h-[26px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[26px] mb-px md:my-0 ${props.imageVariant}`}
        />
      </div>
      <div
        className={`box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full ${props.contentVariant}`}
      >
        <div
          className={`font-bold box-border caret-transparent outline-[3px] text-left mt-[5px] font-montserrat md:mt-0 ${props.textContainerVariant}`}
        >
          {props.hasNestedText ? (
            <div
              className={`box-border caret-transparent outline-[3px] ${props.textWrapperClassName}`}
            >
              {props.text}
            </div>
          ) : (
            props.text
          )}
        </div>
      </div>
    </div>
  );
};
