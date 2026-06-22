import React from "react"

type Screen = { id: string; question: string; questionBold: string; titleDesktop: string; titleMobileParts: string[]; subtitle: string; options: string[]; legal: { action: string; termsUrl: string; privacyUrl: string } }
type Stats = { startingDate: string; peopleJoined: string }

export function AgeSelectScreen({ screen, stats, onSelect }: { screen: Screen; stats: Stats; onSelect: (v: string) => void }): React.JSX.Element {
  return (
    <div className="w-full">
      <div className="text-center p-5 text-black">
        <strong>📍 Starting date:</strong> {stats.startingDate}<br /><br />
        <strong>🔥 People joined:</strong> {stats.peopleJoined}
      </div>

      <div className="hidden md:block text-center px-4 pb-1 max-w-[800px] mx-auto">
        <h2 className="text-[28px] font-black leading-tight text-neutral-950">{screen.titleDesktop}</h2>
      </div>
      <div className="block md:hidden text-center px-4 pb-1 max-w-[800px] mx-auto">
        {screen.titleMobileParts.map((part, i) => (
          <h1 key={i} className="text-[38px] font-black leading-tight text-neutral-950">{part}</h1>
        ))}
      </div>

      <div className="text-center px-4 pb-2 max-w-[800px] mx-auto">
        <p className="text-zinc-400 text-xs mt-1">{screen.subtitle}</p>
      </div>

      <div className="text-center px-4 py-4 max-w-[800px] mx-auto">
        <h4 className="text-neutral-600 text-[22px] md:text-[19px] font-inter">
          {screen.question} <strong className="font-bold">{screen.questionBold}</strong>
        </h4>
      </div>

      <div className="flex flex-wrap justify-center px-4 max-w-[400px] mx-auto pb-4">
        {screen.options.map(opt => (
          <div key={opt} className="basis-full pb-2.5 px-2.5">
            <button
              onClick={() => onSelect(opt)}
              className="w-full bg-emerald-300 border border-emerald-300 rounded-2xl p-[21.6px] flex items-center justify-center hover:bg-emerald-400 active:scale-95 transition-all duration-150"
            >
              <span className="text-white text-2xl font-semibold text-center">{opt}</span>
            </button>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 my-2 max-w-[800px] mx-auto" />

      <div className="text-center px-4 py-4 max-w-[800px] mx-auto">
        <p className="text-neutral-950 leading-[21.6px] my-2 font-inter text-sm">
          By <strong>selecting your age and continuing</strong> you agree to our{" "}
          <a href={screen.legal.termsUrl} className="underline font-bold">Terms of Service</a>
          {" | "}
          <a href={screen.legal.privacyUrl} className="underline font-bold">Privacy Policy</a>
        </p>
        <p className="text-neutral-950 text-sm">Please review before continuing</p>
      </div>
    </div>
  )
}
