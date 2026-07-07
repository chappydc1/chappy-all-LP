import { RejuvacareSplitMedia } from "../../components/SplitMedia";
import { RejuvacareSplitText } from "../../components/SplitText";
import { RejuvacareMethodItem } from "../HealingMethodsSection/components/MethodItem";

export const RejuvacareHealingMethodsSection = () => {
  return (
    <div className="items-center self-center bg-neutral-100 box-border caret-transparent flex flex-wrap justify-center max-w-full outline-[3px] md:flex-nowrap">
      <div className="relative bg-white box-border caret-transparent basis-full grow max-w-[1400px] min-h-[25px] outline-[3px] w-min m-auto pt-0 pb-[30px] px-[15px] md:basis-0 md:px-[100px] md:py-5">
        <div className="items-center box-border caret-transparent block flex-col-reverse outline-[3px] w-full mt-px p-px md:flex md:flex-row md:mt-6">
          <RejuvacareSplitMedia
            containerVariant="min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
            title="RejuvaKnee Features 3 Healing Methods To Alleviate Pain In Minutes"
            titleVariant="mb-5"
            mediaContainerVariant="md:mt-px"
            videoSrc="https://cdn.shopify.com/videos/c/o/v/f87276f9c80c47d49b99da496add8a00.mp4"
            videoPoster="/images/rejuvacare/1728700717503_alleviate_pain_in_minutes.webp"
            videoVariant="h-full"
          />
          <RejuvacareSplitText
            containerVariant="min-h-0 min-w-0 ml-px p-0 md:min-h-[auto] md:min-w-[auto] md:ml-0 md:pl-[30px] md:py-3"
            title="RejuvaKnee Features 3 Healing Methods To Alleviate Pain In Minutes"
          >
            <div className="text-neutral-900 text-[17px] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left mt-2.5 px-px py-2.5 font-montserrat">
              <div className="box-border caret-transparent outline-[3px]">
                When you put RejuvaKnee’s “Triple Method” Massager on, it uses 3
                specific techniques, but
                <b className="font-bold box-border caret-transparent outline-[3px]">
                  most importantly
                </b>
                - It uses them at the same time…
              </div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]">
                <b className="font-bold box-border caret-transparent outline-[3px]"></b>
              </div>
              <div className="box-border caret-transparent outline-[3px]">
                <b className="font-bold box-border caret-transparent outline-[3px]"></b>
              </div>
              <div className="box-border caret-transparent outline-[3px]"></div>
            </div>
            <div className="text-neutral-900 text-[17px] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left mt-2.5 px-px py-2.5 font-montserrat">
              <div className="box-border caret-transparent outline-[3px]">
                <b className="font-bold box-border caret-transparent outline-[3px]">
                  The combination of these 3 techniques amplifies their effects
                </b>
                boosting collagen production by over 300% and giving your knees
                the building blocks they need to restore cartilage
              </div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]">
                <b className="font-bold box-border caret-transparent outline-[3px]"></b>
              </div>
              <div className="box-border caret-transparent outline-[3px]">
                <b className="font-bold box-border caret-transparent outline-[3px]"></b>
              </div>
              <div className="box-border caret-transparent outline-[3px]"></div>
            </div>
            <RejuvacareMethodItem
              imageSrc="/images/rejuvacare/1722826373249_num_circle_1.webp"
              title="Soothing Heat :"
              description="Heat boosts circulation and brings healing nutrients to damaged cartilage. The warmth relaxes the muscles and tendons around the joint, making them more pliable and less prone to pain."
              showBreak="true"
            />
            <RejuvacareMethodItem
              imageSrc="/images/rejuvacare/1722826366022_num_circle_2.webp"
              title="Therapeutic Massage :"
              description="Micro-vibration nodes mimic the hands of a massage therapist to relax muscles, ease stiffness, and promote joint lubrication. Usually, you would need to go to a clinic to achieve these benefits but with RejuvaKnee you can get them from the comfort of your own home."
              showBreak="true"
            />
            <RejuvacareMethodItem
              imageSrc="/images/rejuvacare/1722826593777_num_circle_3.webp"
              title="Dynamic Compression :"
              description="Finally, you have dynamic compression, which applies the ideal amount of pressure, relieving stress on the joint and allowing the cartilage to regenerate. This technique acts as the “Amplifier” or the “Glue” that boosts the effects of all three techniques when combined giving you almost complete relief and massively increasing mobility"
              showBreak="true"
            />
          </RejuvacareSplitText>
        </div>
      </div>
    </div>
  );
};
