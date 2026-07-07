import { PipiteaPreparationStep } from "./components/PipiteaPreparationStep";

export const PipiteaPreparationSection = () => {
  return (
    <section
      className="items-center bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center px-[15px] py-[45px] md:py-[60px]"
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
              className="text-black text-[27.0583px] box-border caret-transparent leading-[32.47px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full md:text-[35px] md:leading-[42px]"
            >
              <div
                className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] w-full md:text-[35px] md:leading-[42px]"
              >
                <p
                  className="text-[27.0583px] box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]"
                >
                  <strong
                    className="text-[27.0583px] font-bold box-border caret-transparent leading-[32.47px] outline-[3px] md:text-[35px] md:leading-[42px]"
                  >
                    How to Prepare Hibiscus Tea for Kidney Support
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div
            className="items-center box-border caret-transparent flex justify-center outline-[3px]"
          >
            <div
              className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
            >
              <div
                className="items-start box-border caret-transparent flex flex-col flex-wrap min-h-[auto] min-w-[auto] mt-10 md:flex-row"
              >
                <PipiteaPreparationStep
                  imageUrl="https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765564326543_how_to_make01.webp"
                  title="Add"
                  description="Place 1 tea bag in your cup or pitcher."
                />
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
                        className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-[30px]"
                      >
                        <div
                          className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <PipiteaPreparationStep
                  imageUrl="https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765564416134_how_to_make02.webp"
                  title="Boil Hot Water & Steep"
                  description="Pour hot water (just off boiling) and steep for 5–7 minutes. Longer steeping = stronger, more tart flavor and maximum kidney-supporting compounds."
                />
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
                        className="items-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] mt-[30px]"
                      >
                        <div
                          className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <PipiteaPreparationStep
                  imageUrl="https://c.animaapp.com/mq03tlhwPsu7gY/assets/1765564459196_how_to_make03.webp"
                  title="Enjoy Hot or Iced"
                  description="Drink immediately for a warming cup. Or let it cool and pour over ice for a refreshing cold drink. Add cinnamon, orange slices, mint, or a touch of honey to make it yours. Clinical studies used 2–3 cups daily for optimal kidney support."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
