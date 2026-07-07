export type NuzGlobalContent = {
  ctaHref: string;
  ctaSaleEndsPrefix: string;
  ctaLabel: string;
  orderNowShort: string;
  secureBadge: string;
  lockIconUrl: string;
  creditCardsImageUrl: string;
};

export type NuzCountdownBannerContent = {
  initialSeconds: number;
  backgroundMobile: string;
  backgroundDesktop: string;
  leftIcon: string;
  rightIconMobile: string;
  rightIconDesktop: string;
  labels: { days: string; hrs: string; min: string; sec: string };
};

export type NuzNavbarContent = {
  logoUrl: string;
  logoAlt: string;
  logoSecondaryUrl: string;
};

export type NuzStickyBarContent = {
  hurryPrefix: string;
  hurrySuffix: string;
  peopleSuffix: string;
  shipsByPrefix: string;
  shipsByDate: string;
  shoppersInitial: number;
  shoppersMax: number;
  fireIconUrl: string;
  greenCircleIconUrl: string;
};

export type NuzMobileOrderBarContent = {
  countdownSeconds: number;
  hurryPrefix: string;
  hurrySuffix: string;
  shipsByPrefix: string;
  shipsByDate: string;
  ctaTop: string;
  ctaBottom: string;
  fireIconUrl: string;
  boxIconUrl: string;
};

export type NuzHeroFaqShipping = {
  type: "shipping";
  question: string;
  shippingDate: string;
  shippingCountdown: string;
  shippingFrom: string;
};

export type NuzHeroFaqText = {
  type: "text";
  question: string;
  text: string;
};

export type NuzHeroFaqReturns = {
  type: "returns";
  question: string;
  email: string;
  phone: string;
  tail: string;
};

export type NuzHeroFaqItem = NuzHeroFaqShipping | NuzHeroFaqText | NuzHeroFaqReturns;

export type NuzHeroContent = {
  productImageUrl: string;
  badgeImageUrl: string;
  trustpilotStarsUrl: string;
  trustpilotLogoUrl: string;
  trustLabel: string;
  trustScoreLabel: string;
  trustScoreValue: string;
  headline: string;
  subheadline: string;
  ctaCountdownSeconds: number;
  fastShippingLine: string;
  shippingBadges: { icon: string; label: string }[];
  benefitTags: { icon: string; label: string }[];
  guaranteeCard: { imageUrl: string; title: string; body: string };
  ccCardImageUrl: string;
  faq: NuzHeroFaqItem[];
};

export type NuzMediaBannerContent = {
  overlayText: string;
  logos: { src: string; heightClass: string; alt: string }[];
};

export type NuzVideoContent = {
  videoId: string;
  playIconUrl: string;
  rating: string;
  headline: string;
  bodyParagraphs: string[];
};

export type NuzPainPointsContent = {
  headingPrefix: string;
  headingSuffix: string;
  bodyParagraphs: string[];
  bullets: string[];
  bulletIconUrl: string;
  grid: { label: string; src: string; sizes: string }[];
  ctaCountdownSeconds: number;
};

export type NuzFeatureCardContent = { title: string; description: string; iconSrc: string };

export type NuzFeaturesContent = {
  headline: string;
  productImageUrl: string;
  productImageAlt: string;
  leftCards: NuzFeatureCardContent[];
  rightCards: NuzFeatureCardContent[];
  ctaCountdownSeconds: number;
};

export type NuzHowItWorksStepContent = {
  stepNumber: string;
  title: string;
  containerVariantClass: string;
  firstVideoId: string;
  secondVideoId: string;
  firstParagraphs: string[];
  secondParagraphs: string[];
};

export type NuzHowItWorksContent = {
  headline: string;
  steps: NuzHowItWorksStepContent[];
};

export type NuzComparisonContent = {
  headline: string;
  nuzzleColumnImageUrl: string;
  nuzzleLogoUrl: string;
  competitors: { img: string; label: string }[];
  yesIconUrl: string;
  noIconUrl: string;
  rows: { label: string; nuzzle: boolean; competitors: boolean[] }[];
  ctaCountdownSeconds: number;
};

export type NuzTrustpilotReview = {
  rating: 1 | 2 | 3 | 4 | 5;
  name: string;
  daysAgo: string;
  title: string;
  body: string;
  reply?: { from: string; daysAgo: string };
};

export type NuzTrustpilotContent = {
  headingPrefix: string;
  headingHighlight: string;
  ratingLabel: string;
  ratingValue: string;
  totalReviews: string;
  ratedTemplate: string;
  trustpilotReviewUrl: string;
  showingLabel: string;
  reviews: NuzTrustpilotReview[];
};

export type NuzTestimonialReview = { name: string; daysAgo: string; review: string };

export type NuzTestimonialsContent = {
  headingPrefix: string;
  headingMiddle: string;
  headingHighlight: string;
  verifiedNoteLine1: string;
  verifiedNoteLine2: string;
  heroImageUrl: string;
  starIconUrl: string;
  shieldCheckIconUrl: string;
  ratingValue: string;
  basedOn: string;
  recommendPercent: string;
  recommendTail: string;
  iRecommend: string;
  verifiedBuyer: string;
  showMoreLabel: string;
  showLessLabel: string;
  initialReviews: NuzTestimonialReview[];
  moreReviews: NuzTestimonialReview[];
};

export type NuzFaqItem = { question: string; answer: string };

export type NuzFaqContent = {
  headingPrefix: string;
  headingMiddle: string;
  headingHighlight: string;
  items: NuzFaqItem[];
};

export type NuzGuaranteeContent = {
  imageUrl: string;
  imageAlt: string;
  headlineLine1: string;
  headlineLine2: string;
  body: string;
  ctaCountdownSeconds: number;
};

export type NuzFooterContent = {
  logoUrl: string;
  links: string[];
  copyright: string;
  address: string;
};

export type NuzLandingPageContent = {
  global: NuzGlobalContent;
  countdownBanner: NuzCountdownBannerContent;
  navbar: NuzNavbarContent;
  stickyBar: NuzStickyBarContent;
  mobileOrderBar: NuzMobileOrderBarContent;
  hero: NuzHeroContent;
  mediaBanner: NuzMediaBannerContent;
  video: NuzVideoContent;
  painPoints: NuzPainPointsContent;
  features: NuzFeaturesContent;
  howItWorks: NuzHowItWorksContent;
  comparison: NuzComparisonContent;
  trustpilot: NuzTrustpilotContent;
  testimonials: NuzTestimonialsContent;
  faq: NuzFaqContent;
  guarantee: NuzGuaranteeContent;
  footer: NuzFooterContent;
};
