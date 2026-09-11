import copy from "../../../copy.json"
import media from "../../../media.json"

export const FooterBrand = () => {
  const { copyright, disclaimer, medicalDisclaimer } = copy.footer;
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
            {disclaimer}
          </div>
          <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
            <br className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]" />
          </div>
          <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
            {medicalDisclaimer}
          </div>
          <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]"></div>
        </div>
      </div>
    </div>
  );
};
