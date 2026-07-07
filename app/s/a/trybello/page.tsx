import advContent from "./copy.json";
import advMedia from "./media.json";
import { TopBar } from "./sections/TopBar";

export default function TrybelloPage() {
  return <TopBar content={advContent} media={advMedia} />;
}
