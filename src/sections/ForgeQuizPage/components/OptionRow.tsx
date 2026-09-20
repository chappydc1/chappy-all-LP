import type { IconKey } from "@/sections/ForgeQuizPage/types"

import { GoalIcon } from "@/sections/ForgeQuizPage/icons"

export type OptionRowProps = {
  label: string
  emoji?: string
  icon?: IconKey
  selected: boolean
  onClick: () => void
}

export const OptionRow = ({ label, emoji, icon, selected, onClick }: OptionRowProps): React.ReactElement => {
  return (
    <div className="box-border basis-[0%] grow min-h-[auto] min-w-[auto] pb-2.5">
      <button
        type="button"
        onClick={onClick}
        className={`relative flex h-full w-full items-center gap-2.5 rounded-[5px] border-2 border-solid p-[14.4px] text-left text-[14.4px] leading-[18.72px] transition-colors duration-300 ${
          selected
            ? "border-transparent bg-[#A45B2C] text-white"
            : "border-[#EAEAEB] bg-white text-neutral-950 hover:bg-[#A45B2C]/10"
        }`}
      >
        {emoji && <span className="text-base leading-none">{emoji}</span>}
        {icon && (
          <GoalIcon
            icon={icon}
            className={`h-5 w-5 shrink-0 ${selected ? "text-white" : "text-[#A45B2C]"}`}
          />
        )}
        <span className="overflow-hidden text-ellipsis break-words py-0.5 font-bold">{label}</span>
      </button>
    </div>
  )
}
