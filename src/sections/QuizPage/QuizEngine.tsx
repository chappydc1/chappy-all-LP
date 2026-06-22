"use client"

import React, { useState, useEffect, useCallback } from "react"
import { AgeSelectScreen } from "./components/screens/AgeSelectScreen"
import { InfoScreen } from "./components/screens/InfoScreen"
import { InfoImageScreen } from "./components/screens/InfoImageScreen"
import { SingleChoiceScreen } from "./components/screens/SingleChoiceScreen"
import { MultiChoiceScreen } from "./components/screens/MultiChoiceScreen"
import { ImageSingleScreen } from "./components/screens/ImageSingleScreen"
import { ImageMultiScreen } from "./components/screens/ImageMultiScreen"
import { LoadingScreen } from "./components/screens/LoadingScreen"
import { HeightScreen } from "./components/screens/HeightScreen"
import { WeightScreen } from "./components/screens/WeightScreen"
import { AgeNumberScreen } from "./components/screens/AgeNumberScreen"
import { HealthScoreScreen } from "./components/screens/HealthScoreScreen"
import { PredictionScreen } from "./components/screens/PredictionScreen"
import { EmailScreen } from "./components/screens/EmailScreen"

export type AdvScreen = {
  id: string
  type: string
  [key: string]: unknown
}

export type AdvData = {
  logo: { src: string; alt: string }
  stats: { startingDate: string; peopleJoined: string }
  screens: AdvScreen[]
}

export type MediaData = Record<string, string | Record<string, string>>

type QuizAnswers = Record<string, string | string[]>

type Props = {
  adv: AdvData
  media: MediaData
}

export function QuizEngine({ adv, media }: Props): React.JSX.Element {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({})
  const [continueEnabled, setContinueEnabled] = useState(false)

  const screens = adv.screens
  const current = screens[step]
  const totalQuestions = screens.filter(s =>
    ["age-select","single","multi","image-single","image-multi","height","weight","age-number"].includes(s.type)
  ).length
  const answeredSoFar = screens.slice(0, step + 1).filter(s =>
    ["age-select","single","multi","image-single","image-multi","height","weight","age-number"].includes(s.type)
  ).length
  const progress = Math.round((answeredSoFar / totalQuestions) * 100)

  const advance = useCallback(() => {
    setStep(s => Math.min(s + 1, screens.length - 1))
    setContinueEnabled(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [screens.length])

  const handleAnswer = useCallback((id: string, value: string | string[]) => {
    setAnswers(prev => ({ ...prev, [id]: value }))
    setContinueEnabled(true)
  }, [])

  const isAutoAdvance = current.type === "loading"
  const showContinue = !isAutoAdvance && current.type !== "email"
  const needsExplicitContinue = ["multi","image-multi","height","weight","age-number","info","info-image","prediction","health-score"].includes(current.type)

  useEffect(() => {
    if (needsExplicitContinue) {
      setContinueEnabled(true)
    }
  }, [step, needsExplicitContinue])

  const renderScreen = () => {
    const s = current
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sc = s as any
    switch (s.type) {
      case "age-select":
        return (
          <AgeSelectScreen
            screen={sc}
            stats={adv.stats}
            onSelect={v => { handleAnswer(s.id, v); setTimeout(advance, 300) }}
          />
        )
      case "info":
        return <InfoScreen screen={sc} />
      case "info-image":
        return <InfoImageScreen screen={sc} media={media} />
      case "single":
        return (
          <SingleChoiceScreen
            screen={sc}
            selected={answers[s.id] as string}
            onSelect={v => { handleAnswer(s.id, v); setTimeout(advance, 300) }}
          />
        )
      case "multi":
        return (
          <MultiChoiceScreen
            screen={sc}
            selected={(answers[s.id] as string[]) ?? []}
            onToggle={v => {
              const cur = (answers[s.id] as string[]) ?? []
              const next = cur.includes(v) ? cur.filter(x => x !== v) : [...cur, v]
              handleAnswer(s.id, next)
            }}
          />
        )
      case "image-single":
        return (
          <ImageSingleScreen
            screen={sc}
            media={media}
            selected={answers[s.id] as string}
            onSelect={v => { handleAnswer(s.id, v); setTimeout(advance, 300) }}
          />
        )
      case "image-multi":
        return (
          <ImageMultiScreen
            screen={sc}
            media={media}
            selected={(answers[s.id] as string[]) ?? []}
            onToggle={v => {
              const cur = (answers[s.id] as string[]) ?? []
              const next = cur.includes(v) ? cur.filter(x => x !== v) : [...cur, v]
              handleAnswer(s.id, next)
            }}
          />
        )
      case "loading":
        return <LoadingScreen screen={sc} media={media} answers={answers} onDone={advance} />
      case "height":
        return (
          <HeightScreen
            screen={sc}
            value={answers[s.id] as string}
            onChange={v => handleAnswer(s.id, v)}
          />
        )
      case "weight":
        return (
          <WeightScreen
            screen={sc}
            value={answers[s.id] as string}
            onChange={v => handleAnswer(s.id, v)}
          />
        )
      case "age-number":
        return (
          <AgeNumberScreen
            screen={sc}
            value={answers[s.id] as string}
            onChange={v => handleAnswer(s.id, v)}
          />
        )
      case "health-score":
        return <HealthScoreScreen screen={sc} answers={answers} media={media} />
      case "prediction":
        return <PredictionScreen screen={sc} answers={answers} />
      case "email":
        return <EmailScreen screen={sc} answers={answers} />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-neutral-100 font-inter">
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="max-w-[800px] mx-auto px-4 flex items-center justify-between h-14">
          <img src={adv.logo.src} alt={adv.logo.alt} className="h-8 w-auto" />
          {step > 0 && step < screens.length - 1 && (
            <div className="flex-1 mx-4">
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 pb-24">
        {renderScreen()}
      </main>

      {showContinue && (
        <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-gray-200">
          <div className="max-w-[800px] mx-auto px-4 py-4">
            <button
              onClick={advance}
              disabled={!continueEnabled}
              className={`w-full py-4 rounded-full font-semibold text-white text-base transition-all duration-200 ${
                continueEnabled
                  ? "bg-emerald-400 hover:bg-emerald-500 active:scale-95"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {(current as Record<string, string>).buttonLabel ?? "CONTINUE"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
