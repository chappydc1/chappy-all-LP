import { MensHealthArticleHero } from "./components/ArticleHero";
import { MensHealthMedicalDisclosure } from "./components/MedicalDisclosure";

export const MensHealthMainContent = () => {
  return (
    <main
      role="main"
      className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]"
    >
      <div className="text-sm self-stretch box-border caret-transparent grow leading-[22.4px] max-w-[375px] outline-[3px] font-harmonia_sans_w01_regular md:text-base md:leading-[25.6px] md:max-w-screen-xl">
        <div className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
          <div className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
            <MensHealthArticleHero />
          </div>
        </div>
      </div>
      <footer className="relative text-sm bg-white box-border caret-transparent hidden leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
        <div className="text-white text-sm bg-black box-border caret-transparent leading-[22.4px] outline-[3px] py-12 font-harmonia_sans_w01_regular md:text-base md:leading-[25.6px] md:py-16">
          <div className="text-sm box-border caret-transparent leading-[22.4px] ml-[max(20px,50%_-_800px)] mr-[max(20px,50%_-_800px)] outline-[3px] px-[15px] md:text-base md:leading-[25.6px] md:ml-[max(48px,50%_-_800px)] md:mr-[max(48px,50%_-_800px)]">
            <div className="text-sm box-border caret-transparent gap-x-10 grid leading-[22.4px] outline-[3px] gap-y-10 md:text-base md:gap-x-16 md:leading-[25.6px] md:gap-y-16">
              <div className="text-sm items-start box-border caret-transparent gap-x-10 grid grid-flow-dense grid-cols-[repeat(2,minmax(0px,1fr))] justify-start leading-[22.4px] outline-[3px] gap-y-10 md:text-base md:gap-x-24 md:flex md:justify-between md:leading-[25.6px]">
                <div className="text-sm box-border caret-transparent gap-x-8 grid basis-auto col-start-[span_2] leading-[22.4px] outline-[3px] gap-y-8 md:text-base md:basis-[33.3333%] md:leading-[25.6px]">
                  <img
                    src="https://c.animaapp.com/mrag9of1Udpwd9/assets/18.png"
                    alt=""
                    sizes="210px"
                    className="text-transparent text-sm aspect-[auto_2515_/_330] box-border leading-[22.4px] max-w-[210px] outline-[3px] align-bottom md:text-base md:leading-[25.6px]"
                  />
                  <div className="text-sm box-border caret-transparent gap-x-6 grid leading-[22.4px] outline-[3px] gap-y-6 md:text-base md:leading-[25.6px]">
                    <div className="text-white/70 text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                      <p className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                        At UltimaPeak, quality and reliability are our
                        priorities. Our products are carefully tested and come
                        directly from the natural source, ensuring you can count
                        on the best results. Have any questions? We’re here to
                        help!
                      </p>
                    </div>
                    <form className="text-sm content-start box-border caret-transparent gap-x-4 grid leading-[22.4px] max-w-none outline-[3px] gap-y-4 md:text-base md:gap-x-6 md:leading-[25.6px] md:max-w-[400px] md:gap-y-6">
                      <input
                        type="hidden"
                        name="form_type"
                        value="customer"
                        className="appearance-none text-sm bg-transparent box-border caret-transparent hidden leading-[22.4px] outline-[3px] p-0 md:text-base md:leading-[25.6px]"
                      />
                      <input
                        type="hidden"
                        name="utf8"
                        value="✓"
                        className="appearance-none text-sm bg-transparent box-border caret-transparent hidden leading-[22.4px] outline-[3px] p-0 md:text-base md:leading-[25.6px]"
                      />
                      <input
                        type="hidden"
                        name="contact[tags]"
                        value="newsletter"
                        className="appearance-none text-sm bg-transparent box-border caret-transparent hidden leading-[22.4px] outline-[3px] p-0 md:text-base md:leading-[25.6px]"
                      />
                      <div className="relative text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                        <input
                          type="email"
                          name="contact[email]"
                          placeholder=" "
                          className="appearance-none text-sm bg-transparent box-border caret-transparent h-[52px] leading-[22.4px] outline-[3px] w-full border pt-4 pb-0 px-4 rounded-lg border-solid border-white/10 md:text-base md:h-[60px] md:leading-[25.6px] md:px-5"
                        />
                        <label className="absolute text-sm items-center box-border caret-transparent gap-x-2 grid grid-flow-col h-[52px] leading-[22.4px] opacity-50 outline-[3px] pointer-events-none origin-[0%_50%] ml-4 left-px top-0 md:text-base md:h-[60px] md:leading-[25.6px] md:ml-5">
                          E-mail
                        </label>
                        <div className="absolute text-sm box-border caret-transparent leading-[22.4px] outline-[3px] right-4 top-2/4 md:text-base md:leading-[25.6px] md:right-5">
                          <button
                            type="submit"
                            className="text-sm items-center bg-white/10 caret-transparent grid shrink-0 h-6 justify-items-center leading-[22.4px] outline-[3px] w-6 p-0 rounded-full md:text-base md:leading-[25.6px]"
                          >
                            <img
                              src="https://c.animaapp.com/mrag9of1Udpwd9/assets/icon-13.svg"
                              alt="Icon"
                              className="text-sm box-border caret-transparent h-2 leading-[22.4px] outline-[3px] w-[5px] md:text-base md:leading-[25.6px]"
                            />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="text-sm box-border caret-transparent gap-x-4 grid shrink leading-[22.4px] max-w-[250px] outline-[3px] gap-y-4 md:text-base md:gap-x-6 md:shrink-0 md:leading-[25.6px] md:gap-y-6">
                  <p className="text-sm font-bold box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                    Our Policy
                  </p>
                  <ul
                    role="list"
                    className="text-sm box-border caret-transparent gap-x-3 grid leading-[22.4px] list-none outline-[3px] gap-y-3 pl-0 md:text-base md:leading-[25.6px]"
                  >
                    <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                      <a
                        href="/pages/terms"
                        className="text-sm box-border caret-transparent inline-block leading-[22.4px] opacity-70 outline-[3px] md:text-base md:leading-[25.6px]"
                      >
                        Terms and Conditions
                      </a>
                    </li>
                    <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                      <a
                        href="/pages/refund-policy"
                        className="text-sm box-border caret-transparent inline-block leading-[22.4px] opacity-70 outline-[3px] md:text-base md:leading-[25.6px]"
                      >
                        Refund Policy
                      </a>
                    </li>
                    <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                      <a
                        href="/pages/privacy-policy"
                        className="text-sm box-border caret-transparent inline-block leading-[22.4px] opacity-70 outline-[3px] md:text-base md:leading-[25.6px]"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                      <a
                        href="/pages/shipping-policy"
                        className="text-sm box-border caret-transparent inline-block leading-[22.4px] opacity-70 outline-[3px] md:text-base md:leading-[25.6px]"
                      >
                        Shipping Policy
                      </a>
                    </li>
                    <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                      <a
                        href="https://ultimapeak.com/pages/before-cancelling"
                        className="text-sm box-border caret-transparent inline-block leading-[22.4px] opacity-70 outline-[3px] md:text-base md:leading-[25.6px]"
                      >
                        Membership Cancellation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="text-sm box-border caret-transparent gap-x-4 grid shrink leading-[22.4px] max-w-[250px] outline-[3px] gap-y-4 md:text-base md:gap-x-6 md:shrink-0 md:leading-[25.6px] md:gap-y-6">
                  <p className="text-sm font-bold box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                    Useful Links
                  </p>
                  <ul
                    role="list"
                    className="text-sm box-border caret-transparent gap-x-3 grid leading-[22.4px] list-none outline-[3px] gap-y-3 pl-0 md:text-base md:leading-[25.6px]"
                  >
                    <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                      <a
                        href="/pages/about-us"
                        className="text-sm box-border caret-transparent inline-block leading-[22.4px] opacity-70 outline-[3px] md:text-base md:leading-[25.6px]"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                      <a
                        href="/pages/contact-us"
                        className="text-sm box-border caret-transparent inline-block leading-[22.4px] opacity-70 outline-[3px] md:text-base md:leading-[25.6px]"
                      >
                        Contact US
                      </a>
                    </li>
                    <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                      <a
                        href="/pages/payment-options"
                        className="text-sm box-border caret-transparent inline-block leading-[22.4px] opacity-70 outline-[3px] md:text-base md:leading-[25.6px]"
                      >
                        Payment Options
                      </a>
                    </li>
                    <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                      <a
                        href="https://ultimapeak.com/a/track"
                        className="text-sm box-border caret-transparent inline-block leading-[22.4px] opacity-70 outline-[3px] md:text-base md:leading-[25.6px]"
                      >
                        Track Your Order
                      </a>
                    </li>
                    <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                      <a
                        href="/pages/faqs"
                        className="text-sm box-border caret-transparent inline-block leading-[22.4px] opacity-70 outline-[3px] md:text-base md:leading-[25.6px]"
                      >
                        FAQ&#39;s
                      </a>
                    </li>
                    <li className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                      <a
                        href="https://ultimapeak.com/blogs/news/"
                        className="text-sm box-border caret-transparent inline-block leading-[22.4px] opacity-70 outline-[3px] md:text-base md:leading-[25.6px]"
                      >
                        News
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="text-sm box-border caret-transparent gap-x-4 grid basis-auto col-start-[span_2] leading-[22.4px] outline-[3px] gap-y-4 md:text-base md:gap-x-6 md:basis-3/12 md:leading-[25.6px] md:gap-y-6">
                  <p className="text-sm font-bold box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                    Get in Touch
                  </p>
                  <div className="text-white/70 text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                    <p className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]">
                      DBA: UltimaPeak
                      <br className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]" />
                      16192 Coastal Highway, Lewes, Delaware 19958, County of
                      Sussex.
                      <br className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]" />
                      <br className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]" />
                      Contact us via e-mail:
                      <br className="text-sm box-border caret-transparent leading-[22.4px] outline-[3px] md:text-base md:leading-[25.6px]" />
                      <a
                        href="mailto://support@ultimapeak.com"
                        title="mailto:support@ultimapeak.com"
                        className="text-sm bg-[linear-gradient(to_right,rgba(255,255,255,0.7),rgba(255,255,255,0.7))] bg-no-repeat bg-size-[100%_1px] box-border caret-transparent leading-[22.4px] outline-[3px] bg-[position:0px_min(100%,26.8687px)] md:text-base md:leading-[25.6px] md:bg-[position:left_min(100%,30.7125px)]"
                      >
                        support@ultimapeak.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-sm box-border caret-transparent gap-x-10 grid leading-[22.4px] outline-[3px] gap-y-10 md:text-base md:gap-x-12 md:leading-[25.6px] md:gap-y-12">
                <div className="text-sm items-center box-border caret-transparent gap-x-8 grid justify-between leading-[22.4px] outline-[3px] gap-y-8 md:text-base md:flex md:leading-[25.6px]">
                  <div className="text-sm box-border caret-transparent gap-x-1 grid leading-[22.4px] order-none outline-[3px] gap-y-1 md:text-base md:leading-[25.6px] md:-order-1">
                    <p className="text-white/70 text-xs box-border caret-transparent leading-[19.2px] outline-[3px] md:text-sm md:leading-[22.4px]">
                      © 2026, ULTIMAPEAK.{" "}
                      <a
                        href="https://www.shopify.com/?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore"
                        className="text-xs box-border caret-transparent hidden leading-[19.2px] outline-[3px] md:text-sm md:leading-[22.4px]"
                      >
                        Powered by Shopify
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <MensHealthMedicalDisclosure />
    </main>
  );
};
