export type AbcNewsNavbarActionsProps = {
  containerClassName?: string;
  role?: string;
  showNotificationPopover?: boolean;
  notificationPopover?: React.ReactNode;
  showIconAction?: boolean;
  iconWrapperClassName?: string;
  iconOuterClassName?: string;
  iconInnerClassName?: string;
  iconSrc?: string;
  iconAlt?: string;
  iconClassName?: string;
  profileLinkClassName?: string;
  profileIconSrc?: string;
  profileIconAlt?: string;
  profileIconClassName?: string;
  profileAriaLabel?: string;
  profileRole?: string;
  streamHref?: string;
  streamName?: string;
  streamLinkClassName?: string;
  streamText?: string;
  streamTextClassName?: string;
  streamLogoSrc?: string;
  streamLogoAlt?: string;
  streamLogoClassName?: string;
};

export const AbcNewsNavbarActions = (props: AbcNewsNavbarActionsProps) => {
  return (
    <div
      role={props.role}
      className={
        props.containerClassName ||
        " items-center box-border caret-transparent flex h-full justify-evenly min-h-[auto] min-w-[auto] outline-[3px]"
      }
    >
      {props.showNotificationPopover ? props.notificationPopover : null}

      {props.showIconAction ? (
        <div
          className={
            props.iconWrapperClassName ||
            "box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] items-center flex"
          }
        >
          <span
            className={
              props.iconOuterClassName ||
              "text-sm items-center box-border caret-transparent flex tracking-[1px] leading-[16.1px] min-h-[auto] min-w-[auto] outline-[3px]"
            }
          >
            <div
              className={
                props.iconInnerClassName ||
                "content-center box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] px-[11px] py-2.5 rounded-[50%]"
              }
            >
              <img
                src={
                  props.iconSrc ||
                  "/images/abc-news/icon-2.svg"
                }
                alt={props.iconAlt || "Icon"}
                className={
                  props.iconClassName ||
                  "relative bg-no-repeat bg-contain box-border caret-transparent h-6 outline-[3px] align-baseline w-6 bg-center"
                }
              />
            </div>
          </span>
        </div>
      ) : null}

      {props.profileIconSrc ? (
        <div
          className={
            props.iconWrapperClassName ||
            "box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"
          }
        >
          <div
            className={
              props.profileLinkClassName ||
              "items-center box-border caret-transparent flex outline-[3px]"
            }
          >
            <a
              role={props.profileRole || "button"}
              aria-label={props.profileAriaLabel || "Open Profile"}
              className="relative box-border caret-transparent block h-10 leading-[0px] min-h-[auto] min-w-[auto] w-10 p-2 rounded-[80px]"
            >
              <img
                src={props.profileIconSrc}
                alt={props.profileIconAlt || "Icon"}
                className={
                  props.profileIconClassName ||
                  "box-border caret-transparent inline h-6 outline-[3px] align-baseline w-6"
                }
              />
            </a>
          </div>
        </div>
      ) : null}

      {props.streamHref ? (
        <a
         
          href={props.streamHref}
          className={
            props.streamLinkClassName ||
            "[align-items:normal] bg-scroll bg-blend-normal bg-clip-border bg-transparent bg-none bg-origin-padding bg-repeat bg-auto box-content caret-black inline justify-normal min-h-0 min-w-0 ml-0 p-0 rounded-none md:items-end md:aspect-auto md:bg-teal-900 md:bg-[radial-gradient(150%_350%_at_-10%_-150%,rgba(51,221,255,0.7)_0px,rgba(51,221,255,0)_100%),none] md:bg-size-[auto,auto] md:box-border md:caret-transparent md:flex md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-[position:0%,0%_0%,0%] md:ml-3 md:pt-1.5 md:pb-[9px] md:px-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-md hover:text-blue-900 hover:border-blue-900"
          }
        >
          <h2
            className={
              props.streamTextClassName ||
              "text-black font-bold box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 outline-0 pr-0 pb-0 font-times md:text-white md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.32px] md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pr-1 md:pb-0.5 md:scroll-m-0 md:scroll-p-[auto] md:font-post_grotesk"
            }
          >
            {props.streamText || "Stream on"}
          </h2>
          <img
            src={
              props.streamLogoSrc ||
              "/images/abc-news/DisneyPlus.svg"
            }
            alt={props.streamLogoAlt || "stream logo"}
            className={
              props.streamLogoClassName ||
              "box-content caret-black min-h-0 min-w-0 outline-0 align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-[45px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            }
          />
        </a>
      ) : null}
    </div>
  );
};
