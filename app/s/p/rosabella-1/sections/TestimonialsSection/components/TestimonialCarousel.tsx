import { TestimonialCard } from "./TestimonialCard"
import { CarouselControls } from "./CarouselControls"

export const TestimonialCarousel = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] w-full mt-10">
      <div className="relative box-border caret-transparent list-none outline-[3px] z-[1] overflow-hidden mx-auto">
        <div className="relative items-stretch caret-transparent flex h-full outline-[3px] w-full z-[1]">
          <TestimonialCard
            ariaLabel="1 / 4"
            title="I cannot believe I waited this long"
            ratingIconUrl="/s/p/rosabella-1/44.svg"
            rating="5.0"
            testimonial="My hands and feet were always freezing and I was exhausted by noon every single day. Three weeks into Rosabella Beetroot and I feel like a completely different person. Warmer, more energized, better blood flow. Something this simple should not work this well but here we are."
            customerImageUrl="/s/p/rosabella-1/17.avif"
            customerName="Sandra L • Verified Customer"
            date="February 2nd 2026"
          />
          <TestimonialCard
            ariaLabel="2 / 4"
            title="This changed everything for me"
            ratingIconUrl="/s/p/rosabella-1/44.svg"
            rating="5.0"
            testimonial="Two cups of coffee just to feel human every morning. That was my life. Now I take two capsules and I am genuinely good to go. My circulation feels better, my energy is steady all day, and I feel more alive than I have in years. My wife noticed before I even said anything."
            customerImageUrl="/s/p/rosabella-1/18.avif"
            customerName="Tom H • Verified Customer"
            date="January 18th 2026"
          />
          <TestimonialCard
            ariaLabel="3 / 4"
            title="At 64 I feel better than I did at 54"
            ratingIconUrl="/s/p/rosabella-1/44.svg"
            rating="5.0"
            testimonial="I was skeptical. I am not skeptical anymore. My blood flow feels noticeably better, I have more energy on my walks, and I recover faster than I have in years. I tell everyone I know about this. At 64 I genuinely feel like a younger version of myself again."
            customerImageUrl="/s/p/rosabella-1/19.webp"
            customerName="Frank M • Verified Customer"
            date="December 30th 2025"
          />
          <TestimonialCard
            ariaLabel="4 / 4"
            title="That afternoon wall is just gone"
            ratingIconUrl="/s/p/rosabella-1/44.svg"
            rating="5.0"
            testimonial="I work long shifts and hit a wall every single afternoon without fail. Tried everything. Nothing worked. Two weeks into Rosabella Beetroot and that wall just disappeared. My legs feel less heavy, my blood flow feels better, and I come home with energy left. Never writing a review but this one earned it."
            customerImageUrl="/s/p/rosabella-1/20.webp"
            customerName="Elaine • Verified Customer"
            date="January 27th 2026"
          />
        </div>
        <CarouselControls />
      </div>
    </div>
  );
};
