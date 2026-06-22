import React from "react"
type LogoMedia = { src: string; alt: string }

export function HeaderLogo({ logo }: { logo: LogoMedia }): React.JSX.Element {
  return (
    <div className="bg-neutral-100 box-border caret-transparent grow-[20] shrink-0 max-w-full outline-[3px]">
      <div className="text-[0px] box-border caret-transparent flex h-[65px] leading-[0px] outline-[3px]">
        <div className="box-border caret-transparent h-full outline-[3px] text-center w-full pl-[15px] py-2.5">
          <picture className="box-border caret-transparent outline-[3px]">
            <img
              src={logo.src}
              alt={logo.alt}
              className="box-border caret-transparent inline h-full max-w-full outline-[3px] align-baseline"
            />
          </picture>
        </div>
      </div>
    </div>
  )
}
