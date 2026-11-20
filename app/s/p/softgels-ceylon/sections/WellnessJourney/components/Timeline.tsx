"use client"

import { useEffect, useRef, useState } from "react"

type Step = {
  label: string
  bullets: string[]
}

export function Timeline({ steps }: { steps: Step[] }): React.JSX.Element {
  const stepsRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState<boolean[]>(() => steps.map(() => false))

  useEffect(() => {
    let frame = 0

    const update = (): void => {
      const stepsEl = stepsRef.current
      if (!stepsEl) {
        return
      }
      const rect = stepsEl.getBoundingClientRect()
      const startTrigger = window.innerHeight * 0.7
      const next = Math.max(0, Math.min((startTrigger - rect.top) / rect.height, 1))
      const fillPx = next * rect.height
      setProgress(next)
      setActive(
        dotRefs.current.map((dot) => {
          if (!dot) {
            return false
          }
          const dotRect = dot.getBoundingClientRect()
          return fillPx >= dotRect.top - rect.top + dotRect.height * 0.5
        }),
      )
    }

    const onScroll = (): void => {
      if (frame) {
        return
      }
      frame = requestAnimationFrame(() => {
        frame = 0
        update()
      })
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", update)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div
      className="cy-wj-steps"
      ref={stepsRef}
    >
      <div className="cy-wj-track-bg" />
      <div
        className="cy-wj-track-fill"
        style={{ height: (progress * 100).toFixed(1) + "%" }}
      />
      {steps.map((step, i) => (
        <div
          key={step.label}
          className="cy-wj-step"
        >
          <div
            ref={(el) => {
              dotRefs.current[i] = el
            }}
            className={active[i] ? "cy-wj-dot cy-wj-dot-active" : "cy-wj-dot"}
          />
          <div className="cy-wj-week">{step.label}</div>
          <ul className="cy-wj-bullets">
            {step.bullets.map((bullet) => (
              <li
                key={bullet}
                className="cy-wj-bullet"
              >
                <span
                  className="cy-wj-check"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
