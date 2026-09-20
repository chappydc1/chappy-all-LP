export type IconKey = "skin" | "stars" | "hydration" | "all"

export type SingleSelectOption = {
  value: string
  label: string
  emoji?: string
  icon?: IconKey
}

export type SingleSelectStep = {
  type: "single-select"
  optionStyle: "text" | "emoji" | "icon"
  heading: string
  highlightedHeading?: string
  subheading?: string
  chooseLabel?: string
  options: SingleSelectOption[]
}

export type MultiSelectImageOption = {
  value: string
  label: string
  image: string
}

export type MultiSelectImageStep = {
  type: "multi-select-image"
  heading: string
  continueLabel: string
  options: MultiSelectImageOption[]
}

export type AgingLevel = "low" | "normal" | "medium" | "high"

export type SummaryStep = {
  type: "summary"
  heading: string
  continueLabel: string
  gaugeLabels: Record<AgingLevel, string>
  warningBody: Record<AgingLevel, string>
  statCards: {
    agingType: { label: string }
    room: { label: string }
    trigger: { label: string }
    impact: { label: string }
  }
}

export type ChartStep = {
  type: "chart"
  heading: string
  headingAccent: string
  subheading: string
  continueLabel: string
  goalLabel: string
  barColors: string[]
  barHeights: number[]
}

export type InfoStep = {
  type: "info"
  heading: string
  bodyHtml: string
  image: string
  continueLabel: string
}

export type LoadingStepStage = {
  activeLabel: string
  doneLabel: string
  popupQuestion: string
}

export type LoadingStep = {
  type: "loading"
  heading: string
  highlightedHeading: string
  suffixHeading: string
  stages: LoadingStepStage[]
  popup: {
    eyebrow: string
    noLabel: string
    yesLabel: string
  }
  ctaLabel: string
  ctaUrl: string
}

export type QuizStep =
  | SingleSelectStep
  | MultiSelectImageStep
  | SummaryStep
  | ChartStep
  | InfoStep
  | LoadingStep

export const STEP_ORDER = [
  "age",
  "concern",
  "goal",
  "coffee",
  "showers",
  "shaving",
  "smoke",
  "drink",
  "sun",
  "stress",
  "sleep2",
  "other",
  "summary",
  "chart",
  "didYouKnow",
  "final",
] as const

export type StepId = (typeof STEP_ORDER)[number]

export type AdvContent = {
  header: {
    logoAlt: string
    backButtonAlt: string
  }
  consent: {
    prefix: string
    termsLabel: string
    middle: string
    privacyLabel: string
    termsHref: string
    privacyHref: string
  }
  steps: Record<StepId, QuizStep>
}

export type AdvMedia = {
  headerLogo: string
  headerBackIcon: string
  concern: Record<string, string>
  summary: Record<string, string>
  didYouKnow: string
}

export type QuizAnswers = Partial<Record<StepId, string | string[]>>
