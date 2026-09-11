'use client';
import { useState } from 'react';
import copy from "../../../copy.json"
import media from "../../../media.json"
import { TestimonialCard } from "./TestimonialCard"
import { CarouselControls } from "./CarouselControls"

export const TestimonialCarousel = () => {
  const items = copy.testimonials.items;
  const [current, setCurrent] = useState(0);

  const goTo = (idx: number) => {
    setCurrent(Math.max(0, Math.min(items.length - 1, idx)));
  };

  return (
    <div className="box-border caret-transparent outline-[3px] w-full mt-10">
      <div className="relative box-border caret-transparent list-none outline-[3px] z-[1] overflow-hidden mx-auto">
        <div
          className="relative items-stretch caret-transparent flex h-full outline-[3px] w-full z-[1] transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(calc(-${current} * (238.833px + 0.75rem)))` }}
        >
          {items.map((item) => (
            <TestimonialCard
              key={item.ariaLabel}
              ariaLabel={item.ariaLabel}
              title={item.title}
              ratingIconUrl={media.icons.stars}
              rating={item.rating}
              testimonial={item.testimonial}
              customerImageUrl={item.customerImageUrl}
              customerName={item.customerName}
              date={item.date}
            />
          ))}
        </div>
        <CarouselControls
          onPrev={() => goTo(current - 1)}
          onNext={() => goTo(current + 1)}
          currentPage={current}
          totalPages={items.length}
        />
      </div>
    </div>
  );
};
