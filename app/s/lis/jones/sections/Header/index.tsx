import { DesktopHeader } from "../Header/components/DesktopHeader";
import { MobileHeader } from "../Header/components/MobileHeader";

export const Header = () => {
  return (
    <div className="relative items-center self-stretch box-border caret-transparent flex flex-col shrink-0 justify-center min-h-px outline-[3px] pt-px">
      <DesktopHeader />
      <MobileHeader />
      <div className="relative items-center self-stretch box-border caret-transparent flex shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px]">
        <div className="box-border caret-transparent contents outline-[3px]">
          <div className="relative items-start self-stretch box-border caret-transparent flex basis-0 flex-col grow grid-cols-[repeat(2,minmax(0px,1fr))] justify-start max-w-full min-h-px outline-[3px] md:grid md:flex-row">
            <div className="relative items-start self-stretch box-border caret-transparent flex basis-auto grow justify-start max-w-full min-h-px outline-[3px] md:basis-0">
              <picture className="items-center self-start box-border caret-transparent flex basis-0 grow h-[350px] object-cover outline-[3px] overflow-x-auto overflow-y-hidden md:h-[587px]">
                <img
                  src="/images/jones/146.png"
                  alt="Various shades of foundation cream in glass jars arranged neatly in rows."
                  className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                />
              </picture>
            </div>
            <div className="relative items-center self-center box-border caret-transparent flex basis-auto flex-col grow justify-center max-w-full min-h-px outline-[3px] pt-[30px] pb-10 px-5 md:basis-0 md:p-0">
              <div className="text-[32px] box-border caret-transparent hidden grow leading-10 max-w-[600px] min-h-0 min-w-0 outline-[3px] break-words text-center mb-2.5 font-basemonowideweb md:text-4xl md:block md:leading-[67px] md:min-h-[auto] md:min-w-[auto] md:mb-[15px]">
                <span className="text-[32px] box-border caret-transparent leading-10 outline-[3px] break-words w-full md:text-4xl md:leading-[67px]">
                  <h1 className="text-[32px] box-border caret-transparent leading-10 outline-[3px] break-words md:text-4xl md:leading-[67px]">
                    <span className="text-zinc-900 text-[32px] box-border caret-transparent leading-10 outline-[3px] break-words md:text-4xl md:leading-[67px]">
                      5 Ways WTF Will Change the Way You Think About Foundation
                    </span>
                  </h1>
                </span>
              </div>
              <div className="text-[32px] box-border caret-transparent flex grow leading-10 max-w-[600px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center mb-2.5 font-basemonowideweb md:text-[39px] md:hidden md:leading-[67px] md:min-h-0 md:min-w-0 md:mb-[15px]">
                <span className="text-[32px] box-border caret-transparent block leading-10 min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:text-[39px] md:inline md:leading-[67px] md:min-h-0 md:min-w-0">
                  <h1 className="text-[32px] box-border caret-transparent leading-10 outline-[3px] break-words md:text-[39px] md:leading-[67px]">
                    <span className="text-zinc-900 text-[32px] box-border caret-transparent leading-10 outline-[3px] break-words md:text-[39px] md:leading-[67px]">
                      5 Ways WTF Will Change the Way You Think About Foundation
                    </span>
                  </h1>
                </span>
              </div>
              <div className="relative items-center self-center box-border caret-transparent gap-x-2 flex shrink-0 h-6 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-2 mb-2.5 md:self-stretch md:h-[18px] md:mb-[30px]">
                <picture className="items-center self-center box-border caret-transparent flex shrink-0 h-[18px] object-contain outline-[3px] overflow-x-auto overflow-y-hidden w-[81px]">
                  <img
                    src="/images/jones/142.png"
                    className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-contain outline-[3px] align-baseline"
                  />
                </picture>
                <div className="text-xs self-center box-border caret-transparent shrink-0 leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-ringsidewideweb md:self-auto md:leading-[26px]">
                  <span className="box-border caret-transparent leading-6 outline-[3px] break-words w-full md:leading-[26px]">
                    <p className="box-border caret-transparent leading-6 outline-[3px] break-words md:leading-[26px]">
                      Over 11,000 5-Star Reviews
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative items-center self-stretch box-border caret-transparent gap-x-2 flex flex-col shrink-0 justify-center mt-[-50px] max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-2 px-[15px] py-[35px] md:gap-x-[70px] md:gap-y-[70px] md:mt-0 md:pt-20 md:pb-0 md:px-0">
        <div className="items-center box-border caret-transparent contents shrink-0 justify-center min-h-0 min-w-0 outline-[3px] w-full md:flex md:min-h-[auto] md:min-w-[auto]">
          <div className="relative items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 grid-cols-[repeat(1,minmax(0px,1fr))] justify-center max-w-[1110px] min-h-px min-w-[auto] outline-[3px] gap-y-10 w-full md:gap-x-0 md:grid md:gap-y-[70px]">
            <div className="box-border caret-transparent contents outline-[3px]">
              <div className="relative items-center self-stretch box-border caret-transparent gap-x-5 flex flex-col shrink-0 grid-cols-[repeat(2,minmax(0px,1fr))] justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-5 md:gap-x-[70px] md:grid md:gap-y-[70px]">
                <div className="relative items-center self-stretch box-border caret-transparent hidden flex-col shrink-0 justify-center max-w-full min-h-px min-w-0 outline-[3px] md:flex md:min-w-[auto]">
                  <picture className="relative items-center self-auto box-border caret-transparent hidden grow shrink object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:flex md:grow-0 md:shrink-0">
                    <img
                      alt="Side-by-side comparison of a woman before and after a makeover."
                      className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                    />
                  </picture>
                </div>
                <div className="relative items-start box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 justify-center max-w-[650px] min-h-px min-w-[auto] outline-[3px] gap-y-2.5 w-full md:items-center md:gap-x-[15px] md:gap-y-[15px]">
                  <div className="text-[35px] font-semibold self-stretch box-border caret-transparent shrink-0 leading-[45px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full font-canela md:text-[51px] md:leading-[65px] md:w-auto">
                    <span className="text-[35px] box-border caret-transparent leading-[45px] outline-[3px] break-words w-full md:text-[51px] md:leading-[65px]">
                      <p className="text-[35px] box-border caret-transparent leading-[45px] outline-[3px] break-words md:text-[51px] md:leading-[65px]">
                        1.
                      </p>
                    </span>
                  </div>
                  <div className="text-[22px] self-stretch box-border caret-transparent shrink-0 tracking-[normal] leading-[35px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                    <span className="text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words w-full md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                      <p className="text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                        Flawless Look, Barely-There Feel
                      </p>
                    </span>
                  </div>
                  <div className="text-base font-medium self-stretch box-border caret-transparent shrink-0 leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-ringsidewideweb md:text-lg md:leading-[27px]">
                    <span className="text-base box-border caret-transparent leading-6 outline-[3px] break-words w-full md:text-lg md:leading-[27px]">
                      <p className="text-base box-border caret-transparent leading-6 outline-[3px] break-words md:text-lg md:leading-[27px]">
                        Wish your skin looked naturally even and radiant without
                        piling on product? WTF smooths out redness and dark
                        spots without settling into lines or clinging to dry
                        spots. It’s that &quot;no-makeup makeup&quot; look
                        everyone’s after - without feeling like you’re wearing
                        anything at all.
                      </p>
                    </span>
                  </div>
                  <div className="relative items-start self-stretch bg-stone-100 box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 justify-start max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-2.5 mt-[5px] px-[15px] py-4 md:mt-2.5 md:px-[30px]">
                    <div className="relative items-start self-start box-border caret-transparent flex flex-col shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] md:self-stretch md:justify-start">
                      <div className="text-[15px] box-border caret-transparent shrink-0 leading-5 min-h-[auto] min-w-[auto] outline-[3px] break-words uppercase font-geogrotesquecondboldweb md:text-xl md:leading-[26px]">
                        <span className="text-[15px] box-border caret-transparent leading-5 outline-[3px] break-words w-full md:text-xl md:leading-[26px]">
                          <h3 className="text-[15px] box-border caret-transparent leading-5 outline-[3px] break-words md:text-xl md:leading-[26px]">
                            “So Silky!”
                          </h3>
                        </span>
                      </div>
                      <div className="relative items-center self-start box-border caret-transparent gap-x-1 flex grow justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-1 py-[5px] md:py-2.5">
                        <div className="relative items-center self-center box-border caret-transparent gap-x-0.5 flex shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-0.5 md:items-start md:self-auto">
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                        </div>
                        <div className="text-[8px] box-border caret-transparent flex grow shrink tracking-[0.2px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:block md:grow-0 md:shrink-0 md:leading-[10px]">
                          <span className="box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:inline md:leading-[10px] md:min-h-0 md:min-w-0">
                            <p className="box-border caret-transparent leading-6 outline-[3px] break-words md:leading-[10px]">
                              Lauri G.
                            </p>
                          </span>
                        </div>
                        <picture className="items-center box-border caret-transparent flex grow-0 shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:grow md:shrink md:w-auto">
                          <img
                            src="/images/jones/129.svg"
                            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                          />
                        </picture>
                        <div className="text-[8px] box-border caret-transparent flex grow shrink tracking-[0.2px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:block md:grow-0 md:shrink-0 md:leading-[10px]">
                          <span className="box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:inline md:leading-[10px] md:min-h-0 md:min-w-0">
                            <p className="box-border caret-transparent leading-6 outline-[3px] break-words md:leading-[10px]">
                              Verified Buyer
                            </p>
                          </span>
                        </div>
                      </div>
                      <div className="text-xs font-medium self-stretch box-border caret-transparent shrink-0 leading-[17px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-ringsidewideweb md:text-sm md:leading-[19px]">
                        <span className="text-xs box-border caret-transparent leading-[17px] outline-[3px] break-words w-full md:text-sm md:leading-[19px]">
                          <p className="text-xs box-border caret-transparent leading-[17px] outline-[3px] break-words md:text-sm md:leading-[19px]">
                            “So silky, soft, light and smooth. I never feel like
                            I’m wearing foundation. It blends like magic ! I’ve
                            tried MANY foundations. Will never use anything else
                            again. A beautiful and dewey young look for this 58
                            year old.”
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative items-center box-border caret-transparent gap-x-[70px] flex shrink-0 justify-center min-h-px min-w-[auto] outline-[3px] gap-y-[70px] w-full md:hidden md:min-w-0">
                  <picture className="relative items-center self-auto box-border caret-transparent flex basis-0 grow object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:hidden">
                    <img
                      src="/images/jones/137.jpg"
                      alt="Close-up of a woman's face with freckles and blue eyes, wearing a green sweater and gold earring."
                      className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent contents outline-[3px]">
              <div className="relative items-center self-stretch box-border caret-transparent gap-x-5 flex flex-col shrink-0 grid-cols-[repeat(2,minmax(0px,1fr))] justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-5 md:gap-x-[70px] md:grid md:gap-y-[70px]">
                <div className="relative items-center self-stretch box-border caret-transparent hidden flex-col shrink-0 justify-center max-w-full min-h-px min-w-0 outline-[3px] md:flex md:min-w-[auto]">
                  <picture className="relative items-center self-auto box-border caret-transparent hidden grow object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:flex">
                    <img
                      src="/images/jones/143.png"
                      alt="Foundation shades chart with descriptions and corresponding face pencil numbers."
                      className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                    />
                  </picture>
                  <div
                    role="button"
                    className="box-border caret-transparent hidden shrink-0 min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]"
                  >
                    <div className="box-border caret-transparent h-full outline-[3px] w-full">
                      <button
                        type="button"
                        className="absolute appearance-none text-[13.3333px] items-center bg-white bottom-[-25px] caret-transparent flex h-[30px] justify-center tracking-[normal] leading-[normal] outline-[3px] text-center w-[30px] z-[9999999] border p-0 rounded-[50%] border-black/10 right-0 font-arial"
                      >
                        <img
                          src="/images/jones/icon-3.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-4 outline-[3px] align-baseline w-4"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative items-start box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 justify-center max-w-[650px] min-h-px min-w-[auto] outline-[3px] gap-y-2.5 w-full md:items-center md:gap-x-[15px] md:gap-y-[15px]">
                  <div className="text-[35px] font-semibold self-stretch box-border caret-transparent shrink-0 leading-[45px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full font-canela md:text-[51px] md:leading-[65px] md:w-auto">
                    <span className="text-[35px] box-border caret-transparent leading-[45px] outline-[3px] break-words w-full md:text-[51px] md:leading-[65px]">
                      <p className="text-[35px] box-border caret-transparent leading-[45px] outline-[3px] break-words md:text-[51px] md:leading-[65px]">
                        2.
                      </p>
                    </span>
                  </div>
                  <div className="text-[22px] self-stretch box-border caret-transparent shrink-0 tracking-[normal] leading-[35px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                    <span className="text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words w-full md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                      <p className="text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                        <span className="text-zinc-900 text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                          Shade Matching That Actually Works
                        </span>
                      </p>
                    </span>
                  </div>
                  <div className="text-base font-medium self-stretch box-border caret-transparent shrink-0 leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-ringsidewideweb md:text-lg md:leading-[27px]">
                    <span className="text-base box-border caret-transparent leading-6 outline-[3px] break-words w-full md:text-lg md:leading-[27px]">
                      <p className="text-base box-border caret-transparent leading-6 outline-[3px] break-words md:text-lg md:leading-[27px]">
                        Finding your perfect match online can be tricky - we get
                        it. That’s why we made it simple. Just use your Face
                        Pencil shade and the chart below to find your perfect
                        WTF match or take our quiz to get a natural finish that
                        actually looks like{" "}
                        <em className="text-base font-normal box-border caret-transparent leading-6 outline-[3px] break-words md:text-lg md:leading-[27px]">
                          your{" "}
                        </em>
                        skin.
                      </p>
                    </span>
                  </div>
                  <div className="relative items-start self-stretch bg-stone-100 box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 justify-start max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-2.5 mt-[5px] px-[15px] py-4 md:mt-2.5 md:px-[30px]">
                    <div className="relative items-start self-start box-border caret-transparent flex flex-col shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] md:self-stretch md:justify-start">
                      <div className="text-[15px] box-border caret-transparent shrink-0 leading-5 min-h-[auto] min-w-[auto] outline-[3px] break-words uppercase font-geogrotesquecondboldweb md:text-xl md:leading-[26px]">
                        <span className="text-[15px] box-border caret-transparent leading-5 outline-[3px] break-words w-full md:text-xl md:leading-[26px]">
                          <h3 className="text-[15px] box-border caret-transparent leading-5 outline-[3px] break-words md:text-xl md:leading-[26px]">
                            “Amazing!”
                          </h3>
                        </span>
                      </div>
                      <div className="relative items-center self-start box-border caret-transparent gap-x-1 flex grow justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-1 py-[5px] md:py-2.5">
                        <div className="relative items-center self-center box-border caret-transparent gap-x-0.5 flex shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-0.5 md:items-start md:self-auto">
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                        </div>
                        <div className="text-[8px] box-border caret-transparent flex grow shrink tracking-[0.2px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:block md:grow-0 md:shrink-0 md:leading-[10px]">
                          <span className="box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:inline md:leading-[10px] md:min-h-0 md:min-w-0">
                            <p className="box-border caret-transparent leading-6 outline-[3px] break-words md:leading-[10px]">
                              Anneka A.
                            </p>
                          </span>
                        </div>
                        <picture className="items-center box-border caret-transparent flex grow-0 shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:grow md:shrink md:w-auto">
                          <img
                            src="/images/jones/129.svg"
                            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                          />
                        </picture>
                        <div className="text-[8px] box-border caret-transparent flex grow shrink tracking-[0.2px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:block md:grow-0 md:shrink-0 md:leading-[10px]">
                          <span className="box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:inline md:leading-[10px] md:min-h-0 md:min-w-0">
                            <p className="box-border caret-transparent leading-6 outline-[3px] break-words md:leading-[10px]">
                              Verified Buyer
                            </p>
                          </span>
                        </div>
                      </div>
                      <div className="text-xs font-medium self-stretch box-border caret-transparent shrink-0 leading-[17px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-ringsidewideweb md:text-sm md:leading-[19px]">
                        <span className="text-xs box-border caret-transparent leading-[17px] outline-[3px] break-words w-full md:text-sm md:leading-[19px]">
                          <p className="text-xs box-border caret-transparent leading-[17px] outline-[3px] break-words md:text-sm md:leading-[19px]">
                            &quot;A little truly goes a long way with this one.
                            Love how it blends well, keeps face moisturized and
                            adds a very natural glow.”
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative items-center box-border caret-transparent gap-x-2 flex flex-col shrink-0 justify-center min-h-px min-w-[auto] outline-[3px] gap-y-2 w-full md:gap-x-[70px] md:hidden md:flex-row md:min-w-0 md:gap-y-[70px]">
                  <picture className="relative items-center self-auto box-border caret-transparent flex basis-auto grow object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:hidden md:basis-0">
                    <img
                      src="/images/jones/132.jpg"
                      alt="Foundation shade chart with descriptions and corresponding face pencils."
                      className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                    />
                  </picture>
                  <div
                    role="button"
                    className="box-border caret-transparent flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] md:hidden md:min-h-0 md:min-w-0"
                  >
                    <div className="box-border caret-transparent h-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:min-h-0 md:min-w-0">
                      <button
                        type="button"
                        className="absolute appearance-none text-[13.3333px] items-center bg-white bottom-[-25px] caret-transparent flex h-[30px] justify-center tracking-[normal] leading-[normal] outline-[3px] text-center w-[30px] z-[9999999] border p-0 rounded-[50%] border-black/10 right-0 font-arial"
                      >
                        <img
                          src="/images/jones/icon-3.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-4 outline-[3px] align-baseline w-4"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative items-center self-stretch box-border caret-transparent flex flex-col grow justify-center max-w-full min-h-px min-w-[auto] outline-[3px] -mt-5 mb-0 md:-mb-5">
              <a
                role="link"
                href="https://www.jonesroadbeauty.com/pages/what-the-foundation-custom-quiz"
                className="text-white text-sm font-normal self-auto bg-black box-border caret-transparent block shrink-0 tracking-[2px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center w-[250px] overflow-hidden px-5 py-3 rounded-[3px] font-basemonowideweb md:text-xs md:font-bold md:self-center md:w-auto md:px-[25px] md:py-[15px]"
              >
                <span className="text-sm font-normal box-border caret-transparent outline-[3px] w-full md:text-xs md:font-bold">
                  <p className="text-sm font-normal box-border caret-transparent outline-[3px] md:text-xs md:font-bold">
                    FIND MY SHADE
                  </p>
                </span>
              </a>
            </div>
            <div className="box-border caret-transparent contents outline-[3px]">
              <div className="relative items-center self-stretch box-border caret-transparent gap-x-5 flex flex-col shrink-0 grid-cols-[repeat(2,minmax(0px,1fr))] justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-5 md:gap-x-[70px] md:grid md:gap-y-[70px]">
                <div className="relative items-center self-stretch box-border caret-transparent hidden flex-col shrink-0 justify-center max-w-full min-h-px min-w-0 outline-[3px] md:flex md:min-w-[auto]">
                  <div className="relative self-stretch box-border caret-transparent hidden shrink-0 min-h-0 min-w-0 outline-[3px] overflow-hidden md:block md:min-h-[auto] md:min-w-[auto]">
                    <div className="relative box-border caret-transparent flex h-full outline-[3px] w-full">
                      <video
                        src="https://assets.replocdn.com/projects/32f42d43-36fa-41a0-9362-ba9e1c289321/6367dd54-1892-4c01-ac08-144a1dbd9e12"
                        preload="metadata"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="box-border caret-transparent h-full min-h-0 min-w-0 object-fill outline-[3px] align-baseline w-full md:min-h-[auto] md:min-w-[auto]"
                      ></video>
                    </div>
                  </div>
                </div>
                <div className="relative items-start box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 justify-center max-w-[650px] min-h-px min-w-[auto] outline-[3px] gap-y-2.5 w-full md:items-center md:gap-x-[15px] md:gap-y-[15px]">
                  <div className="text-[35px] font-semibold self-stretch box-border caret-transparent shrink-0 leading-[45px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full font-canela md:text-[51px] md:leading-[65px] md:w-auto">
                    <span className="text-[35px] box-border caret-transparent leading-[45px] outline-[3px] break-words w-full md:text-[51px] md:leading-[65px]">
                      <p className="text-[35px] box-border caret-transparent leading-[45px] outline-[3px] break-words md:text-[51px] md:leading-[65px]">
                        3.
                      </p>
                    </span>
                  </div>
                  <div className="text-[22px] self-stretch box-border caret-transparent shrink-0 tracking-[normal] leading-[35px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                    <span className="text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words w-full md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                      <p className="text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                        Foundation That Acts Like Skincare
                      </p>
                    </span>
                  </div>
                  <div className="text-base font-medium self-stretch box-border caret-transparent shrink-0 leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-ringsidewideweb md:text-lg md:leading-[27px]">
                    <span className="text-base box-border caret-transparent leading-6 outline-[3px] break-words w-full md:text-lg md:leading-[27px]">
                      <p className="text-base box-border caret-transparent leading-6 outline-[3px] break-words md:text-lg md:leading-[27px]">
                        If traditional foundations feel too dry, too flat, or
                        accentuate every line - meet the one that doesn’t. WTF
                        blends like skincare, hydrates like a dream, and leaves
                        you with a healthy, natural-looking glow.
                      </p>
                    </span>
                  </div>
                  <div className="relative items-start self-stretch bg-stone-100 box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 justify-start max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-2.5 mt-[5px] px-[15px] py-4 md:mt-2.5 md:px-[30px]">
                    <div className="relative items-start self-start box-border caret-transparent flex flex-col shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] md:self-stretch md:justify-start">
                      <div className="text-[15px] box-border caret-transparent shrink-0 leading-5 min-h-[auto] min-w-[auto] outline-[3px] break-words uppercase font-geogrotesquecondboldweb md:text-xl md:leading-[26px]">
                        <span className="text-[15px] box-border caret-transparent leading-5 outline-[3px] break-words w-full md:text-xl md:leading-[26px]">
                          <h3 className="text-[15px] box-border caret-transparent leading-5 outline-[3px] break-words md:text-xl md:leading-[26px]">
                            “Must Have!”
                          </h3>
                        </span>
                      </div>
                      <div className="relative items-center self-start box-border caret-transparent gap-x-1 flex grow justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-1 py-[5px] md:py-2.5">
                        <div className="relative items-center self-center box-border caret-transparent gap-x-0.5 flex shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-0.5 md:items-start md:self-auto">
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                        </div>
                        <div className="text-[8px] box-border caret-transparent flex grow shrink tracking-[0.2px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:block md:grow-0 md:shrink-0 md:leading-[10px]">
                          <span className="box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:inline md:leading-[10px] md:min-h-0 md:min-w-0">
                            <p className="box-border caret-transparent leading-6 outline-[3px] break-words md:leading-[10px]">
                              Kylene A.
                            </p>
                          </span>
                        </div>
                        <picture className="items-center box-border caret-transparent flex grow-0 shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:grow md:shrink md:w-auto">
                          <img
                            src="/images/jones/129.svg"
                            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                          />
                        </picture>
                        <div className="text-[8px] box-border caret-transparent flex grow shrink tracking-[0.2px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:block md:grow-0 md:shrink-0 md:leading-[10px]">
                          <span className="box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:inline md:leading-[10px] md:min-h-0 md:min-w-0">
                            <p className="box-border caret-transparent leading-6 outline-[3px] break-words md:leading-[10px]">
                              Verified Buyer
                            </p>
                          </span>
                        </div>
                      </div>
                      <div className="text-xs font-medium self-stretch box-border caret-transparent shrink-0 leading-[17px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-ringsidewideweb md:text-sm md:leading-[19px]">
                        <span className="text-xs box-border caret-transparent leading-[17px] outline-[3px] break-words w-full md:text-sm md:leading-[19px]">
                          <p className="text-xs box-border caret-transparent leading-[17px] outline-[3px] break-words md:text-sm md:leading-[19px]">
                            “Love this foundation - will definitely continue to
                            reorder. It has a light to medium coverage that
                            perfectly blurs any imperfections, but still looks
                            natural and feels moisturizing to wear.”
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative items-center box-border caret-transparent gap-x-[70px] flex shrink-0 justify-center min-h-px min-w-[auto] outline-[3px] gap-y-[70px] w-full md:hidden md:min-w-0">
                  <div className="relative box-border caret-transparent flex basis-0 grow shrink min-h-[auto] outline-[3px] w-auto overflow-hidden mt-0 md:hidden md:basis-auto md:grow-0 md:shrink-0 md:min-h-0 md:w-[400px] md:mt-auto">
                    <div className="relative box-border caret-transparent flex h-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:min-h-0 md:min-w-0">
                      <video
                        src="https://cdn.shopify.com/videos/c/o/v/57ca12a825024eeba24fca4b3e00166a.mp4"
                        preload="metadata"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="box-border caret-transparent h-full min-h-[auto] min-w-[auto] object-fill outline-[3px] align-baseline w-full md:min-h-0 md:min-w-0"
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent contents outline-[3px]">
              <div className="relative items-center self-stretch box-border caret-transparent gap-x-5 flex flex-col shrink-0 grid-cols-[repeat(2,minmax(0px,1fr))] justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-5 md:gap-x-[70px] md:grid md:gap-y-[70px]">
                <picture className="relative items-center self-auto box-border caret-transparent hidden grow object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:flex">
                  <img
                    src="/images/jones/149.png"
                    alt="Person sitting on a blue leather couch with makeup items and a book titled 'Makeup Manual.'"
                    className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                  />
                </picture>
                <div className="relative items-start box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 justify-center max-w-[650px] min-h-px min-w-[auto] outline-[3px] gap-y-2.5 w-full md:items-center md:gap-x-[15px] md:gap-y-[15px]">
                  <div className="text-[35px] font-semibold self-stretch box-border caret-transparent shrink-0 leading-[45px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full font-canela md:text-[51px] md:leading-[65px] md:w-auto">
                    <span className="text-[35px] box-border caret-transparent leading-[45px] outline-[3px] break-words w-full md:text-[51px] md:leading-[65px]">
                      <p className="text-[35px] box-border caret-transparent leading-[45px] outline-[3px] break-words md:text-[51px] md:leading-[65px]">
                        4.
                      </p>
                    </span>
                  </div>
                  <div className="text-[22px] self-stretch box-border caret-transparent shrink-0 tracking-[normal] leading-[35px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                    <span className="text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words w-full md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                      <p className="text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                        Made for Real Women, by the Woman Who Gets It
                      </p>
                    </span>
                  </div>
                  <div className="text-base font-medium self-stretch box-border caret-transparent shrink-0 leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-ringsidewideweb md:text-lg md:leading-[27px]">
                    <span className="text-base box-border caret-transparent leading-6 outline-[3px] break-words w-full md:text-lg md:leading-[27px]">
                      <p className="text-base box-border caret-transparent leading-6 outline-[3px] break-words md:text-lg md:leading-[27px]">
                        This isn’t just another foundation. It’s the result of
                        decades of real beauty know-how from Bobbi Brown -
                        designed for real skin, real women, and real life.
                        You’ll see the difference from the first swipe.
                      </p>
                    </span>
                  </div>
                  <div className="relative items-start self-stretch bg-stone-100 box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 justify-start max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-2.5 mt-[5px] px-[15px] py-4 md:mt-2.5 md:px-[30px]">
                    <div className="relative items-start self-start box-border caret-transparent flex flex-col shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] md:self-stretch md:justify-start">
                      <div className="text-[15px] box-border caret-transparent shrink-0 leading-5 min-h-[auto] min-w-[auto] outline-[3px] break-words uppercase font-geogrotesquecondboldweb md:text-xl md:leading-[26px]">
                        <span className="text-[15px] box-border caret-transparent leading-5 outline-[3px] break-words w-full md:text-xl md:leading-[26px]">
                          <h3 className="text-[15px] box-border caret-transparent leading-5 outline-[3px] break-words md:text-xl md:leading-[26px]">
                            “Best Foundation For Mature Skin!”
                          </h3>
                        </span>
                      </div>
                      <div className="relative items-center self-start box-border caret-transparent gap-x-1 flex grow justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-1 py-[5px] md:py-2.5">
                        <div className="relative items-center self-center box-border caret-transparent gap-x-0.5 flex shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-0.5 md:items-start md:self-auto">
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                        </div>
                        <div className="text-[8px] box-border caret-transparent flex grow shrink tracking-[0.2px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:block md:grow-0 md:shrink-0 md:leading-[10px]">
                          <span className="box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:inline md:leading-[10px] md:min-h-0 md:min-w-0">
                            <p className="box-border caret-transparent leading-6 outline-[3px] break-words md:leading-[10px]">
                              Kat W.
                            </p>
                          </span>
                        </div>
                        <picture className="items-center box-border caret-transparent flex grow-0 shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:grow md:shrink md:w-auto">
                          <img
                            src="/images/jones/129.svg"
                            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                          />
                        </picture>
                        <div className="text-[8px] box-border caret-transparent flex grow shrink tracking-[0.2px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:block md:grow-0 md:shrink-0 md:leading-[10px]">
                          <span className="box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:inline md:leading-[10px] md:min-h-0 md:min-w-0">
                            <p className="box-border caret-transparent leading-6 outline-[3px] break-words md:leading-[10px]">
                              Verified Buyer
                            </p>
                          </span>
                        </div>
                      </div>
                      <div className="text-xs font-medium self-stretch box-border caret-transparent shrink-0 leading-[17px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-ringsidewideweb md:text-sm md:leading-[19px]">
                        <span className="text-xs box-border caret-transparent leading-[17px] outline-[3px] break-words w-full md:text-sm md:leading-[19px]">
                          <p className="text-xs box-border caret-transparent leading-[17px] outline-[3px] break-words md:text-sm md:leading-[19px]">
                            “This is the only foundation I have found that feels
                            and looks dewy on my 60 year old skin. All others
                            look cakey and emphasize all my lines and pores. I
                            love this product!”
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative items-center box-border caret-transparent gap-x-[70px] flex shrink-0 justify-center min-h-px min-w-[auto] outline-[3px] gap-y-[70px] w-full md:hidden md:min-w-0">
                  <picture className="relative items-center self-auto box-border caret-transparent flex basis-0 grow object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:hidden">
                    <img
                      src="/images/jones/133.jpg"
                      alt="Woman sitting on a blue couch with makeup items on the table."
                      className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent contents outline-[3px]">
              <div className="relative items-center self-stretch box-border caret-transparent gap-x-[30px] flex flex-col shrink-0 grid-cols-[repeat(2,minmax(0px,1fr))] justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-[30px] md:gap-x-[70px] md:grid md:gap-y-[70px]">
                <picture className="relative items-center self-auto box-border caret-transparent hidden grow object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:flex">
                  <img
                    src="/images/jones/147.jpg"
                    className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                  />
                </picture>
                <div className="relative items-start box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 justify-center max-w-[650px] min-h-px min-w-[auto] outline-[3px] gap-y-2.5 w-full md:items-center md:gap-x-[15px] md:gap-y-[15px]">
                  <div className="text-[35px] font-semibold self-stretch box-border caret-transparent shrink-0 leading-[45px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full font-canela md:text-[51px] md:leading-[65px] md:w-auto">
                    <span className="text-[35px] box-border caret-transparent leading-[45px] outline-[3px] break-words w-full md:text-[51px] md:leading-[65px]">
                      <p className="text-[35px] box-border caret-transparent leading-[45px] outline-[3px] break-words md:text-[51px] md:leading-[65px]">
                        5.
                      </p>
                    </span>
                  </div>
                  <div className="text-[22px] self-stretch box-border caret-transparent shrink-0 tracking-[normal] leading-[35px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                    <span className="text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words w-full md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                      <p className="text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
                        The Only Foundation That Doesn’t Feel Like One
                      </p>
                    </span>
                  </div>
                  <div className="text-base font-medium self-stretch box-border caret-transparent shrink-0 leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-ringsidewideweb md:text-lg md:leading-[27px]">
                    <span className="text-base box-border caret-transparent leading-6 outline-[3px] break-words w-full md:text-lg md:leading-[27px]">
                      <p className="text-base box-border caret-transparent leading-6 outline-[3px] break-words md:text-lg md:leading-[27px]">
                        No more tight, dry, or sticky foundation. WTF is rich
                        and creamy, but still lightweight - leaving skin soft,
                        bouncy, and radiant. For many, you can even skip your
                        moisturizer altogether. If your skin gets drier with
                        age, WTF is your new go-to.
                      </p>
                    </span>
                  </div>
                  <div className="relative items-start self-stretch bg-stone-100 box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 justify-start max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-2.5 mt-[5px] mb-2.5 px-[15px] py-4 md:mt-2.5 md:mb-0 md:px-[30px]">
                    <div className="relative items-start self-start box-border caret-transparent flex flex-col shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] md:self-stretch md:justify-start">
                      <div className="text-[15px] box-border caret-transparent shrink-0 leading-5 min-h-[auto] min-w-[auto] outline-[3px] break-words uppercase font-geogrotesquecondboldweb md:text-xl md:leading-[26px]">
                        <span className="text-[15px] box-border caret-transparent leading-5 outline-[3px] break-words w-full md:text-xl md:leading-[26px]">
                          <h3 className="text-[15px] box-border caret-transparent leading-5 outline-[3px] break-words md:text-xl md:leading-[26px]">
                            “Moisturizing, Natural Finish!”
                          </h3>
                        </span>
                      </div>
                      <div className="relative items-center self-start box-border caret-transparent gap-x-1 flex grow justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-1 py-[5px] md:py-2.5">
                        <div className="relative items-center self-center box-border caret-transparent gap-x-0.5 flex shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-0.5 md:items-start md:self-auto">
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                          <picture className="items-center box-border caret-transparent flex shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:w-[9px]">
                            <img
                              src="/images/jones/139.png"
                              className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                            />
                          </picture>
                        </div>
                        <div className="text-[8px] box-border caret-transparent flex grow shrink tracking-[0.2px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:block md:grow-0 md:shrink-0 md:leading-[10px]">
                          <span className="box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:inline md:leading-[10px] md:min-h-0 md:min-w-0">
                            <p className="box-border caret-transparent leading-6 outline-[3px] break-words md:leading-[10px]">
                              Betsy H.
                            </p>
                          </span>
                        </div>
                        <picture className="items-center box-border caret-transparent flex grow-0 shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-2 md:grow md:shrink md:w-auto">
                          <img
                            src="/images/jones/129.svg"
                            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                          />
                        </picture>
                        <div className="text-[8px] box-border caret-transparent flex grow shrink tracking-[0.2px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words font-basemonowideweb md:block md:grow-0 md:shrink-0 md:leading-[10px]">
                          <span className="box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:inline md:leading-[10px] md:min-h-0 md:min-w-0">
                            <p className="box-border caret-transparent leading-6 outline-[3px] break-words md:leading-[10px]">
                              Verified Buyer
                            </p>
                          </span>
                        </div>
                      </div>
                      <div className="text-xs font-medium self-stretch box-border caret-transparent shrink-0 leading-[17px] min-h-[auto] min-w-[auto] outline-[3px] break-words font-ringsidewideweb md:text-sm md:leading-[19px]">
                        <span className="text-xs box-border caret-transparent leading-[17px] outline-[3px] break-words w-full md:text-sm md:leading-[19px]">
                          <p className="text-xs box-border caret-transparent leading-[17px] outline-[3px] break-words md:text-sm md:leading-[19px]">
                            “Love this product. Coverage is very natural, and
                            the moisturizing formula feels great on my dry
                            skin.”
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative items-center box-border caret-transparent gap-x-[70px] flex shrink-0 justify-center min-h-px min-w-[auto] outline-[3px] gap-y-[70px] w-full">
                    <picture className="relative items-center self-auto box-border caret-transparent flex basis-0 grow object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:hidden">
                      <img
                        src="/images/jones/138.jpg"
                        alt="Smiling person holding a jar of brown cosmetic cream."
                        className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px]"></div>
      <a
        role="link"
        href="https://www.jonesroadbeauty.com/pages/what-the-foundation-custom-quiz"
        className="text-white text-sm font-normal self-center bg-black box-border caret-transparent block shrink-0 tracking-[2px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center overflow-hidden mt-0 mb-[30px] px-5 py-3 rounded-[5px] font-basemonowideweb md:text-xs md:font-bold md:my-[35px] md:px-[25px] md:py-[15px]"
      >
        <span className="text-sm font-normal box-border caret-transparent outline-[3px] w-full md:text-xs md:font-bold">
          <p className="text-sm font-normal box-border caret-transparent outline-[3px] md:text-xs md:font-bold">
            SHOP NOW
          </p>
        </span>
      </a>
      <div className="relative items-center self-stretch bg-stone-200 box-border caret-transparent gap-x-8 flex shrink-0 flex-wrap h-auto justify-center min-h-px min-w-[auto] outline-[3px] gap-y-8 px-[6%] py-7 md:gap-x-6 md:h-[100px] md:justify-between md:gap-y-6 md:py-[0%]">
        <picture className="items-center box-border caret-transparent flex shrink-0 h-[18px] object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-[67px] md:h-auto md:w-[100px]">
          <img
            src="/images/jones/136.png"
            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
          />
        </picture>
        <picture className="items-center box-border caret-transparent flex shrink-0 h-[17px] object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-[34px] md:h-auto md:w-[52px]">
          <img
            src="/images/jones/135.png"
            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
          />
        </picture>
        <picture className="items-center box-border caret-transparent flex shrink-0 h-[21px] object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-[165px] md:h-auto md:w-[197px]">
          <img
            src="/images/jones/131.png"
            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
          />
        </picture>
        <picture className="items-center box-border caret-transparent hidden shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-[188px] md:flex">
          <img
            src="/images/jones/130.png"
            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
          />
        </picture>
        <picture className="items-center box-border caret-transparent hidden shrink-0 object-cover outline-[3px] overflow-x-auto overflow-y-hidden w-[95px] md:flex">
          <img
            src="/images/jones/140.png"
            className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
          />
        </picture>
      </div>
      <div className="relative items-center self-stretch bg-white box-border caret-transparent flex shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] py-[35px] md:bg-stone-50 md:py-20">
        <div className="box-border caret-transparent contents outline-[3px]">
          <div className="relative items-start self-auto bg-white box-border caret-transparent gap-x-5 flex basis-0 flex-col grow grid-cols-[repeat(2,minmax(0px,1fr))] justify-start mt-[-45px] max-w-full min-h-px outline-[3px] w-[400px] mb-0 px-0 md:self-stretch md:gap-x-[normal] md:grid md:flex-row md:w-auto md:-my-20 md:px-5">
            <div className="relative items-center self-center box-border caret-transparent flex shrink-0 justify-center mt-[-15px] max-w-full min-h-px min-w-[auto] outline-[3px] w-[400px] md:self-stretch md:w-[680px] md:mt-0">
              <picture className="items-center box-border caret-transparent flex basis-0 grow max-w-[531px] outline-[3px] overflow-x-auto overflow-y-hidden my-[15px] md:my-0">
                <img
                  src="/images/jones/145.png"
                  alt="Woman applying foundation on cheek with finger."
                  className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full outline-[3px] align-baseline"
                />
              </picture>
            </div>
            <div className="relative items-start self-stretch box-border caret-transparent gap-x-2 flex basis-auto flex-col grow justify-center max-w-full min-h-px outline-[3px] gap-y-2 md:items-center md:self-center md:gap-x-[15px] md:basis-0 md:gap-y-[15px]">
              <div className="text-[19px] self-center bg-white box-border caret-transparent flex grow-0 shrink-0 leading-[17px] min-h-[auto] min-w-[auto] outline-[3px] break-words text-center px-[11px] py-[7px] font-basemonowideweb md:text-[32px] md:self-start md:block md:grow md:shrink md:leading-[39px] md:px-[15px] md:py-2.5">
                <span className="text-[19px] box-border caret-transparent block leading-[17px] min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:text-[32px] md:inline md:leading-[39px] md:min-h-0 md:min-w-0">
                  <h2 className="text-[19px] box-border caret-transparent leading-[17px] outline-[3px] break-words md:text-[32px] md:leading-[39px]">
                    Ready To Say WTF?
                  </h2>
                </span>
              </div>
              <a
                role="link"
                href="https://www.jonesroadbeauty.com/pages/what-the-foundation-custom-quiz"
                className="text-white text-sm font-normal self-center bg-black box-border caret-transparent block shrink-0 tracking-[2px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center overflow-hidden mt-2.5 px-5 py-3 rounded-[5px] font-basemonowideweb md:text-xs md:font-bold md:self-start md:mt-5 md:px-[25px] md:py-[15px]"
              >
                <span className="text-sm font-normal box-border caret-transparent outline-[3px] w-full md:text-xs md:font-bold">
                  <p className="text-sm font-normal box-border caret-transparent outline-[3px] md:text-xs md:font-bold">
                    SHOP NOW
                  </p>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
