export interface ComparisonSide {
  headerHtml: string;
  rows: string[];
}

export interface ReasonEntry {
  number: number;
  titleHtml: string;
  imageAlt: string;
  paragraphsHtml: string[];
}

export interface TestimonialEntry {
  initials: string;
  name: string;
  meta: string;
  date: string;
  title: string;
  body: string;
  tags: string[];
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface AdvertorialContent {
  siteHeader: {
    title: string;
    trendingLabel: string;
  };
  hero: {
    titleHtml: string;
    authorName: string;
    authorTitle: string;
    authorDate: string;
    calloutHtml: string;
  };
  comparison: {
    labels: string[];
    winner: ComparisonSide;
    loser: ComparisonSide;
  };
  reasons: ReasonEntry[];
  midCta: {
    headingHtml: string;
    buttonLabel: string;
    timerLabel: string;
    timerStartSeconds: number;
  };
  finalCta: {
    label: string;
    headline: string;
    sub: string;
    offerLabel: string;
    priceOld: string;
    priceNew: string;
    buttonLabel: string;
    timerLabel: string;
    timerStartSeconds: number;
    bottlesLeft: number;
    sellOutRisk: string;
    shipping: string;
    guarantee: string;
  };
  testimonials: TestimonialEntry[];
  faq: FaqEntry[];
  disclaimer: string[];
}

export interface AdvertorialMedia {
  ctaUrl: string;
  authorAvatar: string;
  comparison: {
    winnerImage: string;
    loserImage: string;
  };
  reasonImages: string[];
  finalCtaProductImage: string;
}

export interface AdvertorialData {
  content: AdvertorialContent;
  media: AdvertorialMedia;
}
