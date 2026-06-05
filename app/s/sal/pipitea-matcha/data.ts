import type { LpCopy, LpMedia } from "./context/LpContext";

export const copy: LpCopy = {
  ctaUrl: "https://shop.pipitea.com/",
  announcement: { slides: [] },
  header: { logoAlt: "Pipitea Matcha" },
  hero: {
    rating: "4.9",
    ratingLabel: "Based on 2,000+ reviews",
    heading: "",
    subheadingBold: "",
    subheading: "",
    benefits: [],
    shipsBy: "",
    shipsFrom: "",
    ctaText: "Shop Now",
    inStock: "",
    delivery: "",
    guaranteeTitle: "",
    guaranteeText: "",
    testimonialQuote: "",
    testimonialAuthor: "",
    testimonialVerified: "",
    faqItems: [],
  },
  finalCta: {
    headingMobile: "",
    headingDesktop: "",
    subheading: "",
    saleText: "",
    ctaText: "Shop Now",
    guarantee: "",
  },
  stickyMobileCta: { ctaText: "Shop Now" },
  footer: {
    copyright: "© 2024 Pipitea",
    disclaimer: "",
    links: {
      privacy: { label: "Privacy Policy", href: "#" },
      terms: { label: "Terms", href: "#" },
      returns: { label: "Returns", href: "#" },
    },
    support: { label: "Support", email: "support@pipitea.com" },
  },
};

export const media: LpMedia = {
  header: { logo: "" },
  hero: {
    gallery: [],
    ratingStars: "",
    checkIcon: "",
    stockIcon: "",
    deliveryIcon: "",
    faqIcon: "",
    paymentIcons: "",
    guaranteeBadge: "",
    testimonialProduct: "",
    testimonialAvatar: "",
    verifiedIcon: "",
  },
  finalCta: { icon: "", guaranteeIcon: "" },
  footer: { logo: "" },
};
