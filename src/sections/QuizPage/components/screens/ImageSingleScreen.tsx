import React from "react"

type Option = { imageKey: string; label: string }
type Screen = { question: string; options: Option[] }
type MediaData = Record<string, string | Record<string, string>>

export function ImageSingleScreen({ screen, media, selected, onSelect }: { screen: Screen; media: MediaData; selected: string; onSelect: (v: string) => void }): React.JSX.Element {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h2 className="text-[22px] font-bold text-neutral-950 mb-6 text-center">{screen.question}</h2>
      <div className="grid grid-cols-2 gap-3 max-w-[500px] mx-auto">
        {screen.options.map(opt => (
          <button
            key={opt.label}
            onClick={() => onSelect(opt.label)}
            className={`rounded-2xl border-2 overflow-hidden transition-all duration-150 active:scale-95 ${
              selected === opt.label ? "border-emerald-400" : "border-gray-200 hover:border-emerald-300"
            }`}
          >
            <img src={media[opt.imageKey] as string} alt={opt.label} className="w-full object-cover" />
            <div className={`py-2 text-center font-medium text-sm ${selected === opt.label ? "bg-emerald-50 text-emerald-700" : "bg-white text-neutral-700"}`}>
              {opt.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
