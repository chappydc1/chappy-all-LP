import { TestimonialCard } from "../TestimonialsSection/components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <div className="box-border caret-transparent max-w-[870px] w-full mt-12 mb-auto mx-auto">
      <span className="text-black text-[28px] font-black box-border caret-transparent block leading-[33.6px] text-center font-myriad_pro">
        Your Story Can Be Next
      </span>
      <div className="box-border caret-transparent flex flex-wrap mt-12 -mx-3">
        <TestimonialCard
          testimonials={[
            {
              avatarSrc:
                "/images/emma/ava1.webp",
              name: "Natasha K",
              title: "“This has given me my life back...”",
              body: (
                <>
                  <b className="font-bold box-border caret-transparent">
                    “I have struggled with IBS for 6+ years now
                  </b>
                  {" and this has made my symptoms much more manageable. "}
                  <b className="font-bold box-border caret-transparent">
                    I don’t have an urgency to go all the time
                  </b>
                  {" anymore and I don’t feel sick like I used to. "}
                  <b className="font-bold box-border caret-transparent">
                    My body digests at a normal pace, and in turn, my anxiety
                    has slowly started to decrease in regards to my bathroom
                    habits.
                  </b>
                  {
                    " I look fresher and more vibrant and in some ways, this has given me my life back. I used this in combination with Emma and also made some healthy diet changes and added exercise to my routine. If you suffer from IBS, I highly recommend this strategy. “"
                  }
                </>
              ),
            },
            {
              avatarSrc:
                "/images/emma/lucy.webp",
              name: "Lucy C",
              title:
                "“The feeling I get when it enters into my body it’s better than coffee...”",
              body: (
                <>
                  {
                    "“Taking supplements is completely new to me. I’ve made it a habit to drink this first thing in the morning like the instructions recommend. The feeling I get when it enters into my body, it’s better than coffee! "
                  }
                  <b className="font-bold box-border caret-transparent">
                    I’m enjoying more regular bathroom visits which is helping
                    me get out more and do things.
                  </b>
                  {
                    " I have noticed my energy levels have increased with the greens and that’s helped me also shed some pandemic weight. "
                  }
                  <b className="font-bold box-border caret-transparent">
                    The taste is exactly as described.
                  </b>
                  {
                    " I’m not more excited to drink this in the morning than coffee which I’d never thought I’d hear myself saying! I hope this helps other women.”"
                  }
                </>
              ),
            },
          ]}
        />
        <TestimonialCard
          testimonials={[
            {
              avatarSrc:
                "/images/emma/amberlyn.webp",
              name: "Amberlyn F",
              title: "“My stomach is noticeably flatter...” ",
              body: (
                <>
                  “I have a lot of stomach issues and taking this each day with
                  Emma has all but erased my issues. Prior to using I felt like
                  no matter how well I ate or workout, I always had a bloated
                  belly. I started combining Emma and the greens and{" "}
                  <b className="font-bold box-border caret-transparent">
                    I noticed a difference within the first few days. To me, my
                    stomach is noticeably flatter. Thankfully no more bloat and
                    it’s helping to repair my digestive system.”
                  </b>
                </>
              ),
            },
            {
              avatarSrc:
                "/images/emma/patricia.webp",
              name: "Patricia G",
              title:
                "“No bloat and it’s helping clean out my body in a natural way                                    (Pooping!)...”",
              body: (
                <>
                  “I got this product recently and love it. But after my 30 day
                  supply was gone, I wish I had ordered more at the reduced
                  discount. Oh well, you live and learn! I’m a total health nut
                  and yoga lover, so my diet is pretty clean and healthy. With
                  the kids home for summer break, I’ve kind of fallen into
                  eating sugar again which makes me feel horrible and bloats me
                  fast. My cravings were also out of control. Supreme Greens and
                  Emma are great combination.{" "}
                  <b className="font-bold box-border caret-transparent">
                    No bloat and it’s helping clean out my body in a natural way
                    (Pooping!) I feel so great! I’ve also stopped craving sugar.
                  </b>{" "}
                  Even my husband has noticed how much it’s helped me and wants
                  his own supply.“
                </>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};
