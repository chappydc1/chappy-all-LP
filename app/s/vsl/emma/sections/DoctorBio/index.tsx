export const EmmaDoctorBio = () => {
  return (
    <div className="bg-stone-100 box-border w-full overflow-hidden">
      {/* Mobile doctor profile */}
      <div className="bg-white box-border block max-w-[1440px] m-auto pt-2.5 px-2 md:hidden md:px-0 reveal">
        <div className="box-border w-full pb-2.5 px-4 md:w-[204.8px] md:px-0">
          <div className="box-border gap-x-2.5 flex flex-row gap-y-2.5 md:flex-col">
            <div className="box-border min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
              <img
                src="/images/emma/drginasam.webp"
                className="box-border inline h-[81.96px] w-[81.96px]"
              />
            </div>
            <div className="box-border flex flex-col justify-center min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
              <span className="text-white text-[13.11px] font-semibold bg-red-500 box-border block leading-[19.665px] text-nowrap w-[175px] px-1 rounded-sm font-myriad_pro">
                Top Gastroenterologist 2024
              </span>
              <span className="text-teal-800 text-2xl font-bold box-border block leading-9 underline font-myriad_pro">
                Dr. Gina Sam M.D
              </span>
            </div>
          </div>
          <p className="text-lg box-border leading-[27px] mb-4 font-myriad_pro md:text-[13px] md:leading-[19.5px]">
            <b className="text-lg font-bold box-border leading-[27px] md:text-[13px] md:leading-[19.5px]">
              Dr. Gina Sam, MD, is a leading NYC gastroenterologist and former
              director of the Mount Sinai Gastrointestinal Motility Center
            </b>
            . Over her 20-year career, Dr. Sam has specialized in treating
            digestive and metabolic disorders, founding the Institute of
            Gastrointestinal Motility Disorders and Integrative Health in New
            York City.{" "}
            <em className="text-lg italic box-border leading-[27px] md:text-[13px] md:leading-[19.5px]">
              Dr. Sam&#39;s research has positioned her at the forefront of
              understanding{" "}
              <b className="text-lg font-bold box-border leading-[27px] md:text-[13px] md:leading-[19.5px]">
                obesity, fatigue and other metabolic dysfunctions.
              </b>
            </em>
          </p>
        </div>
      </div>

      <div className="box-border max-w-[1440px] m-auto pt-0 px-2 md:mt-0 md:pt-4 md:px-0">
        {/* Comments box */}
        <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.15)_0px_4px_4px_0px] box-border max-w-none mt-8 mx-[13px] px-[15px] py-10 font-helvetica md:max-w-[838.2px] md:mt-0 md:mx-auto md:px-[53px] reveal">
          <span className="text-black text-[15.84px] font-bold box-border leading-[23.76px] md:text-[18.48px] md:leading-[27.72px]">
            20 Comments
          </span>
          <div className="box-border gap-x-4 flex flex-col gap-y-4 border-slate-700/10 my-[15px] pt-0 pb-[15px] border-b border-t border-solid md:gap-x-5 md:gap-y-5 md:mt-[30px] md:py-[30px]">
            {[
              { name: "Emily", img: "commemily", comment: "Wow, just wow. This video completely changed my understanding of digestion. If you've been struggling with bloating or constipation, you *need* to watch this." },
              { name: "Josh", img: "commjosh", comment: "All these years, I thought fiber was the solution. Dr. Sam blew my mind with her explanation of what's really going on in the gut. Total eye-opener." },
              { name: "Ava", img: "commava", comment: "I've been suffering from digestive issues for ages, and this video finally gave me the answers I've been searching for. This info could change lives. The little section about parasites was crazy." },
              { name: "Matthew", img: "commmatthew", comment: "Just finished watching—never realized how much my gut health was impacting my energy levels. I'm making changes right away. 10/10 video." },
              { name: "Sophia", img: "commsophia", comment: "Dr. Sam's 7-second ritual is a game-changer. My bloating is already better, and I've only been trying it for a few days." },
              { name: "Leo", img: "commleo", comment: "This video explains everything that no other doctor told me. I thought I knew about gut health, but this just took it to another level. The thing she said at the end about toxins in your blood was mind blowing. Highly recommend." },
              { name: "Grace", img: "commgrace", comment: "Honestly, this video is a must-watch for anyone struggling with their digestion. Dr. Sam breaks it down so simply. I can't believe I was doing everything wrong." },
              { name: "James", img: "commjames", comment: "I was skeptical at first, but this blew me away. So much valuable info packed into one video. I stopped eating the 3 foods she mentioned and my stomach's been thanking me ever since." },
              { name: "Samantha", img: "commsamantha", comment: "This totally changed my mindset about gut health. I had no idea that constipation could be linked to so many other problems. Thanks, Dr. Sam." },
              { name: "Oliver", img: "commoliver", comment: "If you're tired of feeling sluggish, bloated, and stuck, watch this video NOW. It's honestly the best thing I've seen on digestive health." },
              { name: "Megan", img: "commmegan", comment: "I had no idea parasites could be living in my gut, wreaking havoc on my health. This video opened my eyes in ways I never expected. You HAVE to see it!" },
              { name: "Noah", img: "commnoah", comment: "Just finished the video… I'm speechless. The ending left me totally shocked. I never thought my gut was connected to all these issues." },
              { name: "Isabella", img: "commisabella", comment: "The part about parasites in the gut seriously blew my mind. I've never heard anyone explain it like this before. Everyone needs to watch this." },
              { name: "Ryan", img: "commryan", comment: "The way Dr. Sam connects gut health to almost every other part of the body is insane. The last few minutes of the video are a real eye-opener. Don't miss it!" },
              { name: "Jessica", img: "commjessica", comment: "If you think your digestive issues are just 'normal,' watch this video. Dr. Sam breaks down why it could be something way more serious. I'm rethinking everything!" },
              { name: "Alex", img: "commalex", comment: "What she said about parasites freaked me out at first, but the solutions are so simple and natural. This video is a must-watch if you want to take control of your health." },
              { name: "Ella", img: "commella", comment: "I thought I knew everything about gut health, but the end of this video? Wow. It completely turned everything I thought I knew upside down." },
              { name: "Tyler", img: "commtyler", comment: "I've watched tons of health videos, but the last 5 minutes of this one were next-level. You won't believe what Dr. Sam reveals at the end!" },
              { name: "Chloe", img: "commchloe", comment: "I've always struggled with bloating and fatigue. Turns out, the root cause could be parasites? I never would have known if I didn't watch this video!" },
              { name: "Zack", img: "commzack", comment: "Just finished watching and the ending completely floored me. There's so much more to gut health than I realized. Dr. Sam really knows her stuff." },
            ].map((c, i) => (
              <div key={c.name} className={`items-start box-border gap-x-[13.2px] flex gap-y-[13.2px] reveal${i === 0 ? " mt-4" : ""}`} style={{ transitionDelay: `${Math.min(i * 0.04, 0.5)}s` }}>
                <img
                  src={`/images/emma/${c.img}.webp`}
                  className="box-border w-[44.35px] md:w-[63.36px] flex-shrink-0"
                  alt={c.name}
                />
                <div className="box-border">
                  <span className="text-indigo-800 text-[15.84px] font-bold box-border block leading-[23.76px]">
                    {c.name}
                  </span>
                  <span className="text-black text-[15.84px] box-border leading-[23.76px]">
                    {c.comment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* As Seen On */}
        <div className="box-border max-w-[780px] w-full m-auto reveal">
          <div className="border-l-neutral-800 border-r-neutral-800 box-border text-center mt-6 py-3 border-y-black/50 border-b border-t border-solid">
            <span className="text-black/50 text-xl font-bold box-border leading-[30px] font-myriad_pro">
              As Seen On
            </span>
            <div className="box-border flex flex-wrap -mx-3 pt-6">
              <div className="box-border shrink-0 max-w-full w-full px-3">
                <img
                  src="/images/emma/asseenond.webp"
                  className="box-border hidden max-w-[772px] w-full m-auto md:block"
                />
                <img
                  src="/images/emma/asseenonm.webp"
                  className="box-border block max-w-[343px] w-full m-auto md:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
