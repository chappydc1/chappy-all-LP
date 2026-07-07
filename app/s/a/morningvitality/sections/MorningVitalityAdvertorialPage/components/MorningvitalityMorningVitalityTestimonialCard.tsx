export type MorningvitalityMorningVitalityTestimonialCardProps = {
  name: string;
  age: string;
  testimonial: string;
};

export const MorningvitalityMorningVitalityTestimonialCard = (props: MorningvitalityMorningVitalityTestimonialCardProps) => {
  return (
    <div className="bg-zinc-100 box-border caret-transparent outline-[3px] w-full border-cyan-600 bg-[position:0px_0px] mt-[15px] mb-5 px-2.5 py-3 border-l-4 border-solid">
      <p className="text-neutral-800 text-lg box-border caret-transparent leading-[25.2px] outline-[3px] bg-[position:0px_0px] mt-[15px] mb-5 font-roboto">
        <strong className="font-bold box-border caret-transparent outline-[3px]">
          <em className="italic box-border caret-transparent outline-[3px]">
            {props.name}, {props.age}:
          </em>
        </strong>
        <em className="italic box-border caret-transparent outline-[3px]">
          "{props.testimonial}"
        </em>
      </p>
    </div>
  );
};
