"use client";

export type ReasonSectionProps = {
  containerClassName: string;
  variant: string;
  title: string;
  titleTag: "h1" | "p";
  titleStrongClassName: string;
  imageSrc: string;
  imageSizes: string;
  imageClassName: string;
  videoPoster: string;
  videoSrc: string;
  children: React.ReactNode;
};

export const ReasonSection = (props: ReasonSectionProps) => {
  const TitleTag = props.titleTag;

  return (
    <div className="items-center box-border caret-transparent flex justify-center outline-[3px]">
      <div
        className={`box-border caret-transparent outline-[3px] w-full ${props.containerClassName}`}
      >
        {props.variant === "title" && (
          <div className="box-border caret-transparent outline-[3px] text-[23.4583px] leading-[28.15px] w-full md:text-3xl md:leading-9">
            <TitleTag
              className={
                props.titleTag === "h1"
                  ? "text-[23.4583px] font-medium box-border caret-transparent leading-[28.15px] outline-[3px] md:text-3xl md:leading-9"
                  : "box-border caret-transparent outline-[3px] text-[23.4583px] leading-[28.15px] md:text-3xl md:leading-9"
              }
            >
              <strong className={props.titleStrongClassName}>
                {props.title}
              </strong>
            </TitleTag>
          </div>
        )}

        {props.variant === "image" && (
          <img
            src={props.imageSrc}
            alt=""
            sizes={props.imageSizes}
            className={props.imageClassName}
          />
        )}

        {props.variant === "content" && (
          <div className="box-border caret-transparent outline-[3px] text-[20.4583px] leading-[30.6875px] w-full md:text-xl md:leading-[30px]">
            {props.children}
          </div>
        )}

        {props.variant === "video" && (
          <video
            poster={props.videoPoster}
            autoPlay
            loop
            muted
            playsInline
            src={props.videoSrc}
            className="aspect-[1920_/_1080] box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] align-baseline w-full"
          ></video>
        )}

        {props.variant === "empty" && (
          <div className="box-border caret-transparent outline-[3px]"></div>
        )}
      </div>
    </div>
  );
};
