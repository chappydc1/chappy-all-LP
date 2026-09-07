export const FooterBottom = () => {
  return (
    <div className="box-border caret-transparent mt-10 pb-5 md:pb-[60px]">
      <div className="box-border caret-transparent gap-x-[normal] block gap-y-[normal] md:gap-x-10 md:flex md:gap-y-10">
        <div className="box-border caret-transparent col-end-[span_2] col-start-1 row-start-auto min-h-0 min-w-0 md:col-end-[span_9] md:col-start-[span_9] md:row-start-2 md:min-h-[auto] md:min-w-[auto]">
          <div className="box-border caret-transparent gap-x-[normal] block justify-normal max-w-none gap-y-[normal] mb-8 md:gap-x-3 md:flex md:justify-start md:max-w-[75%] md:gap-y-3 md:mb-0">
            <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-0 min-w-0 gap-y-6 mb-3 md:flex-row md:min-h-[auto] md:min-w-[auto] md:mb-5">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] border p-2.5 border-solid border-white/100">
                <p className="text-white text-xs font-medium box-border caret-transparent tracking-[-0.24px] leading-[14px] opacity-70">
                  *These statements have not been evaluated by the Food and Drug
                  Administration. This product is not intended to diagnose,
                  treat, cure or prevent any disease.
                </p>
              </div>
            </div>
            <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-0 min-w-0 gap-y-6 mb-3 md:flex-row md:min-h-[auto] md:min-w-[auto] md:mb-5">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] border p-2.5 border-solid border-white/100">
                <p className="text-white text-xs font-medium box-border caret-transparent tracking-[-0.24px] leading-[14px] opacity-70">
                  **Offer assumes customer has received and uses promotional SMS
                  discount reserved for new customers only.
                </p>
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent gap-x-6 flex flex-wrap justify-between gap-y-6 mb-4 md:flex-nowrap">
            <small className="text-white text-sm font-medium box-border caret-transparent block leading-[19.6px] min-h-[auto] min-w-[auto] text-center w-full md:text-xs md:leading-[14px] md:text-left md:w-auto">
              © Copyright 2026,{" "}
              <a
                href="/"
                title=""
                className="text-sm box-border caret-transparent leading-[19.6px] text-center md:text-xs md:leading-[14px] md:text-left"
              >
                chappy
              </a>
            </small>
            <ul className="text-xs font-light box-border caret-transparent gap-x-6 flex flex-wrap justify-center leading-[10px] list-none min-h-[auto] min-w-[auto] gap-y-6 capitalize pl-0 md:flex-nowrap md:justify-start">
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <small className="text-[9.6px] box-border caret-transparent">
                  <a
                    href="/policies/refund-policy"
                    className="text-white text-xs font-medium box-border caret-transparent leading-[14px]"
                  >
                    Refund policy
                  </a>
                </small>
              </li>
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <small className="text-[9.6px] box-border caret-transparent">
                  <a
                    href="/policies/privacy-policy"
                    className="text-white text-xs font-medium box-border caret-transparent leading-[14px]"
                  >
                    Privacy policy
                  </a>
                </small>
              </li>
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <small className="text-[9.6px] box-border caret-transparent">
                  <a
                    href="/policies/terms-of-service"
                    className="text-white text-xs font-medium box-border caret-transparent leading-[14px]"
                  >
                    Terms of service
                  </a>
                </small>
              </li>
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <small className="text-[9.6px] box-border caret-transparent">
                  <a
                    href="/policies/shipping-policy"
                    className="text-white text-xs font-medium box-border caret-transparent leading-[14px]"
                  >
                    Shipping policy
                  </a>
                </small>
              </li>
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <small className="relative text-[9.6px] items-center box-border caret-transparent flex justify-center -top-0.5">
                  <a
                    href="#"
                    className="text-white text-xs items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]"
                  >
                    My Privacy Choices
                    <img
                      src="/images/product/datagrail-dnsos-toggle-icon.webp"
                      alt="California Consumer Privacy Act (CCPA) Opt-Out Icon"
                      className="aspect-[auto_30_/_17] box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] w-[30px] ml-1"
                    />
                  </a>
                </small>
              </li>
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <small className="text-[9.6px] items-center box-border caret-transparent flex justify-center">
                  <a
                    href="/pages/authorized-resale-policy"
                    className="text-white text-xs box-border caret-transparent block min-h-[auto] min-w-[auto]"
                  >
                    Authorized Resale Policy
                  </a>
                </small>
              </li>
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <small className="text-[9.6px] items-center box-border caret-transparent flex justify-center">
                  <span
                    role="button"
                    className="text-white text-xs box-border caret-transparent block min-h-[auto] min-w-[auto]"
                  >
                    Accessibility
                  </span>
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
