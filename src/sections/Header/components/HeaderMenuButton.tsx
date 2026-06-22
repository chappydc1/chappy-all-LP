import React from "react"
type IconMedia = { src: string; alt: string }

export function HeaderMenuButton({ menuIcon }: { menuIcon: IconMedia }): React.JSX.Element {
  return (
    <div className="box-border caret-transparent outline-[3px] pl-2.5 py-2.5">
      <button className="relative text-neutral-950 items-center bg-transparent caret-transparent flex max-w-full outline-[3px] text-left text-nowrap w-full border mx-auto p-0 rounded-[7.5px] border-transparent font-inter">
        <div className="items-center box-border caret-transparent flex flex-row-reverse grow justify-between max-w-full outline-[3px] text-nowrap">
          <span className="text-neutral-600 box-border caret-transparent block h-5 outline-[3px] text-nowrap w-5">
            <img
              src={menuIcon.src}
              alt={menuIcon.alt}
              className="box-border caret-transparent inline h-5 outline-[3px] text-nowrap align-baseline w-5"
            />
          </span>
        </div>
      </button>
    </div>
  )
}
