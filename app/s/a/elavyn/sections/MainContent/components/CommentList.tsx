// @ts-nocheck
import adv from "../../../adv.json";
import { CommentItem } from "./CommentItem";

export const CommentList = () => {
  return (
    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] mb-[15px] top-2.5 md:text-base md:leading-[28.8px] md:mb-0 md:top-auto">
      <ul className="text-[15px] box-border caret-transparent leading-[27px] list-none max-w-full outline-[3px] ml-[5px] mr-2.5 mb-12 pl-px font-montserrat md:text-base md:leading-[28.8px]">
        {adv.comments.items.map((item, idx) => (
          <CommentItem
            key={idx}
            className={
              idx === 0 || idx === 1
                ? "text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 pb-4 md:text-base md:leading-[28.8px]"
                : "text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] overflow-hidden my-2 md:text-base md:leading-[28.8px]"
            }
            avatarUrl={item.image}
            author={item.author}
            text={item.text}
            likes={item.likes}
            time={item.time}
            showReactionIcon={item.showReactionIcon}
            imageUrl={item.photo}
            replies={item.replies?.map((reply) => ({
              avatarUrl: reply.image,
              author: reply.author,
              text: reply.text,
              likes: reply.likes,
              time: reply.time,
              showReactionIcon: reply.showReactionIcon,
            }))}
          />
        ))}
      </ul>
    </div>
  );
};
