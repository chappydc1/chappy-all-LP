import { TestimonialCard } from "../TestimonialsSection/components/TestimonialCard";

export const TestimonialsSection = () => {
        return (
            <div className="items-stretch bg-neutral-100 box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] md:flex-nowrap"><div className="relative items-center bg-sky-100 box-border caret-transparent flex basis-full flex-col grow justify-center max-w-[1400px] min-h-[25px] outline-[3px] w-min m-auto px-2.5 py-5 md:basis-0 md:justify-around md:px-[100px] md:py-[50px]"><div className="text-neutral-900 text-[23px] font-bold box-border caret-transparent leading-[33px] min-h-[auto] min-w-[auto] outline-[3px] text-center font-montserrat md:text-[33px] md:leading-[42px]">Hear It From Our Customers
		  </div>
<img title="" src="/images/rejuvacare/1722832035148_5_stars_yellow.png" alt="" className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[110px] my-2.5 md:w-[150px] md:mb-[30px]" />
<div className="items-start box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full md:flex-row"><TestimonialCard
  cardVariant="shadow-[rgba(0,0,0,0.12)_2px_2px_8px_2px]"
  imageUrl="/images/rejuvacare/1722832434914_silvia_m.webp"
  testimonial={`"I bought 2 of these online while scrolling social media. It was an impulse buy. I admit it. I didn’t believe in it much at first. Once they arrived after slightly delayed shipping I tried it for a week and felt just a bit of relief. I decided to give it another week, just because of all the the positive reviews. And that’s when I started to notice a real difference. Another 2 weeks passed by and my knee pain is completely gone! Like it was never there."`}
  authorName="Silvia M."
  ratingImageUrl="/images/rejuvacare/1722832035148_5_stars_yellow.png"
/><TestimonialCard
  cardVariant="shadow-[rgba(0,0,0,0.1)_2px_2px_8px_2px]"
  imageUrl="/images/rejuvacare/1722832418378_bridget_f.webp"
  testimonial={`"I have endured knee pain for at least 20 years. A physical therapist has been my only relief and that of course is short-lived. I must say, I was skeptical when I ordered RejuvaKnee. I can now say, no doubt about it, this thing works! Remains to be seen what the long-term effects will be, however, I am optimistic and looking forward to being able to walk through the day without pain pills. So far the only negative is that my husband keeps stealing it from me."`}
  authorName="Bridget F."
  ratingImageUrl="/images/rejuvacare/1722832035148_5_stars_yellow.png"
/></div>
<div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full"></div>
</div>
</div>

        )
    };