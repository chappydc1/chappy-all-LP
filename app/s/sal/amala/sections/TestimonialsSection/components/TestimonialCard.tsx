export type TestimonialCardProps = {
  layout: string;
  containerVariant: string;
  innerWrapperVariant: string;
  imageWrapperVariant: string;
  imageUrl: string;
  imageAlt: string;
  imageClassName: string;
  quote: string;
  quoteClassName: string;
  ratingImageUrl: string;
  ratingImageAlt: string;
  reviewerName: string;
  reviewerNameClassName: string;
  verifiedText: string;
  verifiedTextClassName: string;
  badgeIconUrl: string;
  badgeIconAlt: string;
  avatarUrl: string;
  avatarAlt: string;
  cardClassName: string;
  textBlockClassName: string;
  reviewerRowClassName: string;
  reviewBodyClassName: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  if (props.layout === "compact") {
    const avatarImg = props.avatarUrl ? (
      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
        <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <img
            src={props.avatarUrl}
            alt={props.avatarAlt}
            title=""
            className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full"
          />
        </div>
      </div>
    ) : null;

    const cardContent = (
      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
        <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] pt-[15px] pb-[25px] px-[15px]">
            <div
              className={`box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px] ${props.cardClassName}`}
            >
              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                  <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]">
                    <div className="items-center box-border caret-transparent flex basis-[0%] grow flex-wrap min-h-[auto] outline-[3px]">
                      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                        <div
                          className={`text-[16.9583px] box-border caret-transparent leading-[25.4375px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mr-[5px] ${props.reviewerRowClassName}`}
                        >
                          <div
                            className={`text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] w-full ${props.reviewerRowClassName}`}
                          >
                            <p
                              className={`text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] ${props.reviewerRowClassName}`}
                            >
                              <strong className={props.reviewerNameClassName}>
                                {props.reviewerName}
                              </strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      {props.badgeIconUrl && (
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                          <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mr-[5px]">
                            <img
                              src={props.badgeIconUrl}
                              alt={props.badgeIconAlt}
                              title=""
                              className="box-border caret-transparent h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[18px]"
                            />
                          </div>
                        </div>
                      )}
                      <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                        <div className="text-lime-600 text-[13.4583px] box-border caret-transparent leading-[20.1875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full md:text-[13px] md:leading-[19.5px]">
                          <div className="text-[13.4583px] box-border caret-transparent leading-[20.1875px] outline-[3px] w-full md:text-[13px] md:leading-[19.5px]">
                            <p className="text-[13.4583px] box-border caret-transparent leading-[20.1875px] outline-[3px] md:text-[13px] md:leading-[19.5px]">
                              <strong className={props.verifiedTextClassName}>
                                {props.verifiedText}
                              </strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {props.ratingImageUrl && (
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                  <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-[15px]">
                    <img
                      src={props.ratingImageUrl}
                      alt={props.ratingImageAlt}
                      title=""
                      className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[103px]"
                    />
                  </div>
                </div>
              )}
              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                <div
                  className={`box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[15px] md:text-base md:leading-6 ${props.reviewBodyClassName}`}
                >
                  <div
                    className={`box-border caret-transparent outline-[3px] w-full md:text-base md:leading-6 ${props.reviewBodyClassName}`}
                  >
                    <p
                      className={`box-border caret-transparent outline-[3px] md:text-base md:leading-6 ${props.reviewBodyClassName}`}
                    >
                      {props.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div
        className={`box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px] ${props.containerVariant}`}
      >
        {props.innerWrapperVariant ? (
          <div className={`flex flex-col w-full h-full overflow-hidden ${props.innerWrapperVariant}`}>
            {avatarImg}
            {cardContent}
          </div>
        ) : (
          <>
            {avatarImg}
            {cardContent}
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className={`box-border caret-transparent grow outline-[3px] ${props.containerVariant}`}
    >
      <div
        className={`box-border caret-transparent flex outline-[3px] ${props.innerWrapperVariant}`}
      >
        <div
          className={`box-border caret-transparent outline-[3px] ${props.imageWrapperVariant}`}
        >
          <img
            title=""
            src={props.imageUrl}
            alt={props.imageAlt}
            className={`box-border caret-transparent h-full max-w-full outline-[3px] w-full ${props.imageClassName}`}
          />
        </div>
        <div className="items-start box-border caret-transparent flex flex-col justify-start outline-[3px] w-full p-5">
          <p
            className={`text-black box-border caret-transparent outline-[3px] text-left mb-[15px] ${props.quoteClassName}`}
          >
            {props.quote}
          </p>
          <img
            title=""
            src={props.ratingImageUrl}
            alt={props.ratingImageAlt}
            className="text-black box-border caret-transparent h-6 max-w-full outline-[3px]"
          />
          <div className="box-border caret-transparent outline-[3px]">
            <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
              <div className="text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] text-left w-full md:text-base md:leading-6">
                <div className="text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] w-full md:text-base md:leading-6">
                  <div className="text-[16.9583px] box-border caret-transparent flex leading-[25.4375px] outline-[3px] w-full pt-[15px] md:text-base md:leading-6">
                    <p className="text-[16.9583px] box-border caret-transparent leading-[25.4375px] outline-[3px] md:text-base md:leading-6">
                      <strong className={props.reviewerNameClassName}>
                        {props.reviewerName}
                      </strong>
                    </p>
                    <div className="text-[16.9583px] items-start box-border caret-transparent flex flex-col leading-[25.4375px] outline-[3px] w-5 md:text-base md:leading-6">
                      <img
                        src={props.badgeIconUrl}
                        alt={props.badgeIconAlt}
                        title=""
                        className="text-[16.9583px] box-border caret-transparent h-[18px] leading-[25.4375px] max-w-full outline-[3px] w-[18px] md:text-base md:leading-6"
                      />
                    </div>
                    <p className={props.verifiedTextClassName}>
                      <strong className={props.textBlockClassName}>
                        {props.verifiedText}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center box-border caret-transparent flex justify-center outline-[3px]"></div>
            <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
              <div className="text-[13.4583px] box-border caret-transparent leading-[20.1875px] outline-[3px] text-left w-full md:text-[13px] md:leading-[19.5px]">
                <div className="text-[13.4583px] box-border caret-transparent leading-[20.1875px] outline-[3px] w-full md:text-[13px] md:leading-[19.5px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
