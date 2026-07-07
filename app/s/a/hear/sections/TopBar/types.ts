export type HearFeatureItem = {
  title: string
  desc: string
  sup: string | null
}

export type HearReviewItem = {
  title: string
  body: string
  author: string
}

export type HearStoryItem = {
  category: string
  description: string
  linkHref: string
}

export type HearFooterLink = {
  label: string
  href: string
}

export type HearStateItem = {
  name: string
}

export type HearVideoItem = {
  description: string
}

export type HearAdvertorialContent = {
  meta: {
    title: string
    description: string
  }
  header: {
    logoAlt: string
    advertorialLabel: string
    sectionLabel: string
    featuredOnLabel: string
    featuredOnLogosAlt: string
  }
  articleIntro: {
    heading: string
    byline: string
    paragraphs: string[]
  }
  mediaBlock: {
    imageAlt: string
    caption: string
  }
  articleSection: {
    heading: string
    paragraphs: string[]
  }
  videos: HearVideoItem[]
  featuresList: {
    heading: string
    paragraphs: string[]
    featuresSubheading: string
    featuresSubheadingBody: string
    features: HearFeatureItem[]
  }
  stateSelector: {
    heading: string
    paragraphs: string[]
    stateSelectorLabel: string
    stateAvailableMessage: string
    stateAvailableCta: string
    dontSeeStateText: string
    states: HearStateItem[]
    reviewsHeading: string
    reviewsSubheadingHighlight: string
    reviewsSubheadingBody: string
    reviews: HearReviewItem[]
  }
  relatedStories: {
    label: string
    stories: HearStoryItem[]
  }
  newsletter: {
    curiosityLabel: string
    freeGuideLabel: string
    emailPlaceholder: string
    subscribeLabel: string
    successMessage: string
    errorMessage: string
    disclaimer: string
    companyDescription: string
    footnotes: string[]
    footerLinks: HearFooterLink[]
    copyrightYear: string
    logoAlt: string
  }
  footer: {
    text: string
  }
}

export type HearStateMediaItem = {
  name: string
  imgSrc: string
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
    states: HearStateMediaItem[]
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
