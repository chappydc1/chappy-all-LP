export type SleepApneaBenefitSectionProps = {
  category: string;
  number: string;
  title: string;
  description: string;
  mediaLayoutClassName: string;
  primaryImageUrl: string;
  primaryImageAlt: string;
  primaryImageClassName: string;
  secondaryImageUrl?: string;
  secondaryImageAlt?: string;
  secondaryImageClassName?: string;
};

export const SleepApneaBenefitSection = (props: SleepApneaBenefitSectionProps) => {
  return (
    <section className="bg-white box-border caret-transparent outline-[3px] p-5 md:py-10">
      <div className="items-center box-border caret-transparent gap-x-0 grid [grid-template-areas:'intro''image''body'] grid-cols-none max-w-none outline-[3px] gap-y-0 mx-0 md:gap-x-16 md:[grid-template-areas:'intro_image''body_image'] md:grid-cols-[425px_1fr] md:max-w-[1140px] md:mx-auto">
        <div className="self-end box-border caret-transparent col-end-[intro] col-start-[intro] row-end-[intro] row-start-[intro] min-h-[auto] min-w-[auto] outline-[3px]">
          <div className="border-b-green-700 box-border caret-transparent flex justify-between outline-[3px] w-full mb-4 pb-4 border-b border-solid">
            <h2 className="text-green-700 text-base box-border caret-transparent tracking-[-0.8px] leading-4 min-h-[auto] min-w-[auto] outline-[3px] uppercase font-dm_mono md:text-xl md:tracking-[-1px] md:leading-5">
              {props.category}
            </h2>
            <span className="text-green-700 text-base box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] uppercase font-dm_mono md:text-xl md:leading-5">
              {props.number}
            </span>
          </div>
          <h3 className="text-green-700 text-4xl font-medium box-border caret-transparent tracking-[-1.8px] leading-[43.2px] outline-[3px] mb-4 md:text-[52px] md:tracking-[-2.6px] md:leading-[62.4px]">
            {props.title}
          </h3>
        </div>
        <div className="self-start box-border caret-transparent col-end-[body] col-start-[body] row-end-[body] row-start-[body] min-h-[auto] min-w-[auto] outline-[3px]">
          <p className="text-base font-medium box-border caret-transparent leading-[25.6px] outline-[3px] md:text-lg md:leading-[28.8px]">
            {props.description}
          </p>
        </div>
        <div
          className={`box-border caret-transparent gap-x-2 grid col-end-[image] col-start-[image] row-end-[image] row-start-[image] h-60 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-4 md:min-h-[440px] md:mb-0 ${props.mediaLayoutClassName}`}
        >
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <img
              src={props.primaryImageUrl}
              alt={props.primaryImageAlt}
              className={`box-border caret-transparent h-60 max-w-full min-h-0 object-cover outline-[3px] w-full overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr md:h-full md:min-h-[440px] ${props.primaryImageClassName}`}
            />
          </div>
          {props.secondaryImageUrl !== undefined &&
            props.secondaryImageAlt !== undefined &&
            props.secondaryImageClassName !== undefined && (
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                <img
                  src={props.secondaryImageUrl}
                  alt={props.secondaryImageAlt}
                  className={`aspect-[auto_300_/_420] box-border caret-transparent h-60 max-w-full min-h-0 object-cover outline-[3px] w-full overflow-hidden rounded-bl rounded-br rounded-tl rounded-tr md:h-full md:min-h-[440px] ${props.secondaryImageClassName}`}
                />
              </div>
            )}
        </div>
      </div>
    </section>
  );
};
