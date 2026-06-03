export const CookieConsent = () => {
  return (
    <aside className="fixed text-base font-extralight shadow-[rgba(1,1,63,0.1)_0px_2px_19px_-4px] caret-transparent hidden leading-5 max-h-[calc(100%_-_16px)] outline-[3px] text-left w-full z-[9999] bottom-0 inset-x-0 font-helvetica md:w-[400px] md:left-4 md:right-auto md:bottom-4">
      <div className="bg-white caret-transparent flex flex-col max-h-[900px] outline-[3px] border border-zinc-900 overflow-auto p-3 rounded-lg border-solid md:p-6">
        <div className="items-start caret-transparent flex justify-between outline-[3px] mx-3 my-1 md:m-0">
          <h2 className="text-zinc-900 text-[13px] font-bold caret-transparent leading-[17px] outline-[3px] my-2 font-dmsans md:text-lg md:leading-[22px]">
            We Value Your Privacy
          </h2>
          <div className="items-start caret-transparent flex justify-between outline-[3px]">
            <button
              aria-label="Close"
              className="text-zinc-900 font-normal bg-transparent caret-transparent block leading-[normal] mr-[-5px] outline-[3px] text-center p-0 font-dmsans"
            >
              <img
                src="/s/lis/gruns/media/icon-40.svg"
                alt="Icon"
                className="caret-transparent inline h-[25px] outline-[3px] align-baseline w-6"
              />
            </button>
          </div>
        </div>
        <div className="caret-transparent outline-[3px] mx-3 my-0 py-1 md:mt-4 md:mb-2 md:mx-0 md:py-0">
          <button
            aria-label="Open language dropdown"
            className="text-[13.3333px] font-normal items-center bg-white caret-transparent flex leading-[normal] outline-[3px] text-center p-0 font-arial"
          >
            <img
              src="/s/lis/gruns/media/icon-41.svg"
              alt="Icon"
              className="caret-transparent h-[13px] outline-[3px] align-baseline w-[13px] md:h-3.5 md:w-3.5"
            />
            <span className="text-zinc-900 text-[11px] font-normal caret-transparent block leading-[15px] outline-[3px] ml-1.5 mr-0.5 font-dmsans md:text-base md:font-extralight md:leading-[normal]">
              English
            </span>
            <img
              src="/s/lis/gruns/media/icon-42.svg"
              alt="Icon"
              className="caret-transparent h-4 outline-[3px] align-baseline w-4 md:h-5 md:w-5"
            />
          </button>
          <div className="absolute bg-white shadow-[rgba(0,0,0,0.08)_0px_4px_4px_0px] caret-transparent hidden flex-col list-none max-h-[220px] min-w-[120px] outline-[3px] overflow-scroll mt-1 rounded-lg">
            <button className="text-[13.3333px] font-normal items-center bg-white caret-transparent gap-x-1 flex leading-[normal] outline-[3px] gap-y-1 text-center px-2 py-3 rounded-t-lg font-arial">
              <img
                src="/s/lis/gruns/media/icon-43.svg"
                alt="Icon"
                className="caret-transparent h-4 outline-[3px] align-baseline w-4"
              />
              <span className="text-zinc-900 text-[11px] font-normal caret-transparent block leading-[15px] outline-[3px] text-left font-dmsans md:text-base md:font-extralight md:leading-[normal]">
                English
              </span>
            </button>
            <button className="text-[13.3333px] font-normal items-center bg-white caret-transparent gap-x-1 flex leading-[normal] outline-[3px] gap-y-1 text-center px-2 py-3 font-arial">
              <span className="text-zinc-900 text-[11px] font-normal caret-transparent block leading-[15px] outline-[3px] text-left ml-5 font-dmsans md:text-base md:font-extralight md:leading-[normal]">
                Deutsch
              </span>
            </button>
            <button className="text-[13.3333px] font-normal items-center bg-white caret-transparent gap-x-1 flex leading-[normal] outline-[3px] gap-y-1 text-center px-2 py-3 rounded-b-lg font-arial">
              <span className="text-zinc-900 text-[11px] font-normal caret-transparent block leading-[15px] outline-[3px] text-left ml-5 font-dmsans md:text-base md:font-extralight md:leading-[normal]">
                Français canadien
              </span>
            </button>
          </div>
        </div>
        <p className="text-zinc-900 text-[11px] font-normal caret-transparent leading-[15px] outline-[3px] mx-3 my-1 font-dmsans md:text-base md:font-extralight md:leading-5 md:mx-0 md:my-2">
          We and our vendors use cookies and similar technologies to enhance
          your experience, analyze site traffic, personalize content, and
          deliver targeted advertising. To set your preferences, choose
          “Customize My Choices.”{" "}
        </p>
        <p className="text-zinc-900 text-[11px] font-normal caret-transparent leading-[15px] outline-[3px] mx-3 my-1 font-dmsans md:text-base md:font-extralight md:leading-5 md:mx-0 md:my-2">
          Opt Out Rights: You can request to opt out of targeted advertising,
          including the “sharing” of your personal information for cross-context
          behavioral advertising, by taking these steps: (1) click on the “Opt
          Out Webform” link below and submit the form; and (2) click “Accept
          Essential Only” below (or you can choose “Customize My Choices,”
          toggle OFF Advertising Cookies, and click “Save My Choices”).
        </p>
        <div className="caret-transparent outline-[3px] mx-3 my-1 md:mx-0 md:my-2">
          <a
            href="https://gruns.co/policies/privacy-policy"
            className="text-zinc-900 text-[11px] font-normal caret-transparent inline-block leading-[15px] max-w-full min-w-6 outline-[3px] underline text-ellipsis text-nowrap overflow-hidden mr-4 mb-0 py-1.5 font-dmsans md:text-base md:font-extralight md:leading-5 md:min-w-0 md:mb-2 md:py-0"
          >
            Privacy Policy
          </a>
          <a
            href="https://privacy.gruns.co/form/opt_out"
            className="text-zinc-900 text-[11px] font-normal caret-transparent inline-block leading-[15px] max-w-full min-w-6 outline-[3px] underline text-ellipsis text-nowrap overflow-hidden mb-0 py-1.5 font-dmsans md:text-base md:font-extralight md:leading-5 md:min-w-0 md:mb-2 md:py-0"
          >
            Opt Out Webform
          </a>
        </div>
        <button className="appearance-none text-green-950 text-[11px] font-bold bg-white caret-transparent block leading-[15px] outline-[3px] text-center border border-green-950 mx-3 my-1 px-8 py-[9px] rounded-lg md:text-lg md:font-semibold md:leading-[normal] md:mx-0 md:my-2 md:p-3">
          Accept All
        </button>
        <button className="appearance-none text-green-950 text-[11px] font-bold bg-white caret-transparent block leading-[15px] outline-[3px] text-center border border-green-950 mx-3 my-1 px-8 py-[9px] rounded-lg md:text-lg md:font-semibold md:leading-[normal] md:mx-0 md:my-2 md:p-3">
          Accept Essentials Only
        </button>
        <button className="appearance-none text-green-950 text-[11px] font-bold bg-white caret-transparent block leading-[15px] outline-[3px] text-center border border-green-950 mx-3 my-1 px-8 py-[9px] rounded-lg md:text-lg md:font-semibold md:leading-[normal] md:mx-0 md:my-2 md:p-3">
          Customize My Choices
        </button>
      </div>
    </aside>
  );
};
