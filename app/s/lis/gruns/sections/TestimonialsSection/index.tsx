import { TestimonialCard } from "../TestimonialsSection/components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px]">
      <div className="bg-stone-50 box-border caret-transparent outline-[3px] overflow-hidden py-12">
        <div className="box-border caret-transparent outline-[3px] mb-8 px-8">
          <div className="text-green-700 text-[32px] font-bold box-border caret-transparent tracking-[-1.6px] leading-[35.2px] outline-[3px] text-center md:text-[44px] md:tracking-[-2.2px] md:leading-[48.4px]">
            <h2 className="text-[32px] box-border caret-transparent tracking-[-1.6px] leading-[35.2px] outline-[3px] md:text-[44px] md:tracking-[-2.2px] md:leading-[48.4px]">
              Real Customers.{" "}
              <strong className="text-[32px] box-border caret-transparent tracking-[-1.6px] leading-[35.2px] outline-[3px] md:text-[44px] md:tracking-[-2.2px] md:leading-[48.4px]">
                Real Gut Relief.{" "}
              </strong>
            </h2>
          </div>
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent max-w-[1140px] outline-[3px] mx-auto">
            <div className="box-border caret-transparent outline-[3px] overflow-hidden">
              <div className="box-border caret-transparent flex outline-[3px] translate-x-[19.5px] -ml-4 md:translate-x-[388px] md:-ml-6">
                <TestimonialCard
                  className="box-border caret-transparent basis-[90%] shrink-0 min-h-[auto] outline-[3px] pl-4 md:basis-[33.333%] md:pl-6"
                  title={'"Relief within a few days"'}
                  description="I felt a sense of relief within a few days in my gut health. I suffer from acid reflux at times throughout the day and these have helped tremendously."
                  authorName="Laura"
                />
                <TestimonialCard
                  className="box-border caret-transparent basis-[90%] shrink-0 min-h-[auto] outline-[3px] pl-4 md:basis-[33.333%] md:pl-6"
                  title={'"Helps clean up my gut"'}
                  description="It really helps to clean up my gut. I’ve never been a regular person who went to the bathroom every day. With Grüns it’s getting there! I also love to eat them!"
                  authorName="Darcie"
                />
                <TestimonialCard
                  className="box-border caret-transparent basis-[90%] shrink-0 min-h-[auto] outline-[3px] pl-4 md:basis-[33.333%] md:pl-6"
                  title="&quot;My poops are regular finally&quot;"
                  description="I have always had stomach issues and trouble going to the bathroom but after 2 weeks I haven’t had any and my poops are regular finally."
                  authorName="Jenn"
                />
                <TestimonialCard
                  className=""
                  title="&quot;Increased energy and poop regularly&quot;"
                  description="So far, so good! I love these little bears. I’ve been taking Grüns just a week now. They taste yummy. I do feel increased energy and I’ve been able to poop pretty regularly.Thank you!"
                  authorName="Earla D."
                />
                <TestimonialCard
                  className="box-border caret-transparent basis-[90%] shrink-0 min-h-[auto] outline-[3px] pl-4 md:basis-[33.333%] md:pl-6"
                  title={'"Best poops of my life"'}
                  description="I’ve been taking the Gruns for about 40 days now and I love them!! I can honestly say it’s the best poops of my life, my cravings at nighttime are way lower and I have a little more energy!"
                  authorName="Miranda"
                />
                <TestimonialCard
                  className="translate-x-[-2111px] md:translate-x-[-2328px]"
                  title={'"They taste great"'}
                  description="What a wonderful way to maintain gut health and boost my immunity. They taste great, easy to travel with and a better way than pills to maintain my health."
                  authorName="Missy"
                />
              </div>
            </div>
            <div className="box-border caret-transparent flex justify-center outline-[3px] mt-6">
              <div className="items-center box-border caret-transparent gap-x-6 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
                <button
                  aria-label="Previous slide"
                  type="button"
                  className="appearance-none items-center bg-transparent caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center w-10 p-0"
                >
                  <img
                    src="/s/lis/gruns/media/icon-23.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px]"
                  />
                </button>
                <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                  <button
                    type="button"
                    aria-label="Go to slide 1"
                    className="bg-zinc-100 caret-black inline-block h-auto min-h-0 min-w-0 outline-0 text-center w-auto rounded-none md:aspect-auto md:bg-black md:caret-transparent md:block md:h-2 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                  />
                  <button
                    type="button"
                    aria-label="Go to slide 2"
                    className="bg-zinc-100 caret-black inline-block h-auto min-h-0 min-w-0 opacity-100 outline-0 text-center w-auto rounded-none md:aspect-auto md:bg-black md:caret-transparent md:block md:h-2 md:min-h-[auto] md:min-w-[auto] md:opacity-20 md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                  />
                  <button
                    type="button"
                    aria-label="Go to slide 3"
                    className="bg-zinc-100 caret-black inline-block h-auto min-h-0 min-w-0 opacity-100 outline-0 text-center w-auto rounded-none md:aspect-auto md:bg-black md:caret-transparent md:block md:h-2 md:min-h-[auto] md:min-w-[auto] md:opacity-20 md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                  />
                  <button
                    type="button"
                    aria-label="Go to slide 4"
                    className="bg-zinc-100 caret-black inline-block h-auto min-h-0 min-w-0 opacity-100 outline-0 text-center w-auto rounded-none md:aspect-auto md:bg-black md:caret-transparent md:block md:h-2 md:min-h-[auto] md:min-w-[auto] md:opacity-20 md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                  />
                  <button
                    type="button"
                    aria-label="Go to slide 5"
                    className="bg-zinc-100 caret-black inline-block h-auto min-h-0 min-w-0 opacity-100 outline-0 text-center w-auto rounded-none md:aspect-auto md:bg-black md:caret-transparent md:block md:h-2 md:min-h-[auto] md:min-w-[auto] md:opacity-20 md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                  />
                  <button
                    type="button"
                    aria-label="Go to slide 6"
                    className="bg-zinc-100 caret-black inline-block h-auto min-h-0 min-w-0 opacity-100 outline-0 text-center w-auto rounded-none md:aspect-auto md:bg-black md:caret-transparent md:block md:h-2 md:min-h-[auto] md:min-w-[auto] md:opacity-20 md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                  />
                </div>
                <button
                  aria-label="Next slide"
                  type="button"
                  className="appearance-none items-center bg-transparent caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center w-10 p-0"
                >
                  <img
                    src="/s/lis/gruns/media/icon-24.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
