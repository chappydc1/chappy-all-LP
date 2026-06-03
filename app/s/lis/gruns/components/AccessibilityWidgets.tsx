export type AccessibilityWidgetsProps = {
  variant: string;
  src: string;
  alt: string;
  href: string;
  linkText: string;
};

export const AccessibilityWidgets = (props: AccessibilityWidgetsProps) => {
  if (props.variant === "icon") {
    return (
      <img
        src={props.src}
        alt={props.alt}
        className="box-border caret-transparent hidden outline-[3px]"
      />
    );
  }

  if (props.variant === "link") {
    return (
      <a
        href={props.href}
        className="absolute box-border caret-transparent block h-px w-[200px] z-[-1] overflow-hidden -mt-px left-0 top-0"
      >
        {props.linkText}
      </a>
    );
  }

  if (props.variant === "skipLinks") {
    return (
      <div className="absolute text-base block h-0 leading-[normal] outline-[3px] origin-[0px_0px] w-0 left-0 right-[375px] top-0 bottom-[1000px] font-times_new_roman md:right-[1280px]">
        <div className="box-border outline-[3px]">
          <div
            role="region"
            aria-label="Skip Links"
            className="fixed box-border outline-[3px] z-[2147483647] left-0 top-0"
          >
            <div className="box-border outline-[3px]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "empty") {
    return (
      <div className="absolute text-base block h-0 leading-[normal] outline-[3px] origin-[0px_0px] w-0 left-0 right-[375px] top-0 bottom-[1000px] font-times_new_roman md:right-[1280px]"></div>
    );
  }

  return (
    <div className="absolute text-base block h-0 leading-[normal] outline-[3px] origin-[0px_0px] w-0 left-0 right-[375px] top-0 bottom-[1000px] font-times_new_roman md:right-[1280px]">
      <div className="box-border outline-[3px]"></div>
    </div>
  );
};
