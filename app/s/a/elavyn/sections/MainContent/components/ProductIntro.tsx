// @ts-nocheck
import adv from "../../../adv.json";
import media from "../../../media.json";

export const ProductIntro = () => {
  return (
    <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mb-6 mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
      <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
            <h2 className="text-neutral-900 text-2xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-playfair_display md:text-[32px] md:leading-[41.6px]">
              {adv.productIntro.heading}
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
              src={media.productIntro.videoSrc}
              className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-full md:text-base md:leading-[28.8px]"
            ></video>
          </div>
        </div>
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
            <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter">
              <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                {adv.productIntro.calloutLabel}
              </span>
              <span className="text-zinc-950 box-border caret-transparent max-w-full outline-[3px]"></span>
              <a
                href={adv.productIntro.ctaLinkHref}
                className="box-border caret-transparent max-w-full outline-[3px]"
              >
                <span className="text-blue-600 box-border caret-transparent max-w-full outline-[3px]">
                  <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                    <u className="box-border caret-transparent max-w-full outline-[3px] underline">
                      {adv.productIntro.ctaLinkText}
                    </u>
                  </strong>
                </span>
              </a>
              <span className="text-blue-600 box-border caret-transparent max-w-full outline-[3px]">
                <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                  <u className="box-border caret-transparent max-w-full outline-[3px] underline">
                     
                  </u>
                </strong>
              </span>
              <br className="box-border caret-transparent max-w-full outline-[3px]" />
              <br className="box-border caret-transparent max-w-full outline-[3px]" />
              <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                {adv.productIntro.intro.p1}
                <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                  {" "}
                  {adv.productIntro.intro.p1Bold}
                </strong>
              </span>
            </h2>
          </div>
        </div>
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] my-3 md:text-base md:leading-[28.8px]">
            <div className="text-[15px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center md:text-base md:leading-[28.8px]">
              <div className="text-[15px] box-border caret-transparent flex flex-col leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 md:text-base md:leading-[28.8px]">
                {adv.productIntro.bulletItems.map((bulletItem, bulletIndex) => (
                  <div
                    key={bulletIndex}
                    className="text-[15px] items-center box-border caret-transparent gap-x-0 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]"
                  >
                    <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                      <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                        <img
                          src={media.productIntro.bulletIconSrc}
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
                              {bulletItem.text}
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
                <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                  {adv.productIntro.closing.heading}
                </strong>
              </span>
              <span className="box-border caret-transparent max-w-full outline-[3px]">
                <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                   
                </strong>
              </span>
              <br className="box-border caret-transparent max-w-full outline-[3px]" />
              <br className="box-border caret-transparent max-w-full outline-[3px]" />
              <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                {adv.productIntro.closing.p1}
              </span>
              <br className="box-border caret-transparent max-w-full outline-[3px]" />
              <br className="box-border caret-transparent max-w-full outline-[3px]" />
              <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                {adv.productIntro.closing.p2}
              </span>
              <br className="box-border caret-transparent max-w-full outline-[3px]" />
              <br className="box-border caret-transparent max-w-full outline-[3px]" />
              <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                <strong className="font-bold box-border caret-transparent max-w-full outline-[3px]">
                  {adv.productIntro.closing.p3Bold}
                </strong>
              </span>
              <br className="box-border caret-transparent max-w-full outline-[3px]" />
              <br className="box-border caret-transparent max-w-full outline-[3px]" />
              <span className="text-black box-border caret-transparent max-w-full outline-[3px]">
                {adv.productIntro.closing.p4}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
