"use client"

import React, { useState } from "react"

type Screen = { question: string }

export function AgeNumberScreen({ screen, value, onChange }: { screen: Screen; value: string; onChange: (v: string) => void }): React.JSX.Element {
  const [age, setAge] = useState(value ?? "")

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h2 className="text-[22px] font-bold text-neutral-950 mb-6 text-center">{screen.question}</h2>
      <div className="max-w-[360px] mx-auto">
        <input
          type="number"
          min="18"
          max="100"
          value={age}
          placeholder="45"
          onChange={e => { setAge(e.target.value); onChange(e.target.value) }}
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center text-2xl font-semibold focus:border-emerald-400 outline-none"
        />
        <button
          onClick={() => age && onChange(age)}
          className="w-full mt-4 py-4 rounded-full font-semibold text-white bg-emerald-400 hover:bg-emerald-500 transition-all active:scale-95"
        >
          NEXT STEP
        </button>
      </div>
    </div>
  )
}
