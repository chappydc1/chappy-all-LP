import content from "./adv.json"
import media from "./adv-media.json"
import { TopBar } from "./sections/TopBar"

export default function HearPage() {
  return (
    <main>
      <TopBar content={content} media={media} />
    </main>
  )
}
