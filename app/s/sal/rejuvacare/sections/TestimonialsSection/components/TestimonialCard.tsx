export type TestimonialCardProps = {
  cardVariant: string;
  imageUrl: string;
  testimonial: string;
  authorName: string;
  ratingImageUrl: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full px-1.5 py-3 md:px-2.5">
      <div
        className={`items-start bg-white box-border caret-transparent flex flex-col justify-center outline-[3px] w-full rounded-[15px] ${props.cardVariant}`}
      >
        <img
          title=""
          src={props.imageUrl}
          alt=""
          className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full rounded-t-[15px]"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full p-5 md:px-[25px]">
          <div className="box-border caret-transparent outline-[3px] text-left p-px font-montserrat">
            {props.testimonial}
            <div className="box-border caret-transparent outline-[3px]"></div>
            <div className="box-border caret-transparent outline-[3px]">
              <br className="box-border caret-transparent outline-[3px]" />
            </div>
            <div className="box-border caret-transparent outline-[3px]">
              <b className="font-bold box-border caret-transparent outline-[3px]">
                {props.authorName}
              </b>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px]">
            <img
              title=""
              src={props.ratingImageUrl}
              alt=""
              className="text-black box-border caret-transparent h-[18px] max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
