"use client";

import { PageShell } from "./sections/PageShell";
import { copy, media } from "./data";

export const PipiteaMatchaApp = () => {
  return (
    <div className="text-gray-500 text-[13px] not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[19.5px] list-outside list-disc outline-[3px] pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-sans_serif">
      <PageShell copy={copy} media={media} />
      <div className="box-border caret-transparent hidden outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]">
        <a
          href="https://checkoutchamp.com/"
          title="Powered by CheckoutChamp"
          className="text-blue-600 box-border caret-transparent max-w-full outline-[3px]"
        ></a>
      </div>
      <iframe
        src="https://cf.clym-widget.net/latest/api-bridge/?api=aHR0cHM6Ly9wcml2YWN5LWFwaS11czcuY2x5bS5pbw%3D%3D&is_dedicated=true&id=5e6b0c428e324287bad9bbdkb2wohxz7&channel=fcbb0e1f13dd4fa0e39206c03b6e53e4&origin=shop.pipitea.com&native=true&instance=us7.clym.io"
        name="__clymLocator"
        title="Clym bridge"
        role="presentation"
        className="fixed box-border caret-transparent h-px max-w-full outline-[3px] align-baseline w-px -left-0.5 -bottom-0.5"
      ></iframe>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="box-border caret-transparent outline-[3px]"></div>
      <div className="fixed text-slate-500 text-base box-border caret-transparent leading-6 outline-[3px] z-[2147483646] left-4 bottom-4 font-roboto">
        <button
          aria-label="Open privacy widget."
          className="text-white items-center bg-black shadow-[rgba(0,0,0,0.25)_0px_2px_16px_0px] caret-transparent flex h-[52px] justify-center max-w-full outline-[3px] text-center w-[52px] border overflow-hidden p-0 rounded-[50%] border-black"
        >
          <img
            src="https://c.animaapp.com/mq0c6l4mp0WBgi/assets/icon-3.svg"
            alt="Icon"
            className="box-border caret-transparent h-7 outline-[3px] w-7"
          />
        </button>
      </div>
    </div>
  );
};
