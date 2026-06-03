import { TestimonialCard } from "../TestimonialsSection/components/TestimonialCard";
import { CtaBanner } from "../../components/CtaBanner";
import { Media } from "../../lib/responsive-media";

export type TestimonialsSectionProps = {
  sectionVariant?: string;
  title: string;
  titleClassName?: string;
  showRatingSummary?: string;
  ratingValue?: string;
  ratingImageUrl?: string;
  ratingImageAlt?: string;
  ratingLabel?: string;
  ratingSummaryRows?: {
    percentage: string;
    barWidthClassName: string;
    starsImageUrl: string;
    starsImageAlt?: string;
  }[];
  desktopTestimonials?: {
    imageUrl: string;
    imageAlt?: string;
    quote: string;
    reviewerName: string;
    verifiedText: string;
    ratingImageUrl?: string;
    ratingImageAlt?: string;
    badgeIconUrl?: string;
    badgeIconAlt?: string;
    avatarUrl?: string;
    avatarAlt?: string;
    containerVariant?: string;
    innerWrapperVariant?: string;
    imageWrapperVariant?: string;
    imageClassName?: string;
    quoteClassName?: string;
    reviewerNameClassName?: string;
    verifiedTextClassName?: string;
    cardClassName?: string;
    textBlockClassName?: string;
    reviewerRowClassName?: string;
    reviewBodyClassName?: string;
    layout?: string;
  }[];
  mobileTestimonials?: {
    imageUrl: string;
    imageAlt?: string;
    quote: string;
    reviewerName: string;
    verifiedText: string;
    ratingImageUrl?: string;
    ratingImageAlt?: string;
    badgeIconUrl?: string;
    badgeIconAlt?: string;
    avatarUrl?: string;
    avatarAlt?: string;
    containerVariant?: string;
    innerWrapperVariant?: string;
    imageWrapperVariant?: string;
    imageClassName?: string;
    quoteClassName?: string;
    reviewerNameClassName?: string;
    verifiedTextClassName?: string;
    cardClassName?: string;
    textBlockClassName?: string;
    reviewerRowClassName?: string;
    reviewBodyClassName?: string;
    layout?: string;
  }[];
  compactTestimonials?: {
    quote: string;
    reviewerName: string;
    verifiedText: string;
    containerVariant?: string;
    reviewerNameClassName?: string;
    verifiedTextClassName?: string;
    reviewerRowClassName?: string;
    reviewBodyClassName?: string;
    cardClassName?: string;
    layout?: string;
  }[];
  compactColumns?: string;
  compactGapClassName?: string;
  desktopImageColumns?: string;
  showImageTestimonials?: string;
  showCompactTestimonials?: string;
  ctaContainerVariant?: string;
  ctaSectionVariant?: string;
  ctaWrapperVariant?: string;
  ctaContentVariant?: string;
  ctaButtonVariant?: string;
  ctaInnerButtonVariant?: string;
  ctaMediaRowVariant?: string;
  ctaMediaWrapperVariant?: string;
  ctaMediaInnerVariant?: string;
  ctaMediaItemVariant?: string;
  ctaImageWrapperVariant?: string;
  ctaImageSrc?: string;
  ctaImageAlt?: string;
  ctaImageSizes?: string;
  ctaImageClassName?: string;
  ctaTextWrapperVariant?: string;
  ctaHeadingTag?: string;
  ctaHeadingText: string;
  ctaHeadingClassName?: string;
  ctaText: string;
  ctaTitle: string;
};

export const TestimonialsSection = (props: TestimonialsSectionProps) => {
  const showRatingSummary = props.showRatingSummary === "true";
  const showImageTestimonials = props.showImageTestimonials !== "false";
  const showCompactTestimonials = props.showCompactTestimonials === "true";
  const compactColumns = props.compactColumns || "3";
  const desktopImageColumns = Number(props.desktopImageColumns || "2");

  const desktopRows =
    props.desktopTestimonials && props.desktopTestimonials.length > 0
      ? Array.from({
          length: Math.ceil(props.desktopTestimonials.length / desktopImageColumns),
        }).map((_, index) =>
          props.desktopTestimonials!.slice(
            index * desktopImageColumns,
            index * desktopImageColumns + desktopImageColumns,
          ),
        ).filter((row) => row.length > 0)
      : [];

  const mobileRows =
    props.mobileTestimonials && props.mobileTestimonials.length > 0
      ? [
          props.mobileTestimonials.slice(0, 2),
          props.mobileTestimonials.slice(2, 4),
        ].filter((row) => row.length > 0)
      : [];

  const compactChunks =
    props.compactTestimonials && props.compactTestimonials.length > 0
      ? Array.from({
          length: Math.ceil(
            props.compactTestimonials.length / Number(compactColumns || "3"),
          ),
        }).map((_, index) =>
          props.compactTestimonials!.slice(
            index * Number(compactColumns || "3"),
            index * Number(compactColumns || "3") +
              Number(compactColumns || "3"),
          ),
        )
      : [];

  return (
    <section
      className={`items-center bg-no-repeat box-border caret-transparent flex flex-col justify-items-center outline-[3px] w-full bg-center px-[15px] py-[45px] md:py-[60px] ${props.sectionVariant || ""}`}
    >
      <div className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] outline-[3px] text-start w-full bg-center md:flex-row">
        <div className="box-border caret-transparent outline-[3px] align-top w-full">
          <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
            <div className="text-black text-[27.0583px] box-border caret-transparent leading-[32.47px] max-w-[800px] outline-[3px] text-center w-full md:text-[35px] md:leading-[42px]">
              <div className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] w-full md:text-[35px] md:leading-[42px]">
                <p
                  className={`text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px] ${
                    props.titleClassName || ""
                  }`}
                >
                  <strong className="text-[27.0583px] font-bold box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]">
                    {props.title}
                  </strong>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {showRatingSummary && (
        <div className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[790px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center mt-10 md:flex-row md:mt-[50px]">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full">
            <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
              <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                <div className="items-center box-border caret-transparent flex flex-col flex-wrap min-h-[auto] min-w-[auto] mx-[15px] md:flex-row md:mx-0">
                  <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[120px] min-h-[auto] min-w-[120px] outline-[3px] w-[120px]">
                    <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]">
                          <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
                            <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                              <div className="text-[46.4583px] box-border caret-transparent leading-[46.4583px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:text-6xl md:leading-[60px]">
                                <div className="text-[46.4583px] box-border caret-transparent leading-[46.4583px] outline-[3px] w-full md:text-6xl md:leading-[60px]">
                                  <p className="text-[46.4583px] box-border caret-transparent leading-[46.4583px] outline-[3px] md:text-6xl md:leading-[60px]">
                                    <strong className="text-[46.4583px] font-bold box-border caret-transparent leading-[46.4583px] outline-[3px] md:text-6xl md:leading-[60px]">
                                      {props.ratingValue}
                                    </strong>
                                  </p>
                                </div>
                              </div>
                            </div>

                            {!!props.ratingImageUrl && (
                              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                                <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-[7px]">
                                  <img
                                    src={props.ratingImageUrl}
                                    alt={props.ratingImageAlt || ""}
                                    className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[118px]"
                                  />
                                </div>
                              </div>
                            )}

                            <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                              <div className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mt-[7px] md:text-base md:leading-6">
                                <div className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-base md:leading-6">
                                  <p className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-base md:leading-6">
                                    <strong className="text-[16.0583px] font-bold box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-base md:leading-6">
                                      {props.ratingLabel}
                                    </strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[25px] min-h-[auto] min-w-[25px] outline-[3px] w-[25px]">
                    <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-[15px]">
                          <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto">
                    <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {(props.ratingSummaryRows || []).map((row, index) => (
                          <div
                            key={`rating-row-${index}`}
                            className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                          >
                            <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <div
                                className={`items-center box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] ${
                                  index === 0 ? "" : "mt-1.5"
                                }`}
                              >
                                <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]">
                                  <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                                    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full mr-5">
                                      <div className="box-border caret-transparent outline-[3px]">
                                        <div className="bg-white shadow-[rgba(0,0,0,0.2)_1px_1px_3px_0px_inset] box-border caret-transparent h-3 outline-[3px] w-full overflow-hidden rounded-[15px]">
                                          <span
                                            className={`bg-amber-400 box-border caret-transparent block h-full outline-[3px] ${row.barWidthClassName}`}
                                          ></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[130px] min-h-[auto] min-w-[130px] outline-[3px] w-[130px]">
                                  <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                                    <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                      <img
                                        src={row.starsImageUrl}
                                        alt={row.starsImageAlt || ""}
                                        className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[115px]"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[39px] min-h-[auto] min-w-[39px] outline-[3px] w-[39px]">
                                  <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                                    <div className="text-[16.0583px] box-border caret-transparent tracking-[-0.9px] leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full md:text-lg md:leading-[27px]">
                                      <div className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]">
                                        <p className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]">
                                          {row.percentage}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showImageTestimonials && (
        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full max-w-[1170px] mt-10 md:mt-[50px]">
          <div className="box-border caret-transparent flex flex-col outline-[3px] w-full">
            <Media greaterThan="sm">
              {desktopRows.map((row, rowIndex) => (
                <div
                  key={`desktop-row-${rowIndex}`}
                  className={`items-stretch box-border caret-transparent flex-col flex-wrap justify-start outline-[3px] md:flex md:flex-row md:flex-nowrap ${
                  rowIndex === 0
                    ? "mt-0 p-px md:pt-2.5 md:px-2.5"
                    : "mt-px pt-px pb-2.5 px-2.5"
                }`}
                >
                  {row.map((item, itemIndex) => (
                    <TestimonialCard
                    key={`desktop-card-${rowIndex}-${itemIndex}`}
                    layout={item.layout || "default"}
                    containerVariant={item.containerVariant || ""}
                    innerWrapperVariant={item.innerWrapperVariant || ""}
                    imageWrapperVariant={item.imageWrapperVariant || ""}
                    imageUrl={item.imageUrl}
                    imageAlt={item.imageAlt || ""}
                    imageClassName={item.imageClassName || ""}
                    quote={item.quote}
                    quoteClassName={item.quoteClassName || ""}
                    ratingImageUrl={item.ratingImageUrl || ""}
                    ratingImageAlt={item.ratingImageAlt || ""}
                    reviewerName={item.reviewerName}
                    reviewerNameClassName={item.reviewerNameClassName || ""}
                    verifiedText={item.verifiedText}
                    verifiedTextClassName={item.verifiedTextClassName || ""}
                    badgeIconUrl={item.badgeIconUrl || ""}
                    badgeIconAlt={item.badgeIconAlt || ""}
                    avatarUrl={item.avatarUrl || ""}
                    avatarAlt={item.avatarAlt || ""}
                    cardClassName={item.cardClassName || ""}
                    textBlockClassName={item.textBlockClassName || ""}
                    reviewerRowClassName={item.reviewerRowClassName || ""}
                    reviewBodyClassName={item.reviewBodyClassName || ""}
                    />
                  ))}
                </div>
              ))}
            </Media>

            <Media at="sm">
              {mobileRows.map((row, rowIndex) => (
                <div
                  key={`mobile-row-${rowIndex}`}
                  className={`items-stretch box-border caret-transparent flex flex-wrap justify-start outline-[3px] md:flex-nowrap ${
                  rowIndex === 0
                    ? "mt-0 p-px md:pt-2.5 md:px-2.5"
                    : "mt-px p-0 md:pt-px md:pb-2.5 md:px-2.5"
                }`}
              >
                {row.map((item, itemIndex) => (
                  <TestimonialCard
                    key={`mobile-card-${rowIndex}-${itemIndex}`}
                    layout={item.layout || "default"}
                    containerVariant={item.containerVariant || ""}
                    innerWrapperVariant={item.innerWrapperVariant || ""}
                    imageWrapperVariant={item.imageWrapperVariant || ""}
                    imageUrl={item.imageUrl}
                    imageAlt={item.imageAlt || ""}
                    imageClassName={item.imageClassName || ""}
                    quote={item.quote}
                    quoteClassName={item.quoteClassName || ""}
                    ratingImageUrl={item.ratingImageUrl || ""}
                    ratingImageAlt={item.ratingImageAlt || ""}
                    reviewerName={item.reviewerName}
                    reviewerNameClassName={item.reviewerNameClassName || ""}
                    verifiedText={item.verifiedText}
                    verifiedTextClassName={item.verifiedTextClassName || ""}
                    badgeIconUrl={item.badgeIconUrl || ""}
                    badgeIconAlt={item.badgeIconAlt || ""}
                    avatarUrl={item.avatarUrl || ""}
                    avatarAlt={item.avatarAlt || ""}
                    cardClassName={item.cardClassName || ""}
                    textBlockClassName={item.textBlockClassName || ""}
                    reviewerRowClassName={item.reviewerRowClassName || ""}
                    reviewBodyClassName={item.reviewBodyClassName || ""}
                    />
                  ))}
                </div>
              ))}
            </Media>
          </div>
        </div>
      )}

      {showCompactTestimonials && (
        <div className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center mt-[50px] md:flex-row">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full">
            <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
              <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                <div className="items-start box-border caret-transparent flex flex-col flex-wrap min-h-[auto] min-w-[auto] mx-[15px] md:flex-row md:mx-0">
                  {compactChunks.map((chunk, chunkIndex) => (
                    <div
                      key={`compact-chunk-${chunkIndex}`}
                      className="contents"
                    >
                      {chunk.map((item, itemIndex) => (
                        <div
                          key={`compact-card-${chunkIndex}-${itemIndex}`}
                          className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
                        >
                          <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                            <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <div
                                className={`items-start bg-white shadow-[rgba(0,0,0,0.1)_0px_0px_20px_1px] box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] rounded-xl ${
                                  itemIndex > 0 || chunkIndex > 0
                                    ? "mt-5 md:mt-[35px]"
                                    : ""
                                } ${item.cardClassName || ""}`}
                              >
                                <TestimonialCard
                                  layout={item.layout || "compact"}
                                  containerVariant={item.containerVariant || ""}
                                  innerWrapperVariant=""
                                  imageWrapperVariant=""
                                  imageUrl=""
                                  imageAlt=""
                                  imageClassName=""
                                  quote={item.quote}
                                  quoteClassName=""
                                  ratingImageUrl=""
                                  ratingImageAlt=""
                                  reviewerName={item.reviewerName}
                                  reviewerNameClassName={
                                    item.reviewerNameClassName || ""
                                  }
                                  verifiedText={item.verifiedText}
                                  verifiedTextClassName={
                                    item.verifiedTextClassName || ""
                                  }
                                  badgeIconUrl=""
                                  badgeIconAlt=""
                                  avatarUrl=""
                                  avatarAlt=""
                                  cardClassName=""
                                  textBlockClassName=""
                                  reviewerRowClassName={
                                    item.reviewerRowClassName || ""
                                  }
                                  reviewBodyClassName={
                                    item.reviewBodyClassName || ""
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {chunkIndex < compactChunks.length - 1 && (
                        <div
                          className={`box-border caret-transparent flex basis-[0%] flex-col grow max-w-[30px] min-h-[auto] min-w-[30px] outline-[3px] w-[30px] ${props.compactGapClassName || ""}`}
                        >
                          <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                            <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <div className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-5">
                                <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center md:flex-row">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full">
          <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
            <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
              <CtaBanner
                containerVariant={props.ctaContainerVariant || "mt-10 md:mt-5"}
                sectionVariant={props.ctaSectionVariant || ""}
                wrapperVariant={props.ctaWrapperVariant || ""}
                contentVariant={props.ctaContentVariant || ""}
                buttonVariant={props.ctaButtonVariant || "bg-zinc-700"}
                innerButtonVariant={props.ctaInnerButtonVariant || ""}
                mediaRowVariant={props.ctaMediaRowVariant || ""}
                mediaWrapperVariant={props.ctaMediaWrapperVariant || ""}
                mediaInnerVariant={props.ctaMediaInnerVariant || ""}
                mediaItemVariant={props.ctaMediaItemVariant || ""}
                imageWrapperVariant={props.ctaImageWrapperVariant || ""}
                imageSrc={props.ctaImageSrc || ""}
                imageAlt={props.ctaImageAlt || ""}
                imageSizes={props.ctaImageSizes || "1170px"}
                imageClassName={props.ctaImageClassName || ""}
                textWrapperVariant={props.ctaTextWrapperVariant || ""}
                headingTag={props.ctaHeadingTag || "p"}
                headingText={props.ctaHeadingText}
                headingClassName={props.ctaHeadingClassName || ""}
                ctaText={props.ctaText}
                ctaTitle={props.ctaTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
