export const FooterBottom = () => {
  return (
    <div className="text-xs box-border caret-transparent flex tracking-[-0.16px] leading-[21.96px] max-w-[600px] min-h-0 min-w-0 outline-[3px] text-start w-auto mt-0 mx-auto pb-10 px-[30px] md:block md:max-w-none md:min-h-[auto] md:min-w-[auto] md:text-right md:w-3/5 md:mt-auto md:mx-0 md:pb-[30px]">
      <ul className="caret-transparent block list-none min-h-[auto] min-w-[auto] outline-[3px] text-start w-6/12 pl-0 md:inline md:min-h-0 md:min-w-0 md:text-right md:w-auto md:pl-5">
        <li className="caret-transparent list-item outline-[3px] text-start pl-0 md:inline md:text-right md:pl-5">
          <a
            href="/pages/privacy-policy"
            className="caret-transparent outline-[3px] text-start md:text-right"
          >
            Privacy Policy
          </a>
        </li>
        <li className="caret-transparent list-item outline-[3px] text-start pl-0 md:inline md:text-right md:pl-5">
          <a
            href="/pages/terms-conditions"
            className="caret-transparent outline-[3px] text-start md:text-right"
          >
            Terms &amp; Conditions
          </a>
        </li>
        <li className="caret-transparent list-item outline-[3px] text-start pl-0 md:inline md:text-right md:pl-5">
          <a
            href="/pages/ccpa-opt-out"
            className="caret-transparent outline-[3px] text-start md:text-right"
          >
            Do not sell my personal information
            <img
              src="/images/jones/image-2.svg"
              alt="California Consumer Privacy Act (CCPA) Opt-Out Icon"
              role="presentation"
              className="caret-transparent inline h-[8.4px] max-w-full outline-[3px] text-start ml-[3px] md:text-right"
            />
          </a>
        </li>
      </ul>
      <p className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-start w-6/12 mt-auto pl-[35px] md:inline md:min-h-0 md:min-w-0 md:text-right md:w-auto md:pl-5">
        <small className="caret-transparent outline-[3px] text-start md:text-right">
          © JustSteven LLC 2026
        </small>
      </p>
    </div>
  );
};
