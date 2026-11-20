import copyJson from "./copy.json";
import linksJson from "./links.json";
import mediaJson from "./media.json";
import { PresellLpPage } from "@/sections/PresellLpPage";
import type { LpCopy, LpLinks, LpMedia } from "@/sections/PresellLpPage";

const copy = copyJson as LpCopy;
const links = linksJson as LpLinks;
const media = mediaJson as LpMedia;

const COMMENT_AVATAR_CLASSES = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-red-500",
  "bg-amber-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-gray-500",
];

export default function DailyHealthPage() {
  return (
    <PresellLpPage
      content={copy}
      media={media}
      links={links}
      commentAvatarClasses={COMMENT_AVATAR_CLASSES}
    />
  );
}
