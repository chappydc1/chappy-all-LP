import { OfferImage } from "./components/OfferImage";
import { OfferContent } from "./components/OfferContent";

export const OfferSection = () => {
  return (
    <section
      className="relative items-center bg-pink-500/10 bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center px-[15px] py-[45px] md:py-[60px]"
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
                className="items-start box-border caret-transparent flex flex-col flex-wrap min-h-[auto] min-w-[auto] md:flex-row"
              >
                <OfferImage />
                <div
                  className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-10 min-h-[auto] min-w-10 outline-[3px] w-10"
                ></div>
                <OfferContent />
              </div>
            </div>
          </div>
        </div>
      </div>
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
              className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <img
                src="https://c.animaapp.com/mq03tlhwPsu7gY/assets/26.svg"
                alt=""
                title=""
                className="absolute box-border caret-transparent max-w-full outline-[3px] w-full top-0 md:top-[-45px]"
              />
            </div>
          </div>
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <img
                src=""
                alt=""
                title=""
                className="absolute box-border caret-transparent max-w-full outline-[3px] w-full bottom-0 md:bottom-[-45px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
