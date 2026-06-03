"use client";

import { createContext, useContext } from "react";

export type CopyType = {
  advertorialLabel: string;
  alertBanner: {
    updateLabel: string;
    message: string;
  };
  breadcrumb: string;
  headline: string;
  subheadline: string;
  ratingText: string;
  quoteText: string;
  quoteAuthor: string;
  introBody: string;
  ctaUrl: string;
  ctaText: string;
  sections: Array<{
    id: string;
    type: string;
    number?: number;
    title: string;
    content: string;
  }>;
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

export type MediaType = {
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
  copy: CopyType;
  media: MediaType;
};

const AdvertorialContext = createContext<AdvertorialContextType | null>(null);

export function AdvertorialProvider({
  copy,
  media,
  children,
}: {
  copy: CopyType;
  media: MediaType;
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
