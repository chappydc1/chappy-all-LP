import { AmalaFooterLogo } from "../AmalaFooter/components/AmalaFooterLogo";
import { AmalaFooterLinks } from "../AmalaFooter/components/AmalaFooterLinks";

export const AmalaFooter = () => {
  return (
    <div className="items-stretch bg-white bg-no-repeat bg-cover box-border caret-transparent flex flex-col flex-wrap justify-start justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full border-stone-300 bg-center px-2.5 py-[35px] border-t border-solid md:flex-nowrap">
      <div className="relative bg-no-repeat bg-cover box-border caret-transparent flex basis-full flex-col grow justify-center max-w-[810px] min-h-[25px] outline-[3px] w-full bg-center mx-auto">
        <AmalaFooterLogo />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] p-px" style={{fontFamily:"var(--font-poppins), sans-serif",fontSize:"14px",fontWeight:400,lineHeight:"21px",color:"rgb(37, 42, 50)",textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>
          AmalaHealth™ - Copyright 2025 - All Rights Reserved.
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] p-px" style={{fontFamily:"var(--font-poppins), sans-serif",fontSize:"14px",fontWeight:400,lineHeight:"21px",color:"rgb(37, 42, 50)",textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>
          <b className="font-bold box-border caret-transparent outline-[3px]">
            FDA Disclaimer:
          </b>{" "}
          These statements have not been evaluated by the Food and Drug
          Administration. This product is not intended to diagnose, treat, cure,
          or prevent any disease. Individual results may vary. Consult your
          healthcare provider before starting any new supplement regimen,
          especially if you have existing health conditions or take medications.
          <div className="box-border caret-transparent outline-[3px]">
            <br className="box-border caret-transparent outline-[3px]" />
            <div className="box-border caret-transparent outline-[3px]">
              <b className="font-bold box-border caret-transparent outline-[3px]">
                Individual Results Disclaimer:
              </b>{" "}
              Results may vary from person to person. Testimonials and examples
              are not typical results and your results may differ. Factors
              including age, diet, exercise, genetics, and consistency of use
              affect outcomes.
            </div>
          </div>
        </div>
        <AmalaFooterLinks />
      </div>
    </div>
  );
};
