"use client"

import { useState } from "react"

import type { AdvContent, SingleSelectStep as SingleSelectStepContent } from "@/sections/ForgeQuizPage/types"

import { ConsentText } from "@/sections/ForgeQuizPage/components/ConsentText"
import { OptionRow } from "@/sections/ForgeQuizPage/components/OptionRow"

export type SingleSelectStepProps = {
  step: SingleSelectStepContent
  consent?: AdvContent["consent"]
  onSelect: (value: string) => void
}

const SELECT_DELAY_MS = 350

export const SingleSelectStep = ({ step, consent, onSelect }: SingleSelectStepProps): React.ReactElement => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  const handleSelect = (value: string): void => {
    if (selectedValue) return
    setSelectedValue(value)
    setTimeout(() => onSelect(value), SELECT_DELAY_MS)
  }

  return (
    <section className="box-border w-full z-[1]">
      <div className="mx-auto w-[min(800px,100%)] px-2.5 pt-[50px] pb-2.5 text-center md:px-0">
        <h2 className="-mt-3 -mb-2.5 font-kapraneuepro_semibold text-[34px] font-semibold capitalize leading-[42.5px] text-black md:my-0 md:text-[40px] md:leading-[50px]">
          {step.heading}
          {step.highlightedHeading && (
            <u className="text-[34px] leading-[42.5px] underline md:text-[40px] md:leading-[50px]">
              {step.highlightedHeading}
            </u>
          )}
        </h2>
      </div>
      {step.subheading && (
        <div className="mx-auto w-full text-center">
          <p className="mb-6 mt-4 text-2xl font-semibold leading-[32.4px] md:mb-[26px] md:mt-2.5 md:text-[26px] md:leading-[35.1px]">
            {step.subheading}
          </p>
        </div>
      )}
      <div className="mx-auto w-[min(400px,100%)] px-2.5 py-5 md:px-0">
        {step.chooseLabel && (
          <div className="flex justify-center pb-2.5 text-center">
            <span className="text-[14.4px] leading-[18.72px]">{step.chooseLabel}</span>
          </div>
        )}
        <fieldset className="p-0">
          {step.options.map((option) => (
            <OptionRow
              key={option.value}
              label={option.label}
              emoji={option.emoji}
              icon={option.icon}
              selected={selectedValue === option.value}
              onClick={() => handleSelect(option.value)}
            />
          ))}
        </fieldset>
      </div>
      {consent && <ConsentText content={consent} />}
    </section>
  )
}
