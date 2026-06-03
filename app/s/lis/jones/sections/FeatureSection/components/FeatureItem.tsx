import { Testimonial } from "../../FeatureSection/components/Testimonial";

export type FeatureItemProps = {
  rootClassName: string;
  number: string;
  title: React.ReactNode;
  description: React.ReactNode;
  testimonialClassName?: string;
  testimonialTitle: string;
  testimonialAuthorName: string;
  testimonialBuyerLabel: string;
  testimonialBody: string;
  topMedia: React.ReactNode;
  bottomMedia?: React.ReactNode;
};

export const FeatureItem = (props: FeatureItemProps) => {
  return (
    <div
      className={`relative items-center self-stretch box-border caret-transparent flex flex-col shrink-0 grid-cols-[repeat(2,minmax(0px,1fr))] justify-center max-w-full min-h-px min-w-[auto] outline-[3px] md:gap-x-[70px] md:grid md:gap-y-[70px] ${props.rootClassName}`}
    >
      {props.topMedia}
      <div className="relative box-border caret-transparent flex shrink-0 justify-center min-h-px min-w-[auto] outline-[3px] w-full items-start gap-x-2.5 flex-col max-w-[650px] gap-y-2.5 md:items-center md:gap-x-[15px] md:gap-y-[15px]">
        <div className="box-border caret-transparent shrink-0 outline-[3px] text-[35px] font-semibold self-stretch leading-[45px] min-h-[auto] min-w-[auto] break-words w-full font-canela md:text-[51px] md:leading-[65px] md:w-auto">
          <span className="text-[35px] box-border caret-transparent leading-[45px] outline-[3px] break-words w-full md:text-[51px] md:leading-[65px]">
            <p className="text-[35px] box-border caret-transparent leading-[45px] outline-[3px] break-words md:text-[51px] md:leading-[65px]">
              {props.number}
            </p>
          </span>
        </div>
        <div className="text-[22px] self-stretch box-border caret-transparent shrink-0 tracking-[normal] leading-[35px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
          <span className="text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words w-full md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
            <p className="text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
              {props.title}
            </p>
          </span>
        </div>
        <div className="text-base font-medium self-stretch box-border caret-transparent shrink-0 leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-ringsidewideweb md:text-lg md:leading-[27px]">
          <span className="text-base box-border caret-transparent leading-6 outline-[3px] break-words w-full md:text-lg md:leading-[27px]">
            <p className="text-base box-border caret-transparent leading-6 outline-[3px] break-words md:text-lg md:leading-[27px]">
              {props.description}
            </p>
          </span>
        </div>
        <Testimonial
          className={props.testimonialClassName}
          title={props.testimonialTitle}
          authorName={props.testimonialAuthorName}
          buyerLabel={props.testimonialBuyerLabel}
          body={props.testimonialBody}
        />
        {props.bottomMedia}
      </div>
    </div>
  );
};
