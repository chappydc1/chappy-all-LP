import React from "react"
import { QuizForm } from "@/sections/QuizPage/components/QuizForm"

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

export function QuizPage({ content }: { content: AdvContent }): React.JSX.Element {
  return (
    <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-between min-h-[auto] min-w-[auto] outline-[3px] z-[1]">
      <QuizForm content={content} />
    </div>
  )
}
