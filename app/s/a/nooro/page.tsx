import advContent from "./adv.json";
import advMedia from "./adv-media.json";
import { TopBar } from "./sections/TopBar";

export default function NooroPage() {
  return <TopBar content={advContent} media={advMedia} />;
}
