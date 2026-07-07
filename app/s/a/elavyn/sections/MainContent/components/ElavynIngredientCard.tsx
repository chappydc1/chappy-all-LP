export type ElavynIngredientCardProps = {
  rootClassName: string;
  imageSrc: string;
  title: string;
  children: React.ReactNode;
};

export const ElavynIngredientCard = (props: ElavynIngredientCardProps) => {
  return (
    <div
      className={`relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mx-auto md:text-base md:leading-[28.8px] md:w-[1200px] ${props.rootClassName}`}
    >
      <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
        <div
          role="presentation"
          className="relative text-[15px] box-border caret-transparent shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-base md:leading-[28.8px]"
        >
          <div className="text-[15px] box-border caret-transparent flex h-full justify-center leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]">
            <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
              <img
                src={props.imageSrc}
                alt=""
                className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-[150px] md:text-base md:leading-[28.8px]"
              />
            </picture>
          </div>
        </div>
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
            <div className="text-black text-xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-8 max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center w-full overflow-hidden bg-center font-bitter md:leading-[30px]">
              <p className="box-border caret-transparent leading-8 max-w-full outline-[3px] md:leading-[30px]">
                {props.title}
              </p>
            </div>
          </div>
        </div>
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
            <div className="text-black text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center w-full overflow-hidden bg-center font-bitter md:leading-[27px]">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
