import rawContent from "./copy.json";
import rawMedia from "./media.json";
import { SkinmagV1TopBar } from "./sections/TopBar";
import type { SkinmagV1AdvertorialContent, SkinmagV1AdvertorialMedia } from "./sections/TopBar";

const content = rawContent as unknown as SkinmagV1AdvertorialContent;
const media = rawMedia as unknown as SkinmagV1AdvertorialMedia;

export default function SkinmagV1SkinmagPage() {
  return (
    <main>
      <SkinmagV1TopBar content={content} media={media} />
    </main>
  );
}
