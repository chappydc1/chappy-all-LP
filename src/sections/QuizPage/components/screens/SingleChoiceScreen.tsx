import React from "react"

type Option = { emoji: string; label: string }
type Screen = { question: string; options: Option[] }

export function SingleChoiceScreen({ screen, selected, onSelect }: { screen: Screen; selected: string; onSelect: (v: string) => void }): React.JSX.Element {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h2 className="text-[22px] font-bold text-neutral-950 mb-6 text-center">{screen.question}</h2>
      <div className="space-y-3 max-w-[400px] mx-auto">
        {screen.options.map(opt => (
          <button
            key={opt.label}
            onClick={() => onSelect(opt.label)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-150 active:scale-95 ${
              selected === opt.label
                ? "border-emerald-400 bg-emerald-50"
                : "border-gray-200 bg-white hover:border-emerald-300"
            }`}
          >
            <span className="text-2xl">{opt.emoji}</span>
            <span className="text-left text-neutral-800 font-medium">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
