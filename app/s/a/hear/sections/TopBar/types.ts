export type HearFeatureItem = {
  title: string
  description: string
  sup?: string
}

export type HearReviewItem = {
  title: string
  body: string
  author: string
}

export type HearStoryItem = {
  category: string
  description: string
}

export type HearAdvertorialContent = {
  seo: {
    title: string
    description: string
  }
  nav: {
    logoAlt: string
    advertorialLabel: string
    sectionLabel: string
  }
  featuredOn: {
    label: string
    logosAlt: string
  }
  hero: {
    headline: string
    byline: string
  }
  lead: {
    body: string[]
  }
  productReveal: {
    imageAlt: string
    caption: string
  }
  discovery: {
    headline: string
    body: string[]
  }
  demoVideo: {
    caption: string
  }
  mechanism: {
    headline: string
    body: string[]
  }
  features: {
    headline: string
    subheadline: string
    items: HearFeatureItem[]
  }
  socialProofVideo: {
    caption: string
  }
  offer: {
    headline: string
    body: string[]
  }
  stateSelector: {
    label: string
    availableMessage: string
    availableCtaText: string
    notListedText: string
    states: string[]
  }
  reviews: {
    headline: string
    subheadlineHighlight: string
    subheadline: string
    items: HearReviewItem[]
  }
  relatedStories: {
    label: string
    items: HearStoryItem[]
  }
  newsletter: {
    logoAlt: string
    curiosityLabel: string
    freeGuideLabel: string
    emailPlaceholder: string
    ctaText: string
    successMessage: string
    errorMessage: string
    disclaimer: string
  }
  footer: {
    about: string
    footnotes: string[]
    links: string[]
    copyrightYear: string
    tagline: string
  }
}

export type HearAdvertorialMedia = {
  header: {
    logoSrc: string
    heroImageSrc: string
    heroImageAlt: string
    featuredOnLogosSrc: string
  }
  mediaBlock: {
    imageSrc: string
  }
  videos: Array<{
    poster: string
    src: string
  }>
  featuresList: {
    checkmarkIconSrc: string
  }
  stateSelector: {
    states: string[]
    doubleArrowSrc: string
    trustLogosSrc: string
    trustLogosAlt: string
    starsImageSrc: string
  }
  relatedStories: {
    stories: Array<{ imageSrc: string }>
  }
  newsletter: {
    logoSrc: string
    logoAlt: string
  }
}
