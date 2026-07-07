import content from "./copy.json"
import media from "./media.json"
import { HearTopBar } from "./sections/TopBar"

export default function HearPage() {
  return (
    <main>
      <HearTopBar content={content} media={media} />
    </main>
  )
}
