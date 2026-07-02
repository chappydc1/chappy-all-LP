// @ts-nocheck
import adv from "../../../adv.json";
import media from "../../../media.json";

export const GuaranteeSection = () => {
  return (
    <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mb-6 mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
      <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
            <h2 className="text-neutral-900 text-2xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-playfair_display md:text-[32px] md:leading-[41.6px]">
              {adv.guarantee.heading}
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
                src={media.guarantee.image}
                alt=""
                className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full md:text-base md:leading-[28.8px]"
              />
            </picture>
          </div>
        </div>
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
            <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[23.4px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter md:leading-[25.2px]">
              {adv.guarantee.intro.p1}
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
               
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              {adv.guarantee.intro.p2}
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
               
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              {adv.guarantee.intro.p3}
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
               
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                {adv.guarantee.intro.promiseIntro}
              </strong>
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
               
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                {adv.guarantee.intro.tryFlow}
              </strong>
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
               
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              {adv.guarantee.intro.p4}
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              {adv.guarantee.intro.p5}
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              {adv.guarantee.intro.p6}
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
               
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              {adv.guarantee.intro.p7}
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
                        src={media.guarantee.bulletIcon}
                        alt="Icon"
                        className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                      />
                    </span>
                  </div>
                  <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                    <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                      <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                        <p className="box-border caret-transparent max-w-full outline-[3px]">
                          {adv.guarantee.bullets[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[15px] items-center box-border caret-transparent gap-x-0 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                  <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                    <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                      <img
                        src={media.guarantee.bulletIcon}
                        alt="Icon"
                        className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                      />
                    </span>
                  </div>
                  <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                    <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                      <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                        <p className="box-border caret-transparent max-w-full outline-[3px]">
                          {adv.guarantee.bullets[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[15px] items-center box-border caret-transparent gap-x-0 flex leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                  <div className="text-[15px] box-border caret-transparent flex shrink-0 leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden md:text-base md:leading-[28.8px]">
                    <span className="text-neutral-900 text-[40px] items-center box-border caret-transparent flex h-full justify-center leading-[72px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:text-base md:leading-[28.8px]">
                      <img
                        src={media.guarantee.bulletIcon}
                        alt="Icon"
                        className="text-[40px] box-border caret-transparent h-10 leading-[72px] outline-[3px] w-10 md:text-base md:leading-[28.8px]"
                      />
                    </span>
                  </div>
                  <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-base md:leading-[28.8px]">
                    <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                      <div className="text-neutral-900 text-lg box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-full border overflow-hidden border-solid border-transparent font-bitter">
                        <p className="box-border caret-transparent max-w-full outline-[3px]">
                          {adv.guarantee.bullets[2]}
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
            <h2 className="text-neutral-900 text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[23.4px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-bitter md:leading-[25.2px]">
              {adv.guarantee.closing.leadIn}{" "}
              <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                {adv.guarantee.closing.quote}
              </strong>
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
               
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              <strong className="font-bold box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]">
                {adv.guarantee.closing.refundPromise}
              </strong>
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
                
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              {adv.guarantee.closing.noHassle}
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              {adv.guarantee.closing.emailInstructions}
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              {adv.guarantee.closing.confidenceQuestion}
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              {adv.guarantee.closing.refundStat}
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              <br className="box-border caret-transparent leading-[23.4px] max-w-full outline-[3px] md:leading-[25.2px]" />
              {adv.guarantee.closing.refundStatDetail}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
