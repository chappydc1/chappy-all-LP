export type TrustBadgeItemProps = {
  imageSrc: string;
  title: React.ReactNode;
  description: React.ReactNode;
  containerClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export const TrustBadgeItem = (props: TrustBadgeItemProps) => {
  return (
    <div
      className={`items-center box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] w-full px-2.5 py-3 md:items-start md:justify-normal ${props.containerClassName || ""}`}
    >
      <img
        title=""
        src={props.imageSrc}
        
        alt=""
        className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] w-[120px]"
      />
      <div
        className={`text-[17px] box-border caret-transparent leading-[25.5px] min-h-[auto] min-w-[auto] ml-[5px] p-px font-montserrat md:ml-[15px] ${props.contentClassName || ""}`}
      >
        <span className="box-border caret-transparent">
          <div className="box-border caret-transparent text-left">
            <span className="box-border caret-transparent">
              <b
                className={`text-lg font-bold box-border caret-transparent leading-[27px] ${props.titleClassName || ""}`}
              >
                {props.title}
              </b>
            </span>
          </div>
          <div
            className={`box-border caret-transparent text-left ${props.descriptionClassName || ""}`}
          >
            <span className="box-border caret-transparent">
              {props.description}
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};
