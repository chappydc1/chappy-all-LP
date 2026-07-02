export type IconListProps = {
  listVariant: string;
  itemClassName: string;
  iconSrc: string;
  iconWrapperClassName: string;
  iconClassName: string;
  items: React.ReactNode[];
};

export const IconList = (props: IconListProps) => {
  return (
    <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] my-3 md:text-base md:leading-[28.8px]">
      <div className="text-[15px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-base md:leading-[28.8px]">
        <div
          className={`text-[15px] box-border caret-transparent flex flex-col leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px] ${props.listVariant}`}
        >
          {props.items.map((item, index) => (
            <div className={props.itemClassName} key={index}>
              <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                <span className={props.iconWrapperClassName}>
                  <img
                    src={props.iconSrc}
                    alt="Icon"
                    className={props.iconClassName}
                  />
                </span>
              </div>
              <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                  <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                    <p className="box-border caret-transparent max-w-full outline-[3px]">
                      {item}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
