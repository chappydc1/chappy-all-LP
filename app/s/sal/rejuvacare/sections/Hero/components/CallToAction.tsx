export const CallToAction = () => {
  return (
    <div className="items-start box-border caret-transparent flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full mt-0 p-px md:mt-5">
      <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] w-full mt-[7px] p-px md:mt-px">
        <a
          title="Get up to 50% off today only  "
          className="text-white text-xl font-extrabold self-center bg-emerald-500 shadow-[rgba(0,0,0,0.19)_0px_2px_7px_1px] box-border caret-transparent flex justify-center leading-[23px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center w-full px-2.5 py-5 rounded-[10px] font-montserrat md:text-[19px] md:leading-[23.16px] md:w-[367px]"
        >
          Get 50% off today only  ➜
        </a>
      </div>
      <div className="box-border caret-transparent flex justify-around min-h-[auto] min-w-[auto] outline-[3px] w-full my-2.5 p-px md:justify-normal md:my-[22px]">
        <img
          title=""
          src="/images/rejuvacare/1722821080411_cc_payment_options.webp"
          alt=""
          className="text-black box-border caret-transparent justify-start max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[276px] my-px md:w-auto"
        />
      </div>
    </div>
  );
};
