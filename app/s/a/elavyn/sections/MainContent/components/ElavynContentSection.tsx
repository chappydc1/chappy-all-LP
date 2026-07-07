export type ElavynContentSectionProps = {
  title?: React.ReactNode;
  titleContainerClassName?: string;
  titleClassName?: string;
  mediaType?: string;
  mediaSrc?: string;
  mediaAlt?: string;
  mediaWrapperClassName?: string;
  mediaInnerClassName?: string;
  mediaClassName?: string;
  mediaRole?: string;
  videoTitle?: string;
  videoPoster?: string;
  children: React.ReactNode;
};

export const ElavynContentSection = (props: ElavynContentSectionProps) => {
  const titleContainerClassName =
    props.titleContainerClassName ??
    "text-[15px] box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px] max-w-full text-left mb-2";
  const titleClassName =
    props.titleClassName ??
    "text-neutral-900 text-2xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-playfair_display md:text-[32px] md:leading-[41.6px]";
  const mediaInnerClassName =
    props.mediaInnerClassName ??
    "text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]";
  const videoTitle = props.videoTitle ?? "Video";
  const videoPoster = props.videoPoster ?? "";

  return (
    <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mb-6 mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
      <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px] relative flex flex-col justify-start min-h-[auto] min-w-[auto]">
        {props.title ? (
          <div className={titleContainerClassName}>
            <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
              <h2 className={titleClassName}>{props.title}</h2>
            </div>
          </div>
        ) : null}

        {props.mediaType === "image" && props.mediaWrapperClassName ? (
          <div role={props.mediaRole} className={props.mediaWrapperClassName}>
            <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px] flex h-full justify-center w-full">
              <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                <img
                  src={props.mediaSrc}
                  alt={props.mediaAlt ?? ""}
                  className={
                    props.mediaClassName ??
                    "text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
                  }
                />
              </picture>
            </div>
          </div>
        ) : null}

        {props.mediaType === "video" && props.mediaWrapperClassName ? (
          <div className={props.mediaWrapperClassName}>
            <div className={mediaInnerClassName}>
              <video
                title={videoTitle}
                preload="metadata"
                poster={videoPoster}
                loop
                muted
                autoPlay
                playsInline
                src={props.mediaSrc}
                className={
                  props.mediaClassName ??
                  "text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                }
              ></video>
            </div>
          </div>
        ) : null}

        {props.children}
      </div>
    </div>
  );
};
