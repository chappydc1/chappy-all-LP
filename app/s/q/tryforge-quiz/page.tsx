import adv from "./adv.json"
import media from "./media.json"

import { HiddenFields } from "@/components/HiddenFields"
import { HiddenIframe } from "@/components/HiddenIframe"
import { ForgeQuizPage } from "@/sections/ForgeQuizPage"
import type { AdvContent, AdvMedia } from "@/sections/ForgeQuizPage/types"

export default function TryforgeQuizPage(): React.ReactElement {
  return (
    <div className="text-gray-500 text-[13px] not-italic normal-nums font-normal accent-auto bg-zinc-50 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif">
      <ForgeQuizPage
        content={adv as AdvContent}
        media={media as AdvMedia}
      />
      <HiddenFields />
      <HiddenIframe src="about://blank" />
      <HiddenIframe />
      <HiddenIframe />
    </div>
  )
}
