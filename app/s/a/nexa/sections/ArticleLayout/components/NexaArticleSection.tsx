// @ts-nocheck
export type NexaArticleSectionProps = {
  variant:
    | "paragraph"
    | "boldParagraph"
    | "nestedBoldParagraph"
    | "statText"
    | "image"
    | "emphasisParagraph"
    | "calloutTitle"
    | "nestedCalloutTitle"
    | "video"
    | "standaloneImage"
    | "featureText";
  className: string;
  imageClassName?: string;
  title?: string;
  src?: string;
  poster?: string;
  href?: string;
  children?: React.ReactNode;
};

export const NexaArticleSection = (props: NexaArticleSectionProps) => {
  if (props.variant === "paragraph") {
    return <p className={props.className}>{props.children}</p>;
  }

  if (props.variant === "boldParagraph") {
    return (
      <p className={props.className}>
        <b className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          {props.children}
        </b>
      </p>
    );
  }

  if (props.variant === "nestedBoldParagraph") {
    return (
      <p className={props.className}>
        <b className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <div className="text-black text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            {props.children}
          </div>
        </b>
      </p>
    );
  }

  if (props.variant === "statText") {
    return <div className={props.className}>{props.children}</div>;
  }

  if (props.variant === "image") {
    return (
      <div className={props.className}>
        <img
          title=""
          src={props.src}
          alt=""
          href=""
          className={props.imageClassName}
        />
      </div>
    );
  }

  if (props.variant === "emphasisParagraph") {
    return <p className={props.className}>{props.children}</p>;
  }

  if (props.variant === "calloutTitle") {
    return (
      <div className={props.className}>
        <div className="box-border caret-transparent outline-[3px] md:text-[33px] md:leading-[43px] text-[28px] leading-[34px] text-left">
          <span className="text-red-600 box-border caret-transparent outline-[3px] md:text-[33px] md:leading-[43px] text-[28px] leading-[34px] text-left">
            <span className="text-black box-border caret-transparent outline-[3px] text-[28px] leading-[34px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
              <div className="text-black text-2xl box-border caret-transparent outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px] leading-[30px]">
                <span className="text-2xl box-border caret-transparent outline-[3px] md:text-[33px] md:leading-[43px] leading-[30px]">
                  <span className="text-black text-2xl box-border caret-transparent leading-[30px] outline-[3px] md:text-[37px] md:leading-[45px]">
                    {props.title}
                  </span>
                </span>
              </div>
            </span>
          </span>
        </div>
      </div>
    );
  }

  if (props.variant === "nestedCalloutTitle") {
    return (
      <div className={props.className}>
        <div className="box-border caret-transparent outline-[3px] md:text-[33px] md:leading-[43px] text-[28px] leading-[34px] text-left">
          <span className="text-red-600 box-border caret-transparent outline-[3px] md:text-[33px] md:leading-[43px] text-[28px] leading-[34px] text-left">
            <span className="text-black box-border caret-transparent outline-[3px] text-[28px] leading-[34px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
              <div className="text-black box-border caret-transparent outline-[3px] text-[28px] leading-[34px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                <span className="box-border caret-transparent outline-[3px] md:text-[33px] md:leading-[43px] text-[28px] leading-[34px] text-left">
                  <span className="text-black box-border caret-transparent outline-[3px] text-[28px] leading-[34px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                    <div className="text-black text-2xl box-border caret-transparent outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px] leading-[30px]">
                      <span className="text-2xl box-border caret-transparent outline-[3px] md:text-[33px] md:leading-[43px] leading-[30px]">
                        <span className="text-black text-2xl box-border caret-transparent leading-[30px] outline-[3px] md:text-[37px] md:leading-[45px]">
                          {props.children ?? props.title}
                        </span>
                      </span>
                    </div>
                  </span>
                </span>
              </div>
            </span>
          </span>
        </div>
      </div>
    );
  }

  if (props.variant === "video") {
    return (
      <div className={props.className}>
        <video
          autoPlay
          playsInline
          muted
          poster={props.poster}
          src={props.src}
          loop
          className="box-border caret-transparent h-44 max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[351px] mt-5 pt-px rounded-[25px] md:h-[405px] md:w-[809px]"
        ></video>
      </div>
    );
  }

  if (props.variant === "standaloneImage") {
    return (
      <img
        title=""
        src={props.src}
        alt=""
        href=""
        className={props.className}
      />
    );
  }

  return <div className={props.className}>{props.children}</div>;
};
