import type { AdvContent, AdvMedia } from "@/sections/ForgeQuizPage/types"

import { HeaderBackButton } from "@/sections/ForgeQuizPage/components/HeaderBackButton"
import { HeaderLogo } from "@/sections/ForgeQuizPage/components/HeaderLogo"
import { ProgressBar } from "@/sections/ForgeQuizPage/components/ProgressBar"

export type QuizHeaderProps = {
  content: AdvContent["header"]
  media: AdvMedia
  progressPercent: number
  onBack?: () => void
  backDisabled?: boolean
}

export const QuizHeader = ({ content, media, progressPercent, onBack, backDisabled }: QuizHeaderProps) => {
  return (
    <header className="sticky bg-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] z-[6] top-0">
      <div className="border-b-gray-200 border-l-neutral-950 border-r-neutral-950 border-t-neutral-950 box-border caret-transparent min-h-5 outline-[3px] border-b md:min-h-10">
        <div className="box-border caret-transparent basis-[0%] grow outline-[3px]">
          <div className="box-border caret-transparent outline-[3px]">
            <div className="box-border caret-transparent basis-0 grow max-w-full outline-[3px]">
              <div className="box-border caret-transparent outline-[3px] w-full mx-auto">
                <div className="box-border caret-transparent outline-[3px] m-[5px]">
                  <div className="items-center box-border caret-transparent gap-x-0 flex basis-[0%] grow flex-wrap outline-[3px] gap-y-0 mr-auto">
                    <div className="box-border caret-transparent basis-0 grow max-w-full min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px]">
                        <div className="box-border caret-transparent outline-[3px]">
                          <div className="box-border caret-transparent outline-[3px] py-0 md:py-5">
                            <HeaderBackButton
                              iconSrc={media.headerBackIcon}
                              iconAlt={content.backButtonAlt}
                              onClick={onBack}
                              disabled={backDisabled}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <HeaderLogo
                      logoSrc={media.headerLogo}
                      logoAlt={content.logoAlt}
                    />
                    <div className="box-border caret-transparent basis-0 grow max-w-full min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px]">
                        <div className="box-border caret-transparent outline-[3px]">
                          <div className="box-border caret-transparent outline-[3px]">
                            <div className="box-border caret-transparent hidden outline-[3px] w-[10%]">
                              I hope you{" "}
                              <strong className="font-bold box-border caret-transparent outline-[3px] font-hvdtrial_brandontext_regular">
                                know
                              </strong>
                              what you are doing ♥
                              <p className="box-border caret-transparent leading-[21.6px] outline-[3px] my-4"></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProgressBar percent={progressPercent} />
          </div>
        </div>
      </div>
    </header>
  )
}
