export type Testimonial = {
  avatarSrc: string;
  name: string;
  title: string;
  body: React.ReactNode;
};

export type TestimonialCardProps = {
  testimonials: [Testimonial, Testimonial];
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  const [first, second] = props.testimonials;

  const renderTestimonial = (testimonial: Testimonial, isFirst: boolean) => (
    <>
      <div className={`box-border caret-transparent ${isFirst ? "" : "mt-12"}`}>
        <img
          src={testimonial.avatarSrc}
          className="box-border caret-transparent inline"
        />
        <div className="box-border caret-transparent inline-block align-middle">
          <span className="text-emerald-800 text-lg font-bold box-border caret-transparent block leading-[18px] font-myriad_pro">
            {testimonial.name}
          </span>
          <span className="text-emerald-800 text-sm box-border caret-transparent leading-[16.8px] font-myriad_pro">
            Verified customer
          </span>
          <img
            src="https://c.animaapp.com/mnsem251Wpf2gA/assets/check-mark.webp"
            className="box-border caret-transparent inline w-[17px]"
          />
        </div>
        <img
          src="https://c.animaapp.com/mnsem251Wpf2gA/assets/storystars.webp"
          className="box-border caret-transparent float-right pt-6"
        />
      </div>
      <div className="bg-white box-border caret-transparent mt-1 p-6 rounded-b-sm">
        <h3 className="text-black text-xl italic font-bold box-border caret-transparent mb-2 font-myriad_pro">
          {testimonial.title}
        </h3>
        <span className="text-black box-border caret-transparent block pt-2 font-myriad_pro">
          {testimonial.body}
        </span>
      </div>
    </>
  );

  return (
    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-6/12">
      {renderTestimonial(first, true)}
      {renderTestimonial(second, false)}
    </div>
  );
};
