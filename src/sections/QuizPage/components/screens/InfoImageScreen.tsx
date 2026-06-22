import React from "react"

type Screen = { heading: string; body?: string; footer?: string; imageKey?: string }
type MediaData = Record<string, string | Record<string, string>>

function renderMarkdown(text: string): React.JSX.Element {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return (
    <>
      {parts.map((p, i) => i % 2 === 1 ? <strong key={i}>{p}</strong> : <React.Fragment key={i}>{p.split("\n\n").flatMap((chunk, j, arr) => j < arr.length - 1 ? [chunk, <br key={`br-${j}`} />, <br key={`br2-${j}`} />] : [chunk])}</React.Fragment>)}
    </>
  )
}

export function InfoImageScreen({ screen, media }: { screen: Screen; media: MediaData }): React.JSX.Element {
  const imgSrc = screen.imageKey ? (media[screen.imageKey] as string) : undefined
  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-neutral-950 mb-4">{screen.heading}</h2>
      {screen.body && (
        <p className="text-neutral-700 mb-4 leading-relaxed">{renderMarkdown(screen.body)}</p>
      )}
      {imgSrc && (
        <div className="rounded-xl overflow-hidden mb-4">
          <img src={imgSrc} alt="" className="w-full object-cover" />
        </div>
      )}
      {screen.footer && (
        <p className="text-neutral-700 leading-relaxed">{renderMarkdown(screen.footer)}</p>
      )}
    </div>
  )
}
