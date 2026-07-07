const storyRail = [
  {
    title:
      "Blood Sugar Too High? Doctors Are Talking About This Simple Morning Routine",
    imageClass: "object-left",
  },
  {
    title:
      "Wellness Experts Identify the Kitchen Habit That Supports Daily Metabolic Balance",
    imageClass: "object-right",
  },
];

const headlineImage =
  "/images/today/headline.jpg";
const interviewerImage =
  "/images/today/entrevistador.webp";
const doctorImage =
  "/images/today/doutor.webp";
const videoGif =
  "/images/today/gif_video.gif";
const ctaHref =
  "https://portal.sugarhealthnotice.com/preclick?clickid=6a025c130a098620e6cc27ab&rtkck=1778684153";

const sponsoredStories = [
  {
    image:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=700&q=80",
    title: "Blood Sugar Too High? Try This Simple Evening Routine",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&w=700&q=80",
    title: "Readers With High Sugar Levels Are Looking At This",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80",
    title: "Manage Your Sugar Routine With This 15-Day Challenge",
  },
  {
    image:
      "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?auto=format&fit=crop&w=700&q=80",
    title: "Blood Sugar Is Not Just About Sweets: What Readers Learned",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
    title: "Is Your Sugar Level Increasing? Read This First",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80",
    title: "Simple Kitchen Habits People Are Adding This Week",
  },
];

const readerComments = [
  {
    name: "Madelyn Brown",
    initials: "MB",
    text:
      "My glucose routine feels much steadier after three weeks. Feeling more in control is a blessing.",
    time: "2h",
    reactions: 23,
  },
  {
    name: "Emma Miller",
    initials: "EM",
    text:
      "Just watched the video. I have never heard anyone explain GLP-1 like that before. Everything makes so much sense now.",
    time: "35 min",
    reactions: 17,
  },
  {
    name: "Charlotte Wilson",
    initials: "CW",
    text:
      "I have tried supplements, diets, and constant exercise. This finally made the daily routine feel simple enough to keep doing.",
    time: "7 min",
    reactions: 11,
  },
  {
    name: "Sofia Mia",
    initials: "SM",
    text:
      "If this method helps me eat my favorite foods again with less fear, it will already be worth it.",
    time: "6 min",
    reactions: 32,
  },
];

export const TodayAdvertorialArticle = () => {
  return (
    <article className="box-border caret-transparent max-w-[1284px] outline-[3px] w-full mx-auto px-5 md:px-6">
      <div className="box-border caret-transparent outline-[3px] max-w-[860px]">
        <div className="text-zinc-800 text-sm font-extrabold tracking-[0.8px] leading-5 uppercase mb-5">
          Health
        </div>

        <h1 className="text-black text-[40px] font-black leading-[43px] outline-[3px] mb-4 font-serif md:text-[48px] md:leading-[52px] lg:text-[56px] lg:leading-[60px]">
          Hollywood Icons Are Talking About Blood Sugar Support — And the Daily
          Habit Getting Attention.
        </h1>

        <div className="border-t border-zinc-200 box-border caret-transparent flex items-center gap-x-3 outline-[3px] pt-4 mb-6">
          <div className="text-white text-xs font-bold bg-orange-600 box-border caret-transparent flex h-9 w-9 items-center justify-center outline-[3px] rounded-full">
            SG
          </div>
          <div className="box-border caret-transparent outline-[3px]">
            <div className="text-zinc-900 text-sm font-bold leading-5">
              Savannah Guthrie
            </div>
            <div className="text-zinc-500 text-xs leading-4">Lead Anchor</div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 outline-[3px] md:grid-cols-[minmax(0,856px)_214px] lg:grid-cols-[minmax(0,856px)_260px]">
        <figure className="box-border caret-transparent outline-[3px]">
          <img
            src={headlineImage}
            alt="A celebrity portrait beside a hospital room scene"
            className="box-border caret-transparent h-auto max-w-full object-cover outline-[3px] w-full rounded-[3px]"
          />
        </figure>

        <aside className="box-border caret-transparent grid content-start gap-8 outline-[3px]">
          {storyRail.map((story) => (
            <a
              key={story.title}
              className="box-border caret-transparent block outline-[3px]"
            >
              <img
                src={headlineImage}
                alt=""
                className={`aspect-[16/9] box-border caret-transparent max-w-full object-cover outline-[3px] w-full mb-3 ${story.imageClass}`}
              />
              <h2 className="text-zinc-900 text-[15px] font-extrabold leading-5 outline-[3px]">
                {story.title}
              </h2>
            </a>
          ))}
        </aside>
      </div>

      <div className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-12 text-zinc-800 text-lg leading-8">
        <p className="mb-8">
          What do Halle Berry, Tom Hanks, and Randy Jackson have in common?
        </p>

        <p className="mb-8">
          They have all publicly talked about the challenges of Type 2 Diabetes:
          <br />
          <strong className="font-extrabold text-zinc-950">
            blood sugar spikes, medication routines, and the constant worry
            about serious complications.
          </strong>
        </p>

        <p className="mb-8">So, if you struggle with high blood sugar...</p>

        <p className="mb-8">
          <strong className="font-extrabold text-zinc-950">
            ...You are NOT alone.
          </strong>
        </p>

        <p className="mb-8">
          Just seen on TV:{" "}
          <strong className="font-extrabold text-zinc-950">Dr. Philip</strong>{" "}
          shared a 2-minute homemade recipe that celebrities over 40 are using
          to support healthier blood sugar habits and feel more in control of
          their daily routine.
        </p>
        <p>
          Take advantage of this homemade recipe to support sharper focus and
          steadier energy before it is gone!
        </p>
      </div>

      <figure className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-12">
        <img
          src={interviewerImage}
          alt="A TV interviewer speaking during a health segment"
          className="box-border caret-transparent h-auto max-w-full object-cover outline-[3px] w-full rounded-md"
        />
      </figure>

      <div className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-10 text-zinc-800 text-lg leading-8">
        <p>
          <strong className="font-extrabold text-zinc-950">
            Interviewer:
          </strong>{" "}
          "Hey, Dr. Phil, my dad is turning 68 next week. Type 2 diabetes is
          taking a huge toll on him — his glucose spiked to almost 300 last week
          and he nearly passed out in the middle of the street. Do you have any
          tips, Dr. Phil, to manage this after 60?"
        </p>
      </div>

      <figure className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-12">
        <img
          src={doctorImage}
          alt="Dr. Philip speaking during a studio interview"
          className="box-border caret-transparent h-auto max-w-full object-cover outline-[3px] w-full rounded-md"
        />
      </figure>

      <div className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-10 text-zinc-800 text-lg leading-8">
        <p className="mb-8">
          <strong className="font-extrabold text-zinc-950">
            Dr. Philip Calvin McGraw (Dr. Phil):
          </strong>{" "}
          “Sanjay, people always ask me: 'Dr. Phil, my glucose won't go down,
          I'm stuck on insulin — is there a magic pill?'
        </p>

        <p className="mb-8">
          But here is the naked truth:{" "}
          <strong className="font-extrabold text-zinc-950">
            you don't need painful injections, restrictive diets, or to exhaust
            yourself exercising!
          </strong>
        </p>

        <p>
          Many researchers now look beyond age, genetics, and carbs alone,
          focusing instead on how metabolic stress can interfere with the
          body's natural GLP-1 response and healthy glucose balance.
        </p>
      </div>

      <figure className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-12">
        <img
          src={interviewerImage}
          alt="A TV interviewer asking a follow-up question"
          className="box-border caret-transparent h-auto max-w-full object-cover outline-[3px] w-full rounded-md"
        />
      </figure>

      <div className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-10 text-zinc-800 text-lg leading-8">
        <p>
          <strong className="font-extrabold text-zinc-950">
            Interviewer:
          </strong>{" "}
          "Wait, metabolic stress interfering with the pancreas? So, Dr. Phil,
          what is the solution to that?"
        </p>
      </div>

      <figure className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-12">
        <img
          src={doctorImage}
          alt="Dr. Philip explaining a health topic in studio"
          className="box-border caret-transparent h-auto max-w-full object-cover outline-[3px] w-full rounded-md"
        />
      </figure>

      <div className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-10 text-zinc-800 text-lg leading-8">
        <p className="mb-8">
          <strong className="font-extrabold text-zinc-950">
            Dr. Philip Calvin McGraw:
          </strong>{" "}
          “I'll tell you in 30 seconds what top-tier clinics and
          endocrinologists often charge thousands to explain.
        </p>

        <p className="mb-8">
          The real reason blood sugar can feel out of control for so many
          adults?
        </p>

        <p className="mb-8">
          <strong className="font-extrabold text-zinc-950">
            Metabolic stress can build up around your vital organs and act like
            a roadblock, making it harder for your body to support healthy
            insulin and GLP-1 signaling from the inside out.
          </strong>
        </p>

        <p className="mb-8">
          That is what can contribute to glucose spikes, constant fatigue, nerve
          discomfort, and the fear of losing independence as you age.
        </p>

        <p className="mb-8">The good news?</p>

        <p>
          <strong className="font-extrabold text-zinc-950">
            Once you understand how to support your metabolism and GLP-1
            response, building a daily routine becomes much simpler.”
          </strong>
        </p>
      </div>

      <figure className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-12">
        <img
          src={interviewerImage}
          alt="A TV interviewer listening during a health segment"
          className="box-border caret-transparent h-auto max-w-full object-cover outline-[3px] w-full rounded-md"
        />
      </figure>

      <div className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-10 text-zinc-800 text-lg leading-8">
        <p>
          <strong className="font-extrabold text-zinc-950">
            Interviewer:
          </strong>{" "}
          "Dr. Phil, you recorded a video that has already hit over 4.5 million
          views discussing Big Pharma and revealing this{" "}
          <strong className="font-extrabold text-zinc-950">
            'morning support ritual'
          </strong>{" "}
          to help people fight back against out-of-control blood sugar... I
          mean, is this the ultimate solution?"
        </p>
      </div>

      <figure className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-12">
        <img
          src={doctorImage}
          alt="Dr. Philip continuing the studio interview"
          className="box-border caret-transparent h-auto max-w-full object-cover outline-[3px] w-full rounded-md"
        />
      </figure>

      <div className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-10 text-zinc-800 text-lg leading-8">
        <p className="mb-8">
          <strong className="font-extrabold text-zinc-950">
            Dr. Philip Calvin McGraw:
          </strong>{" "}
          "Absolutely. Through independent testing, we found that a simple
          kitchen-ingredient ritual may help support the body’s natural GLP-1
          response, especially for adults over 50.
        </p>

        <p className="mb-8">
          And believe me, this{" "}
          <strong className="font-extrabold text-zinc-950">
            morning support ritual
          </strong>{" "}
          is designed to help your metabolism, wake up better daily habits, and
          support healthy blood sugar routines.
        </p>

        <p className="mb-8">
          This homemade approach focuses on supporting the systems that can feel
          overwhelmed when glucose levels, fatigue, and food cravings start to
          take over.
        </p>

        <p className="mb-8">
          After seeing so many people feel trapped by complicated protocols, I
          recommend simple daily habits to anyone working on type 2 diabetes
          support with their doctor.
        </p>

        <p className="mb-8">
          <strong className="font-extrabold text-zinc-950">
            Do this every morning, and you may notice a meaningful change — not
            just in your blood sugar habits, but in your day as a whole.
          </strong>
        </p>

        <p>
          More daily energy, steadier glucose routines, less fear around food,
          and a stronger sense of control."
        </p>
      </div>

      <figure className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-12">
        <img
          src={interviewerImage}
          alt="A TV interviewer wrapping up the segment"
          className="box-border caret-transparent h-auto max-w-full object-cover outline-[3px] w-full rounded-md"
        />
      </figure>

      <div className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-10 text-zinc-800 text-lg leading-8">
        <p className="mb-8">
          <strong className="font-extrabold text-zinc-950">
            Interviewer:
          </strong>{" "}
          "I'm very happy to be able to share all of this with the public.
        </p>

        <p className="mb-8">
          I would like to thank you for speaking openly and granting us this
          exclusive interview.
        </p>

        <p className="mb-8">
          For anyone watching who wants to discover the complete step-by-step
          method for preparing this homemade solution —{" "}
          <strong className="font-extrabold text-zinc-950">
            the same style of routine thousands of Americans are using to
            support their blood sugar habits naturally
          </strong>{" "}
          —
        </p>

        <p className="mb-8">
          We have left Dr. Phil's full presentation right below, where he shares
          exactly how to do it.
        </p>

        <p>
          <strong className="font-extrabold text-zinc-950">
            Just click below to watch.”
          </strong>
        </p>
      </div>

      <div className="box-border caret-transparent max-w-[1100px] outline-[3px] pt-12">
        <a className="block box-border caret-transparent outline-[3px]">
          <img
            src={videoGif}
            alt="Click to watch the special episode"
            className="box-border caret-transparent h-auto max-w-full object-cover outline-[3px] w-full rounded-md"
          />
        </a>
      </div>

      <section className="box-border caret-transparent max-w-[1100px] outline-[3px] border-y border-zinc-200 mt-12 py-12">
        <p className="text-zinc-900 text-lg italic leading-8 mb-8">
          <strong className="font-extrabold">Dr. Philip Calvin McGraw</strong>{" "}
          has just one request{" "}
          <strong className="font-extrabold">for everyone watching:</strong>
        </p>

        <blockquote className="bg-zinc-50 border-l-4 border-orange-600 box-border caret-transparent outline-[3px] text-zinc-600 text-lg italic leading-8 px-8 py-7 rounded-md">
          "Please share this with your family and anyone you love who struggles
          with type 2 diabetes. Together, we can make sure this information
          reaches the people who really need it."
        </blockquote>

        <div className="box-border caret-transparent flex justify-center outline-[3px] pt-12">
          <a href={ctaHref} className="cta-button cta-button-watch">
            &gt;&gt; Click To Watch The Video &lt;&lt;
          </a>
        </div>
      </section>

      <section className="box-border caret-transparent max-w-[1100px] outline-[3px] py-12">
        <div className="box-border caret-transparent flex items-center justify-between outline-[3px] border-t border-zinc-200 pt-8 mb-10">
          <h2 className="text-zinc-900 text-2xl italic leading-8">
            Sponsored Stories
          </h2>
          <span className="text-blue-600 text-base">by Taboola</span>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 outline-[3px] md:grid-cols-3">
          {sponsoredStories.map((story) => (
            <a
              key={story.title}
              className="box-border caret-transparent block outline-[3px]"
            >
              <img
                src={story.image}
                alt=""
                className="aspect-[16/9] box-border caret-transparent max-w-full object-cover outline-[3px] w-full rounded-md mb-3"
              />
              <h3 className="text-zinc-950 text-lg font-extrabold leading-6">
                {story.title}
              </h3>
            </a>
          ))}
        </div>
      </section>

      <section className="box-border caret-transparent max-w-[1100px] outline-[3px] py-12">
        <h2 className="text-zinc-950 text-3xl font-extrabold leading-10 mb-8">
          36.158 Comments
        </h2>

        <div className="border border-zinc-200 box-border caret-transparent outline-[3px] rounded-[28px] px-6 py-7 md:px-10">
          {readerComments.map((comment) => (
            <div
              key={comment.name}
              className="grid grid-cols-[72px_1fr] gap-5 outline-[3px] mb-8 last:mb-0"
            >
              <div className="text-white text-lg font-extrabold bg-sky-900 box-border caret-transparent flex h-14 w-14 items-center justify-center outline-[3px] rounded-full">
                {comment.initials}
              </div>
              <div className="box-border caret-transparent outline-[3px]">
                <div className="bg-zinc-100 box-border caret-transparent outline-[3px] rounded-[18px] px-5 py-4">
                  <h3 className="text-blue-900 text-xl font-extrabold leading-7">
                    {comment.name}
                  </h3>
                  <p className="text-zinc-950 text-lg leading-8">
                    {comment.text}
                  </p>
                </div>
                <div className="box-border caret-transparent flex items-center justify-between outline-[3px] pt-2 px-4">
                  <span className="text-zinc-500 text-base font-bold">
                    Like · Reply · {comment.time}
                  </span>
                  <span className="text-zinc-500 text-base bg-white border border-zinc-200 box-border caret-transparent inline-flex items-center gap-1 outline-[3px] px-3 py-1 rounded-full">
                    👍 ❤️ {comment.reactions}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
