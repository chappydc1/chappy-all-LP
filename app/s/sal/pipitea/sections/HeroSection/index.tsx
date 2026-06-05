import { ProductGallery } from "./components/ProductGallery";
import { DesktopTestimonial } from "./components/DesktopTestimonial";
import { HeroContent } from "./components/HeroContent";

export const HeroSection = () => {
  return (
    <section
     
      className="items-center bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center pt-0 pb-[45px] px-0 md:pt-[30px] md:pb-[60px] md:px-[15px]"
    >
      <div
       
        className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] text-start w-full bg-center md:flex-row"
      >
        <div
         
          className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] align-top w-full"
        >
          <div
           
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
             
              className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <div
               
                className="items-stretch box-border caret-transparent flex flex-col flex-wrap min-h-[auto] min-w-[auto] md:flex-row"
              >
                <div
                 
                  className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
                >
                  <div
                   
                    className="sticky items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px] z-10 top-2.5"
                  >
                    <div
                     
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <div
                       
                        className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto]"
                      >
                        <div
                         
                          className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                        >
                          <div
                           
                            className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                          >
                            <div
                             
                              className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full"
                            >
                              <div
                               
                                className="box-border caret-transparent outline-[3px]"
                              >
                                <ProductGallery
                                  outerVariantClassName="mx-auto"
                                  innerVariantClassName=""
                                  slideVariantClassName="w-screen md:w-[565px]"
                                  firstImageVariantClassName=""
                                  imageVariantClassName=""
                                  showNavigation={true}
                                />
                                <ProductGallery
                                  outerVariantClassName="mt-2 mx-[15px] md:mx-auto"
                                  innerVariantClassName="mx-auto"
                                  slideVariantClassName="w-[49.1667px] md:w-[72.1429px]"
                                  firstImageVariantClassName="opacity-60 border-zinc-300 rounded-[5px] border-2 border-solid"
                                  imageVariantClassName="rounded-[5px]"
                                  showNavigation={false}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                           
                            className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                          >
                            <div
                             
                              className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                            >
                              <DesktopTestimonial />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                 
                  className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-10 min-h-[auto] min-w-10 outline-[3px] w-10"
                >
                  <div
                   
                    className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
                  >
                    <div
                     
                      className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
                    >
                      <div
                       
                        className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-5"
                      >
                        <div
                         
                          className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                 
                  className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full min-h-[auto] min-w-full outline-[3px] w-full md:max-w-none md:min-w-0 md:w-auto"
                >
                  <HeroContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
