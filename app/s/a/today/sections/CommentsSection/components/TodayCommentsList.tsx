import { TodayReplyComment } from "./TodayReplyComment";
import { TodayCommentItem } from "./TodayCommentItem";

export const TodayCommentsList = () => {
  return (
    <section className="box-border caret-transparent max-w-screen-md outline-[3px] w-full mx-auto my-10 p-4 font-ui_sans_serif">
      <div className="box-border caret-transparent outline-[3px] border-gray-300 mb-6 pb-2 border-b border-solid font-montserrat">
        <h3 className="text-[15px] font-bold box-border caret-transparent leading-[22.5px] outline-[3px]">
          4.321 comments
        </h3>
      </div>
      <div className="box-border caret-transparent outline-[3px] font-montserrat">
        <TodayCommentItem
          containerClassName=""
          authorName="Sarah Brown"
          commentText="I started paying closer attention to my morning routine two weeks ago, and I already feel more consistent through the day. The article made the steps feel doable."
          timeText=" 2 h "
          timeClassName=""
          replyComment={<TodayReplyComment />}
        />
        <TodayCommentItem
          containerClassName="mt-5"
          authorName="Lauren Wilson"
          commentText="I've been applying these tips for 17 days now, and I've already noticed a significant improvement. I was even surprised by the results; simple adjustments really make a difference! Loved it"
          timeText=" 5 h "
          timeClassName="text-gray-400"
          replyComment={null}
        />
        <TodayCommentItem
          containerClassName="mt-5"
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
