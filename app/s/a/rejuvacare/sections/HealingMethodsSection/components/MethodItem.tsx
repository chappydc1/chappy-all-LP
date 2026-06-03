export type MethodItemProps = {
  imageSrc: string;
  title: string;
  description: string;
  showBreak: string;
};

export const MethodItem = (props: MethodItemProps) => {
  return (
    <div className="items-start box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full px-0 py-3 md:px-2.5">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-[35px]">
        <img
          title=""
          src={props.imageSrc}
          alt=""
          className="text-black box-border caret-transparent inline max-w-full outline-[3px] pr-2"
        />
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pl-[5px]">
        <div className="box-border caret-transparent outline-[3px] text-left p-px font-montserrat">
          <b className="font-bold box-border caret-transparent outline-[3px]">
            {props.title}
          </b>
          {props.showBreak === "true" ? (
            <br className="box-border caret-transparent outline-[3px]" />
          ) : null}
          <div className="box-border caret-transparent outline-[3px]"></div>
          <div className="box-border caret-transparent outline-[3px]">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};
