import copy from "../../../copy.json"
import media from "../../../media.json"

export const FooterBrand = () => {
  const { copyright } = copy.footer;
  return (
    <div className="box-border caret-transparent outline-[3px] w-full pt-[9px] text-center">
      <img
        title=""
        src={media.logo}
        alt=""
        className="text-black box-border caret-transparent inline max-w-full outline-[3px] w-[180px]"
      />
      <div className="text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] mt-5 font-montserrat md:text-base md:leading-[20.8px]">
        {copyright}
        <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
          <br className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]" />
          <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
            *These statements have not been approved by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Testimonials found at tryrosabella.com are unverified results, and may not reflect the typical purchaser&apos;s experience, may not apply to the average person and are not intended to represent or guarantee that anyone will achieve the same or similar results.
          </div>
          <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
            <br className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]" />
          </div>
          <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
            Information on the Rosabella website is provided for informational purposes only. It is not meant to substitute for medical advice from your physician or other medical professional. You should not use the information contained herein for diagnosing or treating a health problem or disease, or prescribing any medication. Carefully read all product documentation. If you have or suspect that you have a medical problem, promptly contact your regular health care provider.
          </div>
          <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]"></div>
        </div>
      </div>
    </div>
  );
};
