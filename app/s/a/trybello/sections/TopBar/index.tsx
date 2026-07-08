"use client";

type TrustBadge = { text: string };
type FooterLink = { label: string; href: string };
type Comment = { authorName: string; commentText: string; metaText: string; indent: boolean };
type CustomerReviewImages = { smoothStars: string; cr1: string; cr2: string; cr3: string; cr4: string; cr5: string };
// A block of prose, keyed p1, p2, p3, ... instead of a plain array so each
// paragraph is independently addressable when editing the copy.
type ProseBlock = Record<string, string>;
type TwoPaths = { intro: ProseBlock; path1Heading: string; path1: ProseBlock; path2Heading: string; path2: ProseBlock; outro: ProseBlock };
type ClosingBlock = { signoff: string; byline: string; ps: string; pps: string; ppps: string };
type UrgencyUpdate = { label: string; date: string; text: string; noteLabel: string; note: string };
type AdvBody = {
  opening: ProseBlock;
  patientBroke: ProseBlock;
  rootCause: ProseBlock;
  dhtBiology: ProseBlock;
  treatmentsFailed: ProseBlock;
  discovery60sec: ProseBlock;
  firstTestSubject: ProseBlock;
  patientRevolution: ProseBlock;
  industryOpposition: ProseBlock;
  productIntro: ProseBlock;
  ingredientTruth: ProseBlock;
  realWomen: ProseBlock;
  pricingSection: ProseBlock;
  guarantee: ProseBlock;
  twoPaths: TwoPaths;
  whatToDoNext: ProseBlock;
  ctaBenefits: ProseBlock;
  closing: ClosingBlock;
  urgencyUpdate: UrgencyUpdate;
};
type SectionHeadings = {
  patientBroke: string; whatIDiscovered: string; comparableToBaldingMen: string; treatmentsFailed: string;
  discovery60sec: string; firstTestSubject: string; patientRevolution: string; industryOpposition: string;
  productIntro: string; ingredientTruth: string; realWomen: string; pricingSection: string; guarantee: string;
  twoPaths: string; whatToDoNext: string;
};
type ReviewStar = { label: string; percent: string };
type ReviewFeature = { label: string; score: string };
type CustomerReviews = { title: string; rating: string; ratingCount: string; byFeatureLabel: string; stars: ReviewStar[]; features: ReviewFeature[] };
type AdvContent = { headline: string; subheadline: string; authorPublished: string; authorByline: string; ctaLabel: string; disclaimerText: string; copyright: string; footerLinks: FooterLink[]; trustBadges: TrustBadge[]; comments: Comment[]; sectionHeadings: SectionHeadings; body: AdvBody; ctaButtons: string[]; customerReviews: CustomerReviews };
type AdvMedia = { heroGif: string; heroVideo: string; authorAvatar: string; ctaArrowIcon: string; articleImages: string[]; trustBadgeImages: string[]; commentAvatars: string[]; customerReviewImages: CustomerReviewImages };

const ADV_CTA_URL = "https://trybello.com/products/bello-hair-helper-spray";

const PROSE_PARAGRAPH_CLASSNAME = "box-border caret-transparent outline-[3px]";
const PROSE_SPACER_CLASSNAME =
  "box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans";

// A prose block's paragraphs are keyed p1, p2, p3, ... — this reads them
// back out in order, ignoring any non-numbered keys.
function proseLines(block: ProseBlock): string[] {
  return Object.entries(block)
    .filter(([key]) => /^p\d+$/.test(key))
    .sort(([a], [b]) => Number(a.slice(1)) - Number(b.slice(1)))
    .map(([, value]) => value);
}

// Renders a run of prose paragraphs with the blank spacer paragraph between
// each pair (but not after the last one), matching the advertorial's copy rhythm.
function renderProse(lines: string[]) {
  return lines.flatMap((line, idx) => {
    const paragraph = <p key={`p${idx}`} className={PROSE_PARAGRAPH_CLASSNAME}>{line}</p>;
    if (idx === lines.length - 1) return [paragraph];
    return [paragraph, <p key={`s${idx}`} className={PROSE_SPACER_CLASSNAME} />];
  });
}

// The "Two Paths" section stitches intro/path1/path2/outro prose together
// with the two path headings inline, all sharing one continuous spacer rhythm.
function renderTwoPaths(twoPaths: TwoPaths) {
  const items: (string | { heading: string })[] = [
    ...proseLines(twoPaths.intro),
    { heading: twoPaths.path1Heading },
    ...proseLines(twoPaths.path1),
    { heading: twoPaths.path2Heading },
    ...proseLines(twoPaths.path2),
    ...proseLines(twoPaths.outro),
  ];
  return items.flatMap((item, idx) => {
    const paragraph =
      typeof item === "string" ? (
        <p key={`p${idx}`} className={PROSE_PARAGRAPH_CLASSNAME}>{item}</p>
      ) : (
        <p key={`p${idx}`} className={PROSE_PARAGRAPH_CLASSNAME}>
          <strong className="font-bold box-border caret-transparent outline-[3px]">{item.heading}</strong>
        </p>
      );
    if (idx === items.length - 1) return [paragraph];
    return [paragraph, <p key={`s${idx}`} className={PROSE_SPACER_CLASSNAME} />];
  });
}

export function TrybelloTopBar({ content, media }: { content: AdvContent; media: AdvMedia }) {
  return (
    <div className="text-gray-800 text-sm bg-white w-full font-roboto">
      <div className="max-w-[1200px] mx-auto">
    <div className="relative text-zinc-800 bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-col max-w-[98%] min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 text-start w-[98%] bg-[position:50%_top] md:flex-row">
      <span className="absolute box-border caret-transparent block h-0 outline-[3px] w-0 overflow-hidden"></span>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full">
        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
          <div className="items-center box-border caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
            <div className="text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[18px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[18px] text-center w-[stretch] bg-[position:50%_top] px-2.5 py-5 md:px-0">
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full order-1 outline-[3px] w-full md:max-w-[75%] md:min-w-[75%] md:w-9/12">
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-[26px] font-bold box-border caret-transparent flex leading-8 min-h-[auto] min-w-[auto] outline-[3px] text-left w-full px-2.5 font-open_sans md:text-[40px] md:leading-[50px]">
                      <div className="text-[26px] box-border caret-transparent leading-8 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[40px] md:leading-[50px]">
                        <p className="text-[26px] box-border caret-transparent leading-8 outline-[3px] md:text-[40px] md:leading-[50px]">{content.headline}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black italic box-border caret-transparent flex leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full p-2.5 font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        <p className="box-border caret-transparent outline-[3px]">
                          <span className="bg-yellow-400 box-border caret-transparent outline-[3px]">
                            <strong className="font-bold box-border caret-transparent outline-[3px]">
                              and the 60-second daily ritual she created to
                              finally make it right{" "}
                            </strong>
                            (without drugs, hormones, or prescriptions)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full my-[15px]">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src={media.heroGif}
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-cover outline-[3px] align-baseline w-full rounded-[10px]"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="items-center bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-wrap min-w-[auto] outline-[3px] gap-y-0 w-[stretch] bg-[position:50%_top]">
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[20%] min-h-[auto] min-w-[20%] order-1 outline-[3px] w-1/5 md:max-w-[8%] md:min-w-[8%] md:w-[8%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src={media.authorAvatar} className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[50px] rounded-[100px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm italic box-border caret-transparent hidden leading-[21px] min-h-0 min-w-0 outline-[3px] text-left w-full py-2.5 font-open_sans md:text-[17px] md:flex md:leading-[25.5px] md:min-h-[auto] md:min-w-[auto]">
                              <div className="text-sm box-border caret-transparent leading-[21px] min-h-0 min-w-0 outline-[3px] w-full md:text-[17px] md:leading-[25.5px] md:min-h-[auto] md:min-w-[auto]">
                                <p className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[17px] md:leading-[25.5px]">{content.authorPublished}</p>
                                <p className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[17px] md:leading-[25.5px]">{content.authorByline}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm italic box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-2.5 font-open_sans md:text-[17px] md:hidden md:leading-[25.5px] md:min-h-0 md:min-w-0">
                              <div className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[17px] md:leading-[25.5px] md:min-h-0 md:min-w-0">
                                <p className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[17px] md:leading-[25.5px]">{content.authorPublished}</p>
                                <p className="text-sm box-border caret-transparent leading-[21px] outline-[3px] md:text-[17px] md:leading-[25.5px]">{content.authorByline}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-2.5 font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.opening))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.patientBroke}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="box-border caret-transparent outline-[3px] text-left mt-2.5">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="box-border caret-transparent outline-[3px] align-baseline w-full rounded-[10px]"
                      >
                        <source
                          src={media.heroVideo}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-2.5 font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.patientBroke))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.whatIDiscovered}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full my-2.5">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1772644182-1772557337-hhp-1.gif"
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-cover outline-[3px] align-baseline w-full rounded-[10px]"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.rootCause))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.comparableToBaldingMen}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768941787-Healthy_Anagen_Phase.jpg"
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-full rounded-[10px]"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.dhtBiology))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.treatmentsFailed}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full my-2.5">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768941855-hf_20260117_193233_76f38cf4-522c-4e78-aa6b-f023b7ced6ed.png"
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-cover outline-[3px] align-baseline w-full rounded-[10px]"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.treatmentsFailed))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.discovery60sec}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full my-2.5">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1769037358-spray_trim.gif"
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-contain outline-[3px] align-baseline w-full rounded-[10px]"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.discovery60sec))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.firstTestSubject}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full my-2.5">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768942163-4.jpg"
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-full rounded-[10px]"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.firstTestSubject))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.patientRevolution}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-[5px]">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768942217-Healthy_Anagen_Phase6.jpg"
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-full rounded-[10px]"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.patientRevolution))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.industryOpposition}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-[5px]">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768942261-gif_3990.gif"
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-contain outline-[3px] align-baseline w-full rounded-[10px]"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.industryOpposition))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.productIntro}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768942312-JAN_2026.jpg"
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-full rounded-[10px]"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.productIntro))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.ingredientTruth}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768942390-JAN_2026_(1).jpg"
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-full rounded-[10px]"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.ingredientTruth))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.realWomen}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full my-2.5">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768942582-Healthy_Anagen_Phase6_(1)222.jpg"
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-full rounded-[10px]"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.realWomen))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.pricingSection}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src={media.articleImages[10]}
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-full"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.pricingSection))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.guarantee}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768942701-JAN_2026_(2).jpg"
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-full rounded-[10px]"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.guarantee))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <h2 className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.twoPaths}</strong>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderTwoPaths(content.body.twoPaths)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <h2 className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">{content.sectionHeadings.whatToDoNext}</strong>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                      <img
                        alt=""
                        src={media.articleImages[12]}
                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[300px] rounded-[10px]"
                      />
                    </picture>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {renderProse(proseLines(content.body.whatToDoNext))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <a
                      href={ADV_CTA_URL}
                      className="relative text-black text-xl font-bold bg-yellow-400 shadow-[rgb(218,218,218)_0px_0px_1px_1px] box-border caret-transparent flex flex-col tracking-[0.4px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 px-[15px] py-2.5 rounded-[5px] font-helvetica md:text-3xl md:tracking-[0.6px] md:leading-[45px]"
                    >
                      <div className="text-xl box-border caret-transparent tracking-[0.4px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none md:text-3xl md:tracking-[0.6px] md:leading-[45px]">
                        <p className="text-xl box-border caret-transparent tracking-[0.4px] leading-[30px] outline-[3px] md:text-3xl md:tracking-[0.6px] md:leading-[45px]">
                          {content.ctaButtons[0]}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        {proseLines(content.body.ctaBenefits).map((text, i) => (
                          <p key={i} className="box-border caret-transparent outline-[3px]">{text}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        <p className="box-border caret-transparent outline-[3px]">
                          {content.body.closing.signoff}
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          {content.body.closing.byline}
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          {content.body.closing.ps}
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          {content.body.closing.pps}
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          {content.body.closing.ppps}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <a
                      href={ADV_CTA_URL}
                      className="relative text-black text-xl font-bold bg-yellow-400 shadow-[rgb(218,218,218)_0px_0px_1px_1px] box-border caret-transparent flex flex-col tracking-[0.4px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 px-[15px] py-2.5 rounded-[5px] font-helvetica md:text-3xl md:tracking-[0.6px] md:leading-[45px]"
                    >
                      <div className="text-xl box-border caret-transparent tracking-[0.4px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none md:text-3xl md:tracking-[0.6px] md:leading-[45px]">
                        <p className="text-xl box-border caret-transparent tracking-[0.4px] leading-[30px] outline-[3px] md:text-3xl md:tracking-[0.6px] md:leading-[45px]">
                          {content.ctaButtons[1]}{" "}
                          <span className="relative text-xl box-border caret-transparent inline-flex tracking-[0.4px] leading-[30px] outline-[3px] align-middle md:text-3xl md:tracking-[0.6px] md:leading-[45px]">
                            <img
                              src={media.ctaArrowIcon}
                              alt="Icon"
                              className="text-xl box-border caret-transparent h-5 tracking-[0.4px] leading-[30px] outline-[3px] align-baseline w-5 md:text-3xl md:h-[30px] md:tracking-[0.6px] md:leading-[45px] md:w-[30px]"
                            />
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="items-start bg-orange-100 bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-col flex-wrap min-w-[auto] outline-[3px] gap-y-0 w-[stretch] bg-[position:50%_top] mt-2.5 pt-2.5 md:flex-row">
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full order-1 outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img
                                alt=""
                                src="https://c.animaapp.com/mqierx98CBTnir/assets/1768926564-gifts-random.webp"
                                className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-full"
                              />
                            </picture>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 px-2.5 py-[5px] font-open_sans">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">
                                  <span className="text-red-600 box-border caret-transparent outline-[3px]">
                                    <strong className="font-bold box-border caret-transparent outline-[3px]">
                                      {content.body.urgencyUpdate.label}{" "}
                                    </strong>
                                  </span>
                                  <span className="box-border caret-transparent outline-[3px]">
                                    {content.body.urgencyUpdate.date}
                                    <strong className="font-bold box-border caret-transparent outline-[3px]">
                                      {" "}
                                      {content.body.urgencyUpdate.text}
                                    </strong>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-col flex-wrap min-w-[auto] outline-[3px] gap-y-0 w-[stretch] bg-[position:50%_top] px-2.5 md:flex-row">
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full order-1 outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto">
                                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                        <p className="box-border caret-transparent outline-[3px]">
                                          <span className="text-red-600 box-border caret-transparent outline-[3px]">
                                            {content.body.urgencyUpdate.noteLabel}
                                          </span>
                                          {content.body.urgencyUpdate.note}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full order-2 outline-[3px] w-full md:max-w-[40%] md:min-w-[40%] md:w-2/5">
                                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full my-2.5 md:my-0">
                                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                      <img
                                        alt=""
                                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768942312-JAN_2026.jpg"
                                        className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-full"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="items-start bg-yellow-100 bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-col flex-wrap min-w-[auto] outline-[3px] gap-y-0 w-[stretch] bg-[position:50%_top] pt-2.5 pb-[15px] md:flex-row">
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full order-1 outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto">
                                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                    <a
                                      href={ADV_CTA_URL}
                                      className="relative text-black text-xl font-bold bg-yellow-400 shadow-[rgb(218,218,218)_0px_0px_1px_1px] box-border caret-transparent flex flex-col tracking-[0.4px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] w-full px-[15px] py-2.5 rounded-[5px] font-helvetica md:text-3xl md:tracking-[0.6px] md:leading-[45px]"
                                    >
                                      <div className="text-xl box-border caret-transparent tracking-[0.4px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none md:text-3xl md:tracking-[0.6px] md:leading-[45px]">
                                        <p className="text-xl box-border caret-transparent tracking-[0.4px] leading-[30px] outline-[3px] md:text-3xl md:tracking-[0.6px] md:leading-[45px]">
                                          {content.ctaButtons[2]}
                                        </p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                                  <div className="items-center box-border caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                    <div className="items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[15px] grid flex-col flex-wrap grid-cols-[repeat(2,1fr)] grid-rows-[repeat(2,auto)] justify-center min-w-[auto] outline-[3px] gap-y-[15px] w-[stretch] bg-[position:50%_top] py-2.5 md:items-start md:gap-x-0 md:flex md:flex-row md:grid-cols-none md:grid-rows-none md:justify-normal md:gap-y-0">
                                      <div className="items-center box-border caret-transparent flex basis-auto flex-col grow-0 shrink-0 col-start-1 row-start-1 justify-start max-w-full min-h-[auto] min-w-[auto] order-1 outline-[3px] w-full px-[5px] py-2.5 md:[align-items:normal] md:basis-[0%] md:grow md:shrink md:col-start-auto md:row-start-auto md:justify-normal md:max-w-none md:min-w-0 md:w-auto md:p-0">
                                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                                          <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full md:justify-normal">
                                            <picture className="items-center box-border caret-transparent flex flex-col h-full justify-center leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:justify-normal">
                                              <img
                                                alt=""
                                                src="https://c.animaapp.com/mqierx98CBTnir/assets/1768995707-b3b6d314-33a7-475d-9c18-41f622175029_removalai_preview.png"
                                                className="box-border caret-transparent max-h-full max-w-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-20 mx-auto md:max-w-none md:w-[100px] md:mx-0"
                                              />
                                            </picture>
                                          </div>
                                        </div>
                                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                                          <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full md:[align-items:normal]">
                                            <div className="text-sm items-center box-border caret-transparent flex justify-center leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full px-[5px] font-open_sans md:text-base md:[align-items:normal] md:justify-normal md:leading-6 md:px-2.5">
                                              <div className="text-sm box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-6">
                                                <p className="text-sm box-border caret-transparent leading-[18.2px] outline-[3px] w-full md:text-base md:leading-6 md:w-auto">
                                                  120 Day Money Back Guarantee
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="items-center box-border caret-transparent flex basis-auto flex-col grow-0 shrink-0 col-start-2 row-start-1 justify-start max-w-full min-h-[auto] min-w-[auto] order-2 outline-[3px] w-full px-[5px] py-2.5 md:[align-items:normal] md:basis-[0%] md:grow md:shrink md:col-start-auto md:row-start-auto md:justify-normal md:max-w-none md:min-w-0 md:w-auto md:p-0">
                                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                                          <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full md:justify-normal">
                                            <picture className="items-center box-border caret-transparent flex flex-col h-full justify-center leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:justify-normal">
                                              <img
                                                alt=""
                                                src="https://c.animaapp.com/mqierx98CBTnir/assets/1768971673-1752603145017_gempages_464015397612422087_36ce5f4d_82f4_40b9_a6d9_707a8651ad51.png"
                                                className="box-border caret-transparent max-h-full max-w-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-20 mx-auto md:max-w-none md:w-[100px] md:mx-0"
                                              />
                                            </picture>
                                          </div>
                                        </div>
                                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                                          <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full md:[align-items:normal]">
                                            <div className="text-sm items-center box-border caret-transparent flex justify-center leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full px-[5px] font-open_sans md:text-base md:[align-items:normal] md:justify-normal md:leading-6 md:px-2.5">
                                              <div className="text-sm box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-6">
                                                <p className="text-sm box-border caret-transparent leading-[18.2px] outline-[3px] w-full md:text-base md:leading-6 md:w-auto">
                                                  Guaranteed Safe and Secure
                                                  Checkout
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="items-center box-border caret-transparent flex basis-auto flex-col grow-0 shrink-0 col-start-1 row-start-2 justify-start max-w-full min-h-[auto] min-w-[auto] order-3 outline-[3px] w-full px-[5px] py-2.5 md:[align-items:normal] md:basis-[0%] md:grow md:shrink md:col-start-auto md:row-start-auto md:justify-normal md:max-w-none md:min-w-0 md:w-auto md:p-0">
                                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                                          <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full md:justify-normal">
                                            <picture className="items-center box-border caret-transparent flex flex-col h-full justify-center leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:justify-normal">
                                              <img
                                                alt=""
                                                src="https://c.animaapp.com/mqierx98CBTnir/assets/1768971692-no-hassale.png"
                                                className="box-border caret-transparent max-h-full max-w-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-20 mx-auto md:max-w-none md:w-[100px] md:mx-0"
                                              />
                                            </picture>
                                          </div>
                                        </div>
                                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                                          <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full md:[align-items:normal]">
                                            <div className="text-sm items-center box-border caret-transparent flex justify-center leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full px-[5px] font-open_sans md:text-base md:[align-items:normal] md:justify-normal md:leading-6 md:px-2.5">
                                              <div className="text-sm box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-6">
                                                <p className="text-sm box-border caret-transparent leading-[18.2px] outline-[3px] w-full md:text-base md:leading-6 md:w-auto">
                                                  No-Hassle Returns
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="items-center box-border caret-transparent flex basis-auto flex-col grow-0 shrink-0 col-start-2 row-start-2 justify-start max-w-full min-h-[auto] min-w-[auto] order-4 outline-[3px] w-full px-[5px] py-2.5 md:[align-items:normal] md:basis-[0%] md:grow md:shrink md:col-start-auto md:row-start-auto md:justify-normal md:max-w-none md:min-w-0 md:w-auto md:p-0">
                                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                                          <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full md:justify-normal">
                                            <picture className="items-center box-border caret-transparent flex flex-col h-full justify-center leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:justify-normal">
                                              <img
                                                alt=""
                                                src="https://c.animaapp.com/mqierx98CBTnir/assets/1768971709-shipping.png"
                                                className="box-border caret-transparent max-h-full max-w-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-20 mx-auto md:max-w-none md:w-[100px] md:mx-0"
                                              />
                                            </picture>
                                          </div>
                                        </div>
                                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                                          <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full md:[align-items:normal]">
                                            <div className="text-sm items-center box-border caret-transparent flex justify-center leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full px-[5px] font-open_sans md:text-base md:[align-items:normal] md:justify-normal md:leading-6 md:px-2.5">
                                              <div className="text-sm box-border caret-transparent leading-[18.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-6">
                                                <p className="text-sm box-border caret-transparent leading-[18.2px] outline-[3px] w-full md:text-base md:leading-6 md:w-auto">
                                                  Fast Shipping
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full order-2 outline-[3px] w-full md:max-w-[25%] md:min-w-[25%] md:w-3/12"></div>
            </div>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
          <div className="items-center box-border caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
            <div className="text-lg items-start bg-zinc-100 bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 hidden flex-col flex-wrap outline-[3px] gap-y-0 text-center w-[stretch] bg-[position:50%_top] mx-5 my-2.5 p-2.5 md:flex-row">
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-w-full order-1 outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto">
                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col h-full outline-[3px] w-full">
                    <div className="items-start bg-white bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-col flex-wrap outline-[3px] gap-y-0 w-[stretch] bg-[position:50%_top] m-2.5 rounded-[5px] md:flex-row">
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-w-full order-1 outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto">
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                            <div className="text-xl box-border caret-transparent flex leading-[30px] outline-[3px] w-full px-2.5 py-[5px] rounded-[5px] font-open_sans md:text-lg md:leading-[27px] md:font-roboto">
                              <div className="text-xl box-border caret-transparent leading-[30px] outline-[3px] w-full font-open_sans md:text-lg md:leading-[27px] md:font-roboto">
                                <p className="text-xl box-border caret-transparent leading-[30px] outline-[3px] font-open_sans md:text-lg md:leading-[27px] md:font-roboto">
                                  <strong className="text-xl font-bold box-border caret-transparent leading-[30px] outline-[3px] font-open_sans md:text-lg md:leading-[27px] md:font-roboto">
                                    {content.customerReviews.title}
                                  </strong>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col h-full outline-[3px] w-full">
                    <div className="items-start bg-white bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-col flex-wrap outline-[3px] gap-y-0 w-[stretch] bg-[position:50%_top] m-2.5 px-3.5 py-2.5 rounded-[5px] md:flex-row">
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-w-full order-1 outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto">
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="items-start box-border caret-transparent flex flex-col outline-[3px] w-full">
                            <picture className="items-start box-border caret-transparent flex flex-col h-full leading-[0px] outline-[3px] w-full">
                              <img
                                alt=""
                                src="https://c.animaapp.com/mqierx98CBTnir/assets/1768931307-smooth-stars.jpg"
                                className="box-border caret-transparent max-h-full object-scale-down outline-[3px] align-baseline w-20"
                              />
                            </picture>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                            <div className="text-sm box-border caret-transparent flex leading-[21px] outline-[3px] text-left w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                              <div className="text-sm box-border caret-transparent leading-[21px] outline-[3px] text-left w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                <p className="text-sm box-border caret-transparent leading-[21px] outline-[3px] text-left font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                  <strong className="text-sm font-bold box-border caret-transparent leading-[21px] outline-[3px] text-left font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                    {content.customerReviews.rating}
                                  </strong>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                            <div className="text-stone-300 text-sm box-border caret-transparent flex leading-[21px] outline-[3px] w-full font-open_sans md:text-zinc-800 md:text-lg md:leading-[27px] md:font-roboto">
                              <div className="text-stone-300 text-sm box-border caret-transparent leading-[21px] outline-[3px] w-full font-open_sans md:text-zinc-800 md:text-lg md:leading-[27px] md:font-roboto">
                                <p className="text-stone-300 text-sm box-border caret-transparent leading-[21px] outline-[3px] font-open_sans md:text-zinc-800 md:text-lg md:leading-[27px] md:font-roboto">
                                  {content.customerReviews.ratingCount}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-col h-full outline-[3px] w-full">
                            <div className="items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-2 flex flex-row-reverse flex-wrap outline-[3px] gap-y-2 w-[stretch] bg-[position:50%_top] mt-3.5 md:flex-row">
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-1 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-[15px] box-border caret-transparent flex leading-[22.5px] outline-[3px] text-left w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                      <div className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                        <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                          {content.customerReviews.stars[0].percent}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-2 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full">
                                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] outline-[3px] w-full">
                                      <img
                                        alt=""
                                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768931620-cr_1_(2).svg"
                                        className="box-border caret-transparent max-h-full object-scale-down outline-[3px] align-baseline w-full"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-3 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-[15px] box-border caret-transparent flex leading-[22.5px] outline-[3px] text-right w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                      <div className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-right w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                        <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-right font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                          {content.customerReviews.stars[0].label}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-col h-full outline-[3px] w-full">
                            <div className="items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-2 flex flex-row-reverse flex-wrap outline-[3px] gap-y-2 w-[stretch] bg-[position:50%_top] mt-[15px] md:flex-row">
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-1 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-[15px] box-border caret-transparent flex leading-[22.5px] outline-[3px] text-left w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                      <div className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                        <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                          {content.customerReviews.stars[1].percent}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-2 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full">
                                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] outline-[3px] w-full">
                                      <img
                                        alt=""
                                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768931869-cr_2_(2).svg"
                                        className="box-border caret-transparent max-h-full object-scale-down outline-[3px] align-baseline w-full"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-3 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-[15px] box-border caret-transparent flex leading-[22.5px] outline-[3px] text-right w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                      <div className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-right w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                        <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-right font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                          {content.customerReviews.stars[1].label}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-col h-full outline-[3px] w-full">
                            <div className="items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-2 flex flex-row-reverse flex-wrap outline-[3px] gap-y-2 w-[stretch] bg-[position:50%_top] mt-[15px] md:flex-row">
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-1 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-[15px] box-border caret-transparent flex leading-[22.5px] outline-[3px] text-left w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                      <div className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                        <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                          {content.customerReviews.stars[2].percent}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-2 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full">
                                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] outline-[3px] w-full">
                                      <img
                                        alt=""
                                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768931884-cr_3_(2).svg"
                                        className="box-border caret-transparent max-h-full object-scale-down outline-[3px] align-baseline w-full"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-3 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-[15px] box-border caret-transparent flex leading-[22.5px] outline-[3px] text-right w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                      <div className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-right w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                        <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-right font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                          {content.customerReviews.stars[2].label}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-col h-full outline-[3px] w-full">
                            <div className="items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-2 flex flex-row-reverse flex-wrap outline-[3px] gap-y-2 w-[stretch] bg-[position:50%_top] mt-[15px] md:flex-row">
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-1 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-[15px] box-border caret-transparent flex leading-[22.5px] outline-[3px] text-left w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                      <div className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                        <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                          {content.customerReviews.stars[3].percent}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-2 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full">
                                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] outline-[3px] w-full">
                                      <img
                                        alt=""
                                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768931899-cr_4_(2).svg"
                                        className="box-border caret-transparent max-h-full object-scale-down outline-[3px] align-baseline w-full"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-3 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-[15px] box-border caret-transparent flex leading-[22.5px] outline-[3px] text-right w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                      <div className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-right w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                        <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-right font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                          {content.customerReviews.stars[3].label}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-col h-full outline-[3px] w-full">
                            <div className="items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-2 flex flex-row-reverse flex-wrap outline-[3px] gap-y-2 w-[stretch] bg-[position:50%_top] mt-[15px] md:flex-row">
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-1 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-[15px] box-border caret-transparent flex leading-[22.5px] outline-[3px] text-left w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                      <div className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                        <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-left font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                          {content.customerReviews.stars[4].percent}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-2 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full">
                                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] outline-[3px] w-full">
                                      <img
                                        alt=""
                                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768931910-cr_5_(2).svg"
                                        className="box-border caret-transparent max-h-full object-scale-down outline-[3px] align-baseline w-full"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-3 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-[15px] box-border caret-transparent flex leading-[22.5px] outline-[3px] text-right w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                      <div className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-right w-full font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                        <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] text-right font-open_sans md:text-lg md:leading-[27px] md:text-center md:font-roboto">
                                          {content.customerReviews.stars[4].label}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                            <div className="text-xl font-bold box-border caret-transparent flex leading-[30px] outline-[3px] w-full mt-2.5 font-open_sans md:text-lg md:font-normal md:leading-[27px] md:font-roboto">
                              <div className="text-xl font-bold box-border caret-transparent leading-[30px] outline-[3px] w-full font-open_sans md:text-lg md:font-normal md:leading-[27px] md:font-roboto">
                                <p className="text-xl font-bold box-border caret-transparent leading-[30px] outline-[3px] font-open_sans md:text-lg md:font-normal md:leading-[27px] md:font-roboto">
                                  {content.customerReviews.byFeatureLabel}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-col h-full outline-[3px] w-full">
                            <div className="items-center bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-wrap outline-[3px] gap-y-0 w-[stretch] bg-[position:50%_top] my-[5px]">
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-1 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-base box-border caret-transparent flex leading-6 outline-[3px] text-left w-full md:text-lg md:leading-[27px] md:text-center">
                                      <div className="text-base box-border caret-transparent leading-6 outline-[3px] text-left w-full md:text-lg md:leading-[27px] md:text-center">
                                        <p className="text-base box-border caret-transparent leading-6 outline-[3px] text-left md:text-lg md:leading-[27px] md:text-center">
                                          {content.customerReviews.features[0].label}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[20%] min-w-[20%] order-2 outline-[3px] w-1/5">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full">
                                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] outline-[3px] w-full">
                                      <img
                                        alt=""
                                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768931307-smooth-stars.jpg"
                                        className="box-border caret-transparent max-h-full object-scale-down outline-[3px] align-baseline w-full"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[20%] min-w-[20%] order-3 outline-[3px] w-1/5">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-base box-border caret-transparent flex leading-6 outline-[3px] text-left w-full ml-[5px] md:text-lg md:leading-[27px] md:text-center">
                                      <div className="text-base box-border caret-transparent leading-6 outline-[3px] text-left w-full md:text-lg md:leading-[27px] md:text-center">
                                        <p className="text-base box-border caret-transparent leading-6 outline-[3px] text-left md:text-lg md:leading-[27px] md:text-center">
                                          {content.customerReviews.features[0].score}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-col h-full outline-[3px] w-full">
                            <div className="items-center bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-wrap outline-[3px] gap-y-0 w-[stretch] bg-[position:50%_top] my-[5px]">
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-1 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-base box-border caret-transparent flex leading-6 outline-[3px] text-left w-full md:text-lg md:leading-[27px] md:text-center">
                                      <div className="text-base box-border caret-transparent leading-6 outline-[3px] text-left w-full md:text-lg md:leading-[27px] md:text-center">
                                        <p className="text-base box-border caret-transparent leading-6 outline-[3px] text-left md:text-lg md:leading-[27px] md:text-center">
                                          {content.customerReviews.features[1].label}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[20%] min-w-[20%] order-2 outline-[3px] w-1/5">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full">
                                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] outline-[3px] w-full">
                                      <img
                                        alt=""
                                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768931307-smooth-stars.jpg"
                                        className="box-border caret-transparent max-h-full object-scale-down outline-[3px] align-baseline w-full"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[20%] min-w-[20%] order-3 outline-[3px] w-1/5">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-base box-border caret-transparent flex leading-6 outline-[3px] text-left w-full ml-[5px] md:text-lg md:leading-[27px] md:text-center">
                                      <div className="text-base box-border caret-transparent leading-6 outline-[3px] text-left w-full md:text-lg md:leading-[27px] md:text-center">
                                        <p className="text-base box-border caret-transparent leading-6 outline-[3px] text-left md:text-lg md:leading-[27px] md:text-center">
                                          {content.customerReviews.features[1].score}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-col h-full outline-[3px] w-full">
                            <div className="items-center bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-wrap outline-[3px] gap-y-0 w-[stretch] bg-[position:50%_top] my-[5px]">
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-1 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-base box-border caret-transparent flex leading-6 outline-[3px] text-left w-full md:text-lg md:leading-[27px] md:text-center">
                                      <div className="text-base box-border caret-transparent leading-6 outline-[3px] text-left w-full md:text-lg md:leading-[27px] md:text-center">
                                        <p className="text-base box-border caret-transparent leading-6 outline-[3px] text-left md:text-lg md:leading-[27px] md:text-center">
                                          {content.customerReviews.features[2].label}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[20%] min-w-[20%] order-2 outline-[3px] w-1/5">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full">
                                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] outline-[3px] w-full">
                                      <img
                                        alt=""
                                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768931307-smooth-stars.jpg"
                                        className="box-border caret-transparent max-h-full object-scale-down outline-[3px] align-baseline w-full"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[20%] min-w-[20%] order-3 outline-[3px] w-1/5">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-base box-border caret-transparent flex leading-6 outline-[3px] text-left w-full ml-[5px] md:text-lg md:leading-[27px] md:text-center">
                                      <div className="text-base box-border caret-transparent leading-6 outline-[3px] text-left w-full md:text-lg md:leading-[27px] md:text-center">
                                        <p className="text-base box-border caret-transparent leading-6 outline-[3px] text-left md:text-lg md:leading-[27px] md:text-center">
                                          {content.customerReviews.features[2].score}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent flex flex-col h-full outline-[3px] w-full">
                            <div className="items-center bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-wrap outline-[3px] gap-y-0 w-[stretch] bg-[position:50%_top] my-[5px]">
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow order-1 outline-[3px]">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-base box-border caret-transparent flex leading-6 outline-[3px] text-left w-full md:text-lg md:leading-[27px] md:text-center">
                                      <div className="text-base box-border caret-transparent leading-6 outline-[3px] text-left w-full md:text-lg md:leading-[27px] md:text-center">
                                        <p className="text-base box-border caret-transparent leading-6 outline-[3px] text-left md:text-lg md:leading-[27px] md:text-center">
                                          {content.customerReviews.features[3].label}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[20%] min-w-[20%] order-2 outline-[3px] w-1/5">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="items-center box-border caret-transparent flex flex-col outline-[3px] w-full">
                                    <picture className="items-center box-border caret-transparent flex flex-col h-full leading-[0px] outline-[3px] w-full">
                                      <img
                                        alt=""
                                        src="https://c.animaapp.com/mqierx98CBTnir/assets/1768931307-smooth-stars.jpg"
                                        className="box-border caret-transparent max-h-full object-scale-down outline-[3px] align-baseline w-full"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                              <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[20%] min-w-[20%] order-3 outline-[3px] w-1/5">
                                <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
                                  <div className="box-border caret-transparent flex justify-center outline-[3px] w-full">
                                    <div className="text-base box-border caret-transparent flex leading-6 outline-[3px] text-left w-full ml-[5px] md:text-lg md:leading-[27px] md:text-center">
                                      <div className="text-base box-border caret-transparent leading-6 outline-[3px] text-left w-full md:text-lg md:leading-[27px] md:text-center">
                                        <p className="text-base box-border caret-transparent leading-6 outline-[3px] text-left md:text-lg md:leading-[27px] md:text-center">
                                          {content.customerReviews.features[3].score}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* CommentsSection */}
        <div className="relative text-zinc-800 bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 text-start w-full bg-[position:50%_top] md:flex-row">
          <span className="absolute box-border caret-transparent block h-0 outline-[3px] w-0 overflow-hidden"></span>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full">
            <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
              <div className="items-center box-border caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
                <div className="text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-col flex-wrap min-w-[auto] outline-[3px] gap-y-0 text-center w-[stretch] bg-[position:50%_top] px-2.5 py-5 md:flex-row">
                  <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full order-1 outline-[3px] w-full md:max-w-[75%] md:min-w-[75%] md:w-9/12">
                    <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                      <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        <div className="text-black text-[26px] font-bold box-border caret-transparent flex leading-8 min-h-[auto] min-w-[auto] outline-[3px] text-left w-full px-2.5 font-open_sans md:text-[33px] md:leading-[42.9px]">
                          <div className="text-[26px] box-border caret-transparent leading-8 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                            <p className="text-[26px] box-border caret-transparent leading-8 outline-[3px] md:text-[33px] md:leading-[42.9px]">
                              <strong>Comments</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 0 - Laura Mitchell */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768928651-rev-1.avif" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Laura Mitchell</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">My hairdresser doesn&apos;t use Facebook, but she swears this changed her life. She&apos;s 56 and her hair is thicker than mine now (I&apos;m 42!). Just ordered my first bottle.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 4 58 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 1 - Karen Roberts (indented) */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] ml-[35px] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929065-laura.avif" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Karen Roberts</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Absolutely loving my Hair Helper! Been using it for 6 weeks and the shedding has dropped like crazy.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 1 56 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 2 - Michelle Anderson */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929771-anna.webp" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Michelle Anderson</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">I was skeptical at first... but honestly, this spray is worth every penny. Two of my coworkers have already ordered it after seeing my results!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 4 51 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 3 - Diana Thompson */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768995052-image0-3-1.jpeg" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Diana Thompson</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Had to buy one for my sister too – she kept &quot;borrowing&quot; mine 😄</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 4 47 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 4 - Jennifer Hayes (indented) */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] ml-[35px] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929801-hanna.avif" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Jennifer Hayes</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">OMG SAME! I saw it was back in stock and ordered immediately. Didn&apos;t want to miss out again!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 4 39 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 5 - Patricia Coleman */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929811-emma.avif" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Patricia Coleman</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Can&apos;t even begin to tell you the difference I feel day to day. My confidence is BACK.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 4 36 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 6 - Emma Parker (indented) */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] ml-[35px] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929822-emerson.avif" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Emma Parker</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Hey Emma, this is what you need instead of those expensive supplements you&apos;ve been taking!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 4 32 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 7 - Susan Miller */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929833-isabel.avif" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Susan Miller</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Just got mine in the mail today! Using it tonight for the first time. Fingers crossed!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 4 31 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 8 - Mary Johnson (indented) */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] ml-[35px] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929846-hank.avif" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Mary Johnson</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Has anyone else noticed their hairdresser asking what they&apos;re doing differently? Mine literally asked to take a photo of the bottle!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 4 30 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 9 - Linda Brown */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929856-susan.webp" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Linda Brown</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">For me, it took about 8 weeks to really see the difference. But now at 12 weeks? Night and day.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 4 31 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 10 - Dorothy Garcia */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929868-gisella.webp" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Dorothy Garcia</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">My daughter actually showed me this article. I didn&apos;t believe it at first, but after just 6 weeks, I feel so much more confident. No more avoiding mirrors!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 4 29 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 11 - Carol Rodriguez (indented) */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] ml-[35px] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929881-paula.webp" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Carol Rodriguez</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Wow this sounds amazing. Has anyone over 60 tried this? I&apos;m 63 and nervous about trying another product...</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 4 28 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 12 - Linda H */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929892-annawhaite.avif" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Linda H</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">I&apos;m 67 and it&apos;s working beautifully for me! Give it a shot – you&apos;ve got 120 days to try it risk-free anyway.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 4 27 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 13 - Sandra Davis */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929915-agnes.webp" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Sandra Davis</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">I&apos;ve been using this for 8 weeks and I&apos;m honestly shocked. No more shedding in the shower, and I can finally sleep through the night without worrying. My hair hasn&apos;t felt this healthy in YEARS.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 2 26 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 14 - Nancy Anderson */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929924-barbara.webp" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Nancy Anderson</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Just ordered mine! Can&apos;t wait to try it.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 1 39 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 15 - Helen Thomas */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929934-miakrause.jpg" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Helen Thomas</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Really want to test this out. My part has been getting wider and it&apos;s freaking me out.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 2 36 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 16 - Glenda clark (indented) */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] ml-[35px] mt-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768929945-lauralehman.jpg" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Glenda clark</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Do it! I waited 3 months before ordering and I regret not starting sooner. It really works.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 1 33 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 17 - Deborah White */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] my-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768997631-72a541a9ffa5e7477b42cc7cb8772779.jpg" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Deborah White</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Does anyone know how long shipping takes? I want to surprise my mom with this for her birthday.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 3 49 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 18 - Sharon Harris (mx indented) */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] mx-[35px] my-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768995279-3CBB094F00000578-4180844-image-a-22_1485982995124.jpg" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Sharon Harris</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Mine arrived in 4 days!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 7 46 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Comment 19 - Jessica Clark (mx indented) */}
                    <div className={`text-lg items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-[5px] flex flex-wrap min-w-[auto] outline-[3px] gap-y-[5px] text-center w-[stretch] bg-[position:50%_top] mx-[35px] my-2.5`}>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-[10%] min-h-[auto] min-w-[10%] order-1 outline-[3px] w-[10%]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="items-end box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <picture className="items-end box-border caret-transparent flex flex-col h-full leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <img alt="" src="https://c.animaapp.com/mqierx98CBTnir/assets/1768995364-images.jpeg" className="box-border caret-transparent max-h-full min-h-[auto] min-w-[auto] object-scale-down outline-[3px] align-baseline w-[45px] rounded-[5px]" />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] order-2 outline-[3px]">
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-blue-800 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]"><strong className="font-bold box-border caret-transparent outline-[3px]">Jessica Clark</strong></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-black text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Your mom will love it! It&apos;s the perfect gift if she&apos;s been struggling with thinning hair.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <div className="text-zinc-500 text-sm box-border caret-transparent flex leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-[5px] font-montserrat">
                              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                                <p className="box-border caret-transparent outline-[3px]">Like · Reply · 👍 Like 1 39 min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Disclaimer */}
        <div className="relative text-zinc-800 bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 text-start w-full bg-[position:50%_top] py-[15px] md:flex-row">
          <span className="absolute box-border caret-transparent block h-0 outline-[3px] w-0 overflow-hidden"></span>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full">
            <div className="items-center box-border caret-transparent flex justify-center outline-[3px] w-full">
              <div className="items-center box-border caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
                <div className="items-start bg-no-repeat bg-size-[100%] box-border caret-transparent gap-x-0 flex flex-col flex-wrap min-w-[auto] outline-[3px] gap-y-0 text-center w-[stretch] bg-[position:50%_top] border-t border-t-zinc-300 px-2.5 py-5 md:flex-row">
                  <div className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full order-1 outline-[3px] w-full">
                    <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                      <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        <div className="text-zinc-800 text-xs box-border caret-transparent flex leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-open_sans">
                          <div className="text-xs box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <p className="box-border caret-transparent outline-[3px]">
                              <strong>MEDICAL &amp; HEALTH DISCLAIMER:</strong> {content.disclaimerText}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full mt-4">
                      <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        <div className="text-zinc-800 text-xs box-border caret-transparent flex leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full font-open_sans">
                          <div className="text-xs box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
                            <p className="box-border caret-transparent outline-[3px]">{content.copyright}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full mt-2">
                      <div className="box-border caret-transparent flex justify-start gap-x-4 min-h-[auto] min-w-[auto] outline-[3px] w-full flex-wrap">
                        {content.footerLinks.map((link) => (
                          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-600 underline font-open_sans hover:text-zinc-900">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
