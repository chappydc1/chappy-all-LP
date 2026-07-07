import advContent from "./copy.json";
import advMedia from "./media.json";
import { TrybelloTopBar } from "./sections/TopBar";

export default function TrybelloPage() {
  return <TrybelloTopBar content={advContent} media={advMedia} />;
}
