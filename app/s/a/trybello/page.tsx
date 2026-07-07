import advContent from "./adv.json";
import advMedia from "./adv-media.json";
import { TrybelloTopBar } from "./sections/TopBar";

export default function TrybelloPage() {
  return <TrybelloTopBar content={advContent} media={advMedia} />;
}
