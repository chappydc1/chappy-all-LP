export const CartDrawer = () => {
  return (
    <div role="dialog" className="box-border caret-transparent outline-[3px]">
      <div className="fixed items-stretch bg-white box-border caret-transparent gap-x-0 flex flex-col h-[1000px] justify-start max-w-full outline-[3px] overflow-x-hidden overflow-y-auto gap-y-0 w-[500px] z-[2147483640] m-0 rounded-none top-full bottom-0 inset-x-0 md:h-auto md:max-w-[calc(100%_-_16px)] md:m-2.5 md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:left-auto md:-right-full md:top-0">
        <div className="relative bg-white box-border caret-transparent gap-x-0 flex flex-col shrink-0 min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 pt-2.5">
          <div className="items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] pb-2.5 px-4">
            <div className="items-center box-border caret-transparent gap-x-2.5 flex grow justify-between max-w-[calc(100%_-_32px)] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5">
              <h2 className="text-stone-500 text-[13px] font-bold box-border caret-transparent tracking-[1px] leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-center text-ellipsis uppercase text-nowrap overflow-hidden">
                Your Cart
              </h2>
              <div className="items-center box-border caret-transparent gap-x-3 flex justify-end min-h-[auto] min-w-[auto] outline-[3px] gap-y-3"></div>
            </div>
            <button
              type="button"
              aria-label="Close Cart"
              className="appearance-none text-stone-500 text-lg items-center bg-transparent caret-transparent flex h-6 justify-center leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-center text-ellipsis text-nowrap w-6 z-[1] p-0 rounded-[5px]"
            >
              <i className="font-light box-border caret-transparent block leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap font-font_awesome_5_pro before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:text-lg before:not-italic before:normal-nums before:font-light before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-font_awesome_5_pro"></i>
            </button>
          </div>
          <div className="relative text-stone-500 bg-stone-50 border-b-zinc-100 border-l-stone-500 border-r-stone-500 border-t-zinc-100 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border-b border-t">
            <div className="relative box-border caret-transparent h-7 outline-[3px] overflow-hidden">
              <div className="absolute box-border caret-transparent h-full outline-[3px] w-full left-0">
                <div className="absolute text-[13px] box-border caret-transparent leading-5 outline-[3px] text-center w-full px-4 py-1 left-0">
                  Subscribe or spend $70+ for FREE SHIPPING
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white box-border caret-transparent gap-x-0 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-0">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-2 px-4">
            <div className="items-start box-border caret-transparent hidden justify-between outline-[3px]">
              <div className="items-center box-border caret-transparent flex flex-col justify-center outline-[3px] w-full px-[3px]">
                <div className="items-center bg-slate-300 box-border caret-transparent flex h-6 justify-center outline-[3px] w-6 rounded-[50%]">
                  <img
                    src="/images/feals/icon-45.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-[55.56%] outline-[3px] align-baseline w-[55.56%]"
                  />
                </div>
                <span className="text-xs box-border caret-transparent block leading-[14px] outline-[3px] text-center text-ellipsis text-nowrap w-full overflow-hidden pt-0.5">
                  Free Shipping
                </span>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[3px]">
              <div className="relative bg-zinc-100 box-border caret-transparent h-2.5 outline-[3px] w-full mt-2 rounded-[10px]"></div>
              <div className="text-stone-500 text-sm box-border caret-transparent leading-[17px] outline-[3px] text-center mt-2.5">
                Add $70.00 or subscribe to unlock{" "}
                <b className="font-bold box-border caret-transparent outline-[3px]">
                  free shipping!
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="items-stretch box-border caret-transparent flex flex-col h-full justify-start min-h-[250px] min-w-[auto] outline-[3px] overflow-x-hidden overflow-y-auto w-full">
          <div className="items-stretch bg-white box-border caret-transparent gap-x-0 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-0">
            <div className="relative items-start box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 w-full border-zinc-100 px-4 py-5 border-b border-solid">
              <div className="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] w-full px-4 py-10">
                <h3 className="text-stone-500 text-2xl box-border caret-transparent leading-[28.8px] outline-[3px] text-center font-bookmania">
                  Your cart is empty!
                </h3>
                <p className="box-border caret-transparent outline-[3px] text-center mb-3">
                  Add your favorite items to your cart.
                </p>
                <p className="box-border caret-transparent outline-[3px] text-center">
                  <a
                    href="/collections/all"
                    className="text-white bg-orange-300 box-border caret-transparent block outline-[3px] w-full border-orange-300 px-[15px] py-2.5 rounded-[5px] border-2 border-solid"
                  >
                    Shop Now
                  </a>
                </p>
              </div>
            </div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <a
                href="/products/sleep-gummies"
                className="box-border caret-transparent outline-[3px]"
              >
                <img
                  src="/images/feals/67.png"
                  className="box-border caret-transparent inline h-full outline-[3px] align-baseline w-full"
                />
              </a>
            </div>
            <div className="bg-stone-50 box-border caret-transparent flex grow min-h-[auto] min-w-[auto] outline-[3px] px-4">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                <div className="relative bg-transparent box-border caret-transparent outline-[3px] text-center">
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="box-border caret-transparent outline-[3px]">
                      <div
                        aria-label="close modal"
                        className="box-border caret-transparent hidden outline-[3px]"
                      >
                        <i className="font-light box-border caret-transparent inline-block leading-4 outline-[3px] font-font_awesome_5_pro before:accent-auto before:box-border before:caret-transparent before:text-stone-400 before:text-base before:not-italic before:normal-nums before:font-light before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_pro"></i>
                      </div>
                      <h4 className="text-stone-500 text-xl box-border caret-transparent leading-6 outline-[3px] py-5 font-bookmania">
                        Recommended Just for You
                      </h4>
                      <div
                        role="list"
                        className="items-stretch box-border caret-transparent flex flex-wrap justify-center outline-[3px] after:accent-auto after:box-border after:caret-transparent after:text-stone-400 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[23.04px] after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-ll_brown_regular_web"
                      >
                        <div
                          aria-label="product"
                          role="listitem"
                          className="items-stretch box-border caret-transparent flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full pb-4"
                        >
                          <div className="box-border caret-transparent shrink-0 float-left order-1 outline-[3px] text-right w-[90px]">
                            <a
                              href="/products/gummies?variant=40799628820524&_rdiscovery-handle=gummies&_rdiscovery-widget=254913"
                              className="text-[0px] box-border caret-transparent block leading-[0px] max-w-full outline-[3px] mx-auto"
                            >
                              <img
                                src="/images/feals/68.jpg"
                                alt="View The Relax Gummies"
                                className="box-border caret-transparent max-h-full max-w-full object-contain outline-[3px] align-baseline ml-auto"
                              />
                            </a>
                          </div>
                          <div className="relative box-border caret-transparent grow float-right order-2 outline-[3px] text-left w-[calc(100%_-_90px)] my-1 pl-[15px]">
                            <h5 className="text-stone-500 text-sm font-medium box-border caret-transparent inline-block leading-[18px] outline-[3px] font-bookmania">
                              <a
                                href="/products/gummies?variant=40799628820524&_rdiscovery-handle=gummies&_rdiscovery-widget=254913"
                                aria-label="View The Relax Gummies"
                                className="text-stone-500 text-base font-bold box-border caret-transparent inline-block outline-[3px] font-ll_brown_regular_web"
                              >
                                The Relax Gummies
                              </a>
                            </h5>
                            <div
                              aria-label="product star rating"
                              className="text-[0px] box-border caret-transparent leading-5 outline-[3px] my-[5px]"
                            >
                              <span className="relative box-border caret-transparent inline-block h-4 min-w-20 outline-[3px] align-middle w-fit">
                                <span className="absolute bg-[url(data:image/svg+xml;charset=UTF-8,%20%3Csvg%20width%3D%22100%22%20height%3D%2220%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23E5E5E5%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E)] bg-no-repeat bg-size-[auto_100%] box-border caret-transparent content-[''] block h-full outline-[3px] w-full inset-0"></span>
                                <span className="absolute bg-[url(data:image/svg+xml;charset=UTF-8,%20%3Csvg%20width%3D%22100%22%20height%3D%2220%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23e8b951%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E)] bg-no-repeat bg-size-[auto_100%] box-border caret-transparent content-[''] block h-full outline-[3px] w-[94%] inset-0"></span>
                              </span>
                              <span className="text-xs box-border caret-transparent inline-block outline-[3px] align-middle ml-[5px]">
                                <span className="box-border caret-transparent hidden outline-[3px]">
                                  (
                                </span>
                                <span className="box-border caret-transparent outline-[3px]">
                                  7,926
                                </span>
                                <span className="box-border caret-transparent outline-[3px]">
                                  Reviews
                                </span>
                                <span className="box-border caret-transparent hidden outline-[3px]">
                                  )
                                </span>
                              </span>
                            </div>
                            <div className="text-neutral-500 box-border caret-transparent outline-[3px] mt-[5px]">
                              <div className="box-border caret-transparent outline-[3px]">
                                <span className="text-stone-400 box-border caret-transparent outline-[3px] text-right">
                                  <span className="box-border caret-transparent outline-[3px]">
                                    $55.00
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="box-border caret-transparent shrink-0 order-4 outline-[3px] w-full mt-2.5">
                            <button
                              aria-label="Add the product, The Relax Gummies to Cart"
                              type="button"
                              className="appearance-none text-orange-300 text-sm bg-transparent caret-transparent block leading-[20.16px] outline-[3px] text-ellipsis text-nowrap w-full border border-orange-300 my-1 p-2 rounded-[5px]"
                            >
                              <span className="box-border caret-transparent outline-[3px] text-nowrap">
                                Add
                              </span>
                            </button>
                          </div>
                        </div>
                        <div
                          aria-label="product"
                          role="listitem"
                          className="items-stretch box-border caret-transparent flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full pb-4"
                        >
                          <div className="box-border caret-transparent shrink-0 float-left order-1 outline-[3px] text-right w-[90px]">
                            <a
                              href="/products/sleep-gummies?variant=43138387509292&_rdiscovery-handle=sleep-gummies&_rdiscovery-widget=254913"
                              className="text-[0px] box-border caret-transparent block leading-[0px] max-w-full outline-[3px] mx-auto"
                            >
                              <img
                                src="/images/feals/69.jpg"
                                alt="View The Sleep Gummies"
                                className="box-border caret-transparent max-h-full max-w-full object-contain outline-[3px] align-baseline ml-auto"
                              />
                            </a>
                          </div>
                          <div className="relative box-border caret-transparent grow float-right order-2 outline-[3px] text-left w-[calc(100%_-_90px)] my-1 pl-[15px]">
                            <h5 className="text-stone-500 text-sm font-medium box-border caret-transparent inline-block leading-[18px] outline-[3px] font-bookmania">
                              <a
                                href="/products/sleep-gummies?variant=43138387509292&_rdiscovery-handle=sleep-gummies&_rdiscovery-widget=254913"
                                aria-label="View The Sleep Gummies"
                                className="text-stone-500 text-base font-bold box-border caret-transparent inline-block outline-[3px] font-ll_brown_regular_web"
                              >
                                The Sleep Gummies
                              </a>
                            </h5>
                            <div
                              aria-label="product star rating"
                              className="text-[0px] box-border caret-transparent leading-5 outline-[3px] my-[5px]"
                            >
                              <span className="relative box-border caret-transparent inline-block h-4 min-w-20 outline-[3px] align-middle w-fit">
                                <span className="absolute bg-[url(data:image/svg+xml;charset=UTF-8,%20%3Csvg%20width%3D%22100%22%20height%3D%2220%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23E5E5E5%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E)] bg-no-repeat bg-size-[auto_100%] box-border caret-transparent content-[''] block h-full outline-[3px] w-full inset-0"></span>
                                <span className="absolute bg-[url(data:image/svg+xml;charset=UTF-8,%20%3Csvg%20width%3D%22100%22%20height%3D%2220%22%20viewBox%3D%220%200%2080%2014%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23e8b951%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M71.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM55.996%2011.368l-3.94%202.42c-.474.292-.756.096-.628-.443l1.074-4.53-3.507-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.78%204.3%204.602.37c.552.046.666.37.237.74l-3.507%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM40.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53-3.508-3.022c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422zM24.076%2011.368l-3.94%202.42c-.475.292-.757.096-.63-.443l1.076-4.53-3.507-3.022c-.422-.363-.324-.693.238-.74l4.603-.37%201.78-4.3c.21-.51.55-.512.76%200l1.78%204.3%204.602.37c.554.046.667.37.24.74l-3.508%203.02%201.074%204.532c.127.536-.146.74-.628.444l-3.94-2.422zM8.123%2011.368l-3.94%202.42c-.475.292-.756.096-.63-.443l1.076-4.53L1.12%205.792c-.422-.363-.324-.693.24-.74l4.602-.37%201.778-4.3c.21-.51.55-.512.762%200l1.778%204.3%204.603.37c.554.046.667.37.24.74l-3.508%203.02%201.075%204.532c.127.536-.147.74-.628.444l-3.94-2.422z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E)] bg-no-repeat bg-size-[auto_100%] box-border caret-transparent content-[''] block h-full outline-[3px] w-[91.2%] inset-0"></span>
                              </span>
                              <span className="text-xs box-border caret-transparent inline-block outline-[3px] align-middle ml-[5px]">
                                <span className="box-border caret-transparent hidden outline-[3px]">
                                  (
                                </span>
                                <span className="box-border caret-transparent outline-[3px]">
                                  2,825
                                </span>
                                <span className="box-border caret-transparent outline-[3px]">
                                  Reviews
                                </span>
                                <span className="box-border caret-transparent hidden outline-[3px]">
                                  )
                                </span>
                              </span>
                            </div>
                            <div className="text-neutral-500 box-border caret-transparent outline-[3px] mt-[5px]">
                              <div className="box-border caret-transparent outline-[3px]">
                                <span className="text-stone-400 box-border caret-transparent outline-[3px] text-right">
                                  <span className="box-border caret-transparent outline-[3px]">
                                    $55.00
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="box-border caret-transparent shrink-0 order-4 outline-[3px] w-full mt-2.5">
                            <button
                              aria-label="Add the product, The Sleep Gummies to Cart"
                              type="button"
                              className="appearance-none text-orange-300 text-sm bg-transparent caret-transparent block leading-[20.16px] outline-[3px] text-ellipsis text-nowrap w-full border border-orange-300 my-1 p-2 rounded-[5px]"
                            >
                              <span className="box-border caret-transparent outline-[3px] text-nowrap">
                                Add
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="absolute text-[10px] box-border caret-transparent hidden leading-[30px] opacity-100 outline-[3px] w-full bottom-0 inset-x-0 md:opacity-0">
                        <a
                          href="https://rebuyengine.com/?shop=feals.myshopify.com"
                          className="text-neutral-400 box-border caret-transparent inline-block outline-[3px]"
                        >
                          Powered by Rebuy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border-b-stone-400 border-l-stone-400 border-r-stone-400 border-t-zinc-100 box-border caret-transparent gap-x-0 flex flex-col shrink-0 min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 px-4 py-2 border-t">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <div className="box-border caret-transparent outline-[3px]">
              <p className="text-sm box-border caret-transparent leading-[20.16px] outline-[3px] mb-2">
                Discounts and taxes calculated at checkout.
              </p>
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-2.5 hidden flex-col outline-[3px] gap-y-2.5">
            <button
              type="button"
              className="appearance-none text-white bg-orange-300 caret-transparent block outline-[3px] text-center text-ellipsis text-nowrap w-full border-orange-300 p-5 rounded-[5px] border-2"
            >
              <span className="box-border caret-transparent outline-[3px] text-nowrap">
                Proceed to Secure Checkout →
              </span>
            </button>
            <div className="box-border caret-transparent hidden outline-[3px] mt-2"></div>
            <div className="text-stone-500 text-xs box-border caret-transparent hidden leading-[17.28px] outline-[3px] text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
