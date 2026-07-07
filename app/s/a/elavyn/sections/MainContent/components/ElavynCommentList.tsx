import { ElavynCommentItem } from "./ElavynCommentItem";

export const ElavynCommentList = () => {
  return (
    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] mb-[15px] top-2.5 md:text-base md:leading-[28.8px] md:mb-0 md:top-auto">
      <ul className="text-[15px] box-border caret-transparent leading-[27px] list-none max-w-full outline-[3px] ml-[5px] mr-2.5 mb-12 pl-px font-montserrat md:text-base md:leading-[28.8px]">
        <ElavynCommentItem
          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 pb-4 md:text-base md:leading-[28.8px]"
          avatarUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773244540830_hf_20260311_155203_b7742bc7_b9d8_4e8b_84fc_a56c50cfdde7.webp"
          author="Tanisha Williams"
          text="If it truly helps with the kidney numbers, sign me up! I'm so tired of watching my eGFR drop every three months. It's exhausting and terrifying.."
          likes="4"
          time="51 min"
          showReactionIcon={true}
        />
        <ElavynCommentItem
          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 pb-4 md:text-base md:leading-[28.8px]"
          avatarUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245004686_hf_20260311_155751_1c1138ae_28cb_4574_b7a5_599b8c407a4f.webp"
          author="Keisha Johnson"
          text="I always feel exhausted and foggy by mid-morning no matter how much I sleep. Flow+ has me actually making it through the day."
          likes="6"
          time="1 h"
          showReactionIcon={true}
          imageUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773243637153_hf_20260311_153907_0b4a9832_b180_48fa_8a75_3ddeeea9a692.webp"
        />
        <ElavynCommentItem
          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 md:text-base md:leading-[28.8px]"
          avatarUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245021533_hf_20260311_160117_3f4a1da1_a594_4526_a77e_8acedc99ea90.webp"
          author="Monique Davis"
          text="Ugh, the medication list is the WORST. If Flow+ can actually support my kidneys without me swallowing six different pills every morning, I'm sold!"
          likes="2"
          time="2 h"
          showReactionIcon={true}
          replies={[
            {
              avatarUrl:
                "https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245057355_hf_20260311_155751_7fb568a4_4714_4af8_a8ac_df0e072bdf6f.webp",
              author: "Latoya Brown",
              text: 'I hear you on the medication overload! Flow+ has been a complete game changer for me. My doctor called me after my last labs and said "whatever you\'re doing, keep doing it." My creatinine came down for the first time in three years.',
              likes: "3",
              time: "1 h",
              showReactionIcon: true,
            },
          ]}
        />
        <ElavynCommentItem
          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 md:text-base md:leading-[28.8px]"
          avatarUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245086303_hf_20260311_155751_d9314acf_425a_4b62_be5c_bbcdf0461f44.webp"
          author="Shanice Washington"
          text="I hate worrying about my kidney numbers getting worse while I'm just sitting here following every instruction and still declining. Really hoping Flow+ is the answer."
          likes="1"
          time="3 h"
        />
        <ElavynCommentItem
          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 md:text-base md:leading-[28.8px]"
          avatarUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245115501_hf_20260311_160403_08117422_4290_4670_8156_683dcf6687d8.webp"
          author="Tameeka Robinson"
          text="This Elavyn stuff sounds promising, but I'd love to hear from people who've actually tried it for their kidney issues. Anyone have any experience?"
          likes="1"
          time="3 h"
          showReactionIcon={false}
          replies={[
            {
              avatarUrl:
                "https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245130538_hf_20260311_160403_1e594513_8752_4ff8_af98_392949af6475.webp",
              author: "Destiny Harris",
              text: "I've been taking Flow+ for six weeks and it's been amazing. Way better than those kidney medications that just mask the numbers and do absolutely nothing for how you actually feel day to day. My eGFR went up 9 points. Highly recommend giving it a real shot.",
              likes: "3",
              time: "2 h",
              showReactionIcon: false,
            },
          ]}
        />
        <ElavynCommentItem
          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 md:text-base md:leading-[28.8px]"
          avatarUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245235480_hf_20260311_160519_66ba41a7_a589_4fb9_9cbd_3316ebb92f5e.webp"
          author="Aaliyah Thompson"
          text="Ease of use is everything for me. I'm not adding a complicated protocol on top of everything I already manage with this diagnosis. Hoping Flow+ is as simple as they say."
          likes="8"
          time="3 h"
        />
        <ElavynCommentItem
          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 md:text-base md:leading-[28.8px]"
          avatarUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245250640_hf_20260311_160502_ff2fa8f1_f1bc_4d45_86b7_f62ab24f2bdb.webp"
          author="Brianna Jackson"
          text="Anyone else worried about the taste? I hope it doesn't taste medicinal"
          likes="1"
          time="4 h"
          showReactionIcon={false}
          replies={[
            {
              avatarUrl:
                "https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245267853_hf_20260311_160502_3c13db0e_62f0_45cb_9745_62efe4271964.webp",
              author: "Simone Carter",
              text: "I was worried too, but it's actually delicious. sweet and herbal",
              likes: "2",
              time: "2 h",
              showReactionIcon: false,
            },
            {
              avatarUrl:
                "https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245287289_hf_20260311_160519_1d726659_1759_4816_ab13_ce220411e69e.webp",
              author: "Keandra Mitchell",
              text: "No need to worry! tastes more like honey than anything else!",
              likes: "2",
              time: "1 h",
              showReactionIcon: false,
            },
          ]}
        />
        <ElavynCommentItem
          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 md:text-base md:leading-[28.8px]"
          avatarUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245311004_hf_20260311_160519_62ce21ec_72b4_454b_bdcd_7d273509375b.webp"
          author="Daphne Reynolds"
          text="Elavyn has been life-changing for me. First time my nephrologist has smiled at my results in years."
          likes="3"
          time="4 h"
          showReactionIcon={false}
        />
        <ElavynCommentItem
          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 md:text-base md:leading-[28.8px]"
          avatarUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245324417_hf_20260311_160711_b5a65f85_20a0_47a6_b310_ea10348588e8.webp"
          author="Deja Walker"
          text="I genuinely never thought I'd see my kidney numbers look like this again. Flow+ proved me wrong."
          likes="3"
          time="4 h"
        />
        <ElavynCommentItem
          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 md:text-base md:leading-[28.8px]"
          avatarUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245339497_hf_20260311_160711_752966bc_7157_4548_b1fb_82a4c7a0f9c7.webp"
          author="Faith McCain"
          text="I thought it was too good to be true from the video, but reading these comments has convinced me. Ordering today!"
          likes="3"
          time="5 h"
        />
        <ElavynCommentItem
          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 md:text-base md:leading-[28.8px]"
          avatarUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245396938_hf_20260311_160502_c0dd6ead_4558_41f3_8d8b_5093c2888a42.webp"
          author="Imani Taylor"
          text="Thinking about trying Elavyn for my CKD but have questions.. Does it actually move the numbers? Fire away!"
          likes="2"
          time="5 h"
          replies={[
            {
              author: "Shantel Anderson",
              text: "Been taking Flow+ for two months now and I'm genuinely amazed. My eGFR went from 29 to 38 and the brain fog I'd been living with is almost completely gone. When I had a question about my order their customer service responded fast and actually helped.",
              likes: "5",
              time: "2 h",
            },
          ]}
        />
        <ElavynCommentItem
          className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 md:text-base md:leading-[28.8px]"
          avatarUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773245357787_hf_20260311_160818_4dc35c80_906b_4753_b6fc_c8d5345e323e.webp"
          author="Roneeka White"
          text="Thank you, mine arrived today, I will keep you posted"
          likes="3"
          time="5 h"
          imageUrl="https://c.animaapp.com/mr0pqk6b3NyYkT/assets/1773243661819_hf_20260311_153939_e3d9e9fb_b589_4754_b087_a7712400bc47.webp"
        />
      </ul>
    </div>
  );
};
