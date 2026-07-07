import advContent from "./copy.json";
import advMedia from "./media.json";
import { NooroTopBar, type NooroAdvertorialContent, type NooroAdvertorialMedia } from "./sections/TopBar";

export default function NooroPage() {
  return <NooroTopBar content={advContent as NooroAdvertorialContent} media={advMedia as NooroAdvertorialMedia} />;
}
