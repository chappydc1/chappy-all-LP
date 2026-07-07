export type ElavynFinalCallToActionProps = {
  title: React.ReactNode;
  heroImageSrc: string;
  introContent: React.ReactNode;
  bulletItems: React.ReactNode[];
  closingContent?: React.ReactNode;
  closingSectionClassName?: string;
  closingHeadingClassName?: string;
  showOfferSections?: boolean;
};

export const ElavynFinalCallToAction = (props: ElavynFinalCallToActionProps) => {
  return (
    <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mb-6 mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
      <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
            <h2 className="text-neutral-900 text-2xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-playfair_display md:text-[32px] md:leading-[41.6px]">
              {props.title}
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
                src={props.heroImageSrc}
                alt=""
                className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
              />
            </picture>
          </div>
        </div>
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
            <h2 className="text-neutral-900 bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter md:leading-[25.2px] text-[17px] leading-[22.1px] md:text-lg">
              {props.introContent}
            </h2>
          </div>
        </div>
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] my-3 md:text-base md:leading-[28.8px]">
            <div className="text-[15px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-base md:leading-[28.8px]">
              <div className="text-[15px] box-border caret-transparent flex flex-col leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 md:text-base md:leading-[28.8px]">
                {props.bulletItems.map((bulletItem, index) => (
                  <div
                    className="text-[15px] items-center box-border caret-transparent gap-x-0 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]"
                    key={index}
                  >
                    <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                      <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                        <img
                          src="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/icon-1.svg"
                          alt="Icon"
                          className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                        />
                      </span>
                    </div>
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                      <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                        <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                          <p className="box-border caret-transparent max-w-full outline-[3px]">
                            {bulletItem}
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
        {props.closingContent ? (
          <div
            className={
              props.closingSectionClassName ??
              "text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]"
            }
          >
            <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
              <h2
                className={
                  props.closingHeadingClassName ??
                  "text-neutral-900 bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter md:leading-[25.2px] text-[17px] leading-[22.1px] md:text-lg"
                }
              >
                {props.closingContent}
              </h2>
            </div>
          </div>
        ) : null}
        {props.showOfferSections ? (
          <>
            <div className="text-[15px] box-border caret-transparent flex flex-col leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
              <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-6 md:text-base md:leading-[28.8px]">
                <a
                  aria-label="<p>CHECK AVAILABILITY →</p>"
                  href="https://getelavyn.com/pages/flow"
                  className="relative text-white text-xl font-bold items-center bg-green-700 shadow-[rgba(18,18,18,0.2)_2.82843px_2.82843px_4px_0px] box-border caret-transparent inline-flex justify-center leading-9 max-w-full outline-[3px] text-center w-full px-6 py-3 rounded-lg font-poppins md:text-2xl md:leading-[43.2px] before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-xl before:not-italic before:normal-nums before:font-bold before:h-full before:tracking-[0.6px] before:leading-9 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-none before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-poppins before:md:text-2xl before:md:leading-[43.2px]"
                >
                  <div className="text-xl box-border caret-transparent flex leading-9 max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-2xl md:leading-[43.2px]">
                    <span className="relative text-xl items-center box-border caret-transparent flex h-full leading-9 max-w-full min-h-[auto] min-w-[auto] outline-[3px] break-words overflow-hidden md:text-2xl md:leading-[43.2px]">
                      <p className="text-xl box-border caret-transparent leading-9 max-w-full min-h-[auto] min-w-[auto] outline-[3px] break-words md:text-2xl md:leading-[43.2px]">
                        CHECK AVAILABILITY →
                      </p>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div
              role="presentation"
              className="relative text-[15px] box-border caret-transparent shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center my-3 md:text-base md:leading-[28.8px]"
            >
              <a
                href="https://tryelavyn.com/pages/flow"
                title=""
                className="text-[15px] box-border caret-transparent flex h-full justify-center leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
              >
                <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                  <img
                    src="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/hf_20260313_104632_83b8bf74-594b-41e1-80b0-9d7e6222848e.jpg"
                    alt=""
                    className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
                  />
                </picture>
              </a>
            </div>
            <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-6 md:text-base md:leading-[28.8px]">
              <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[23.4px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center w-full overflow-hidden bg-center font-bitter md:text-xl md:leading-7">
                  <a
                    href="https://getelavyn.com/pages/flow"
                    className="text-lg box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:text-xl md:leading-7"
                  >
                    <span className="text-blue-700 text-2xl box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-7">
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-7">
                        <u className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] underline md:leading-7">
                          GET 60% OFF Elavyn Flow+ Now!
                        </u>
                      </strong>
                    </span>
                  </a>
                  <br className="text-lg box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:text-xl md:leading-7" />
                  <br className="text-lg box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:text-xl md:leading-7" />
                  <span className="text-red-600 text-lg box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:text-xl md:leading-7">
                    <strong className="text-lg font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:text-xl md:leading-7">
                      You can take advantage of this unique offer for 3 days
                      only!
                    </strong>
                  </span>
                </h2>
              </div>
            </div>
            <div className="text-[15px] box-border caret-transparent flex flex-col leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
              <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-6 md:text-base md:leading-[28.8px]">
                <a
                  aria-label="<p>CHECK AVAILABILITY →</p>"
                  href="https://getelavyn.com/pages/flow"
                  className="relative text-white text-xl font-bold items-center bg-green-700 shadow-[rgba(18,18,18,0.2)_2.82843px_2.82843px_4px_0px] box-border caret-transparent inline-flex justify-center leading-9 max-w-full outline-[3px] text-center w-full px-6 py-3 rounded-lg font-poppins md:text-2xl md:leading-[43.2px] before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-xl before:not-italic before:normal-nums before:font-bold before:h-full before:tracking-[0.6px] before:leading-9 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-none before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-poppins before:md:text-2xl before:md:leading-[43.2px]"
                >
                  <div className="text-xl box-border caret-transparent flex leading-9 max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-2xl md:leading-[43.2px]">
                    <span className="relative text-xl items-center box-border caret-transparent flex h-full leading-9 max-w-full min-h-[auto] min-w-[auto] outline-[3px] break-words overflow-hidden md:text-2xl md:leading-[43.2px]">
                      <p className="text-xl box-border caret-transparent leading-9 max-w-full min-h-[auto] min-w-[auto] outline-[3px] break-words md:text-2xl md:leading-[43.2px]">
                        CHECK AVAILABILITY →
                      </p>
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full border border-red-700 mb-6 mx-auto p-4 border-solid md:text-base md:leading-[28.8px] md:w-[1200px]">
              <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                  <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                    <div className="text-neutral-900 text-[22px] font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[30.8px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center w-full overflow-hidden bg-center font-bitter md:text-[28px] md:leading-[39.2px]">
                      <p className="text-[22px] box-border caret-transparent leading-[30.8px] max-w-full outline-[3px] md:text-[28px] md:leading-[39.2px]">
                        INTERNET ONLY OFFER!
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  role="presentation"
                  className="relative text-[15px] box-border caret-transparent shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-base md:leading-[28.8px]"
                >
                  <a
                    href="https://tryelavyn.com/pages/flow"
                    title=""
                    className="text-[15px] box-border caret-transparent flex h-full justify-center leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
                  >
                    <picture className="text-[15px] box-border caret-transparent contents leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                      <img
                        src="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773242692333_Adv_Lymph_3_ffcf76c7-144f-4ae1-851a-640192b89ef3.webp"
                        alt=""
                        className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
                      />
                    </picture>
                  </a>
                </div>
                <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                  <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                    <div className="text-neutral-900 text-lg font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center w-full overflow-hidden bg-center font-bitter md:text-2xl md:leading-[33.6px]">
                      <p className="text-lg box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:text-2xl md:leading-[33.6px]">
                        FOR A LIMITED TIME:
                        <br className="text-lg box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:text-2xl md:leading-[33.6px]" />
                        60% OFF + THEY PAY FOR SHIPPING
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-[15px] content-start bg-yellow-100 bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full border-red-700 bg-center mb-6 mx-auto p-2 border-2 border-dashed md:text-base md:leading-[28.8px] md:w-[1200px]">
              <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
                  <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                    <div className="text-neutral-900 text-lg font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center w-full overflow-hidden bg-center font-bitter">
                      <p className="box-border caret-transparent max-w-full outline-[3px]">
                        <span className="text-red-600 box-border caret-transparent max-w-full outline-[3px]">
                          LIMITED TIME READER-ONLY SPECIAL
                        </span>
                        : Ordering now makes you eligible for 60% OFF Elavyn
                        Flow+. Only available here. Limited to first 500
                        customers only.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
              <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[23.4px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter md:leading-[25.2px]">
                  <a
                    href="https://getelavyn.com/pages/flow"
                    className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]"
                  >
                    <span className="text-blue-700 text-xl box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                      <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                        <u className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] underline md:leading-[25.2px]">
                          → CHECK AVAILABILITY NOW -  30 DAY GUARANTEE
                        </u>
                      </strong>
                    </span>
                  </a>
                  <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                  <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                  To your freedom, 
                  <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                  <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                  <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                    Dr. Malcolm Carter, MD
                  </strong>
                  <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                  Creator, Flow+ by Elavyn
                  <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                  <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                  <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                    P.S.{" "}
                  </strong>
                  — Denise just sent me a photo from our grandson&#39;s birthday
                  party. She was there, on her feet for three hours. The way she
                  used to be before all of this started. That could be you in 30
                  days. But only if you act in the next 72 hours.
                  <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                  <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                  <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                    P.P.S.{" "}
                  </strong>
                  — I&#39;m looking at our inventory dashboard right now as I
                  write this. We&#39;re down to 832 units. When I refresh our
                  inventory system and see it below 500, I&#39;m pulling this
                  page. Don&#39;t say I didn&#39;t warn you.
                  <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                  <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                  <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                    P.P.P.S.{" "}
                  </strong>
                  — If you&#39;re a medical professional reading this and feel
                  the urge to push back, bring it on. I have 837 case studies
                  and the science is on my side.
                </h2>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
