"use client";

import { ArticleHeader } from "../ArticleHeader";
import { ArticleContent } from "../ArticleContent";
import { CommentsSection } from "../CommentsSection";
import { Disclaimer } from "../Disclaimer";
import { AdvertorialContext } from "./context";
import type { AdvertorialData } from "./types";

export { useAdvertorialData } from "./context";

export function TopBar({ content, links, media }: AdvertorialData) {
  return (
    <AdvertorialContext.Provider value={{ content, links, media }}>
      <ArticleHeader />
      <ArticleContent />
      <CommentsSection />
      <Disclaimer />
    </AdvertorialContext.Provider>
  );
}
