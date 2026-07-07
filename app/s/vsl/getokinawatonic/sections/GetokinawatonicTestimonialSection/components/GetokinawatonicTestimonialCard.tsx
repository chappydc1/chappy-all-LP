export type GetokinawatonicTestimonialCardProps = {
  heading: string;
  testimonial: string;
  imageUrl: string;
  imageAlt: string;
  name: string;
  ratingClassName: string;
};

export const GetokinawatonicTestimonialCard = (props: GetokinawatonicTestimonialCardProps) => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.5)_0px_0px_10px_0px] box-border caret-transparent outline-[3px] w-[96%] mx-auto my-[30px] p-[30px] rounded-[5px]">
      <div className="box-border caret-transparent outline-[3px] mx-0 md:ml-[-15px] md:mr-[-15px] before:accent-auto before:box-border before:caret-transparent before:text-teal-500 before:table before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4286px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-apple_system after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-teal-500 after:table after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21.4286px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-apple_system">
        <div className="relative box-border caret-transparent float-none min-h-px outline-[3px] w-auto px-[15px] md:float-left md:w-[66.6667%]">
          <h4 className="text-black text-[21px] font-semibold box-border caret-transparent leading-[29.61px] outline-[3px] text-center mt-2.5 font-open_sans md:text-start">
            {props.heading}
          </h4>
          <p className="text-black text-lg box-border caret-transparent leading-[25.7143px] outline-[3px] text-center my-2.5 font-montserrat md:text-start">
            {props.testimonial}
          </p>
        </div>
        <div className="relative box-border caret-transparent float-none min-h-px outline-[3px] w-auto px-[15px] md:float-left md:w-[33.3333%]">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="box-border caret-transparent max-w-full outline-[3px] mx-auto rounded-[50%]"
          />
        </div>
        <div className="box-border caret-transparent outline-[3px] before:accent-auto before:box-border before:caret-transparent before:text-teal-500 before:table before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4286px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-apple_system after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-teal-500 after:table after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21.4286px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-apple_system"></div>
      </div>
      <div className="box-border caret-transparent outline-[3px] text-center md:text-right">
        <span className="text-black text-[19px] font-bold box-border caret-transparent leading-[27.1428px] outline-[3px] text-center font-montserrat md:text-right">
          {props.name}
        </span>
        <span className="box-border caret-transparent outline-[3px] text-center md:text-right">
          <i
            className={`text-yellow-500 font-black box-border caret-transparent inline-block leading-[15px] outline-[3px] text-center font-font_awesome_5_free md:text-right before:accent-auto before:box-border before:caret-transparent before:text-yellow-500 before:text-[15px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[15px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free before:md:text-right ${props.ratingClassName}`}
          ></i>
          <i
            className={`text-yellow-500 font-black box-border caret-transparent inline-block leading-[15px] outline-[3px] text-center font-font_awesome_5_free md:text-right before:accent-auto before:box-border before:caret-transparent before:text-yellow-500 before:text-[15px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[15px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free before:md:text-right ${props.ratingClassName}`}
          ></i>
          <i
            className={`text-yellow-500 font-black box-border caret-transparent inline-block leading-[15px] outline-[3px] text-center font-font_awesome_5_free md:text-right before:accent-auto before:box-border before:caret-transparent before:text-yellow-500 before:text-[15px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[15px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free before:md:text-right ${props.ratingClassName}`}
          ></i>
          <i
            className={`text-yellow-500 font-black box-border caret-transparent inline-block leading-[15px] outline-[3px] text-center font-font_awesome_5_free md:text-right before:accent-auto before:box-border before:caret-transparent before:text-yellow-500 before:text-[15px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[15px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free before:md:text-right ${props.ratingClassName}`}
          ></i>
          <i
            className={`text-yellow-500 font-black box-border caret-transparent inline-block leading-[15px] outline-[3px] text-center font-font_awesome_5_free md:text-right before:accent-auto before:box-border before:caret-transparent before:text-yellow-500 before:text-[15px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[15px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free before:md:text-right ${props.ratingClassName}`}
          ></i>
        </span>
      </div>
    </div>
  );
};
