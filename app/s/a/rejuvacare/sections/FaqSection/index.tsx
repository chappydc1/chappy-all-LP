import { RejuvacareFaqItem } from "../FaqSection/components/FaqItem";

export const RejuvacareFaqSection = () => {
  return (
    <div className="items-center self-center bg-neutral-100 box-border caret-transparent flex flex-wrap justify-center max-w-full outline-[3px] md:flex-nowrap">
      <div className="relative bg-white box-border caret-transparent basis-full grow max-w-[1400px] min-h-[25px] outline-[3px] w-min m-auto px-[15px] py-5 md:basis-0 md:pt-[50px] md:pb-[30px] md:px-[100px]">
        <div className="text-neutral-900 text-[23px] font-bold box-border caret-transparent leading-[30px] outline-[3px] mt-2.5 pt-px pb-2.5 px-0 font-montserrat md:text-[33px] md:leading-[42px] md:mt-0 md:pt-2.5 md:px-2.5">
          Below is a list of frequently asked 
          <span className="text-[23px] box-border caret-transparent leading-[30px] outline-[3px] text-left md:text-[33px] md:leading-[42px]">
            questions about RejuvaKnee
          </span>
        </div>
        <div className="box-border caret-transparent outline-[3px] pt-[5px] pb-px md:pb-[5px]">
          <RejuvacareFaqItem
            question="Will RejuvaKnee work for my Knee Pain and Stiffness?"
            answer="Absolutely! RejuvaKnee’s “Triple Method” Massager is your ticket to relief from knee pain. Thanks to its innovative technology, it combines Heat, Massage, and Compression Therapy, designed specifically for your knees. Say goodbye to discomfort and hello to soothing relief!"
            summaryVariant="list-[disclosure-open]"
            answerContainerVariant="rounded-b-[5px]"
            firstIconWrapperClassName="box-border caret-transparent hidden outline-[3px] px-[5px]"
            secondIconWrapperClassName="box-border caret-transparent outline-[3px] px-[5px]"
            iconVariant="before:list-[disclosure-open]"
          />
          <RejuvacareFaqItem
            question="How soon will I notice results with RejuvaKnee?"
            answer="Get ready for rapid relief! Many users have reported significant improvements after just one session. For lasting benefits, regular use is the key. RejuvaKnee ensures continuous comfort and relief."
            summaryVariant="list-[disclosure-closed]"
            answerContainerVariant=""
            firstIconWrapperClassName="box-border caret-transparent outline-[3px] px-[5px]"
            secondIconWrapperClassName="box-border caret-transparent hidden outline-[3px] px-[5px]"
            iconVariant="before:list-[disclosure-closed]"
          />
          <RejuvacareFaqItem
            question="Whats the ideal duration for each RejuvaKnee therapy session?"
            answer="No need to rush – we've got your comfort covered. A mere 15-30 minutes a day with RejuvaKnee’s “Triple Method” Massager is all it takes. It's like having a personal knee therapist, ready to pamper you whenever you need it."
            summaryVariant="list-[disclosure-closed]"
            answerContainerVariant=""
            firstIconWrapperClassName="box-border caret-transparent outline-[3px] px-[5px]"
            secondIconWrapperClassName="box-border caret-transparent hidden outline-[3px] px-[5px]"
            iconVariant="before:list-[disclosure-closed]"
          />
          <RejuvacareFaqItem
            question="What is RejuvaKnee does not meet my expectation?"
            answer="Rest easy with our 'Satisfaction Guaranteed' promise! If RejuvaKnee doesn't exceed your expectations, we're here to make it right. We're committed to ensuring your journey to comfort is smooth, risk-free, and delightful."
            summaryVariant="list-[disclosure-closed]"
            answerContainerVariant=""
            firstIconWrapperClassName="box-border caret-transparent outline-[3px] px-[5px]"
            secondIconWrapperClassName="box-border caret-transparent hidden outline-[3px] px-[5px]"
            iconVariant="before:list-[disclosure-closed]"
          />
          <RejuvacareFaqItem
            question="Could you tell me about your return policy?"
            answer="We're dedicated to your satisfaction, and that includes a hassle-free return policy. If RejuvaKnee doesn't leave you completely satisfied within 90 days, simply return it for a stress-free refund. Your peace of mind is our priority!"
            summaryVariant="list-[disclosure-closed]"
            answerContainerVariant=""
            firstIconWrapperClassName="box-border caret-transparent outline-[3px] px-[5px]"
            secondIconWrapperClassName="box-border caret-transparent hidden outline-[3px] px-[5px]"
            iconVariant="before:list-[disclosure-closed]"
          />
        </div>
      </div>
    </div>
  );
};
