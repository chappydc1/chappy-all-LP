import { CartProductCard } from "./CartProductCard";

export const CartDrawer = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent outline-[3px]">
          <div className="fixed text-green-950 bg-gray-100 box-border caret-transparent h-full max-h-none outline-[3px] w-full z-[2147483640] overflow-hidden m-auto rounded-none -right-full top-0 font-dmsans md:h-[98.5%] md:max-h-[98.5%] md:right-[-508px] md:w-[500px] md:m-2 md:rounded-[15px]">
            <div className="bg-gray-100 box-border caret-transparent flex flex-col h-full outline-transparent outline outline-1">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                <div className="items-center bg-white border-b-gray-300 border-l-green-950 border-r-green-950 border-t-green-950 box-border caret-transparent flex shrink-0 justify-between outline-[3px] px-4 py-2.5 border-b">
                  <h2 className="font-semibold box-border caret-transparent tracking-[-1px] leading-6 min-h-[auto] min-w-[auto] outline-[3px]">
                    Your Cart{" "}
                  </h2>
                  <div className="items-center box-border caret-transparent flex h-[30px] justify-center min-h-[auto] min-w-[auto] outline-[3px] w-[30px] rounded-[35px]">
                    <img
                      src="/s/lis/gruns/media/icon-37.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-6 outline-[3px] w-6"
                    />
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent flex flex-col grow min-h-[auto] min-w-[auto] outline-[3px] overflow-auto">
                <div className="items-center box-border caret-transparent flex basis-[0%] grow justify-center min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                    <div className="box-border caret-transparent outline-[3px] w-full">
                      <h3 className="text-black text-[32px] font-semibold box-border caret-transparent tracking-[-1px] leading-[35.2px] outline-[3px] text-center mt-10 mb-4">
                        Your Cart Is Empty
                      </h3>
                      <div className="text-white box-border caret-transparent outline-[3px] text-center w-[calc(100%_-_32px)] mb-14 mx-4 rounded-[35px]">
                        <a
                          href="#"
                          className="text-green-950 text-base font-bold bg-amber-400 shadow-[rgb(0,38,19)_3px_3px_0px_0px] box-border caret-transparent block leading-4 outline-[3px] w-full border border-green-950 px-5 py-4 rounded-[100px] border-solid"
                        >
                          Shop Now
                        </a>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] pt-4 pb-8 px-4">
                        <h4 className="font-semibold box-border caret-transparent tracking-[-1px] leading-6 outline-[3px] text-left mb-3">
                          Our Most Popular Products
                        </h4>
                        <div className="box-border caret-transparent gap-x-2.5 grid grid-cols-[repeat(2,minmax(0px,1fr))] outline-[3px] gap-y-2.5">
                          <CartProductCard
                            imageUrl="/s/lis/gruns/media/105.png"
                            imageAlt="Grüns"
                            title="Grüns Adults"
                            price="$79.99"
                            description="Clinically backed formula for energy, immunity, and daily wellness"
                            buttonText="Add to Cart"
                          />
                          <CartProductCard
                            imageUrl="/s/lis/gruns/media/112.png"
                            imageAlt="Grüns Kids"
                            title="Grüns Kids"
                            price="$66.99"
                            description="Essential nutrients needed to help kids reach their full potential"
                            buttonText="Add to Cart"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bg-black box-border caret-transparent hidden h-[1000px] opacity-40 outline-[3px] w-full z-[2147483639] left-0 top-0"></div>
        </div>
      </div>
      <div className="box-border caret-transparent outline-[3px]"></div>
    </div>
  );
};
