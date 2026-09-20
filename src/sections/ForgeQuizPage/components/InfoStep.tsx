import Image from "next/image"

import type { InfoStep as InfoStepContent } from "@/sections/ForgeQuizPage/types"

export type InfoStepProps = {
  step: InfoStepContent
  imageSrc: string
  onContinue: () => void
}

export const InfoStep = ({ step, imageSrc, onContinue }: InfoStepProps): React.ReactElement => {
  return (
    <section className="box-border w-full px-2.5 pt-[50px] pb-6 text-center md:px-0">
      <h2 className="mb-4 font-kapraneuepro_semibold text-[28px] font-semibold text-[#A45B2C] md:text-[32px]">
        {step.heading}
      </h2>
      <p
        className="mx-auto mb-6 w-[min(560px,100%)] text-lg text-neutral-800"
        dangerouslySetInnerHTML={{ __html: step.bodyHtml }}
      />
      <div className="relative mx-auto mb-6 h-[240px] w-[240px]">
        <Image
          src={imageSrc}
          alt="Before and after"
          fill
          className="object-contain"
        />
      </div>
      <button
        type="button"
        onClick={onContinue}
        className="mx-auto block w-full max-w-[400px] rounded-[7.5px] bg-[#A45B2C] p-[14.4px] text-lg text-white"
      >
        {step.continueLabel}
      </button>
    </section>
  )
}
