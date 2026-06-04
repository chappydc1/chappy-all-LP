export type TestimonialProps = {
  className?: string;
  title: string;
  authorName: string;
  buyerLabel: string;
  body: string;
};

export const Testimonial = (props: TestimonialProps) => {
  return (
    <div
      className={`relative items-start self-stretch bg-stone-100 box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 justify-start max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-2.5 mt-[5px] px-[15px] py-4 md:mt-2.5 md:px-[30px] ${props.className ?? ""}`}
    >
      <div className="relative items-start self-start box-border caret-transparent flex flex-col shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] md:self-stretch md:justify-start">
        <div className="text-[15px] box-border caret-transparent shrink-0 leading-5 min-h-[auto] min-w-[auto] outline-[3px] break-words uppercase font-geogrotesquecondboldweb md:text-xl md:leading-[26px]">
          <span className="text-[15px] box-border caret-transparent leading-5 outline-[3px] break-words w-full md:text-xl md:leading-[26px]">
            <h3 className="text-[15px] box-border caret-transparent leading-5 outline-[3px] break-words md:text-xl md:leading-[26px]">
              {props.title}
            </h3>
          </span>
        </div>
        <div className="relative items-center self-start box-border caret-transparent gap-x-1 flex grow justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-1 py-[5px] md:py-2.5">
          <div className="relative items-center self-center box-border caret-transparent gap-x-0.5 flex shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-0.5 md:items-start md:self-auto">
            <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
              <img
                src="/images/jones/139.png"
                className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
              />
            </picture>
            <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
              <img
                src="/images/jones/139.png"
                className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
              />
            </picture>
            <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
              <img
                src="/images/jones/139.png"
                className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
              />
            </picture>
            <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
              <img
                src="/images/jones/139.png"
                className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
              />
            </picture>
            <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
              <img
                src="/images/jones/139.png"
                className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
              />
            </picture>
          </div>
          <div className="text-[8px] box-border caret-transparent flex grow shrink tracking-[0.2px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:block md:grow-0 md:shrink-0 md:leading-[10px]">
            <span className="box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:inline md:leading-[10px] md:min-h-0 md:min-w-0">
              <p className="box-border caret-transparent leading-6 outline-[3px] break-words md:leading-[10px]">
                {props.authorName}
              </p>
            </span>
          </div>
          <picture className="items-center box-border caret-transparent flex grow-0 shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:grow md:shrink md:w-auto">
            <img
              src="/images/jones/129.svg"
              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
            />
          </picture>
          <div className="text-[8px] box-border caret-transparent flex grow shrink tracking-[0.2px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:block md:grow-0 md:shrink-0 md:leading-[10px]">
            <span className="box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:inline md:leading-[10px] md:min-h-0 md:min-w-0">
              <p className="box-border caret-transparent leading-6 outline-[3px] break-words md:leading-[10px]">
                {props.buyerLabel}
              </p>
            </span>
          </div>
        </div>
        <div className="text-xs font-medium self-stretch box-border caret-transparent shrink-0 leading-[17px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-ringsidewideweb md:text-sm md:leading-[19px]">
          <span className="text-xs box-border caret-transparent leading-[17px] outline-[3px] break-words w-full md:text-sm md:leading-[19px]">
            <p className="text-xs box-border caret-transparent leading-[17px] outline-[3px] break-words md:text-sm md:leading-[19px]">
              {props.body}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};
