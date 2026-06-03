export const Footer = () => {
  return (
    <footer className="items-center caret-transparent flex flex-wrap justify-center outline-[3px]">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-start w-6/12 mb-3 px-2.5 md:text-center">
        <a
          href="https://www.hear.com/imprint/"
          className="text-stone-300 text-sm caret-transparent outline-[3px] text-start w-full md:text-base md:text-center"
        >
          Imprint
        </a>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-start w-6/12 mb-3 px-2.5 md:text-center">
        <a
          href="https://www.hear.com/privacy-policy/"
          className="text-stone-300 text-sm caret-transparent outline-[3px] text-start w-full md:text-base md:text-center"
        >
          Privacy Policy
        </a>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-start w-6/12 mb-3 px-2.5 md:text-center">
        <a
          href="https://www.hear.com/privacy-request/"
          className="text-stone-300 text-sm caret-transparent outline-[3px] text-start w-full md:text-base md:text-center"
        >
          Do Not Sell My
          <br className="text-sm caret-transparent outline-[3px] text-start md:text-base md:text-center" />
          Personal Information{" "}
          <span className="text-[10.5px] caret-transparent block outline-[3px] text-start md:text-xs md:text-center">
            CA Residents Only
          </span>
        </a>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-start w-6/12 mb-3 px-2.5 md:text-center">
        <a
          href="https://www.hear.com/hipaa-notice-of-privacy-practices/"
          className="text-stone-300 text-sm caret-transparent outline-[3px] text-start w-full md:text-base md:text-center"
        >
          HIPAA Notice of
          <br className="text-sm caret-transparent outline-[3px] text-start md:text-base md:text-center" />
          Privacy Practices
        </a>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-start w-6/12 mb-3 px-2.5 md:text-center">
        <a
          href="https://www.hear.com/privacy-policy/#ad-choices"
          className="text-stone-300 text-sm caret-transparent outline-[3px] text-start w-full md:text-base md:text-center"
        >
          AdChoices
        </a>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-start w-6/12 mb-3 px-2.5 md:text-center">
        <a
          href="https://www.hear.com/terms-and-conditions/"
          className="text-stone-300 text-sm caret-transparent outline-[3px] text-start w-full md:text-base md:text-center"
        >
          Terms &amp; Conditions
        </a>
      </div>
    </footer>
  );
};
