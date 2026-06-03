import { RelatedStoryCard } from "../RelatedStories/components/RelatedStoryCard";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const stories = [
  {
    imageSrc: "https://c.animaapp.com/mnsctxd6cckxuq/assets/hearing-aids-and-flag-25.jpg",
    category: "TECHNOLOGY",
    description: "Why this secret weapon against hearing loss is changing America.",
    linkHref: "#",
  },
  {
    imageSrc: "https://c.animaapp.com/mnsctxd6cckxuq/assets/harvard-25.jpg",
    category: "SCIENCE",
    description: "The shocking Harvard study that links hearing loss to memory.",
    linkHref: "#",
  },
  {
    imageSrc: "https://c.animaapp.com/mnsctxd6cckxuq/assets/aids-in-hands-25.jpg",
    category: "TECHNOLOGY",
    description: "This is the biggest upgrade the industry has ever seen. Are you ready?",
    linkHref: "#",
  },
];

export const RelatedStories = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div className="caret-transparent max-w-[1180px] mx-auto px-5 md:px-8" ref={ref}>
      <div className="reveal caret-transparent mb-[25px]">
        <p className="text-white text-[27px] font-bold bg-sky-600 caret-transparent leading-[32.4px] max-w-[200px] text-nowrap -mb-px px-[17px] py-1.5">
          Related Stories
        </p>
        <div className="bg-sky-600 caret-transparent h-[3px]"></div>
      </div>
      <div className="reveal reveal-delay-1 caret-transparent mb-[50px]">
        <div className="caret-transparent gap-x-[30px] flex flex-col gap-y-[30px] md:gap-x-2.5 md:flex-row md:gap-y-2.5">
          {stories.map((story, i) => (
            <RelatedStoryCard key={i} {...story} />
          ))}
        </div>
      </div>
    </div>
  );
};
