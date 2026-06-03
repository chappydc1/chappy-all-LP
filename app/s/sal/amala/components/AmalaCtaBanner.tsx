import { OFFER_SECTION_HREF } from "../config/links";

export type AmalaCtaBannerProps = {
  containerVariant: string;
  sectionVariant: string;
  wrapperVariant: string;
  contentVariant: string;
  buttonVariant: string;
  innerButtonVariant: string;
  mediaRowVariant: string;
  mediaWrapperVariant: string;
  mediaInnerVariant: string;
  mediaItemVariant: string;
  imageWrapperVariant: string;
  imageSrc: string;
  imageAlt: string;
  imageSizes: string;
  imageClassName: string;
  textWrapperVariant: string;
  headingTag: string;
  headingText: string;
  headingClassName: string;
  ctaText: string;
  ctaTitle: string;
  ctaHref?: string;
};

export const AmalaCtaBanner = (props: AmalaCtaBannerProps) => {
  const HeadingTag = props.headingTag as keyof JSX.IntrinsicElements;

  return (
    <div
      className={`items-start box-border caret-transparent flex flex-wrap ${props.containerVariant}`}
    >
      <div
        className={`box-border caret-transparent flex basis-[0%] flex-col grow outline-[3px] ${props.sectionVariant}`}
      >
        <div
          className={`items-center box-border caret-transparent flex justify-center outline-[3px] ${props.wrapperVariant}`}
        >
          <div
            className={`items-stretch box-border caret-transparent flex flex-col outline-[3px] w-full ${props.contentVariant}`}
          >
            <a
              href={props.ctaHref || OFFER_SECTION_HREF}
              title={props.ctaTitle}
              className={`relative cursor-pointer text-white text-lg font-bold self-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent flex flex-col tracking-[0.36px] leading-[27.54px] max-w-[565px] text-center align-middle w-full px-2.5 py-3 rounded-[30px] ${props.buttonVariant}`}
            >
              <div
                className={`box-border caret-transparent outline-[3px] pointer-events-none ${props.innerButtonVariant}`}
              >
                <p className="box-border caret-transparent outline-[3px]">
                  {props.ctaText}
                </p>
              </div>
            </a>
          </div>
        </div>

        <div
          className={`items-center box-border caret-transparent flex justify-center outline-[3px] ${props.wrapperVariant}`}
        >
          <div
            className={`box-border caret-transparent flex flex-col outline-[3px] w-full ${props.mediaWrapperVariant}`}
          >
            <div
              className={`items-center box-border caret-transparent flex flex-wrap justify-center mt-5 ${props.mediaInnerVariant}`}
            >
              <div
                className={`box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit outline-[3px] ${props.mediaItemVariant}`}
              >
                <div
                  className={`items-center box-border caret-transparent flex justify-center outline-[3px] ${props.wrapperVariant}`}
                >
                  <div
                    className={`items-center box-border caret-transparent flex flex-col outline-[3px] w-full ${props.imageWrapperVariant}`}
                  >
                    {props.imageSrc && (
                      <img
                        src={props.imageSrc}
                        alt={props.imageAlt}
                        sizes={props.imageSizes}
                        className={`box-border caret-transparent h-5 max-w-full outline-[3px] w-5 ${props.imageClassName}`}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit outline-[3px] ${props.mediaItemVariant}`}
              >
                <div
                  className={`items-center box-border caret-transparent flex justify-center outline-[3px] ${props.wrapperVariant}`}
                >
                  <div
                    className={`text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] text-left w-full ml-2.5 md:text-base md:leading-6 ${props.textWrapperVariant}`}
                  >
                    <div className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-base md:leading-6">
                      <HeadingTag className={props.headingClassName}>
                        {props.headingText}
                        <br className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-base md:leading-6" />
                      </HeadingTag>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
