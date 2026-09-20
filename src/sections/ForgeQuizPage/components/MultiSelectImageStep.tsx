"use client"

import { useState } from "react"

import type { AdvMedia, MultiSelectImageStep as MultiSelectImageStepContent } from "@/sections/ForgeQuizPage/types"

import { ImageOption } from "@/sections/ForgeQuizPage/components/ImageOption"

export type MultiSelectImageStepProps = {
  step: MultiSelectImageStepContent
  media: AdvMedia["concern"]
  onContinue: (values: string[]) => void
}

export const MultiSelectImageStep = ({ step, media, onContinue }: MultiSelectImageStepProps): React.ReactElement => {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (value: string): void => {
    setSelected((current) =>
      current.includes(value) ? current.filter((v) => v !== value) : [...current, value],
    )
  }

  return (
    <section className="box-border w-full z-[1] px-2.5 pt-[50px] pb-6 text-center md:px-0">
      <h2 className="mb-6 font-kapraneuepro_semibold text-[34px] font-semibold capitalize leading-[42.5px] text-black md:text-[40px] md:leading-[50px]">
        {step.heading}
      </h2>
      <div className="mx-auto flex w-[min(600px,100%)] flex-wrap justify-center gap-3">
        {step.options.map((option) => (
          <ImageOption
            key={option.value}
            label={option.label}
            imageSrc={media[option.image]}
            selected={selected.includes(option.value)}
            onClick={() => toggle(option.value)}
          />
        ))}
      </div>
      <button
        type="button"
        disabled={selected.length === 0}
        onClick={() => onContinue(selected)}
        className="mt-6 w-full max-w-[400px] rounded-[7.5px] bg-[#A45B2C] p-[14.4px] text-lg text-white transition-opacity disabled:opacity-40"
      >
        {step.continueLabel}
      </button>
    </section>
  )
}
