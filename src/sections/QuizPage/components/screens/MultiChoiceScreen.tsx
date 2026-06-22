import React from "react"

type Option = { emoji: string; label: string }
type Screen = { question: string; subtitle?: string; options: Option[] }

export function MultiChoiceScreen({ screen, selected, onToggle }: { screen: Screen; selected: string[]; onToggle: (v: string) => void }): React.JSX.Element {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h2 className="text-[22px] font-bold text-neutral-950 mb-2 text-center">{screen.question}</h2>
      {screen.subtitle && <p className="text-center text-neutral-500 text-sm mb-6">{screen.subtitle}</p>}
      <div className="space-y-3 max-w-[400px] mx-auto">
        {screen.options.map(opt => {
          const active = selected.includes(opt.label)
          return (
            <button
              key={opt.label}
              onClick={() => onToggle(opt.label)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-150 ${
                active ? "border-emerald-400 bg-emerald-50" : "border-gray-200 bg-white hover:border-emerald-300"
              }`}
            >
              <span className="text-2xl">{opt.emoji}</span>
              <span className="text-left text-neutral-800 font-medium flex-1">{opt.label}</span>
              <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${active ? "border-emerald-400 bg-emerald-400" : "border-gray-300"}`}>
                {active && <span className="text-white text-xs">✓</span>}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
