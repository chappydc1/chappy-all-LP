import advContent from "./adv.json";
import advMedia from "./adv-media.json";
import { NooroTopBar } from "./sections/TopBar";

export default function NooroPage() {
  return <NooroTopBar content={advContent} media={advMedia} />;
}
