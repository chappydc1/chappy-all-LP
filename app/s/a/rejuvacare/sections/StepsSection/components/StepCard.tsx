export type StepCardProps = {
  stepText: string;
  videoSrc: string;
  description: string;
  poster?: string;
};

export const StepCard = (props: StepCardProps) => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-auto mx-px pt-0 pb-3 px-0 md:w-full md:mx-0 md:pt-3 md:px-5">
      <div className="text-lg font-bold box-border caret-transparent leading-[22px] min-h-[auto] min-w-[auto] outline-[3px] mt-5 p-px font-montserrat md:leading-[27px]">
        {props.stepText}
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        <video
          loop
          autoPlay
          playsInline
          muted
          src={props.videoSrc}
          poster={props.poster}
          className="box-border caret-transparent inline max-w-full outline-[3px] align-baseline mt-2.5 rounded-[15px]"
        ></video>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mt-2.5 p-px font-montserrat">
        {props.description}
      </div>
    </div>
  );
};
