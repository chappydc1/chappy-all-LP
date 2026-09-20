import type { AgingLevel, QuizAnswers } from "@/sections/ForgeQuizPage/types"

const AGE_POINTS: Record<string, number> = {
  "30-39": 0,
  "40-49": 1,
  "50-59": 2,
  "60+": 3,
}

const SUN_POINTS: Record<string, number> = {
  "constant-sun": 3,
  "some-sun": 2,
  "little-sun": 1,
  "minimal-sun": 0,
}

const SMOKE_POINTS: Record<string, number> = {
  rarely: 1,
  often: 3,
  quit: 1,
  never: 0,
}

const DRINK_POINTS: Record<string, number> = {
  "light-drinker": 1,
  "heavy-drinker": 2,
  "daily-drinker": 3,
  quit: 1,
  "non-drinker": 0,
}

const STRESS_POINTS: Record<string, number> = {
  constant: 3,
  frequent: 2,
  sometimes: 1,
  rarely: 0,
}

const SLEEP_POINTS: Record<string, number> = {
  "8-plus": 0,
  "6-7": 1,
  "under-6": 2,
}

const COFFEE_POINTS: Record<string, number> = {
  "1-cup": 0,
  "2-3-cups": 1,
  "4-plus-cups": 2,
  none: 0,
}

const SHOWER_POINTS: Record<string, number> = {
  hot: 1,
  warm: 0,
  cold: 0,
}

const OTHER_POINTS: Record<string, number> = {
  disappointed: 1,
  improvements: 0,
  "never-tried": 1,
  ready: 1,
}

const MAX_SCORE = 21

export type AgingProfile = {
  level: AgingLevel
  gaugePercent: number
  agingType: "Extrinsic" | "Intrinsic"
  trigger: string
  room: string
  impact: string
}

const answerValue = (answers: QuizAnswers, key: string): string => {
  const value = answers[key as keyof QuizAnswers]
  return typeof value === "string" ? value : ""
}

const levelFromScore = (score: number): AgingLevel => {
  if (score <= 5) return "low"
  if (score <= 10) return "normal"
  if (score <= 15) return "medium"
  return "high"
}

const LEVEL_LABEL: Record<AgingLevel, string> = {
  low: "Low",
  normal: "Normal",
  medium: "Medium",
  high: "High",
}

const IMPACT_LABEL: Record<AgingLevel, string> = {
  low: "Minimal",
  normal: "Mild",
  medium: "Visible",
  high: "Noticeable",
}

export const computeAgingProfile = (answers: QuizAnswers): AgingProfile => {
  const ageScore = AGE_POINTS[answerValue(answers, "age")] ?? 0
  const sunScore = SUN_POINTS[answerValue(answers, "sun")] ?? 0
  const smokeScore = SMOKE_POINTS[answerValue(answers, "smoke")] ?? 0
  const drinkScore = DRINK_POINTS[answerValue(answers, "drink")] ?? 0
  const stressScore = STRESS_POINTS[answerValue(answers, "stress")] ?? 0
  const sleepScore = SLEEP_POINTS[answerValue(answers, "sleep2")] ?? 0
  const coffeeScore = COFFEE_POINTS[answerValue(answers, "coffee")] ?? 0
  const showerScore = SHOWER_POINTS[answerValue(answers, "showers")] ?? 0
  const otherScore = OTHER_POINTS[answerValue(answers, "other")] ?? 0

  const lifestyleScore = sunScore + smokeScore + drinkScore + stressScore + sleepScore
  const totalScore =
    ageScore + lifestyleScore + coffeeScore + showerScore + otherScore

  const level = levelFromScore(totalScore)

  const triggers: Array<[string, number]> = [
    ["Stress", stressScore],
    ["Sun Exposure", sunScore],
    ["Sleep", sleepScore],
    ["Smoking", smokeScore],
    ["Alcohol", drinkScore],
  ]
  const trigger = triggers.reduce((best, current) => (current[1] > best[1] ? current : best))[0]

  const agingType: "Extrinsic" | "Intrinsic" = lifestyleScore >= ageScore * 2 ? "Extrinsic" : "Intrinsic"

  return {
    level,
    gaugePercent: Math.min(95, Math.max(5, (totalScore / MAX_SCORE) * 100)),
    agingType,
    trigger,
    room: LEVEL_LABEL[level],
    impact: IMPACT_LABEL[level],
  }
}
