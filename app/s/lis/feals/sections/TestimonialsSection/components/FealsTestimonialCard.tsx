export type FealsTestimonialCardProps = {
  iconSrc: string;
  title: string;
  quote: React.ReactNode;
  authorName: string;
  verificationIconSrc: string;
  verificationText: string;
};

export const FealsTestimonialCard = (props: FealsTestimonialCardProps) => {
  return (
    <div className="relative items-center self-auto box-border caret-transparent flex flex-col grow justify-start max-w-full min-h-px min-w-[auto] outline-[3px] border-stone-600 px-6 py-8 border-b md:items-start md:self-stretch md:justify-center md:px-4">
      <div className="self-start box-border caret-transparent gap-x-0.5 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] gap-y-0.5 mb-2.5 md:mb-2">
        <img
          src={props.iconSrc}
          alt="Icon"
          className="box-border caret-transparent h-6 outline-[3px] align-baseline w-6"
        />
        <img
          src={props.iconSrc}
          alt="Icon"
          className="box-border caret-transparent h-6 outline-[3px] align-baseline w-6"
        />
        <img
          src={props.iconSrc}
          alt="Icon"
          className="box-border caret-transparent h-6 outline-[3px] align-baseline w-6"
        />
        <img
          src={props.iconSrc}
          alt="Icon"
          className="box-border caret-transparent h-6 outline-[3px] align-baseline w-6"
        />
        <img
          src={props.iconSrc}
          alt="Icon"
          className="box-border caret-transparent h-6 outline-[3px] align-baseline w-6"
        />
      </div>
      <div className="text-2xl italic font-medium self-stretch box-border caret-transparent shrink-0 leading-[28.8px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-left mb-2 font-bookmania md:text-[28px] md:leading-[33.6px]">
        <span className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] break-words w-full md:text-[28px] md:leading-[33.6px]">
          <p className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] break-words md:text-[28px] md:leading-[33.6px]">
            {props.title}
          </p>
        </span>
      </div>
      <div className="text-lg self-stretch box-border caret-transparent shrink-0 leading-[25.2px] min-h-[auto] min-w-[auto] outline-[3px] break-words mb-4 md:text-xl md:leading-7">
        <span className="text-lg box-border caret-transparent leading-[25.2px] outline-[3px] break-words w-full md:text-xl md:leading-7">
          <p className="text-lg box-border caret-transparent leading-[25.2px] outline-[3px] break-words md:text-xl md:leading-7">
            {props.quote}
          </p>
        </span>
      </div>
      <div className="font-bold self-start box-border caret-transparent shrink-0 leading-5 min-h-[auto] min-w-[auto] outline-[3px] break-words capitalize mb-1.5 md:font-semibold md:leading-6 md:mb-0">
        <span className="font-bold box-border caret-transparent leading-5 outline-[3px] break-words w-full md:font-semibold md:leading-6">
          <p className="font-bold box-border caret-transparent leading-5 outline-[3px] break-words md:font-semibold md:leading-6">
            {props.authorName}
          </p>
        </span>
      </div>
      <div className="relative items-center self-start box-border caret-transparent flex shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px]">
        <picture className="items-center box-border caret-transparent flex shrink-0 max-w-[400px] object-cover outline-[3px] overflow-x-auto overflow-y-hidden mr-1 md:mr-2">
          <img
            src={props.verificationIconSrc}
            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
          />
        </picture>
        <div className="text-[13px] box-border caret-transparent shrink-0 leading-4 min-h-[auto] min-w-[auto] outline-[3px] break-words md:leading-6">
          <span className="box-border caret-transparent leading-4 outline-[3px] break-words w-full md:leading-6">
            <p className="box-border caret-transparent leading-4 outline-[3px] break-words md:leading-6">
              {props.verificationText}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};
