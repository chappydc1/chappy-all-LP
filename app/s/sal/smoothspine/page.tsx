import adv from "./adv.json"
import media from "./media.json"
import { SalesPage } from "./SalesPage"

export default function NebrooPage() {
  return <SalesPage adv={adv} media={media} />
}
