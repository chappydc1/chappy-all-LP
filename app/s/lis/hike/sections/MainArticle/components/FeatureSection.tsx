import type { ReactNode } from "react";

export type FeatureSectionProps = {
  outerClassName: string;
  innerClassName: string;
  content: ReactNode;
  footerContent?: ReactNode;
  stickyContent?: ReactNode;
};

export const FeatureSection = (props: FeatureSectionProps) => {
  return (
    <div className={props.outerClassName}>
      <div className={props.innerClassName}>{props.content}</div>
      {props.footerContent}
      {props.stickyContent}
    </div>
  );
};
