import copy from "./copy.json"
import media from "./media.json"
import { PageShell } from "./sections/PageShell"

export default function PipiteaMatchaPage() {
  return <PageShell copy={copy} media={media} />
}
