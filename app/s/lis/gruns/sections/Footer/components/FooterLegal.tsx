export type FooterLegalProps = {
  variant: string;
};

export const FooterLegal = (props: FooterLegalProps) => {
  return (
    <div
      className={`box-border caret-transparent flex flex-col max-w-[1440px] outline-[3px] mx-auto md:flex-row ${props.variant}`}
    >
      {props.variant ===
      "gap-x-[normal] gap-y-[normal] md:gap-x-8 md:gap-y-8" ? (
        <>
          <img
            src="/images/gruns/40.svg"
            alt="Grüns Logo in yellow"
            className="aspect-[auto_300_/_112] box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:max-w-60"
          />
          <ul
            role="list"
            aria-label="Social media"
            className="items-center box-border caret-transparent flex flex-wrap justify-center list-none min-h-[auto] min-w-[auto] outline-[3px] pl-0 gap-x-2 gap-y-2"
          >
            <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <a
                href="https://www.instagram.com/grunsdaily"
                aria-label="Instagram"
                className="text-white box-border caret-transparent outline-[3px]"
              >
                <img
                  src="/images/gruns/icon-33.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-[34px] outline-[3px] w-[34px]"
                />
              </a>
            </li>
            <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <a
                href="https://tiktok.com/@grunsdaily"
                aria-label="TikTok"
                className="text-white box-border caret-transparent outline-[3px]"
              >
                <img
                  src="/images/gruns/icon-34.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-[34px] outline-[3px] w-[34px]"
                />
              </a>
            </li>
            <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <a
                href="https://www.youtube.com/@grunsdaily"
                aria-label="YouTube"
                className="text-white box-border caret-transparent outline-[3px]"
              >
                <img
                  src="/images/gruns/icon-35.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-[34px] outline-[3px] w-[34px]"
                />
              </a>
            </li>
            <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <a
                href="https://www.facebook.com/grunsdaily"
                aria-label="Facebook"
                className="text-white box-border caret-transparent outline-[3px]"
              >
                <img
                  src="/images/gruns/icon-36.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-[34px] outline-[3px] w-[34px]"
                />
              </a>
            </li>
          </ul>
        </>
      ) : null}

      {props.variant === "gap-x-3 gap-y-3 mt-8 pr-0 md:pr-[25%]" ? (
        <>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border p-2.5 border-solid border-white">
            <p className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.8)] text-xs font-medium box-border caret-transparent leading-[19.2px] outline-[3px]">
              *These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure or prevent any disease.
            </p>
          </div>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border p-2.5 border-solid border-white">
            <p className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.8)] text-xs font-medium box-border caret-transparent leading-[19.2px] outline-[3px]">
              **Offer assumes customer has received and uses promotional SMS
              discount reserved for new customers only.
            </p>
          </div>
        </>
      ) : null}

      {props.variant ===
      "items-center justify-normal mt-8 md:justify-between" ? (
        <>
          <p className="text-white text-xs font-medium box-border caret-transparent leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px]">
            © Copyright 2026, Grüns
          </p>
          <ul
            role="list"
            aria-label="Legal links"
            className="items-center box-border caret-transparent flex flex-wrap justify-center list-none min-h-[auto] min-w-[auto] outline-[3px] pl-0 gap-x-4 gap-y-4 md:gap-x-6 md:justify-start md:gap-y-6"
          >
            <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <a
                href="/policies/refund-policy"
                className="text-white box-border caret-transparent outline-[3px] text-xs font-medium leading-[19.2px] capitalize"
              >
                Refund policy
              </a>
            </li>
            <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <a
                href="/policies/privacy-policy"
                className="text-white box-border caret-transparent outline-[3px] text-xs font-medium leading-[19.2px] capitalize"
              >
                Privacy policy
              </a>
            </li>
            <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <a
                href="/policies/terms-of-service"
                className="text-white box-border caret-transparent outline-[3px] text-xs font-medium leading-[19.2px] capitalize"
              >
                Terms of service
              </a>
            </li>
            <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <a
                href="/policies/shipping-policy"
                className="text-white box-border caret-transparent outline-[3px] text-xs font-medium leading-[19.2px] capitalize"
              >
                Shipping policy
              </a>
            </li>
            <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <div
                role="button"
                className="text-white text-xs font-medium items-center box-border caret-transparent flex leading-[19.2px] outline-[3px]"
              >
                My Privacy Choices
                <img
                  src="/images/gruns/datagrail-dnsos-toggle-icon.webp"
                  alt="California Consumer Privacy Act (CCPA) Opt-Out Icon"
                  className="aspect-[auto_30_/_17] box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[30px] ml-1"
                />
              </div>
            </li>
            <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <a
                href="/pages/authorized-resale-policy"
                className="text-white text-xs font-medium box-border caret-transparent block leading-[19.2px] outline-[3px]"
              >
                Authorized Resale Policy
              </a>
            </li>
            <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <button
                role="button"
                className="text-white text-xs font-medium bg-transparent caret-transparent block leading-[19.2px] outline-[3px] text-center p-0"
              >
                Accessibility{" "}
              </button>
            </li>
          </ul>
        </>
      ) : null}
    </div>
  );
};
