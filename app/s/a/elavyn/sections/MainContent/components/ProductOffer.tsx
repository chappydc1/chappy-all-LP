// @ts-nocheck
import adv from "../../../adv.json";
import media from "../../../media.json";
import { ProductIntro } from "./ProductIntro";
import { IngredientsSection } from "./IngredientsSection";
import { ResultsSection } from "./ResultsSection";
import { PricingSection } from "./PricingSection";
import { GuaranteeSection } from "./GuaranteeSection";
import { FinalCallToAction } from "./FinalCallToAction";

export const ProductOffer = () => {
  return (
    <section className="text-[15px] box-border caret-transparent contents leading-[27px] outline-[3px] scroll-smooth font-ui_sans_serif md:text-base md:leading-[28.8px]">
      <section className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-[calc(100%_+_32px)] mx-auto md:text-base md:leading-[28.8px] md:w-full">
        <div className="relative text-[15px] content-start bg-gray-100 bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full outline-[3px] gap-y-0 w-full bg-center mx-auto pb-8 md:text-base md:leading-[28.8px]">
          <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
            <div className="relative text-[15px] content-start bg-white bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full bg-center mx-auto p-4 md:text-base md:grid-cols-[minmax(0px,9fr)_minmax(0px,3fr)] md:leading-[28.8px] md:w-3/5">
              <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                <ProductIntro />
                <IngredientsSection />
                <ResultsSection />
                <PricingSection
                  title={adv.productOffer.pricingTitle}
                  mediaVariant="bg-black overflow-hidden mb-2"
                  mediaWrapperClassName=""
                  mediaContent={
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                      <video
                        title="Video"
                        preload="metadata"
                        poster=""
                        loop
                        muted
                        autoPlay
                        playsInline
                        className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                      ></video>
                    </div>
                  }
                  introClassName="text-lg leading-[23.4px]"
                  introContent={
                    <>
                      {adv.productOffer.costBreakdown.introText}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        {adv.productOffer.costBreakdown.standardRouteLabel}
                      </strong>
                    </>
                  }
                  listItems={[
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        {adv.productOffer.costBreakdown.items[0].label}{" "}
                      </strong>
                      {adv.productOffer.costBreakdown.items[0].amount}
                    </>,
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        {adv.productOffer.costBreakdown.items[1].label}
                      </strong>
                      {adv.productOffer.costBreakdown.items[1].amount}
                    </>,
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        {adv.productOffer.costBreakdown.items[2].label}{" "}
                      </strong>
                      {adv.productOffer.costBreakdown.items[2].amount}
                    </>,
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        {adv.productOffer.costBreakdown.items[3].label}{" "}
                      </strong>
                      {adv.productOffer.costBreakdown.items[3].amount}
                    </>,
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        {adv.productOffer.costBreakdown.items[4].label}
                      </strong>{" "}
                      {adv.productOffer.costBreakdown.items[4].amount}
                    </>,
                  ]}
                  outroClassName="text-lg leading-[23.4px]"
                  outroContent={
                    <>
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        {adv.productOffer.costBreakdown.annualTotalStrong}
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.costBreakdown.p1}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.costBreakdown.p2}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.costBreakdown.p3}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.costBreakdown.p4}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.costBreakdown.p5}
                    </>
                  }
                  imageBlockContent={
                    <div
                      role="presentation"
                      className="relative text-[15px] box-border caret-transparent shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center my-4 md:text-base md:leading-[28.8px]"
                    >
                      <div className="text-[15px] box-border caret-transparent flex h-full justify-center leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]">
                        <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                          <img
                            src={media.productOffer.pricingImageSrc}
                            alt=""
                            className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
                          />
                        </picture>
                      </div>
                    </div>
                  }
                  secondaryContent={
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        {adv.productOffer.secondaryOffer.priceStrong}
                      </strong>
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.productOffer.secondaryOffer.p1}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.productOffer.secondaryOffer.p2}
                      {" "}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.productOffer.secondaryOffer.p3}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.productOffer.secondaryOffer.p4}
                    </>
                  }
                  highlightedContent={
                    <strong className="text-lg font-bold box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:text-xl md:leading-7">
                      {adv.productOffer.highlightQuote}
                    </strong>
                  }
                  closingContent={
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        {adv.productOffer.closingDeal.dealLabel}
                      </strong>
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.productOffer.closingDeal.p1}{" "}
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        {adv.productOffer.closingDeal.priceStrong}
                      </strong>
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.productOffer.closingDeal.p2}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      {adv.productOffer.closingDeal.p3}
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <br className="box-border caret-transparent max-w-full outline-[3px]" />
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                        {adv.productOffer.closingDeal.finalStrong}
                      </strong>
                    </>
                  }
                />
                <PricingSection
                  title={adv.productOffer.sixtyOffTitle}
                  mediaVariant="shrink-0 max-w-full text-center mb-4"
                  mediaWrapperClassName=""
                  mediaContent={
                    <a
                      href={adv.productOffer.ctaUrlProductLink}
                      title=""
                      className="text-[15px] box-border caret-transparent flex h-full justify-center leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                    >
                      <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <img
                          src={media.productOffer.sixtyOffImageSrc}
                          alt=""
                          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
                        />
                      </picture>
                    </a>
                  }
                  introClassName="text-[17px] leading-[22.1px] md:text-lg md:leading-[25.2px]"
                  introContent={
                    <>
                      {adv.productOffer.sixtyOffIntro.p1}
                      <br />
                      <br />
                      {adv.productOffer.sixtyOffIntro.p2}
                      <br />
                      <br />
                      {adv.productOffer.sixtyOffIntro.p3}
                      <br />
                      <br />
                      {adv.productOffer.sixtyOffIntro.p4}
                      <br />
                      <br />
                      {adv.productOffer.sixtyOffIntro.p5}
                      <br />
                      <br />
                      {adv.productOffer.sixtyOffIntro.p6}
                      <br />
                      <br />
                      {adv.productOffer.sixtyOffIntro.p7}
                      <br />
                      <br />
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {adv.productOffer.sixtyOffIntro.releaseStrong}
                      </strong>
                      <br />
                      <br />
                      {adv.productOffer.sixtyOffIntro.p8}
                      <br />
                      <br />
                      <s className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] line-through md:text-lg md:leading-[25.2px]">
                        <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                          {adv.productOffer.sixtyOffIntro.oldPrice}
                        </strong>
                      </s>
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {adv.productOffer.sixtyOffIntro.newPriceStrong}
                      </strong>
                      <br />
                      <br />
                      {adv.productOffer.sixtyOffIntro.p9}
                    </>
                  }
                  listItems={adv.productOffer.sixtyOffListItems}
                  outroClassName="text-[17px] leading-[22.1px] md:text-lg md:leading-[25.2px]"
                  outroContent={
                    <>
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {adv.productOffer.sixtyOffOutro.whyStrong}
                      </strong>
                      <br />
                      <br />
                      {adv.productOffer.sixtyOffOutro.p1}
                      <br />
                      <br />
                      {adv.productOffer.sixtyOffOutro.p2}
                      <br />
                      <br />
                      {adv.productOffer.sixtyOffOutro.p3}
                    </>
                  }
                />
                <PricingSection
                  title={adv.productOffer.brutalRealityTitle}
                  mediaVariant="max-w-full shrink-0 text-center mb-4"
                  mediaWrapperClassName=""
                  mediaContent={
                    <div
                      role="presentation"
                      className="text-[15px] box-border caret-transparent flex h-full justify-center leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                    >
                      <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <img
                          src={media.productOffer.brutalRealityImageSrc}
                          alt=""
                          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
                        />
                      </picture>
                    </div>
                  }
                  introClassName="text-lg leading-[23.4px]"
                  introContent={
                    <>
                      {adv.productOffer.brutalReality.p1}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.brutalReality.p2}
                      {"\u00A0"}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.brutalReality.p3}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        {adv.productOffer.brutalReality.returnPriceStrong}
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.brutalReality.p4}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.brutalReality.p5}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.brutalReality.p6}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        {adv.productOffer.brutalReality.availableStrong}
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.brutalReality.p7}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.brutalReality.p8}
                    </>
                  }
                />
                <GuaranteeSection />
                <FinalCallToAction
                  title={adv.productOffer.decadeTitle}
                  heroImageSrc={media.productOffer.decadeHeroImageSrc}
                  introContent={
                    <>
                      {adv.productOffer.decadeIntro.introText}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {adv.productOffer.decadeIntro.path1Strong}
                      </strong>
                    </>
                  }
                  bulletItems={adv.productOffer.decadeBulletItems}
                  closingContent={
                    <>
                      {adv.productOffer.decadeClosing.p1}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {adv.productOffer.decadeClosing.p2}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {adv.productOffer.decadeClosing.p3}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {adv.productOffer.decadeClosing.p4}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {adv.productOffer.decadeClosing.path2Strong}
                      </strong>
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {adv.productOffer.decadeClosing.p5}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {adv.productOffer.decadeClosing.p6}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {adv.productOffer.decadeClosing.p7}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {adv.productOffer.decadeClosing.wakeUpStrong}
                      </strong>
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {adv.productOffer.decadeClosing.p8}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {" "}
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      {adv.productOffer.decadeClosing.p9}
                    </>
                  }
                />
                <FinalCallToAction
                  title={adv.productOffer.happensNextTitle}
                  heroImageSrc={media.productOffer.happensNextHeroImageSrc}
                  introContent={
                    <>
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {adv.productOffer.happensNextIntro.step1Label}{" "}
                      </strong>
                      {adv.productOffer.happensNextIntro.clickText}{" "}
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {adv.productOffer.happensNextIntro.checkAvailabilityLabel}
                      </strong>
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <br className="text-[17px] box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]" />
                      <strong className="text-[17px] font-bold box-border caret-transparent leading-[22.1px] max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {adv.productOffer.happensNextIntro.step2Label}{" "}
                      </strong>
                      {adv.productOffer.happensNextIntro.choosePackageText}
                    </>
                  }
                  bulletItems={[
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {adv.productOffer.happensNextBulletItems[0].priceLabel}{" "}
                      </strong>
                      <span className="bg-yellow-400/80 box-border caret-transparent max-w-full outline-[3px]">
                        <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                          {adv.productOffer.happensNextBulletItems[0].discountLabel}
                        </strong>
                      </span>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {adv.productOffer.happensNextBulletItems[0].period}
                      </strong>
                      {adv.productOffer.happensNextBulletItems[0].text}
                    </>,
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {adv.productOffer.happensNextBulletItems[1].priceLabel}{" "}
                      </strong>
                      <span className="bg-yellow-400/80 box-border caret-transparent max-w-full outline-[3px]">
                        <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                          {adv.productOffer.happensNextBulletItems[1].discountLabel}
                        </strong>
                      </span>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]"></strong>
                      {adv.productOffer.happensNextBulletItems[1].text}
                    </>,
                    <>
                      <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                        {adv.productOffer.happensNextBulletItems[2].priceLabel}{" "}
                      </strong>
                      <span className="bg-yellow-400/80 box-border caret-transparent max-w-full outline-[3px]">
                        <strong className="font-bold box-border caret-transparent max-w-full outline-[3px] md:text-lg md:leading-[25.2px]">
                          {adv.productOffer.happensNextBulletItems[2].discountLabel}
                        </strong>
                      </span>
                      <span className="bg-white/80 box-border caret-transparent max-w-full outline-[3px]"></span>
                      {adv.productOffer.happensNextBulletItems[2].text}
                    </>,
                  ]}
                  closingContent={
                    <>
                      <span className="text-base box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        <i className="italic box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                          <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                            {adv.productOffer.happensNextClosing.noteStrong}
                          </strong>
                          {adv.productOffer.happensNextClosing.noteText}
                        </i>
                      </span>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        {adv.productOffer.happensNextClosing.step3Label}
                      </strong>
                      {adv.productOffer.happensNextClosing.step3Text}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        {adv.productOffer.happensNextClosing.step4Label}{" "}
                      </strong>
                      {adv.productOffer.happensNextClosing.step4Text}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        {adv.productOffer.happensNextClosing.step5Label}{" "}
                      </strong>
                      {adv.productOffer.happensNextClosing.step5Text}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {"\u00A0"}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        {adv.productOffer.happensNextClosing.step6Label}
                      </strong>
                      {adv.productOffer.happensNextClosing.step6Text}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {"\u00A0"}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.happensNextClosing.whateverText}{" "}
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        {adv.productOffer.happensNextClosing.dontCloseStrong}
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {"\u00A0"}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        {adv.productOffer.happensNextClosing.noLaterStrong}
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.happensNextClosing.laterP1}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.happensNextClosing.laterP2}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      {adv.productOffer.happensNextClosing.laterP3}
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        {adv.productOffer.happensNextClosing.kidneysStrong}
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        {adv.productOffer.happensNextClosing.familyStrong}
                      </strong>
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        {adv.productOffer.happensNextClosing.solutionStrong}
                      </strong>
                    </>
                  }
                  showOfferSections={true}
                />
              </div>
              <div className="relative text-[15px] box-border caret-transparent hidden flex-col justify-start leading-[27px] max-w-full min-h-0 min-w-0 outline-[3px] md:text-base md:flex md:leading-[28.8px] md:min-h-[auto] md:min-w-[auto]"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
