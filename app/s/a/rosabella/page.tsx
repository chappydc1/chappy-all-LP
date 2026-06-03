import rawCopy from "./copy.json";
import media from "./media.json";
import { LandingPage } from "./sections/LandingPage";
import type { CopyType } from "./sections/LandingPage/context";

const copy = rawCopy as CopyType;

export default function RosabellaPage() {
  return <LandingPage copy={copy} media={media} />;
}
