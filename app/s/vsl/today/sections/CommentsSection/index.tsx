import { TodayCommentsList } from "./components/TodayCommentsList";

export const TodayCommentsSection = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] py-5 md:py-10">
      <TodayCommentsList />
    </main>
  );
};
