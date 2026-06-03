import { Media } from "../../lib/responsive-media";

export type ContentSectionProps = {
  sectionClassName?: string;
  topWrapperClassName?: string;
  showBottomSection?: boolean;

  title: string;
  titleClassName?: string;

  mobileImageSrc: string;
  mobileImageAlt: string;
  desktopImageSrc: string;
  desktopImageAlt: string;
  bottomDesktopImageSrc?: string;
  bottomDesktopImageAlt?: string;

  introParagraphs: string[];
  introParagraphsClassName?: string;

  highlightedProductName?: string;
  productParagraphBefore?: string;
  productParagraphAfter?: string;

  extraParagraph?: string;
  extraParagraphClassName?: string;

  benefitsTitle?: string;
  benefitsTitleClassName?: string;

  benefitsParagraphs?: string[];
  benefitsParagraphsClassName?: string;

  benefitItems?: string[];
  benefitItemsWrapperClassName?: string;
  benefitItemClassName?: string;

  highlightParagraph?: string;
  highlightParagraphClassName?: string;

  closingParagraphs?: string[];
  closingParagraphsClassName?: string;

  desktopImageAlignment?: "start" | "center" | "end";
  showDivider?: boolean;
  topDecorationImageSrc?: string;
  topDecorationImageAlt?: string;
  bottomDecorationImageSrc?: string;
  bottomDecorationImageAlt?: string;
};

export const ContentSection = (props: ContentSectionProps) => {
  return (
    <section
      className={
        props.sectionClassName ||
        "relative items-center bg-gray-100 bg-no-repeat box-border caret-transparent flex flex-col justify-items-center w-full bg-center px-[15px] py-[45px] md:py-[60px]"
      }
    >
      {props.topDecorationImageSrc && (
        <img
          src={props.topDecorationImageSrc}
          alt={props.topDecorationImageAlt || ""}
          className="absolute max-w-full w-full top-0 md:top-[-45px] pointer-events-none"
        />
      )}

      <div className="text-zinc-800 flex flex-col max-w-[1170px] w-full gap-8 md:flex-row md:gap-12 md:items-start">

        {/* Text column */}
        <div className="w-full md:flex-1 text-center md:text-left">
          <h2 className={props.titleClassName || "text-black text-[27.0583px] font-bold leading-[32.47px] text-center md:text-3xl md:leading-9 md:text-left"}>
            {props.title}
          </h2>

          {/* Mobile image */}
          <Media at="sm">
            <div className="mt-6">
              <img
                src={props.mobileImageSrc}
                alt={props.mobileImageAlt}
                className="w-full rounded-[10px]"
              />
            </div>
          </Media>

          {props.introParagraphs?.map((paragraph, index) => (
            <p
              key={`intro-${index}`}
              className={`text-black text-[16.0583px] leading-[24.0875px] mt-6 md:text-lg md:leading-[27px] ${index > 0 ? (props.introParagraphsClassName || "") : ""}`}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

          {(props.productParagraphBefore || props.highlightedProductName || props.productParagraphAfter) && (
            <p className="text-black text-[16.0583px] leading-[24.0875px] mt-6 md:text-lg md:leading-[27px]">
              {props.productParagraphBefore}
              {props.highlightedProductName && (
                <b className="font-bold">{props.highlightedProductName}</b>
              )}
              {props.productParagraphAfter}
            </p>
          )}

          {props.extraParagraph && (
            <p className={props.extraParagraphClassName || "text-black font-bold text-[16.0583px] leading-[24.0875px] mt-6 md:text-lg md:leading-[27px]"}>
              {props.extraParagraph}
            </p>
          )}

          {!props.showBottomSection && props.benefitsTitle && (
            <h2 className={props.benefitsTitleClassName || "text-black text-[27.0583px] font-bold leading-[32.47px] mt-6 text-center md:text-3xl md:leading-9 md:text-left"}>
              {props.benefitsTitle}
            </h2>
          )}

          {!props.showBottomSection && props.benefitsParagraphs?.map((paragraph, index) => {
            const byIndex = paragraph.indexOf(" by ");
            const boldPart = byIndex !== -1 ? paragraph.slice(0, byIndex) : null;
            const restPart = byIndex !== -1 ? paragraph.slice(byIndex) : paragraph;
            return (
              <p
                key={`benefit-paragraph-${index}`}
                className={`text-black text-[16.0583px] leading-[24.0875px] mt-6 md:text-lg md:leading-[27px] ${index > 0 ? (props.benefitsParagraphsClassName || "") : ""}`}
              >
                {boldPart ? <><strong className="font-bold">{boldPart}</strong>{restPart}</> : restPart}
              </p>
            );
          })}

          {props.benefitItems?.map((item, index) => {
            const byIndex = item.indexOf(" by ");
            const boldPart = byIndex !== -1 ? item.slice(0, byIndex) : item;
            const restPart = byIndex !== -1 ? item.slice(byIndex) : "";
            return (
              <div
                key={`benefit-item-${index}`}
                className={`flex items-start pl-0 md:pl-[25px] ${index === 0 ? "mt-6" : "mt-4"}`}
              >
                <span className="mt-[6px] mr-[15px] shrink-0 block h-2.5 w-2.5 min-w-[10px] rounded-full bg-zinc-700" />
                <p className={props.benefitItemClassName || "text-[16.0583px] leading-[24.0875px] md:text-lg md:leading-[27px]"}>
                  <strong className="font-bold">{boldPart}</strong>{restPart}
                </p>
              </div>
            );
          })}

          {!props.showBottomSection && props.closingParagraphs?.map((paragraph, index) => (
            <p
              key={`closing-${index}`}
              className={props.closingParagraphsClassName || "text-black text-[16.0583px] leading-[24.0875px] mt-6 md:text-lg md:leading-[27px]"}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

        {/* Desktop image column */}
        <Media greaterThan="sm">
          <div className={`md:block md:w-[45%] md:shrink-0${props.desktopImageAlignment === "center" ? " md:self-center" : props.desktopImageAlignment === "end" ? " md:self-end" : ""}`}>
            <img
              src={props.desktopImageSrc}
              alt={props.desktopImageAlt}
              className="w-full rounded-[10px]"
            />
          </div>
        </Media>
      </div>

      {props.showBottomSection && props.benefitsTitle && (
        <div className="text-zinc-800 flex flex-col max-w-[1170px] w-full gap-8 mt-[50px] md:flex-row md:gap-12 md:mt-[60px] md:items-center">
          {/* Desktop image left */}
          <Media greaterThan="sm">
            <div className="md:block md:w-[45%] md:shrink-0">
              <img
                src={props.bottomDesktopImageSrc || props.desktopImageSrc}
                alt={props.bottomDesktopImageAlt || props.desktopImageAlt}
                className="w-full rounded-[10px]"
              />
            </div>
          </Media>

          <div className="w-full md:flex-1 text-center md:text-left">
            <h2 className={props.benefitsTitleClassName || "text-black text-[27.0583px] font-bold leading-[32.47px] text-center md:text-3xl md:leading-9 md:text-left"}>
              {props.benefitsTitle}
            </h2>

            {/* Mobile image */}
            <Media at="sm">
              <div className="mt-6">
                <img
                  src={props.mobileImageSrc}
                  alt={props.mobileImageAlt}
                  className="w-full rounded-[10px]"
                />
              </div>
            </Media>

            {props.benefitsParagraphs?.map((paragraph, index) => {
              const byIndex = paragraph.indexOf(" by ");
              const boldPart = byIndex !== -1 ? paragraph.slice(0, byIndex) : null;
              const restPart = byIndex !== -1 ? paragraph.slice(byIndex) : paragraph;
              return (
                <p
                  key={`bottom-benefits-paragraph-${index}`}
                  className={`text-black text-[16.0583px] leading-[24.0875px] mt-6 md:text-lg md:leading-[27px] ${index > 0 ? (props.benefitsParagraphsClassName || "") : ""}`}
                >
                  {boldPart ? <><strong className="font-bold">{boldPart}</strong>{restPart}</> : restPart}
                </p>
              );
            })}

            {props.highlightParagraph && (
              <p className={props.highlightParagraphClassName || "text-black font-bold text-[16.0583px] leading-[24.0875px] mt-6 md:text-lg md:leading-[27px]"}>
                {props.highlightParagraph}
              </p>
            )}

            {props.closingParagraphs?.map((paragraph, index) => (
              <p
                key={`bottom-closing-${index}`}
                className={props.closingParagraphsClassName || "text-black text-[16.0583px] leading-[24.0875px] mt-6 md:text-lg md:leading-[27px]"}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </div>
      )}

      {props.bottomDecorationImageSrc && (
        <img
          src={props.bottomDecorationImageSrc}
          alt={props.bottomDecorationImageAlt || ""}
          className="absolute max-w-full w-full bottom-0 md:bottom-[-45px] pointer-events-none"
        />
      )}
    </section>
  );
};
