import { JavyReasonCard } from "./components/JavyReasonCard";

export const JavyArticleSection = () => {
  return (
    <section className="relative box-border caret-transparent overflow-hidden">
      <div className="box-border caret-transparent w-full z-[999] px-4 md:px-10">
        <div className="box-border caret-transparent max-w-screen-md w-full mx-auto">
          <div className="box-border caret-transparent py-8 md:py-[46px]">
            <div className="box-border caret-transparent flex flex-col gap-y-12 md:gap-y-16">
              <JavyReasonCard
                videoPoster="/images/javy/1_rl7uzn.png"
                videoSrc="https://vz-318e2430-7a3.b-cdn.net/6bdd6b94-d2e7-4a48-b249-0f744f657a62/play_480p.mp4"
                secondaryVideoSrc="https://vz-318e2430-7a3.b-cdn.net/88d134cd-a4f9-495b-8be8-972b59993198/play_480p.mp4"
                badgeContainerClass="top-[-3px] md:-top-0.5"
                badgeText="☕ Coffee. Reinvented."
                heading={
                  <>
                    1. NEW innovative guilt-free formula designed to kick your
                    body into shape
                    <br className="box-border caret-transparent" />
                  </>
                }
                description={
                  <>
                    Javvy created the perfect Iced Coffee that works for your
                    body instead of against it. The combination of protein,
                    coffee, and these key functional ingredients are{" "}
                    <strong className="font-bold box-border caret-transparent">
                      essential to feeling your best, recovering faster, and
                      boosting your youthfulness.*
                    </strong>
                    <br className="box-border caret-transparent" />
                  </>
                }
                isVariantWithDoubleVideo={true}
              />
              <JavyReasonCard
                videoPoster="/images/javy/2_vwvosm.png"
                videoSrc="https://vz-318e2430-7a3.b-cdn.net/f4e9573e-2b2d-4839-a104-70a9c0b291f9/play_480p.mp4"
                videoSrcType="video/mp4"
                badgeText="🔒 Craving Control"
                heading={
                  <>
                    2. Beats the sugar cravings to keep you feeling satisfied
                    <br />
                  </>
                }
                description={
                  <>
                    The balanced blend of protein and caffeine naturally reduces
                    sugar cravings, helping you maintain a healthier diet. This
                    unique combination keeps your blood sugar levels stable,
                    preventing those all-too-common sugar spikes and crashes.
                    <br />
                    <br />
                    <em>
                      Our Protein Coffee is naturally flavored to perfection.
                    </em>
                    <br />
                  </>
                }
              />
              <JavyReasonCard
                videoPoster="/images/javy/4_jwtjn5.png"
                videoSrc="https://vz-318e2430-7a3.b-cdn.net/04f846de-ddb0-49fe-a550-bb722e9a0c24/play_480p.mp4"
                videoSrcType="video/mp4"
                badgeText="🌿 Better Digestion Support"
                heading="3. It's your gut’s new best friend thanks to prebiotics inside"
                description={
                  <>
                    Support your gut health with this coffee crafted for
                    wellness. The high protein, lack of artificial ingredients
                    and{" "}
                    <strong className="font-bold box-border caret-transparent">
                      added prebiotics
                    </strong>
                    , promote smoother digestion and a happy, healthy gut. It’s
                    a delicious way to show your digestive system some love.*
                    <br className="box-border caret-transparent" />
                  </>
                }
                linkHref="/pc84"
                linkText="Better Digestion Support Starts Here"
              />
              <JavyReasonCard
                videoPoster="/images/javy/4_omf53s.png"
                videoSrc="https://vz-318e2430-7a3.b-cdn.net/f11494a3-8151-466b-af35-8f569438dad3/play_480p.mp4"
                videoSrcType="video/mp4"
                badgeText="🚫 No Chalky Shakes"
                heading={
                  <>
                    4. It tastes like your favorite coffee, not a protein shake
                    <br />
                  </>
                }
                description={
                  <>
                    While our competitors flavor their protein to taste like
                    coffee, we actually use{" "}
                    <strong className="font-bold box-border caret-transparent">
                      real 100% arabica coffee!
                    </strong>{" "}
                    Our unique formula gives you all of the same flavor,
                    texture, and aroma that you’d normally get when ordering or
                    making your favorite coffee. No more chalky, gritty, or dull
                    tasting protein shakes!
                    <br />
                  </>
                }
                linkHref="/pc84"
                linkText="Enjoy Real Coffee Taste, Every Time"
              />
              <JavyReasonCard
                videoPoster="/images/javy/5_abhdr9.png"
                videoSrc="https://vz-318e2430-7a3.b-cdn.net/f102abdc-bbe9-471e-92ed-2e90668f545d/play_480p.mp4"
                videoSrcType="video/mp4"
                badgeText="🤑 Save Big Yearly"
                heading="5. It easily replaces your unhealthy coffee routine and saves you $1000s every year"
                description={
                  <>
                    Did you know the{" "}
                    <strong className="font-bold box-border caret-transparent">
                      average person spends $2,400+ on coffee
                    </strong>{" "}
                    from cafes or coffee shops each year? Skip the café lines,
                    save both time and cash, and elevate your iced coffee game
                    with Javvy Coffee today!
                    <br className="box-border caret-transparent" />
                  </>
                }
                linkHref="/pc84"
                linkText="Start Saving With Every Cup"
              />
              <JavyReasonCard
                videoPoster="/images/javy/6_yeyl4s.png"
                videoSrc="https://vz-318e2430-7a3.b-cdn.net/e0781a69-5409-4aee-a147-e86a613a2ae7/play_480p.mp4"
                videoSrcType="video/mp4"
                badgeText="🎯 Effortless Perfection"
                heading="6. It makes the perfect iced coffee in just seconds — no more waiting in lines"
                description={
                  <>
                    Make your favorite coffees right from home with just one
                    scoop mixed into water or your favorite milk (mylk).
                    Personalize your coffee by adding any of your other favorite
                    ingredients and enjoy — we suggest our low-sugar flavored
                    syrups of course!
                    <br className="box-border caret-transparent" />
                  </>
                }
                linkHref="/pc84"
                linkText="Skip The Line, Brew At Home Or Anywhere"
              />
              <JavyReasonCard
                videoPoster="/images/javy/7_tuexv2.png"
                videoSrc="https://vz-318e2430-7a3.b-cdn.net/729b9cb6-4758-4c78-a75d-3bae14d771c6/play_480p.mp4"
                videoSrcType="video/mp4"
                badgeText="⚡ No Crash, Just Clarity"
                heading={
                  <>
                    7. You can avoid mid morning crash and enjoy long lasting
                    mental clarity
                    <br className="box-border caret-transparent" />
                  </>
                }
                description={
                  <>
                    The caffeine gives you an initial energy boost, while the
                    protein ensures a stable and lasting source of energy. This
                    synergy helps maintain steady energy levels without the
                    jitters or crash associated with high-caffeine beverages.
                    <br className="box-border caret-transparent" />
                  </>
                }
                linkHref="/pc84"
                linkText="Stay Clear, Stay Focused"
              />
              <JavyReasonCard
                videoPoster="/images/javy/8_p1pmld.png"
                videoSrc="https://vz-318e2430-7a3.b-cdn.net/96c709f9-7eb9-4417-ae8d-ecb481e722d4/play_480p.mp4"
                videoSrcType="video/mp4"
                badgeText="💪 Extra Protein, Zero Effort"
                heading={
                  <>
                    8. It helps you consume 20% more protein during the day on
                    average
                    <br className="box-border caret-transparent" />
                  </>
                }
                description={
                  <>
                    Starting your day with this protein coffee means you’ll have
                    already met 20% of your daily protein needs before
                    lunchtime.{" "}
                    <strong className="font-bold box-border caret-transparent">
                      It’s the perfect boost for anyone looking to optimize
                      their nutrition without sacrificing convenience or
                      flavor.*
                    </strong>
                    <br className="box-border caret-transparent" />
                  </>
                }
                linkHref="/pc84"
                linkText="Fuel Your Day With Every Sip"
              />
              <JavyReasonCard
                videoPoster="/images/javy/9_zwohnt.png"
                videoSrc="https://vz-318e2430-7a3.b-cdn.net/ecea6ee1-57b6-402d-98c2-f7ecfba25a75/play_480p.mp4"
                videoSrcType="video/mp4"
                badgeText="👍 Risk-Free Choice"
                heading="9. Great reviews and 30-Day Money-Back Guarantee"
                description={
                  <>
                    It’s hard to change coffee habits, but we are so confident
                    that you can do it with Javvy because of all the incredible
                    benefits that it comes with. You won’t think twice about an
                    unhealthy, inconvenient cup of coffee again. If for any
                    reason you’re not satisfied, simply let us know and we’ll
                    happily refund your purchase!
                    <br className="box-border caret-transparent" />
                  </>
                }
                linkHref="/pc84"
                linkText="Start Your Risk-Free Coffee Journey"
              />
              <JavyReasonCard
                videoPoster="/images/javy/10_rgnxtv.png"
                videoSrc="https://vz-318e2430-7a3.b-cdn.net/52a9a29d-f274-45a5-9efd-e423516d4887/play_480p.mp4"
                videoSrcType="video/mp4"
                badgeText="🌍 Coffee Without Limits"
                heading="10. Join the community that's made over 100 MILLION coffees"
                description={
                  <>
                    In just seconds you can quickly and easily personalize your
                    favorite coffees right from home when you select one of
                    Javvy’s flavorful Iced Protein Coffees. Choose from{" "}
                    <strong className="font-bold box-border caret-transparent">
                      1,000s of quick and easy recipes
                    </strong>{" "}
                    and join the fastest growing better-for-you coffee
                    community!
                    <br className="box-border caret-transparent" />
                  </>
                }
                linkHref="/pc84"
                linkText="Step Into The Coffee Revolution"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
