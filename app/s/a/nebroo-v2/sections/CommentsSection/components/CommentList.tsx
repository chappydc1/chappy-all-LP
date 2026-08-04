import { CommentItem } from "./CommentItem";

export const CommentList = () => {
  return (
    <div className="relative box-border caret-transparent outline-[3px] mb-[15px] top-2.5 md:mb-[-150px] md:top-auto">
      <ul className="box-border caret-transparent outline-[3px] pl-0 font-montserrat">
        <CommentItem
          itemClassName=""
          imageSrc="https://c.animaapp.com/mrj44hg5QubImt/assets/1733617084175_Marcella_Hastings.webp"
          contentClassName=""
          author="Barbara Miller"
          authorClassName="text-left"
          text="It is amazing how God created us so perfectly!"
          textElement="p"
          textClassName="text-black box-border caret-transparent outline-[3px] mb-[3px]"
          likeCount="4"
          likeCountClassName="text-black box-border caret-transparent outline-[3px]"
          time="51 min"
          showReactionIcon={true}
          showEmptyBeforeText={false}
          showEmptyAfterText={false}
          repliesListClassName=""
          replies={[]}
        />
        <CommentItem
          itemClassName=""
          imageSrc="https://c.animaapp.com/mrj44hg5QubImt/assets/1733617237015_Richard_Wilson.webp"
          contentClassName=""
          author="Richard Wilson"
          authorClassName=""
          text="Just ordered mine."
          textElement="div"
          textClassName="text-black box-border caret-transparent outline-[3px] p-px"
          likeCount="6"
          likeCountClassName="text-black box-border caret-transparent outline-[3px]"
          time="1 h"
          showReactionIcon={true}
          showEmptyBeforeText={false}
          showEmptyAfterText={false}
          repliesListClassName=""
          replies={[]}
        />
        <CommentItem
          itemClassName=""
          imageSrc="https://c.animaapp.com/mrj44hg5QubImt/assets/1733617234876_Doug_Johnson.webp"
          contentClassName=""
          author="Doug Johnson"
          authorClassName=""
          text="Would love to hear reviews from people who bought it. Like 6 months after, is it still working with ease?"
          textElement="p"
          textClassName="text-black box-border caret-transparent outline-[3px] mb-[3px]"
          likeCount="2"
          likeCountClassName="text-black box-border caret-transparent outline-[3px]"
          time="2 h"
          showReactionIcon={true}
          showEmptyBeforeText={false}
          showEmptyAfterText={false}
          repliesListClassName="border-b-neutral-800 border-l-gray-300 border-r-neutral-800 border-t-neutral-800 border-l"
          replies={[
            {
              imageSrc:
                "https://c.animaapp.com/mrj44hg5QubImt/assets/1733617232938_Franklin_Monroe.webp",
              author: "Jose Martinez",
              text: "Doug Johnson I just got mine but I will say I am impressed at how they really only amplify voices and not everything else. I heard a man walking behind me on the side walk talking on a busy street and I would have never have heard him before so it startled me.",
              likeCount: "3",
              time: "1 h",
              listItemClassName: "border-gray-300 border-l border-dotted",
              showReactionIcon: true,
            },
          ]}
        />
        <CommentItem
          itemClassName=""
          imageSrc="https://c.animaapp.com/mrj44hg5QubImt/assets/1712227680885_Screenshot_2024_04_04_at_6.47.28_PM.webp"
          contentClassName=""
          author="Lionel Beckett"
          authorClassName=""
          text="Very informative. I wear hearing aids but this was never explained in detail like this."
          textElement="p"
          textClassName="text-black box-border caret-transparent outline-[3px] mb-[3px]"
          likeCount="1"
          likeCountClassName="text-black box-border caret-transparent outline-[3px]"
          time="3 h"
          showReactionIcon={false}
          showEmptyBeforeText={false}
          showEmptyAfterText={false}
          repliesListClassName=""
          replies={[]}
        />
        <CommentItem
          itemClassName="bg-white"
          imageSrc="https://c.animaapp.com/mrj44hg5QubImt/assets/1733617143932_Winston_Harper.webp"
          contentClassName=""
          author="Mark Owens"
          authorClassName=""
          text="I would like to buy a set"
          textElement="p"
          textClassName="text-black box-border caret-transparent outline-[3px] mb-[3px]"
          likeCount="1"
          likeCountClassName="text-black box-border caret-transparent outline-[3px]"
          time="3 h"
          showReactionIcon={false}
          showEmptyBeforeText={false}
          showEmptyAfterText={false}
          repliesListClassName="border-b-neutral-800 border-l-gray-300 border-r-neutral-800 border-t-neutral-800 border-l"
          replies={[
            {
              imageSrc:
                "https://c.animaapp.com/mrj44hg5QubImt/assets/1733616910188_Zelda_Montgomery.webp",
              author: "Rowena Barron",
              text: "Mark Owens i am trying to buy from Australia but only America is accepted",
              likeCount: "3",
              time: "2 h",
              listItemClassName: "border-gray-300 border-l border-dotted",
              showReactionIcon: false,
            },
          ]}
        />
        <CommentItem
          itemClassName=""
          imageSrc="https://c.animaapp.com/mrj44hg5QubImt/assets/1733617318212_Cecillia_Pruitt.webp"
          contentClassName=""
          author="Cecelia Pruitt"
          authorClassName=""
          text="I was just in awe how God created our hearing ! I remember learning about it and recently a friend explained how he got a surgery for his hearing but seeing that explanation was absolutely cool ! Thank you Lord for creating us so wondrous! Thank you for doctors too!"
          textElement="p"
          textClassName="text-black box-border caret-transparent outline-[3px] mb-[3px]"
          likeCount="8"
          likeCountClassName="text-black box-border caret-transparent outline-[3px]"
          time="3 h"
          showReactionIcon={false}
          showEmptyBeforeText={false}
          showEmptyAfterText={true}
          repliesListClassName=""
          replies={[]}
        />
        <CommentItem
          itemClassName=""
          imageSrc="https://c.animaapp.com/mrj44hg5QubImt/assets/1733617055645_Rowena_Baron.webp"
          contentClassName=""
          author="Lucille Langley"
          authorClassName=""
          text="I just received mine recently. So far I'm loving these."
          textElement="p"
          textClassName="text-black box-border caret-transparent outline-[3px] mb-[3px]"
          likeCount="1"
          likeCountClassName="text-black box-border caret-transparent outline-[3px]"
          time="4 h"
          showReactionIcon={false}
          showEmptyBeforeText={false}
          showEmptyAfterText={false}
          repliesListClassName=""
          replies={[
            {
              imageSrc:
                "https://c.animaapp.com/mrj44hg5QubImt/assets/1733617058554_Sharon_Harper.webp",
              author: "Sharon Harper",
              text: "Sounds great if it works. I have hearingaids and if they work I would love to try a pair out.",
              likeCount: "2",
              time: "2 h",
              listItemClassName: "",
              showReactionIcon: false,
            },
            {
              imageSrc:
                "https://c.animaapp.com/mrj44hg5QubImt/assets/1733617019729_Barbara_Miller.webp",
              author: "Zelda Montgomery",
              text: "me too.",
              likeCount: "2",
              time: "1 h",
              listItemClassName: "",
              showReactionIcon: false,
            },
          ]}
        />
        <CommentItem
          itemClassName=""
          imageSrc="https://c.animaapp.com/mrj44hg5QubImt/assets/1733617003166_Curtis_Reynolds.webp"
          contentClassName=""
          author="Curtis Reynolds"
          authorClassName=""
          text="This is really an interesting article. I have recently been trying to hear my grandson speak and I am constantly telling him to annunciate his words as they always seem to run into each other"
          textElement="p"
          textClassName="text-black box-border caret-transparent outline-[3px] mb-[3px]"
          likeCount="3"
          likeCountClassName="text-black box-border caret-transparent outline-[3px]"
          time="4 h"
          showReactionIcon={false}
          showEmptyBeforeText={false}
          showEmptyAfterText={false}
          repliesListClassName=""
          replies={[]}
        />
        <CommentItem
          itemClassName=""
          imageSrc="https://c.animaapp.com/mrj44hg5QubImt/assets/1733616985161_Desmond_Vaughn.webp"
          contentClassName=""
          author="Winston Harper"
          authorClassName=""
          text="They fit my ears perfectly and I do have some small ear canals as well. A blessing to have found them!"
          textElement="p"
          textClassName="text-black box-border caret-transparent outline-[3px] mb-[3px]"
          likeCount="3"
          likeCountClassName="text-black box-border caret-transparent outline-[3px]"
          time="4 h"
          showReactionIcon={false}
          showEmptyBeforeText={true}
          showEmptyAfterText={true}
          repliesListClassName=""
          replies={[]}
        />
        <CommentItem
          itemClassName=""
          imageSrc="https://c.animaapp.com/mrj44hg5QubImt/assets/1733616961643_Mark_Owens.webp"
          contentClassName=""
          author="Franklin Monroe"
          authorClassName=""
          text="Knowing how sophisticated one single part of our bodies are, how can anyone not believe in God?"
          textElement="p"
          textClassName="text-black box-border caret-transparent outline-[3px] mb-[3px]"
          likeCount="3"
          likeCountClassName="text-zinc-500 box-border caret-transparent outline-[3px]"
          time="5 h"
          showReactionIcon={false}
          showEmptyBeforeText={false}
          showEmptyAfterText={false}
          repliesListClassName=""
          replies={[]}
        />
        <CommentItem
          itemClassName=""
          imageSrc="https://c.animaapp.com/mrj44hg5QubImt/assets/1733616940914_Betty_Martinez.webp"
          contentClassName=""
          author="Marcella Hastings"
          authorClassName=""
          text="So far, so good. Just got a pair this month and must say for money, they work very well and are easy to adjust and pop in your ear.Also there are videos if you google on how to turn them, adjust and most other questions you may have. I am a happy customer so far!!"
          textElement="p"
          textClassName="text-black box-border caret-transparent outline-[3px] mb-[3px]"
          likeCount="2"
          likeCountClassName="text-black box-border caret-transparent outline-[3px]"
          time="5 h"
          showReactionIcon={false}
          showEmptyBeforeText={false}
          showEmptyAfterText={true}
          repliesListClassName="border-b-neutral-800 border-l-gray-300 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent list-[circle] outline-[3px] pl-0 border-l"
          replies={[
            {
              imageSrc:
                "https://c.animaapp.com/mrj44hg5QubImt/assets/1733617139898_Lucille_Langley.webp",
              author: "Gwendolyn McPherson",
              text: "That sounds real good I would like to try it",
              likeCount: "5",
              time: "2 h",
              listItemClassName:
                "items-start box-border caret-transparent flex outline-[3px] border-gray-300 border-l border-dotted",
              showReactionIcon: false,
            },
          ]}
        />
        <CommentItem
          itemClassName=""
          imageSrc="https://c.animaapp.com/mrj44hg5QubImt/assets/1733616887966_Lionel_Beckett.webp"
          contentClassName="justify-start text-left"
          author="Desmond Vaughn"
          authorClassName="items-center justify-start"
          text="Such a nice customer service response to my call. I wanted to know if tinnitus sufferers could benefit, she stated it will not in most cases help. As a cancer survivor, mine has been getting worse over the years. So gracious of her to be honest and frank. Refreshing!"
          textElement="p"
          textClassName="text-black box-border caret-transparent outline-[3px] mb-[3px]"
          likeCount="3"
          likeCountClassName="text-black box-border caret-transparent outline-[3px]"
          time="5 h"
          showReactionIcon={false}
          showEmptyBeforeText={false}
          showEmptyAfterText={false}
          repliesListClassName=""
          replies={[]}
        />
      </ul>
    </div>
  );
};
