"use client";

import { createContext, useContext } from "react";

export type CommentEntry = {
  author: string;
  time: string;
  text: string;
  reactionCount?: string;
  replies?: CommentEntry[];
};

export type CommentMedia = {
  id: string;
  avatarKey: string;
  replies?: CommentMedia[];
};

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraphs"; items: string[] }
  | {
      type: "image";
      mediaKey:
        | "productImageSupplyDesktop"
        | "productImageGuarantee"
        | "productImageDecision";
    }
  | { type: "cta" };

type HeadlineSection = {
  headline: string;
  body: string[];
};

type BodySection = {
  body: string[];
};

export type AdvertorialContent = {
  hero: {
    headlineLine1: string;
    headlineLine2: string;
    headlineMobile: string;
    date: string;
    byline: string;
  };
  lead: {
    quote: string;
    body: string[];
  };
  problem: HeadlineSection;
  agitation: HeadlineSection;
  offer: BodySection;
  guarantee: BodySection;
  urgency: BodySection;
  faq: HeadlineSection;
  comments: {
    headline: string;
    items: CommentEntry[];
  };
  stickyCta: {
    ctaText: string;
  };
  footer: {
    copyrightLines: string[];
    disclaimer: string[];
  };
  ui: {
    ctaText: string;
  };
};

export type AdvertorialLinks = {
  cta: string;
};

export type AdvertorialMedia = {
  logo: string;
  footerLogo: string;
  introImageDesktop: string;
  introImageMobile: string;
  productImageSupplyDesktop: string;
  productImageGuarantee: string;
  productImageDecision: string;
  productImageCombined: string;
  reactionIcons: string[];
  commentAvatars: Record<string, string>;
  comments: CommentMedia[];
};

type AdvertorialData = {
  content: AdvertorialContent;
  links: AdvertorialLinks;
  media: AdvertorialMedia;
};

const AdvertorialContext = createContext<AdvertorialData | null>(null);

export function VitalityDigestAdvertorialProvider({
  content,
  links,
  media,
  children,
}: {
  content: AdvertorialContent;
  links: AdvertorialLinks;
  media: AdvertorialMedia;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <AdvertorialContext.Provider value={{ content, links, media }}>
      {children}
    </AdvertorialContext.Provider>
  );
}

export function useAdvertorialData(): AdvertorialData {
  const context = useContext(AdvertorialContext);
  if (!context) {
    throw new Error("VitalityDigest advertorial data is missing.");
  }
  return context;
}
