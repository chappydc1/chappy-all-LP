import adv from "../../../../adv.json";

export const Testimonials = () => {
  return (
    <div className="text-2xl font-bold box-border caret-transparent leading-[30px] outline-[3px] text-left mt-[30px] font-montserrat md:text-[37px] md:leading-[45px]">
      <div className="text-2xl box-border caret-transparent leading-[30px] outline-[3px] md:text-[37px] md:leading-[45px]">
        {adv.testimonialsHeading}
      </div>
    </div>
  );
};
