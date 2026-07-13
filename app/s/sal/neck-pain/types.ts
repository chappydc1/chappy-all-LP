export type GlobalContent = {
  ctaHref: string;
  ctaSaleEndsPrefix: string;
  ctaLabel: string;
  orderNowShort: string;
  secureBadge: string;
  lockIconUrl: string;
  creditCardsImageUrl: string;
};

export type CountdownBannerContent = {
  initialSeconds: number;
  backgroundMobile: string;
  backgroundDesktop: string;
  leftIcon: string;
  rightIconMobile: string;
  rightIconDesktop: string;
  labels: { days: string; hrs: string; min: string; sec: string };
};

export type NavbarContent = {
  logoUrl: string;
  logoAlt: string;
  logoSecondaryUrl: string;
};

export type StickyBarContent = {
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

export type MobileOrderBarContent = {
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

export type HeroFaqShipping = {
  type: "shipping";
  question: string;
  shippingDate: string;
  shippingCountdown: string;
  shippingFrom: string;
};

export type HeroFaqText = {
  type: "text";
  question: string;
  text: string;
};

export type HeroFaqReturns = {
  type: "returns";
  question: string;
  email: string;
  phone: string;
  tail: string;
};

export type HeroFaqItem = HeroFaqShipping | HeroFaqText | HeroFaqReturns;

export type HeroContent = {
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
  faq: HeroFaqItem[];
};

export type MediaBannerContent = {
  overlayText: string;
  logos: { src: string; heightClass: string; alt: string }[];
};

export type VideoContent = {
  videoId: string;
  playIconUrl: string;
  rating: string;
  headline: string;
  bodyParagraphs: string[];
};

export type PainPointsContent = {
  headingPrefix: string;
  headingSuffix: string;
  bodyParagraphs: string[];
  bullets: string[];
  bulletIconUrl: string;
  grid: { label: string; src: string; sizes: string }[];
  ctaCountdownSeconds: number;
};

export type FeatureCardContent = { title: string; description: string; iconSrc: string };

export type FeaturesContent = {
  headline: string;
  productImageUrl: string;
  productImageAlt: string;
  leftCards: FeatureCardContent[];
  rightCards: FeatureCardContent[];
  ctaCountdownSeconds: number;
};

export type HowItWorksStepContent = {
  stepNumber: string;
  title: string;
  containerVariantClass: string;
  firstVideoId: string;
  secondVideoId: string;
  firstParagraphs: string[];
  secondParagraphs: string[];
};

export type HowItWorksContent = {
  headline: string;
  steps: HowItWorksStepContent[];
};

export type ComparisonContent = {
  headline: string;
  nuzzleColumnImageUrl: string;
  nuzzleLogoUrl: string;
  competitors: { img: string; label: string }[];
  yesIconUrl: string;
  noIconUrl: string;
  rows: { label: string; nuzzle: boolean; competitors: boolean[] }[];
  ctaCountdownSeconds: number;
};

export type TrustpilotReview = {
  rating: 1 | 2 | 3 | 4 | 5;
  name: string;
  daysAgo: string;
  title: string;
  body: string;
  reply?: { from: string; daysAgo: string };
};

export type TrustpilotContent = {
  headingPrefix: string;
  headingHighlight: string;
  ratingLabel: string;
  ratingValue: string;
  totalReviews: string;
  ratedTemplate: string;
  trustpilotReviewUrl: string;
  showingLabel: string;
  reviews: TrustpilotReview[];
};

export type TestimonialReview = { name: string; daysAgo: string; review: string };

export type TestimonialsContent = {
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
  initialReviews: TestimonialReview[];
  moreReviews: TestimonialReview[];
};

export type FaqItem = { question: string; answer: string };

export type FaqContent = {
  headingPrefix: string;
  headingMiddle: string;
  headingHighlight: string;
  items: FaqItem[];
};

export type GuaranteeContent = {
  imageUrl: string;
  imageAlt: string;
  headlineLine1: string;
  headlineLine2: string;
  body: string;
  ctaCountdownSeconds: number;
};

export type FooterContent = {
  logoUrl: string;
  links: string[];
  copyright: string;
  address: string;
};

export type LandingPageContent = {
  global: GlobalContent;
  countdownBanner: CountdownBannerContent;
  navbar: NavbarContent;
  stickyBar: StickyBarContent;
  mobileOrderBar: MobileOrderBarContent;
  hero: HeroContent;
  mediaBanner: MediaBannerContent;
  video: VideoContent;
  painPoints: PainPointsContent;
  features: FeaturesContent;
  howItWorks: HowItWorksContent;
  comparison: ComparisonContent;
  trustpilot: TrustpilotContent;
  testimonials: TestimonialsContent;
  faq: FaqContent;
  guarantee: GuaranteeContent;
  footer: FooterContent;
};
