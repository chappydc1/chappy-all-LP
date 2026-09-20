import Image from "next/image"

import type { AdvMedia, AgingLevel, SummaryStep as SummaryStepContent } from "@/sections/ForgeQuizPage/types"

import type { AgingProfile } from "@/sections/ForgeQuizPage/lib/scoring"

export type SummaryStepProps = {
  step: SummaryStepContent
  media: AdvMedia["summary"]
  profile: AgingProfile
  onContinue: () => void
}

const LEVEL_COLORS: Record<AgingLevel, { badgeBg: string; badgeText: string }> = {
  low: { badgeBg: "#E8F7FF", badgeText: "#1E88C7" },
  normal: { badgeBg: "#EAFBE0", badgeText: "#3F9142" },
  medium: { badgeBg: "#FFF7D6", badgeText: "#B8860B" },
  high: { badgeBg: "#FCE3E3", badgeText: "#F04D4D" },
}

export const SummaryStep = ({ step, media, profile, onContinue }: SummaryStepProps): React.ReactElement => {
  const levelColors = LEVEL_COLORS[profile.level]
  const gaugeLabel = step.gaugeLabels[profile.level]

  return (
    <section className="box-border w-full px-2.5 pt-[50px] pb-6 text-center md:px-0">
      <h2 className="mb-6 font-kapraneuepro_semibold text-[34px] font-semibold capitalize leading-[42.5px] text-black md:text-[40px] md:leading-[50px]">
        {step.heading}
      </h2>
      <div className="mx-auto w-[min(700px,100%)] rounded-[8px] border border-[#EAEAEB] bg-white p-5 text-left">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-black">Aging Level</span>
          <span
            className="rounded-full px-4 py-1 text-sm font-medium"
            style={{ backgroundColor: levelColors.badgeBg, color: levelColors.badgeText }}
          >
            {gaugeLabel}
          </span>
        </div>
        <div className="relative mx-auto my-6 h-[220px] w-[220px]">
          <Image
            src={media.manImage}
            alt="Skin profile preview"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative mt-10 flex h-[0.8em] w-full items-center justify-evenly rounded-full">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, #96D9FF 1.63%, #B7F5A8 24.72%, #F9EB7C 54.9%, #E96B58 81.94%)",
            }}
          />
          {[0, 1, 2, 3].map((line) => (
            <span
              key={line}
              className="relative h-full w-[0.2em] bg-white"
            />
          ))}
          <div
            className="absolute top-1/2 h-[2em] w-[2em] -translate-y-1/2 rounded-full border-[0.3em] border-[rgba(63,72,82,0.2)] bg-white shadow-[0_0.3em_0.7em_#4446404d] motion-safe:animate-[gauge-slide_1.5s_ease-in-out_forwards]"
            style={{ "--gauge-target": `${profile.gaugePercent}%`, left: `${profile.gaugePercent}%` } as React.CSSProperties}
          >
            <div className="absolute -top-[4em] left-1/2 flex h-[2.4em] w-[9em] -translate-x-1/2 items-center justify-center rounded-[0.4em] bg-[#3F4852] opacity-0 motion-safe:animate-[gauge-fade-in_1s_ease-in-out_forwards]">
              <span className="text-xs font-semibold text-white">Your level</span>
              <span className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-[0.5em] border-t-[0.6em] border-x-transparent border-t-[#3F4852]" />
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-between text-xs text-neutral-500">
          <span>{step.gaugeLabels.low}</span>
          <span>{step.gaugeLabels.normal}</span>
          <span>{step.gaugeLabels.medium}</span>
          <span>{step.gaugeLabels.high}</span>
        </div>
        <div
          className="mt-5 flex gap-3 rounded-[6px] p-4"
          style={{ backgroundColor: levelColors.badgeBg }}
        >
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: levelColors.badgeText }}
          >
            !
          </span>
          <p className="text-sm text-neutral-800">
            <span className="block font-semibold uppercase">{gaugeLabel} level</span>
            {step.warningBody[profile.level]}
          </p>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="flex items-center gap-3 rounded-[6px] border border-[#EAEAEB] p-4">
            <Image
              src={media.agingType}
              alt=""
              width={28}
              height={28}
            />
            <div>
              <p className="text-xs text-neutral-500">{step.statCards.agingType.label}</p>
              <p className="font-semibold text-black">{profile.agingType}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-[6px] border border-[#EAEAEB] p-4">
            <Image
              src={media.room}
              alt=""
              width={28}
              height={28}
            />
            <div>
              <p className="text-xs text-neutral-500">{step.statCards.room.label}</p>
              <p className="font-semibold text-black">{profile.room}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-[6px] border border-[#EAEAEB] p-4">
            <Image
              src={media.trigger}
              alt=""
              width={28}
              height={28}
            />
            <div>
              <p className="text-xs text-neutral-500">{step.statCards.trigger.label}</p>
              <p className="font-semibold text-black">{profile.trigger}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-[6px] border border-[#EAEAEB] p-4">
            <Image
              src={media.impact}
              alt=""
              width={28}
              height={28}
            />
            <div>
              <p className="text-xs text-neutral-500">{step.statCards.impact.label}</p>
              <p className="font-semibold text-black">{profile.impact}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onContinue}
        className="mx-auto mt-6 block w-full max-w-[400px] rounded-[7.5px] bg-[#A45B2C] p-[14.4px] text-lg text-white"
      >
        {step.continueLabel}
      </button>
    </section>
  )
}
