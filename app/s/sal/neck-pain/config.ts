const ALL_COMPETITORS_MISSING = [false, false, false];

export const pageConfig = {
  announcementBar: {
    initialSeconds: 75378,
  },
  stickyCta: {
    shoppersInitial: 116,
    shoppersMax: 248,
  },
  hero: {
    ctaCountdownSeconds: 23819,
    faq: [
      { type: "shipping" },
      { type: "text" },
      { type: "text" },
      { type: "text" },
      { type: "returns" },
    ],
  },
  asSeenOn: {
    logos: [
      { heightClass: "h-8" },
      { heightClass: "h-5" },
      { heightClass: "h-[25px]" },
      { heightClass: "h-8" },
      { heightClass: "h-10" },
      { heightClass: "h-7 md:h-8" },
      { heightClass: "h-[15px] md:h-[17px]" },
      { heightClass: "h-10" },
      { heightClass: "h-[15px]" },
      { heightClass: "h-7 md:h-8" },
      { heightClass: "h-[15px] md:h-[17px]" },
      { heightClass: "h-6" },
    ],
  },
  problem: {
    ctaCountdownSeconds: 15634,
  },
  features: {
    ctaCountdownSeconds: 17470,
  },
  howItWorks: {
    steps: [
      { containerVariantClass: "bg-white/60 py-0" },
      {
        containerVariantClass:
          "bg-gray-100 box-border caret-transparent mb-[30px] pt-[30px] pb-0 md:mb-0 md:pt-10 md:pb-[60px]",
      },
      { containerVariantClass: "bg-white/60 py-0" },
    ],
  },
  comparison: {
    rows: [
      { nuzzle: true, competitors: ALL_COMPETITORS_MISSING },
      { nuzzle: true, competitors: ALL_COMPETITORS_MISSING },
      { nuzzle: true, competitors: ALL_COMPETITORS_MISSING },
      { nuzzle: true, competitors: ALL_COMPETITORS_MISSING },
      { nuzzle: true, competitors: ALL_COMPETITORS_MISSING },
    ],
    ctaCountdownSeconds: 75365,
  },
  reviews: {
    items: [
      { rating: 5 },
      { rating: 5 },
      { rating: 5 },
      { rating: 2 },
      { rating: 5 },
      { rating: 5 },
      { rating: 5 },
      { rating: 5 },
      { rating: 5 },
      { rating: 5 },
      { rating: 5 },
      { rating: 5 },
    ],
  },
  guarantee: {
    ctaCountdownSeconds: 75360,
  },
  mobileStickyCta: {
    countdownSeconds: 75360,
  },
};
