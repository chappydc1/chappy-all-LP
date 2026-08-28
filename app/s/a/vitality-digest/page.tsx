import rawContent from "./copy.json";
import advMedia from "./media.json";
import { VitalityDigestTopBar } from "./sections/VitalityDigestTopBar";
import type { AdvertorialContent } from "./sections/VitalityDigestTopBar/context";

const advContent = rawContent as AdvertorialContent;

export default function VitalityDigestPage() {
  return <VitalityDigestTopBar content={advContent} media={advMedia} />;
}
