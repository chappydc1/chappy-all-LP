"use client";

export type ArticleHeaderProps = {
  variant: string;
  breadcrumbText?: string;
  headline?: React.ReactNode;
  subheadline?: string;
  ratingImageUrl?: string;
  ratingImageSizes?: string;
  ratingText?: string;
  heroImageUrl?: string;
  heroImageSizes?: string;
  quoteText?: string;
  quoteAuthor?: string;
  bodyContent?: React.ReactNode;
};

export const ArticleHeader = (props: ArticleHeaderProps) => {
  if (props.variant === "breadcrumb") {
    return (
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-gray-500 text-[12.4583px] leading-[12.4583px] w-full mt-[15px] mx-2.5 md:text-xs md:leading-3">
          <div className="box-border caret-transparent text-[12.4583px] leading-[12.4583px] outline-[3px] w-full md:text-xs md:leading-3">
            <p className="box-border caret-transparent outline-[3px] text-[12.4583px] leading-[12.4583px] md:text-xs md:leading-3">
              {props.breadcrumbText}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "headline") {
    return (
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-[23.4583px] leading-[30.4958px] w-full mt-2.5 mx-2.5 md:text-3xl md:leading-[39px]">
          <div className="box-border caret-transparent text-[23.4583px] leading-[30.4958px] outline-[3px] w-full md:text-3xl md:leading-[39px]">
            <p className="box-border caret-transparent outline-[3px] text-[23.4583px] leading-[30.4958px] md:text-3xl md:leading-[39px]">
              <strong className="font-bold box-border caret-transparent outline-[3px] text-[23.4583px] leading-[30.4958px] md:text-3xl md:leading-[39px]">
                {props.headline}
              </strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "subheadline") {
    return (
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-[19.4583px] leading-[29.1875px] w-full mt-2.5 mx-2.5 md:text-lg md:leading-[27px]">
          <div className="box-border caret-transparent text-[19.4583px] leading-[29.1875px] outline-[3px] w-full md:text-lg md:leading-[27px]">
            <h3 className="text-[19.4583px] font-bold box-border caret-transparent leading-[29.1875px] outline-[3px] md:text-lg md:leading-[27px]">
              <span className="text-black text-[18.6667px] box-border caret-transparent leading-7 outline-[3px]">
                {props.subheadline}
              </span>
            </h3>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "rating") {
    return (
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] flex flex-col w-full">
          <div className="box-border caret-transparent items-center flex flex-wrap min-h-[auto] min-w-[auto] mt-5 mb-2.5 mx-2.5">
            <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] min-w-[12%] outline-[3px] w-[12%]">
              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                <div className="items-start box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] flex flex-col w-full">
                  <img
                    src={props.ratingImageUrl}
                    alt=""
                    sizes={props.ratingImageSizes}
                    className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[100px]"
                  />
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-fit min-h-[auto] outline-[3px]">
              <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]">
                <div className="text-cyan-700 text-[15.4583px] box-border caret-transparent leading-[15.4583px] min-h-[auto] min-w-[auto] outline-[3px] w-full pl-2.5 md:text-lg md:leading-[18px]">
                  <div className="text-[15.4583px] box-border caret-transparent leading-[15.4583px] outline-[3px] w-full md:text-lg md:leading-[18px]">
                    <p className="text-[15.4583px] box-border caret-transparent leading-[15.4583px] outline-[3px] md:text-lg md:leading-[18px]">
                      <strong className="text-[15.4583px] font-bold box-border caret-transparent leading-[15.4583px] outline-[3px] md:text-lg md:leading-[18px]">
                        {props.ratingText}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "heroImage") {
    return (
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
        <div className="items-center box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] flex flex-col w-full mt-2.5 mx-2.5">
          <img
            src={props.heroImageUrl}
            alt=""
            sizes={props.heroImageSizes}
            className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-full rounded-[10px]"
          />
        </div>
      </div>
    );
  }

  if (props.variant === "quote") {
    return (
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-[20.4583px] leading-[30.6875px] w-full mt-2.5 p-2.5 md:text-xl md:leading-[30px]">
          <div className="box-border caret-transparent text-[20.4583px] leading-[30.6875px] outline-[3px] w-full md:text-xl md:leading-[30px]">
            <p className="box-border caret-transparent outline-[3px] text-[20.4583px] leading-[30.6875px] md:text-xl md:leading-[30px]">
              <span className="text-black box-border caret-transparent outline-[3px] text-[17.3333px] leading-[26px]">
                &quot;
              </span>
              <em className="text-black text-[17.3333px] italic box-border caret-transparent leading-[26px] outline-[3px]">
                {props.quoteText}
              </em>
              <span className="text-black box-border caret-transparent outline-[3px] text-[17.3333px] leading-[26px]">
                &quot;
              </span>
              <strong className="font-bold box-border caret-transparent outline-[3px] text-black text-[17.3333px] leading-[26px]">
                {props.quoteAuthor}
              </strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "body") {
    return (
      <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-[20.4583px] leading-[30.6875px] w-full mt-2.5 p-2.5 md:text-xl md:leading-[30px]">
          <div className="box-border caret-transparent text-[20.4583px] leading-[30.6875px] outline-[3px] w-full md:text-xl md:leading-[30px]">
            <p className="box-border caret-transparent outline-[3px] text-[20.4583px] leading-[30.6875px] md:text-xl md:leading-[30px]">
              {props.bodyContent}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] block"></div>
    </div>
  );
};
