export type ReasonCardProps = {
  mediaWrapperClassName: string;
  mediaContent: React.ReactNode;
  reasonNumber: string;
  title: string;
  descriptionContent: React.ReactNode;
  showIngredientButton: string;
  ctaHref: string;
  ctaText: string;
};

export const ReasonCard = (props: ReasonCardProps) => {
  return (
    <div className="items-center self-stretch box-border caret-transparent contents shrink-0 justify-center max-w-full min-h-0 min-w-0 outline-[3px] w-full md:flex md:min-h-[auto] md:min-w-[auto]">
      <div className="relative text-stone-600 items-center self-stretch box-border caret-transparent gap-x-4 flex basis-auto flex-col grow-0 shrink-0 grid-cols-[repeat(2,minmax(0px,1fr))] h-auto justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-4 w-auto overflow-hidden md:text-black md:gap-x-0 md:grid md:basis-0 md:flex-row md:grow md:shrink md:h-[550px] md:gap-y-0 md:w-full md:overflow-visible">
        <div className={props.mediaWrapperClassName}>{props.mediaContent}</div>
        <div className="relative text-stone-600 items-center self-stretch box-border caret-transparent flex basis-auto grow justify-center max-w-full min-h-px outline-[3px] md:text-black md:basis-0">
          <div className="relative text-stone-500 items-center self-stretch box-border caret-transparent gap-x-4 flex basis-0 flex-col grow justify-start max-w-full min-h-px outline-[3px] gap-y-4 p-0 md:items-start md:gap-x-3 md:justify-center md:gap-y-3 md:px-6 md:py-[30px]">
            <div className="relative items-start self-stretch box-border caret-transparent gap-x-5 flex shrink-0 justify-start max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-5 md:gap-x-4 md:gap-y-4">
              <div className="relative text-stone-600 items-center box-border caret-transparent flex shrink-0 h-[54px] justify-center max-w-full min-h-px min-w-[auto] outline-[3px] w-[54px] border border-stone-600 overflow-hidden rounded-[50px] border-solid md:h-16 md:w-16">
                <div className="text-2xl box-border caret-transparent basis-0 grow leading-[30px] min-h-[auto] outline-[3px] break-words text-center font-bookmania md:text-[28px]">
                  <span className="text-2xl box-border caret-transparent outline-[3px] break-words w-full md:text-[28px]">
                    <p className="text-2xl box-border caret-transparent outline-[3px] break-words md:text-[28px]">
                      {props.reasonNumber}
                    </p>
                  </span>
                </div>
              </div>
              <div className="text-stone-600 text-2xl box-border caret-transparent basis-0 grow leading-[28.8px] min-h-[auto] outline-[3px] break-words font-bookmania md:text-[32px] md:leading-[38.4px]">
                <span className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] break-words w-full md:text-[32px] md:leading-[38.4px]">
                  <h3 className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] break-words md:text-[32px] md:leading-[38.4px]">
                    {props.title}
                  </h3>
                </span>
              </div>
            </div>
            <div className="text-stone-600 text-base self-stretch box-border caret-transparent shrink-0 leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-ll_brown_regular_web md:text-lg md:leading-[25.2px]">
              <span className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words w-full md:text-lg md:leading-[25.2px]">
                {props.descriptionContent}
              </span>
            </div>
            {props.showIngredientButton === "true" && (
              <div
                role="button"
                className="text-stone-600 self-stretch box-border caret-transparent flex shrink-0 leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words text-left underline mt-0 font-ll_brown_regular_web md:block md:mt-4"
              >
                <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:inline md:min-h-0 md:min-w-0">
                  <p className="box-border caret-transparent outline-[3px] break-words">
                    <strong className="font-bold box-border caret-transparent outline-[3px] break-words">
                      See full ingredient list
                    </strong>
                  </p>
                </span>
              </div>
            )}
            <a
              role="link"
              href={props.ctaHref}
              className="items-center self-stretch bg-orange-300 box-border caret-transparent flex shrink-0 h-[55px] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center w-auto border border-orange-300 overflow-hidden my-2 px-6 py-3 rounded-[30px] border-solid md:self-auto md:h-[50px] md:w-[300px] md:my-4"
            >
              <div className="text-white box-border caret-transparent shrink-0 leading-5 min-h-[auto] min-w-[auto] outline-[3px] break-words font-ll_brown_regular_web md:leading-[23.04px]">
                <span className="box-border caret-transparent leading-5 outline-[3px] break-words w-full md:leading-[23.04px]">
                  <p className="box-border caret-transparent leading-5 outline-[3px] break-words md:leading-[23.04px]">
                    {props.ctaText}
                  </p>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
