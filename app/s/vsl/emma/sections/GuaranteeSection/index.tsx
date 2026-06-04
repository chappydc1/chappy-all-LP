export const GuaranteeSection = () => {
  return (
    <div className="bg-stone-100 box-border">
      <div className="box-border max-w-[1440px] m-auto pt-40 pb-12 px-2 md:px-0">
        <div className="bg-white box-border max-w-[830px] w-full m-auto border-8 border-solid reveal-scale">
          <img
            src="/images/emma/guaranteed.webp"
            className="box-border mt-[-110px] mb-auto mx-auto"
          />
          <div className="box-border">
            <h3 className="text-emerald-800 text-xl font-bold box-border leading-10 text-center uppercase mb-2 font-myriad_pro">
              Full Industry Best 90 Day No Questions Asked
            </h3>
            <h1 className="text-red-500 text-[32px] font-black box-border leading-8 text-center uppercase m-auto font-myriad_pro">
              100% Money Back Satisfaction Guarantee
            </h1>
            <div className="text-emerald-950 text-lg box-border leading-[23.4px] max-w-[679px] w-full m-auto pt-4 px-4 font-myriad_pro md:px-0">
              <p className="box-border mb-4">
                You are going to love what Emma does for your gut. You'll love
                the regular poops, the relief of complete bowel elimination and
                the trim waistline that comes from reduced bloating.
              </p>
              <p className="box-border mb-4">
                Otherwise, just send it back for a full, no questions asked
                refund. You can even send back an empty bottle. Just call us at{" "}
                <b className="font-bold box-border">1-888-808-EMMA (3662)</b>
                {" "}and our friendly customer support team will take care of you,
                promptly.
              </p>
              <p className="box-border mb-4">
                Your satisfaction is of utmost importance to us. It's not just
                our company creed but a personal policy. We are here to support
                your journey to better health and an improved quality of life.
              </p>
            </div>
          </div>
        </div>

        {/* Lean Belly Shakes Bonus */}
        <div className="box-border max-w-[870px] w-full mt-12 mb-auto mx-auto reveal">
          <div className="bg-emerald-800 box-border py-6 rounded-t-[5px]" style={{ background: "linear-gradient(rgb(0,0,0), rgba(0, 100, 80, 0.9))" }}>
            <h1 className="text-yellow-200 text-[26px] font-black box-border leading-[26px] text-center mb-2 font-myriad_pro">
              NEW! "Lean Belly Shakes"
            </h1>
            <h2 className="text-white text-xl font-bold box-border leading-5 text-center mb-2 font-myriad_pro">
              Yours FREE with any multipack purchase - Instant access
            </h2>
          </div>
          <div className="bg-white bg-none bg-no-repeat bg-size-[272px] shadow-[rgba(0,0,0,0.4)_0px_4px_10px_0px] box-border flex flex-wrap max-w-[870px] w-full bg-right m-auto px-2 rounded-b-[5px] md:bg-[url('/images/emma/leanbellyshakebook.png')]">
            <div className="box-border block shrink-0 max-w-[485px] text-center w-full m-auto pt-6 px-3 md:hidden md:w-6/12">
              <img
                src="/images/emma/leanbellyshakebook.webp"
                className="box-border inline max-w-[220px] w-full"
              />
            </div>
            <div className="text-black text-lg box-border shrink-0 leading-[27px] max-w-[485px] w-full m-auto px-3 py-6 font-myriad_pro md:m-0">
              <p className="box-border mb-4">Lean Belly Shakes is a delicious way to help slim down and clean out your gut.</p>
              <p className="box-border mb-4">Each one of the Shakes in this recipe book is specially designed to gently eliminate waste, while nourishing your body.</p>
              <p className="box-border mb-4">See a flatter tummy in the mirror in just a week with these creamy smoothies!</p>
              <p className="box-border mb-4">Everyone gets cravings for sweet things. Simply blend up one of these shakes to satisfy your sweet tooth and lean out at the same time.</p>
              <p className="box-border mb-4">Ramp up your metabolism with our Blueberry Açaí Smoothie, the Happy Belly Green Smoothie, Coconut Mint Smoothie or Creamy Turmeric Smoothie!</p>
              <p className="box-border mb-4">Looking to accelerate your gut restoration progress? Just try our Strawberry and Blueberry Chia Smoothie, or Heavenly Green Smoothie.</p>
              <p className="box-border mb-4">Trying to flatten your tummy for an important wedding or vacation? Just blend up our Creamy Pumpkin Chia Smoothie, Avocado and Lime Shake-Up, Choco Avo Milkshake or Cinnamon Keto Smoothie and blast away that belly fat. Fast!</p>
              <p className="box-border mb-4">...And it's free with ANY multipack purchase on this page today.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="box-border max-w-[870px] w-full mt-12 mb-auto mx-auto">
          <span className="text-black text-[28px] font-black box-border block leading-[33.6px] text-center font-myriad_pro reveal">
            Your Story Can Be Next
          </span>
          <div className="box-border flex flex-wrap mt-12 -mx-3">
            {[
              { img: "ava1", name: "Natasha K", title: '"This has given me my life back..."', text: '"I have struggled with IBS for 6+ years now and this has made my symptoms much more manageable. I don\'t have an urgency to go all the time anymore and I don\'t feel sick like I used to. My body digests at a normal pace, and in turn, my anxiety has slowly started to decrease in regards to my bathroom habits. I look fresher and more vibrant and in some ways, this has given me my life back."' },
              { img: "lucy", name: "Lucy C", title: '"The feeling I get when it enters into my body it\'s better than coffee..."', text: '"Taking supplements is completely new to me. I\'ve made it a habit to drink this first thing in the morning like the instructions recommend. The feeling I get when it enters into my body, it\'s better than coffee! I\'m enjoying more regular bathroom visits which is helping me get out more and do things."' },
            ].map((t, i) => (
              <div key={t.name} className={`box-border shrink-0 max-w-full w-full px-3 md:w-6/12 reveal-left`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="box-border">
                  <img src={`/images/emma/${t.img}.webp`} className="box-border inline" alt={t.name} />
                  <div className="box-border inline-block align-middle">
                    <span className="text-emerald-800 text-lg font-bold box-border block leading-[18px] font-myriad_pro">{t.name}</span>
                    <span className="text-emerald-800 text-sm box-border leading-[16.8px] font-myriad_pro">Verified customer</span>
                    <img src="/images/emma/check-mark.webp" className="box-border inline w-[17px]" />
                  </div>
                  <img src="/images/emma/storystars.webp" className="box-border float-right pt-6" />
                </div>
                <div className="bg-white box-border mt-1 p-6 rounded-b-sm">
                  <h3 className="text-black text-xl italic font-bold box-border mb-2 font-myriad_pro">{t.title}</h3>
                  <span className="text-black box-border block pt-2 font-myriad_pro">{t.text}</span>
                </div>
              </div>
            ))}
            {[
              { img: "amberlyn", name: "Amberlyn F", title: '"My stomach is noticeably flatter..."', text: '"I have a lot of stomach issues and taking this each day with Emma has all but erased my issues. I noticed a difference within the first few days. To me, my stomach is noticeably flatter. Thankfully no more bloat and it\'s helping to repair my digestive system."' },
              { img: "patricia", name: "Patricia G", title: '"No bloat and it\'s helping clean out my body in a natural way (Pooping!)..."', text: '"I got this product recently and love it. Supreme Greens and Emma are a great combination. No bloat and it\'s helping clean out my body in a natural way (Pooping!) I feel so great! I\'ve also stopped craving sugar. Even my husband has noticed how much it\'s helped me and wants his own supply."' },
            ].map((t, i) => (
              <div key={t.name} className="box-border shrink-0 max-w-full w-full px-3 md:w-6/12 mt-12 reveal-right" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="box-border">
                  <img src={`/images/emma/${t.img}.webp`} className="box-border inline" alt={t.name} />
                  <div className="box-border inline-block align-middle">
                    <span className="text-emerald-800 text-lg font-bold box-border block leading-[18px] font-myriad_pro">{t.name}</span>
                    <span className="text-emerald-800 text-sm box-border leading-[16.8px] font-myriad_pro">Verified customer</span>
                    <img src="/images/emma/check-mark.webp" className="box-border inline w-[17px]" />
                  </div>
                  <img src="/images/emma/storystars.webp" className="box-border float-right pt-6" />
                </div>
                <div className="bg-white box-border mt-1 p-6 rounded-b-sm">
                  <h3 className="text-black text-xl italic font-bold box-border mb-2 font-myriad_pro">{t.title}</h3>
                  <span className="text-black box-border block pt-2 font-myriad_pro">{t.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
