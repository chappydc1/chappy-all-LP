import { LoraProductGallery } from "./components/LoraProductGallery";
import { LoraProductDetails } from "./components/LoraProductDetails";

export const LoraBuyBoxSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="box-border caret-transparent outline-[3px]">
        <div className="bg-white box-border caret-transparent block outline-[3px] p-[5%]">
          <div className="box-border caret-transparent max-w-[1440px] outline-[3px] mx-auto">
            <div className="bg-amber-100 box-border caret-transparent outline-[3px] w-fit overflow-hidden mx-auto px-5 py-2 rounded-[3.35544e+07px]">
              <p className="text-base font-semibold box-border caret-transparent leading-[25.6px] outline-[3px]">
                3rd-Party &amp; Clinically Tested
              </p>
            </div>
            <h2 className="text-green-700 text-[32px] font-bold box-border caret-transparent tracking-[-1.6px] leading-[38.4px] outline-[3px] text-center mx-auto my-4 md:text-[56px] md:tracking-[-2.8px] md:leading-[61.6px] md:my-6"></h2>
            <div className="[align-items:normal] box-border caret-transparent gap-x-[normal] block max-w-[1264px] outline-[3px] gap-y-[normal] w-full mx-0 md:items-start md:gap-x-[50px] md:flex md:gap-y-[50px] md:mx-auto">
              <div className="static box-border caret-transparent max-w-none min-h-0 min-w-0 outline-[3px] top-auto md:sticky md:max-w-[calc(100%_-_520px)] md:min-h-[auto] md:min-w-[auto] md:top-5">
                <div className="box-border caret-transparent outline-[3px] w-full">
                  <div className="[align-items:normal] box-border caret-transparent gap-x-[normal] block flex-row outline-[3px] gap-y-[normal] md:items-start md:gap-x-5 md:flex md:flex-row-reverse md:gap-y-5">
                    <LoraProductGallery
                      featuredWrapperClassName="relative aspect-auto bg-white box-border caret-transparent shrink min-h-0 min-w-0 outline-[3px] w-auto overflow-hidden my-5 rounded-[10px] border-2 border-solid md:aspect-square md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:w-[calc(100%_-_105px)] md:my-0"
                      slideWrapperClassName="box-border caret-transparent h-full outline-[3px] w-full overflow-hidden"
                      thumbnailsWrapperClassName="items-center box-border caret-transparent gap-x-2.5 flex flex-row justify-start max-h-none min-h-0 min-w-0 outline-[3px] overflow-x-auto overflow-y-auto gap-y-2.5 w-auto my-5 md:gap-x-2 md:flex-col md:max-h-[527px] md:min-h-[auto] md:min-w-[85px] md:overflow-x-hidden md:gap-y-2 md:w-[85px] md:my-0"
                      thumbnailPictureClassName="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]"
                      images={[
                        {
                          src: "/images/gruns/3.webp",
                          alt: "",
                          wrapperClassName:
                            "box-border caret-transparent basis-full shrink-0 min-h-[auto] outline-[3px]",
                          pictureClassName:
                            "box-border caret-transparent outline-[3px]",
                          imageClassName:
                            "aspect-[auto_1286_/_1286] box-border caret-transparent max-w-full outline-[3px] w-[1286px]",
                        },
                        {
                          src: "/images/gruns/10.webp",
                          alt: "",
                          wrapperClassName:
                            "box-border caret-transparent basis-full shrink-0 min-h-[auto] outline-[3px]",
                          pictureClassName:
                            "box-border caret-transparent outline-[3px]",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                        },
                        {
                          src: "/images/gruns/11.webp",
                          alt: "Product advertisement with customer testimonials and trust metrics, over 1,000,000 customers, 4.8 stars",
                          wrapperClassName:
                            "box-border caret-transparent basis-full shrink-0 min-h-[auto] outline-[3px]",
                          pictureClassName:
                            "box-border caret-transparent outline-[3px]",
                          imageClassName:
                            "aspect-[auto_2400_/_2400] box-border caret-transparent max-w-full outline-[3px] w-[2400px]",
                        },
                        {
                          src: "/images/gruns/20.webp",
                          alt: "What to expect taking Lora for the first 30 days",
                          wrapperClassName:
                            "box-border caret-transparent basis-full shrink-0 min-h-[auto] outline-[3px]",
                          pictureClassName:
                            "box-border caret-transparent outline-[3px]",
                          imageClassName:
                            "aspect-[auto_1080_/_1080] box-border caret-transparent max-w-full outline-[3px] w-[1080px]",
                        },
                        {
                          src: "/images/gruns/21.webp",
                          alt: "Lora Clinical study shows improvements in Vitamin C and Folate levels after 90 days",
                          wrapperClassName:
                            "box-border caret-transparent basis-full shrink-0 min-h-[auto] outline-[3px]",
                          pictureClassName:
                            "box-border caret-transparent outline-[3px]",
                          imageClassName:
                            "aspect-[auto_1250_/_1250] box-border caret-transparent max-w-full outline-[3px] w-[1250px]",
                        },
                        {
                          src: "/images/gruns/43.webp",
                          alt: "Lora Supports Digestion, Immunity, and Energy",
                          wrapperClassName:
                            "box-border caret-transparent basis-full shrink-0 min-h-[auto] outline-[3px]",
                          pictureClassName:
                            "box-border caret-transparent outline-[3px]",
                          imageClassName:
                            "aspect-[auto_1250_/_1250] box-border caret-transparent max-w-full outline-[3px] w-[1250px]",
                        },
                      ]}
                      thumbnails={[
                        {
                          ariaLabel: "Go to slide 1",
                          buttonClassName:
                            "items-center bg-white caret-transparent flex h-[50px] justify-center min-h-[50px] min-w-[50px] outline-[3px] text-center w-[50px] border overflow-hidden p-0 rounded-[5px] border-black md:h-[85px] md:min-h-[85px] md:min-w-[85px] md:w-[85px]",
                          src: "/images/gruns/9.avif",
                          alt: "",
                          imageClassName:
                            "aspect-[auto_1286_/_1286] box-border caret-transparent max-w-full outline-[3px] w-[1286px]",
                          pictureClassName:
                            "box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]",
                        },
                        {
                          ariaLabel: "View nutrition label",
                          buttonClassName:
                            "items-center bg-white caret-transparent flex h-[50px] justify-center min-h-[50px] min-w-[50px] opacity-50 outline-[3px] text-center w-[50px] border overflow-hidden p-0 rounded-[5px] border-black md:h-[85px] md:min-h-[85px] md:min-w-[85px] md:w-[85px]",
                          src: "/images/gruns/12.avif",
                          alt: "",
                          imageClassName:
                            "aspect-[auto_100_/_100] box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[100px]",
                        },
                        {
                          ariaLabel: "Go to slide 3",
                          buttonClassName:
                            "items-center bg-white caret-transparent flex h-[50px] justify-center min-h-[50px] min-w-[50px] opacity-50 outline-[3px] text-center w-[50px] border overflow-hidden p-0 rounded-[5px] border-black md:h-[85px] md:min-h-[85px] md:min-w-[85px] md:w-[85px]",
                          src: "/images/gruns/13.avif",
                          alt: "Product advertisement with customer testimonials and trust metrics, over 1,000,000 customers, 4.8 stars",
                          imageClassName:
                            "aspect-[auto_2400_/_2400] box-border caret-transparent max-w-full outline-[3px] w-[2400px]",
                          pictureClassName:
                            "box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]",
                        },
                        {
                          ariaLabel: "Go to slide 4",
                          buttonClassName:
                            "items-center bg-white caret-transparent flex h-[50px] justify-center min-h-[50px] min-w-[50px] opacity-50 outline-[3px] text-center w-[50px] border overflow-hidden p-0 rounded-[5px] border-black md:h-[85px] md:min-h-[85px] md:min-w-[85px] md:w-[85px]",
                          src: "/images/gruns/14.avif",
                          alt: "What to expect taking Lora for the first 30 days",
                          imageClassName:
                            "aspect-[auto_1080_/_1080] box-border caret-transparent max-w-full outline-[3px] w-[1080px]",
                          pictureClassName:
                            "box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]",
                        },
                        {
                          ariaLabel: "Go to slide 5",
                          buttonClassName:
                            "items-center bg-white caret-transparent flex h-[50px] justify-center min-h-[50px] min-w-[50px] opacity-50 outline-[3px] text-center w-[50px] border overflow-hidden p-0 rounded-[5px] border-black md:h-[85px] md:min-h-[85px] md:min-w-[85px] md:w-[85px]",
                          src: "/images/gruns/17.avif",
                          alt: "Lora Clinical study shows improvements in Vitamin C and Folate levels after 90 days",
                          imageClassName:
                            "aspect-[auto_1250_/_1250] box-border caret-transparent max-w-full outline-[3px] w-[1250px]",
                          pictureClassName:
                            "box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]",
                        },
                        {
                          ariaLabel: "Go to slide 6",
                          buttonClassName:
                            "items-center bg-white caret-transparent flex h-[50px] justify-center min-h-[50px] min-w-[50px] opacity-50 outline-[3px] text-center w-[50px] border overflow-hidden p-0 rounded-[5px] border-black md:h-[85px] md:min-h-[85px] md:min-w-[85px] md:w-[85px]",
                          src: "/images/gruns/18.webp",
                          alt: "Lora Supports Digestion, Immunity, and Energy",
                          imageClassName:
                            "aspect-[auto_1250_/_1250] box-border caret-transparent max-w-full outline-[3px] w-[1250px]",
                          pictureClassName:
                            "box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]",
                        },
                      ]}
                      previousIconSrc="/images/gruns/icon-10.svg"
                      nextIconSrc="/images/gruns/icon-11.svg"
                    />
                  </div>
                  <div className="[align-items:normal] box-border caret-transparent hidden outline-[3px] md:items-start">
                    <LoraProductGallery
                      featuredWrapperClassName="relative aspect-auto bg-white box-border caret-transparent shrink outline-[3px] w-auto overflow-hidden my-5 rounded-[10px] border-2 border-solid md:aspect-square md:shrink-0 md:w-[calc(100%_-_105px)] md:my-0"
                      slideWrapperClassName="box-border caret-transparent h-full outline-[3px] w-full overflow-hidden"
                      thumbnailsWrapperClassName="items-center box-border caret-transparent gap-x-2.5 flex flex-row justify-start max-h-none min-w-0 outline-[3px] overflow-x-auto overflow-y-auto gap-y-2.5 w-auto my-5 md:gap-x-2 md:flex-col md:max-h-[527px] md:min-w-[85px] md:overflow-x-hidden md:gap-y-2 md:w-[85px] md:my-0"
                      thumbnailPictureClassName="box-border caret-transparent block outline-[3px]"
                      images={[
                        {
                          src: "/images/gruns/1.webp",
                          alt: "",
                          wrapperClassName:
                            "box-border caret-transparent basis-full shrink-0 outline-[3px]",
                          pictureClassName:
                            "box-border caret-transparent outline-[3px]",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                        },
                        {
                          src: "/images/gruns/46.webp",
                          alt: "",
                          wrapperClassName:
                            "box-border caret-transparent basis-full shrink-0 outline-[3px]",
                          pictureClassName:
                            "box-border caret-transparent outline-[3px]",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                        },
                        {
                          src: "/images/gruns/52.webp",
                          alt: "Popsicle® Firecracker Lora",
                          wrapperClassName:
                            "box-border caret-transparent basis-full shrink-0 outline-[3px]",
                          pictureClassName:
                            "box-border caret-transparent outline-[3px]",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                        },
                        {
                          src: "/images/gruns/45.webp",
                          alt: "Popsicle® Firecracker Lora",
                          wrapperClassName:
                            "box-border caret-transparent basis-full shrink-0 outline-[3px]",
                          pictureClassName:
                            "box-border caret-transparent outline-[3px]",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                        },
                        {
                          src: "/images/gruns/44.webp",
                          alt: "Popsicle® Firecracker Lora",
                          wrapperClassName:
                            "box-border caret-transparent basis-full shrink-0 outline-[3px]",
                          pictureClassName:
                            "box-border caret-transparent outline-[3px]",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                        },
                        {
                          src: "/images/gruns/47.webp",
                          alt: "Popsicle® Firecracker Lora",
                          wrapperClassName:
                            "box-border caret-transparent basis-full shrink-0 outline-[3px]",
                          pictureClassName:
                            "box-border caret-transparent outline-[3px]",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                        },
                        {
                          src: "/images/gruns/48.webp",
                          alt: "Popsicle® Firecracker Lora",
                          wrapperClassName:
                            "box-border caret-transparent basis-full shrink-0 outline-[3px]",
                          pictureClassName:
                            "box-border caret-transparent outline-[3px]",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                        },
                      ]}
                      thumbnails={[
                        {
                          ariaLabel: "Go to slide 1",
                          buttonClassName:
                            "items-center bg-white caret-transparent flex h-[50px] justify-center min-h-[50px] min-w-[50px] outline-[3px] text-center w-[50px] border overflow-hidden p-0 rounded-[5px] border-black md:h-[85px] md:min-h-[85px] md:min-w-[85px] md:w-[85px]",
                          src: "/images/gruns/27.avif",
                          alt: "",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                          pictureClassName:
                            "box-border caret-transparent block outline-[3px]",
                        },
                        {
                          ariaLabel: "View nutrition label",
                          buttonClassName:
                            "items-center bg-white caret-transparent flex h-[50px] justify-center min-h-[50px] min-w-[50px] opacity-50 outline-[3px] text-center w-[50px] border overflow-hidden p-0 rounded-[5px] border-black md:h-[85px] md:min-h-[85px] md:min-w-[85px] md:w-[85px]",
                          src: "/images/gruns/26.avif",
                          alt: "",
                          imageClassName:
                            "aspect-[auto_100_/_100] box-border caret-transparent max-w-full outline-[3px] w-[100px]",
                        },
                        {
                          ariaLabel: "Go to slide 3",
                          buttonClassName:
                            "items-center bg-white caret-transparent flex h-[50px] justify-center min-h-[50px] min-w-[50px] opacity-50 outline-[3px] text-center w-[50px] border overflow-hidden p-0 rounded-[5px] border-black md:h-[85px] md:min-h-[85px] md:min-w-[85px] md:w-[85px]",
                          src: "/images/gruns/29.avif",
                          alt: "Popsicle® Firecracker Lora",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                          pictureClassName:
                            "box-border caret-transparent block outline-[3px]",
                        },
                        {
                          ariaLabel: "Go to slide 4",
                          buttonClassName:
                            "items-center bg-white caret-transparent flex h-[50px] justify-center min-h-[50px] min-w-[50px] opacity-50 outline-[3px] text-center w-[50px] border overflow-hidden p-0 rounded-[5px] border-black md:h-[85px] md:min-h-[85px] md:min-w-[85px] md:w-[85px]",
                          src: "/images/gruns/22.avif",
                          alt: "Popsicle® Firecracker Lora",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                          pictureClassName:
                            "box-border caret-transparent block outline-[3px]",
                        },
                        {
                          ariaLabel: "Go to slide 5",
                          buttonClassName:
                            "items-center bg-white caret-transparent flex h-[50px] justify-center min-h-[50px] min-w-[50px] opacity-50 outline-[3px] text-center w-[50px] border overflow-hidden p-0 rounded-[5px] border-black md:h-[85px] md:min-h-[85px] md:min-w-[85px] md:w-[85px]",
                          src: "/images/gruns/28.avif",
                          alt: "Popsicle® Firecracker Lora",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                          pictureClassName:
                            "box-border caret-transparent block outline-[3px]",
                        },
                        {
                          ariaLabel: "Go to slide 6",
                          buttonClassName:
                            "items-center bg-white caret-transparent flex h-[50px] justify-center min-h-[50px] min-w-[50px] opacity-50 outline-[3px] text-center w-[50px] border overflow-hidden p-0 rounded-[5px] border-black md:h-[85px] md:min-h-[85px] md:min-w-[85px] md:w-[85px]",
                          src: "/images/gruns/23.avif",
                          alt: "Popsicle® Firecracker Lora",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                          pictureClassName:
                            "box-border caret-transparent block outline-[3px]",
                        },
                        {
                          ariaLabel: "Go to slide 7",
                          buttonClassName:
                            "items-center bg-white caret-transparent flex h-[50px] justify-center min-h-[50px] min-w-[50px] opacity-50 outline-[3px] text-center w-[50px] border overflow-hidden p-0 rounded-[5px] border-black md:h-[85px] md:min-h-[85px] md:min-w-[85px] md:w-[85px]",
                          src: "/images/gruns/24.webp",
                          alt: "Popsicle® Firecracker Lora",
                          imageClassName:
                            "aspect-[auto_2160_/_2160] box-border caret-transparent max-w-full outline-[3px] w-[2160px]",
                          pictureClassName:
                            "box-border caret-transparent block outline-[3px]",
                        },
                      ]}
                      previousIconSrc="/images/gruns/icon-10.svg"
                      nextIconSrc="/images/gruns/icon-11.svg"
                    />
                  </div>
                </div>
                <div className="box-border caret-transparent outline-[3px] w-full pl-0 md:pl-[105px]">
                  <button className="font-medium bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(0,0,0)_2px_2px_0px_0px] caret-transparent outline-[3px] text-center w-full border overflow-hidden mt-0 p-2.5 rounded-[3.35544e+07px] border-black md:mt-6">
                    View Nutrition Label
                  </button>
                </div>
                <div className="box-border caret-transparent outline-[3px] my-5 md:mt-6 md:mb-0">
                  <div className="box-border caret-transparent outline-[3px]">
                    <div className="box-border caret-transparent outline-[3px] text-center">
                      <div className="box-border caret-transparent outline-[3px]">
                        <div className="box-border caret-transparent outline-[3px]">
                          <div className="items-center bg-white/80 shadow-[rgba(43,43,43,0.16)_0px_4px_8px_0px] box-border caret-transparent flex h-[68px] list-none max-w-[600px] min-w-0 outline-[3px] border border-neutral-300 ml-auto my-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid font-sans_serif md:min-w-[300px]">
                            <a
                              href="https://lightlabs.com/?utm_medium=widget&utm_campaign=pip_logo_click&utm_source=lora.co&utm_content=71_1925"
                              aria-label="Visit Light Labs website (opens in new tab)"
                              className="items-center box-border caret-transparent flex h-[68px] min-h-[auto] min-w-[auto] outline-[3px] px-4"
                            >
                              <img
                                src="/images/gruns/icon.svg"
                                alt="Light Labs"
                                className="aspect-[auto_31_/_22] box-border caret-transparent max-w-full min-h-[auto] min-w-[31px] outline-[3px]"
                              />
                            </a>
                            <div className="backdrop-brightness-[0.8] box-border caret-transparent h-11 min-h-[auto] min-w-[auto] outline-[3px] w-[0.6px]"></div>
                            <button
                              type="button"
                              className="appearance-none bg-transparent caret-transparent gap-x-1 flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 text-left text-ellipsis text-nowrap overflow-hidden px-5 py-3"
                            >
                              <div className="text-zinc-800 items-center box-border caret-transparent gap-x-1.5 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 text-nowrap">
                                <p className="text-[13.5px] box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                                  Tested by Light Labs
                                  <span className="box-border caret-transparent outline-[3px] text-nowrap">
                                    in
                                  </span>
                                </p>
                                <div className="text-black text-[10.5px] bg-zinc-200 box-border caret-transparent h-[18px] leading-[15px] min-h-[auto] min-w-[auto] outline-[3px] text-center uppercase text-nowrap px-1.5 py-px rounded-bl rounded-br rounded-tl rounded-tr">
                                  Feb 2026
                                </div>
                              </div>
                              <div className="text-zinc-800 items-center box-border caret-transparent gap-x-1.5 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 text-nowrap">
                                <p className="text-[13.5px] font-light box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                                  35 substances tested for quality
                                </p>
                                <img
                                  src="/images/gruns/icon-12.svg"
                                  alt="Icon"
                                  className="box-border caret-transparent outline-[3px] text-nowrap"
                                />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <LoraProductDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
