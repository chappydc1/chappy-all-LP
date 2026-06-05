"use client";

import { Main } from "./sections/Main";
import { ExternalLinkContainer } from "./components/ExternalLinkContainer";
import { TrackingFrame } from "./components/TrackingFrame";
import { ChatWidget } from "./components/ChatWidget";

export const PipiteaApp = () => {
  return (
    <div className="text-gray-500 text-[13px] not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[19.5px] list-outside list-disc outline-[3px] pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-sans_serif">
      <div
        className="text-gray-800 text-sm bg-white bg-no-repeat box-border caret-transparent leading-[21px] outline-[3px] text-center font-libre_franklin"
      >
        <Main />
      </div>
      <ExternalLinkContainer />
      <TrackingFrame />
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <ChatWidget />
    </div>
  );
};
