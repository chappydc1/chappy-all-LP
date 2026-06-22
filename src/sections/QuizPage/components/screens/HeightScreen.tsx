"use client"

import React, { useState } from "react"

type Screen = { question: string; note?: string }

export function HeightScreen({ screen, value, onChange }: { screen: Screen; value: string; onChange: (v: string) => void }): React.JSX.Element {
  const [unit, setUnit] = useState<"ft" | "cm">("ft")
  const [ft, setFt] = useState("5")
  const [inches, setInches] = useState("6")
  const [cm, setCm] = useState("168")

  const update = (newFt: string, newIn: string, newCm: string, u: "ft" | "cm") => {
    const display = u === "ft" ? `${newFt}ft ${newIn}in` : `${newCm}cm`
    onChange(display)
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h2 className="text-[22px] font-bold text-neutral-950 mb-6 text-center">{screen.question}</h2>
      <div className="max-w-[360px] mx-auto">
        <div className="flex bg-gray-100 rounded-full p-1 mb-6">
          {(["ft", "cm"] as const).map(u => (
            <button key={u} onClick={() => { setUnit(u); update(ft, inches, cm, u) }}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition-all ${unit === u ? "bg-white shadow text-neutral-900" : "text-neutral-500"}`}
            >{u}</button>
          ))}
        </div>
        {unit === "ft" ? (
          <div className="flex gap-4 justify-center">
            <div className="flex-1">
              <label className="block text-xs text-neutral-500 mb-1 text-center">ft</label>
              <input type="number" min="3" max="8" value={ft}
                onChange={e => { setFt(e.target.value); update(e.target.value, inches, cm, "ft") }}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center text-lg font-semibold focus:border-emerald-400 outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-neutral-500 mb-1 text-center">in</label>
              <input type="number" min="0" max="11" value={inches}
                onChange={e => { setInches(e.target.value); update(ft, e.target.value, cm, "ft") }}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center text-lg font-semibold focus:border-emerald-400 outline-none"
              />
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-xs text-neutral-500 mb-1 text-center">cm</label>
            <input type="number" min="100" max="250" value={cm}
              onChange={e => { setCm(e.target.value); update(ft, inches, e.target.value, "cm") }}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center text-lg font-semibold focus:border-emerald-400 outline-none"
            />
          </div>
        )}
        {screen.note && (
          <p className="text-neutral-500 text-xs text-center mt-6">{screen.note}</p>
        )}
      </div>
    </div>
  )
}
