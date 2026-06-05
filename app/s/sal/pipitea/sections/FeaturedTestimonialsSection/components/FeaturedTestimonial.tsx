export type FeaturedTestimonialProps = {
  containerVariant: string;
  imageWrapperVariant: string;
  desktopImageUrl: string;
  desktopImageVariant: string;
  mobileImageUrl: string;
  mobileImageVariant: string;
  contentVariant: string;
  quote: string;
  authorName: string;
  authorNameVariant: string;
};

export const FeaturedTestimonial = (props: FeaturedTestimonialProps) => {
  return (
    <div
      className={`bg-pink-500/10 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full border border-pink-950 mx-px rounded-[10px] border-solid md:flex-row ${props.containerVariant}`}
    >
      <div
        className={`box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full md:w-6/12 ${props.imageWrapperVariant}`}
      >
        <img
          title=""
          src={props.desktopImageUrl}
          alt=""
          className={`text-black box-border caret-transparent h-full max-w-full outline-[3px] w-full mb-px pb-px ${props.desktopImageVariant}`}
        />
        <img
          title=""
          src={props.mobileImageUrl}
          alt=""
          className={`text-black box-border caret-transparent h-full max-w-full outline-[3px] w-full mb-px pb-px ${props.mobileImageVariant}`}
        />
      </div>
      <div
        className={`self-center box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full p-4 md:p-5 ${props.contentVariant}`}
      >
        <p
          className="text-base box-border caret-transparent leading-6 outline-[3px] md:text-[17px] md:leading-[25.5px]"
        >
          {props.quote}
        </p>
        <img
          title=""
          src="https://c.animaapp.com/mq03tlhwPsu7gY/assets/1760839096564_trustpilot_review.png"
          alt=""
          className="text-black box-border caret-transparent inline h-4 max-w-full outline-[3px] mt-2.5 md:h-5"
        />
        <div className="items-center self-center box-border caret-transparent flex outline-[3px] w-full pt-3 pb-px px-px">
          <div
            className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"
          >
            <div
              className="items-center box-border caret-transparent flex justify-center outline-[3px]"
            >
              <div
                className="text-[16.9583px] box-border caret-transparent leading-[25.4375px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full md:text-base md:leading-6"
              ></div>
            </div>
            <div
              className="items-center box-border caret-transparent flex justify-center outline-[3px]"
            ></div>
            <div
              className="items-center box-border caret-transparent flex justify-center outline-[3px]"
            >
              <div
                className="text-[13.4583px] box-border caret-transparent leading-[20.1875px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full md:text-[13px] md:leading-[19.5px]"
              ></div>
            </div>
          </div>
          <strong
            className={`text-xs font-bold box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:text-base ${props.authorNameVariant}`}
          >
            {props.authorName}
          </strong>
          <div
            className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-5"
          >
            <img
              src="https://c.animaapp.com/mq03tlhwPsu7gY/assets/5.png"
              alt=""
              title=""
              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[18px]"
            />
          </div>
          <strong
            className="text-lime-600 text-xs font-bold box-border caret-transparent block leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-[21px]"
          >
            Verified Buyer
          </strong>
        </div>
      </div>
    </div>
  );
};
