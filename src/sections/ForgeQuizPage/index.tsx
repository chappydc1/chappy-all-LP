"use client"

import { useMemo, useState } from "react"

import type { AdvContent, AdvMedia, QuizAnswers, StepId } from "@/sections/ForgeQuizPage/types"

import { STEP_ORDER } from "@/sections/ForgeQuizPage/types"
import { computeAgingProfile } from "@/sections/ForgeQuizPage/lib/scoring"
import { ChartStep } from "@/sections/ForgeQuizPage/components/ChartStep"
import { InfoStep } from "@/sections/ForgeQuizPage/components/InfoStep"
import { LoadingStep } from "@/sections/ForgeQuizPage/components/LoadingStep"
import { MultiSelectImageStep } from "@/sections/ForgeQuizPage/components/MultiSelectImageStep"
import { QuizFooter } from "@/sections/ForgeQuizPage/components/QuizFooter"
import { QuizHeader } from "@/sections/ForgeQuizPage/components/QuizHeader"
import { SingleSelectStep } from "@/sections/ForgeQuizPage/components/SingleSelectStep"
import { SummaryStep } from "@/sections/ForgeQuizPage/components/SummaryStep"

export type ForgeQuizPageProps = {
  content: AdvContent
  media: AdvMedia
}

export const ForgeQuizPage = ({ content, media }: ForgeQuizPageProps) => {
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({})

  const stepId: StepId = STEP_ORDER[stepIndex]
  const step = content.steps[stepId]
  const progressPercent = (stepIndex / (STEP_ORDER.length - 1)) * 100

  const profile = useMemo(() => computeAgingProfile(answers), [answers])

  const goNext = (): void => setStepIndex((index) => Math.min(index + 1, STEP_ORDER.length - 1))
  const goBack = (): void => setStepIndex((index) => Math.max(index - 1, 0))

  const answerAndAdvance = (value: string | string[]): void => {
    setAnswers((current) => ({ ...current, [stepId]: value }))
    goNext()
  }

  return (
    <div className="text-gray-800 text-sm bg-no-repeat box-border text-center font-montserrat">
      <main className="items-center box-border flex flex-col min-h-[1000px] w-full">
        <section className="items-center bg-no-repeat box-border flex flex-col justify-items-center w-full bg-center">
          <div className="text-zinc-800 bg-no-repeat box-border flex flex-col w-full bg-center md:flex-row">
            <div className="box-border w-full align-top">
              <div className="items-center box-border flex justify-center">
                <div className="box-border w-full">
                  <div className="box-border">
                    <div className="relative text-black text-base box-border block w-full z-[1] mx-auto font-times_new_roman">
                      <article className="box-border max-w-full w-full mx-auto">
                        <div className="text-neutral-950 bg-blend-overlay bg-zinc-50 bg-cover box-border flex flex-col leading-4 max-w-full min-h-full overflow-x-clip bg-center font-hvdtrial_brandontext_regular">
                          <QuizHeader
                            content={content.header}
                            media={media}
                            progressPercent={progressPercent}
                            onBack={goBack}
                            backDisabled={stepIndex === 0}
                          />
                          {step.type === "single-select" && (
                            <SingleSelectStep
                              key={stepId}
                              step={step}
                              consent={stepId === "age" ? content.consent : undefined}
                              onSelect={answerAndAdvance}
                            />
                          )}
                          {step.type === "multi-select-image" && (
                            <MultiSelectImageStep
                              key={stepId}
                              step={step}
                              media={media.concern}
                              onContinue={answerAndAdvance}
                            />
                          )}
                          {step.type === "summary" && (
                            <SummaryStep
                              key={stepId}
                              step={step}
                              media={media.summary}
                              profile={profile}
                              onContinue={goNext}
                            />
                          )}
                          {step.type === "chart" && (
                            <ChartStep
                              key={stepId}
                              step={step}
                              onContinue={goNext}
                            />
                          )}
                          {step.type === "info" && (
                            <InfoStep
                              key={stepId}
                              step={step}
                              imageSrc={media.didYouKnow}
                              onContinue={goNext}
                            />
                          )}
                          {step.type === "loading" && (
                            <LoadingStep
                              key={stepId}
                              step={step}
                            />
                          )}
                          <QuizFooter />
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
