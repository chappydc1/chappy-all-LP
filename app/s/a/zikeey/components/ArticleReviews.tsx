import adv from "../copy.json";
import media from "../media.json";

export function ArticleReviews() {
  const { reviews } = adv.article;

  return (
    <section>
      <h3 className="text-teal-600 text-[34px] leading-[44.2px] my-[25px]">
        <b>{reviews.h2}</b>
      </h3>
      <p className="text-neutral-800 text-[22px] leading-[35.2px] mb-[25px]">
        {reviews.subheading}
      </p>

      <div className="space-y-3">
        {reviews.items.map((review, i) => (
          <div key={review.name}>
            <div className="bg-zinc-200 flex flex-col justify-center md:items-center md:flex-row rounded overflow-hidden transition-shadow duration-300 hover:shadow-md">
              <div className="basis-0 grow max-w-full md:max-w-[180px] m-0 p-[8.96px] md:mx-[25px] md:my-5 md:p-0 flex-shrink-0">
                <img
                  src={media.reviews[i]}
                  alt={review.name}
                  className="max-w-full align-baseline w-full object-cover"
                />
              </div>
              <div className="basis-0 grow-[2] m-0 md:m-5">
                <div className="items-center flex justify-start mx-[8.96px] my-[12.8px] md:m-0 gap-2">
                  <img
                    src={media.verifiedBadge}
                    alt="Verified"
                    className="max-w-4 md:max-w-5 align-baseline w-4 md:w-5"
                  />
                  <span className="text-base md:text-xl font-semibold block">{review.name}</span>
                  <img
                    src={media.starRating}
                    alt="5 stars"
                    className="h-[12.8px] md:h-auto ml-1 md:ml-5 align-baseline"
                  />
                </div>
                <div className="text-neutral-800 text-[17.6px] md:text-xl leading-[35.2px] md:leading-10 pb-[13.6px] px-[8.96px] md:pb-0 md:px-0">
                  <span className="block">{review.text}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
