import copy from "../../copy.json"
import media from "../../media.json"
import { IconMarquee } from "../../components/IconMarquee"

import "./top-marquee.css"

export function TopMarquee(): React.JSX.Element {
  return (
    <IconMarquee
      items={copy.topMarquee.items}
      icons={media.topMarquee.icons}
      repeat={5}
      className="cy-tm"
      background="#c47245"
      color="#ffffff"
    />
  )
}
