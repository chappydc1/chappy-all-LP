import { ReplyComment } from "../../CommentsSection/components/ReplyComment";
import { CommentItem } from "../../CommentsSection/components/CommentItem";

export const CommentsList = () => {
  return (
    <section className="box-border caret-transparent max-w-screen-md outline-[3px] w-full mx-auto my-10 p-4 font-ui_sans_serif">
      <div className="box-border caret-transparent outline-[3px] border-gray-300 mb-6 pb-2 border-b border-solid font-montserrat">
        <h3 className="text-[15px] font-bold box-border caret-transparent leading-[22.5px] outline-[3px]">
          4.321 comments
        </h3>
      </div>
      <div className="box-border caret-transparent outline-[3px] font-montserrat">
        <CommentItem
          containerClassName=""
          imageSrc="https://sugarhealthnotice.com/news/begin/watch/wtc-2/assets/img/fb/foto1 (3).jpg"
          imageAlt="Sarah Brown review on blood sugar levels"
          authorName="Sarah Brown"
          commentText="Dr. Daniel, it’s been 15 consecutive days since I started, and I've already noticed a big improvement in my Blood Sugar levels. I'll keep going because I'm feeling amazing!"
          timeText=" 2 h "
          timeClassName=""
          replyComment={<ReplyComment />}
        />
        <CommentItem
          containerClassName="mt-5"
          imageSrc="https://sugarhealthnotice.com/news/begin/watch/wtc-2/assets/img/fb/nova1 (2).jpg"
          imageAlt="Lauren Wilson review on natural energy"
          authorName="Lauren Wilson"
          commentText="I've been applying these tips for 17 days now, and I've already noticed a significant improvement. I was even surprised by the results; simple adjustments really make a difference! Loved it"
          timeText=" 5 h "
          timeClassName="text-gray-400"
          replyComment={null}
        />
        <CommentItem
          containerClassName="mt-5"
          imageSrc="https://sugarhealthnotice.com/news/begin/watch/wtc-2/assets/img/fb/nova1 (4).jpg"
          imageAlt="Lucy Johnson feedback on vitality"
          authorName="Lucy Johnson"
          commentText="Daniel, you've helped me a lot. I feel like a different person — more energized and with a real desire to face the day. What a blessing!"
          timeText=" 1 d "
          timeClassName="text-gray-400"
          replyComment={null}
        />
      </div>
    </section>
  );
};
