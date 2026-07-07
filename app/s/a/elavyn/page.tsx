import { ElavynMainContent } from "./sections/MainContent";
import { ElavynPageOverlays } from "./components/PageOverlays";

export default function ElavynPage(): React.ReactElement {
  return (
    <body className="text-neutral-900/80 text-[15px] not-italic normal-nums font-normal accent-auto bg-fixed bg-white box-border caret-transparent grid grid-cols-[100%] grid-rows-[auto_auto_1fr_auto] tracking-[0.6px] leading-[27px] list-outside list-disc min-h-full outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-poppins md:text-base md:leading-[28.8px]">
      <ElavynMainContent />
      <ElavynPageOverlays variant="empty" />
      <ElavynPageOverlays variant="empty" />
      <ElavynPageOverlays variant="empty" />
      <ElavynPageOverlays variant="overlay" />
      <ElavynPageOverlays variant="image" />
    </body>
  );
}
