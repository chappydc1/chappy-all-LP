import React from "react"

type Screen = { heading: string }
type QuizAnswers = Record<string, string | string[]>

export function PredictionScreen({ screen, answers }: { screen: Screen; answers: QuizAnswers }): React.JSX.Element {
  const today = new Date()
  const target = new Date(today)
  target.setDate(today.getDate() + 28)
  const targetStr = target.toLocaleDateString("en-US", { month: "short", day: "numeric" })

  const swelling = answers["swelling-level"] as string ?? "Moderate"
  const dream = answers["dream-legs"] as string ?? "Normal"

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-neutral-950 mb-6 text-center">{screen.heading}</h2>

      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <p className="text-neutral-700 mb-4 text-center">
          We predict you'll have <strong>mild to reduced edema</strong> by <strong>{targetStr}</strong>
        </p>

        <div className="relative h-32 bg-gradient-to-b from-red-50 to-emerald-50 rounded-xl overflow-hidden mb-4">
          <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
            <path d="M 0 80 C 80 75, 140 60, 200 40 C 240 25, 270 15, 300 10" stroke="url(#lineGrad)" strokeWidth="3" fill="none" />
            <circle cx="0" cy="80" r="5" fill="#f87171" />
            <circle cx="300" cy="10" r="5" fill="#34d399" />
          </svg>
          <div className="absolute bottom-2 left-3 text-xs text-neutral-500">Now · {swelling}</div>
          <div className="absolute top-2 right-3 text-xs text-emerald-600 font-semibold">{targetStr} · {dream}</div>
        </div>

        <p className="text-xs text-neutral-400 text-center italic">
          *Based on the data of users who follow their course in the app. Consult your physician first. The chart is a non-customized illustration and results may vary.
        </p>
      </div>
    </div>
  )
}
