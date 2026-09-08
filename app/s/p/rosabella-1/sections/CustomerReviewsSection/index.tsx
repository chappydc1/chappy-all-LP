import { CustomerReviewCard } from "./components/CustomerReviewCard"

export const CustomerReviewsSection = () => {
  return (
    <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] pb-[30px] px-5 md:flex-nowrap md:pb-[60px]">
      <div className="relative box-border caret-transparent basis-full grow max-w-[1328px] min-h-2.5 outline-[3px] w-min mx-auto md:basis-0">
        <div className="box-border caret-transparent outline-[3px] w-full">
          <div className="text-emerald-800 font-semibold box-border caret-transparent tracking-[-0.32px] leading-[20.8px] outline-[3px] text-center mb-2.5 font-montserrat">
            Reviews
          </div>
          <div className="text-black text-[26px] font-semibold box-border caret-transparent tracking-[-0.96px] leading-[33.8px] outline-[3px] text-center font-montserrat md:text-[32px] md:leading-[41.6px]">
            Verified Customer Reviews
          </div>
          <div className="items-center box-border caret-transparent flex justify-start outline-[3px] text-left w-full mt-4 md:justify-center">
            <img
              title=""
              src="/s/p/rosabella-1/44.svg"
              alt=""
              className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-[104px] mr-3"
            />
            <div className="text-black text-sm box-border caret-transparent tracking-[-0.32px] leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-montserrat md:text-base md:leading-[20.8px]">
              Rated 4.8 / 5.0 |{" "}
              <span className="text-sm font-medium box-border caret-transparent leading-[18.2px] outline-[3px] md:text-base md:leading-[20.8px]">
                &lsquo;Excellent&rsquo;
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex flex-col outline-[3px] w-full border-pink-400 mt-6 pt-6 border-t border-solid md:flex-row md:mt-10 md:pt-10">
            <CustomerReviewCard
              rating="5.0"
              reviewText="I used to wake up feeling stiff and sluggish every single morning. My circulation has always been something I worried about as I got older. By week two of taking Rosabella Beetroot I noticed my hands and feet felt warmer and I had actual energy by 9am. I have not felt this good in years and I am not stopping."
              customerImageUrl="/s/p/rosabella-1/110.png"
              customerName="Susan M. • Verified Customer"
            />
            <div className="box-border caret-transparent basis-6 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-5 md:basis-5"></div>
            <CustomerReviewCard
              rating="5.0"
              reviewText="I wanted something natural to add to my daily routine to support my heart health. I found Rosabella Beetroot and figured I had nothing to lose. A month in and I feel more alive than I have in a long time. My energy is steady, my circulation feels better, and I actually look forward to my morning walk again."
              customerImageUrl="/s/p/rosabella-1/117.png"
              customerName="Gary T. • Verified Customer"
            />
            <div className="box-border caret-transparent basis-6 shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-5 md:basis-5"></div>
            <CustomerReviewCard
              rating="5.0"
              reviewText="I was skeptical because I have tried so many supplements that did absolutely nothing. This one is different. Within the first couple of weeks I stopped feeling that heavy dragging feeling by midday. My blood flow feels better and I have energy left in the evenings to actually do things. Simple product, one ingredient, real results"
              customerImageUrl="/s/p/rosabella-1/118.png"
              customerName="Donna K. • Verified Customer"
            />
          </div>
          <div className="items-center box-border caret-transparent flex justify-start outline-[3px] w-full mt-6 md:justify-center md:mt-10">
            <a
              title="Load More Reviews"
              href="#i8ggll"
              className="text-black text-sm font-semibold box-border caret-transparent block tracking-[-0.4px] leading-[15.4px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center underline font-montserrat md:text-xl md:leading-[22px]"
            >
              Load More Reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
