import React from "react"
import { HeaderMenuButton } from "@/sections/Header/components/HeaderMenuButton"
import { HeaderLogo } from "@/sections/Header/components/HeaderLogo"
import { HeaderNavigation } from "@/sections/Header/components/HeaderNavigation"
import { HeaderActions } from "@/sections/Header/components/HeaderActions"

type Media = {
  logo: { src: string; alt: string }
  menuIcon: { src: string; alt: string }
}

export function DesktopHeader({ media }: { media: Media }): React.JSX.Element {
  return (
    <div className="border-b-gray-200 box-border caret-transparent hidden min-h-10 outline-[3px] border-t-white border-x-white border-b md:min-h-[60px]">
      <div className="box-border caret-transparent basis-[0%] grow outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="bg-neutral-100 box-border caret-transparent basis-0 grow max-w-full outline-[3px]">
            <div className="box-border caret-transparent outline-[3px] w-full mx-auto">
              <div className="box-border caret-transparent outline-[3px] pb-px">
                <div className="items-end box-border caret-transparent gap-x-0 flex basis-[0%] grow flex-wrap max-w-[800px] outline-[3px] gap-y-0 mx-auto">
                  <div className="box-border caret-transparent basis-0 grow max-w-full outline-[3px]">
                    <div className="box-border caret-transparent outline-[3px]">
                      <HeaderMenuButton menuIcon={media.menuIcon} />
                    </div>
                  </div>
                  <HeaderLogo logo={media.logo} />
                  <HeaderNavigation />
                  <HeaderActions />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
