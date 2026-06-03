export type ReviewItem = {
  title: string;
  body: string;
  author: string;
  starsImageUrl: string;
};

export type ReviewsProps = {
  variant: "heading" | "subheading" | "list";
  headingText?: string;
  subheadingText?: string;
  subheadingHighlight?: string;
  reviews?: ReviewItem[];
};

export const Reviews = (props: ReviewsProps) => {
  if (props.variant === "heading") {
    return (
      <div className="caret-transparent mb-[25px]">
        <h1 className="text-[32px] font-bold caret-transparent leading-[41.6px] font-archivo md:text-4xl md:leading-[46.8px]">
          {props.headingText ??
            "Join 540,000 happy customers who trust hear.com"}
        </h1>
      </div>
    );
  }

  if (props.variant === "subheading") {
    return (
      <div className="caret-transparent mb-[30px] md:mb-10">
        <p className="text-[26px] caret-transparent leading-[39px]">
          <mark className="font-bold bg-orange-200 caret-transparent">
            {props.subheadingHighlight ?? "Over 540,000 wearers"}
          </mark>{" "}
          {props.subheadingText ??
            "can't be wrong. Here's what they have to say:"}
        </p>
      </div>
    );
  }

  const reviewItems: ReviewItem[] = props.reviews ?? [
    {
      title: "Great product, great service",
      body: "This is my first experience with hearing aids and I have to say that with hear.com it has been a breeze",
      author: "Jeanne DiPrima, US 🇺🇸",
      starsImageUrl: "https://c.animaapp.com/mnsctxd6cckxuq/assets/stars.svg",
    },
    {
      title: "I am amazed at how well I hear now",
      body: "The audiologist was great, and the whole experience was simple. I wish I hadn't waited so long to get hearing aids!",
      author: "Ernest Hiscox, US 🇺🇸",
      starsImageUrl: "https://c.animaapp.com/mnsctxd6cckxuq/assets/stars.svg",
    },
    {
      title: "A company that cares",
      body: "I found the level of care to be exceptional. I am hearing so much more clearly.",
      author: "Bill Ditto, US 🇺🇸",
      starsImageUrl: "https://c.animaapp.com/mnsctxd6cckxuq/assets/stars.svg",
    },
  ];

  return (
    <div className="caret-transparent">
      {reviewItems.map((review, index) => (
        <div key={index} className="caret-transparent">
          <div className="caret-transparent">
            <div className="items-baseline caret-transparent gap-x-2.5 flex gap-y-2.5 mb-5 md:[align-items:normal]">
              <p className="text-[26px] font-bold caret-transparent leading-[33.8px] min-h-[auto] min-w-[auto]">
                {review.title}
              </p>
              <img
                src={review.starsImageUrl}
                alt=""
                className="caret-transparent max-w-[100px] min-h-[auto] min-w-[auto] align-baseline w-full"
              />
            </div>
            <div className="caret-transparent mb-5">
              <p className="text-[26px] caret-transparent leading-[39px]">
                {review.body}
              </p>
            </div>
            <div
              className={`caret-transparent ${index === reviewItems.length - 1 ? "mb-5" : "mb-[30px]"}`}
            >
              <p className="text-xl caret-transparent leading-[26px]">
                {review.author} |{" "}
                <strong className="font-bold caret-transparent">
                  Verified Buyer
                </strong>
              </p>
            </div>
          </div>
          {index < reviewItems.length - 1 && (
            <div className="caret-transparent mb-[30px]">
              <div className="bg-neutral-400 caret-transparent h-px"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
