import React from "react"

type Screen = { heading: string; sectionTitle: string }
type MediaData = Record<string, string | Record<string, string>>
type QuizAnswers = Record<string, string | string[]>

const severityScore: Record<string, number> = { Light: 3, Moderate: 6, Heavy: 9, Severe: 13 }

export function HealthScoreScreen({ screen, answers, media }: { screen: Screen; answers: QuizAnswers; media: MediaData }): React.JSX.Element {
  const swelling = answers["swelling-level"] as string ?? "Moderate"
  const dreamLegs = answers["dream-legs"] as string ?? "Normal"
  const score = severityScore[swelling] ?? 6
  const pct = (score / 16) * 100

  const beforeImg = (media["beforeImages"] as Record<string, string>)?.[swelling]
  const afterImg = (media["afterImages"] as Record<string, string>)?.[dreamLegs]
  const arrow = media["beforeArrow"] as string

  const label = score <= 4 ? "Mild" : score <= 8 ? "Moderate" : score <= 12 ? "High" : "Severe"
  const desc = score <= 4
    ? "Mild edema may cause minor discomfort and swelling. Monitor and consult a healthcare professional if symptoms persist or worsen."
    : score <= 8
    ? "Moderate edema can cause noticeable swelling and discomfort. A personalized plan can help significantly reduce symptoms."
    : "Severe edema requires targeted intervention. Your personalized plan will address the root causes effectively."

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-neutral-950 mb-6 text-center">{screen.heading}</h2>

      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-neutral-800 mb-4">{screen.sectionTitle}</h3>
        <div className="relative mb-2">
          <div className="h-3 rounded-full bg-gradient-to-r from-emerald-300 via-yellow-300 to-red-500" />
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white border-2 border-neutral-700 rounded-full shadow"
            style={{ left: `${pct}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-neutral-400 mb-4">
          <span>Mild</span><span>Moderate</span><span>High</span><span>Severe</span>
        </div>
        <p className="text-neutral-600 text-sm mb-4">{desc}</p>

        <div className="grid grid-cols-2 gap-3 text-sm mb-4">
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-neutral-400 text-xs">Swelling Severity</p>
            <p className="font-semibold text-neutral-800">{label}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-neutral-400 text-xs">Goal</p>
            <p className="font-semibold text-neutral-800">{dreamLegs}</p>
          </div>
        </div>

        {beforeImg && afterImg && (
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <img src={beforeImg} alt="Before" className="h-28 object-contain mx-auto" />
            </div>
            <img src={arrow} alt="" className="h-6 w-auto" />
            <div className="text-center">
              <img src={afterImg} alt="After" className="h-28 object-contain mx-auto" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
