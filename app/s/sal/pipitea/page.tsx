import copy from "./copy.json"
import media from "./media.json"
import { LpMain } from "./sections/LpMain"

export default function PipiteaPage() {
  return <LpMain copy={copy} media={media} />
}
