import copy from "./copy.json"
import media from "./media.json"
import { PipiteaMatchaPageShell } from "./sections/PageShell"

export default function PipiteaMatchaPage() {
  return <PipiteaMatchaPageShell copy={copy} media={media} />
}
