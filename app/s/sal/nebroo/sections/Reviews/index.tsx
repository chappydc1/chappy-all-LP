"use client";
import { NebrooReviewCard } from "./components/NebrooReviewCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const NebrooReviews = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <div id="reviews" className="items-stretch box-border caret-transparent flex flex-wrap justify-center max-w-full px-0 py-5 md:flex-nowrap md:px-2.5">
      <div ref={ref} className="relative items-center box-border caret-transparent block basis-full flex-col grow justify-start max-w-[1200px] min-h-[25px] w-min mx-0 md:flex md:basis-0 md:mx-auto">
        <div className={`text-[25px] font-bold box-border caret-transparent leading-[normal] min-h-0 min-w-0 text-center font-montserrat md:text-4xl md:leading-[47px] md:min-h-[auto] md:min-w-[auto] reveal ${visible ? "visible" : ""}`}>
          Our Customers Love The Nebroo Hearing Aids!
        </div>
        <div className="box-border caret-transparent flex justify-center min-h-0 min-w-0 text-center w-full my-[5px] md:min-h-[auto] md:min-w-[auto] md:mt-2.5 md:mb-0">
          <img
            title=""
            src="/images/nebroo/1729142692703_star__1_.webp"
            alt=""
            
            className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
          />
          <img
            title=""
            src="/images/nebroo/1729142692703_star__1_.webp"
            alt=""
            
            className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
          />
          <img
            title=""
            src="/images/nebroo/1729142692703_star__1_.webp"
            alt=""
            
            className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
          />
          <img
            title=""
            src="/images/nebroo/1729142692703_star__1_.webp"
            alt=""
            
            className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
          />
          <img
            title=""
            src="/images/nebroo/1729142692703_star__1_.webp"
            alt=""
            
            className="text-black box-border caret-transparent float-left max-w-full min-h-[auto] min-w-[auto] w-5"
          />
        </div>
        <div className="text-neutral-500 text-sm font-bold box-border caret-transparent leading-[normal] min-h-0 min-w-0 text-center mb-4 font-montserrat md:leading-[47px] md:min-h-[auto] md:min-w-[auto] md:mb-0">
          <span className="font-normal box-border caret-transparent leading-[47px]">
            *All individuals are unique, results may vary.
          </span>
        </div>
        <div className="items-start box-border caret-transparent block flex-col min-h-0 min-w-0 w-full px-2.5 py-0 md:flex md:flex-row md:min-h-[auto] md:min-w-[auto] md:py-3">
          <div className={`reveal delay-100 ${visible ? "visible" : ""} w-full md:w-auto md:flex-1`}>
          <NebrooReviewCard
            containerVariantClass="mb-5 font-montserrat md:mb-0"
            avatarSrc="/images/nebroo/1729153936072_1727787054724_Dorothy_J._Reviews.webp"
            reviewerName="Sally M."
            reviewText={
              <>
                {
                  '"I just put them in as you sent them, and walked out side where my sons and a neighbor were talking and i could hear everything everyone was saying. But i realized they were set too high. I turned them down this morning and really love them.'
                }
                <br />
                {
                  "I changed the ear buds to a smaller size and don't even remember they are in.\""
                }
              </>
            }
            starSrc="/images/nebroo/1729142692703_star__1_.webp"
          />
          </div>
          <div className={`reveal delay-200 ${visible ? "visible" : ""} w-full md:w-auto md:flex-1`}>
          <NebrooReviewCard
            containerVariantClass="my-5 md:my-0"
            avatarSrc="/images/nebroo/1729153940047_1727912760317_Wilford_C.webp"
            reviewerName="Willford C."
            nameExtraClass="font-montserrat"
            reviewText='"I’m really enjoying the hearing aids. They were awesome thank you very much. I recommended anybody that asked me about them. Thank you again"'
            reviewExtraClass="font-montserrat"
            starSrc="/images/nebroo/1729142692703_star__1_.webp"
          />
          </div>
          <div className={`reveal delay-300 ${visible ? "visible" : ""} w-full md:w-auto md:flex-1`}>
          <NebrooReviewCard
            containerVariantClass="mt-5 font-helvetica md:mt-0"
            avatarSrc="/images/nebroo/1729153945802_1727912762728_James_M._Reviews_copy.webp"
            reviewerName="James P."
            nameExtraClass="font-montserrat"
            reviewText={
              "\"Ok, mine got here today! Opened them and inserted in ear. I was astounded! I haven't heard like this in who knows how long. I could not only hear the TV I was watching as it sounded like a megaphone broadcasting but also the TV in the kitchen my wife was watching. Been adjusting the aids trying to get just right..Definitely lowering the volume on aids and TV. TV volume number down from 22 to 14 at low volume on aids. My wife has joined me in my den since the volume is not deafening. This is not my first rodeo but definitely the best horse I've ridden. Thanks, this one actually works\""
            }
            reviewExtraClass="font-montserrat"
            starSrc="/images/nebroo/1729142692703_star__1_.webp"
          />
          </div>
        </div>
      </div>
    </div>
  );
};
