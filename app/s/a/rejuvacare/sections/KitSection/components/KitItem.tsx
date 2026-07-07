export type RejuvacareKitItemProps = {
  rootVariant: string;
  imageSrc: string;
  label: string;
  labelVariant: string;
  spacerCount: string;
};

export const RejuvacareKitItem = (props: RejuvacareKitItemProps) => {
  const spacerCount = Number(props.spacerCount);

  return (
    <div
      className={`items-start box-border caret-transparent flex outline-[3px] w-full px-2.5 ${props.rootVariant}`}
    >
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-[35px] pr-2">
        <img
          title=""
          src={props.imageSrc}
          alt=""
          className="text-black box-border caret-transparent inline max-w-full outline-[3px] w-[35px]"
        />
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div className="text-lg box-border caret-transparent leading-[27px] outline-[3px] text-left pl-[5px] pr-px py-px font-montserrat">
          {Array.from({ length: spacerCount }).map((_, index) => (
            <div
              key={index}
              className="box-border caret-transparent outline-[3px]"
            ></div>
          ))}
          <div
            className={`text-base box-border caret-transparent outline-[3px] md:text-lg md:leading-[27px] ${props.labelVariant}`}
          >
            {props.label}
          </div>
        </div>
      </div>
    </div>
  );
};
