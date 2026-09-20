"use client"

import { useMemo } from "react"

import type { ChartStep as ChartStepContent } from "@/sections/ForgeQuizPage/types"

import { formatMonth, formatMonthYear, monthsFromNow } from "@/sections/ForgeQuizPage/lib/dates"

export type ChartStepProps = {
  step: ChartStepContent
  onContinue: () => void
}

const MAX_BAR_HEIGHT = 275

export const ChartStep = ({ step, onContinue }: ChartStepProps): React.ReactElement => {
  const { currentMonthLabel, targetLabel } = useMemo(() => {
    const now = new Date()
    return {
      currentMonthLabel: formatMonth(now),
      targetLabel: formatMonthYear(monthsFromNow(3, now)),
    }
  }, [])

  return (
    <section className="box-border w-full px-2.5 pt-[50px] pb-6 text-center md:px-0">
      <h2 className="mx-auto mb-2 w-[min(700px,100%)] font-kapraneuepro_semibold text-[26px] font-semibold capitalize leading-[32px] text-black md:text-[32px] md:leading-[40px]">
        {step.heading}
        <span className="text-[#A45B2C]">{step.headingAccent.replace("{date}", targetLabel)}</span>
      </h2>
      <p className="mx-auto mb-8 w-[min(600px,100%)] text-sm text-neutral-600">
        {step.subheading.replace("{date}", targetLabel)}
      </p>
      <div className="mx-auto flex w-[min(500px,100%)] items-end justify-center gap-2">
        {step.barHeights.map((height, index) => {
          const isFirst = index === 0
          const isGoal = index === step.barHeights.length - 2
          const isLast = index === step.barHeights.length - 1
          return (
            <div
              key={index}
              className="flex w-full flex-col items-center"
            >
              {isGoal && (
                <span className="mb-1 whitespace-nowrap rounded-full bg-[#9CE579] px-2 py-0.5 text-[10px] font-semibold text-white">
                  {step.goalLabel}
                </span>
              )}
              <div
                className="flex w-full items-end rounded-[10px] bg-white"
                style={{ height: `${MAX_BAR_HEIGHT}px` }}
              >
                <div
                  className="w-full rounded-[10px]"
                  style={{ height: `${height}px`, backgroundColor: step.barColors[index] }}
                />
              </div>
              {(isFirst || isLast) && (
                <span className="mt-2 text-xs text-neutral-600">
                  {isFirst ? currentMonthLabel : targetLabel}
                </span>
              )}
            </div>
          )
        })}
      </div>
      <button
        type="button"
        onClick={onContinue}
        className="mx-auto mt-8 block w-full max-w-[400px] rounded-[7.5px] bg-[#A45B2C] p-[14.4px] text-lg text-white"
      >
        {step.continueLabel}
      </button>
    </section>
  )
}
