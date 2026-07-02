// @ts-nocheck
import adv from "../../../adv.json";
import media from "../../../media.json";
import { AuthorRow } from "./AuthorRow";
import { MediaBlock } from "./MediaBlock";

export const ArticleHero = () => {
  return (
    <section className="text-[15px] box-border caret-transparent contents leading-[27px] outline-[3px] scroll-smooth font-ui_sans_serif md:text-base md:leading-[28.8px]">
      <section className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-[calc(100%_+_32px)] mx-auto md:text-base md:leading-[28.8px] md:w-full">
        <div className="relative text-[15px] content-start bg-gray-100 bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full outline-[3px] gap-y-0 w-full bg-center mx-auto pt-4 md:text-base md:leading-[28.8px] md:pt-8">
          <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
            <div className="relative text-[15px] content-start bg-white bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-8 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full bg-center mx-auto p-4 md:text-base md:grid-cols-[minmax(0px,9fr)_minmax(0px,3fr)] md:leading-[28.8px] md:w-3/5">
              <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                <div className="text-[15px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left bg-center mb-1 md:text-base md:leading-[28.8px]">
                  <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                    <div className="text-neutral-600 text-sm items-center box-border caret-transparent flex leading-[25.2px] max-w-full outline-[3px] font-arial">
                      <div className="bg-cyan-950 box-border caret-transparent hidden h-6 max-w-full outline-[3px] w-6 mr-4"></div>
                      <div className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]">
                        {adv.articleHero.breadcrumb.home}{" "}
                        <span className="text-zinc-500 box-border caret-transparent max-w-full outline-[3px]">
                          ›
                        </span>
                        {adv.articleHero.breadcrumb.health}{" "}
                        <span className="text-zinc-500 box-border caret-transparent max-w-full outline-[3px]">
                          ›
                        </span>
                        {adv.articleHero.breadcrumb.kidneyHealth}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                  <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                    <h2 className="text-neutral-900 text-[26px] font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[33.8px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-playfair_display md:text-[38px] md:leading-[49.4px]">
                      {adv.articleHero.heroTitle.part1}
                      <span className="text-black text-[26px] box-border caret-transparent leading-[33.8px] max-w-full outline-[3px] md:text-[38px] md:leading-[49.4px]">
                        {" "}
                        {adv.articleHero.heroTitle.highlight}{" "}
                      </span>
                      {adv.articleHero.heroTitle.part2}
                    </h2>
                  </div>
                </div>
                <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left my-2 md:text-base md:leading-[28.8px]">
                  <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                    <h2 className="text-neutral-900 text-base bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[22.4px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter md:text-lg md:leading-[25.2px]">
                      {adv.articleHero.heroSubtitle}
                    </h2>
                  </div>
                </div>
                <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mt-2 mb-1 md:text-base md:leading-[28.8px] md:mb-0">
                  <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                    <h2 className="text-blue-700 text-sm font-medium bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[18.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-figtree md:leading-[19.6px]">
                      {adv.articleHero.dateViews}{" "}
                      <strong className="font-bold box-border caret-transparent leading-[18.2px] max-w-full outline-[3px] md:leading-[19.6px]">
                        👁
                      </strong>
                    </h2>
                  </div>
                </div>
                <AuthorRow />
                <MediaBlock
                  isPresentation={false}
                  containerVariant="aspect-video bg-black overflow-hidden mb-0 md:mb-6"
                  mediaWrapperVariant=""
                  mediaType="video"
                  videoSrc={media.articleHero.heroVideoSrc}
                  videoTitle="Video"
                  videoPoster=""
                  imageSrc=""
                  imageAlt=""
                />
                <MediaBlock
                  isPresentation={true}
                  containerVariant="shrink-0 max-w-full text-center"
                  mediaWrapperVariant="flex h-full justify-center w-full"
                  mediaType="image"
                  videoSrc=""
                  videoTitle=""
                  videoPoster=""
                  imageSrc={media.articleHero.heroImageSrc}
                  imageAlt=""
                />
                <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-6 md:text-base md:leading-[28.8px] md:mb-4">
                  <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                    <h2 className="text-zinc-800 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                      {adv.articleHero.openingNarrative.p1}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p2}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                       
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p3}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                       
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p4}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                       
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p5}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                       
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p6}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                       
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        {adv.articleHero.openingNarrative.p7}
                      </strong>
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p8}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                       
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p9}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p10}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p11}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        {adv.articleHero.openingNarrative.p12}
                      </strong>
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p13}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p14}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p15}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p16}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.articleHero.openingNarrative.p17}
                    </h2>
                  </div>
                </div>
                <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mb-6 mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
                  <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-2xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-playfair_display md:text-[32px] md:leading-[41.6px]">
                          {adv.articleHero.dayEverythingChanged.heading}
                        </h2>
                      </div>
                    </div>
                    <div
                      role="presentation"
                      className="relative text-[15px] box-border caret-transparent shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center mb-2 md:text-base md:leading-[28.8px]"
                    >
                      <div className="text-[15px] box-border caret-transparent flex h-full justify-center leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]">
                        <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                          <img
                            src={media.articleHero.dayEverythingChanged.imageSrc}
                            alt=""
                            className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          {adv.articleHero.dayEverythingChanged.p1}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.dayEverythingChanged.p2}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.dayEverythingChanged.p3}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.dayEverythingChanged.p4}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.dayEverythingChanged.p5}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <i className="italic box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.dayEverythingChanged.quote1a}
                          </i>
                          {adv.articleHero.dayEverythingChanged.quote1mid}
                          <i className="italic box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.dayEverythingChanged.quote1b}
                          </i>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.dayEverythingChanged.creatinine}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.dayEverythingChanged.egfr}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.dayEverythingChanged.p6}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.dayEverythingChanged.p7}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.dayEverythingChanged.p8}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.dayEverythingChanged.p9}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <i className="italic box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.dayEverythingChanged.quote2a}
                          </i>
                          {adv.articleHero.dayEverythingChanged.quote2mid}{" "}
                          <i className="italic box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.dayEverythingChanged.quote2b}
                          </i>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.dayEverythingChanged.p10}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.dayEverythingChanged.p11}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <i className="italic box-border caret-transparent max-w-full outline-[3px]">
                            <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                              {adv.articleHero.dayEverythingChanged.theMachine}
                            </strong>
                          </i>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                           
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.dayEverythingChanged.p12}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.dayEverythingChanged.p13}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.dayEverythingChanged.p14}
                        </h2>
                      </div>
                    </div>
                    <div className="relative text-[15px] bg-black box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mt-6 md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <video
                          title="Video"
                          preload="metadata"
                          poster=""
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={media.articleHero.dayEverythingChanged.videoSrc}
                          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                        ></video>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mb-8 mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
                  <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          {adv.articleHero.treatmentFailures.heading}
                        </h2>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] my-3 md:text-base md:leading-[28.8px]">
                        <div className="text-[15px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-base md:leading-[28.8px]">
                          <div className="text-[15px] box-border caret-transparent flex flex-col leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 md:text-base md:leading-[28.8px]">
                            {adv.articleHero.treatmentFailures.items.map((item, i) => (
                              <div
                                key={i}
                                className="text-[15px] items-center box-border caret-transparent gap-x-2 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]"
                              >
                                <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                                  <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                                    <img
                                      src={media.articleHero.bulletIcon1}
                                      alt="Icon"
                                      className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                                    />
                                  </span>
                                </div>
                                <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                                  <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                                    <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                                      <p className="box-border caret-transparent max-w-full outline-[3px]">
                                        <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                                          {item.label}
                                        </strong>{" "}
                                        {item.text}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.treatmentFailures.nothingWorked}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="box-border caret-transparent max-w-full outline-[3px]">
                             
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                              {adv.articleHero.treatmentFailures.expertsLabel}
                            </strong>
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="box-border caret-transparent max-w-full outline-[3px]">
                             
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.treatmentFailures.p1}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.treatmentFailures.p2}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.treatmentFailures.p3}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.treatmentFailures.p4}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.treatmentFailures.p5}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.treatmentFailures.snapped}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="box-border caret-transparent max-w-full outline-[3px]">
                             
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.treatmentFailures.p6}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.treatmentFailures.p7}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.treatmentFailures.p8}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="box-border caret-transparent max-w-full outline-[3px]">
                             
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                              {adv.articleHero.treatmentFailures.orDieTrying}
                            </strong>
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mb-6 mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
                  <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-2xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-playfair_display md:text-[32px] md:leading-[41.6px]">
                          {adv.articleHero.researchRevealed.heading}
                        </h2>
                      </div>
                    </div>
                    <div className="relative text-[15px] bg-black box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-2 md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <video
                          title="Video"
                          preload="metadata"
                          poster=""
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={media.articleHero.researchRevealed.videoSrc}
                          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                        ></video>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.researchRevealed.p1}
                          </span>
                          <span className="box-border caret-transparent max-w-full outline-[3px]">
                             
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.researchRevealed.p2}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                              {adv.articleHero.researchRevealed.p3}
                            </strong>
                          </span>
                          <span className="box-border caret-transparent max-w-full outline-[3px]">
                             
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.researchRevealed.p4}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                             
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.researchRevealed.p5}
                          </span>
                          <span className="box-border caret-transparent max-w-full outline-[3px]">
                             
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.researchRevealed.p6}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.researchRevealed.p7}
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className="relative text-[15px] content-start bg-red-700 bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full bg-center mx-auto my-3.5 p-2 md:text-base md:leading-[28.8px] md:w-[1200px]">
                      <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                            <h2 className="text-white text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter md:text-xl md:leading-7">
                              <strong className="text-lg font-bold box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:text-xl md:leading-7">
                                {adv.articleHero.researchRevealed.callout}
                              </strong>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          {adv.articleHero.researchRevealed.p8}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.researchRevealed.p9}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                           
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.researchRevealed.p10}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.researchRevealed.p11}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.researchRevealed.p12}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.researchRevealed.p13}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mb-6 mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
                  <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-2xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-playfair_display md:text-[32px] md:leading-[41.6px]">
                          {adv.articleHero.realRootCause.heading}
                        </h2>
                      </div>
                    </div>
                    <div className="relative text-[15px] bg-black box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-2 md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <video
                          title="Video"
                          preload="metadata"
                          poster=""
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={media.articleHero.realRootCause.videoSrc}
                          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                        ></video>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          {adv.articleHero.realRootCause.p1}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.realRootCause.p2}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p3}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p4}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p5}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p6}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.realRootCause.p7}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p8}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p9}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p10}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p11}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p12pre}{" "}
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.realRootCause.p12bold}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p13}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p14}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p15}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p16}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p17}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.realRootCause.p18}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px]">
                  <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                    <h2 className="text-neutral-900 text-2xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-playfair_display md:text-[32px] md:leading-[41.6px]">
                      {adv.articleHero.weatheringEffect.heading}
                    </h2>
                  </div>
                </div>
                <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mb-6 mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
                  <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                    <div className="relative text-[15px] bg-black box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-3 md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <video
                          title="Video"
                          preload="metadata"
                          poster=""
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={media.articleHero.weatheringEffect.videoSrc}
                          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                        ></video>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          <span className="text-red-600 box-border caret-transparent max-w-full outline-[3px]">
                            <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                              {adv.articleHero.weatheringEffect.p1}
                            </strong>
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="box-border caret-transparent max-w-full outline-[3px]">
                             
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.weatheringEffect.p2}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.weatheringEffect.p3}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                           
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.weatheringEffect.p4pre}{" "}
                            <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                              {adv.articleHero.weatheringEffect.p4bold}
                            </strong>
                            {adv.articleHero.weatheringEffect.p4post}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.weatheringEffect.p5}
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className="relative text-[15px] content-start bg-red-700 bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full bg-center mx-auto my-3.5 p-2 md:text-base md:leading-[28.8px] md:w-[1200px]">
                      <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                            <h2 className="text-white text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter md:text-xl md:leading-7">
                              <strong className="text-lg font-bold box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:text-xl md:leading-7">
                                {adv.articleHero.weatheringEffect.callout}
                              </strong>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.weatheringEffect.p6}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.weatheringEffect.p7}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                              {adv.articleHero.weatheringEffect.p8}
                            </strong>
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.weatheringEffect.p9}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.weatheringEffect.p10}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.weatheringEffect.p11}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                           
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.weatheringEffect.p12}
                        </h2>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] my-3 md:text-base md:leading-[28.8px]">
                        <div className="text-[15px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-base md:leading-[28.8px]">
                          <div className="text-[15px] box-border caret-transparent flex flex-col leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 md:text-base md:leading-[28.8px]">
                            {adv.articleHero.weatheringEffect.hamsterWheel.map((item, i) => (
                              <div
                                key={i}
                                className="text-[15px] items-center box-border caret-transparent gap-x-2 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]"
                              >
                                <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                                  <span className="text-neutral-900 text-[28px] items-center box-border caret-transparent flex h-full justify-center leading-[50.4px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                                    <img
                                      src={media.articleHero.bulletIcon2}
                                      alt="Icon"
                                      className="text-[28px] box-border caret-transparent h-7 leading-[50.4px] outline-[3px] w-7 md:text-base md:leading-[28.8px]"
                                    />
                                  </span>
                                </div>
                                <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                                  <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                                    <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                                      <p className="box-border caret-transparent max-w-full outline-[3px]">{item}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          {adv.articleHero.weatheringEffect.p13}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                           
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.weatheringEffect.sociopath}
                          </strong>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mb-6 mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
                  <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-2xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-playfair_display md:text-[32px] md:leading-[41.6px]">
                          {adv.articleHero.miracleHiding.heading}
                        </h2>
                      </div>
                    </div>
                    <div className="relative text-[15px] bg-black box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-2 md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <video
                          title="Video"
                          preload="metadata"
                          poster=""
                          loop
                          muted
                          autoPlay
                          playsInline
                          src={media.articleHero.miracleHiding.videoSrc}
                          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                        ></video>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.miracleHiding.p1}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.miracleHiding.p2}
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className="relative text-[15px] content-start bg-slate-200 bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full bg-center mx-auto my-3.5 p-2 md:text-base md:leading-[28.8px] md:w-[1200px]">
                      <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                            <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter md:text-xl md:leading-7">
                              <span className="text-black text-lg box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-7">
                                <strong className="font-bold box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-7">
                                  {adv.articleHero.miracleHiding.callout}
                                </strong>
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.miracleHiding.p3}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.miracleHiding.p4}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                           
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.miracleHiding.p5}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.miracleHiding.p6}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.miracleHiding.p7}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.miracleHiding.p8}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.miracleHiding.p9}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.miracleHiding.p10}
                        </h2>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] my-3 md:text-base md:leading-[28.8px]">
                        <div className="text-[15px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-base md:leading-[28.8px]">
                          <div className="text-[15px] box-border caret-transparent flex flex-col leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 md:text-base md:leading-[28.8px]">
                            <div className="text-[15px] items-center box-border caret-transparent gap-x-0 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                              <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                                <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                                  <img
                                    src={media.articleHero.bulletIcon1}
                                    alt="Icon"
                                    className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                                  />
                                </span>
                              </div>
                              <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                                <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                                  <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                                    <p className="box-border caret-transparent max-w-full outline-[3px]">
                                      <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                                        {adv.articleHero.miracleHiding.problemList[0].pre}{" "}
                                        <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                                          {adv.articleHero.miracleHiding.problemList[0].bold}
                                        </strong>
                                        {adv.articleHero.miracleHiding.problemList[0].post}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[15px] items-center box-border caret-transparent gap-x-0 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                              <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                                <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                                  <img
                                    src={media.articleHero.bulletIcon1}
                                    alt="Icon"
                                    className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                                  />
                                </span>
                              </div>
                              <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                                <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                                  <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                                    <p className="box-border caret-transparent max-w-full outline-[3px]">
                                      <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                                        {adv.articleHero.miracleHiding.problemList[1].text}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[15px] items-center box-border caret-transparent gap-x-0 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                              <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                                <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                                  <img
                                    src={media.articleHero.bulletIcon1}
                                    alt="Icon"
                                    className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                                  />
                                </span>
                              </div>
                              <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                                <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                                  <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                                    <p className="box-border caret-transparent max-w-full outline-[3px]">
                                      <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                                        {adv.articleHero.miracleHiding.problemList[2].text}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[15px] items-center box-border caret-transparent gap-x-0 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                              <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                                <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                                  <img
                                    src={media.articleHero.bulletIcon1}
                                    alt="Icon"
                                    className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                                  />
                                </span>
                              </div>
                              <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                                <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                                  <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                                    <p className="box-border caret-transparent max-w-full outline-[3px]">
                                      <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                                        {adv.articleHero.miracleHiding.problemList[3].text}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          {adv.articleHero.miracleHiding.p11}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.miracleHiding.p12}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.miracleHiding.p13}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.miracleHiding.p14}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.miracleHiding.p15}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.miracleHiding.p16}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.miracleHiding.p17}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.miracleHiding.p18}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.miracleHiding.p19}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.miracleHiding.p20}
                        </h2>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] my-3 md:text-base md:leading-[28.8px]">
                        <div className="text-[15px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-base md:leading-[28.8px]">
                          <div className="text-[15px] box-border caret-transparent flex flex-col leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 md:text-base md:leading-[28.8px]">
                            {adv.articleHero.miracleHiding.resultsList.map((item, i) => (
                              <div
                                key={i}
                                className="text-[15px] items-center box-border caret-transparent gap-x-0 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]"
                              >
                                <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                                  <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                                    <img
                                      src={media.articleHero.bulletIcon1}
                                      alt="Icon"
                                      className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                                    />
                                  </span>
                                </div>
                                <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                                  <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                                    <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                                      <p className="box-border caret-transparent max-w-full outline-[3px]">
                                        <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                                          {item}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.miracleHiding.p21}
                          </span>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.miracleHiding.p22}
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mb-6 mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
                  <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-2xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-playfair_display md:text-[32px] md:leading-[41.6px]">
                          {adv.articleHero.pissingOffIndustry.heading}
                        </h2>
                      </div>
                    </div>
                    <div className="relative text-[15px] aspect-video bg-black box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden mb-3 md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <video
                          title="Video"
                          preload="metadata"
                          poster=""
                          loop
                          muted
                          autoPlay
                          playsInline
                          className="text-[15px] aspect-video box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                        ></video>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          {adv.articleHero.pissingOffIndustry.p1}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.pissingOffIndustry.p2}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <i className="italic box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.pissingOffIndustry.quote1}
                          </i>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <i className="italic box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.pissingOffIndustry.quote2}
                          </i>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.pissingOffIndustry.p3}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.pissingOffIndustry.p4}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.pissingOffIndustry.p5}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.pissingOffIndustry.p6}
                        </h2>
                      </div>
                    </div>
                    <div className="relative text-[15px] content-start bg-slate-200 bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full bg-center mx-auto my-3.5 p-2 md:text-base md:leading-[28.8px] md:w-[1200px]">
                      <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                            <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter md:text-xl md:leading-7">
                              <span className="text-black text-lg box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-7">
                                <i className="italic box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-7">
                                  <strong className="font-bold box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-7">
                                    {adv.articleHero.pissingOffIndustry.callout}
                                  </strong>
                                </i>
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          {adv.articleHero.pissingOffIndustry.p7}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.pissingOffIndustry.p8}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.pissingOffIndustry.p9}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.pissingOffIndustry.p10}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.pissingOffIndustry.everyOne}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.pissingOffIndustry.p11}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.pissingOffIndustry.p12}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.pissingOffIndustry.p13}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mb-6 mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
                  <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-2xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-playfair_display md:text-[32px] md:leading-[41.6px]">
                          {adv.articleHero.whenYouMess.heading}
                        </h2>
                      </div>
                    </div>
                    <div
                      role="presentation"
                      className="relative text-[15px] box-border caret-transparent shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center mb-4 md:text-base md:leading-[28.8px]"
                    >
                      <div className="text-[15px] box-border caret-transparent flex h-full justify-center leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]">
                        <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                          <img
                            src={media.articleHero.whenYouMess.imageSrc}
                            alt=""
                            className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          {adv.articleHero.whenYouMess.p1}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <i className="italic box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.whenYouMess.quote1}
                          </i>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.whenYouMess.shoveIt}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.whenYouMess.p2}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.whenYouMess.p3}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.whenYouMess.p4}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.whenYouMess.p5}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                           
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.whenYouMess.blackDoctor}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.whenYouMess.p6pre}{" "}
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.whenYouMess.p6bold}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.whenYouMess.p7}
                        </h2>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] my-3 md:text-base md:leading-[28.8px]">
                        <div className="text-[15px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-base md:leading-[28.8px]">
                          <div className="text-[15px] box-border caret-transparent flex flex-col leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 md:text-base md:leading-[28.8px]">
                            <div className="text-[15px] items-center box-border caret-transparent gap-x-0 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                              <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                                <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                                  <img
                                    src={media.articleHero.bulletIcon1}
                                    alt="Icon"
                                    className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                                  />
                                </span>
                              </div>
                              <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                                <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                                  <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                                    <p className="box-border caret-transparent max-w-full outline-[3px]">
                                      <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                                        <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                                          {adv.articleHero.whenYouMess.solutionList[0].bold}
                                        </strong>
                                        {adv.articleHero.whenYouMess.solutionList[0].text}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[15px] items-center box-border caret-transparent gap-x-0 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                              <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                                <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                                  <img
                                    src={media.articleHero.bulletIcon1}
                                    alt="Icon"
                                    className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                                  />
                                </span>
                              </div>
                              <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                                <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                                  <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                                    <p className="box-border caret-transparent max-w-full outline-[3px]">
                                      <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                                        <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                                          {adv.articleHero.whenYouMess.solutionList[1].bold}
                                        </strong>
                                        {adv.articleHero.whenYouMess.solutionList[1].text}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[15px] items-center box-border caret-transparent gap-x-0 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                              <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                                <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                                  <img
                                    src={media.articleHero.bulletIcon1}
                                    alt="Icon"
                                    className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                                  />
                                </span>
                              </div>
                              <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                                <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                                  <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                                    <p className="box-border caret-transparent max-w-full outline-[3px]">
                                      <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                                        <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                                          {adv.articleHero.whenYouMess.solutionList[2].bold}
                                        </strong>
                                        {adv.articleHero.whenYouMess.solutionList[2].text}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-[15px] items-center box-border caret-transparent gap-x-0 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                              <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                                <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                                  <img
                                    src={media.articleHero.bulletIcon1}
                                    alt="Icon"
                                    className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                                  />
                                </span>
                              </div>
                              <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                                <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                                  <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                                    <p className="box-border caret-transparent max-w-full outline-[3px]">
                                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                                        {adv.articleHero.whenYouMess.solutionList[3].bold}
                                      </strong>
                                      {adv.articleHero.whenYouMess.solutionList[3].text}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
                          {adv.articleHero.whenYouMess.p8}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.whenYouMess.p9}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                           
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.whenYouMess.p10}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          {adv.articleHero.whenYouMess.p11}
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.whenYouMess.p12}
                          </strong>
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <br className="box-border caret-transparent max-w-full outline-[3px]" />
                          <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                            {adv.articleHero.whenYouMess.p13}
                          </strong>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 hidden grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-0 min-w-0 outline-[3px] gap-y-0 w-full mx-auto md:text-base md:grid md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto] md:w-[1200px]">
                  <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-0 min-w-0 outline-[3px] md:text-base md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto]">
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-0 min-w-0 outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <div className="text-black text-sm font-semibold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-0 min-w-0 outline-[3px] text-center w-full overflow-hidden bg-center font-figtree md:text-base md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto]">
                          <p className="text-sm box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:text-base md:leading-[22.4px]">
                            {adv.articleHero.sidebar.blurb1}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      role="presentation"
                      className="relative text-[15px] box-border caret-transparent shrink-0 leading-[27px] max-w-full min-h-0 min-w-0 outline-[3px] text-center mb-2 md:text-base md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto]"
                    >
                      <div className="text-[15px] box-border caret-transparent flex h-full justify-center leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]">
                        <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                          <img
                            src={media.articleHero.sidebar.image1}
                            alt=""
                            className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-0 min-w-0 object-cover outline-[3px] w-full md:text-base md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto]"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-0 min-w-0 outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <div className="text-black text-sm font-semibold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-0 min-w-0 outline-[3px] text-center w-full overflow-hidden bg-center font-figtree md:text-base md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto]">
                          <p className="text-sm box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:text-base md:leading-[22.4px]">
                            {adv.articleHero.sidebar.blurb2}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      role="presentation"
                      className="relative text-[15px] box-border caret-transparent shrink-0 leading-[27px] max-w-full min-h-0 min-w-0 outline-[3px] text-center mb-2 md:text-base md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto]"
                    >
                      <div className="text-[15px] box-border caret-transparent flex h-full justify-center leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]">
                        <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                          <img
                            src={media.articleHero.sidebar.image2}
                            alt=""
                            className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-0 min-w-0 object-cover outline-[3px] w-full md:text-base md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto]"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
