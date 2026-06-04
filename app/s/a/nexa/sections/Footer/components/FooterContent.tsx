// @ts-nocheck
export const FooterContent = () => {
  return (
    <div className="text-gray-500 text-sm bg-transparent box-border caret-transparent leading-[14px] outline-[3px] text-center border-neutral-200 px-5 py-10 border-t border-solid font-roboto md:pl-[200px] md:pr-[300px]">
      <div className="box-border caret-transparent outline-[3px] w-full mx-px px-2.5 py-3">
        <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 py-3">
          <img
            title=""
            src="/images/nexa/1764951851636_v2.png"
            href=""
            alt=""
            className="text-black box-border caret-transparent h-5 max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[25px]"
          />
          <div className="box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full mt-[3px] mb-px pl-[15px] pr-2.5">
            <a
              title="Privacy Footer"
              loop="none"
              className="text-blue-600 text-xs box-border caret-transparent block leading-3 max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline pb-2.5 px-0.5 font-montserrat md:pb-0"
            >
              Terms of Service
            </a>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] mx-[3px] p-px font-montserrat">
              |
            </div>
            <a
              title="Privacy Footer"
              loop="none"
              className="text-blue-600 text-xs box-border caret-transparent block leading-3 max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline pb-2.5 px-0.5 font-montserrat md:pb-0"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <hr className="text-zinc-500 bg-neutral-200 caret-transparent h-[0.5px] max-w-full outline-[3px] w-full overflow-visible my-2.5 border-x-2 border-solid border-transparent" />
        <p className="box-border caret-transparent flex outline-[3px] pt-5 font-montserrat">
          <span className="text-black box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-left">
            © Nexa All rights reserved.
          </span>
        </p>
      </div>
    </div>
  );
};
