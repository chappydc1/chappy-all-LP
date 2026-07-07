"use client";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const NebrooAsSeen = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`items-stretch bg-gray-100 box-border caret-transparent flex flex-wrap justify-start max-w-full px-0 md:flex-nowrap md:px-2.5 reveal ${visible ? "visible" : ""}`}>
      <div className="relative box-border caret-transparent basis-full grow max-w-full min-h-[25px] w-min md:basis-0">
        <div className="text-xl text-center leading-[17px] mt-5 font-montserrat font-bold md:text-2xl">
          As Seen On
        </div>
        <img
          alt="You Are Just One Step Away From RESTORING Your Hearing....webp"
          title=""
          src="/images/nebroo/1739604282346_Mobile.png"
          
          className="self-center shadow-[rgba(255,255,255,0)_0px_1px_0.1px_5px] box-border caret-transparent block max-w-full w-full mt-0 rounded-[10px] md:self-auto md:shadow-none md:hidden md:w-auto md:mt-5"
        />
        <div className="items-center box-border caret-transparent block flex-wrap justify-start mt-0 md:flex md:flex-nowrap md:mt-px">
          <div className="box-border caret-transparent hidden basis-full grow min-h-[25px] min-w-0 mx-[378px] p-2.5 md:block md:min-w-[auto] md:p-0">
            <img
              alt="You Are Just One Step Away From RESTORING Your Hearing....webp"
              title=""
              src="/images/nebroo/1739604284621_Desktop.png"
              
              className="self-center box-border caret-transparent block max-w-full mx-auto rounded-[10px] md:self-auto md:inline"
            />
          </div>
        </div>
        <div className="text-neutral-600 text-sm text-center leading-[17px] mb-[5px] font-montserrat">
          <span className="box-border caret-transparent">
            &quot;Paid Advertisements&quot;
          </span>
        </div>
        <div className="items-stretch box-border caret-transparent flex flex-col max-w-[1200px] w-full mx-auto md:flex-row"></div>
      </div>
    </div>
  );
};
