import React from "react"
import { QuizStats } from "@/sections/QuizPage/components/QuizStats"
import { QuizTitle } from "@/sections/QuizPage/components/QuizTitle"
import { AgeQuestion } from "@/sections/QuizPage/components/AgeQuestion"
import { LegalNotice } from "@/sections/QuizPage/components/LegalNotice"

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
}

export function QuizSection({ content }: { content: AdvContent }): React.JSX.Element {
  return (
    <section
      className="box-border caret-transparent outline-[3px] w-full z-[1]"
    >
      <QuizStats stats={content.stats} />
      <QuizTitle
        variantClassName="hidden md:block"
        isSplitTitle={false}
        title={content.title}
        subtitle={content.subtitle}
      />
      <QuizTitle
        variantClassName="block md:hidden"
        isSplitTitle={true}
        title={content.title}
        subtitle={content.subtitle}
      />
      <AgeQuestion
        showOptions={false}
        outerVariantClassName="text-center md:w-[800px]"
        innerVariantClassName="pt-[30px] pb-[15px]"
        questionText={content.ageQuestion.label}
        emphasizedText={content.ageQuestion.emphasized}
        options={[]}
      />
      <AgeQuestion
        showOptions={true}
        outerVariantClassName="md:w-[400px]"
        innerVariantClassName="pb-5"
        questionText=""
        emphasizedText=""
        options={content.ageOptions}
      />
      <div className="relative box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px] w-full mx-auto px-2.5 md:w-[800px] md:px-0">
          <div className="box-border caret-transparent outline-[3px] py-5">
            <div className="border-b-gray-200 box-border caret-transparent max-w-full outline-[3px] w-screen border-t-white border-x-white border-b"></div>
          </div>
        </div>
      </div>
      <LegalNotice legal={content.legal} />
    </section>
  )
}
