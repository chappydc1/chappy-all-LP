export type ArticleContentProps = {
  variant:
    | "disclaimer"
    | "glp1-accessible"
    | "how-it-works"
    | "what-it-does"
    | "empty"
    | "weekly-injection";
};

export const ArticleContent = (props: ArticleContentProps) => {
  if (props.variant === "disclaimer") {
    return (
      <div className="relative box-border caret-transparent flex shrink-0 min-h-[auto] min-w-[auto] text-zinc-700 text-xs flex-col leading-4 font-georgia">
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto]">
          <p className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <em className="italic box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              Our partners offer doctor-guided, compounded weight loss
              medications. These treatments differ from FDA-approved
              products.{" "}
            </em>
            <em className="text-black italic box-content caret-black md:text-zinc-700 md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              Compounded versions are prepared by pharmacies and are not
              FDA-approved or verified for safety, efficacy, or quality.{" "}
            </em>
            <em className="italic box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              Your clinician will help determine if this approach is right for
              you and results can vary.{" "}
            </em>
          </p>
        </span>
      </div>
    );
  }

  if (props.variant === "glp1-accessible") {
    return (
      <div className="relative box-border caret-transparent flex shrink-0 min-h-[auto] min-w-[auto] text-zinc-700 text-lg flex-col leading-6 mt-6 font-georgia md:text-xl md:leading-[26px]">
        <span className="text-lg box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-xl md:leading-[26px]">
          <h3 className="text-black text-[18.72px] font-bold box-content caret-black leading-[normal] mb-0 font-times md:text-neutral-800 md:text-2xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-[14.4px] md:scroll-m-0 md:scroll-p-[auto] md:font-euclidcircularb">
            GLP-1s Are Now Accessible to Everyone
          </h3>
          <p className="text-base box-content caret-black leading-[normal] mb-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-4 md:scroll-m-0 md:scroll-p-[auto]">
            Did you know that{" "}
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              more than 70% of American adults struggle with weight?
            </strong>
          </p>
          <p className="text-base box-content caret-black leading-[normal] my-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:my-4 md:scroll-m-0 md:scroll-p-[auto]">
            And according to the CDC, nearly half of U.S. adults are actively
            trying to lose weight at any given time, yet most fail to keep it
            off.
          </p>
          <p className="text-base box-content caret-black leading-[normal] my-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:my-4 md:scroll-m-0 md:scroll-p-[auto]">
            In 2026,{" "}
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              a new generation of doctor-prescribed GLP-1 medications
            </strong>{" "}
            is taking America by storm. These compounded medications, prepared
            by licensed pharmacies are a lower-cost option than FDA-approved
            brands.
          </p>
          <p className="text-base box-content caret-black leading-[normal] my-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:my-4 md:scroll-m-0 md:scroll-p-[auto]">
            These GLP-1 medications are now available through{" "}
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              doctor-supported online platforms
            </strong>{" "}
            in just a few minutes. And they can be delivered to your door in
            just a few days.
          </p>
          <p className="text-base box-content caret-black leading-[normal] my-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:my-4 md:scroll-m-0 md:scroll-p-[auto]">
            Many even offer free medical consultations and weight loss
            guarantees.{" "}
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              Real people are seeing life-changing results
            </strong>{" "}
            without restrictive diets or endless workouts.
          </p>
          <p className="text-base box-content caret-black leading-[normal] my-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:my-4 md:scroll-m-0 md:scroll-p-[auto]">
            For the first time,{" "}
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              medical weight loss
            </strong>{" "}
            is actually within reach for everyday Americans.
          </p>
          <p className="text-base box-content caret-black leading-[normal] my-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:my-4 md:scroll-m-0 md:scroll-p-[auto]">
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              Forbes Health has ranked the best providers
            </strong>{" "}
            for pricing, patient care, effectiveness and ease of use so you can
            cut through the scams and noise to make an informed decision when
            choosing an affordable GLP-1 weight loss plan.
          </p>
          <h3 className="text-black text-[18.72px] font-bold box-content caret-black leading-[normal] my-0 font-times md:text-neutral-800 md:text-2xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mt-[38.4px] md:mb-[14.4px] md:scroll-m-0 md:scroll-p-[auto] md:font-euclidcircularb">
            How the Providers Were Evaluated
          </h3>
          <p className="text-base box-content caret-black leading-[normal] mb-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-4 md:scroll-m-0 md:scroll-p-[auto]">
            To identify the top GLP-1 weight loss programs for 2026, we analyzed
            a wide range of popular online options, focusing on which platforms
            deliver meaningful results without unnecessary cost or complexity.
          </p>
          <p className="text-base box-content caret-black leading-[normal] my-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:my-4 md:scroll-m-0 md:scroll-p-[auto]">
            Each provider was assessed using{" "}
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              four core criteria
            </strong>
            :
          </p>
          <ul className="text-base box-content caret-black leading-[normal] list-outside my-0 pl-10 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:list-inside md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:my-[25px] md:pl-4 md:scroll-m-0 md:scroll-p-[auto]">
            <li className="box-content caret-black mb-0 pl-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-2.5 md:pl-[7.5px] md:scroll-m-0 md:scroll-p-[auto]">
              <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                Pricing and transparency:
              </strong>{" "}
              how competitively priced each program is and whether costs are
              clearly stated upfront, with no surprise charges
            </li>
            <li className="box-content caret-black my-0 pl-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:my-2.5 md:pl-[7.5px] md:scroll-m-0 md:scroll-p-[auto]">
              <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                Patient care and access:
              </strong>{" "}
              the level of medical oversight, ongoing support, and how easily
              users can connect with a licensed clinician
            </li>
            <li className="box-content caret-black my-0 pl-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:my-2.5 md:pl-[7.5px] md:scroll-m-0 md:scroll-p-[auto]">
              <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                Results and effectiveness:
              </strong>{" "}
              the strength of clinical guidance, treatment structure, and
              consistency of reported user outcomes
            </li>
            <li className="box-content caret-black mt-0 pl-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mt-2.5 md:pl-[7.5px] md:scroll-m-0 md:scroll-p-[auto]">
              <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                Overall experience:
              </strong>{" "}
              how straightforward it is to enroll, receive medication, and
              follow the program over time
            </li>
          </ul>
          <p className="text-base box-content caret-black leading-[normal] my-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:my-4 md:scroll-m-0 md:scroll-p-[auto]">
            Programs were compared using publicly available details and
            real-world user feedback to determine which ones offer the strongest
            balance of care, results, and value.
          </p>
          <p className="text-base box-content caret-black leading-[normal] my-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:my-4 md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://track.revoffers.com/aff_c?offer_id=1265&aff_id=11750&url_id=11887&source=149&aff_sub3=SL8&aff_sub=FAWTVWgUndJ8nY5i7OJ8AN_ZTn4BNTD4uJa&aff_sub2=%2Fhealth%2Fl%2Fbest-glp-1-medications-price%2F"
              className="text-black box-content caret-black md:text-gray-500 md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:underline"
            >
              ﻿
              <span className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                MEDVi
              </span>
              ﻿
            </a>{" "}
            ranked as the best overall provider because it is the{" "}
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              best priced option{" "}
            </strong>
            at just $149/month ($33/week). It offers{" "}
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              exceptional customer service
            </strong>{" "}
            and{" "}
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              unlimited medical consultations
            </strong>{" "}
            at no extra cost. Its simplicity, speed, and patient-first approach
            make MEDVi one of the most accessible choices for anyone ready to
            begin their weight loss journey.
          </p>
          <p className="text-base box-content caret-black leading-[normal] mt-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mt-4 md:scroll-m-0 md:scroll-p-[auto]">
            <a
              href="https://remedymeds.com/?rm_campaign=FORBES120&utm_campaign=25&utm_source=theoffer&toclid=TO-6atkiOdJB3iNglM0CVdEIZ&sub2=SL2&sub1=FAWTVWgUndJ8nY5i7OJ8AN_hud0Jvwl0DdY&sub3=%2Fhealth%2Fl%2Fbest-glp-1-medications-price%2F"
              className="text-black box-content caret-black md:text-gray-500 md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] hover:underline"
            >
              ﻿
              <span className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                Remedy Meds
              </span>
              ﻿
            </a>{" "}
            also stood out as an excellent choice in 2026. It combines{" "}
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              affordable, doctor-guided care
            </strong>{" "}
            with an industry-leading{" "}
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              Lose 15% of your body weight or your money back guarantee
            </strong>
            , setting a new standard for accountability and results in medical
            weight loss.
          </p>
        </span>
      </div>
    );
  }

  if (props.variant === "how-it-works") {
    return (
      <div className="relative box-border caret-transparent flex shrink-0 min-h-[auto] min-w-[auto] flex-col">
        <div className="items-stretch box-border caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] md:[align-items:normal] md:flex-row">
          <div className="items-stretch box-border caret-transparent flex flex-col leading-[normal] min-h-[auto] min-w-[auto] w-full md:w-[calc(50%_-_10px)]">
            <div className="items-stretch box-border caret-transparent flex flex-col grow min-h-[auto] min-w-[auto]">
              <div className="relative text-zinc-700 text-lg box-border caret-transparent flex flex-col shrink-0 leading-6 min-h-[auto] min-w-[auto] mt-6 mb-4 font-georgia md:text-xl md:leading-[26px]">
                <span className="text-lg box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-xl md:leading-[26px]">
                  <h3 className="text-black text-[18.72px] font-bold box-content caret-black leading-[normal] mb-0 font-times md:text-neutral-800 md:text-2xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-[14.4px] md:scroll-m-0 md:scroll-p-[auto] md:font-euclidcircularb">
                    <strong className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      How Do GLP-1 Medications Work?
                    </strong>
                  </h3>
                  <p className="text-base box-content caret-black leading-[normal] mb-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-4 md:scroll-m-0 md:scroll-p-[auto]">
                    The mechanism behind Semaglutide and Tirzepatide is the same
                    as weight loss "miracle drugs" like Ozempic® and Wegovy®.
                  </p>
                  <p className="text-base box-content caret-black leading-[normal] mt-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mt-4 md:scroll-m-0 md:scroll-p-[auto]">
                    By mimicking the hormone GLP-1, these medications regulate
                    hunger more effectively, help you feel fuller longer, reduce
                    cravings, and even boost your metabolism.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="items-stretch box-border caret-transparent flex flex-col leading-[normal] min-h-[auto] min-w-[auto] w-full ml-0 md:w-[calc(50%_-_10px)] md:ml-5">
            <div className="items-stretch box-border caret-transparent flex flex-col grow min-h-[auto] min-w-[auto]">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 max-w-[626px] min-h-5 min-w-5 w-full overflow-hidden mt-8 mb-auto mx-auto rounded-2xl md:max-w-[396px]">
                <picture className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto]">
                  <img
                    role="presentation"
                    src="https://c.animaapp.com/mnsdpkiu3I801d/assets/21.jpg"
                    sizes="(max-width: 638px) 93vw,  (max-width: 998px) 40vw, 29vw"
                    className="absolute box-border caret-transparent h-full max-w-full object-contain align-baseline w-full left-0 top-0"
                  />
                </picture>
                <div className="text-[0px] box-border caret-transparent min-h-[auto] min-w-[auto] pointer-events-none w-full pt-[60%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "what-it-does") {
    return (
      <div className="relative box-border caret-transparent flex shrink-0 min-h-[auto] min-w-[auto] text-zinc-700 text-lg flex-col leading-6 mt-6 font-georgia md:text-xl md:leading-[26px]">
        <span className="text-lg box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-xl md:leading-[26px]">
          <h3 className="text-black text-[18.72px] font-bold box-content caret-black leading-[normal] mb-0 font-times md:text-neutral-800 md:text-2xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-[14.4px] md:scroll-m-0 md:scroll-p-[auto] md:font-euclidcircularb">
            <strong className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              What it Does:
            </strong>
          </h3>
          <p className="text-base box-content caret-black leading-[normal] mb-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-4 md:scroll-m-0 md:scroll-p-[auto]">
            🍽️
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              {" "}
              Controls Appetite:{" "}
            </strong>
            The medications send stronger fullness signals to your brain,
            helping you feel satisfied with smaller portions and fewer cravings.
          </p>
          <p className="text-base box-content caret-black leading-[normal] my-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:my-4 md:scroll-m-0 md:scroll-p-[auto]">
            🔥
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              {" "}
              Burns Fat Efficiently:{" "}
            </strong>
            <span className="text-black box-content caret-black md:text-zinc-700 md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              These medications act on GLP-1 receptors that play a role in
              appetite and glucose regulation.
            </span>
          </p>
          <p className="text-base box-content caret-black leading-[normal] mt-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[26px] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mt-4 md:scroll-m-0 md:scroll-p-[auto]">
            ⏳
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              {" "}
              Keeps You Full Longer:{" "}
            </strong>
            Slowed digestion extends feelings of fullness, reducing the urge to
            snack and making it easier to stay on track.
          </p>
        </span>
      </div>
    );
  }

  if (props.variant === "empty") {
    return (
      <div className="relative box-border caret-transparent flex shrink-0 min-h-[auto] min-w-[auto] flex-wrap"></div>
    );
  }

  if (props.variant === "weekly-injection") {
    return (
      <div className="relative box-border caret-transparent flex shrink-0 min-h-[auto] min-w-[auto] text-zinc-700 text-lg flex-col leading-6 mt-2 font-georgia md:text-xl md:leading-[26px]">
        <span className="text-lg box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-xl md:leading-[26px]">
          <p className="box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] text-base leading-[normal] md:text-xl md:leading-[26px]">
            <strong className="font-bold box-content caret-black md:aspect-auto md:box-border md:caret-transparent md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              Just one weekly injection helps your body work smarter for steady,
              sustainable weight loss, by using your body's own biochemical
              processes to work more efficiently.
            </strong>
          </p>
        </span>
      </div>
    );
  }

  return null;
};
