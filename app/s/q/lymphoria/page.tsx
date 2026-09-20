import { Header } from "./sections/Header"
import { Footer } from "./sections/Footer"
import { QuizFlow } from "./QuizFlow"
import media from "./media.json"
import adv from "./adv.json"

export default function LymphoriaPage() {
  return (
    <>
      <Header logoUrl={media.logo} logoAlt={adv.header.logoAlt} />
      <QuizFlow />
      <Footer />
    </>
  )
}
