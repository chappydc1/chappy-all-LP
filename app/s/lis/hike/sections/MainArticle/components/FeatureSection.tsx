import type { ReactNode } from "react";

export type HikeFeatureSectionProps = {
  outerClassName: string;
  innerClassName: string;
  content: ReactNode;
  footerContent?: ReactNode;
  stickyContent?: ReactNode;
};

export const HikeFeatureSection = (props: HikeFeatureSectionProps) => {
  return (
    <div className={props.outerClassName}>
      <div className={props.innerClassName}>{props.content}</div>
      {props.footerContent}
      {props.stickyContent}
    </div>
  );
};
