import React from "react"
export function ContinueButton({ label }: { label: string }): React.JSX.Element {
  return (
    <div className="box-border caret-transparent outline-[3px] py-5">
      <button className="relative text-neutral-950 items-center bg-emerald-300 caret-transparent flex max-w-full outline-[3px] text-left text-nowrap w-[300px] border mx-auto px-5 py-3.5 rounded-[50px] border-transparent font-inter">
        <div className="items-center box-border caret-transparent flex grow justify-center max-w-full outline-[3px] text-center text-nowrap">
          <div className="items-center box-border caret-transparent flex flex-col max-w-full order-1 outline-[3px] overflow-x-clip text-nowrap">
            <span className="text-white font-semibold box-border caret-transparent block leading-5 max-w-full outline-[3px] overflow-x-clip text-ellipsis text-nowrap">
              {label}
            </span>
          </div>
        </div>
      </button>
    </div>
  )
}
