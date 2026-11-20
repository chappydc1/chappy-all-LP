"use client";

import { createContext, useContext } from "react";

export type RosabellaComment = {
  author: string;
  text: string;
  likes: string;
  time: string;
};

export type RosabellaCopyType = {
  announcementBar: {
    message: string;
  };
  hero: {
    breadcrumb: string;
    headline: string;
    subheadline: string;
    quoteText: string;
    quoteAuthor: string;
    body: string;
  };
  problem: {
    headline: string;
    body: string[];
  };
  reasonsWhy: [
    {
      headline: string;
      problemIntro: string[];
      problems: string[];
      solutionIntro: string[];
      benefits: string[];
      closing: string;
    },
    {
      headline: string;
      body: string[];
    },
    {
      headline: string;
    },
    {
      headline: string;
      body: string[];
    },
    {
      headline: string;
      body: string[];
    },
  ];
  finalCta: {
    ctaText: string;
  };
  scarcity: {
    updateLabel: string;
    dateText: string;
    message: string;
    lockInText: string;
    noteLabel: string;
    noteText: string;
  };
  trustBadges: string[];
  comments: Array<RosabellaComment & { replies?: RosabellaComment[] }>;
  sidebar: {
    recommendedLabel: string;
    ctaTextMobile: string;
    ctaTextDesktop: string;
  };
  ui: {
    productName: string;
  };
};

export type RosabellaLinksType = {
  cta: string;
  sidebar: {
    mobile: string;
    desktop: string;
  };
};

export type RosabellaMediaType = {
  infoIcon: string;
  starsImage: string;
  heroImage: string;
  rosabellaWebp: string;
  reason1ImageDesktop: string;
  reason1ImageMobile: string;
  dividerGif: string;
  productBottleImage: string;
  updateOfferProductImage: string;
  trustBadgeIcons: {
    moneyBack: string;
    secureCheckout: string;
    noHassle: string;
    fastShipping: string;
  };
  defaultProductImage: string;
  videos: {
    video1: { poster: string; src: string };
    video2: { poster: string; src: string };
    video3: { poster: string; src: string };
  };
  sidebarReviewsImage: string;
  likeIcon: string;
  commentAvatars: Record<string, string>;
  commentAvatarKeys: Array<{ avatar: string; replies?: string[] }>;
};

type AdvertorialContextType = {
  copy: RosabellaCopyType;
  links: RosabellaLinksType;
  media: RosabellaMediaType;
};

const AdvertorialContext = createContext<AdvertorialContextType | null>(null);

export function RosabellaAdvertorialProvider({
  copy,
  links,
  media,
  children,
}: {
  copy: RosabellaCopyType;
  links: RosabellaLinksType;
  media: RosabellaMediaType;
  children: React.ReactNode;
}) {
  return (
    <AdvertorialContext.Provider value={{ copy, links, media }}>
      {children}
    </AdvertorialContext.Provider>
  );
}

export function useAdvertorial() {
  const ctx = useContext(AdvertorialContext);
  if (!ctx) throw new Error("useAdvertorial must be used inside AdvertorialProvider");
  return ctx;
}
