export type RejuvacareDoctorReviewProps = {
  containerVariant: string;
  badgeVariant: string;
};

export const RejuvacareDoctorReview = (props: RejuvacareDoctorReviewProps) => {
  return (
    <div
      className={`items-end box-border caret-transparent flex justify-center outline-[3px] w-full mt-5 pl-[5px] pr-0 pt-px md:w-auto md:pt-0 md:px-2.5 ${props.containerVariant}`}
    >
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full mb-px pl-2.5 py-2.5 md:mb-0 md:pt-0 md:pb-[7px]">
        <div
          className={`text-neutral-900 font-bold box-border caret-transparent outline-[3px] text-left mt-px p-px font-montserrat ${props.badgeVariant}`}
        >
          Doctor Reviewed
        </div>
        <div className="text-neutral-900 text-sm font-medium box-border caret-transparent leading-[21px] outline-[3px] text-left mt-2 mb-2.5 p-px font-montserrat md:text-base md:font-normal md:leading-6">
          &quot;As a knee pain expert, I only want the very best for my patients
          - therefore, I trust and recommend RejuvaKnee.&quot;
        </div>
        <div className="text-neutral-900 text-sm font-medium box-border caret-transparent leading-[21px] outline-[3px] text-left mt-2 mb-2.5 p-px font-montserrat md:text-base md:font-normal md:leading-6">
          <i className="text-[13px] italic font-medium box-border caret-transparent leading-[21px] outline-[3px] md:text-base md:font-normal md:leading-6">
            Dr. James Barkley, Joint Health expert
          </i>
        </div>
      </div>
      <div className="items-center bg-[url('/images/rejuvacare/1722821367050_dr_james_barkley.webp"></div>
    </div>
  );
};
