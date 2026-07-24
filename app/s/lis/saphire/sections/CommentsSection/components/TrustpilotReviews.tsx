import { useAdvertorialData } from "../../TopBar/context";

export function TrustpilotReviews() {
  const { content } = useAdvertorialData();
  const { testimonials } = content;

  return (
    <section className="mx-auto max-w-[800px] px-4 py-6 md:px-5 md:py-[30px]">
      <div className="mb-5 flex items-center justify-center gap-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 62" height="24" width="100">
          <path
            fill="#00b67a"
            d="M38.8 0H24.3L20 14.2H0L10.4 22.9L6.3 37.1L20 26L29.3 32.6L33.6 18.4L38.8 0Z"
          />
          <path fill="#005128" d="M28.4 37.1L24.3 22.9L20 37.1L33.6 46.3L28.4 37.1Z" />
          <text fill="#000" fontSize="42" fontWeight="900" fontFamily="Arial" y="44" x="48">
            Trustpilot
          </text>
        </svg>
      </div>

      {testimonials.map((review) => (
        <div
          key={review.name}
          className="mb-3 rounded border border-[#e0e0e0] bg-white p-4 md:p-5"
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f8e8f0] text-sm font-bold text-[#333]">
                {review.initials}
              </div>
              <div>
                <div className="text-[15px] font-bold leading-tight text-black">
                  {review.name}
                </div>
                <div className="text-xs text-[#999]">{review.meta}</div>
              </div>
            </div>
            <div className="shrink-0 text-xs text-[#999]">{review.date}</div>
          </div>
          <div className="mb-2 flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex h-[22px] w-[22px] items-center justify-center bg-adv-trustpilot text-[13px] leading-none text-white"
              >
                ★
              </div>
            ))}
            <span className="ml-2 text-xs text-adv-trustpilot">→ Redirected</span>
          </div>
          <div className="mb-1.5 text-base font-bold text-black">{review.title}</div>
          <div className="mb-3 text-[13px] leading-[1.6] text-[#333] md:text-sm">
            {review.body}
          </div>
          <div className="flex flex-wrap gap-2">
            {review.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[3px] bg-[#f0f0f0] px-2.5 py-1 text-[11px] text-[#666]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
