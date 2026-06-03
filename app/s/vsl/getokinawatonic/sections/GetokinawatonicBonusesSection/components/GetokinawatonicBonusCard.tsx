export type GetokinawatonicBonusCardProps = {
  imageUrl: string;
  imageAlt: string;
  imageWrapperVariant: string;
  imageClassVariant: string;
  contentWrapperVariant: string;
  title: string;
  regularPrice: string;
  freeText: string;
  descriptionParagraphs?: string[];
  bulletItems?: string[];
};

export const GetokinawatonicBonusCard = (props: GetokinawatonicBonusCardProps) => {
  return (
    <div className="box-border caret-transparent outline-[3px] mx-0 md:ml-[-15px] md:mr-[-15px] before:accent-auto before:box-border before:caret-transparent before:text-teal-500 before:table before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4286px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-apple_system after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-teal-500 after:table after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21.4286px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-apple_system">
      <div
        className={`relative box-border caret-transparent float-none min-h-px outline-[3px] w-auto px-[15px] md:float-left ${props.imageWrapperVariant}`}
      >
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className={`box-border caret-transparent max-w-full outline-[3px] mx-auto md:mx-0 ${props.imageClassVariant}`}
        />
      </div>

      <div
        className={`relative box-border caret-transparent float-none min-h-px outline-[3px] w-auto px-[15px] md:float-left ${props.contentWrapperVariant}`}
      >
        <h4 className="text-red-600 text-[26px] font-bold box-border caret-transparent leading-[28.6px] outline-[3px] my-2.5 font-open_sans">
          {props.title}
        </h4>

        <h5 className="text-xl font-bold box-border caret-transparent leading-[22px] outline-[3px] my-2.5 font-open_sans">
          Regular price:{" "}
          <del className="box-border caret-transparent outline-[3px] line-through">
            {props.regularPrice}
          </del>
          <span className="text-red-600 box-border caret-transparent outline-[3px]">
            {props.freeText}
          </span>
        </h5>

        {props.descriptionParagraphs?.map((paragraph, index) => (
          <p
            key={index}
            className="text-black text-xl box-border caret-transparent leading-[28.5714px] outline-[3px] mb-[15px] font-montserrat"
          >
            {paragraph}
          </p>
        ))}

        {props.bulletItems && props.bulletItems.length > 0 && (
          <ul className="box-border caret-transparent outline-[3px] mb-2.5 pl-5 md:pl-10">
            {props.bulletItems.map((item, index) => (
              <li
                key={index}
                className="text-xl box-border caret-transparent leading-[28.5714px] outline-[3px] mb-2.5"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
