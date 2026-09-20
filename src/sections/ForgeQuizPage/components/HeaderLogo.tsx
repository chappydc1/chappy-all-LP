import Image from "next/image"

export type HeaderLogoProps = {
  logoSrc: string
  logoAlt: string
}

export const HeaderLogo = ({ logoSrc, logoAlt }: HeaderLogoProps) => {
  return (
    <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px]">
      <div className="text-[0px] box-border caret-transparent flex leading-[0px] outline-[3px]">
        <div className="box-border caret-transparent h-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="box-border caret-transparent h-[60px] max-w-[130px] object-contain outline-[3px] text-center w-full py-2.5 md:max-w-none md:object-fill">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={130}
              height={40}
              className="box-border caret-transparent inline h-full max-w-full object-contain outline-[3px] align-baseline"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
