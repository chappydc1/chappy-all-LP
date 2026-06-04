import { DiabetesReviewCard } from "../../SalesPage/components/ReviewCard";

export const DiabetesReviewsSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] py-12">
      <div className="box-border caret-transparent max-w-[1000px] outline-[3px] w-full mx-auto px-3">
        <h2 className="text-yellow-600 text-[24.575px] font-bold box-border caret-transparent leading-[29.49px] outline-[3px] mt-4 md:text-[32px] md:leading-[38.4px]">
          What People Are Saying About Glycocept?
        </h2>
        <h4 className="text-[21.525px] font-bold box-border caret-transparent leading-[25.83px] outline-[3px] mb-6 md:text-2xl md:leading-[28.8px]">
          Real Life-Changing Results!
        </h4>
        <p className="text-black font-bold box-border caret-transparent outline-[3px] text-left mb-2">
          Top reviews from the United States
        </p>
        <div className="bg-neutral-100 box-border caret-transparent outline-[3px]">
          <DiabetesReviewCard
            containerClassName="relative border-b-zinc-300 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent flex flex-col outline-[3px] break-words text-left p-6 border-b"
            avatarSrc="/images/img/avatar.webp?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
            avatarAlt="Profile"
            reviewerName="Linda M."
            reviewerLocation="Montclair, NJ"
            title="Glycocept saved my life"
            imageSrc="/images/img/depoimento/1f.jpg?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
            imageAlt=""
            reviewText="Last Sunday, my 6-year-old granddaughter asked me to join her for a walk in the park. Her smile brought me to tears because, for the first time in years, I could walk beside her without worrying about my blood sugar crashing. Without Glycocept, I’m sure this wouldn’t have been possible. Before taking it, I couldn’t even make it down my driveway without exhaustion and burning feet stopping me."
            helpfulText="26 people found this helpful"
          />
          <DiabetesReviewCard
            containerClassName="relative border-b-zinc-300 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent flex flex-col outline-[3px] break-words text-left p-6 border-b"
            avatarSrc="/images/img/avatar.webp?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
            avatarAlt="Profile"
            reviewerName="Karen R."
            reviewerLocation="Boulder, CO"
            title="I Feel Like Myself Again!"
            imageSrc="/images/img/depoimento/102.jpg?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
            imageAlt=""
            reviewText="Five months ago, my daughter wouldn’t let me go to the grocery store alone. She always said it was “too dangerous” and that I might faint or lose control of my sugar levels. But now, thanks to Glycocept, I’m going to the market by myself, doing chores at home, and even going to church every Sunday. I’m no longer reliant on anyone!"
            helpfulText="21 people found this helpful"
          />
          <DiabetesReviewCard
            containerClassName="relative border-b-zinc-300 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent flex flex-col outline-[3px] break-words text-left p-6 border-b"
            avatarSrc="/images/img/avatar.webp?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
            avatarAlt="Profile"
            reviewerName="Barbara B."
            reviewerLocation="Charleston, SC"
            title="The Best Support I’ve Tried"
            imageSrc="/images/img/depoimento/4f.jpg?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
            imageAlt=""
            reviewText="Do you know how it feels to grow more limited and frustrated with each passing day? I lived like that for over eight years. That’s why I thank God every single day for finding Glycocept. Now I no longer struggle with constant sugar spikes, restless nights, or the fear that my health would never get better."
            helpfulText="19 people found this helpful"
          />
          <DiabetesReviewCard
            containerClassName="relative box-border caret-transparent flex flex-col outline-[3px] break-words text-left p-6"
            avatarSrc="/images/img/avatar.webp?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
            avatarAlt="Profile"
            reviewerName="Emily B."
            reviewerLocation="Brookline, MA"
            title="A Game-Changer for My Health"
            imageSrc="/images/img/depoimento/5f.jpg?hopId=5f160ca7-bd6b-4c23-b55d-9b6214111f05"
            imageAlt=""
            reviewText="I used to sit silently at family dinners, terrified to eat because I’d feel dizzy or spike in front of everyone. The shame and fear were unbearable — I’ll never forget it. But after discovering Glycocept, everything changed. Just last week, I stood up and danced with my husband at our grandson’s birthday party. I went from being the one everyone worried about to being the one inspiring hope — a miracle I never thought possible."
            helpfulText="21 people found this helpful"
          />
        </div>
      </div>
    </div>
  );
};
