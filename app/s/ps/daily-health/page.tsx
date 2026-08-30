import copyJson from "./copy.json";
import mediaJson from "./media.json";
import { PresellLpPage } from "@/sections/PresellLpPage";
import type { LpCopy, LpMedia } from "@/sections/PresellLpPage";

const copy = copyJson as unknown as LpCopy;
const media = mediaJson as LpMedia;

export default function DailyHealthPage() {
  return <PresellLpPage content={copy} media={media} />;
}
