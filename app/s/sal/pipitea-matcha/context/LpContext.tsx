"use client"
import { createContext, useContext } from "react"

export interface PipiteaMatchaLpCopy {
  ctaUrl: string
  announcement: {
    slides: string[]
  }
  header: {
    logoAlt: string
  }
  hero: {
    rating: string
    ratingLabel: string
    heading: string
    subheadingBold: string
    subheading: string
    benefits: string[]
    shipsBy: string
    shipsFrom: string
    ctaText: string
    inStock: string
    delivery: string
    guaranteeTitle: string
    guaranteeText: string
    testimonialQuote: string
    testimonialAuthor: string
    testimonialVerified: string
    faqItems: Array<{ question: string; answer: string }>
  }
  finalCta: {
    headingMobile: string
    headingDesktop: string
    subheading: string
    saleText: string
    ctaText: string
    guarantee: string
  }
  stickyMobileCta: {
    ctaText: string
  }
  footer: {
    copyright: string
    disclaimer: string
    links: {
      privacy: { label: string; href: string }
      terms: { label: string; href: string }
      returns: { label: string; href: string }
    }
    support: {
      label: string
      email: string
    }
  }
}

export interface PipiteaMatchaLpMedia {
  header: {
    logo: string
  }
  hero: {
    gallery: string[]
    ratingStars: string
    checkIcon: string
    stockIcon: string
    deliveryIcon: string
    faqIcon: string
    paymentIcons: string
    guaranteeBadge: string
    testimonialProduct: string
    testimonialAvatar: string
    verifiedIcon: string
  }
  finalCta: {
    icon: string
    guaranteeIcon: string
  }
  footer: {
    logo: string
  }
}

export interface PipiteaMatchaLpData {
  copy: PipiteaMatchaLpCopy
  media: PipiteaMatchaLpMedia
}

const LpContext = createContext<PipiteaMatchaLpData | null>(null)
export const PipiteaMatchaLpProvider = LpContext.Provider

export function useLp(): PipiteaMatchaLpData {
  const ctx = useContext(LpContext)
  if (!ctx) throw new Error("useLp must be used within LpProvider")
  return ctx
}
