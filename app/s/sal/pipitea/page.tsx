import copy from "./copy.json"
import media from "./media.json"
import { PipiteaLpMain } from "./sections/LpMain"

export default function PipiteaPage() {
  return <PipiteaLpMain copy={copy} media={media} />
}
