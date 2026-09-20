"use client"

import { useEffect, useState } from "react"

import type { LoadingStep as LoadingStepContent } from "@/sections/ForgeQuizPage/types"

export type LoadingStepProps = {
  step: LoadingStepContent
}

const TICK_MS = 60
const STEP_PER_TICK = 2
const PAUSE_AT = 49
const ADVANCE_DELAY_MS = 300

type Phase = "to-pause" | "waiting" | "to-done"

export const LoadingStep = ({ step }: LoadingStepProps): React.ReactElement => {
  const [stageIndex, setStageIndex] = useState(0)
  const [stageProgress, setStageProgress] = useState(0)
  const [completedStages, setCompletedStages] = useState<boolean[]>(() => step.stages.map(() => false))
  const [phase, setPhase] = useState<Phase>("to-pause")

  const allStagesDone = stageIndex >= step.stages.length

  useEffect(() => {
    if (allStagesDone || phase === "waiting") return

    const target = phase === "to-pause" ? PAUSE_AT : 100
    const id = setInterval(() => {
      setStageProgress((prev) => Math.min(target, prev + STEP_PER_TICK))
    }, TICK_MS)

    return () => clearInterval(id)
  }, [stageIndex, phase, allStagesDone])

  useEffect(() => {
    if (allStagesDone) return
    if (phase === "to-pause" && stageProgress >= PAUSE_AT) {
      setPhase("waiting")
    } else if (phase === "to-done" && stageProgress >= 100) {
      setCompletedStages((current) => {
        if (current[stageIndex]) return current
        const updated = [...current]
        updated[stageIndex] = true
        return updated
      })
    }
  }, [stageProgress, phase, stageIndex, allStagesDone])

  useEffect(() => {
    if (!completedStages[stageIndex]) return
    const timeoutId = setTimeout(() => {
      setStageIndex((index) => index + 1)
      setStageProgress(0)
      setPhase("to-pause")
    }, ADVANCE_DELAY_MS)
    return () => clearTimeout(timeoutId)
  }, [completedStages, stageIndex])

  const advancePastPopup = (): void => setPhase("to-done")

  return (
    <section className="box-border w-full px-2.5 pt-[50px] pb-6 text-center md:px-0">
      <h2 className="mb-8 font-kapraneuepro_semibold text-[28px] font-semibold capitalize leading-[36px] text-black md:text-[34px] md:leading-[42px]">
        {step.heading}
        <span className="text-[#A45B2C]">{step.highlightedHeading}</span>
        {step.suffixHeading}
      </h2>
      <div className="relative mx-auto w-[min(400px,100%)] space-y-6">
        {step.stages.slice(0, stageIndex + 1).map((stage, index) => {
          const isDone = completedStages[index]
          const isActive = index === stageIndex && !isDone
          const percent = isActive ? stageProgress : isDone ? 100 : 0
          return (
            <div key={stage.activeLabel}>
              <div className="mb-1 flex items-center justify-between text-sm text-neutral-600">
                <span>{isDone ? stage.doneLabel : stage.activeLabel}</span>
                {isDone ? <span className="text-[#4CAF50]">✓</span> : <span>{percent}%</span>}
              </div>
              <div className="h-[6px] w-full overflow-hidden rounded-full bg-[#E3F2E4]">
                <div
                  className="h-full rounded-full bg-[#4CAF50] transition-[width] duration-150"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          )
        })}

        {!allStagesDone && phase === "waiting" && (
          <div className="absolute inset-x-0 top-1/2 mx-auto w-full max-w-[320px] -translate-y-1/2 rounded-[10px] bg-white p-6 shadow-lg">
            <p className="mb-2 text-xs text-neutral-500">{step.popup.eyebrow}</p>
            <p className="mb-4 text-base font-medium text-black">
              {step.stages[stageIndex]?.popupQuestion}
            </p>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={advancePastPopup}
                className="rounded-full bg-[#4CAF50] px-6 py-2 text-white"
              >
                {step.popup.noLabel}
              </button>
              <button
                type="button"
                onClick={advancePastPopup}
                className="rounded-full bg-[#4CAF50] px-6 py-2 text-white"
              >
                {step.popup.yesLabel}
              </button>
            </div>
          </div>
        )}
      </div>

      {allStagesDone && (
        <a
          href={step.ctaUrl}
          className="mx-auto mt-8 flex w-full max-w-[400px] items-center justify-between rounded-[7.5px] bg-[#A45B2C] p-[14.4px] text-lg text-white"
        >
          <span>{step.ctaLabel}</span>
          <span aria-hidden="true">➤</span>
        </a>
      )}
    </section>
  )
}
