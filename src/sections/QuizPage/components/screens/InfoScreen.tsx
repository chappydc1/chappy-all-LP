import React from "react"

type Screen = { heading: string; body?: string; bullets?: string[]; footer?: string; buttonLabel?: string }

function renderMarkdown(text: string): React.JSX.Element {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return (
    <>
      {parts.map((p, i) => i % 2 === 1 ? <strong key={i}>{p}</strong> : <React.Fragment key={i}>{p}</React.Fragment>)}
    </>
  )
}

export function InfoScreen({ screen }: { screen: Screen }): React.JSX.Element {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-neutral-950 mb-4">{screen.heading}</h2>
      {screen.body && (
        <p className="text-neutral-700 mb-4 leading-relaxed">{renderMarkdown(screen.body)}</p>
      )}
      {screen.bullets && (
        <ul className="mb-4 space-y-2">
          {screen.bullets.map((b, i) => (
            <li key={i} className="text-neutral-700">{b}</li>
          ))}
        </ul>
      )}
      {screen.footer && (
        <p className="text-neutral-700 leading-relaxed">{renderMarkdown(screen.footer)}</p>
      )}
    </div>
  )
}
