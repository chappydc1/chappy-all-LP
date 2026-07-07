export const Footer = () => {
  return (
    <div className="items-stretch bg-neutral-100 box-border caret-transparent flex flex-wrap justify-center max-w-full outline-[3px] md:flex-nowrap">
      <div className="relative bg-stone-100 box-border caret-transparent basis-full flex-col grow max-w-[1400px] min-h-[25px] outline-[3px] w-min m-auto pt-5 pb-[100px] px-[15px] md:basis-0 md:pb-5 md:px-[100px]">
        <div className="text-zinc-800 text-sm box-border caret-transparent leading-[21px] outline-[3px] mb-2.5 px-0 py-2.5 font-montserrat md:mb-0 md:px-2.5">
          <b className="font-bold box-border caret-transparent outline-[3px]">
            MEDICAL &amp; HEALTH DISCLAIMER:
          </b>
          The information and other content provided in this page, or in any
          linked materials, are not intended and should not be construed as
          medical advice, nor is the information a substitute for professional
          medical expertise or treatment.
          <div className="box-border caret-transparent outline-[3px]">
            <br className="box-border caret-transparent outline-[3px]" />
            <div className="box-border caret-transparent outline-[3px]"></div>
            <div className="box-border caret-transparent outline-[3px]"></div>
            <div className="box-border caret-transparent outline-[3px]"></div>
            <div className="box-border caret-transparent outline-[3px]">
              If you or any other person has a medical concern, you should
              consult with your health care provider or seek other professional
              medical treatment. Never disregard professional medical advice or
              delay in seeking it because of something that have read on this
              page or in any linked materials. If you think you may have a
              medical emergency, call your doctor or emergency services
              immediately.
            </div>
          </div>
        </div>
        <div className="text-xs box-border caret-transparent leading-4 outline-[3px] mb-2.5 font-montserrat">
          © RejuvaKnee 2024. All Rights Reserved
        </div>
        <div className="text-zinc-800 text-xs box-border caret-transparent leading-[18px] outline-[3px] pt-px pb-2.5 px-2.5 font-montserrat">
          Terms &amp; Conditions | Privacy Policy
          <div className="box-border caret-transparent outline-[3px]">
            +1 302-261-9613 | support@myrejuvaknee.com
          </div>
        </div>
      </div>
    </div>
  );
};
