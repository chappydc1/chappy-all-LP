"use client";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const NebrooSocialProof = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <div id="social-proof" className="items-stretch box-border caret-transparent flex flex-wrap justify-center max-w-full px-0 py-5 md:flex-nowrap md:px-2.5 md:py-[30px]">
      <div ref={ref} className="relative items-center self-start box-border caret-transparent block basis-full flex-col grow justify-start max-w-[1200px] min-h-[25px] w-min mx-0 md:self-auto md:flex md:basis-0 md:justify-normal md:mx-auto">
        <div className={`text-[21px] font-bold box-border caret-transparent leading-8 min-h-0 min-w-0 px-[15px] font-montserrat md:text-4xl md:leading-[47px] md:min-h-[auto] md:min-w-[auto] md:px-0 reveal ${visible ? "visible" : ""}`}>
          Over 100,000 Customers Use The Nebroo Hearing Aids
          <div className="text-[21px] box-border caret-transparent leading-8 md:text-4xl md:leading-[47px]">
            <span className="text-[21px] box-border caret-transparent leading-8 md:text-4xl md:leading-[47px]"></span>
          </div>
        </div>
        <div className="box-border caret-transparent flex justify-center min-h-0 min-w-0 text-center w-full my-2.5 md:min-h-[auto] md:min-w-[auto]">
          <img
            title=""
            src="/images/nebroo/1729142692703_star__1_.webp"
            alt=""
            
            className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
          />
          <img
            title=""
            src="/images/nebroo/1729142692703_star__1_.webp"
            alt=""
            
            className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
          />
          <img
            title=""
            src="/images/nebroo/1729142692703_star__1_.webp"
            alt=""
            
            className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
          />
          <img
            title=""
            src="/images/nebroo/1729142692703_star__1_.webp"
            alt=""
            
            className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
          />
          <img
            title=""
            src="/images/nebroo/1729142692703_star__1_.webp"
            alt=""
            
            className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
          />
        </div>
        <div className="box-border caret-transparent flex flex-col min-h-0 min-w-0 w-full p-px md:flex-row md:min-h-[auto] md:min-w-[auto]">
          <div className={`box-border caret-transparent min-h-[auto] min-w-[auto] w-full mb-5 pt-[15px] md:mb-0 md:pt-0 reveal delay-100 ${visible ? "visible" : ""}`}>
            <img
              alt="0 Michael Johnson.webp"
              title=""
              src="/images/nebroo/1740397539527_Eileen_Bralin_Desktop_v3.1.webp"
              
              className="box-border caret-transparent inline max-w-full"
            />
          </div>
          <div className={`box-border caret-transparent min-h-[auto] min-w-[auto] w-full mb-5 md:mb-0 reveal delay-200 ${visible ? "visible" : ""}`}>
            <img
              alt="0 Elizabeth Miller.webp"
              title=""
              src="/images/nebroo/1740397551768_Barbara_Myers_Desktop_v3.1.webp"
              
              className="box-border caret-transparent inline max-w-full"
            />
          </div>
          <div className={`box-border caret-transparent min-h-[auto] min-w-[auto] w-auto md:w-full reveal delay-300 ${visible ? "visible" : ""}`}>
            <img
              alt="0 James Anderson.webp"
              title=""
              src="/images/nebroo/1740397575789_Wendy_Sylvia_Desktop_v3.1.webp"
              
              className="box-border caret-transparent inline max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
