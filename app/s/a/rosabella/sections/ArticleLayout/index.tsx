"use client";

import { ArticleContent } from "./components/ArticleContent";
import { Sidebar } from "./components/Sidebar";

export const ArticleLayout = () => {
  return (
    <section className="items-center bg-no-repeat box-border caret-transparent flex flex-col justify-items-center min-h-[auto] min-w-[auto] outline-[3px] w-full bg-center pb-[50px] px-2.5">
      <div className="text-zinc-800 bg-no-repeat box-border caret-transparent flex flex-col max-w-[1170px] min-h-[auto] min-w-[auto] outline-[3px] text-left w-full bg-center md:flex-row">
        <ArticleContent />
        <Sidebar />
      </div>
    </section>
  );
};
