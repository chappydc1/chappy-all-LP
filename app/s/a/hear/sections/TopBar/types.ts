export type FeatureItem = {
  title: string
  desc: string
  sup: string | null
}

export type ReviewItem = {
  title: string
  body: string
  author: string
}

export type StoryItem = {
  category: string
  description: string
  linkHref: string
}

export type FooterLink = {
  label: string
  href: string
}

export type StateItem = {
  name: string
}

export type VideoItem = {
  description: string
}

export type AdvertorialContent = {
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
  videos: VideoItem[]
  featuresList: {
    heading: string
    paragraphs: string[]
    featuresSubheading: string
    featuresSubheadingBody: string
    features: FeatureItem[]
  }
  stateSelector: {
    heading: string
    paragraphs: string[]
    stateSelectorLabel: string
    stateAvailableMessage: string
    stateAvailableCta: string
    dontSeeStateText: string
    states: StateItem[]
    reviewsHeading: string
    reviewsSubheadingHighlight: string
    reviewsSubheadingBody: string
    reviews: ReviewItem[]
  }
  relatedStories: {
    label: string
    stories: StoryItem[]
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
    footerLinks: FooterLink[]
    copyrightYear: string
    logoAlt: string
  }
  footer: {
    text: string
  }
}

export type StateMediaItem = {
  name: string
  imgSrc: string
}

export type AdvertorialMedia = {
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
    states: StateMediaItem[]
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
