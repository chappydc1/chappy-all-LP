export const HeroMedia = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full md:w-[70%]">
      <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:no-underline before:indent-[0px] before:normal-case before:visible before:pt-[100%] before:border-separate before:font-apple_system">
        <video
          loop
          autoPlay
          playsInline
          muted
          src="https://cdn.shopify.com/videos/c/o/v/c986f679e75e415bbf16e2d849473ecb.mp4"
          poster="https://c.animaapp.com/mpy7eadgYZFUdm/assets/1728695465026_avoid_knee_surgery_poster.webp"
          className="absolute box-border caret-transparent basis-[0%] shrink-0 h-full max-w-full outline-[3px] align-baseline w-full mx-0 px-0 rounded-none left-0 inset-y-0 md:mx-px md:px-px md:rounded-[15px]"
        ></video>
      </div>
    </div>
  );
};
