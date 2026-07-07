export type PrimepicksSidebarProsConsItem = {
  iconSrc: string;
  text: string;
  isLast?: boolean;
};

export type PrimepicksSidebarProsConsProps = {
  items: PrimepicksSidebarProsConsItem[];
  textClassName: string;
};

export const PrimepicksSidebarProsCons = (props: PrimepicksSidebarProsConsProps) => {
  return (
    <div className="box-border caret-transparent flex flex-col min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
      {props.items.map((item, index) => {
        const isLast = index === props.items.length - 1;
        return (
          <div
            key={index}
            className={
              isLast
                ? "items-center box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 gap-y-2 md:min-h-[auto] md:min-w-[auto]"
                : "items-center box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 gap-y-2 mb-1 md:min-h-[auto] md:min-w-[auto]"
            }
          >
            <img
              src={item.iconSrc}
              alt="Icon"
              className="box-border caret-transparent h-4 w-4"
            />
            <span className={props.textClassName}>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
};
