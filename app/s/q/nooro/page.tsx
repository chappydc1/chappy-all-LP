import React from "react"
import { QuizEngine } from "../../../../src/sections/QuizPage/QuizEngine"
import adv from "./copy.json"
import media from "./media.json"

export default function NooroQuizPage(): React.JSX.Element {
  return <QuizEngine adv={adv as Parameters<typeof QuizEngine>[0]["adv"]} media={media} />
}
