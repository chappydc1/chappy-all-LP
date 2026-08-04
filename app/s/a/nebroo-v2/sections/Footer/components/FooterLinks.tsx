export const FooterLinks = () => {
  return (
    <div className="text-neutral-500 text-xs box-border caret-transparent leading-[22px] outline-[3px] mt-[15px] px-px py-2.5 font-montserrat md:text-base md:px-2.5">
      Nebroo
      <sup className="relative text-[9px] box-border caret-transparent leading-[0px] outline-[3px] top-[-4.5px] align-baseline md:text-xs md:-top-1.5"></sup>
      {" "}
      - Copyright 2024 - All Rights Reserved.
      <div className="text-blue-700 text-xs box-border caret-transparent outline-[3px] md:text-base">
        <a
          title="Privacy Policy"
          href="https://offer.nebroo.com/privacy-policy"
          className="text-blue-700 text-xs box-border caret-transparent max-w-full outline-[3px] text-center md:text-base"
        >
          <u className="text-xs box-border caret-transparent outline-[3px] underline md:text-base">
            Privacy Policy
          </u>
        </a>
        {" - "}
        <a
          title="Terms of Service"
          href="https://offer.nebroo.com/terms"
          className="text-blue-700 text-xs box-border caret-transparent max-w-full outline-[3px] text-center md:text-base"
        >
          <u className="text-xs box-border caret-transparent outline-[3px] underline md:text-base">
            Terms Of Service
          </u>
        </a>
        {" - "}
        <a
          title="Refund Policy"
          href="https://offer.nebroo.com/refund-policy"
          className="text-blue-700 text-xs box-border caret-transparent max-w-full outline-[3px] text-center md:text-base"
        >
          <u className="text-xs box-border caret-transparent outline-[3px] underline md:text-base">
            Refund Policy
          </u>
        </a>
        {" - "}
        <a
          title="About Us"
          href="https://offer.nebroo.com/aboutus"
          className="text-blue-700 text-xs box-border caret-transparent max-w-full outline-[3px] text-center md:text-base"
        >
          <u className="text-xs box-border caret-transparent outline-[3px] underline md:text-base">
            About Us
          </u>
        </a>
        {" - "}
        <a
          title="User Manual"
          href="https://offer.nebroo.com/user-manual-2-0"
          className="text-blue-700 text-xs box-border caret-transparent max-w-full outline-[3px] text-center md:text-base"
        >
          <u className="text-xs box-border caret-transparent outline-[3px] underline md:text-base">
            User Manual
          </u>
        </a>
        {" - "}
        <a
          title="Privacy Choices"
          href="https://offer.nebroo.com/do-not-sell-or-share-my-data"
          className="text-blue-700 text-xs box-border caret-transparent max-w-full outline-[3px] text-center md:text-base"
        >
          <u className="text-xs box-border caret-transparent outline-[3px] underline md:text-base">
            Your Privacy Choices
          </u>
        </a>
      </div>
      <div className="text-xs box-border caret-transparent flex justify-center outline-[3px] md:text-base">
        <a
          title="Phone link"
          href="tel:+15126451495"
          className="text-blue-700 text-xs box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-base"
        >
          +1 512 645-1495
        </a>
        <div className="text-xs box-border caret-transparent basis-[0%] shrink-0 min-h-[auto] min-w-[auto] outline-[3px] ml-[5px] mr-px rounded-[1px] md:text-base">
          <a
            title=""
            href="mailto:info@nebroo.com"
            className="text-blue-600 text-xs box-border caret-transparent max-w-full outline-[3px] text-center md:text-base hover:text-sky-700 hover:border-sky-700"
          >
            <strong className="text-blue-700 text-xs font-bold box-border caret-transparent outline-[3px] md:text-base">
              info@nebroo.com
            </strong>
          </a>
        </div>
      </div>
    </div>
  );
};
