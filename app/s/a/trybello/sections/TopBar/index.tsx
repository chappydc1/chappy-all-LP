"use client";

type TrustBadge = { text: string };
type FooterLink = { label: string; href: string };
type Comment = { authorName: string; commentText: string; metaText: string; indent: boolean };
type CustomerReviewImages = { smoothStars: string; cr1: string; cr2: string; cr3: string; cr4: string; cr5: string };
type AdvContent = { headline: string; subheadline: string; authorPublished: string; authorByline: string; ctaLabel: string; disclaimerText: string; copyright: string; footerLinks: FooterLink[]; trustBadges: TrustBadge[]; comments: Comment[] };
type AdvMedia = { heroGif: string; heroVideo: string; authorAvatar: string; ctaArrowIcon: string; articleImages: string[]; trustBadgeImages: string[]; commentAvatars: string[]; customerReviewImages: CustomerReviewImages };

export function TopBar({ content, media }: { content: AdvContent; media: AdvMedia }) {
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
                        <p className="text-[26px] box-border caret-transparent leading-8 outline-[3px] md:text-[40px] md:leading-[50px]">
                          &quot;I Owe You an Apology.&quot; —  Board-Certified
                          Dermatologist&#39;s Open Letter to Every Woman Over 40
                          Who&#39;s Been Told Her Hair Loss Is &quot;Just
                          Aging&quot;
                        </p>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          I need to say something that no dermatologist is
                          supposed to say.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I&#39;m sorry.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          For 15 years, I&#39;ve sat across the desk from women
                          who were losing their hair — and their confidence, and
                          their identity — and I gave them the same answers
                          every other dermatologist gives.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          &quot;Try minoxidil.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          &quot;Take biotin.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          &quot;It could be stress.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          &quot;Some thinning is normal after menopause.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          These weren&#39;t lies. But they weren&#39;t the truth
                          either.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          They were the safe answers. The textbook answers. The
                          answers that kept me inside the lines of
                          &quot;standard care&quot; while my patients kept
                          losing hair, kept spending money, and kept coming back
                          to me with wider parts and thinner ponytails and that
                          look in their eyes that I&#39;ll never forget.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          The look that says:{" "}
                          <em className="italic box-border caret-transparent outline-[3px]">
                            I trusted you. And nothing changed.
                          </em>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I owe you an apology. Not for what I told you.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          For what I never asked.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          If you&#39;re reading this with your hair pulled back
                          in that same ponytail that keeps getting smaller...
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          If you&#39;ve started avoiding mirrors in bright
                          lighting...
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          If you&#39;re counting the hairs in your shower drain
                          every morning and wondering why your mother never had
                          to do this...
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            The next 10 minutes of your life could change
                            everything.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          My name is Dr. Yolanda Holmes. I&#39;m a
                          board-certified dermatologist with over 15 years
                          specializing in women&#39;s hair and scalp conditions.
                          I&#39;m affiliated with Howard University Hospital and
                          MedStar Washington Hospital Center.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          And I&#39;m about to tell you the one question I
                          should have been asking my patients for the last 15
                          years — but didn&#39;t. The question that would have
                          saved them thousands of dollars, years of frustration,
                          and the quiet heartbreak of watching their hair
                          disappear while being told it was &quot;normal.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          But first, let me tell you about the patient who
                          finally forced me to ask it...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            THE PATIENT WHO BROKE ME
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          It was a Wednesday afternoon in late October.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Diane walked into my office carrying a framed
                          photograph. She was 56. Retired school administrator.
                          Married 30 years. Two kids, three grandchildren. The
                          kind of woman who shows up early and apologizes for
                          taking your time.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          The photograph was from her daughter&#39;s wedding,
                          taken the previous summer.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          In it, Diane&#39;s mother — 78 years old — is standing
                          next to Diane, beaming. Her mother&#39;s hair is
                          thick, full, silver-white, and swept into an elegant
                          updo. The kind of hair you notice.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Diane is standing right beside her. She&#39;s wearing
                          a wig.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          She set the photo on my desk and said something that
                          stopped me cold:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          &quot;Dr. Holmes... my mother is 22 years older than
                          me. She has more hair than I do. How is that
                          possible?&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I didn&#39;t have an answer.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          And for the first time in my career, I felt the full
                          weight of that silence.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Because I&#39;d been seeing Diane for three years.
                          I&#39;d watched her part widen. Watched her try
                          Rogaine, then Nutrafol, then biotin, then rosemary
                          oil, then a $3,000 laser cap. Over $6,000 spent.
                          Nothing worked. The shedding never stopped.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          And every visit, I&#39;d prescribed the same things.
                          Adjusted the dose. Told her to give it more time.
                          Collected her copay. Scheduled her next appointment.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I was doing exactly what I was trained to do.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          And she was still losing her hair.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Six months ago she&#39;d given up looking in mirrors
                          without her wig on. Stopped going to the salon
                          entirely. Started wearing hats inside the house.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Her granddaughter — five years old — had asked her
                          last Thanksgiving: &quot;Nana, why do you wear a hat
                          at dinner?&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          She couldn&#39;t answer that either.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          But it was what she said next that broke something
                          inside me:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          &quot;My mother never dealt with this. My grandmother
                          never dealt with this. They had thick hair until the
                          day they died. So don&#39;t tell me this is genetic.
                          Something happened to MY generation. And nobody can
                          tell me what.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          She was right.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          And the fact that I couldn&#39;t explain it — after 15
                          years of medical training and a wall full of
                          credentials — didn&#39;t just confuse me.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          It shamed me.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Because I realized I&#39;d been part of the machine
                          that was failing her. Prescribing the same treatments
                          that every dermatologist prescribes because it&#39;s
                          &quot;standard care.&quot; Treatments that managed
                          symptoms without ever asking the deeper question.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Why is this happening to more women, younger, than
                          ever before?
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            That night, I made Diane a promise.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          &quot;Give me six months. I&#39;m going to figure out
                          what changed.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          But I also made myself a promise: whatever I found, I
                          wouldn&#39;t stay quiet about it. Even if it put me at
                          odds with every colleague I had.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            WHAT I DISCOVERED WHEN I FINALLY ASKED THE RIGHT
                            QUESTION
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          For the next six months, I lived like a woman
                          possessed.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I pulled every study I could find on female hair loss
                          trends over the past 50 years. Called researchers in
                          Europe and Asia. Flew to a botanical medicine
                          conference in Seoul. Spent $12,000 of my own money on
                          medical journals, insider research reports, and
                          historical epidemiological data.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          And what I found made me physically sick.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Not because it was complicated. Because it was
                          obvious. And I — with all my training — had never
                          thought to look.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          For 15 years, I treated the symptom. I never once
                          asked: what&#39;s different about THIS generation of
                          women? What changed in the environment, the food
                          supply, the medicine cabinet, the stress load —
                          that&#39;s making women lose hair at rates their
                          mothers and grandmothers never experienced?
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Here&#39;s what I should have known all along:
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Your grandmother&#39;s generation didn&#39;t wash
                          their hair with sulfate detergents that strip the
                          scalp&#39;s protective barrier every single day. They
                          washed once, maybe twice a week. With soap. Their
                          scalps stayed intact.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          They weren&#39;t on hormonal birth control for 15 to
                          20 years straight — synthetic hormones that
                          fundamentally alter the endocrine system and leave a
                          lasting imprint on androgen production even decades
                          after stopping.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          They didn&#39;t eat from plastic containers that leach
                          BPA and phthalates into their food — chemicals now
                          proven to be endocrine disruptors that elevate
                          androgen levels in women.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          They didn&#39;t live under the kind of chronic,
                          unrelenting stress that modern life imposes — the kind
                          that rewires your endocrine system, spikes cortisol
                          around the clock, and keeps your body in a state of
                          hormonal emergency.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          They weren&#39;t exposed to the pesticide residues,
                          synthetic fragrances, flame retardants, and
                          hormone-mimicking chemicals that saturate modern food,
                          water, furniture, and personal care products.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Their bodies didn&#39;t produce the hormone
                            that&#39;s strangling your hair follicles right now.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Or more precisely — they didn&#39;t produce nearly as
                          MUCH of it.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          The hormone is called DHT. Dihydrotestosterone. And
                          it&#39;s the single most destructive force acting on
                          your hair follicles after 40.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Here&#39;s the proof:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          In 1994, researchers at the University of Frankfurt
                          published a groundbreaking study in the Journal of
                          Clinical Endocrinology.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          They found that 91% of menopausal women experiencing
                          hair loss had DHT levels comparable to balding men.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Not &quot;slightly elevated.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            COMPARABLE TO BALDING MEN.
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          DHT is a potent form of testosterone. It&#39;s been
                          studied extensively in male hair loss for decades. But
                          here&#39;s what they never told you: women produce DHT
                          too. And after 40, you produce MORE of it.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          This hormone literally wraps around your hair
                          follicles and chokes them to death. One by one. Until
                          you&#39;re left with baby-fine wisps that barely cover
                          your scalp.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          But here&#39;s the question that study didn&#39;t ask
                          — the one that changed everything for me:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            If DHT has always existed... why are so many MORE
                            women hitting dangerous levels NOW than 30 years
                            ago?
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Your grandmother went through menopause too. Her
                          estrogen dropped too. But her hair stayed thick.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          The difference isn&#39;t biology. The difference is
                          what modern life did to your biology.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Decades of endocrine-disrupting chemical exposure.
                          Years of synthetic hormones. Chronic stress that never
                          lets up. A food system saturated with compounds that
                          amplify androgen production.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Your grandmother&#39;s body produced DHT like a gentle
                          hand resting on a garden hose. The water still flowed.
                          Her hair still grew.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            YOUR body — after a lifetime of modern exposure —
                            produces DHT like a fist squeezing that hose shut.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Less blood flow. Less nutrients. Less oxygen. Your
                          hair shaft gets thinner. Weaker. Grows slower.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Eventually? The follicle shuts off completely. Goes to
                          sleep.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            It doesn&#39;t die. It goes to SLEEP.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          This is a critical point. Your follicles aren&#39;t
                          dead. They&#39;re simply dormant. Waiting for someone
                          to release that fist.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          But DHT keeps squeezing. Harder and harder.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Until you&#39;re left with baby-fine wisps that barely
                          cover your scalp. A widening part. A see-through
                          crown. A ponytail the size of a pencil.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            I learned about DHT in medical school. I&#39;ve
                            known about it for 15 years.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          So why was I prescribing biotin supplements and
                          telling women to &quot;be patient&quot;?
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Because that&#39;s what we were trained to do. Treat
                          the symptoms. Don&#39;t question the standard. And
                          definitely don&#39;t tell your patients that the
                          entire $12 billion hair loss industry is built on
                          keeping them on a treadmill of products that never
                          address the root cause.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Natural DHT blockers exist — plants that have been
                          used in traditional medicine for centuries — but they
                          can&#39;t be patented.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            No patent = no profit margin = no interest from Big
                            Pharma.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          So they keep you on the hamster wheel instead.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            THE TREATMENTS PRESCRIBED FOR 15 YEARS — AND WHY
                            EVERY SINGLE ONE FAILS YOU
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          Let me guess.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          You&#39;ve already spent hundreds — maybe thousands —
                          on solutions that didn&#39;t work.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Your grandmother never needed any of them. But
                          you&#39;ve tried every single one. And I prescribed
                          most of them.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Let me show you exactly why they failed. And what
                          they&#39;re REALLY costing you.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            MINOXIDIL
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I&#39;ve prescribed minoxidil to hundreds of women.
                          Here&#39;s what I never told them:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What you paid:{" "}
                          </strong>
                          $40-60/month
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What it actually costs over time:
                          </strong>
                          $600/year × 10 years ={" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            $6,000 for lifetime dependency
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What it does:
                          </strong>
                          Dilates blood vessels. That&#39;s it. More blood flow
                          to follicles.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Why it fails:
                          </strong>
                          Doesn&#39;t block DHT. Doesn&#39;t address the root
                          cause. The MOMENT you stop using it, DHT crushes your
                          follicles again. You&#39;re trapped in a dependency
                          loop. Your grandmother never needed it because her DHT
                          levels never reached the point where blood flow alone
                          couldn&#39;t keep up. Yours have. And minoxidil
                          can&#39;t fix that.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            SUPPLEMENTS
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I&#39;ve told patients to try Nutrafol, biotin, and
                          collagen. Here&#39;s what I left out:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What you paid:{" "}
                          </strong>
                          $60-90/month
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What it actually costs:
                          </strong>
                          $88/month × 60 months ={" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            $5,280 over 5 years
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What it does:{" "}
                          </strong>
                          Strengthens existing hair IF you&#39;re deficient in
                          specific nutrients.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Why it fails:
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          • Only 11% of women over 40 are actually biotin
                          deficient • Pills get destroyed by stomach acid (maybe
                          2-3% reaches your scalp)
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            {" "}
                            • Doesn&#39;t block DHT at all
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Your grandmother got her nutrients from real food
                          grown in mineral-rich soil without pesticides. She
                          didn&#39;t need a $90/month pill to compensate for a
                          depleted food system. And even if she had — it still
                          wouldn&#39;t have blocked DHT.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            EXTENSIONS / TOPPERS / WIGS
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I&#39;ve watched patients show up to appointments
                          wearing them — and pretend not to notice.
                        </p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Here&#39;s the truth:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What you paid:{" "}
                          </strong>
                          $800-1,200 every 8-12 weeks
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What it actually costs:{" "}
                          </strong>
                          $1,200 × 4 times/year ={" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            $4,800/year to HIDE the problem
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What it does:{" "}
                          </strong>
                          Covers your thinning hair.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Why it fails:
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          • Clips and tape damage the follicles you have left •
                          Embarrassment risk — visible in wind, pool, intimacy •
                          You&#39;re HIDING, not HEALING
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Your grandmother never had to hide. She never worried
                          about the wind revealing a secret. Her hair was hers.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            PRP (PLATELET-RICH PLASMA) INJECTIONS
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I&#39;ve referred patients for PRP at $2,500 a
                          session. Here&#39;s what the data actually shows:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What you paid:{" "}
                          </strong>
                          $1,500-3,000 per session
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What it actually costs:{" "}
                          </strong>
                          $2,500 × 4 sessions/year ={" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            $10,000/year for temporary relief
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What it does:{" "}
                          </strong>
                          Draws your blood, spins it, injects growth factors
                          into your scalp.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Why it fails:
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          • Doesn&#39;t address DHT — the root cause • Painful
                          (they&#39;re literally injecting needles into your
                          scalp dozens of times) •
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            {" "}
                            40% of patients see no improvement at all
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            HAIR TRANSPLANTS
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I&#39;ve sent patients to transplant surgeons knowing
                          the limitations. Here&#39;s what nobody tells you
                          upfront:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What you paid:
                          </strong>
                          $12,000-20,000 initially
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What it actually costs:{" "}
                          </strong>
                          $15,000 + $8,000 touch-ups every 2-3 years ={" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            $30,000-50,000 over a decade
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            What it does:
                          </strong>
                          Relocates &quot;permanent&quot; hair from donor area
                          (back of head) to thinning areas.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Why it fails:
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          • DHT keeps miniaturizing follicles — even
                          transplanted ones • 6-12 month recovery before seeing
                          results • 30-40% of transplants &quot;don&#39;t
                          take&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            The reality nobody tells you:
                          </strong>
                          You&#39;re not fixing the problem. You&#39;re playing
                          musical chairs with dying follicles.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            TOTAL COST OF &quot;TRYING EVERYTHING&quot;:
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          • Year 1: Minoxidil + Supplements + Extensions =
                          $6,480 • Year 2: Add PRP treatments = $16,480 • Year
                          3: Hair transplant consultation + procedure = $31,480
                          • Year 4-5: Maintenance + touch-ups = $45,000+
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            $45,000 over five years for temporary relief and
                            permanent dependency.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          And you&#39;re STILL losing hair.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Every dollar you spent on those treatments? I could
                          have saved you from wasting it if I&#39;d just asked
                          one question 15 years earlier: What&#39;s actually
                          causing this? Not what treats it. What CAUSES it.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Because until you stop DHT at the scalp, you&#39;re
                          not treating hair loss.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          You&#39;re decorating the symptom.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Your grandmother didn&#39;t spend a dime on any of
                          this. She didn&#39;t need to. Her generation
                          wasn&#39;t under hormonal siege.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Yours is.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            THE 60-SECOND DISCOVERY THAT CHANGED EVERYTHING
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          Remember Diane? The retired school administrator
                          standing next to her 78-year-old mother in a wig?
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I made her a promise. Six months to figure out what
                          changed between their generations.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Six months. $12,000 of my own money. Medical
                            journals stacked three feet high.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          And I found something that shook me to my core:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Several plant extracts had been PROVEN to block DHT as
                          effectively as prescription drugs — but without the
                          side effects.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          These weren&#39;t exotic, untested compounds. These
                          were the same plants that women in traditional
                          cultures had used for centuries to maintain thick,
                          healthy hair. The same cultures where women DIDN&#39;T
                          lose their hair the way modern Western women do.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Your grandmother didn&#39;t use these plants on
                          purpose. She didn&#39;t need to. Her body wasn&#39;t
                          producing enough DHT to matter.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            But YOUR body is. And these plants are the answer
                            your generation has been waiting for.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Let me show you what I found:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          ☑️
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            {" "}
                            Sophora Flavescens Extract:{" "}
                          </strong>
                          Clinical studies showed it inhibits 5α-reductase (the
                          enzyme that creates DHT) by up to 67%. Published in
                          the Journal of Dermatological Science.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          ☑️{" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Caffeine:{" "}
                          </strong>
                          Not your morning coffee — pharmaceutical-grade
                          caffeine done topically that blocks DHT from binding
                          to follicle receptors and extends the anagen (growth)
                          phase. Published in the International Journal of
                          Dermatology.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          ☑️{" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Rice Extract (Oryza Sativa):
                          </strong>
                          Contains natural compounds that inhibit DHT
                          production. A study from Seoul National University
                          showed it increased follicle density by 34% in 12
                          weeks.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          ☑️{" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Angelica Polymorpha Sinensis Root:{" "}
                          </strong>
                          Protects follicles from DHT damage and improves
                          microcirculation. Used in traditional Chinese medicine
                          for female hair loss for over 2,000 years.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          These weren&#39;t homeopathic trace amounts. These
                          were clinically effective doses.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            But here was the critical insight:
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          These ingredients had to be applied DIRECTLY to the
                          scalp. Not swallowed in a pill where stomach acid
                          destroys them. Not diluted in a shampoo that rinses
                          off in 60 seconds.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Directly. To the root. Where the DHT damage is
                          actually happening.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          So I created a simple spray formula.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          No pills. No mess. No grease. Just a light mist that
                          delivered these DHT-blockers exactly where they were
                          needed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            THE FIRST TEST SUBJECT: ME
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          Here&#39;s what nobody tells you about being a
                          dermatologist: we have the same problems as everyone
                          else.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          At 47, my own hair was thinning.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Widening part. Crown showing through under overhead
                          lights. Hair everywhere — my pillow, my shower drain,
                          even on my car seat.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I was living proof that modern life was doing
                          something to our generation that it hadn&#39;t done to
                          our mothers. And I was living proof that being a
                          dermatologist didn&#39;t protect you from it. If
                          anything, it made it worse — because I&#39;d been so
                          deep inside the system that I couldn&#39;t see the
                          system was broken.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          So I became my own guinea pig.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Every morning and night, I&#39;d spray my formula onto
                          my scalp. Along my part. At my crown. Around my
                          hairline.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          It took 60 seconds.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          No burning. No grease. No weird chemical smell.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          It actually smells fantastic because it&#39;s using
                          ingredients only found in nature.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Here&#39;s what happened next:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Week 1:
                          </strong>
                          I counted the hairs in my shower drain. Went from
                          80-100 hairs to about 35. I thought I was imagining
                          it. Counted again the next day. Still 35.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Week 3:
                          </strong>
                          Tiny baby hairs along my part line. Little wisps
                          standing straight up. I took photos because I
                          couldn&#39;t believe it.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Week 6:{" "}
                          </strong>
                          My hairdresser asked what I was doing differently.
                          &quot;Your hair feels thicker,&quot; she said.
                          &quot;And you have all this new growth at your
                          hairline.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Week 8:
                          </strong>
                          My part was visibly tighter. I could wear my hair down
                          without seeing straight through to my scalp.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Week 12:{" "}
                          </strong>
                          I had the hair thickness I remembered from my
                          thirties. Not teenage hair. Just... normal. Healthy.
                          MINE.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I&#39;d spent 15 years as a dermatologist and I&#39;d
                          never seen anything work this fast.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          And I knew exactly why it worked: because for the
                          first time, something was targeting what modern life
                          had done to my hormones — not just treating the
                          symptoms my grandmother&#39;s generation never had.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            THE PATIENT REVOLUTION
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          I quietly started sharing the formula with my most
                          desperate patients.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Women who&#39;d spent thousands and given up hope.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Women who were considering wigs.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Women who&#39;d been told &quot;just accept it,
                          it&#39;s aging.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Diane was first.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Remember her? The retired school administrator with
                          the framed photograph?
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I gave her a bottle. Told her to use it every night
                          for 60 seconds.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Six weeks later, she came back to my office.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          She was wearing her hair down. Actually DOWN. First
                          time without a wig in three years.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            &quot;Dr. Holmes... my mother came to visit last
                            weekend. She looked at me and said, &#39;Diane, your
                            hair looks like it did when you were forty.&#39; I
                            started crying right there in her kitchen.&quot;
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          She paused, then said something I&#39;ll never forget:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            &quot;She told me, &#39;In my day, we didn&#39;t
                            need anything for our hair. But I&#39;m so glad you
                            found something for yours.&#39;&quot;
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          She was crying again. But this time, happy tears.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Diane was the first woman I failed. She was also the
                          first woman I made it right for. And she won&#39;t be
                          the last.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Patricia, 58 — Denver, CO.
                          </strong>
                          Had spent $8,000 on failed treatments over three
                          years. Minoxidil, PRP injections, laser cap therapy.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          After 6 weeks: &quot;I&#39;m seeing thickness I
                          haven&#39;t had since my early 40s. My husband keeps
                          running his fingers through my hair. I forgot what
                          that felt like.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Margaret, 61 — Austin, TX.{" "}
                          </strong>
                          Was taking four Nutrafol pills a day at $88/month.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          After 8 weeks: &quot;Four pills a day. For a full
                          year. Did absolutely nothing except make my wallet
                          lighter. This spray gave me visible results in one
                          month. I can&#39;t believe the solution was this
                          simple. I&#39;m mad it took me so long to find
                          it.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Sarah, 55 — Tampa, FL.{" "}
                          </strong>
                          Burned through $12,000 on two hair transplant
                          procedures that &quot;didn&#39;t take.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          After 10 weeks: &quot;I can see baby hairs filling in
                          where the transplants failed. For 1/100th the cost and
                          none of the pain.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Connie, 63 — Scottsdale, AZ.{" "}
                          </strong>
                          Her older sister — 68 — has a full head of hair. Same
                          parents. Same genetics. Connie had been thinning since
                          43. Turns out Connie was on hormonal birth control for
                          19 years. Her sister never was.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          After 8 weeks: &quot;My sister and I finally have the
                          same hair again. She asked me what changed. I told
                          her: &#39;I finally found something that fixed what
                          the pill did to my hormones 20 years ago.&#39;&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Word spread.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Within six months, I had a waiting list of 300 women
                          desperate to try what I was calling my &quot;DHT
                          Defense Spray.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          That&#39;s when I knew this was bigger than my
                          practice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            WHEN YOU THREATEN A $12 BILLION INDUSTRY, THEY COME
                            FOR YOU... HARD.
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          I spent 15 years inside the system. I know exactly how
                          it works. And I know what happens when someone inside
                          it breaks ranks.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I knew what would happen if I went public. But I
                          didn&#39;t expect it so fast. Or so aggressively.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          First came the &quot;friendly&quot; warnings.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          A hair transplant surgeon I&#39;d known for years
                          pulled me aside at a dermatology conference:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            &quot;Yolanda, what you&#39;re doing is dangerous.
                            These women need REAL medical treatment. You&#39;re
                            giving them false hope. You should stop before you
                            lose your license.&quot;
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Translation: &quot;You&#39;re cutting into our revenue
                          and we don&#39;t like it.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Then came the legal threats.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Three cease and desist letters. All from the same law
                          firm. All representing &quot;concerned dermatologists
                          and medical professionals.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Claiming I was making &quot;unsubstantiated medical
                          claims&quot; and &quot;practicing outside the standard
                          of care.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Even though I had 47 peer-reviewed studies backing
                          every single ingredient in my formula.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Even though the &quot;standard of care&quot; keeps
                          women trapped in $15,000 treatment cycles that
                          don&#39;t address the root cause.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            They wanted me silent.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Then came the supply chain sabotage.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          My botanical supplier — a company I&#39;d worked with
                          for eight years — suddenly &quot;couldn&#39;t fulfill
                          my orders.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          &quot;Corporate decision, nothing personal, Dr.
                          Holmes.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Two weeks later, I found out they&#39;d been acquired
                          by a major beauty conglomerate.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Why are they so desperate to stop me?
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Because I&#39;d created something that could make
                          their entire business model obsolete. A spray that:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            • Fixes the ROOT CAUSE{" "}
                          </strong>
                          of hormonal hair loss (not just symptoms){" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            • Works in 60 seconds{" "}
                          </strong>
                          a day (not twice-weekly appointments)
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            {" "}
                            • Costs less than ONE MONTH of minoxidil
                          </strong>
                          (not thousands in procedures)
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            {" "}
                            • Lets women fix themselves at home
                          </strong>
                          (not in $5 million medical spas)
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Every woman who uses my spray and gets her hair back
                          is a customer they lose.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Forever.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          That&#39;s why they&#39;re fighting so hard.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            INTRODUCING THE SPRAY THAT ACTUALLY WORKS
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          I partnered with a small, family-owned laboratory in
                          the United States.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          They agreed to produce my exact formula with zero
                          compromises.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          No dilution. No cheap substitutes. No proprietary
                          &quot;black box&quot; blends where you don&#39;t know
                          what you&#39;re getting.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Complete transparency. Clinical doses. Real results.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          We called it{" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            TryBello Hair Helper Spray.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          And it&#39;s the ONLY topical spray on earth that
                          delivers all three requirements for lasting hair
                          restoration:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            THE TRIPLE-DEFENSE SYSTEM:
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            DEFENSE 1: BLOCK DHT PRODUCTION
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Sophora Flavescens Extract and Rice Extract work at
                          the enzyme level.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          They inhibit 5α-reductase — the enzyme that converts
                          testosterone into DHT.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Less enzyme activity = less DHT being produced = less
                          DHT strangling your follicles.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            DEFENSE 2: SHIELD EXISTING FOLLICLES
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Caffeine and Angelica Root create a protective
                          barrier.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Even if DHT is circulating in your system, it
                          can&#39;t BIND to your follicle receptors.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Your existing hair is protected from miniaturization.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            DEFENSE 3: REAWAKEN DORMANT FOLLICLES
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          With DHT blocked and existing follicles protected,
                          something amazing happens:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Follicles that have been &quot;sleeping&quot; —
                          dormant but not dead — can return to their normal
                          growth cycle.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Blood flow increases. Nutrient delivery resumes. The
                          follicle &quot;wakes up.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          And it starts producing thicker, stronger, longer hair
                          again.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            This is why TryBello works when everything else
                            fails.
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            THE INGREDIENT TRUTH THEY DON&#39;T WANT YOU TO KNOW
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          Let me expose something else the industry hides:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Most hair products are 95% water and fillers with a
                          tiny sprinkle of &quot;active ingredients.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Just enough to list it on the label. Not enough to
                          actually work.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          That&#39;s why 100 different shampoos all do the same
                          thing: nothing.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            TryBello is different.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Every ingredient serves a specific purpose. At a
                          clinically effective dose.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Here&#39;s exactly what&#39;s in every bottle:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          ☑️{" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Sophora Flavescens Extract{" "}
                          </strong>
                          — Clinical dose for DHT enzyme blocking (not
                          homeopathic trace amounts). The same concentration
                          used in the Seoul University study that showed 67% DHT
                          reduction.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          ☑️
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            {" "}
                            Caffeine{" "}
                          </strong>
                          — Pharmaceutical grade for follicle protection. 0.2%
                          concentration proven to block DHT binding and extend
                          anagen phase.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          ☑️{" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Rice Extract (Oryza Sativa)
                          </strong>
                          — Standardized for 5α-reductase inhibition. Rich in
                          gamma-oryzanol and ferulic acid that target the root
                          cause.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          ☑️{" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Angelica Polymorpha Sinensis Root
                          </strong>
                          — Full-spectrum extract for follicle defense and
                          microcirculation. The same traditional preparation
                          used in TCM for 2,000+ years.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          ☑️{" "}
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Biotin{" "}
                          </strong>
                          — Encapsulated for direct scalp absorption. Not
                          destroyed in gut. Not distributed to your entire body.
                          Delivered topically where it&#39;s needed.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          ☑️
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            {" "}
                            Rosemary Oil{" "}
                          </strong>
                          — Steam-distilled for microcirculation and
                          anti-inflammatory support.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          ☑️
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            {" "}
                            Ginger Extract (Zingiber Officinale){" "}
                          </strong>
                          — Anti-inflammatory and antioxidant support for
                          overall scalp health.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          ☑️
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            {" "}
                            Saccharomyces Ferment Lysate{" "}
                          </strong>
                          — Balances scalp microbiome, reduces inflammation,
                          creates optimal growth environment.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          No water-diluted formulas.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          No mysterious &quot;proprietary blends&quot; where you
                          don&#39;t know what you&#39;re getting.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          No harsh chemicals or synthetic hormones.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Every ingredient is there for a reason. At a dose that
                          works. Ingredients your grandmother&#39;s generation
                          never needed — but that YOUR generation can&#39;t
                          afford to go without.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            REAL WOMEN, REAL TRANSFORMATIONS
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          In the last two years, over 88,000 women have
                          discovered TryBello and reversed their hair thinning.
                          Here are their stories:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Linda M., 54 — Phoenix, AZ{" "}
                          </strong>
                          ⭐⭐⭐⭐⭐ Verified Purchase &quot;I was literally
                          pricing wigs on Amazon. $1,200 for human hair. I&#39;d
                          given up. Started using Hair Helper out of desperation
                          — figured I&#39;d wasted money on worse things. Six
                          weeks later, people are asking if I&#39;ve had
                          extensions. I just smile and say &#39;nope, it&#39;s
                          all mine.&#39; Best $80 I ever spent.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Susan K., 49 — Portland, OR ⭐
                          </strong>
                          ⭐⭐⭐⭐ Verified Purchase &quot;My daughter looked at
                          me last week and said, &#39;Mom, your hair looks like
                          it did in your wedding photos!&#39; I cried. Happy
                          tears for the first time in three years. I&#39;d spent
                          thousands on Viviscal, Rogaine, even tried castor oil
                          wraps. Nothing worked. This worked in 8 weeks.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Carol T., 62 — Tampa, FL ⭐
                          </strong>
                          ⭐⭐⭐⭐ Verified Purchase &quot;Six months on
                          supplements = nothing. Eighty-eight dollars a month
                          for six months. That&#39;s over $500 for zero results.
                          Six weeks on this spray = actual baby hairs I can SEE.
                          My hairdresser asked what I was doing differently. I
                          told her and now she&#39;s ordering it for
                          herself.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Patricia R., 58 — Denver, CO ⭐
                          </strong>
                          ⭐⭐⭐⭐ Verified Purchase &quot;I&#39;d spent over
                          $8,000 on treatments. PRP injections, laser cap
                          therapy, you name it. After 6 weeks with Hair Helper,
                          I&#39;m seeing thickness I haven&#39;t had since my
                          early 40s. My husband keeps running his fingers
                          through my hair. I forgot what that felt like.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Margaret D., 61 — Austin, TX ⭐
                          </strong>
                          ⭐⭐⭐⭐ Verified Purchase &quot;Four pills a day.
                          FOUR. For a full year. Did absolutely nothing except
                          make my wallet lighter. This spray gave me visible
                          results in one month. I can&#39;t believe the solution
                          was this simple. I&#39;m mad it took me so long to
                          find it.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            THE NUMBERS FROM INDEPENDENT TESTING:
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          In clinical observation of TryBello users over 12
                          weeks:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            ☑️ 91% saw reduced shedding within 2 weeks ☑️ 84%
                            noticed new &quot;baby hairs&quot; by week 4 ☑️ 78%
                            reported significantly thicker hair by week 12 ☑️ 88%
                            said it was easier to use than previous treatments
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Compare that to the &quot;gold standard&quot;
                            treatments:
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          ✗ Rogaine/Minoxidil: 38% see improvement (with side
                          effects like unwanted facial hair and scalp
                          irritation) ✗ Popular supplements (Viviscal,
                          Nutrafol): 22% see mild improvement after 6 months of
                          daily pills ✗ Biotin alone: 11% see any change (and
                          only if they were deficient to begin with)
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          The difference isn&#39;t subtle. It&#39;s massive.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            THE 65% OFF &quot;SCREW YOU&quot; TO BIG BEAUTY
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          Remember those cease and desist letters I mentioned?
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          The threats? The supplier blacklisting?
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Well, I just got word that a major beauty conglomerate
                          is trying to patent-block our botanical extraction
                          process.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          They can&#39;t copy it — we have iron-clad patents.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          They can&#39;t buy us — I told them no.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          So now they&#39;re trying to bury us in legal fees.
                          Drag us through years of patent litigation until we
                          run out of money.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Here&#39;s my response:
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I&#39;m putting 10,000 units on sale at 65% OFF.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          That&#39;s right.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Just $25 per bottle.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Less than ONE chiropractor appointment. Less than your
                          monthly Rogaine refill. Less than that
                          &quot;miracle&quot; shampoo that did nothing.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          For the ONLY spray that actually fixes the root cause
                          of hormonal hair loss.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Regular price: $80 per bottle
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          (Already 75% less than one month of typical treatment)
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            When you opt for the 4 Months Supply your price
                            today: $25 per bottle
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Why would I do this?
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Because every woman who gets her hair back is a middle
                          finger to the corrupt system that kept her sick.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Because I want 10,000 success stories posted online
                          before these medical vultures can silence us.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Because Diane&#39;s granddaughter deserves to see her
                          Nana without a hat on.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            BUT — this 65% discount dies in 48 hours.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Not playing games. My legal bills are very real and
                          very expensive.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          After 48 hours: Price goes back to $80.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Still worth it. But not $25.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Also: We only have 4,200 units left at this price.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Our lab in the Pacific Northwest can only produce 800
                          bottles per week.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          When Good Morning America featured us last month, we
                          sold out in 11 hours. Completely gone.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Took us three weeks to restock.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          If you&#39;re reading this, units are available NOW.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          But I can&#39;t promise they&#39;ll last the day.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Every minute you wait is another minute you&#39;re:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          • Feeding the pill companies • Enriching the surgeons
                          • Missing out on the solution that&#39;s sitting right
                          here for less than a dinner out
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <p className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            MY PERSONAL 120-DAY &quot;THICKER HAIR&quot;
                            GUARANTEE
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          Look, I get it.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          You&#39;ve been burned before.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Spent money on &quot;miracle cures&quot; that now
                          collect dust under your bathroom sink.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Supplements that promised results in &quot;just 90
                          days&quot; and did nothing.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Devices that looked great in the infomercial and broke
                          after two uses.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I&#39;m not asking you to trust me.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          I&#39;m asking you to TEST me.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Here&#39;s my promise:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Use Hair Helper Spray for 120 days.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Spray it on your scalp every morning and night. Sixty
                          seconds. That&#39;s all.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Count the hairs in your shower drain. (They&#39;ll
                          decrease.)
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Take weekly photos of your part. (It&#39;ll tighten.)
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Feel for baby hairs along your hairline. (They&#39;ll
                          appear.)
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Track how often you&#39;re touching your hair
                          nervously. (You&#39;ll stop.)
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          And if you don&#39;t wake up one morning thinking:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          &quot;Wait... I forgot to obsess about my hair
                          today.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          &quot;My part doesn&#39;t show through under these
                          lights anymore.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          &quot;I can actually wear my hair in a ponytail
                          again.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          &quot;My hairdresser asked what I&#39;m doing
                          differently.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            I&#39;ll refund every single penny.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          No forms to fill out. No &quot;store credit&quot;
                          nonsense. No 20-minute phone call with a
                          &quot;retention specialist.&quot; Just email{" "}
                          <a
                            href="mailto:info@trybello.com"
                            className="box-border caret-transparent outline-[3px]"
                          >
                            info@trybello.com
                          </a>
                          and say &quot;it didn&#39;t work.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Your refund hits your account within 48 hours.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Why am I so confident?
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Because in two years and 88,000 customers, our refund
                          rate is 2.8%.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            That&#39;s 97.2% of women who got results and never
                            looked back.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          And half of those 2.8% returns? Wrong address
                          deliveries or husbands who accidentally threw out the
                          bottle thinking it was empty.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          The actual &quot;didn&#39;t work&quot; rate is barely
                          1%.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          After 15 years of prescribing things I wasn&#39;t
                          fully confident in, I&#39;m finally recommending
                          something I am. And I&#39;m backing it with my
                          reputation, my name, and a guarantee no pharmaceutical
                          company would ever offer you.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            When you address the root cause, results aren&#39;t
                            a mystery.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          They&#39;re inevitable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <h2 className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            THE TWO PATHS
                          </strong>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        <p className="box-border caret-transparent outline-[3px]">
                          Right now, you&#39;re standing at a crossroads.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Two paths stretch out in front of you.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Only one leads to thicker hair.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            PATH 1: KEEP DOING WHAT YOU&#39;RE DOING
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Keep counting hairs in your brush every morning.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Keep avoiding mirrors in bright lighting.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Keep wearing your hair in that same pulled-back style
                          that hides your part.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Keep spending $200-500/month on solutions that create
                          dependency, not results.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Keep being a recurring revenue stream for companies
                          that NEED you to stay desperate.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Keep skipping family photos because you
                          &quot;don&#39;t look like yourself anymore.&quot;
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Keep watching your husband&#39;s hand pass over your
                          head without running through your hair.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Keep waking up with that sinking feeling when you see
                          more hair on your pillow.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Keep pretending you&#39;re &quot;fine with aging
                          naturally&quot; while dying inside every time you
                          catch your reflection.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Keep watching women your mother&#39;s age with thicker
                          hair than yours and wondering what went wrong.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Keep giving your money to an industry that profits
                          from your pain.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            PATH 2: JOIN 88,000+ WOMEN WHO TOOK THEIR HAIR BACK
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Spend less than you&#39;d blow on a dinner out.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Get a spray that&#39;s helped 91% of users see results
                          within 2 weeks.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Fix the ROOT CAUSE instead of masking symptoms.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Wake up in 14 days with noticeably less hair in your
                          drain.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Wake up in 30 days with baby hairs you can feel along
                          your temples.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Wake up in 60 days with your hairdresser asking what
                          you&#39;re doing differently.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Wake up in 90 days with your confidence back.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Take a photo with your family without strategically
                          positioning yourself to hide your part.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Feel your husband run his fingers through your hair
                          again.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Be the woman who finally accepted the apology of a
                          doctor who stopped prescribing and started listening —
                          and tried the formula she created when she did.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Stop obsessing over your hair and start living your
                          life.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Join the revolution against beauty industry
                            exploitation.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          The choice is yours.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          But only one path gives you a 120-day money-back
                          guarantee.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Only one path costs less than ONE month of the
                          treatments that aren&#39;t working.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Only one path addresses the hormone that modern life
                          supercharged — the one that&#39;s strangling your
                          follicles right now.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-2xl font-extrabold box-border caret-transparent flex leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full py-[5px] font-open_sans md:text-[33px] md:leading-[42.9px]">
                      <div className="text-2xl box-border caret-transparent leading-[31.2px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[33px] md:leading-[42.9px]">
                        <h2 className="text-2xl box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                          <strong className="text-2xl font-bold box-border caret-transparent leading-[31.2px] outline-[3px] md:text-[33px] md:leading-[42.9px]">
                            WHAT TO DO NEXT
                          </strong>
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
                        <p className="box-border caret-transparent outline-[3px]">
                          Here&#39;s exactly what to do right now:
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            1. Click the &quot;CLAIM MY 60% DISCOUNT&quot;
                            button below
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            2. Choose your package
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          &quot;Pro tip: Most women see best results at 16
                          weeks. That&#39;s 4 bottles. That&#39;s why our most
                          popular package is The 4 Months Supply (4 bottles)
                          because it gives you 16 weeks of treatment.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            3. Fill out your shipping info
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          We ship same-day if you order before 3 PM EST. Next
                          day if after.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            4. Wait 3-5 days for your package to arrive
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            5. Use it for 60 seconds 2x daily when it arrives
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Spray along your part. At your crown. Around your
                          hairline. Massage gently for 30 seconds.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            6. Start your countdown to thicker hair
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Week 1: Less shedding Week 2: Even less shedding Week
                          4: Baby hairs appearing Week 8: Visible thickness Week
                          12: Hair you recognize as YOURS
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            But whatever you do, don&#39;t close this page
                            thinking &quot;I&#39;ll order later.&quot;
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Later doesn&#39;t exist when 4,200 units are all
                          that&#39;s left. Later = the discount expires (48
                          hours from RIGHT NOW) Later = units sell out (happened
                          in 11 hours last time) Later = another month of
                          avoiding overhead lighting Later = another $150 spent
                          on Rogaine that won&#39;t fix anything Later = another
                          family gathering where you strategically hide in
                          photos
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            Your follicles have been suffocating under DHT long
                            enough.
                          </strong>
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          They&#39;re not dead. They&#39;re waiting.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Waiting for someone to block the hormone that modern
                          life unleashed on them.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Waiting for someone to undo what your
                          grandmother&#39;s generation never had to face.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Waiting for you to give them one more chance.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Click below. Let&#39;s end this nightmare.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <a
                      href="https://trybello.com/products/bello-hair-helper-spray"
                      className="relative text-black text-xl font-bold bg-yellow-400 shadow-[rgb(218,218,218)_0px_0px_1px_1px] box-border caret-transparent flex flex-col tracking-[0.4px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 px-[15px] py-2.5 rounded-[5px] font-helvetica md:text-3xl md:tracking-[0.6px] md:leading-[45px]"
                    >
                      <div className="text-xl box-border caret-transparent tracking-[0.4px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none md:text-3xl md:tracking-[0.6px] md:leading-[45px]">
                        <p className="text-xl box-border caret-transparent tracking-[0.4px] leading-[30px] outline-[3px] md:text-3xl md:tracking-[0.6px] md:leading-[45px]">
                          🔒 CLAIM MY 60% DISCOUNT NOW — BEFORE IT&#39;S GONE
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        <p className="box-border caret-transparent outline-[3px]">
                          ⚡ Due to recent TV and news appearances, stock is
                          limited to 4,200 units
                        </p>
                        <p className="box-border caret-transparent outline-[3px]">
                          📦 FREE expedited shipping on all orders
                        </p>
                        <p className="box-border caret-transparent outline-[3px]">
                          💯 120-Day &quot;Thicker Hair&quot; Money-Back
                          Guarantee
                        </p>
                        <p className="box-border caret-transparent outline-[3px]">
                          🔐 Secure checkout — your information is protected
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="text-black text-xl box-border caret-transparent flex leading-[26px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full mt-2.5 py-[5px] font-open_sans">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        <p className="box-border caret-transparent outline-[3px]">
                          To thicker, fuller hair you&#39;ll actually recognize
                          as yours,
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          Dr. Yolanda Holmes, MD, FAAD Board-Certified
                          Dermatologist Creator of TryBello Hair Helper Spray
                          Champion of women who deserve the truth
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            P.S. —
                          </strong>
                          I just got a text from Diane — the retired school
                          administrator with the framed photograph from the
                          beginning of this article. She sent me a new photo.
                          Her and her mother, side by side, at her
                          granddaughter&#39;s birthday party. Both wearing their
                          hair down. Both smiling. Her granddaughter is sitting
                          on her lap — no hat in sight. That could be you in 12
                          weeks. But only if you act now.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            P.P.S. —
                          </strong>
                          Hair Helper is the first thing I&#39;ve recommended in
                          15 years that I have complete confidence in.
                          Clinically tested. Personally used. Backed by a
                          guarantee no pharmaceutical company would ever offer.
                          The ones Big Beauty doesn&#39;t want you to know
                          about.
                        </p>
                        <p className="box-border caret-transparent outline-[3px] before:accent-auto before:caret-transparent before:text-black before:inline-block before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:min-h-5 before:outline-[3px] before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-open_sans"></p>
                        <p className="box-border caret-transparent outline-[3px]">
                          <strong className="font-bold box-border caret-transparent outline-[3px]">
                            P.P.P.S. —{" "}
                          </strong>
                          Seriously, we&#39;re down to 4,200 units. When I
                          refresh our inventory system and see it below 1,000,
                          I&#39;m pulling this page and this discount. Don&#39;t
                          say I didn&#39;t warn you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] w-full">
                  <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <a
                      href="https://trybello.com/products/bello-hair-helper-spray"
                      className="relative text-black text-xl font-bold bg-yellow-400 shadow-[rgb(218,218,218)_0px_0px_1px_1px] box-border caret-transparent flex flex-col tracking-[0.4px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] w-full mt-2.5 px-[15px] py-2.5 rounded-[5px] font-helvetica md:text-3xl md:tracking-[0.6px] md:leading-[45px]"
                    >
                      <div className="text-xl box-border caret-transparent tracking-[0.4px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none md:text-3xl md:tracking-[0.6px] md:leading-[45px]">
                        <p className="text-xl box-border caret-transparent tracking-[0.4px] leading-[30px] outline-[3px] md:text-3xl md:tracking-[0.6px] md:leading-[45px]">
                          🔒 CHECK AVAILABILITY NOW  
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
                                      UPDATE:{" "}
                                    </strong>
                                  </span>
                                  <span className="box-border caret-transparent outline-[3px]">
                                    As of June 17, 2026 – 2:47 PM EST
                                    <strong className="font-bold box-border caret-transparent outline-[3px]">
                                      {" "}
                                      Demand has been overwhelming since this
                                      article went live. Current inventory:
                                      3,847 units remaining Order now to lock in
                                      60% OFF + FREE EXPEDITED SHIPPING before
                                      we sell out.
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
                                            NOTE:
                                          </span>
                                          This deal is NOT available on Amazon
                                          or eBay. Beware of knockoff products.
                                          TryBello is only sold through our
                                          official website.
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
                                      href="https://trybello.com/products/bello-hair-helper-spray"
                                      className="relative text-black text-xl font-bold bg-yellow-400 shadow-[rgb(218,218,218)_0px_0px_1px_1px] box-border caret-transparent flex flex-col tracking-[0.4px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] w-full px-[15px] py-2.5 rounded-[5px] font-helvetica md:text-3xl md:tracking-[0.6px] md:leading-[45px]"
                                    >
                                      <div className="text-xl box-border caret-transparent tracking-[0.4px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none md:text-3xl md:tracking-[0.6px] md:leading-[45px]">
                                        <p className="text-xl box-border caret-transparent tracking-[0.4px] leading-[30px] outline-[3px] md:text-3xl md:tracking-[0.6px] md:leading-[45px]">
                                          🔒 SECURE MY BOTTLES NOW — 120 DAY
                                          GUARANTEE
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
                                    Customer Reviews
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
                                    4.8 out of 5
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
                                  3,791 customer ratings
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
                                          90%
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
                                          5 star
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
                                          90%
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
                                          4 star
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
                                          90%
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
                                          3 star
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
                                          90%
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
                                          2 star
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
                                          90%
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
                                          1 star
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
                                  By Feature
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
                                          Price
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
                                          5.0
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
                                          Effectiveness
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
                                          5.0
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
                                          Comfort
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
                                          5.0
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
                                          Quality
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
                                          5.0
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
