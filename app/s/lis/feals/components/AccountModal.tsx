export const AccountModal = () => {
  return (
    <div className="box-border caret-transparent hidden outline-[3px]">
      <div className="fixed items-center bg-black/60 box-border caret-transparent flex justify-center outline-[3px] z-[2147483647] inset-0">
        <div
          role="dialog"
          className="fixed text-stone-500 bg-white box-border caret-transparent flex flex-col h-full max-h-[1000px] max-w-[450px] outline-[3px] w-full overflow-auto m-0 rounded-none left-0 top-10 md:h-[calc(100%_-_24px)] md:m-3 md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:top-0"
        >
          <header className="items-center box-border caret-transparent hidden h-[70px] justify-start outline-[3px] text-left p-5">
            <a
              href="#rivo"
              aria-label="Go to home"
              className="box-border caret-transparent flex outline-[3px] w-4/5 md:w-[90%]"
            >
              <img
                alt="Feals"
                sizes="90px"
                className="box-border caret-transparent max-h-[30px] outline-[3px] align-baseline"
              />
            </a>
            <div className="items-center box-border caret-transparent gap-x-4 hidden outline-[3px] gap-y-4 w-[90%] px-4">
              <div
                role="progressbar"
                aria-label="Survey progress"
                className="bg-gray-200 box-border caret-transparent basis-[0%] grow h-2.5 outline-[3px] overflow-hidden rounded-[3px]"
              >
                <div className="bg-stone-500 box-border caret-transparent flex h-full outline-[3px] w-full"></div>
              </div>
              <button
                aria-label="Skip current survey question"
                className="appearance-none text-[13px] bg-transparent caret-transparent leading-[18.72px] outline-[3px] text-center text-ellipsis text-nowrap p-2"
              >
                Skip
              </button>
            </div>
            <button
              aria-label="Close modal"
              className="absolute appearance-none text-zinc-800 text-[15px] font-extrabold bg-transparent caret-transparent block h-[25px] leading-[21.6px] outline-[3px] text-center text-ellipsis text-nowrap w-[25px] z-[2147483647] p-0 rounded-[25px] right-2.5 top-2.5 before:accent-auto before:items-center before:box-border before:caret-transparent before:text-zinc-800 before:flex before:text-[15px] before:not-italic before:normal-nums before:font-extrabold before:h-[25px] before:justify-center before:tracking-[normal] before:leading-[21.6px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-ll_brown_regular_web"
            ></button>
          </header>
          <main className="relative box-border caret-transparent h-full leading-6 outline-[3px] text-left overflow-scroll pb-[150px]">
            <div className="box-border caret-transparent outline-[3px]">
              <div className="box-border caret-transparent outline-[3px]">
                <div className="relative box-border caret-transparent outline-[3px]">
                  <div className="box-border caret-transparent outline-[3px]"></div>
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px] mb-1">
                      Sign in to your account
                    </div>
                    <p className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] mb-[15px] font-bookmania">
                      Get access to your orders, referrals, and more.
                    </p>
                    <div className="box-border caret-transparent outline-[3px]">
                      <form className="box-border caret-transparent hidden flex-col outline-[3px] text-center mb-1">
                        <div className="absolute items-center bg-white/70 box-border caret-transparent hidden justify-center outline-[3px] z-[100] inset-0">
                          <div className="border-b-zinc-100 border-l-zinc-100 border-r-zinc-100 border-t-zinc-800 box-border caret-transparent flex h-10 outline-[3px] w-10 rounded-[50%] border-4 border-solid"></div>
                        </div>
                        <input
                          type="email"
                          name="otc_login[email]"
                          placeholder="Email"
                          aria-label="Email"
                          className="appearance-none box-border caret-transparent block leading-[22.72px] max-w-full outline-[3px] text-start w-full border border-stone-500 p-[15px] rounded-[5px] border-solid"
                        />
                        <div className="text-red-600 box-border caret-transparent hidden outline-[3px] text-left pt-[5px]"></div>
                        <label className="items-baseline box-border caret-transparent gap-x-[3px] flex outline-[3px] gap-y-[3px] ml-[3px] mt-2.5">
                          <input
                            type="checkbox"
                            name="accepts_marketing"
                            className="text-stone-400 accent-stone-500 bg-transparent box-border caret-transparent block h-2.5 leading-[22.72px] max-w-full outline-[3px] text-start w-2.5 overflow-visible mr-2 p-0"
                          />
                          <span className="text-xs box-border caret-transparent block leading-[18px] outline-[3px]">
                            Email me with updates and offers
                          </span>
                        </label>
                        <div className="box-border caret-transparent outline-[3px]"></div>
                        <input
                          type="submit"
                          value="Sign In"
                          className="appearance-none text-white bg-orange-300 box-border caret-transparent leading-[26px] max-w-full outline-[3px] text-ellipsis text-nowrap align-middle mt-5 px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr"
                        />
                        <div className="text-red-600 box-border caret-transparent hidden outline-[3px] pt-[5px]"></div>
                      </form>
                      <div className="box-border caret-transparent flex flex-col justify-center outline-[3px] text-center">
                        <span className="text-xs box-border caret-transparent hidden leading-[18px] outline-[3px] my-2.5">
                          OR
                        </span>
                        <div className="box-border caret-transparent gap-x-[15px] flex flex-col justify-center outline-[3px] gap-y-[15px]">
                          <div className="box-border caret-transparent outline-[3px]"></div>
                          <div className="box-border caret-transparent flex flex-col justify-center outline-[3px]">
                            <a
                              href="https://feals.com/customer_authentication/login?return_to=%2Fpages%2Fgummies-alc-lp%23rivo%3Fshow_rivo_account%3Dtrue"
                              className="text-white items-center bg-orange-300 box-border caret-transparent gap-x-2.5 flex justify-center leading-[26px] outline-[3px] gap-y-2.5 align-middle px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr"
                            >
                              Sign in or Sign up
                            </a>
                          </div>
                          <div className="box-border caret-transparent outline-[3px]"></div>
                          <div className="box-border caret-transparent hidden flex-col justify-center outline-[3px]">
                            <button className="appearance-none text-orange-300 items-center bg-transparent caret-transparent gap-x-2.5 flex justify-center leading-[26px] outline-[3px] gap-y-2.5 text-ellipsis text-nowrap align-middle border-orange-300 px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-2">
                              <span className="box-border caret-transparent flex outline-[3px] text-nowrap">
                                <img
                                  src="/images/feals/icon-31.svg"
                                  alt="Icon"
                                  className="box-border caret-transparent h-5 outline-[3px] text-nowrap align-baseline w-5"
                                />
                              </span>
                              <span className="box-border caret-transparent block outline-[3px] text-nowrap">
                                Sign in with Google
                              </span>
                              <span className="border-b-zinc-100 border-l-zinc-100 border-r-zinc-100 border-t-zinc-800 box-border caret-transparent hidden h-5 outline-[3px] text-nowrap w-5 mx-auto rounded-[50%] border-2 border-solid"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex outline-[3px]">
                        <label className="text-xs box-border caret-transparent block leading-[18px] outline-[3px] py-2">
                          By signing in, you agree to our{" "}
                          <a
                            href="/policies/privacy-policy"
                            className="box-border caret-transparent outline-[3px] underline"
                          >
                            privacy policy
                          </a>
                          and
                          <a
                            href="/policies/terms-of-service"
                            className="box-border caret-transparent outline-[3px] underline"
                          >
                            {" "}
                            terms of service
                          </a>
                          .
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]"></div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Having issues signing in?
                    </div>
                    <div className="box-border caret-transparent outline-[3px]">
                      Use one of the following methods below to sign in.
                    </div>
                    <ul className="box-border caret-transparent gap-x-5 flex flex-col outline-[3px] gap-y-5 border-stone-500 mt-2.5 mb-8 pl-[15px] pt-5 border-t">
                      <li className="box-border caret-transparent outline-[3px] mb-1">
                        <a
                          href="#rivo"
                          className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5"
                        >
                          <span className="box-border caret-transparent block outline-[3px]">
                            Try sending another code
                          </span>
                          <span className="items-center box-border caret-transparent flex h-[18px] justify-center outline-[3px] w-[18px] rounded-[50%]">
                            <img
                              src="/images/feals/icon-32.svg"
                              alt="Icon"
                              className="box-border caret-transparent h-3/4 outline-[3px] align-baseline w-[30px]"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] mb-1">
                        <a
                          href="/account/login?skip_rivo_redirect=true"
                          className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5"
                        >
                          <span className="box-border caret-transparent block outline-[3px]">
                            Sign in with an email and password
                          </span>
                          <span className="items-center box-border caret-transparent flex h-[18px] justify-center outline-[3px] w-[18px] rounded-[50%]">
                            <img
                              src="/images/feals/icon-32.svg"
                              alt="Icon"
                              className="box-border caret-transparent h-3/4 outline-[3px] align-baseline w-[30px]"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="box-border caret-transparent hidden outline-[3px] mb-1">
                        <a
                          href="#rivo"
                          className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5"
                        >
                          <span className="box-border caret-transparent block outline-[3px]">
                            Sign in with Google
                          </span>
                          <span className="items-center box-border caret-transparent flex h-[18px] justify-center outline-[3px] w-[18px] rounded-[50%]">
                            <img
                              src="/images/feals/icon-32.svg"
                              alt="Icon"
                              className="box-border caret-transparent h-3/4 outline-[3px] align-baseline w-[30px]"
                            />
                          </span>
                        </a>
                      </li>
                      <li className="box-border caret-transparent hidden outline-[3px] mb-1">
                        <a
                          href="#"
                          className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5"
                        >
                          <span className="box-border caret-transparent block outline-[3px]">
                            Sign in to an existing account with Shop Pay
                          </span>
                          <span className="items-center box-border caret-transparent flex h-[18px] justify-center outline-[3px] w-[18px] rounded-[50%]">
                            <img
                              src="/images/feals/icon-32.svg"
                              alt="Icon"
                              className="box-border caret-transparent h-3/4 outline-[3px] align-baseline w-[30px]"
                            />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Gift Card Balance
                    </div>
                    <div className="box-border caret-transparent outline-[3px]">
                      Enter the code below to redeem your gift card
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px] mt-[15px]">
                    <div className="box-border caret-transparent gap-x-5 flex flex-col outline-[3px] gap-y-5">
                      <div className="box-border caret-transparent gap-x-[25px] flex justify-between outline-[3px] gap-y-[25px]">
                        <input
                          type="text"
                          placeholder="Enter Gift Card Code"
                          aria-label="Gift card code"
                          className="appearance-none box-border caret-transparent block grow leading-[22.72px] max-w-full outline-[3px] text-start w-full border border-stone-500 mb-4 p-[15px] rounded-[5px] border-solid"
                        />
                      </div>
                      <div className="box-border caret-transparent gap-x-[25px] flex justify-between outline-[3px] gap-y-[25px]">
                        <button className="appearance-none text-white bg-orange-300 caret-transparent block leading-[26px] outline-[3px] text-center text-ellipsis text-nowrap align-middle px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr">
                          <span className="box-border caret-transparent outline-[3px] text-nowrap">
                            Lookup Gift Card
                          </span>
                          <span className="border-b-zinc-100 border-l-zinc-100 border-r-zinc-100 border-t-zinc-800 box-border caret-transparent hidden h-5 outline-[3px] text-nowrap w-5 mx-auto rounded-[50%] border-2 border-solid"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 mb-5">
                    <button
                      type="button"
                      aria-label="Back to Previous Page"
                      className="appearance-none items-center bg-transparent caret-transparent flex leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap p-0"
                    >
                      <img
                        src="/images/feals/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-2 outline-[3px] text-nowrap align-baseline"
                      />
                    </button>
                    <div
                      role="heading"
                      className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]"
                    >
                      Ways to earn
                    </div>
                  </div>
                  <div className="box-border caret-transparent flex flex-col outline-[3px] mt-2">
                    <div className="box-border caret-transparent outline-[3px]"></div>
                  </div>
                </div>
              </div>
              <div
                role="region"
                aria-label="Send Store Credit"
                className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]"
              >
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 mb-5">
                    <button
                      type="button"
                      aria-label="Back to Previous Page"
                      className="appearance-none items-center bg-transparent caret-transparent flex leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap p-0"
                    >
                      <img
                        src="/images/feals/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-2 outline-[3px] text-nowrap align-baseline"
                      />
                    </button>
                    <div
                      role="heading"
                      className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]"
                    >
                      Send Store Credit
                    </div>
                  </div>
                  <div
                    role="form"
                    aria-label="Credit transfer form"
                    className="box-border caret-transparent gap-x-5 hidden flex-col outline-[3px] gap-y-5 mt-2.5"
                  >
                    <div className="box-border caret-transparent outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px]">
                        <p className="box-border caret-transparent leading-[23.04px] outline-[3px]">
                          Your balance:{" "}
                          <span className="box-border caret-transparent outline-[3px]"></span>
                        </p>
                        <p className="box-border caret-transparent leading-[23.04px] outline-[3px]">
                          Transfer credit to a friend or family member.
                          They&#39;ll receive an email or SMS with a link to
                          redeem the credit. The credit will be instantly
                          deducted from your account and refunded to you if not
                          claimed within 30 days.
                        </p>
                      </div>
                    </div>
                    <div className="relative box-border caret-transparent gap-x-[25px] flex justify-between outline-[3px] gap-y-[25px] mt-2.5">
                      <input
                        type="number"
                        placeholder="Amount"
                        aria-label="Amount"
                        className="appearance-none box-border caret-transparent block grow leading-[22.72px] max-w-full outline-[3px] text-start w-full border border-stone-500 mb-4 pt-[25px] pb-2.5 px-[15px] rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                      />
                      <label className="absolute box-border caret-transparent block outline-[3px] pointer-events-none left-2.5 top-2/4">
                        Amount
                      </label>
                    </div>
                    <div className="relative box-border caret-transparent gap-x-[25px] flex justify-between outline-[3px] gap-y-[25px] mt-2.5">
                      <textarea
                        placeholder="Message (optional)"
                        aria-label="Message (optional)"
                        className="appearance-none box-border caret-transparent block grow leading-[22.72px] max-w-full min-h-[100px] outline-[3px] text-start w-full border-stone-500 mb-4 pt-[25px] pb-2.5 px-[15px] rounded-bl rounded-br rounded-tl rounded-tr"
                      ></textarea>
                      <label className="absolute text-[12.5px] box-border caret-transparent block leading-[18.75px] outline-[3px] pointer-events-none px-[5px] left-2.5 top-2/4">
                        Message (optional)
                      </label>
                    </div>
                    <div className="box-border caret-transparent gap-x-[25px] flex justify-between outline-[3px] gap-y-[25px]">
                      <button
                        type="submit"
                        aria-label="Generate Gift URL"
                        className="appearance-none text-white bg-orange-300 caret-transparent block leading-[26px] outline-[3px] text-center text-ellipsis text-nowrap align-middle w-full px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr"
                      >
                        <span className="box-border caret-transparent outline-[3px] text-nowrap">
                          Generate Gift URL
                        </span>
                        <span className="border-b-zinc-100 border-l-zinc-100 border-r-zinc-100 border-t-zinc-800 box-border caret-transparent hidden h-5 outline-[3px] text-nowrap w-5 mx-auto rounded-[50%] border-2 border-solid"></span>
                      </button>
                    </div>
                  </div>
                  <div
                    role="status"
                    className="box-border caret-transparent hidden outline-[3px] mt-[30px]"
                  >
                    <p className="box-border caret-transparent leading-[23.04px] outline-[3px]">
                      Share this link with your friend:
                    </p>
                    <div className="relative box-border caret-transparent gap-x-[25px] flex justify-between outline-[3px] gap-y-[25px]">
                      <input
                        type="text"
                        aria-label="Gift URL"
                        className="appearance-none box-border caret-transparent block grow leading-[22.72px] max-w-full outline-[3px] text-start w-full border border-stone-500 mb-4 pl-[15px] pr-[50px] py-[15px] rounded-[5px] border-solid"
                      />
                      <button
                        aria-label="Copy URL"
                        className="absolute appearance-none text-stone-400 items-center bg-transparent caret-transparent flex h-[30px] justify-center leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap w-[30px] rounded-bl rounded-br rounded-tl rounded-tr right-2.5 top-[40%]"
                      >
                        <img
                          src="/images/feals/icon-34.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-6 outline-[3px] text-nowrap align-baseline w-6"
                        />
                      </button>
                    </div>
                    <a
                      href="#"
                      className="box-border caret-transparent outline-[3px]"
                    >
                      Send another credit
                    </a>
                  </div>
                  <p className="box-border caret-transparent hidden leading-[23.04px] outline-[3px]">
                    <p className="box-border caret-transparent outline-[3px]">
                      Your balance:{" "}
                      <span className="box-border caret-transparent outline-[3px]"></span>
                    </p>
                    <p className="box-border caret-transparent outline-[3px]">
                      Sorry, you don&#39;t have enough credit right now to send.
                    </p>
                  </p>
                  <div className="box-border caret-transparent hidden outline-[3px] mt-[30px]">
                    <h4 className="text-lg font-bold box-border caret-transparent leading-[21.6px] outline-[3px] mb-[5px] font-bookmania">
                      Transfer History
                    </h4>
                    <table className="caret-transparent outline-[3px] w-full border-collapse">
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <tbody className="box-border caret-transparent outline-[3px]">
                        <div className="box-border caret-transparent outline-[3px]"></div>
                        <tr className="box-border caret-transparent outline-[3px] align-middle">
                          <td className="border-b-stone-500/20 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent max-w-[200px] outline-[3px] align-middle break-all px-0 py-4 border-b md:py-5">
                            <div className="relative box-border caret-transparent h-5 outline-[3px] w-full break-all overflow-hidden mx-auto after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:break-all after:border-collapse after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]">
                              .
                            </div>
                          </td>
                        </tr>
                        <div className="box-border caret-transparent outline-[3px]"></div>
                        <div className="box-border caret-transparent outline-[3px]"></div>
                      </tbody>
                    </table>
                    <div className="box-border caret-transparent hidden justify-center outline-[3px] my-5">
                      <button className="appearance-none text-orange-300 bg-transparent caret-transparent leading-[26px] opacity-40 outline-[3px] text-center text-ellipsis text-nowrap align-middle border-orange-300 px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-2">
                        <span className="box-border caret-transparent outline-[3px] text-nowrap">
                          Show more
                        </span>
                        <div className="box-border caret-transparent outline-[3px] text-nowrap"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="region"
                aria-label="Claim Store Credit"
                className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]"
              >
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 mb-5">
                    <button
                      type="button"
                      aria-label="Back to Previous Page"
                      className="appearance-none items-center bg-transparent caret-transparent flex leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap p-0"
                    >
                      <img
                        src="/images/feals/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-2 outline-[3px] text-nowrap align-baseline"
                      />
                    </button>
                    <div
                      role="heading"
                      className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]"
                    >
                      Claim Store Credit
                    </div>
                  </div>
                  <div className="box-border caret-transparent hidden outline-[3px]">
                    <span className="border-b-zinc-100 border-l-zinc-100 border-r-zinc-100 border-t-zinc-800 box-border caret-transparent flex h-5 outline-[3px] w-5 mx-auto rounded-[50%] border-2 border-solid"></span>
                  </div>
                  <div className="box-border caret-transparent hidden outline-[3px]">
                    <p className="box-border caret-transparent leading-[23.04px] outline-[3px]"></p>
                  </div>
                  <div className="box-border caret-transparent hidden outline-[3px]">
                    <p className="box-border caret-transparent leading-[23.04px] outline-[3px]">
                      You received{" "}
                      <span className="box-border caret-transparent outline-[3px]"></span>
                      !
                    </p>
                    <p className="box-border caret-transparent hidden leading-[23.04px] outline-[3px]">
                      undefined sent you store credit
                    </p>
                    <p className="box-border caret-transparent hidden leading-[23.04px] outline-[3px]">
                      &quot;
                      <span className="box-border caret-transparent outline-[3px]"></span>
                      &quot;
                    </p>
                  </div>
                  <div className="box-border caret-transparent hidden outline-[3px]">
                    <p className="box-border caret-transparent leading-[23.04px] outline-[3px]">
                      <span className="box-border caret-transparent outline-[3px]">
                        Someone sent
                      </span>
                      you{" "}
                      <span className="box-border caret-transparent outline-[3px]"></span>
                    </p>
                    <p className="box-border caret-transparent hidden leading-[23.04px] outline-[3px]">
                      &quot;
                      <span className="box-border caret-transparent outline-[3px]"></span>
                      &quot;
                    </p>
                    <p className="box-border caret-transparent hidden leading-[23.04px] outline-[3px]"></p>
                    <div className="box-border caret-transparent hidden outline-[3px]">
                      <button
                        type="button"
                        aria-label="Claim Store Credit"
                        className="appearance-none text-white bg-orange-300 caret-transparent leading-[26px] outline-[3px] text-center text-ellipsis text-nowrap align-middle px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr"
                      >
                        <span className="box-border caret-transparent outline-[3px] text-nowrap">
                          Claim Store Credit
                        </span>
                        <span className="border-b-zinc-100 border-l-zinc-100 border-r-zinc-100 border-t-zinc-800 box-border caret-transparent hidden h-5 outline-[3px] text-nowrap w-5 mx-auto rounded-[50%] border-2 border-solid"></span>
                      </button>
                    </div>
                    <div className="box-border caret-transparent hidden outline-[3px]">
                      <div className="relative box-border caret-transparent gap-x-[25px] flex justify-between outline-[3px] gap-y-[25px]">
                        <input
                          type="email"
                          placeholder="youremail@example.com"
                          aria-label="Email address"
                          className="appearance-none box-border caret-transparent block grow leading-[22.72px] max-w-full outline-[3px] text-start w-full border border-stone-500 pt-[25px] pb-2.5 px-[15px] rounded-[5px] border-solid"
                        />
                        <label className="absolute box-border caret-transparent block outline-[3px] pointer-events-none left-2.5 top-2/4">
                          Email
                        </label>
                      </div>
                      <button
                        type="button"
                        aria-label="Sign in to claim your gift"
                        className="appearance-none text-white bg-orange-300 caret-transparent leading-[26px] outline-[3px] text-center text-ellipsis text-nowrap align-middle px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr"
                      >
                        Sign in to claim your gift
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Buy Gift Card
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="box-border caret-transparent outline-[3px]"></div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="box-border caret-transparent outline-[3px]"></div>
                <div className="border-b-zinc-100 border-l-zinc-100 border-r-zinc-100 border-t-zinc-800 box-border caret-transparent flex h-5 outline-[3px] w-5 mx-auto rounded-[50%] border-2 border-solid"></div>
                <div className="box-border caret-transparent outline-[3px]"></div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent gap-x-5 hidden flex-col outline-[3px] gap-y-5 pt-2.5">
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Welcome{" "}
                      <span className="box-border caret-transparent outline-[3px]"></span>
                    </div>
                    <div className="box-border caret-transparent outline-[3px]"></div>
                  </div>
                  <div className="box-border caret-transparent gap-x-2.5 flex flex-col outline-[3px] gap-y-2.5">
                    <div className="box-border caret-transparent gap-x-2.5 hidden flex-col outline-[3px] gap-y-2.5">
                      <a
                        href="/pages/loyalty-program"
                        className="text-white bg-orange-300 box-border caret-transparent hidden leading-[26px] outline-[3px] text-center align-middle w-full px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr"
                      >
                        View Rewards
                      </a>
                      <a
                        href=""
                        className="text-orange-300 bg-transparent box-border caret-transparent hidden leading-[26px] outline-[3px] text-center align-middle w-full border-orange-300 px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid"
                      >
                        Manage Subscriptions
                      </a>
                      <a
                        href=""
                        className="text-orange-300 bg-transparent box-border caret-transparent hidden leading-[26px] outline-[3px] text-center align-middle w-full border-orange-300 px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid"
                      ></a>
                    </div>
                    <div className="box-border caret-transparent gap-x-2.5 flex flex-col outline-[3px] gap-y-2.5">
                      <a
                        href=""
                        className="text-white bg-orange-300 box-border caret-transparent hidden leading-[26px] outline-[3px] text-center align-middle w-full py-3 rounded-bl rounded-br rounded-tl rounded-tr"
                      >
                        <div className="items-center box-border caret-transparent flex justify-between outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent hidden outline-[3px]">
                            <span className="box-border caret-transparent inline-block h-2.5 mt-[-5px] outline-[3px] align-middle w-2.5 mx-[5px] after:accent-auto after:border-b-stone-300 after:border-l-stone-300 after:border-r-stone-300 after:border-t-zinc-800 after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[11px] after:tracking-[normal] after:leading-[26px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[11px] after:border after:rounded-[50%] after:border-separate after:border-solid after:font-ll_brown_regular_web"></span>
                            <span className="box-border caret-transparent outline-[3px]">
                              Points
                            </span>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-[5px] flex outline-[3px] gap-y-[5px]">
                            <span className="box-border caret-transparent block outline-[3px]">
                              My Rewards
                            </span>
                            <span className="items-center box-border caret-transparent flex outline-[3px]">
                              <img
                                src="/images/feals/icon-35.svg"
                                alt="Icon"
                                className="box-border caret-transparent flex h-1.5 outline-[3px] align-baseline mt-0.5"
                              />
                            </span>
                          </div>
                        </div>
                      </a>
                      <a
                        href=""
                        className="text-white bg-orange-300 box-border caret-transparent hidden leading-[26px] outline-[3px] text-center align-middle w-full py-3 rounded-bl rounded-br rounded-tl rounded-tr"
                      >
                        <div className="box-border caret-transparent inline-block h-2.5 mt-[-5px] outline-[3px] align-middle w-2.5 mx-[5px] after:accent-auto after:border-b-stone-300 after:border-l-stone-300 after:border-r-stone-300 after:border-t-zinc-800 after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[11px] after:tracking-[normal] after:leading-[26px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[11px] after:border after:rounded-[50%] after:border-separate after:border-solid after:font-ll_brown_regular_web"></div>
                        <div className="items-center box-border caret-transparent hidden justify-between outline-[3px] w-full">
                          <div className="items-center box-border caret-transparent hidden outline-[3px]">
                            <span className="box-border caret-transparent inline-block h-2.5 mt-[-5px] outline-[3px] align-middle w-2.5 mx-[5px] after:accent-auto after:border-b-stone-300 after:border-l-stone-300 after:border-r-stone-300 after:border-t-zinc-800 after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[11px] after:tracking-[normal] after:leading-[26px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[11px] after:border after:rounded-[50%] after:border-separate after:border-solid after:font-ll_brown_regular_web"></span>
                            <span className="box-border caret-transparent outline-[3px]">
                              Credit
                            </span>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-[5px] flex outline-[3px] gap-y-[5px]">
                            <span className="box-border caret-transparent block outline-[3px]">
                              Join our Membership
                            </span>
                            <span className="items-center box-border caret-transparent flex outline-[3px]">
                              <img
                                src="/images/feals/icon-35.svg"
                                alt="Icon"
                                className="box-border caret-transparent flex h-1.5 outline-[3px] align-baseline mt-0.5"
                              />
                            </span>
                          </div>
                        </div>
                      </a>
                      <button className="appearance-none text-white bg-orange-300 caret-transparent hidden flex-col leading-[26px] outline-[3px] text-center text-ellipsis text-nowrap align-middle p-0 rounded-bl rounded-br rounded-tl rounded-tr">
                        <div className="items-center box-border caret-transparent flex justify-between outline-[3px] text-nowrap w-full p-4">
                          <div className="items-center box-border caret-transparent hidden outline-[3px] text-nowrap">
                            <span className="box-border caret-transparent inline-block h-2.5 mt-[-5px] outline-[3px] text-nowrap align-middle w-2.5 mx-[5px] after:accent-auto after:border-b-stone-300 after:border-l-stone-300 after:border-r-stone-300 after:border-t-zinc-800 after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[11px] after:tracking-[normal] after:leading-[26px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:text-nowrap after:visible after:w-[11px] after:border after:rounded-[50%] after:border-separate after:border-solid after:font-ll_brown_regular_web"></span>
                          </div>
                          <div className="items-center box-border caret-transparent gap-x-[5px] flex outline-[3px] gap-y-[5px] text-nowrap">
                            <span className="box-border caret-transparent block outline-[3px] text-nowrap">
                              My Credit
                            </span>
                            <span className="items-center box-border caret-transparent flex outline-[3px] text-nowrap">
                              <img
                                src="/images/feals/icon-35.svg"
                                alt="Icon"
                                className="box-border caret-transparent flex h-1.5 outline-[3px] text-nowrap align-baseline mt-0.5"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="items-center border-t-zinc-800 box-border caret-transparent hidden outline-[3px] text-nowrap w-full border-b-white border-x-white border-t">
                          <div className="relative items-center box-border caret-transparent flex justify-center outline-[3px] text-nowrap w-6/12 p-4">
                            <span className="box-border caret-transparent block outline-[3px] text-nowrap">
                              ID:{" "}
                            </span>
                            <span className="box-border caret-transparent block outline-[3px] text-nowrap"></span>
                          </div>
                          <div className="relative items-center border-l-zinc-800 box-border caret-transparent gap-x-2.5 flex justify-center outline-[3px] gap-y-2.5 text-nowrap w-6/12 p-4 border-r-white border-y-white border-l">
                            <span className="box-border caret-transparent flex outline-[3px] text-nowrap">
                              <img
                                src="/images/feals/icon-36.svg"
                                alt="Icon"
                                className="box-border caret-transparent h-5 outline-[3px] text-nowrap align-baseline w-6"
                              />
                            </span>
                            <span className="box-border caret-transparent block outline-[3px] text-nowrap">
                              Copy ID
                            </span>
                          </div>
                        </div>
                      </button>
                      <a
                        href="https://feals.com/collections/all"
                        className="text-orange-300 bg-transparent box-border caret-transparent block leading-[26px] outline-[3px] text-center align-middle w-full border-orange-300 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid"
                      >
                        Shop Now
                      </a>
                      <a
                        href="/apps/retextion/login"
                        className="text-orange-300 bg-transparent box-border caret-transparent block leading-[26px] outline-[3px] text-center align-middle w-full border-orange-300 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid"
                      >
                        Manage Subscription
                      </a>
                    </div>
                  </div>
                  <div className="box-border caret-transparent hidden outline-[3px]"></div>
                </div>
                <div className="box-border caret-transparent outline-[3px]"></div>
                <div className="box-border caret-transparent outline-[3px]"></div>
                <div className="box-border caret-transparent outline-[3px]"></div>
                <div className="box-border caret-transparent outline-[3px]"></div>
                <div className="box-border caret-transparent outline-[3px]"></div>
                <div className="relative box-border caret-transparent outline-[3px] mt-2.5 pt-[25px]">
                  <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                    Recently Viewed
                  </div>
                  <div className="relative box-border caret-transparent outline-[3px]">
                    <div className="relative box-border caret-transparent flex outline-[3px] w-full overflow-auto">
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <div className="box-border caret-transparent outline-[3px] text-center w-full border border-stone-500 mt-2.5 p-[30px] rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                        No recently viewed products
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative box-border caret-transparent hidden outline-[3px] pt-[15px]">
                  <a
                    href="#rivo-saved"
                    className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5"
                  >
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Saved from Cart
                    </div>
                    <span className="items-center box-border caret-transparent flex h-[18px] justify-center outline-[3px] w-[18px] rounded-[50%]">
                      <img
                        src="/images/feals/icon-32.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-3/4 outline-[3px] align-baseline w-[30px]"
                      />
                    </span>
                  </a>
                  <div className="relative box-border caret-transparent outline-[3px]">
                    <div className="relative box-border caret-transparent flex outline-[3px] w-full overflow-auto">
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <div className="box-border caret-transparent gap-x-5 flex h-[100px] justify-start outline-[3px] gap-y-5 w-full mt-2.5">
                        <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                        <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                        <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px]"></div>
                    </div>
                  </div>
                </div>
                <div className="relative box-border caret-transparent hidden outline-[3px] pt-[15px]">
                  <a
                    href="#rivo-favorites"
                    className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5"
                  >
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Favorites
                    </div>
                    <span className="items-center box-border caret-transparent flex h-[18px] justify-center outline-[3px] w-[18px] rounded-[50%]">
                      <img
                        src="/images/feals/icon-32.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-3/4 outline-[3px] align-baseline w-[30px]"
                      />
                    </span>
                  </a>
                  <div className="relative box-border caret-transparent outline-[3px]">
                    <div className="relative box-border caret-transparent flex outline-[3px] w-full overflow-auto">
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <div className="box-border caret-transparent outline-[3px] text-center w-full border border-stone-500 mt-2.5 p-[30px] rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                        Sign in to access your favorites
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative box-border caret-transparent outline-[3px] pt-[15px]">
                  <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                    Popular Today
                  </div>
                  <div className="relative box-border caret-transparent outline-[3px]">
                    <div className="relative box-border caret-transparent flex outline-[3px] w-full overflow-auto">
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <div className="box-border caret-transparent gap-x-5 flex h-[100px] justify-start outline-[3px] gap-y-5 w-full mt-2.5">
                        <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                        <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                        <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent outline-[3px]"></div>
                <div className="relative box-border caret-transparent flex flex-col outline-[3px] pt-2.5">
                  <div className="box-border caret-transparent flex flex-col order-1 outline-[3px] w-full mt-[15px]">
                    <div className="box-border caret-transparent outline-[3px]"></div>
                    <a
                      href="https://help.feals.com/?_gl=1*1ripvi8*_gcl_au*NzYyMjkwMjE4LjE3NTk0MDgzODM.*_ga*MTEwMTA1NjY4OC4xNzU5NDA4Mzgz*_ga_L4C6XB71L3*czE3NjA2MzA3NjYkbzUkZzEkdDE3NjA2MzA4NjYkajU2JGwwJGgw"
                      className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2 w-full py-[5px]"
                    >
                      <span className="box-border caret-transparent block outline-[3px]">
                        FAQ
                      </span>
                      <span className="box-border caret-transparent block outline-[3px]">
                        <img
                          src="/images/feals/icon-38.svg"
                          alt="Icon"
                          className="box-border caret-transparent inline h-[11px] outline-[3px] align-baseline"
                        />
                      </span>
                    </a>
                    <a
                      href="https://feals.com/pages/stories"
                      className="items-center box-border caret-transparent gap-x-2 flex justify-start outline-[3px] gap-y-2 w-full py-[5px]"
                    >
                      <span className="box-border caret-transparent block outline-[3px]">
                        Stories
                      </span>
                      <span className="box-border caret-transparent block outline-[3px]">
                        <img
                          src="/images/feals/icon-38.svg"
                          alt="Icon"
                          className="box-border caret-transparent inline h-[11px] outline-[3px] align-baseline"
                        />
                      </span>
                    </a>
                  </div>
                  <div className="box-border caret-transparent order-2 outline-[3px] mt-[15px]">
                    <div className="box-border caret-transparent hidden outline-[3px]"></div>
                    <div className="box-border caret-transparent outline-[3px]">
                      <a
                        href="https://feals.com/collections/all"
                        className="box-border caret-transparent flex flex-col outline-[3px]"
                      >
                        <div className="relative box-border caret-transparent h-[250px] outline-[3px] w-full z-[1] overflow-hidden mb-[5px] rounded-bl rounded-br rounded-tl rounded-tr">
                          <img
                            src="/images/feals/64.jpg"
                            alt="A better way to feel better"
                            className="box-border caret-transparent inline h-full object-cover outline-[3px] align-baseline w-full rounded-bl rounded-br rounded-tl rounded-tr"
                          />
                        </div>
                        <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                          A better way to feel better
                        </div>
                        <div className="box-border caret-transparent outline-[3px]">
                          Helping people manage stress, anxiety, and
                          sleeplessness. Subscribe &amp; save to get 20% off
                          with free shipping.
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="box-border caret-transparent outline-[3px]">
                  <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                    Your Orders
                  </div>
                </div>
                <div className="box-border caret-transparent outline-[3px]"></div>
                <div className="box-border caret-transparent hidden outline-[3px]">
                  <div className="box-border caret-transparent outline-[3px]"></div>
                </div>
                <div className="box-border caret-transparent outline-[3px]"></div>
                <div className="relative box-border caret-transparent h-5 outline-[3px] w-full overflow-hidden mx-auto after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                <div className="box-border caret-transparent hidden justify-center outline-[3px] my-5">
                  <button className="appearance-none text-white text-sm bg-black caret-transparent leading-[20.16px] outline-[3px] text-center text-ellipsis text-nowrap px-5 py-2.5 rounded-bl rounded-br rounded-tl rounded-tr">
                    <span className="box-border caret-transparent outline-[3px] text-nowrap">
                      Load More
                    </span>
                    <div className="box-border caret-transparent outline-[3px] text-nowrap"></div>
                  </button>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] text-center pt-2.5">
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      undefined
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px] mt-[25px]">
                    <div className="box-border caret-transparent outline-[3px]"></div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]"></div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="box-border caret-transparent outline-[3px]"></div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="absolute items-center bg-white/70 box-border caret-transparent hidden justify-center outline-[3px] z-[100] inset-0">
                    .
                  </div>
                  <div className="box-border caret-transparent outline-[3px]"></div>
                  <div className="box-border caret-transparent outline-[3px]"></div>
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="relative box-border caret-transparent h-[50px] outline-[3px] w-full overflow-hidden mx-auto after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                    <div className="relative box-border caret-transparent h-[50px] outline-[3px] w-full overflow-hidden mx-auto after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <a
                    href="#rivo-preferences"
                    className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5"
                  >
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      My Preferences
                    </div>
                    <span className="items-center box-border caret-transparent flex h-[18px] justify-center outline-[3px] w-[18px] rounded-[50%]">
                      <img
                        src="/images/feals/icon-32.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-3/4 outline-[3px] align-baseline w-[30px]"
                      />
                    </span>
                  </a>
                  <div className="box-border caret-transparent outline-[3px]"></div>
                  <div className="box-border caret-transparent outline-[3px] border border-stone-500 overflow-hidden mt-[15px] mb-[30px] rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                    <a
                      href="#rivo-preferences"
                      className="box-border caret-transparent flex flex-col outline-[3px] px-4 py-3"
                    >
                      <span className="text-[13px] box-border caret-transparent block leading-[19.5px] outline-[3px]">
                        Email
                      </span>
                      <span className="box-border caret-transparent block outline-[3px] break-words"></span>
                    </a>
                    <a
                      href="#rivo-preferences"
                      className="box-border caret-transparent flex flex-col outline-[3px] border-stone-500 px-4 py-3 border-t"
                    >
                      <span className="text-[13px] box-border caret-transparent block leading-[19.5px] outline-[3px]">
                        Name
                      </span>
                      <span className="box-border caret-transparent block outline-[3px] break-words"></span>
                    </a>
                  </div>
                  <a
                    href="#rivo-shipping-addresses"
                    className="items-center box-border caret-transparent gap-x-2.5 hidden outline-[3px] gap-y-2.5"
                  >
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      My Addresses
                    </div>
                    <span className="items-center box-border caret-transparent flex h-[18px] justify-center outline-[3px] w-[18px] rounded-[50%]">
                      <img
                        src="/images/feals/icon-32.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-3/4 outline-[3px] align-baseline w-[30px]"
                      />
                    </span>
                  </a>
                  <div className="relative box-border caret-transparent outline-[3px]">
                    <div className="relative box-border caret-transparent gap-x-5 flex outline-[3px] gap-y-5 w-full overflow-auto mt-[15px]">
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <div className="box-border caret-transparent outline-[3px]"></div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent hidden outline-[3px] mt-[30px]">
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      In-Store Sign-In
                    </div>
                    <p className="box-border caret-transparent leading-[23.04px] outline-[3px] mt-2.5">
                      Show this code to a store associate at checkout to sign in
                      to your account from a retail store.
                    </p>
                    <div className="box-border caret-transparent outline-[3px]"></div>
                    <div
                      role="img"
                      aria-label="POS sign in QR code"
                      className="box-border caret-transparent hidden outline-[3px] w-[220px] mt-[15px]"
                    ></div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]"></div>
                  <div className="box-border caret-transparent hidden outline-[3px] mt-[25px]">
                    <a
                      href="#rivo-logout"
                      className="text-orange-300 bg-transparent box-border caret-transparent inline-block leading-[26px] outline-[3px] text-center align-middle border-orange-300 px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid"
                    >
                      <span className="box-border caret-transparent outline-[3px]">
                        Log out
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 mb-5">
                    <button
                      type="button"
                      aria-label="Back to Previous Page"
                      className="appearance-none items-center bg-transparent caret-transparent flex leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap p-0"
                    >
                      <img
                        src="/images/feals/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-2 outline-[3px] text-nowrap align-baseline"
                      />
                    </button>
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      My Preferences
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="box-border caret-transparent outline-[3px]"></div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 mb-5">
                    <button
                      type="button"
                      aria-label="Back to Previous Page"
                      className="appearance-none items-center bg-transparent caret-transparent flex leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap p-0"
                    >
                      <img
                        src="/images/feals/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-2 outline-[3px] text-nowrap align-baseline"
                      />
                    </button>
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Saved from Cart
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="box-border caret-transparent outline-[3px]"></div>
                    <div className="box-border caret-transparent outline-[3px]"></div>
                    <div className="box-border caret-transparent gap-x-5 flex h-[100px] justify-start outline-[3px] gap-y-5 w-full mt-2.5">
                      <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                      <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                      <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                    </div>
                    <div className="box-border caret-transparent outline-[3px]"></div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 mb-5">
                    <button
                      type="button"
                      aria-label="Back to Previous Page"
                      className="appearance-none items-center bg-transparent caret-transparent flex leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap p-0"
                    >
                      <img
                        src="/images/feals/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-2 outline-[3px] text-nowrap align-baseline"
                      />
                    </button>
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Favorites
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]">
                    <h3 className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] font-bookmania">
                      Collections
                    </h3>
                    <div className="relative box-border caret-transparent outline-[3px]">
                      <div className="relative box-border caret-transparent flex outline-[3px] w-full overflow-auto mb-10">
                        <div className="relative box-border caret-transparent gap-x-5 flex outline-[3px] gap-y-5 mt-2.5">
                          <div className="box-border caret-transparent outline-[3px]"></div>
                        </div>
                        <div className="box-border caret-transparent outline-[3px]"></div>
                        <div className="box-border caret-transparent gap-x-5 flex h-[100px] justify-start outline-[3px] gap-y-5 w-full mt-2.5">
                          <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                          <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                          <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                        </div>
                        <div className="box-border caret-transparent outline-[3px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]">
                    <h3 className="text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] font-bookmania">
                      All Favorites
                    </h3>
                    <div className="box-border caret-transparent outline-[3px]"></div>
                    <div className="box-border caret-transparent outline-[3px]"></div>
                    <div className="box-border caret-transparent gap-x-5 flex h-[100px] justify-start outline-[3px] gap-y-5 w-full mt-2.5">
                      <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                      <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                      <div className="relative box-border caret-transparent h-5 outline-[3px] w-[100px] overflow-hidden after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                    </div>
                    <div className="box-border caret-transparent outline-[3px]"></div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 mb-5">
                    <button
                      type="button"
                      aria-label="Back to Previous Page"
                      className="appearance-none items-center bg-transparent caret-transparent flex leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap p-0"
                    >
                      <img
                        src="/images/feals/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-2 outline-[3px] text-nowrap align-baseline"
                      />
                    </button>
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Shipping Addresses
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="box-border caret-transparent outline-[3px]"></div>
                    <div className="box-border caret-transparent outline-[3px]"></div>
                    <div className="relative box-border caret-transparent h-5 outline-[3px] w-full overflow-hidden mx-auto after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                    <div className="box-border caret-transparent outline-[3px]"></div>
                  </div>
                  <div className="box-border caret-transparent hidden outline-[3px] mt-5">
                    <a
                      href="#rivo-add-shipping-address"
                      className="text-orange-300 bg-transparent box-border caret-transparent inline-block leading-[26px] outline-[3px] text-center align-middle border-orange-300 px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid"
                    >
                      Add Shipping Address
                    </a>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 mb-5">
                    <button
                      type="button"
                      aria-label="Back to Previous Page"
                      className="appearance-none items-center bg-transparent caret-transparent flex leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap p-0"
                    >
                      <img
                        src="/images/feals/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-2 outline-[3px] text-nowrap align-baseline"
                      />
                    </button>
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Add Shipping Address
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]"></div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 mb-5">
                    <button
                      type="button"
                      aria-label="Back to Previous Page"
                      className="appearance-none items-center bg-transparent caret-transparent flex leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap p-0"
                    >
                      <img
                        src="/images/feals/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-2 outline-[3px] text-nowrap align-baseline"
                      />
                    </button>
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Edit Shipping Address
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]"></div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 mb-5">
                    <button
                      type="button"
                      aria-label="Back to Previous Page"
                      className="appearance-none items-center bg-transparent caret-transparent flex leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap p-0"
                    >
                      <img
                        src="/images/feals/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-2 outline-[3px] text-nowrap align-baseline"
                      />
                    </button>
                    <div
                      role="heading"
                      className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]"
                    ></div>
                    <button
                      aria-label="Share collection"
                      className="appearance-none items-center bg-transparent caret-transparent hidden leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap ml-auto p-0"
                    >
                      <span className="box-border caret-transparent outline-[3px] text-nowrap">
                        Share
                      </span>
                      <span className="box-border caret-transparent outline-[3px] text-nowrap">
                        <img
                          src="/images/feals/icon-39.svg"
                          alt="Icon"
                          className="box-border caret-transparent inline h-5 outline-[3px] text-nowrap align-baseline w-5 ml-[5px]"
                        />
                      </span>
                    </button>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="relative box-border caret-transparent gap-x-[50px] flex flex-col outline-[3px] gap-y-[50px] mt-2.5">
                      <div className="box-border caret-transparent outline-[3px]"></div>
                      <div className="relative box-border caret-transparent h-5 outline-[3px] w-full overflow-hidden mx-auto after:accent-auto after:bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)),linear-gradient(rgb(236,234,234)_25px,rgba(0,0,0,0)_0px),linear-gradient(rgb(255,255,255)_100%,rgba(0,0,0,0)_0px)] after:bg-[position:0%_0%,0%_0%,0%_0%] after:bg-size-[187.5px_100%,100%_25px,100%_100%] after:box-border after:caret-transparent after:text-stone-500 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-left after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-ll_brown_regular_web after:md:bg-size-[640px_100%,100%_25px,100%_100%]"></div>
                      <div className="box-border caret-transparent outline-[3px]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 mb-5">
                    <button
                      type="button"
                      aria-label="Back to Previous Page"
                      className="appearance-none items-center bg-transparent caret-transparent flex leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap p-0"
                    >
                      <img
                        src="/images/feals/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-2 outline-[3px] text-nowrap align-baseline"
                      />
                    </button>
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Manage Membership
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]"></div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 mb-5">
                    <button
                      type="button"
                      aria-label="Back to Previous Page"
                      className="appearance-none items-center bg-transparent caret-transparent flex leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap p-0"
                    >
                      <img
                        src="/images/feals/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-2 outline-[3px] text-nowrap align-baseline"
                      />
                    </button>
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Community
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]"></div>
                  <div className="box-border caret-transparent outline-[3px]"></div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-[25px] hidden flex-col outline-[3px] gap-y-[25px]">
                <div className="relative box-border caret-transparent outline-[3px] pt-2.5">
                  <div className="items-center box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 mb-5">
                    <button
                      type="button"
                      aria-label="Back to Previous Page"
                      className="appearance-none items-center bg-transparent caret-transparent flex leading-[23.04px] outline-[3px] text-center text-ellipsis text-nowrap p-0"
                    >
                      <img
                        src="/images/feals/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-2 outline-[3px] text-nowrap align-baseline"
                      />
                    </button>
                    <div className="text-[22px] font-semibold box-border caret-transparent leading-[33px] outline-[3px]">
                      Manage Membership
                    </div>
                  </div>
                  <div className="box-border caret-transparent outline-[3px]"></div>
                  <div className="box-border caret-transparent outline-[3px]"></div>
                  <div className="box-border caret-transparent outline-[3px]"></div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[3px]"></div>
          </main>
          <footer className="fixed bg-stone-50 box-border caret-transparent hidden outline-[3px] text-left w-full z-[999999999] bottom-10 md:bottom-0">
            <div className="box-border caret-transparent gap-x-2.5 flex justify-between outline-[3px] gap-y-2.5 px-[60px] py-5">
              <a
                href="#rivo"
                aria-label="Navigate to home"
                className="items-center box-border caret-transparent flex flex-col outline-[3px]"
              >
                <div className="box-border caret-transparent hidden outline-[3px]">
                  <img
                    src="/images/feals/icon-40.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 outline-[3px] align-baseline w-5"
                  />
                </div>
                <div className="text-[13px] font-semibold box-border caret-transparent tracking-[1.3px] leading-[18.72px] outline-[3px] uppercase">
                  For You
                </div>
              </a>
              <a
                href="#rivo-orders"
                aria-label="Navigate to orders"
                className="items-center box-border caret-transparent flex flex-col outline-[3px]"
              >
                <div className="box-border caret-transparent hidden outline-[3px]">
                  <img
                    src="/images/feals/icon-41.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 outline-[3px] align-baseline w-5"
                  />
                </div>
                <div className="text-[13px] font-semibold box-border caret-transparent tracking-[1.3px] leading-[18.72px] outline-[3px] uppercase">
                  Orders
                </div>
              </a>
              <a
                href="#rivo-profile"
                aria-label="Navigate to profile"
                className="items-center box-border caret-transparent flex flex-col outline-[3px]"
              >
                <div className="box-border caret-transparent hidden outline-[3px]">
                  <img
                    src="/images/feals/icon-42.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-5 outline-[3px] align-baseline w-5"
                  />
                </div>
                <div className="text-[13px] font-semibold box-border caret-transparent tracking-[1.3px] leading-[18.72px] outline-[3px] uppercase">
                  Profile
                </div>
              </a>
              <div className="box-border caret-transparent outline-[3px]"></div>
            </div>
            <div className="box-border caret-transparent outline-[3px]"></div>
          </footer>
          <div className="box-border caret-transparent hidden outline-[3px] z-[2147483647]">
            <div className="fixed items-center bg-black/30 box-border caret-transparent flex justify-center outline-[3px] z-[2147483645] inset-0">
              <div
                role="dialog"
                className="absolute bg-white shadow-[rgba(0,0,0,0.1)_0px_-4px_6px_-1px] box-border caret-transparent max-h-[800px] outline-[3px] w-full overflow-auto pt-2.5 pb-20 px-5 rounded-t-[10px] bottom-0 md:pb-10"
              >
                <button
                  aria-label="Close modal"
                  className="absolute appearance-none text-zinc-800 text-[15px] font-extrabold bg-transparent caret-transparent block h-[25px] leading-[21.6px] outline-[3px] text-center text-ellipsis text-nowrap w-[25px] z-[2147483647] p-0 rounded-[25px] right-2.5 top-2.5 before:accent-auto before:items-center before:box-border before:caret-transparent before:text-zinc-800 before:flex before:text-[15px] before:not-italic before:normal-nums before:font-extrabold before:h-[25px] before:justify-center before:tracking-[normal] before:leading-[21.6px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-ll_brown_regular_web"
                ></button>
                <div className="box-border caret-transparent outline-[3px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
