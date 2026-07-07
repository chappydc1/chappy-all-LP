export type RejuvacareSplitMediaProps = {
  containerVariant: string;
  title: string;
  titleVariant: string;
  mediaContainerVariant: string;
  videoSrc: string;
  videoPoster: string;
  videoVariant: string;
};

export const RejuvacareSplitMedia = (props: RejuvacareSplitMediaProps) => {
  return (
    <div
      className={`box-border caret-transparent outline-[3px] w-full py-px ${props.containerVariant}`}
    >
      <div
        className={`text-neutral-900 text-[23px] font-bold box-border caret-transparent block leading-[33px] outline-[3px] text-left font-montserrat md:text-[33px] md:hidden md:leading-[42px] md:mb-0 ${props.titleVariant}`}
      >
        {props.title}
      </div>
      <div
        className={`relative box-border caret-transparent outline-[3px] w-full overflow-hidden mt-2.5 before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:no-underline before:indent-[0px] before:normal-case before:visible before:pt-[100%] before:border-separate before:font-apple_system ${props.mediaContainerVariant}`}
      >
        <video
          loop
          autoPlay
          playsInline
          muted
          src={props.videoSrc}
          poster={props.videoPoster}
          className={`absolute box-border caret-transparent max-w-full outline-[3px] align-baseline w-full rounded-[15px] left-0 inset-y-0 ${props.videoVariant}`}
        ></video>
      </div>
    </div>
  );
};
