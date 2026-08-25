import { CopdTestimonialCard } from "./components/CopdTestimonialCard";
import copy from "../../copy.json";

export const CopdTestimonialsSection = () => {
  const { testimonials } = copy;
  return (
    <section className="box-border caret-transparent outline-[3px]">
      <div className="bg-stone-50 box-border caret-transparent outline-[3px] overflow-hidden py-12">
        <div className="box-border caret-transparent outline-[3px] mb-8 px-8">
          <div className="text-green-700 text-[32px] font-bold box-border caret-transparent tracking-[-1.6px] leading-[35.2px] outline-[3px] text-center md:text-[44px] md:tracking-[-2.2px] md:leading-[48.4px]">
            <h2 className="text-[32px] box-border caret-transparent tracking-[-1.6px] leading-[35.2px] outline-[3px] md:text-[44px] md:tracking-[-2.2px] md:leading-[48.4px]">
              {testimonials.heading.text}{" "}
              <strong className="text-[32px] box-border caret-transparent tracking-[-1.6px] leading-[35.2px] outline-[3px] md:text-[44px] md:tracking-[-2.2px] md:leading-[48.4px]">
                {testimonials.heading.highlight}{" "}
              </strong>
            </h2>
          </div>
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <div className="box-border caret-transparent max-w-[1140px] outline-[3px] mx-auto">
            <div className="box-border caret-transparent outline-[3px] overflow-hidden">
              <div className="box-border caret-transparent flex outline-[3px] translate-x-[19.5px] -ml-4 md:translate-x-[388px] md:-ml-6">
                {testimonials.items.map((item, i) => (
                  <CopdTestimonialCard
                    key={i}
                    className={
                      i < testimonials.items.length - 1
                        ? "box-border caret-transparent basis-[90%] shrink-0 min-h-[auto] outline-[3px] pl-4 md:basis-[33.333%] md:pl-6"
                        : "translate-x-[-2111px] md:translate-x-[-2328px]"
                    }
                    title={`"${item.title}"`}
                    description={item.body}
                    authorName={item.author}
                  />
                ))}
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
                    src="/images/gruns/icon-23.svg"
                    alt="Icon"
                    className="box-border caret-transparent outline-[3px]"
                  />
                </button>
                <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                  {testimonials.items.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to slide ${i + 1}`}
                      className="bg-zinc-100 caret-black inline-block h-auto min-h-0 min-w-0 outline-0 text-center w-auto rounded-none md:aspect-auto md:bg-black md:caret-transparent md:block md:h-2 md:min-h-[auto] md:min-w-[auto] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                    />
                  ))}
                </div>
                <button
                  aria-label="Next slide"
                  type="button"
                  className="appearance-none items-center bg-transparent caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center w-10 p-0"
                >
                  <img
                    src="/images/gruns/icon-24.svg"
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
