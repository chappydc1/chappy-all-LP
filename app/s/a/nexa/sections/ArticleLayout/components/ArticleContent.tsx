// @ts-nocheck
import { ArticleHeader } from "./ArticleHeader";
import { ArticleSection } from "./ArticleSection";
import { Testimonials } from "./Testimonials";
import { OfferSection } from "./OfferSection";
import { Comments } from "./Comments";

export const ArticleContent = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-[845px] pr-0 py-3 md:pr-2.5">
      <ArticleHeader
        variant="breadcrumb"
        breadcrumbText="Cars > Trending > Best Offers"
        expertLabel=""
        expertText=""
        headlineText=""
        subheadlineText=""
        ratingsImageSrc=""
        ratingsText=""
        mainImageSrc=""
        authorImageSrc=""
        authorText=""
        verifiedImageSrc=""
        dateText=""
      />
      <div className="text-[32px] font-bold box-border caret-transparent leading-8 outline-[3px] mt-[15px] font-helvetica">
        <div className="text-[39px] box-border caret-transparent leading-[48px] outline-[3px] font-montserrat">
          <ul className="box-border caret-transparent list-none outline-[3px] pl-0"></ul>
        </div>
      </div>
      <ArticleHeader
        variant="expert"
        breadcrumbText=""
        expertLabel="Top Car Experts:"
        expertText=" This Is The Best Way To Clean Your Car Instantly"
        headlineText=""
        subheadlineText=""
        ratingsImageSrc=""
        ratingsText=""
        mainImageSrc=""
        authorImageSrc=""
        authorText=""
        verifiedImageSrc=""
        dateText=""
      />
      <ArticleHeader
        variant="headline"
        breadcrumbText=""
        expertLabel=""
        expertText=""
        headlineText="Tired of spending hours washing your car?"
        subheadlineText=" What about scratches, fading, and oxidation? Read this article before you do anything else."
        ratingsImageSrc=""
        ratingsText=""
        mainImageSrc=""
        authorImageSrc=""
        authorText=""
        verifiedImageSrc=""
        dateText=""
      />
      <div className="text-[32px] font-bold box-border caret-transparent leading-8 outline-[3px] mt-[15px] font-helvetica"></div>
      <ArticleHeader
        variant="ratings"
        breadcrumbText=""
        expertLabel=""
        expertText=""
        headlineText=""
        subheadlineText=""
        ratingsImageSrc="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729049065435_1716978858_1711369581080_stars.webp"
        ratingsText="3,791 Ratings"
        mainImageSrc=""
        authorImageSrc=""
        authorText=""
        verifiedImageSrc=""
        dateText=""
      />
      <ArticleHeader
        variant="mainImage"
        mainImageSrc="https://c.animaapp.com/mpy7krbtwlu4la/assets/1739882427680_22.jpg"
      />
      <ArticleHeader
        variant="author"
        breadcrumbText=""
        expertLabel=""
        expertText=""
        headlineText=""
        subheadlineText=""
        ratingsImageSrc=""
        ratingsText=""
        mainImageSrc=""
        authorImageSrc="https://c.animaapp.com/mpy7krbtwlu4la/assets/1732491029178_1724369471_1723971044_1718091346_avatar_2.jpg.webp"
        authorText=" By John Martin"
        verifiedImageSrc="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729049957051_1718032241_1707336831448_greentick.webp"
        dateText="August 18, 2025"
      />
      <ArticleSection
        variant="paragraph"
        className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px]"
      >
        Let’s face it: we’ve all been there. Over time, your car’s paint starts
        to fade, your trim looks dull, and those annoying scratches and
        oxidation spots won’t go away. 
      </ArticleSection>
      <ArticleSection
        variant="boldParagraph"
        className="text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px] md:pt-[25px]"
      >
        <span className="text-red-600 text-base font-normal box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <span className="text-black text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            You could ignore it, but that
          </span>
        </span>
        fading shine and dull appearance{" "}
        <span className="text-red-600 text-base font-normal box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <span className="text-black text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            is slowly driving your car’s value down. Worse, your vehicle is
            vulnerable to{" "}
          </span>
        </span>
        further damage from UV rays, rust, and dirt buildup. 
      </ArticleSection>
      <ArticleSection
        variant="nestedBoldParagraph"
        className="text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px] md:pt-[25px]"
      >
        <span className="text-red-600 text-base font-normal box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <span className="text-black text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            And the{" "}
            <b className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
              <span className="text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
                prices for cleaning, waxing, scratch removal
              </span>
            </b>{" "}
            and other damage at car dealerships aren't just high - they're{" "}
            <span className="text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
              mind-blowing
            </span>
            .
          </span>
          <br className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]" />
        </span>
      </ArticleSection>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="statText"
        className="text-2xl font-bold box-border caret-transparent leading-[30px] outline-[3px] text-left mt-[30px] font-montserrat md:text-[37px] md:leading-[45px]"
      >
        Over $10,000 Spent on Paint Fade, Scratches & Oxidation
      </ArticleSection>
      <ArticleSection
        variant="image"
        className="box-border caret-transparent flex outline-[3px] w-full pr-px pt-0 pb-2.5 md:pr-2.5 md:pt-[5px]"
        imageClassName="text-black items-center self-center box-border caret-transparent h-[151px] justify-start max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-screen mt-4 rounded-[25px] md:h-[331px] md:w-[811px]"
        src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1739889840242_7777.webp"
      />
      <ArticleSection
        variant="paragraph"
        className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px]"
      >
        According to a recent study by the National Motorists Association, the{" "}
        <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            average motorist spends between $10,000 and $15,000 over the life of
            a car just to clean, wax and remove scratches, rust and their
            effects.
          </b>
        </span>
      </ArticleSection>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-[19px] box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        <span className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          Hundreds and thousands of dollars and hours of waiting just to
          maintain your vehicle properly. 
        </span>
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        After all, it&#39;s not just about aesthetic damage. 
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        Scuffs, paint fading, scratches, oxidation and rust over time not only
        <b className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            continue to worsen the appearance of the car, but also destroy it
            from the inside
          </span>
        </b>
        , increasing the potential cost of repair, sometimes tens and even
        hundreds of times.
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="calloutTitle"
        className="text-black text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] text-left mt-[30px] font-montserrat md:text-neutral-800 md:text-[33px] md:leading-[43px]"
        title="Just One Solution That Can Save Your Car"
      />
      <ArticleSection
        variant="image"
        className="box-border caret-transparent flex outline-[3px] w-full pr-px pt-0 pb-2.5 md:pr-2.5 md:pt-[5px]"
        imageClassName="text-black items-center self-center box-border caret-transparent h-[157px] justify-start max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-screen mt-4 rounded-[25px] md:h-[387px] md:w-[810px]"
        src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1739889949798_9909990.webp"
      />
      <div className="box-border caret-transparent outline-[3px] text-left"></div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="paragraph"
        className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px]"
      >
        Why spend hours washing and polishing your car all the time? Spend
        hundreds or even thousands of dollars out of your budget on yet another
        protective coating or repair?
      </ArticleSection>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        You can
        <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          get every inch of every coating on your car uniquely clean and shiny
        </span>
        with just a few simple steps.
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        These simple steps will
        <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          not only make your car shine, but will also eliminate scratches, paint
          fading and oxidation marks on your headlights, and protect your
          car&#39;s coating
        </span>
        from future damage.
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        A few steps that will transform your car care experience from
        &quot;before&quot; to &quot;after.&quot;
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="calloutTitle"
        className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]"
        title="Introducing TurboShine™"
      />
      <ArticleSection
        variant="video"
        className="box-border caret-transparent flex justify-start outline-[3px]"
        poster="video"
        src="https://cdn.shopify.com/videos/c/o/v/8f5990bd8b094420804a316b3b9305c2.mp4"
      />
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="paragraph"
        className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[25px] font-montserrat md:text-lg md:leading-[25px]"
      >
        TurboShine™ isn’t just another product - it’s a powerful solution that
        will fundamentally change how you care for your car.
      </ArticleSection>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        Our advanced 5-star cleaning formula utilizes microscopic particles,
        <span className="text-black text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          polishing and returning the original shine and cleanliness
        </span>
        to any surface in just a couple of swipes.
        <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          Faded paint, sun damaged paint, oxidized headlights, tarnished parts
          and even scratches - TurboShine™ can tackle any problem. 
        </span>
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        In addition to instant cleaning, the
        <span className="text-blue-600 text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] underline md:text-lg md:leading-[25px]">
          <a
            title="Ll1"
            loop="none"
            href="https://trk.nexa-us.com/click?clickid=6a2045214183751978e1c68b&referrer="
            className="text-base box-border caret-transparent leading-[22px] max-w-full outline-[3px] text-center md:text-lg md:leading-[25px]"
          >
            TurboShine™
          </a>
        </span>
        provides a special hydrophobic shield that
        <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          repels water, prevents dust, dirt and grime
        </span>
        from adhering to the surface, and
        <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          protects the finish from harmful UV rays, oxidation and rust.
        </span>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="calloutTitle"
        className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]"
        title="Clean, Polish & Protect Your Car Instantly�!"
      />
      <ArticleSection
        variant="image"
        className="box-border caret-transparent flex outline-[3px] w-full pr-px pt-0 pb-2.5 md:pr-2.5 md:pt-[5px]"
        src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1739890412191_modern_black_automobile_before_a.jpg"
        imageClassName="text-black items-center self-center box-border caret-transparent h-[134px] justify-start max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-screen mt-4 rounded-[25px] md:h-[243px] md:w-[825px]"
      />
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="paragraph"
        className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px]"
      >
        {
          "If you're tired of spending hours washing and polishing your car, TurboShine™ is just what you need.\u00A0"
        }
      </ArticleSection>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        With its unique microscopic formula, TurboShine™
        <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          brings back the original shine and crystal clarity to any surface on
          your vehicle in just one swipe.
        </span>
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        That&#39;s right -
        <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          faded or sun-damaged paint, oxidized headlights, faded parts
        </span>
        - with this advanced formula,
        <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          nothing is impossible
        </span>
        for you anymore. 
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        No more hundreds and thousands of dollars thrown away. No more hours
        spent on pointless attempts to polish the surface. Only perfect
        cleanliness and dazzling shine. 
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <ArticleSection
        variant="nestedCalloutTitle"
        className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]"
      >
        Rust &amp; Scratches? Not A Problem Anymore.
        <br className="text-2xl box-border caret-transparent leading-[30px] outline-[3px] md:text-[37px] md:leading-[45px]" />
      </ArticleSection>
      <ArticleSection
        variant="image"
        className="box-border caret-transparent flex outline-[3px] w-full pr-px pt-0 pb-2.5 md:pr-2.5 md:pt-[5px]"
        imageClassName="text-black items-center self-center box-border caret-transparent h-[133px] justify-start max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[350px] mt-4 rounded-[25px] md:h-[298px] md:w-[809px]"
        src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1765200510686_9.webp"
      />
      <ArticleSection
        variant="paragraph"
        className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left pt-[15px] font-montserrat md:text-lg md:leading-[25px]"
      >
        <a
          title="Ll4"
          loop="none"
          href="https://trk.nexa-us.com/click?clickid=6a2045214183751978e1c68b&referrer="
          className="text-blue-600 text-base font-bold box-border caret-transparent leading-[22px] max-w-full outline-[3px] text-center underline md:text-lg md:leading-[25px]"
        >
          TurboShine™
        </a>
        not only cleans, polishes and protects your car, but also tackles the
        toughest enemies of the motorist - scratches and rust. 
      </ArticleSection>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        The microscopic particles that form the basis of the advanced
        micro-abrasive formula gently
        <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          polish paint and erase the edges of scratches
        </span>
        , while the product&#39;s denser particles penetrate deep imperfections
        to fill them and create a smooth and even surface. 
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        Due to its deep penetration into pores and microscopic crevices, the
        product initiates a chemical reaction that
        <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          destroys iron oxide (rust), facilitating its removal and preventing
          its reappearance. 
        </span>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="text-lg box-border caret-transparent leading-[23px] outline-[3px] text-left mt-[15px]"></div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="text-lg box-border caret-transparent leading-[23px] outline-[3px] text-left mt-[15px]"></div>
      <ArticleSection
        variant="nestedCalloutTitle"
        className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]"
      >
        Why Choose TurboShine™?
      </ArticleSection>
      <ArticleSection
        variant="standaloneImage"
        className="text-black items-center self-center box-border caret-transparent inline h-[163px] justify-start max-w-full outline-[3px] align-baseline w-screen mt-[21px] rounded-[25px] md:h-[312px] md:w-[812px]"
        src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1739890637695_honda_civic_before_and_after.jpg"
      />
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-0 pb-2.5 md:pt-[5px]"></div>
      <ArticleSection
        variant="statText"
        className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left mt-2.5 font-montserrat md:text-lg md:leading-[25px]"
      >
        ✅{" "}
        <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            Instant Cleaning:
          </b>
        </span>{" "}
        Effortlessly removes dirt, dust, grease, and stains from all surfaces of
        your car – including metal, plastic, glass, and more.
      </ArticleSection>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        ✅
        <b className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
              Polishing &amp; Shine Restoration:
            </b>
          </span>
        </b>
        Revives your car’s original dazzling glow, restoring its high-gloss
        finish and bringing back that showroom shine.
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        ✅
        <span className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          Scratch &amp; Minor Damage Repair
        </span>
        <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            :
          </b>
          <span className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            <span className="text-black text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
              Fills in and conceals scratches and minor imperfections in the
              coating, blending seamlessly with your car’s color.
            </span>
          </span>
        </span>
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        ✅
        <b className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
              Eliminates Oxidation &amp; Rust:
            </b>
          </span>
        </b>
        Breaks down microscopic oxidation and rust deposits, preventing future
        buildup and protecting your car from further damage.
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        ✅
        <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            Long-Lasting UV Protection:
          </b>
        </span>
        Creates a strong, protective barrier on your car’s surface, guarding
        against harmful UV rays and preventing fading and deterioration over
        time.    
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        ✅
        <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            Effortless Application:
          </b>
        </span>
        Simply wipe your car and enjoy a spotless, glossy finish – no
        complicated steps or tools needed.
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        One thing is for certain, once you&#39;ve tried
        <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            <a
              title="L3"
              loop="none"
              href="https://trk.nexa-us.com/click?clickid=6a2045214183751978e1c68b&referrer="
              className="text-blue-600 text-base box-border caret-transparent leading-[22px] max-w-full outline-[3px] text-center underline md:text-lg md:leading-[25px]"
            >
              TurboShine™
            </a>
          </b>
        </span>
        , you&#39;ll never go back to the days without it!
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        No stains, no streaks, no scuffs or scratches, no hundreds of wasted
        dollars. TurboShine™ makes car care quick and easy!
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <Testimonials />
      <div className="bg-gray-200 box-border caret-transparent block outline-[3px] w-full mt-[22px] pt-0 pb-[5px] px-0 md:flex md:pt-3 md:px-2.5">
        <div className="box-border caret-transparent basis-[30%] shrink-0 min-h-0 min-w-0 outline-[3px] w-full pt-0 pb-3 px-0 md:min-h-[auto] md:min-w-[auto] md:pt-3 md:px-[5px]">
          <img
            title=""
            src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1739865958181_1731307929_1731236016_before_and_after_blac.webp"
            href=""
            alt=""
            className="text-black box-border caret-transparent inline h-auto max-w-full outline-[3px] align-baseline w-auto md:h-[120px] md:w-[244px]"
          />
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full pl-2.5 pr-[5px] pb-3 md:min-h-[auto] md:min-w-[auto] md:pr-2.5">
          <div className="items-center self-center box-border caret-transparent flex outline-[3px] w-full pt-3 pb-[5px] px-2.5">
            <img
              title=""
              src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1732520123546_1723972557_user_approve.webp"
              href=""
              alt=""
              className="text-black box-border caret-transparent h-[25px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[25px] md:h-[35px] md:w-[35px]"
            />
            <div className="text-base font-bold box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:leading-[18px] md:pl-2.5">
              Brandon H.
            </div>
            <div className="text-base font-bold box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-3 pr-px py-px font-montserrat md:text-lg md:hidden md:leading-[18px] md:min-h-0 md:min-w-0 md:pl-2.5">
              ⭐️⭐️⭐️⭐️⭐️
            </div>
            <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
              |
            </div>
            <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
              Rating: ⭐️⭐️⭐️⭐️⭐️
            </div>
          </div>
          <div className="text-base box-border caret-transparent leading-[21px] outline-[3px] pl-2.5 pr-[9px] pt-[5px] pb-2.5 font-montserrat md:text-[17px] md:leading-[22px] md:pr-[5px]">
            <div className="text-base box-border caret-transparent leading-5 outline-[3px] text-left pr-0 md:text-[17px] md:leading-6 md:pr-2.5">
              <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-[17px] md:leading-6">
                <span className="text-black text-base box-border caret-transparent leading-[22px] outline-[3px] pr-px md:text-[17px] md:leading-6 md:pr-[3px]">
                  &quot;This spray exceeded my expectations by a mile! Not only
                  does it leave a glass-like shine that makes my car look brand
                  new, but the coating feels incredibly smooth to the touch.
                  It’s amazing how much it repels dust and dirt. I used to have
                  to clean off bird droppings and sap all the time, but now they
                  come off so easily, almost like they’re not even sticking! If
                  you care about your car&#39;s appearance and want something
                  that actually lasts, TurboShine™ is the way to go!&quot;
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 box-border caret-transparent block outline-[3px] w-full mt-5 pt-0 pb-[5px] px-0 md:flex md:pt-3 md:px-2.5">
        <div className="box-border caret-transparent basis-[30%] shrink-0 min-h-0 min-w-0 outline-[3px] w-full pt-0 pb-3 px-0 md:min-h-[auto] md:min-w-[auto] md:pt-3 md:px-[5px]">
          <img
            title=""
            src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1739865959763_1731307930_1731236124_333.webp"
            href=""
            alt=""
            className="text-black box-border caret-transparent inline h-[261px] max-w-full outline-[3px] align-baseline w-[348.5px] md:h-[169px] md:w-[246px]"
          />
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full pl-2.5 pr-[5px] pb-3 md:min-h-[auto] md:min-w-[auto] md:pr-2.5">
          <div className="items-center self-center box-border caret-transparent flex outline-[3px] w-full pt-3 pb-[5px] px-2.5">
            <img
              title=""
              src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1732520123546_1723972557_user_approve.webp"
              href=""
              alt=""
              className="text-black box-border caret-transparent h-[25px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[25px] md:h-[35px] md:w-[35px]"
            />
            <div className="text-base font-bold box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:leading-[18px] md:pl-2.5">
              Amelia K.
            </div>
            <div className="text-base font-bold box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-3 pr-px py-px font-montserrat md:text-lg md:hidden md:leading-[18px] md:min-h-0 md:min-w-0 md:pl-2.5">
              ⭐️⭐️⭐️⭐️⭐️
            </div>
            <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
              |
            </div>
            <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
              Rating: ⭐️⭐️⭐️⭐️⭐️
            </div>
          </div>
          <div className="text-[17px] box-border caret-transparent leading-[21px] outline-[3px] pt-[5px] pb-2.5 px-2.5 font-montserrat md:leading-6 md:pr-[5px]">
            <div className="text-base box-border caret-transparent leading-6 outline-[3px] text-left pr-px md:text-[17px] md:pr-2.5">
              <span className="text-red-600 text-base box-border caret-transparent outline-[3px] md:text-[17px]">
                <span className="text-black text-base box-border caret-transparent leading-[22px] outline-[3px] pr-px md:text-[17px] md:leading-6 md:pr-[3px]">
                  &quot;I have to say, this spray has been a game-changer for
                  me. Nothing has matched the shine and durability of this one.
                  I went through a rainy week, and the water beading effect was
                  outstanding. You can see the coating doing its job, repelling
                  water and grime with ease. My car looks freshly washed, even
                  days after rain! And one of the best parts is knowing my car’s
                  finish is protected from UV rays&quot;
                  <br className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-[17px] md:leading-6" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 box-border caret-transparent block outline-[3px] w-full mt-5 pt-0 pb-[5px] px-0 md:flex md:pt-3 md:px-2.5">
        <div className="box-border caret-transparent basis-[30%] shrink-0 min-h-0 min-w-0 outline-[3px] w-full pt-0 pb-3 px-0 md:min-h-[auto] md:min-w-[auto] md:pt-3 md:px-[5px]">
          <img
            title=""
            src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1739865961726_1731307932_1731236019_Before_and_After_red.webp"
            href=""
            alt=""
            className="text-black box-border caret-transparent inline h-[232px] max-w-full outline-[3px] align-baseline w-[352.594px] md:h-[139px] md:w-[246px]"
          />
        </div>
        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] w-full pl-2.5 pr-[7px] pb-3 md:min-h-[auto] md:min-w-[auto] md:pr-2.5">
          <div className="items-center self-center box-border caret-transparent flex outline-[3px] w-full pt-3 pb-[5px] px-2.5">
            <img
              title=""
              src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1732520123546_1723972557_user_approve.webp"
              href=""
              alt=""
              className="text-black box-border caret-transparent h-[25px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[25px] md:h-[35px] md:w-[35px]"
            />
            <div className="text-base font-bold box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:leading-[18px] md:pl-2.5">
              Michael D.
            </div>
            <div className="text-base font-bold box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] pl-3 pr-px py-px font-montserrat md:text-lg md:hidden md:leading-[18px] md:min-h-0 md:min-w-0 md:pl-2.5">
              ⭐️⭐️⭐️⭐️⭐️
            </div>
            <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
              |
            </div>
            <div className="text-sm box-border caret-transparent hidden leading-[14px] min-h-0 min-w-0 outline-[3px] pl-[7px] pr-px py-px font-montserrat md:text-lg md:block md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:pl-2.5">
              Rating: ⭐️⭐️⭐️⭐️⭐️
            </div>
          </div>
          <div className="text-[17px] box-border caret-transparent leading-[21px] outline-[3px] pt-[5px] pb-2.5 px-2.5 font-montserrat md:leading-6 md:pr-[5px]">
            <div className="box-border caret-transparent leading-6 outline-[3px] text-left pr-px md:pr-2.5">
              <span className="text-red-600 box-border caret-transparent outline-[3px]">
                <span className="text-black text-base box-border caret-transparent leading-[22px] outline-[3px] pr-[3px] md:text-[17px] md:leading-6">
                  “This spray cleans and polishes the car so quickly! Plus, the
                  protection it provides has saved me so much time - I don&#39;t
                  have to wash my car as often anymore, and it&#39;s now easier
                  to wash off dust and dirt. I&#39;ve also noticed that it&#39;s
                  really resistant to the elements - we&#39;ve had a few big
                  storms in the past month and the coating held up beautifully
                  without fading or leaving any rain marks. I can confidently
                  say that this spray will protect my car for a long time to
                  come.&quot;
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]">
        <div className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
          <span className="text-red-600 text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
            <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
              <div className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                <span className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
                  <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]"></span>
                </span>
              </div>
            </span>
          </span>
        </div>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]">
        <div className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
          <span className="text-red-600 text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
            <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
              <div className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                <span className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
                  <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]"></span>
                </span>
              </div>
            </span>
          </span>
        </div>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] text-left mt-[30px] font-montserrat md:text-[33px] md:leading-[43px]">
        <div className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
          <span className="text-red-600 text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
            <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
              <div className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                <span className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
                  <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                    <div className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]">
                      <span className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] md:text-[33px] md:leading-[43px]"></span>
                    </div>
                  </span>
                </span>
              </div>
            </span>
          </span>
        </div>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <OfferSection
        variant=""
        buttonText="GET Your 50% OFF Now!"
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <OfferSection
        variant=""
        buttonText="GET 50% OFF Now!"
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <div className="text-[28px] font-bold box-border caret-transparent leading-[34px] outline-[3px] mt-10 font-montserrat md:text-[33px] md:leading-[43px]">
        <div className="text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
          <span className="text-red-600 text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-[33px] md:leading-[43px]">
            <span className="text-black text-[28px] box-border caret-transparent leading-[34px] outline-[3px] text-left md:text-red-600 md:text-[33px] md:leading-[43px]"></span>
          </span>
        </div>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <OfferSection
        variant="stockWarning"
        buttonText=""
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <p className="box-border caret-transparent outline-[3px]"></p>
      <OfferSection
        variant=""
        buttonText="GET 50% OFF Now!"
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <OfferSection
        variant="salesParagraph"
        href="https://trk.nexa-us.com/click?clickid=6a2045214183751978e1c68b&referrer="
        productName="TurboShine™"
      />
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        As of the publication of this article, you can get it for
        <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
              50% off
            </span>
            the normal price, which is
            <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
              $19.99
            </span>
            , but only for a limited time
          </b>
        </span>
        . That sale is ending soon though, so don&#39;t wait too long!
        You&#39;ll be glad you did. Get yours before they sell out again!
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[23px]">
        <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[23px]">
          <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[23px]">
            <a
              title="L5"
              loop="none"
              href="https://trk.nexa-us.com/click?clickid=6a2045214183751978e1c68b&referrer="
              className="text-blue-600 text-base box-border caret-transparent leading-[22px] max-w-full outline-[3px] text-center underline md:text-lg md:leading-[25px]"
            >
              Click here to claim a discounted TurboShine™ (if it&#39;s still
              available) &gt;&gt;
            </a>
          </b>
        </span>
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <OfferSection
        variant="secondaryButton"
        buttonTitle="9th"
        buttonText="GET Your 50% OFF Now!"
      />
      <OfferSection
        variant="whereToGet"
        buttonText=""
        buttonTitle=""
        href=""
        linkTitle=""
        productName="TurboShine™"
      />
      <p className="box-border caret-transparent outline-[3px]"></p>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <OfferSection variant="description" />
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        If you want to be sure that you&#39;re buying the original product -
        just
        <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <b className="text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            <b className="text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
              <a
                title="L6"
                loop="none"
                href="https://trk.nexa-us.com/click?clickid=6a2045214183751978e1c68b&referrer="
                className="text-blue-600 text-base box-border caret-transparent leading-[22px] max-w-full outline-[3px] text-center underline md:text-lg md:leading-[25px]"
              >
                click here
              </a>
            </b>
          </b>
        </span>
        and you will be redirected to the official website. 
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        We recommend ordering
        <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            several TurboShine™
          </b>
        </span>
        at once, so you always have a quick and easy cleaning solution at your
        fingertips.
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        Plus - the more you order,
        <span className="text-red-600 text-base box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
          <b className="text-black text-base font-bold box-border caret-transparent leading-[22px] outline-[3px] md:text-lg md:leading-[25px]">
            the more money you save
          </b>
        </span>
        . That&#39;s because we save on shipping when we ship large orders - and
        we&#39;re happy to share those savings with you.
      </div>
      <div className="box-border caret-transparent outline-[3px]">
        <br className="box-border caret-transparent outline-[3px]" />
      </div>
      <div className="text-base box-border caret-transparent leading-[22px] outline-[3px] text-left font-montserrat md:text-lg md:leading-[25px]">
        There are some knock-offs and imitations that don&#39;t work so well.
        So, be aware to order from their official website and make sure to get
        the REAL DEAL directly!
      </div>
      <p className="box-border caret-transparent outline-[3px]"></p>
      <OfferSection
        variant="linkCta"
        buttonText="GET 50% OFF TurboShine™ Now!"
        buttonTitle="GET 50% OFF Car Scratch Remover Nexa™ Now!"
        href="https://trk.nexa-us.com/click?clickid=6a2045214183751978e1c68b&referrer="
        linkTitle="GET 50% OFF Car Scratch Remover Nexa™ Now!"
        productName="TurboShine™"
      />
      <OfferSection
        variant="offerDetails"
        buttonText="GET Your 50% OFF Now!"
        buttonTitle="8th"
        href="https://trk.nexa-us.com/click?clickid=6a2045214183751978e1c68b&referrer="
        linkTitle="GET 50% OFF Now!"
        productName="TurboShine™"
      />
      <p className="box-border caret-transparent outline-[3px]"></p>
      <div className="bg-orange-100 box-border caret-transparent outline-[3px] w-full pt-px pb-3"></div>
      <OfferSection
        variant="badges"
        buttonText=""
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <OfferSection
        variant="badgeLabelsDesktop"
        buttonText=""
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <OfferSection
        variant="badgeLabelsMobile"
        buttonText=""
        buttonTitle=""
        href=""
        linkTitle=""
        productName=""
      />
      <OfferSection
        variant="ctaGroup"
        buttonText="GET Your 50% OFF Now!"
        buttonTitle="7th"
        href="https://trk.nexa-us.com/click?clickid=6a2045214183751978e1c68b&referrer="
        linkTitle="GET 50% OFF Now!"
        productName="TurboShine™"
      />
      <Comments />
      <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] p-px md:flex-nowrap">
        <div className="relative box-border caret-transparent flex basis-full grow max-w-full min-h-[25px] outline-[3px] w-min mt-5 p-px md:basis-0">
          <img
            title=""
            src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729072653432_1689522054_1.webp"
            href=""
            alt=""
            className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
          />
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pb-3 px-2.5">
            <div className="text-indigo-800 text-sm font-bold self-center box-border caret-transparent leading-[14px] outline-[3px] font-montserrat">
              <div className="box-border caret-transparent outline-[3px] text-left">
                <span className="box-border caret-transparent outline-[3px]">
                  Wilma Dewon
                </span>
              </div>
            </div>
            <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
              <div className="box-border caret-transparent outline-[3px] text-left">
                <span className="box-border caret-transparent outline-[3px] font-montserrat">
                  Thank you for such valuable information, this car cleaning
                  agent is really a real godsend. Best!
                </span>
              </div>
            </div>
            <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
              <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                Like
              </div>
              <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                ·
              </div>
              <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                Reply
              </div>
              <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                ·
              </div>
              <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
                39 min
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch box-border caret-transparent flex flex-wrap justify-start max-w-full outline-[3px] p-px md:flex-nowrap">
        <div className="relative box-border caret-transparent flex basis-full grow max-w-full min-h-[25px] outline-[3px] w-min p-px md:basis-0">
          <img
            title=""
            src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729172389910_1689523955_9_1_120x120.webp"
            href=""
            alt=""
            className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
          />
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pb-3 px-2.5">
            <div className="text-indigo-800 text-[0px] font-bold box-border caret-transparent leading-[0px] outline-[3px] font-montserrat">
              <div className="box-border caret-transparent outline-[3px]">
                <span className="text-red-600 box-border caret-transparent outline-[3px]">
                  Doris Skylar
                </span>
              </div>
              <div className="box-border caret-transparent outline-[3px]">
                <span className="text-red-600 box-border caret-transparent outline-[3px]">
                  <br className="box-border caret-transparent outline-[3px]" />
                </span>
              </div>
            </div>
            <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
              <div className="box-border caret-transparent outline-[3px] text-left font-montserrat">
                <div className="box-border caret-transparent outline-[3px] pb-[5px]">
                  <span className="text-indigo-800 font-bold box-border caret-transparent outline-[3px]">
                    Doris Maison
                  </span>
                </div>
                <span className="box-border caret-transparent outline-[3px]">
                  I bought mine for the full price and now are 50% off?
                  That&#39;s not fair!
                </span>
              </div>
            </div>
            <div className="box-border caret-transparent flex outline-[3px] pr-2.5 pt-2.5 pb-3">
              <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                Like
              </div>
              <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                ·
              </div>
              <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                Reply
              </div>
              <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                ·
              </div>
              <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
                51
                <span className="text-neutral-900 box-border caret-transparent outline-[3px]">
                   min
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729172608070_1689524009_4_120x120.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Skyler Greig
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                How long does shipping take?
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              1
              <span className="text-neutral-900 box-border caret-transparent outline-[3px]">
                 h
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-[5px]">
            <img
              title=""
              src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729172681324_1689524278_5_120x120.webp"
              href=""
              alt=""
              className="text-black box-border caret-transparent h-[45px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[45px] mt-0.5"
            />
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
              <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
                Marie Cambell
              </div>
              <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
                <div className="box-border caret-transparent outline-[3px] text-left">
                  <span className="box-border caret-transparent outline-[3px] font-montserrat">
                    Hey Skyler, got mine after a week.
                  </span>
                </div>
              </div>
              <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
                <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                  Like
                </div>
                <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                  ·
                </div>
                <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                  Reply
                </div>
                <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                  ·
                </div>
                <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
                  24 min
                </div>
              </div>
            </div>
            <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729276565818_1690673126_thumb_Irina_Travkina_executive_r.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Anna Boyd
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                I took the package from the post-office yesterday,
                everything&#39;s all right. I&#39;m starting to use it. Waiting
                for the results :)
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              1 h
            </div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729276716603_1689524233_7_120x120.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            David Emerson
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                This is literally the best purchase for a car I have ever made.
                Not only does this spray instantly clean any surface (really any
                surface! From the coating, to the glass and plastic), but it
                also handles scratches - it&#39;s like they fill in and become
                invisible. Also, after this spray, there is really almost no
                dust and dirt sticking to the car. Definitely recommended
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full mt-[5px] pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              2 h
            </div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729277064849_1689524495_9_120x120.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Alferd Johnson
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-montserrat">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px]">
                Did you buy one, how long does it take to get it
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              2
              <span className="text-neutral-900 box-border caret-transparent outline-[3px]">
                 h
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-[5px]">
            <img
              title=""
              src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729277123750_1689524512_1_1_120x120.webp"
              href=""
              alt=""
              className="text-black box-border caret-transparent h-[45px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[45px] mt-0.5"
            />
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
              <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
                Edith Ashton
              </div>
              <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
                <div className="box-border caret-transparent outline-[3px] text-left">
                  <span className="box-border caret-transparent outline-[3px] font-montserrat">
                    For me 5 business days.
                  </span>
                </div>
              </div>
              <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
                <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                  Like
                </div>
                <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                  ·
                </div>
                <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                  Reply
                </div>
                <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
                  ·
                </div>
                <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
                  50 min
                </div>
              </div>
            </div>
            <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729277189377_1691413209_Anabel_Lorenzo.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Debra Peyton
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                My auto mechanic friend recommended this car cleaning agent to
                me, great product :)
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              2 h
            </div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729277325463_1689524881_3_1_120x120.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Agnes Graeme
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                I ordered, now I look forward to my package :)
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              3 h
            </div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729277531271_1689525035_21_120x120.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Barbara Bradly
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                If you have a car - this is a must have in your trunk. Instant
                cleaning and polishing, still shocked and delighted!
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full mt-[5px] pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              3 h
            </div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729277610957_1689524987_19_120x120.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Harry Keegan
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                I have heard about this product from many colleagues, really
                work as promised.
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              4 h
            </div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729277679683_1689525025_20_120x120.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Bridget Prescott
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                Hello. I have been using this car cleaning agent for a few
                months now... I&#39;m just speechless! Thank you!
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              4 h
            </div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729277723585_1689524890_5_1_120x120.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Anna Madison
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                Delight! Best investment ever. I had forgotten how beautiful my
                car was without all those ugly smudges and scuffs. I ordered a
                few more for my parents and my husband&#39;s parents.
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              5 h
            </div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729277725437_1689525125_6_1_120x120.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Clara Milton
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                The best product, I have been using it for a year now. A real
                rescue in any situation.
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              5 h
            </div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729277728866_1690673012_brave_woman.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Dana Madson
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                I have already ordered mine. I&#39;m waiting for the package,
                thanks to everyone for the reviews.
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              5 h
            </div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729277730999_1690673025_eyJwYXRoIjoiaWhoLWhlYWx0aGNhcmUt.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Katharine Jacobs
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                It really works! I&#39;m absolutely thrilled.
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              6 h
            </div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729277738316_1690673034_depositphotos_90874904_stock_pho.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Amanda Cullen
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                I have just read the reviews on some sites about this product
                and realized that this is what we have been waiting for for so
                long. HOORAY!!! I&#39;ll order it right away.
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              6 h
            </div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
      <div className="box-border caret-transparent flex outline-[3px] w-full pr-0 md:pr-2.5">
        <img
          title=""
          src="https://c.animaapp.com/mpy7krbtwlu4la/assets/1729277745835_1690673046_smiling_woman.webp"
          href=""
          alt=""
          className="text-black box-border caret-transparent h-[55px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[55px] mt-0.5"
        />
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full pb-3 px-2.5">
          <div className="text-indigo-800 text-sm font-bold box-border caret-transparent leading-[14px] outline-[3px] p-px font-helvetica">
            Samantha Lambert
          </div>
          <div className="text-sm box-border caret-transparent leading-[18px] outline-[3px] mt-[5px] p-px font-helvetica">
            <div className="box-border caret-transparent outline-[3px] text-left">
              <span className="box-border caret-transparent outline-[3px] font-montserrat">
                It&#39;s a lifesaver! I used to spend hundreds of dollars on
                washing, polishing, scratch removal and protective coating, but
                now I can do it myself in minutes. The best product
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent flex outline-[3px] w-full pr-2.5 pt-2.5 pb-3">
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Like
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-slate-500 text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              Reply
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] p-px font-helvetica">
              ·
            </div>
            <div className="text-xs box-border caret-transparent leading-3 min-h-[auto] min-w-[auto] outline-[3px] ml-[3px] p-px font-helvetica">
              7 h
            </div>
          </div>
        </div>
        <div className="text-lg font-bold box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] ml-2 mt-px pl-px font-helvetica"></div>
      </div>
    </div>
  );
};
