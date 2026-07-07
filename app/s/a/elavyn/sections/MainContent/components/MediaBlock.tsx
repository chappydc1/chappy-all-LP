export type ElavynMediaBlockProps = {
  isPresentation: boolean;
  containerVariant: string;
  mediaWrapperVariant: string;
  mediaType: string;
  videoSrc: string;
  videoTitle: string;
  videoPoster: string;
  imageSrc: string;
  imageAlt: string;
};

export const ElavynMediaBlock = (props: ElavynMediaBlockProps) => {
  return (
    <div
      role={props.isPresentation ? "presentation" : undefined}
      className={`relative text-[15px] box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px] ${props.containerVariant}`}
    >
      <div
        className={`text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px] ${props.mediaWrapperVariant}`}
      >
        {props.mediaType === "video" ? (
          <video
            title={props.videoTitle}
            preload="metadata"
            poster={props.videoPoster}
            loop
            muted
            autoPlay
            playsInline
            src={props.videoSrc}
            className="text-[15px] aspect-video box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
          ></video>
        ) : (
          <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
            <img
              src={props.imageSrc}
              alt={props.imageAlt}
              className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
            />
          </picture>
        )}
      </div>
    </div>
  );
};
