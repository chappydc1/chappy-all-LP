import React from "react"

type Option = { imageKey: string; label: string }
type Screen = { question: string; subtitle?: string; options: Option[] }
type MediaData = Record<string, string | Record<string, string>>

export function ImageMultiScreen({ screen, media, selected, onToggle }: { screen: Screen; media: MediaData; selected: string[]; onToggle: (v: string) => void }): React.JSX.Element {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h2 className="text-[22px] font-bold text-neutral-950 mb-2 text-center">{screen.question}</h2>
      {screen.subtitle && <p className="text-center text-neutral-500 text-sm mb-6">{screen.subtitle}</p>}
      <div className="grid grid-cols-2 gap-3 max-w-[500px] mx-auto">
        {screen.options.map(opt => {
          const active = selected.includes(opt.label)
          return (
            <button
              key={opt.label}
              onClick={() => onToggle(opt.label)}
              className={`rounded-2xl border-2 overflow-hidden transition-all duration-150 relative ${
                active ? "border-emerald-400" : "border-gray-200 hover:border-emerald-300"
              }`}
            >
              {active && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center z-10">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
              <img src={media[opt.imageKey] as string} alt={opt.label} className="w-full object-cover" />
              <div className={`py-2 text-center font-medium text-sm ${active ? "bg-emerald-50 text-emerald-700" : "bg-white text-neutral-700"}`}>
                {opt.label}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
