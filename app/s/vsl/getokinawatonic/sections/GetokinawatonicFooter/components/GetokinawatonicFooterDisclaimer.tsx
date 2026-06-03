export type GetokinawatonicFooterDisclaimerProps = {
  text: string;
  variantClass: string;
  className?: string;
};

export const GetokinawatonicFooterDisclaimer = (props: GetokinawatonicFooterDisclaimerProps) => {
  return (
    <p
      className={`box-border caret-transparent outline-[3px] mb-2.5 ${props.variantClass}${props.className ? ` ${props.className}` : ""}`}
    >
      {props.text}
    </p>
  );
};
