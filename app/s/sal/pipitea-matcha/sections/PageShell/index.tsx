"use client"
import { PipiteaMatchaLpProvider } from "../../context/LpContext"
import type { PipiteaMatchaLpCopy, PipiteaMatchaLpMedia } from "../../context/LpContext"
import { PipiteaMatchaTopAnnouncement } from "./components/PipiteaMatchaTopAnnouncement"
import { PipiteaMatchaHeaderLogo } from "./components/PipiteaMatchaHeaderLogo"
import { PipiteaMatchaProductHero } from "../ProductHero"
import { PipiteaMatchaProblemSolutionSection } from "../ProblemSolutionSection"
import { PipiteaMatchaSurveyResults } from "../SurveyResults"
import { PipiteaMatchaComparisonNarrative } from "../ComparisonNarrative"
import { PipiteaMatchaFeaturedReviews } from "../FeaturedReviews"
import { PipiteaMatchaProductPromise } from "../ProductPromise"
import { PipiteaMatchaResultsTimeline } from "../ResultsTimeline"
import { PipiteaMatchaSupplementComparison } from "../SupplementComparison"
import { PipiteaMatchaPreparationSteps } from "../PreparationSteps"
import { PipiteaMatchaSpecialOffer } from "../SpecialOffer"
import { PipiteaMatchaCustomerReviews } from "../CustomerReviews"
import { PipiteaMatchaFaqSection } from "../FaqSection"
import { PipiteaMatchaFinalCta } from "../FinalCta"
import { PipiteaMatchaStickyMobileCta } from "../StickyMobileCta"
import { PipiteaMatchaFooter } from "../Footer"

interface Props {
  copy: PipiteaMatchaLpCopy
  media: PipiteaMatchaLpMedia
}

export function PipiteaMatchaPageShell({ copy, media }: Props): JSX.Element {
  return (
    <PipiteaMatchaLpProvider value={{ copy, media }}>
      <div
        href=""
        className="text-gray-800 text-sm bg-white bg-no-repeat box-border caret-transparent leading-[21px] outline-[3px] text-center font-libre_franklin"
      >
        <main
          href=""
          className="items-center box-border caret-transparent flex flex-col min-h-[1000px] outline-[3px] w-full"
        >
          <PipiteaMatchaTopAnnouncement />
          <PipiteaMatchaHeaderLogo />
          <PipiteaMatchaProductHero />
          <PipiteaMatchaProblemSolutionSection />
          <PipiteaMatchaSurveyResults />
          <PipiteaMatchaComparisonNarrative />
          <PipiteaMatchaFeaturedReviews />
          <section
            href=""
            className="relative items-center bg-zinc-300/30 bg-no-repeat box-border caret-transparent hidden flex-col justify-items-center outline-[3px] w-full bg-center px-[15px] py-[45px] md:py-[60px]"
          >
            <div
              href=""
              className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] outline-[3px] text-start w-full bg-center md:flex-row"
            >
              <div
                href=""
                className="box-border caret-transparent outline-[3px] align-top w-full"
              >
                <div
                  href=""
                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                >
                  <div
                    href=""
                    className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full"
                  >
                    <img
                      src="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/15.svg"
                      alt=""
                      href=""
                      title=""
                      className="absolute box-border caret-transparent max-w-full outline-[3px] w-full bottom-0 md:bottom-[-45px]"
                    />
                  </div>
                </div>
                <div
                  href=""
                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                >
                  <div
                    href=""
                    className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full"
                  >
                    <img
                      src="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/14.svg"
                      alt=""
                      href=""
                      title=""
                      className="absolute box-border caret-transparent max-w-full outline-[3px] w-full top-0 md:top-[-45px]"
                    />
                  </div>
                </div>
                <div
                  href=""
                  className="items-center box-border caret-transparent flex justify-center outline-[3px]"
                >
                  <div
                    href=""
                    className="text-black text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] text-center w-full md:text-[35px] md:leading-[42px]"
                  >
                    <div
                      href=""
                      className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] w-full md:text-[35px] md:leading-[42px]"
                    >
                      <p
                        href=""
                        className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]"
                      >
                        <strong
                          href=""
                          className="text-[27.0583px] font-bold box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]"
                        >
                          Rosabella Moringa Promise
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <PipiteaMatchaProductPromise />
          <PipiteaMatchaResultsTimeline />
          <PipiteaMatchaSupplementComparison />
          <PipiteaMatchaPreparationSteps />
          <PipiteaMatchaSpecialOffer />
          <PipiteaMatchaCustomerReviews />
          <PipiteaMatchaFaqSection />
          <PipiteaMatchaFinalCta />
          <PipiteaMatchaStickyMobileCta />
          <PipiteaMatchaFooter />
        </main>
      </div>
    </PipiteaMatchaLpProvider>
  )
}
