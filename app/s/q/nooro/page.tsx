import React from "react"
import { QuizEngine } from "../../../../src/sections/QuizPage/QuizEngine"
import type { AdvData, AdvScreen } from "../../../../src/sections/QuizPage/QuizEngine"
import copy from "./copy.json"
import links from "./links.json"
import media from "./media.json"

type QuizStepKey = keyof typeof copy.quiz

type QuizStepFlow = {
  key: QuizStepKey
  id: string
  type: string
  imageKey?: string
  optionImageKeys?: string[]
  stepDurations?: number[]
  autoAdvance?: boolean
}

const QUIZ_FLOW: QuizStepFlow[] = [
  { key: "ageSelect", id: "age-select", type: "age-select" },
  { key: "lymphaticProblem", id: "lymphatic-info", type: "info" },
  { key: "triedProgram", id: "tried-program", type: "single" },
  { key: "rootCauseSolution", id: "root-cause-info", type: "info-image", imageKey: "programImage" },
  { key: "goodHands", id: "good-hands-info", type: "info-image", imageKey: "goodHandsImage" },
  { key: "mainGoal", id: "main-goal", type: "single" },
  { key: "motivationProof", id: "motivation-info", type: "info-image", imageKey: "barbaraImage" },
  { key: "otherGoals", id: "other-goals", type: "multi" },
  {
    key: "swellingLevel",
    id: "swelling-level",
    type: "image-single",
    optionImageKeys: ["swellingLight", "swellingModerate", "swellingHeavy", "swellingSevere"],
  },
  {
    key: "dreamLegs",
    id: "dream-legs",
    type: "image-single",
    optionImageKeys: ["legsNormal", "legsSlim", "legsToned"],
  },
  {
    key: "creatingProfile",
    id: "creating-profile",
    type: "loading",
    stepDurations: [1200, 1000, 800],
    autoAdvance: true,
  },
  { key: "symptomOnset", id: "onset", type: "single" },
  { key: "swellingPattern", id: "swelling-pattern", type: "single" },
  {
    key: "solutionsTried",
    id: "solutions-tried",
    type: "image-multi",
    optionImageKeys: ["solCompression", "solCreams", "solDiuretics", "solExercises"],
  },
  { key: "failedSolutions", id: "solutions-info", type: "info" },
  {
    key: "concernAreas",
    id: "concern-areas",
    type: "image-multi",
    optionImageKeys: ["areaAnkle", "areaCalves", "areaKnee", "areaThighs"],
  },
  { key: "exerciseFrequency", id: "exercise-frequency", type: "single" },
  { key: "breathlessness", id: "breathlessness", type: "single" },
  { key: "walkFrequency", id: "walk-frequency", type: "single" },
  {
    key: "struggles",
    id: "struggles",
    type: "image-multi",
    optionImageKeys: ["struggleStanding", "struggleSitting", "struggleWalking", "struggleLying"],
  },
  {
    key: "symptoms",
    id: "symptoms",
    type: "image-multi",
    optionImageKeys: ["symptomColdFeet", "symptomVaricose", "symptomCramps", "symptomNumbness"],
  },
  { key: "workSchedule", id: "work-schedule", type: "single" },
  { key: "typicalDay", id: "typical-day", type: "single" },
  { key: "energyLevel", id: "energy-level", type: "single" },
  { key: "waterIntake", id: "water-intake", type: "single" },
  { key: "sleep", id: "sleep", type: "single" },
  { key: "contributingEvents", id: "contributing-events", type: "multi" },
  { key: "mainReason", id: "main-reason", type: "single" },
  { key: "height", id: "height", type: "height" },
  { key: "currentWeight", id: "current-weight", type: "weight" },
  { key: "goalWeight", id: "goal-weight", type: "weight" },
  { key: "ageNumber", id: "age-number", type: "age-number" },
  { key: "healthScore", id: "health-score", type: "health-score" },
  { key: "confidence", id: "confidence", type: "single" },
  { key: "prediction", id: "prediction", type: "prediction" },
  {
    key: "creatingPlan",
    id: "creating-plan",
    type: "loading",
    stepDurations: [1500, 1200],
    imageKey: "planImage",
    autoAdvance: true,
  },
  { key: "emailCapture", id: "email", type: "email" },
]

function buildScreen(flow: QuizStepFlow): AdvScreen {
  const stepCopy: Record<string, unknown> = { ...copy.quiz[flow.key] }
  const screen: AdvScreen = { id: flow.id, type: flow.type, ...stepCopy }
  if (flow.imageKey) {
    screen.imageKey = flow.imageKey
  }
  if (flow.autoAdvance) {
    screen.autoAdvance = flow.autoAdvance
  }
  if (flow.stepDurations) {
    const labels = stepCopy.steps as string[]
    screen.steps = labels.map((label, index) => ({ label, duration: flow.stepDurations?.[index] }))
  }
  if (flow.optionImageKeys) {
    const labels = stepCopy.options as string[]
    screen.options = labels.map((label, index) => ({ imageKey: flow.optionImageKeys?.[index], label }))
  }
  if (flow.type === "age-select") {
    screen.legal = {
      action: copy.quiz.ageSelect.legal.action,
      termsUrl: links.terms,
      privacyUrl: links.privacy,
    }
  }
  if (flow.type === "email") {
    screen.privacyUrl = links.privacy
  }
  return screen
}

const adv: AdvData = {
  logo: { src: media.logo, alt: copy.header.logoAlt },
  stats: copy.socialProof,
  screens: QUIZ_FLOW.map(buildScreen),
}

export default function NooroQuizPage(): React.JSX.Element {
  return <QuizEngine adv={adv} media={media} />
}
