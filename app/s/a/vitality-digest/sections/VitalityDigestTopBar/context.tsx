"use client";

import { createContext, useContext } from "react";

export type CommentEntry = {
  id: string;
  author: string;
  avatarKey: string;
  time: string;
  text: string;
  reactionCount?: string;
  replies?: CommentEntry[];
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

export type AdvertorialContent = {
  header: {
    titleLine1: string;
    titleLine2: string;
    titleMobile: string;
    posted: string;
    author: string;
  };
  ctaUrl: string;
  ctaText: string;
  intro: {
    quote: string;
    paragraphs: string[];
  };
  article: ArticleBlock[];
  faq: {
    heading: string;
    paragraphs: string[];
  };
  comments: {
    header: string;
    items: CommentEntry[];
  };
  stickyBar: {
    ctaText: string;
  };
  footer: {
    copyrightLines: string[];
    disclaimerParagraphs: string[];
  };
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
};

type AdvertorialData = {
  content: AdvertorialContent;
  media: AdvertorialMedia;
};

const AdvertorialContext = createContext<AdvertorialData | null>(null);

export function VitalityDigestAdvertorialProvider({
  content,
  media,
  children,
}: {
  content: AdvertorialContent;
  media: AdvertorialMedia;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <AdvertorialContext.Provider value={{ content, media }}>
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
