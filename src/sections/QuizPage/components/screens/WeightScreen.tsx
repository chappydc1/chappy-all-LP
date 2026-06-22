"use client"

import React, { useState } from "react"

type Screen = { question: string; subtitle?: string }

export function WeightScreen({ screen, value, onChange }: { screen: Screen; value: string; onChange: (v: string) => void }): React.JSX.Element {
  const [unit, setUnit] = useState<"lbs" | "kg">("lbs")
  const [weight, setWeight] = useState("")

  const update = (w: string, u: "lbs" | "kg") => onChange(`${w}${u}`)

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h2 className="text-[22px] font-bold text-neutral-950 mb-2 text-center">{screen.question}</h2>
      {screen.subtitle && <p className="text-center text-neutral-500 text-sm mb-6">{screen.subtitle}</p>}
      <div className="max-w-[360px] mx-auto">
        <div className="flex bg-gray-100 rounded-full p-1 mb-6">
          {(["lbs", "kg"] as const).map(u => (
            <button key={u} onClick={() => { setUnit(u); update(weight, u) }}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${unit === u ? "bg-white shadow text-neutral-900" : "text-neutral-500"}`}
            >{u}</button>
          ))}
        </div>
        <label className="block text-xs text-neutral-500 mb-1 text-center">{unit}</label>
        <input
          type="number"
          min="50"
          max="500"
          value={weight}
          placeholder={unit === "lbs" ? "150" : "68"}
          onChange={e => { setWeight(e.target.value); update(e.target.value, unit) }}
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center text-lg font-semibold focus:border-emerald-400 outline-none"
        />
      </div>
    </div>
  )
}
