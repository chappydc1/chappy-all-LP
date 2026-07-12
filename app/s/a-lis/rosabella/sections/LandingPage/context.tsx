"use client";

import { createContext, useContext } from "react";

export type RosabellaCopyType = {
  alertBanner: {
    message: string;
  };
  breadcrumb: string;
  headline: string;
  subheadline: string;
  quoteText: string;
  quoteAuthor: string;
  introBody: string;
  productName: string;
  ctaUrl: string;
  ctaText: string;
  introSection: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;
    p9: string;
    p10: string;
  };
  reason1Section: {
    title: string;
    p1: string;
    p2: string;
    problems: string[];
    p3: string;
    p4: string;
    benefits: string[];
    p5: string;
  };
  reason2Section: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
  reason3Section: {
    title: string;
  };
  reason4Section: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
  reason5Section: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
  };
  updateOffer: {
    updateLabel: string;
    dateText: string;
    message: string;
    lockInText: string;
    noteLabel: string;
    noteText: string;
  };
  trustBadges: string[];
  comments: Array<{
    id: string;
    author: string;
    text: string;
    likes: string;
    time: string;
    level: "top" | "reply";
    avatarKey: string;
  }>;
  sidebar: {
    recommendedLabel: string;
    ctaTextMobile: string;
    ctaTextDesktop: string;
    ctaUrlMobile: string;
    ctaUrlDesktop: string;
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
};

type AdvertorialContextType = {
  copy: RosabellaCopyType;
  media: RosabellaMediaType;
};

const AdvertorialContext = createContext<AdvertorialContextType | null>(null);

export function RosabellaAdvertorialProvider({
  copy,
  media,
  children,
}: {
  copy: RosabellaCopyType;
  media: RosabellaMediaType;
  children: React.ReactNode;
}) {
  return (
    <AdvertorialContext.Provider value={{ copy, media }}>
      {children}
    </AdvertorialContext.Provider>
  );
}

export function useAdvertorial() {
  const ctx = useContext(AdvertorialContext);
  if (!ctx) throw new Error("useAdvertorial must be used inside AdvertorialProvider");
  return ctx;
}
