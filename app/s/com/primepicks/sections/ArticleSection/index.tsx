import { PrimepicksArticle } from "./components/PrimepicksArticle";
import { PrimepicksSidebar } from "./components/PrimepicksSidebar";

export const PrimepicksArticleSection = () => {
  return (
    <div className="bg-white box-border caret-transparent max-w-[9999px] w-full mx-0 px-4 py-10 rounded-none border-0 border-none border-black md:max-w-[1064px] md:border md:border-neutral-200 md:mx-auto md:py-12 md:rounded-[20px] md:border-solid">
      <div className="box-border caret-transparent flex justify-between max-w-[1000px] mx-auto pb-[5px]">
        <PrimepicksArticle />
        <PrimepicksSidebar />
      </div>
      <div className="box-border caret-transparent max-w-[1000px] mx-auto">
        <section className="font-bold bg-zinc-100 box-border caret-transparent mt-[22px] px-8 py-6">
          <div className="box-border caret-transparent gap-x-4 grid grid-cols-[auto_1fr] mb-4">
            <img
              src="/images/primepicks/ZXhwZXJ0LTQ0LmpwZw.jpg"
              alt="PrimePicks.Review"
              className="aspect-[auto_84_/_84] box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] w-[84px]"
            />
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
              <img
                src="/images/primepicks/Testimonials-stars-icons-7-4-1-1.svg"
                alt="PrimePicks.Review"
                className="aspect-[auto_84_/_16] box-border caret-transparent max-w-full w-[84px] mb-1"
              />
              <span className="text-lg font-normal box-border caret-transparent leading-[27px]">
                Written by:
              </span>
              <p className="text-lg box-border caret-transparent leading-[27px] mt-2 mb-2.5">
                Benjamin Chos
              </p>
            </div>
          </div>
          <div className="text-neutral-600 text-base font-normal box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
            <p className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
              Benjamin is a tech enthusiast and product reviewer who specializes
              in everyday carry items and smart accessories. With a background
              in consumer electronics and a passion for streamlined living,
              Benjamin tests products that help people stay organized and
              connected. He focuses on practical solutions that work in
              real-world situations and always strives to deliver honest
              assessments about what’s worth your money and what isn’t.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
