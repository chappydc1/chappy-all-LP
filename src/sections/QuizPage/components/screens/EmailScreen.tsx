"use client"

import React, { useState } from "react"

type Screen = { heading: string; subheading: string; privacy: string; privacyUrl: string; submitLabel: string }
type QuizAnswers = Record<string, string | string[]>

export function EmailScreen({ screen, answers }: { screen: Screen; answers: QuizAnswers }): React.JSX.Element {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = () => {
    if (!isValid) { setError("Please enter a valid email address"); return }
    setError("")
    setSubmitted(true)
    window.location.href = "https://nooro-us.com/products/nrx?email=" + encodeURIComponent(email)
  }

  if (submitted) {
    return (
      <div className="max-w-[800px] mx-auto px-4 py-16 text-center">
        <p className="text-2xl font-bold text-emerald-500 mb-4">✓ Plan Ready!</p>
        <p className="text-neutral-600">Redirecting you to your personalized plan...</p>
      </div>
    )
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-neutral-950 mb-2 text-center">{screen.heading}</h2>
      <p className="text-center text-neutral-600 mb-8">{screen.subheading}</p>

      <div className="max-w-[400px] mx-auto">
        <input
          type="email"
          value={email}
          placeholder="Email address"
          onChange={e => { setEmail(e.target.value); setError("") }}
          className={`w-full border-2 rounded-xl px-4 py-3 text-base focus:outline-none mb-3 ${error ? "border-red-400" : "border-gray-200 focus:border-emerald-400"}`}
        />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full py-4 rounded-full font-semibold text-white bg-emerald-400 hover:bg-emerald-500 transition-all active:scale-95"
        >
          {screen.submitLabel}
        </button>

        <p className="text-xs text-neutral-400 text-center mt-4">
          {screen.privacy}{" "}
          <a href={screen.privacyUrl} className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  )
}
