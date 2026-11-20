import rawCopy from "./data/copy.json";
import links from "./data/links.json";
import media from "./data/media.json";
import { RosabellaLandingPage } from "./sections/LandingPage";
import type { RosabellaCopyType } from "./sections/LandingPage/context";

const copy = rawCopy as RosabellaCopyType;

export default function RosabellaPage() {
  return (
    <RosabellaLandingPage
      copy={copy}
      links={links}
      media={media}
    />
  );
}
