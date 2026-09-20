import Image from "next/image"

export type HeaderBackButtonProps = {
  iconSrc: string
  iconAlt: string
  onClick?: () => void
  disabled?: boolean
}

export const HeaderBackButton = ({ iconSrc, iconAlt, onClick, disabled }: HeaderBackButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="relative items-center bg-transparent caret-transparent flex max-w-full outline-[3px] text-left text-nowrap border mr-auto px-4 py-3.5 rounded-[7.5px] border-transparent hover:bg-neutral-600/10 disabled:opacity-0"
    >
      <div className="items-center box-border caret-transparent flex flex-row-reverse grow justify-end max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
        <span className="text-neutral-600 box-border caret-transparent block h-4 min-h-[auto] min-w-[auto] outline-[3px] text-nowrap w-4">
          <span className="box-border caret-transparent h-4 outline-[3px] text-nowrap w-4">
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={16}
              height={16}
              className="box-border caret-transparent inline h-4 outline-[3px] text-nowrap align-baseline w-4"
            />
          </span>
        </span>
      </div>
    </button>
  )
}
