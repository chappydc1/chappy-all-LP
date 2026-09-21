import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Find Out If Protein Coffee Is Good for You",
  description: "Take the < 1 Minute Protein Coffee Quiz by Javvy Coffee",
};

export default function JavvyCoffeeQuizLayout({ children }: { children: ReactNode }) {
  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-orange-50 box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc min-h-full outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-filson_pro">
      {children}
    </div>
  );
}
