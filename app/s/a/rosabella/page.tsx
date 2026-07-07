import rawCopy from "./copy.json";
import media from "./media.json";
import { RosabellaLandingPage } from "./sections/LandingPage";
import type { RosabellaCopyType } from "./sections/LandingPage/context";

const copy = rawCopy as RosabellaCopyType;

export default function RosabellaPage() {
  return <RosabellaLandingPage copy={copy} media={media} />;
}
