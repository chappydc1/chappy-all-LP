import copy from "../../copy.json"
import media from "../../media.json"
import { IconMarquee } from "../../components/IconMarquee"

import "./benefits-marquee.css"

export function BenefitsMarquee(): React.JSX.Element {
  return (
    <IconMarquee
      items={copy.benefitsMarquee.items}
      icons={media.benefitsMarquee.icons}
      repeat={5}
      className="cy-bm"
      background="#ffffff"
      color="#000000"
    />
  )
}
