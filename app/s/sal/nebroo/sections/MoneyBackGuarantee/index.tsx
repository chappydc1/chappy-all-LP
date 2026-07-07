"use client";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const NebrooMoneyBackGuarantee = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <div id="guarantee" className="items-stretch bg-sky-100 box-border caret-transparent flex flex-wrap justify-center max-w-full px-2.5 py-5 md:flex-nowrap">
      <div ref={ref} className={`relative items-center box-border caret-transparent block basis-full flex-col grow justify-around max-w-[1200px] min-h-[25px] w-min px-px py-2.5 md:flex md:basis-0 md:px-2.5 reveal ${visible ? "visible" : ""}`}>
        <img
          alt="120 DAY MONEY BACK.webp"
          title=""
          src="/images/nebroo/1729154027441_1727912788821_120_Day_PNG_COMP_copy.webp"
          
          className="box-border caret-transparent inline max-w-full min-h-0 min-w-0 w-[200px] md:block md:min-h-[auto] md:min-w-[auto]"
        />
        <div className="text-2xl font-bold box-border caret-transparent leading-8 min-h-0 min-w-0 mt-5 font-montserrat md:text-4xl md:leading-[47px] md:min-h-[auto] md:min-w-[auto]">
          120-Day Results or Money Back Guarantee
        </div>
        <div className="text-[17px] box-border caret-transparent leading-6 min-h-0 min-w-0 mt-5 px-2.5 font-montserrat md:text-lg md:leading-[27px] md:min-h-[auto] md:min-w-[auto] md:px-0">
          <b className="text-[17px] font-bold box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
            Try it for 120 days.
          </b>{" "}
          If you don&#39;t get the results you want in 120 days or less - we
          don&#39;t want your money! We are confident that our product works and
          encourage you to try it and experience the full benefits of Nebroo. If
          you are not satisfied and wish to return the product, you can do so
          with our
          <b className="text-[17px] font-bold box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
            120-day money back guarantee.
          </b>
          <div className="text-[17px] box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
            <br className="text-[17px] box-border caret-transparent leading-6 md:text-lg md:leading-[27px]" />
            <div className="text-[17px] box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
              Buying items online can be a daunting task, so{" "}
              <b className="text-[17px] font-bold box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
                we want you to be confident when you purchase our hearing aids
              </b>
              <b className="text-[17px] font-bold box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
                .
              </b>{" "}
              If you don&#39;t like them, no hard feelings, we&#39;ll make it
              right.
            </div>
            <div className="text-[17px] box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
              <br className="text-[17px] box-border caret-transparent leading-6 md:text-lg md:leading-[27px]" />
            </div>
            <div className="text-[17px] box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
              We have 24/7/365 Online Email Support. Please contact us if you
              need any assistance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
