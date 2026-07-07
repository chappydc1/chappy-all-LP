import content from "./adv.json"
import media from "./adv-media.json"
import { HearTopBar } from "./sections/TopBar"

export default function HearPage() {
  return (
    <main>
      <HearTopBar content={content} media={media} />
    </main>
  )
}
