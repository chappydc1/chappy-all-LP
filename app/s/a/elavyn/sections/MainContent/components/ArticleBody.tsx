import { ContentSection } from "./ContentSection";

export type ArticleBodyProps = {
  variant: "contentSection" | "container" | "titleOnly";
  children?: React.ReactNode;
  title?: string;
  titleContainerClassName?: string;
  titleClassName?: string;
  mediaType?: string;
  mediaSrc?: string;
  mediaAlt?: string;
  mediaWrapperClassName?: string;
  mediaInnerClassName?: string;
  mediaClassName?: string;
  mediaRole?: string;
  containerClassName?: string;
};

export const ArticleBody = (props: ArticleBodyProps) => {
  if (props.variant === "contentSection") {
    return (
      <ContentSection
        title={props.title}
        titleContainerClassName={props.titleContainerClassName}
        titleClassName={props.titleClassName}
        mediaType={props.mediaType}
        mediaSrc={props.mediaSrc}
        mediaAlt={props.mediaAlt}
        mediaWrapperClassName={props.mediaWrapperClassName}
        mediaInnerClassName={props.mediaInnerClassName}
        mediaClassName={props.mediaClassName}
        mediaRole={props.mediaRole}
      >
        {props.children}
      </ContentSection>
    );
  }

  if (props.variant === "titleOnly") {
    return (
      <div className={props.titleContainerClassName}>
        <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
          <h2 className={props.titleClassName}>{props.title}</h2>
        </div>
      </div>
    );
  }

  return <div className={props.containerClassName}>{props.children}</div>;
};
