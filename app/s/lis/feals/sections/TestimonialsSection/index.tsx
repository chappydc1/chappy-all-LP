import { TestimonialCard } from "../TestimonialsSection/components/TestimonialCard";
import { TestimonialGallery } from "../TestimonialsSection/components/TestimonialGallery";

export const TestimonialsSection = () => {
  return (
    <div className="relative text-stone-600 items-center self-stretch bg-stone-50 box-border caret-transparent gap-x-8 flex flex-col shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-8 px-4 py-8 font-ll_brown_regular_web md:px-10 md:py-16">
      <div className="relative items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 justify-center max-w-none min-h-px min-w-[auto] outline-[3px] gap-y-0 w-full md:gap-x-4 md:max-w-[1180px] md:gap-y-4">
        <div className="text-[32px] self-stretch box-border caret-transparent shrink-0 leading-9 min-h-[auto] min-w-[auto] outline-[3px] break-words text-center font-bookmania md:text-[40px] md:self-auto md:leading-[48px] md:font-bookmania">
          <span className="text-[32px] box-border caret-transparent leading-9 outline-[3px] break-words w-full font-bookmania md:text-[40px] md:leading-[48px] md:font-bookmania">
            <h2 className="text-[32px] box-border caret-transparent leading-9 outline-[3px] break-words font-bookmania md:text-[40px] md:leading-[48px] md:font-bookmania">
              Join over 400,000 happy Feals customers.
            </h2>
          </span>
        </div>
        <div className="relative items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 justify-start max-w-none min-h-px min-w-[auto] outline-[3px] gap-y-0 w-full md:gap-x-[normal] md:max-w-[80%] md:gap-y-[normal]">
          <TestimonialCard
            iconSrc="/images/feals/icon-10.svg"
            title="I was very reluctant to try but..."
            quote={
              '"I was very reluctant to try because of my last 2 experiences magnified my anxiety. These are a COMPLETELY positive experience because I have control over the effect based on the dosage guidance."'
            }
            authorName="Reagan T."
            verificationIconSrc="/images/feals/45.svg"
            verificationText="Verified Buyer"
          />
          <TestimonialCard
            iconSrc="/images/feals/icon-11.svg"
            title="Alcohol is OUT"
            quote={
              <span className="text-lg box-border caret-transparent leading-[25.2px] outline-[3px] break-words md:text-xl md:leading-7">
                &quot;As someone who is looking to cut way back on my drinking,
                but achieve that “feel-good” relaxation… these are IT. I love
                how I can alter how strong the feeling is by how many gummies
                taken. I sleep better and wake up refreshed with no
                hangover!&quot;
              </span>
            }
            authorName="Sarah F."
            verificationIconSrc="/images/feals/45.svg"
            verificationText="Verified Buyer"
          />
          <TestimonialCard
            iconSrc="/images/feals/icon-12.svg"
            title="Love these relaxing gummies"
            quote="&quot;I love these gummies. They help me feel relaxed in about 30 minutes after I take just one. I replaced my evening glass of wine- minus the morning headache. They also help ease some muscle aches I commonly have and just help with an overall sense of calm.&quot;"
            authorName="Emily O."
            verificationIconSrc="/images/feals/45.svg"
            verificationText="Verified Buyer"
          />
          <TestimonialCard
            iconSrc="/images/feals/icon-13.svg"
            title="A must for your self care toolbox!"
            quote={
              '"Great addition to my self care tool box! The gummies give me a sense of calm to help with daily tasks. Using them for social settings such as concerts or going out to busy places help keep me grounded and in-tune with myself and focused on the present moment. Has a good taste and gummy consistency is on point!"'
            }
            authorName="Nichole R."
            verificationIconSrc="/images/feals/45.svg"
            verificationText="Verified Buyer"
          />
          <TestimonialCard
            iconSrc="/images/feals/icon-14.svg"
            title="Chew and chill"
            quote="&quot;I needed something to help with what had become an after work happy hour habit and the feals gummies are working! Whenever I have a stressful day I chew a couple of gummies and feel less stressed and more &quot;chill&quot;. No fuzzy brain feeling just more relaxed and less wound up.&quot;"
            authorName="Rachel R."
            verificationIconSrc="/images/feals/45.svg"
            verificationText="Verified Buyer"
          />
          <TestimonialGallery />
        </div>
      </div>
    </div>
  );
};
