import { EmmaFAQItem } from "../FAQSection/components/FAQItem";

export const EmmaFAQSection = () => {
  return (
    <div className="bg-stone-100 box-border caret-transparent w-full">
      <div className="box-border caret-transparent max-w-[1440px] m-auto py-6">
        <div className="box-border caret-transparent max-w-none w-full m-auto px-3 md:max-w-screen-xl">
          <div className="box-border caret-transparent max-w-[740px] w-full m-auto">
            <h2 className="text-black text-[44px] font-black box-border leading-[52.8px] text-center mb-2 font-myriad_pro reveal">
              F.A.Qs
            </h2>
            <ul className="box-border caret-transparent list-none mb-4 pl-0">
              <EmmaFAQItem
                number={1}
                question={`Hey Dr. Sam, I've tried everything from
                                        laxatives, to cleanses to probiotics. And probiotics are quite popular these
                                        days so what makes Emma superior to probiotics?`}
                answer={
                  <>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        Probiotics have exploded in popularity over the last
                        decade
                      </b>
                      .{" "}
                      <i className="italic box-border caret-transparent">
                        So why has our gut health continued to get worse over
                        the same time period?
                      </i>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <i className="italic box-border caret-transparent">
                        Probiotics, in theory, are great.
                      </i>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      However, there's an important piece of the puzzle nobody
                      is talking about. To get the full benefits of probiotics,{" "}
                      <b className="font-bold box-border caret-transparent">
                        they have to travel through the hostile acidic
                        environment in your stomach
                      </b>
                      .
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      And the good bacteria that do survive only make it to your
                      small intestine,{" "}
                      <b className="font-bold box-border caret-transparent">
                        <u className="box-border caret-transparent underline">
                          which is not where they're supposed to be
                        </u>
                      </b>
                      .
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      You see, your gut microbiome is much deeper and resides in
                      the large intestine.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        So if you’re suffering from digestive issues like
                        constipation, bloating, gas, diarrhea, it means you've
                        got too many organisms in your small intestine already,
                        which should be clean.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      You might say taking a probiotic is like feeding a gang of
                      violent criminals a five course meal before they rob and
                      destroy everything they see.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        <i className="italic box-border caret-transparent">
                          That's why sometimes when you take a probiotic you
                          actually feel worse.
                        </i>
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      And the more archaea grow inside you, the more methane gas
                      builds up in your body, slowing down your poop speed and
                      causing constipation, bloating, painful cramps and
                      embarrassing gas.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        What makes Emma so different from probiotics is that it
                        follows a proven 3 step gut cleansing and healing
                        protocol.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        First, Emma wages war on archaea, other bad bacteria,
                        even parasites and their eggs, effectively a deep
                        cleaning where you need it the most.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      It then goes to work supporting health promoting,
                      metabolism boosting, friendly flora in your gut microbiome
                      while healing and repairing your gut lining.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      And lastly, Emma lubricates your digestive tract so that
                      poop can practically slide out smoothly with a{" "}
                      <b className="font-bold box-border caret-transparent">
                        feeling of “complete release” while unclogging your
                        colon and eliminating the built-up “stuck poop” from
                        inside you
                      </b>
                      .
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] font-myriad_pro">
                      <i className="italic box-border caret-transparent">
                        The best part is, it's safe, gentle and made from 100%
                        natural ingredients.
                      </i>
                    </p>
                  </>
                }
                liClassName="border-t-zinc-900 border-y-2"
                headerClassName=""
              />
              <EmmaFAQItem
                number={2}
                question="I've always kinda suspected that my weight gain as I've gotten older is related to my digestion problems, and your presentation confirms this. So my question is, will Emma help me lose weight?"
                answer={
                  <>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        The main function of Emma is to help you enjoy “perfect
                        poops” on a daily basis by naturally restoring balance
                        to your gut environment while healing and repairing your
                        gut lining.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      That being said, we get hundreds of emails from happy Emma
                      customers who have noticed{" "}
                      <i className="italic box-border caret-transparent">
                        it can also have a slimming effect on your body as well
                      </i>
                      .
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        The weight loss effect is more of a pleasant side
                        effect, and it works through improving cellular
                        processes that happen inside the body.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      When your body stores fat, it’s directly related to how
                      well you digest and metabolize food.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <i className="italic box-border caret-transparent">
                        The key to Emma's fat burning is its ability to activate
                        the AMPK Pathway - the body's master metabolic switch.
                      </i>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      For most people under normal resting conditions, AMPK is
                      in “silent mode”, even though it’s always there.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      This is an ancient metabolic switch that evolved for
                      millions of years and it controls how well our bodies turn
                      food into energy.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      After all, if all of your food was turned into energy
                      there would be nothing left to be stored as fat.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        This powerful switch boosts fat-burning by supercharging
                        the functions of mitochondria -- the energy powerhouses
                        -- in our cells.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      Our mitochondria is responsible for ramping cellular
                      energy production, and are central to many systems in the
                      body.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      Just think about it, if the cells burn more energy, your
                      body will burn more fat. It’s really that simple.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        Emma also aims to reduce fat storage by blocking the fat
                        storage enzyme called lipoprotein lipase, as well.
                      </b>
                    </p>
                  </>
                }
                liClassName="border-t-neutral-800 border-b-2"
                headerClassName="mt-1 px-2 md:px-0"
              />
              <EmmaFAQItem
                number={3}
                question="Are there any side effects? Is it safe to take long term?"
                answer={
                  <>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        Emma has been taken by tens of thousands of people, with
                        zero reported side effects.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      It's free from any dangerous drugs…
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      There's no stimulants...
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      And there's no harsh chemicals or laxatives.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        All of the ingredients in Emma are 100% natural and
                        botanical, meaning they come from plants. Some from
                        roots, others from rare and beautiful flowers.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      In fact many of the primary ingredients in Emma including
                      berberine, resveratrol and quercetin are currently being
                      studied for their anti-aging properties.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] font-myriad_pro">
                      <i className="italic box-border caret-transparent">
                        So not only is it safe, it also has the potential to
                        rejuvenate your body on a cellular level.
                      </i>
                    </p>
                  </>
                }
                liClassName="border-t-neutral-800 border-b-2"
                headerClassName="mt-1 px-2 md:px-0"
              />
              <EmmaFAQItem
                number={4}
                question="I don't have constipation very often, but I do struggle with food allergies."
                answer={
                  <>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        Food allergies are a sign that undigested waste product
                        is leaking into the bloodstream, getting pushed out into
                        the tissues, where it's being seen as a foreign invader.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      This causes an allergic reaction like hives, redness,
                      itching, or swelling. It causes fatigue because your body
                      now has to expend energy to clean it up, and it can also
                      get into the joints causing stiffness and pain too.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      When you see those people that can eat whatever they want
                      and still have a six pack it means they have an extremely
                      strong microbiome.{" "}
                      <b className="font-bold box-border caret-transparent">
                        You see, the human body in its natural form is actually
                        amazing and you can digest almost any food on this
                        planet without distress
                      </b>
                      .
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <i className="italic box-border caret-transparent">
                        But over time, the microbiome becomes degraded, invaders
                        take hold, you lose your ability to process certain
                        foods, and pretty soon you're listing your allergies to
                        the waiter, or avoiding this and that.
                      </i>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      And it has nothing to do with you personally, it's
                      literally a damaged microbiome, it isn't a permanent
                      condition.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        You see, many of our customers have found that after
                        taking Emma their skin problems have started to clear
                        up, and now they enjoy ice cream again…
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      They can have bread again…
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      They can have eggs again…
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      And now food doesn't make them sleepy like it used to.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        You’ll be able to enjoy eating your favorite foods again
                        without digestive discomfort, your mood is improved, you
                        have more mental clarity, more energy and it's really
                        nice.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] font-myriad_pro">
                      Really, the best way to find out if Emma will work for you
                      is to pick one of the packages below and just give it a
                      shot.{" "}
                      <b className="font-bold box-border caret-transparent">
                        Again, you're not really making a decision today, you
                        can try it out, experience the benefits, and THEN decide
                        if it's for you. You're always protected by our ironclad
                        90 day guarantee
                      </b>
                      .
                    </p>
                  </>
                }
                liClassName="border-t-neutral-800 border-b-2"
                headerClassName="mt-1 px-2 md:px-0"
              />
              <EmmaFAQItem
                number={5}
                question="Will Emma help with bloating and constipation?"
                liClassName="border-b-zinc-900 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent p-5 border-b-2"
                headerClassName="relative items-start box-border caret-transparent flex mt-1 px-2 md:px-0"
                answer={
                  <>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        Apart from relieving constipation, Emma is very
                        effective at treating bloating and constipation.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <i className="italic box-border caret-transparent">
                        You see, uncomfortable bloating and constipation
                        primarily come from archaea colonizing the small
                        intestine and producing high levels of methane gas.
                      </i>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        Methane gas slows down peristalsis, which is the
                        scientific term for the time your poop travels through
                        your digestive tract.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      And the more methane gas your body produces, the more
                      “backed up” and bloated you’re going to be.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      Once Emma goes to work and eliminates the
                      methane-producing archaea from your small intestine, it
                      helps restore peristalsis, and gets things moving the way
                      they should again.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      Emma also increases the body’s mucus-producing cells in
                      your intestines to provide a slippery substance to help
                      poop pass through easily while unclogging your colon and
                      eliminating the years of stuck poop.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      So yes, Emma puts an end to painful constipation, bloating
                      and cramping and I really hope you get a chance to
                      experience it for yourself.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] font-myriad_pro">
                      <i className="italic box-border caret-transparent">
                        You might be shocked how well it works for bloating and
                        constipation.
                      </i>
                    </p>
                  </>
                }
              />
              <EmmaFAQItem
                number={6}
                question="Will Emma help with diarrhea?"
                answer={
                  <>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        Diarrhea and constipation are 2 sides of the same coin.
                        If you have diarrhea you also have constipation. I know
                        it might sound counterintuitive, so I'll break it down
                        for you.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        <i className="italic box-border caret-transparent">
                          Archaea and other parasites use your digestive system
                          to suit their own needs. What they do most of the time
                          is slow down peristalsis to increase their own feeding
                          time.
                        </i>
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      And depending on your health, your hormones, and how long
                      you've had the problem, your body will deal with that
                      situation in one of two ways.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      If you're close to the time when the archaea has taken
                      hold, most people's bodies will desperately just try to
                      clear everything out.{" "}
                      <b className="font-bold box-border caret-transparent">
                        That's why some people will experience diarrhea too.
                        It's your body trying to just get rid of the problem
                      </b>
                      .
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      But it's unhealthy to have diarrhea over a long period of
                      time because it causes dehydration. So after a while, your
                      body might give up, let Archaea take over as your body
                      settles into chronic, long term constipation.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      And there's also the hormonal component.{" "}
                      <b className="font-bold box-border caret-transparent">
                        For example, men have a tendency to lean toward
                        diarrhea, while women tend to lean towards constipation
                      </b>
                      . Some women will even alternate between constipation and
                      diarrhea throughout the month with their menstruation
                      cycle.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <i className="italic box-border caret-transparent">
                        And while different people have different responses
                        based on these factors, it doesn't change the fact that
                        you're dealing with an organism who has hijacked your
                        intestines as their own breeding ground.
                      </i>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      Of course these bugs can burrow deep into the folds of
                      your intestines and just flushing out the contents of your
                      bowels won’t necessarily get rid of all of them.{" "}
                      <b className="font-bold box-border caret-transparent">
                        That's why it's important to continue Emma for at least
                        3-4 months
                      </b>
                      .
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        That's why we recommend the 3 or 6 month packages, which
                        also give you the biggest discount as well.
                      </b>
                    </p>
                  </>
                }
                liClassName="border-t-neutral-800 border-b-2"
                headerClassName="mt-1 px-2 md:px-0"
              />
              <EmmaFAQItem
                number={7}
                question="How fast will I see results?"
                answer={
                  <>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        Everybody is different and it really depends on how long
                        archaea have lived inside your body and the amount of
                        damage they’ve caused to your digestive system in that
                        time.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      Overall, many of our customers start to feel relief like
                      better bowel elimination, less bloating, gas and cramps,
                      fewer food sensitivities, and a lift in your mood within
                      the first 2-3 days.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        Some people even say they get relief almost immediately
                        - meaning just a few hours after taking their first
                        dose.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <i className="italic box-border caret-transparent">
                        Other changes like weight loss for example, may happen
                        over time as a byproduct of improving your digestion and
                        cellular processes.
                      </i>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      Remember, your digestion is literally the system that
                      feeds every other system in the body, so there’s no limit
                      to the benefits you may experience.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        It might start in your brain when you start to crave
                        more healthy foods... Or you notice more mental energy,
                        improved focus and clarity as your body rids itself of
                        toxic byproducts...
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      You might notice a reduction in body odor, or bad breath,
                      as your internal methane production decreases as the
                      Archaea and other parasitic bugs are eliminated...
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      You might notice you feel much better after every meal, as
                      your digestion improves and the range of foods you can eat
                      expands,{" "}
                      <b className="font-bold box-border caret-transparent">
                        and your metabolism burns hotter and more effective at
                        turning food into energy…
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      And even though many of these improvements will happen in
                      the first month, your gut flora will continue to improve
                      over the next 12-16 weeks. 
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      You might notice you feel like an entirely new person by
                      that time as you experience many cascading benefits over
                      time.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      You’ll start seeing new metabolic improvements as your
                      body begins to absorb more nutrients, increase your
                      cellular energy, and speed up waste elimination.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        Remember, the best way to see truly find out what
                        benefits are in store for you is to just select a
                        package below and give it a shot. You’re always
                        protected by our industry leading 90-day 100%
                        satisfaction guarantee.
                      </b>
                    </p>
                  </>
                }
                liClassName="border-t-neutral-800 border-b-2"
                headerClassName="mt-1 px-2 md:px-0"
              />
              <EmmaFAQItem
                number={8}
                question="Is Emma available anywhere else for a lower price?"
                answer={
                  <>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        We only sell Emma direct through this website and
                        there’s two very important reasons why we do that.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      The first is quality control.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <i className="italic box-border caret-transparent">
                        Most people don't realize but due to the recent pandemic
                        the FDA has not been able test products inside China.
                      </i>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      And given the recent reports of places like China having
                      much higher levels of mercury, arsenic, and lead, this
                      kind of thing is completely unacceptable.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        So we decided for this premium product, it must be
                        manufactured and tested at one of the state-of-the-art
                        FDA-registered, GMP-certified labs right here in the
                        USA.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      First, they use a technique called Infrared Spectroscopy.
                      Not only are the ingredients tested for quality and
                      safety, they are also tested for purity and potency as
                      well.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      We also do additional quality inspections to make sure
                      there are no heavy metals, no allergens, contaminants, and
                      that all ingredients meet the highest purity standards.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        It's important to make sure that these ingredients
                        retain their full potency, so that the product will
                        actually deliver the benefits we talk about.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <i className="italic box-border caret-transparent">
                        The second reason we only sell direct, is to keep the
                        price affordable for our valued customers.
                      </i>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      If we allowed Emma to be sold in the big natural food
                      stores, the markup required would make the price at least
                      double what it is now.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      For our customers, all that extra markup makes no sense,
                      it’s just added to subsidize the massive nationwide
                      advertising budgets, which would be pointless since you
                      can already order Emma from the comfort of your home
                      directly from this website.
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] mb-5 font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        Also, please keep in mind that this one-time special
                        offer is good today only.
                      </b>
                    </p>
                    <p className="text-zinc-900 text-lg box-border caret-transparent leading-[27px] font-myriad_pro">
                      <b className="font-bold box-border caret-transparent">
                        <i className="italic box-border caret-transparent">
                          If you leave this page and decide you're going to get
                          it tomorrow, we can’t guarantee Emma will still be
                          available.
                        </i>
                      </b>
                    </p>
                  </>
                }
                liClassName="border-t-neutral-800 border-b-2"
                headerClassName="mt-1 px-2 md:px-0"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
