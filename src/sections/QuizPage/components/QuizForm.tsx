import React from "react"
import { QuizSection } from "@/sections/QuizPage/components/QuizSection"
import { HiddenInputs } from "@/sections/QuizPage/components/HiddenInputs"

type AdvContent = {
  title: { desktop: string; mobile: string[] }
  subtitle: string
  ageQuestion: { label: string; emphasized: string }
  ageOptions: string[]
  stats: { startingDate: string; peopleJoined: string }
  legal: {
    intro: string
    action: string
    connector: string
    terms: { label: string; url: string }
    privacy: { label: string; url: string }
    reviewText: string
  }
  continueButton: string
}

export function QuizForm({ content }: { content: AdvContent }): React.JSX.Element {
  return (
    <form className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
      <QuizSection content={content} />
      <HiddenInputs
        type="submit"
        className="appearance-none text-neutral-950 text-[32px] bg-black/0 box-border caret-transparent hidden leading-8 outline-[3px] text-center text-nowrap w-full border border-gray-200 px-[19.2px] py-4 rounded-[5px] border-solid font-inter"
      />
      <HiddenInputs
        type="text"
        name="cep"
        className="appearance-none text-neutral-950 text-[32px] bg-black/0 box-border caret-transparent hidden leading-8 outline-[3px] w-full border border-gray-200 px-[19.2px] py-4 rounded-[5px] border-solid font-inter"
      />
      <HiddenInputs
        type="text"
        name="lptoken"
        className="appearance-none text-neutral-950 text-[32px] bg-black/0 box-border caret-transparent hidden leading-8 outline-[3px] w-full border border-gray-200 px-[19.2px] py-4 rounded-[5px] border-solid font-inter"
      />
    </form>
  )
}
