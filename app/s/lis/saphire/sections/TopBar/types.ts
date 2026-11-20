export interface ComparisonSide {
  headline: string;
  rows: string[];
}

export interface ReasonEntry {
  headline: string;
  imageAlt: string;
  body: string[];
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
  nav: {
    siteName: string;
    trendingLabel: string;
  };
  hero: {
    headline: string;
    authorName: string;
    authorTitle: string;
    authorDate: string;
    callout: string;
  };
  comparison: {
    labels: string[];
    winner: ComparisonSide;
    loser: ComparisonSide;
  };
  reasonsWhy: ReasonEntry[];
  midCta: {
    headline: string;
    ctaText: string;
    timerLabel: string;
  };
  finalCta: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    offerLabel: string;
    priceOld: string;
    priceNew: string;
    ctaText: string;
    timerLabel: string;
    bottlesLeft: string;
    sellOutRisk: string;
    shipping: string;
    guarantee: string;
  };
  testimonials: TestimonialEntry[];
  faq: FaqEntry[];
  disclaimer: string[];
}

export interface AdvertorialLinks {
  midCta: string;
  finalCta: string;
}

export interface AdvertorialMedia {
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
  links: AdvertorialLinks;
  media: AdvertorialMedia;
}
