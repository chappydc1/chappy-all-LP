import { JonesFeatureItem } from "./components/JonesFeatureItem";

export const JonesFeatureSection = () => {
        return (
            <div className="relative items-center self-stretch box-border caret-transparent gap-x-2 flex flex-col shrink-0 justify-center mt-[-50px] max-w-full min-h-px min-w-[auto] outline-[3px] gap-y-2 px-[15px] py-[35px] md:gap-x-[70px] md:gap-y-[70px] md:mt-0 md:pt-20 md:pb-0 md:px-0"><div className="items-center box-border caret-transparent contents shrink-0 justify-center min-h-0 min-w-0 outline-[3px] w-full md:flex md:min-h-[auto] md:min-w-[auto]"><div className="relative items-center box-border caret-transparent gap-x-10 flex flex-col shrink-0 grid-cols-[repeat(1,minmax(0px,1fr))] justify-center max-w-[1110px] min-h-px min-w-[auto] outline-[3px] gap-y-10 w-full md:gap-x-0 md:grid md:gap-y-[70px]"><div className="box-border caret-transparent contents outline-[3px]"><JonesFeatureItem
  rootClassName="gap-x-5 gap-y-5"
  number="1."
  title="Flawless Look, Barely-There Feel"
  description={`Wish your skin looked naturally even and radiant without piling on product? WTF smooths out redness and dark spots without settling into lines or clinging to dry spots. It's that "no-makeup makeup" look everyone's after - without feeling like you're wearing anything at all.`}
  testimonialTitle="“So Silky!”"
  testimonialAuthorName="Lauri G."
  testimonialBuyerLabel="Verified Buyer"
  testimonialBody="“So silky, soft, light and smooth. I never feel like I’m wearing foundation. It blends like magic ! I’ve tried MANY foundations. Will never use anything else again. A beautiful and dewey young look for this 58 year old.”"
  topMedia={
    <div className="relative items-center self-stretch box-border caret-transparent hidden flex-col shrink-0 justify-center max-w-full min-h-px min-w-0 outline-[3px] md:flex md:min-w-[auto]">
      <picture className="relative items-center self-auto box-border caret-transparent hidden grow shrink object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:flex md:grow-0 md:shrink-0">
        <img
          alt="Side-by-side comparison of a woman before and after a makeover."
          className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
        />
      </picture>
    </div>
  }
  bottomMedia={
    <div className="relative items-center box-border caret-transparent gap-x-[70px] flex shrink-0 justify-center min-h-px min-w-[auto] outline-[3px] gap-y-[70px] w-full md:hidden md:min-w-0">
      <picture className="relative items-center self-auto box-border caret-transparent flex basis-0 grow object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:hidden">
        <img
          src="/images/jones/137.jpg"
          alt="Close-up of a woman's face with freckles and blue eyes, wearing a green sweater and gold earring."
          className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
        />
      </picture>
    </div>
  }
/></div>
<div className="box-border caret-transparent contents outline-[3px]"><JonesFeatureItem
  rootClassName="gap-x-5 gap-y-5"
  number="2."
  title={
    <span className="text-zinc-900 text-[22px] box-border caret-transparent tracking-[normal] leading-[35px] outline-[3px] break-words md:text-[28px] md:tracking-[0.4px] md:leading-[50px]">
      Shade Matching That Actually Works
    </span>
  }
  description={
    <>
      Finding your perfect match online can be tricky - we get it. That's why we made it simple. Just use your Face Pencil shade and the chart below to find your perfect WTF match or take our quiz to get a natural finish that actually looks like <em className="text-base font-normal box-border caret-transparent leading-6 outline-[3px] break-words md:text-lg md:leading-[27px]">your </em>skin.
    </>
  }
  testimonialTitle="“Amazing!”"
  testimonialAuthorName="Anneka A."
  testimonialBuyerLabel="Verified Buyer"
  testimonialBody={"\"A little truly goes a long way with this one. Love how it blends well, keeps face moisturized and adds a very natural glow.”"}
  topMedia={
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
  }
  bottomMedia={
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
  }
/></div>
<div className="relative items-center self-stretch box-border caret-transparent flex flex-col grow justify-center max-w-full min-h-px min-w-[auto] outline-[3px] -mt-5 mb-0 md:-mb-5"><a role="link" href="https://www.jonesroadbeauty.com/pages/what-the-foundation-custom-quiz" className="text-white text-sm font-normal self-auto bg-black box-border caret-transparent block shrink-0 tracking-[2px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center w-[250px] overflow-hidden px-5 py-3 rounded-[3px] font-basemonowideweb md:text-xs md:font-bold md:self-center md:w-auto md:px-[25px] md:py-[15px]"><span className="text-sm font-normal box-border caret-transparent outline-[3px] w-full md:text-xs md:font-bold"><p className="text-sm font-normal box-border caret-transparent outline-[3px] md:text-xs md:font-bold">FIND MY SHADE</p>
</span>
</a>
</div>
<div className="box-border caret-transparent contents outline-[3px]"><JonesFeatureItem
  rootClassName="gap-x-5 gap-y-5"
  number="3."
  title="Foundation That Acts Like Skincare"
  description="If traditional foundations feel too dry, too flat, or accentuate every line - meet the one that doesn't. WTF blends like skincare, hydrates like a dream, and leaves you with a healthy, natural-looking glow."
  testimonialTitle="“Must Have!”"
  testimonialAuthorName="Kylene A."
  testimonialBuyerLabel="Verified Buyer"
  testimonialBody="“Love this foundation - will definitely continue to reorder. It has a light to medium coverage that perfectly blurs any imperfections, but still looks natural and feels moisturizing to wear.”"
  topMedia={
    <div className="relative items-center self-stretch box-border caret-transparent hidden flex-col shrink-0 justify-center max-w-full min-h-px min-w-0 outline-[3px] md:flex md:min-w-[auto]">
      <div className="relative self-stretch box-border caret-transparent hidden shrink-0 min-h-0 min-w-0 outline-[3px] overflow-hidden md:block md:min-h-[auto] md:min-w-[auto]">
        <div className="relative box-border caret-transparent flex h-full outline-[3px] w-full">
          <video src="https://assets.replocdn.com/projects/32f42d43-36fa-41a0-9362-ba9e1c289321/6367dd54-1892-4c01-ac08-144a1dbd9e12" preload="metadata" autoPlay muted loop playsInline className="box-border caret-transparent h-full min-h-0 min-w-0 object-fill outline-[3px] align-baseline w-full md:min-h-[auto] md:min-w-[auto]"></video>
        </div>
      </div>
    </div>
  }
  bottomMedia={
    <div className="relative items-center box-border caret-transparent gap-x-[70px] flex shrink-0 justify-center min-h-px min-w-[auto] outline-[3px] gap-y-[70px] w-full md:hidden md:min-w-0">
      <div className="relative box-border caret-transparent flex basis-0 grow shrink min-h-[auto] outline-[3px] w-auto overflow-hidden mt-0 md:hidden md:basis-auto md:grow-0 md:shrink-0 md:min-h-0 md:w-[400px] md:mt-auto">
        <div className="relative box-border caret-transparent flex h-full min-h-[auto] min-w-[auto] outline-[3px] w-full md:min-h-0 md:min-w-0">
          <video src="https://cdn.shopify.com/videos/c/o/v/57ca12a825024eeba24fca4b3e00166a.mp4" preload="metadata" autoPlay muted loop playsInline className="box-border caret-transparent h-full min-h-[auto] min-w-[auto] object-fill outline-[3px] align-baseline w-full md:min-h-0 md:min-w-0"></video>
        </div>
      </div>
    </div>
  }
/></div>
<div className="box-border caret-transparent contents outline-[3px]"><JonesFeatureItem
  rootClassName="gap-x-5 gap-y-5"
  number="4."
  title="Made for Real Women, by the Woman Who Gets It"
  description="This isn't just another foundation. It's the result of decades of real beauty know-how from Bobbi Brown - designed for real skin, real women, and real life. You'll see the difference from the first swipe."
  testimonialTitle="“Best Foundation For Mature Skin!”"
  testimonialAuthorName="Kat W."
  testimonialBuyerLabel="Verified Buyer"
  testimonialBody="“This is the only foundation I have found that feels and looks dewy on my 60 year old skin. All others look cakey and emphasize all my lines and pores. I love this product!”"
  topMedia={(
    <picture className="relative items-center self-auto box-border caret-transparent hidden grow object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:flex">
      <img
        src="/images/jones/149.png"
        alt="Person sitting on a blue leather couch with makeup items and a book titled 'Makeup Manual.'"
        className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
      />
    </picture>
  )}
  bottomMedia={(
    <div className="relative items-center box-border caret-transparent gap-x-[70px] flex shrink-0 justify-center min-h-px min-w-[auto] outline-[3px] gap-y-[70px] w-full md:hidden md:min-w-0">
      <picture className="relative items-center self-auto box-border caret-transparent flex basis-0 grow object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:hidden">
        <img
          src="/images/jones/133.jpg"
          alt="Woman sitting on a blue couch with makeup items on the table."
          className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
        />
      </picture>
    </div>
  )}
/></div>
<div className="box-border caret-transparent contents outline-[3px]"><JonesFeatureItem
  rootClassName="gap-x-[30px] gap-y-[30px]"
  number="5."
  title="The Only Foundation That Doesn't Feel Like One"
  description="No more tight, dry, or sticky foundation. WTF is rich and creamy, but still lightweight - leaving skin soft, bouncy, and radiant. For many, you can even skip your moisturizer altogether. If your skin gets drier with age, WTF is your new go-to."
  testimonialClassName="mb-2.5 md:mb-0"
  testimonialTitle="“Moisturizing, Natural Finish!”"
  testimonialAuthorName="Betsy H."
  testimonialBuyerLabel="Verified Buyer"
  testimonialBody="“Love this product. Coverage is very natural, and the moisturizing formula feels great on my dry skin.”"
  topMedia={
    <picture className="relative items-center self-auto box-border caret-transparent hidden grow object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:flex">
      <img
        src="/images/jones/147.jpg"
        className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
      />
    </picture>
  }
  bottomMedia={
    <div className="relative items-center box-border caret-transparent gap-x-[70px] flex shrink-0 justify-center min-h-px min-w-[auto] outline-[3px] gap-y-[70px] w-full">
      <picture className="relative items-center self-auto box-border caret-transparent flex basis-0 grow object-cover outline-[3px] overflow-x-auto overflow-y-hidden z-[1000000] md:self-stretch md:hidden">
        <img
          src="/images/jones/138.jpg"
          alt="Smiling person holding a jar of brown cosmetic cream."
          className="box-border caret-transparent h-full max-h-full max-w-full min-h-full min-w-full object-cover outline-[3px] align-baseline"
        />
      </picture>
    </div>
  }
/></div>
</div>
</div>
</div>

        );
    };
