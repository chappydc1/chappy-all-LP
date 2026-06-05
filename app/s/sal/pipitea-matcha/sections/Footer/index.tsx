export const Footer = () => {
  return (
    <div className="items-stretch bg-zinc-300/30 bg-no-repeat bg-cover box-border caret-transparent flex flex-col flex-wrap justify-start justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full border-stone-300 bg-center px-2.5 py-[35px] border-t border-solid md:flex-nowrap">
      <div className="relative bg-no-repeat bg-cover box-border caret-transparent flex basis-full flex-col grow justify-center max-w-[810px] min-h-[25px] outline-[3px] w-full bg-center mx-auto">
        <img
          title=""
          src="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/1759978921286_logo_purple.png"
          href=""
          alt=""
          className="text-black self-center box-border caret-transparent justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-6/12 md:w-1/5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mt-[18px] p-px font-poppins">
          PiPi Tea™ - Copyright 2025 - All Rights Reserved.
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] my-2.5 p-px font-poppins">
          *These statements have not been evaluated by the Food and Drug
          Administration. This product is not intended to diagnose, treat, cure,
          or prevent any disease. Individual results may vary. Consult your
          healthcare provider before starting any new dietary supplement,
          especially if you are pregnant, nursing, taking medication, or have a
          medical condition.
        </div>
        <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] mt-1.5 p-px font-poppins">
          <a
            title=""
            loop="none"
            href="https://pipitea.com/pages/privacy-policy-pipi-tea"
            className="text-black box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center underline bg-[position:0px_0px]"
          >
            Privacy Policy
          </a>
            | 
          <a
            title=""
            loop="none"
            href="https://pipitea.com/pages/terms-of-use-pipi-tea"
            className="text-black box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center underline bg-[position:0px_0px]"
          >
            {" "}
            Terms Of Service
          </a>
            | 
          <a
            title=""
            loop="none"
            href="https://pipitea.com/pages/returns-refund-policy"
            className="text-black box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center underline bg-[position:0px_0px]"
          >
            Return Policy
          </a>
        </div>
        <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] mt-1.5 p-px font-poppins">
          Customer Support: 
          <b className="font-bold box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
            <a
              title=""
              loop="none"
              href="mailto://support@pipitea.com"
              className="text-black box-border caret-transparent block max-w-full outline-[3px] text-center bg-[position:0px_0px]"
            >
              support@pipitea.com
            </a>
          </b>
        </div>
      </div>
    </div>
  );
};
