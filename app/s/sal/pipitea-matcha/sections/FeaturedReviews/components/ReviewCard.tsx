export type ReviewCardProps = {
  rootVariantClass: string;
  cardClass: string;
  imageWrapperVariantClass: string;
  imageSrc: string;
  imageVariantClass: string;
  contentVariantClass: string;
  reviewText: string;
  reviewTextVariantClass: string;
  trustpilotImageClass: string;
  footerClass: string;
  authorInfoClass: string;
  authorName: string;
  authorNameClass: string;
  verifiedRowClass: string;
  verifiedTextClass: string;
  verifiedTextStrongClass: string;
  spacerClass: string;
};

export const ReviewCard = (props: ReviewCardProps) => {
  return (
    <div
      className={`relative box-border caret-transparent basis-full grow max-w-full min-h-[25px] outline-[3px] w-full ${props.rootVariantClass}`}
    >
      <div className={props.cardClass}>
        <div
          className={`box-border caret-transparent outline-[3px] ${props.imageWrapperVariantClass}`}
        >
          <img
            title=""
            src={props.imageSrc}
            alt=""
            className={`text-black box-border caret-transparent inline h-full max-w-full outline-[3px] w-full border-zinc-700 border-l border-t border-solid ${props.imageVariantClass}`}
          />
        </div>
        <div
          className={`items-start box-border caret-transparent flex flex-col justify-start outline-[3px] w-full p-5 ${props.contentVariantClass}`}
        >
          <p
            className={`text-black box-border caret-transparent outline-[3px] text-left mb-[15px] ${props.reviewTextVariantClass}`}
          >
            {props.reviewText}
          </p>
          <img
            title=""
            src="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/1760839096564_trustpilot_review.png"
            alt=""
            className={`text-black box-border caret-transparent h-6 max-w-full outline-[3px] ${props.trustpilotImageClass}`}
          />
          <div
            className={`box-border caret-transparent outline-[3px] ${props.footerClass}`}
          >
            <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
              <div
                className={`text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] text-left w-full md:text-base md:leading-6 ${props.authorInfoClass}`}
              >
                <div className="text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] w-full md:text-base md:leading-6">
                  <div className="text-[16.9583px] box-border caret-transparent flex leading-[25.4375px] outline-[3px] w-full pt-[15px] md:text-base md:leading-6">
                    <p
                      className={`text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6 ${props.authorInfoClass}`}
                    >
                      <strong
                        className={`font-bold box-border caret-transparent outline-[3px] md:text-base ${props.authorNameClass}`}
                      >
                        {props.authorName}
                      </strong>
                    </p>
                    <div
                      className={`text-[16.9583px] items-start box-border caret-transparent flex flex-col leading-[25.4375px] outline-[3px] w-5 md:text-base md:leading-6 ${props.authorInfoClass}`}
                    >
                      <img
                        src="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/37.png"
                        alt=""
                        title=""
                        className={`text-[16.9583px] box-border caret-transparent h-[18px] leading-[25.4375px] max-w-full outline-[3px] w-[18px] md:text-base md:leading-6 ${props.authorInfoClass}`}
                      />
                    </div>
                    <p className={props.verifiedRowClass}>
                      <strong className={props.verifiedTextStrongClass}>
                        {props.verifiedTextClass}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center box-border caret-transparent flex justify-center outline-[3px]"></div>
            <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
              <div
                className={`text-[13.4583px] box-border caret-transparent leading-[20.1875px] outline-[3px] text-left w-full md:text-[13px] md:leading-[19.5px] ${props.spacerClass}`}
              >
                <div className="text-[13.4583px] box-border caret-transparent leading-[20.1875px] outline-[3px] w-full md:text-[13px] md:leading-[19.5px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
