"use client"

import React, { useState, useEffect } from "react"

type LoadingStep = { label: string; duration: number }
type Screen = { heading: string; steps: LoadingStep[]; footer?: string; imageKey?: string; autoAdvance?: boolean }
type MediaData = Record<string, string | Record<string, string>>
type QuizAnswers = Record<string, string | string[]>

export function LoadingScreen({ screen, media, answers, onDone }: { screen: Screen; media: MediaData; answers: QuizAnswers; onDone: () => void }): React.JSX.Element {
  const [stepIdx, setStepIdx] = useState(0)
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    setStepIdx(0)
    setProgress(0)
    setDone(false)
  }, [screen.heading])

  useEffect(() => {
    if (done) return
    const current = screen.steps[stepIdx]
    if (!current) {
      setDone(true)
      setTimeout(onDone, 600)
      return
    }
    const interval = 30
    const increment = (100 / (current.duration / interval))
    let pct = 0
    const timer = setInterval(() => {
      pct += increment
      if (pct >= 100) {
        pct = 100
        clearInterval(timer)
        setTimeout(() => {
          setProgress(0)
          setStepIdx(i => i + 1)
        }, 200)
      }
      setProgress(pct)
    }, interval)
    return () => clearInterval(timer)
  }, [stepIdx, done, screen.steps, onDone])

  const currentLabel = screen.steps[stepIdx]?.label ?? screen.steps[screen.steps.length - 1].label
  const swelling = answers["swelling-level"] as string ?? "Severe"
  const dreamLegs = answers["dream-legs"] as string ?? "Normal"
  const beforeImg = (media["beforeImages"] as Record<string, string>)?.[swelling]
  const afterImg = (media["afterImages"] as Record<string, string>)?.[dreamLegs]
  const arrow = media["beforeArrow"] as string
  const imgSrc = screen.imageKey ? media[screen.imageKey] as string : undefined

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-neutral-950 mb-8 text-center">{screen.heading}</h2>

      <div className="max-w-[400px] mx-auto mb-8">
        <p className="text-neutral-600 mb-3 text-sm">{currentLabel}<span className="text-emerald-500 ml-1">{done ? "100%" : `${Math.round(progress)}%`}</span></p>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-400 rounded-full transition-all duration-100"
            style={{ width: `${done ? 100 : progress}%` }}
          />
        </div>
      </div>

      {beforeImg && afterImg && (
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="text-center">
            <p className="text-xs text-neutral-500 mb-2">Now</p>
            <img src={beforeImg} alt="Before" className="h-32 object-contain" />
          </div>
          <img src={arrow} alt="" className="h-8 w-auto" />
          <div className="text-center">
            <p className="text-xs text-neutral-500 mb-2">Your Goal</p>
            <img src={afterImg} alt="After" className="h-32 object-contain" />
          </div>
        </div>
      )}

      {imgSrc && (
        <div className="rounded-xl overflow-hidden mb-6">
          <img src={imgSrc} alt="" className="w-full object-cover" />
        </div>
      )}

      {screen.footer && (
        <p className="text-center text-neutral-600 text-sm">
          {screen.footer.split(/\*\*(.*?)\*\*/g).map((p, i) =>
            i % 2 === 1 ? <strong key={i}>{p}</strong> : <React.Fragment key={i}>{p}</React.Fragment>
          )}
        </p>
      )}
    </div>
  )
}
