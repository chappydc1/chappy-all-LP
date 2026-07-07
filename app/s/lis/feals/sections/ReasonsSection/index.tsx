import { FealsReasonCard } from "../ReasonsSection/components/ReasonCard";

export const FealsReasonsSection = () => {
  return (
    <div className="relative text-black items-center self-stretch bg-white box-border caret-transparent gap-x-12 flex flex-col shrink-0 justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-12 px-4 py-8 md:px-10 md:py-16">
      <div className="relative items-center box-border caret-transparent gap-x-12 flex flex-col shrink-0 justify-center max-w-none min-h-px min-w-[auto] outline-[3px] gap-y-12 w-full md:gap-x-16 md:max-w-[1180px] md:gap-y-16">
        <FealsReasonCard
          mediaWrapperClassName="relative text-stone-600 items-center self-stretch box-border caret-transparent flex basis-auto flex-col grow justify-center max-w-full min-h-px outline-[3px] md:text-black md:basis-0"
          mediaContent={
            <div className="relative text-stone-600 items-center self-stretch bg-zinc-100 box-border caret-transparent flex basis-auto grow justify-center max-w-full min-w-[auto] outline-[3px] md:text-black md:bg-transparent md:basis-0">
              <picture
                role="link"
                className="text-stone-600 items-center self-auto box-border caret-transparent flex basis-0 grow h-[300px] object-cover outline-[3px] overflow-x-auto overflow-y-hidden md:text-black md:self-stretch md:h-full"
              >
                <img
                  src="/images/feals/65.jpg"
                  className="text-stone-600 box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline md:text-black"
                />
              </picture>
            </div>
          }
          reasonNumber="1"
          title="Less stress, more calm with just one gummy."
          descriptionContent={
            <>
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                Long days, packed schedules, and everyday stress often lead
                people to reach for a drink to unwind. But cutting back on
                alcohol doesn’t have to suck.
              </p>
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                <br className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]" />
              </p>
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                Feals Gummies deliver a balanced microdose of hemp to help ease
                your mind and body, so you can unwind without feeling glued to
                the couch or out of control. Plus, their bright, juicy tangerine
                flavor has no grassy aftertaste, making them a feel-good ritual
                you’ll actually look forward to at the end of the day.
              </p>
            </>
          }
          showIngredientButton="false"
          ctaHref="/pages/gummies-offer-alc-lp"
          ctaText="Try The Gummies →"
        />
        <FealsReasonCard
          mediaWrapperClassName="relative text-stone-600 items-center self-stretch box-border caret-transparent flex basis-auto flex-col grow justify-center max-w-full min-h-px outline-[3px] md:text-black md:basis-0"
          mediaContent={
            <div className="relative text-stone-600 items-center self-stretch bg-stone-200 box-border caret-transparent flex basis-auto grow justify-center max-w-full min-w-[auto] outline-[3px] md:text-black md:bg-transparent md:basis-0">
              <picture
                role="link"
                className="text-stone-600 items-center self-auto box-border caret-transparent flex basis-0 grow h-[300px] object-cover object-[50%_40%] outline-[3px] overflow-x-auto overflow-y-hidden md:text-black md:self-stretch md:h-full"
              >
                <img
                  src="/images/feals/78.gif"
                  className="text-stone-600 box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover object-[50%_40%] outline-[3px] align-baseline md:text-black"
                />
              </picture>
            </div>
          }
          reasonNumber="2"
          title="Low-dose, lab-tested, and made with clean, natural ingredients."
          descriptionContent={
            <>
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                These aren’t your typical college edibles that send you to outer
                space or make you paranoid. Feals Gummies are scientifically
                microdosed to relax your mind and body without overwhelming your
                system or altering your clarity.
              </p>
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                <br className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]" />
              </p>
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                Plus, every batch is triple-tested for purity and potency.
                Certified lab results can be viewed by scanning the QR code
                found on the back of each pack.
              </p>
            </>
          }
          showIngredientButton="true"
          ctaHref="/pages/gummies-offer-alc-lp"
          ctaText="Try The Gummies →"
        />
        <FealsReasonCard
          mediaWrapperClassName="relative text-stone-600 items-center self-stretch box-border caret-transparent flex basis-auto flex-col grow justify-center max-w-full min-h-px outline-[3px] md:text-black md:basis-0"
          mediaContent={
            <div className="relative text-stone-600 items-center self-stretch box-border caret-transparent flex basis-auto grow justify-center max-w-full min-w-[auto] outline-[3px] md:text-black md:basis-0">
              <picture
                role="link"
                className="text-stone-600 items-center self-auto box-border caret-transparent flex basis-0 grow h-auto object-cover outline-[3px] overflow-x-auto overflow-y-hidden md:text-black md:self-stretch md:h-full"
              >
                <img
                  src="/images/feals/71.png"
                  className="text-stone-600 box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline md:text-black"
                />
              </picture>
            </div>
          }
          reasonNumber="3"
          title="Same relaxing buzz as wine without the tradeoffs."
          descriptionContent={
            <>
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                Gummies deliver the same wind-down feeling as a glass of
                wine—minus the hangover, next-day fog, and empty calories.
              </p>
              <br className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]" />
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                • $1.83 per gummy versus $8+ glass of wine
              </p>
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                • 10 calories versus roughly 120 calories in wine
              </p>
              <br className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]" />
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                With gummies, you still get the relaxing buzz and stress relief.
                Same ritual, far fewer consequences.
              </p>
            </>
          }
          showIngredientButton="false"
          ctaHref="/pages/gummies-offer-alc-lp"
          ctaText="Try The Gummies →"
        />
        <FealsReasonCard
          mediaWrapperClassName="text-stone-600 items-center self-stretch box-border caret-transparent flex shrink-0 justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-black md:[align-items:normal] md:self-auto md:contents md:shrink md:justify-normal md:max-w-none md:min-h-0 md:min-w-0"
          mediaContent={
            <div
              role="link"
              className="relative text-stone-600 items-center self-stretch bg-white box-border caret-transparent gap-x-0.5 grid basis-0 grow shrink grid-cols-[repeat(2,minmax(0px,1fr))] h-[340px] justify-center max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-0.5 md:text-black md:items-start md:gap-x-1 md:basis-auto md:grow-0 md:shrink-0 md:h-auto md:justify-end md:gap-y-1"
            >
              <picture className="text-stone-600 items-center self-auto box-border caret-transparent flex basis-0 grow h-full max-h-none max-w-[400px] min-h-[auto] object-cover outline-[3px] overflow-x-auto overflow-y-hidden md:text-black md:self-stretch md:basis-auto md:max-h-[291px] md:min-h-0">
                <img
                  src="/images/feals/77.jpg"
                  className="text-stone-600 box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline md:text-black"
                />
              </picture>
              <picture className="text-stone-600 items-center self-auto box-border caret-transparent flex basis-0 grow h-full max-h-none max-w-[400px] min-h-[auto] object-cover outline-[3px] overflow-x-auto overflow-y-hidden md:text-black md:self-stretch md:basis-auto md:max-h-[291px] md:min-h-0">
                <img
                  src="/images/feals/49.jpg"
                  className="text-stone-600 box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline md:text-black"
                />
              </picture>
              <picture className="text-stone-600 items-center self-auto box-border caret-transparent flex basis-0 grow h-full max-h-none max-w-[400px] min-h-[auto] object-cover outline-[3px] overflow-x-auto overflow-y-hidden md:text-black md:self-stretch md:basis-auto md:max-h-[291px] md:min-h-0">
                <img
                  src="/images/feals/76.png"
                  className="text-stone-600 box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline md:text-black"
                />
              </picture>
              <picture className="text-stone-600 items-center self-auto box-border caret-transparent flex basis-0 grow h-full max-h-none max-w-[400px] min-h-[auto] object-cover outline-[3px] overflow-x-auto overflow-y-hidden md:text-black md:self-stretch md:basis-auto md:max-h-[291px] md:min-h-0">
                <img
                  src="/images/feals/73.jpg"
                  className="text-stone-600 box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline md:text-black"
                />
              </picture>
            </div>
          }
          reasonNumber="4"
          title="Trusted by more than 400,000 happy customers."
          descriptionContent={
            <>
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                With over 400,000 customers and 7,000+ five-star reviews, Feals
                Gummies have become a go-to swap for people who want to unwind
                without relying on alcohol.
              </p>
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                <br className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]" />
              </p>
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                Whether it’s after a stressful workday, during a night out with
                friends, or as part of a healthier evening routine, these
                gummies make it easy to relax, stay present, and enjoy the
                moment without the hangovers and other downsides of alcohol.
              </p>
            </>
          }
          showIngredientButton="false"
          ctaHref="/pages/gummies-offer-alc-lp"
          ctaText="Try The Gummies →"
        />
        <FealsReasonCard
          mediaWrapperClassName="relative text-stone-600 items-center self-stretch box-border caret-transparent flex basis-auto flex-col grow justify-center max-w-full min-h-px outline-[3px] md:text-black md:basis-0"
          mediaContent={
            <div
              role="link"
              className="relative text-stone-600 items-center self-stretch bg-[linear-gradient(0deg,rgb(198,226,242)_0%,rgb(252,238,220)_100%)] bg-size-[100%] box-border caret-transparent flex basis-auto grow justify-center max-w-full min-w-[auto] outline-[3px] md:text-black md:basis-0"
            >
              <picture className="absolute text-stone-600 items-center box-border caret-transparent flex shrink-0 object-contain outline-[3px] overflow-x-auto overflow-y-hidden pointer-events-none w-20 z-[1] left-[15%] top-[5%] md:text-black md:w-[120px] md:left-[20.51%] md:top-[10%]">
                <img
                  src="/images/feals/16.svg"
                  className="text-stone-600 box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-contain outline-[3px] align-baseline md:text-black"
                />
              </picture>
              <picture className="text-stone-600 items-center self-auto box-border caret-transparent flex basis-0 grow h-[300px] object-contain object-[50%_45%] outline-[3px] overflow-x-auto overflow-y-hidden px-4 md:text-black md:self-stretch md:h-full md:object-[50%_50%]">
                <img
                  src="/images/feals/72.png"
                  className="text-stone-600 box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-contain object-[50%_45%] outline-[3px] align-baseline md:text-black md:object-[50%_50%]"
                />
              </picture>
            </div>
          }
          reasonNumber="5"
          title="Feel better or your money back."
          descriptionContent={
            <>
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                Try Feals risk-free for 30 days or your money back.
              </p>
              <br className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]" />
              <p className="text-base box-border caret-transparent leading-[22.4px] outline-[3px] break-words md:text-lg md:leading-[25.2px]">
                Each pack includes 30 gummies, giving you plenty of time to find
                a more mindful way to unwind and cut back on drinking. They’re
                vegan, low sugar (2g), non-GMO, and gluten-free—making them an
                easy, feel-good alternative to your nightly wine or cocktail.
                And if you don’t love them, you’ll get a full refund—no strings
                attached.
              </p>
            </>
          }
          showIngredientButton="false"
          ctaHref="/pages/gummies-offer-alc-lp"
          ctaText="Try The Gummies →"
        />
      </div>
    </div>
  );
};
