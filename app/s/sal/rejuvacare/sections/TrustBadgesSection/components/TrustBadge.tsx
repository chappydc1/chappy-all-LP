export type TrustBadgeProps = {
  containerVariant: string;
  imageSrc: string;
  title: string;
  description: string;
};

export const TrustBadge = (props: TrustBadgeProps) => {
  return (
    <div
      className={`items-center box-border caret-transparent flex flex-col min-h-0 min-w-0 outline-[3px] w-[90%] px-0 py-3 md:min-h-[auto] md:min-w-[auto] md:w-full ${props.containerVariant}`}
    >
      <img
        title=""
        src={props.imageSrc}
        alt=""
        className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[110px]"
      />
      <div className="text-lg font-bold box-border caret-transparent leading-[22px] min-h-[auto] min-w-[auto] outline-[3px] mt-5 p-px font-montserrat md:leading-[27px]">
        {props.title}
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mt-2.5 p-px font-montserrat md:mt-0">
        {props.description}
      </div>
    </div>
  );
};
