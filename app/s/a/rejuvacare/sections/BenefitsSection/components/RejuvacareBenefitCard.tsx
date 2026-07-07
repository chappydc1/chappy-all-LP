export type RejuvacareBenefitCardProps = {
  containerVariant: string;
  videoSrc: string;
  title: string;
  description: React.ReactNode;
};

export const RejuvacareBenefitCard = (props: RejuvacareBenefitCardProps) => {
  return (
    <div
      className={`bg-white shadow-[rgba(9,65,60,0.1)_0px_4px_13px_0px] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full px-3.5 py-[18px] rounded-[10px] md:px-6 md:py-12 ${props.containerVariant}`}
    >
      <div className="box-border caret-transparent outline-[3px]">
        <video
          loop
          autoPlay
          playsInline
          muted
          src={props.videoSrc}
          className="box-border caret-transparent inline h-[130px] max-w-full outline-[3px] align-baseline w-[130px] rounded-[50%]"
        ></video>
      </div>
      <div className="box-border caret-transparent outline-[3px] w-full mt-2">
        <div className="text-neutral-800 text-[19px] font-bold box-border caret-transparent leading-[26.6px] outline-[3px] p-px font-montserrat">
          <div className="box-border caret-transparent outline-[3px] text-center">
            <img
              title=""
              src="/images/rejuvacare/1713536915312_12_1_.png"
              alt=""
              className="text-black box-border caret-transparent inline max-w-full outline-[3px] w-5 mr-[5px] mb-[3px]"
            />
            &nbsp;{props.title}
          </div>
        </div>
      </div>
      <div className="text-neutral-900 box-border caret-transparent leading-[22.4px] outline-[3px] text-center mt-2 p-px font-montserrat">
        {props.description}
      </div>
    </div>
  );
};
