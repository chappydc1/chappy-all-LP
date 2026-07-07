"use client";
import { NebrooHowToUseStep } from "../HowToUse/components/HowToUseStep";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const NebrooHowToUse = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <div id="how-to-use" className="items-stretch bg-sky-100 box-border caret-transparent flex flex-wrap justify-center max-w-full px-[3px] py-2.5 md:flex-nowrap md:px-2.5 md:py-[30px]">
      <div ref={ref} className="relative items-stretch box-border caret-transparent block basis-full flex-col grow justify-center max-w-[1200px] min-h-[25px] w-min border-slate-500 mx-0 px-[5px] py-5 rounded-[15px] border-[5px] border-solid md:flex md:basis-0 md:mx-[10%] md:px-5">
        <div className={`text-[25px] font-bold bg-transparent box-border caret-transparent leading-8 min-h-0 min-w-0 text-center font-montserrat md:text-4xl md:leading-[47px] md:min-h-[auto] md:min-w-[auto] reveal ${visible ? "visible" : ""}`}>
          How To Use
        </div>
        <div className="box-border caret-transparent block flex-col min-h-0 min-w-0 w-full md:flex md:flex-row md:min-h-[auto] md:min-w-[auto]">
          <NebrooHowToUseStep
            stepNumber="1"
            wistiaId="dlb7bd7hq3"
            description="Plug in the USB cable to the case to charge the hearing aids."
          />
          <NebrooHowToUseStep
            stepNumber="2"
            wistiaId="jpifbyavqu"
            description={
              <>
                <div>Easily adjust the volume by clicking the button on the faceplate.</div>
                <div>You can choose from 6 different volume levels.</div>
              </>
            }
          />
          <NebrooHowToUseStep
            stepNumber="3"
            wistiaId="tfveft799q"
            description="Hold the hearing aid between your thumb and forefinger. Gently insert the earpiece into your ear canal, the hearing aid should fit snugly and comfortably."
          />
        </div>
      </div>
    </div>
  );
};
