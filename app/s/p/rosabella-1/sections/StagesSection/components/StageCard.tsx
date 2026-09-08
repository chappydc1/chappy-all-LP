export type StageCardProps = {
  imageUrl: string;
  stage: string;
  title: string;
  description: string;
};

export const StageCard = (props: StageCardProps) => {
  return (
    <div className="bg-neutral-100 box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] w-full rounded-[5px]">
      <img
        title=""
        src={props.imageUrl}
        alt=""
        className="text-black box-border caret-transparent basis-[39.4%] shrink-0 max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-[39.4%] rounded-l-[5px]"
      />
      <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] w-full">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full px-5 py-[18px] md:px-[26px] md:py-6">
          <div className="text-emerald-800 text-[13px] box-border caret-transparent tracking-[-0.32px] leading-[16.9px] outline-[3px] text-left uppercase font-montserrat md:text-base md:leading-[20.8px]">
            {props.stage}
          </div>
          <div className="text-black text-base font-semibold box-border caret-transparent tracking-[-0.32px] leading-[20.8px] outline-[3px] text-left mt-2 font-montserrat md:text-xl md:leading-[26px] md:mt-[11px]">
            {props.title}
          </div>
          <div className="text-black text-sm box-border caret-transparent tracking-[-0.32px] leading-[18.2px] outline-[3px] text-left mt-2 font-montserrat md:text-[17px] md:leading-[22.1px] md:mt-[11px]">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};
