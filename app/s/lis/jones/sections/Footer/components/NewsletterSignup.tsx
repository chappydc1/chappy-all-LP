"use client";

export const NewsletterSignup = () => {
  return (
    <form className="relative box-border caret-transparent max-w-none outline-[3px] w-full pt-[18px] md:max-w-[428px]">
      <div className="text-xl caret-transparent tracking-[0.5px] leading-[29px] max-w-[335px] outline-[3px] font-basemonowideweb md:max-w-none">
        Stay up to date about product launches, makeup tips, and all things
        Jones Road
      </div>
      <div className="relative items-center caret-transparent gap-x-2 flex flex-wrap min-h-8 outline-[3px] gap-y-2 mt-9">
        <input
          type="hidden"
          name="SOURCE"
          value="Footer"
          className="appearance-none text-base shadow-[rgba(0,0,0,0.25)_0px_5.78px_5.78px_0px] caret-transparent hidden h-12 tracking-[normal] leading-[normal] outline-[3px] w-[calc(100%_-_130px)] px-4 py-0 border-t-0 border-x-0 border-b border-black"
        />
        <input
          aria-label="Email"
          name="EMAIL"
          placeholder="Email Address"
          type="email"
          className="appearance-none text-base shadow-[rgba(0,0,0,0.25)_0px_5.78px_5.78px_0px] caret-transparent block h-12 tracking-[normal] leading-[normal] min-h-[auto] min-w-[auto] outline-[3px] w-[calc(100%_-_130px)] px-4 py-0 border-t-0 border-x-0 border-b border-black"
        />
        <button
          type="submit"
          className="appearance-none text-white text-base bg-neutral-700 shadow-[rgba(0,0,0,0.25)_0px_5.78px_5.78px_0px] caret-transparent block shrink-0 h-12 tracking-[normal] leading-[normal] min-h-[auto] min-w-[auto] outline-[3px] text-center w-[90px] px-4 py-0"
        >
          Submit
        </button>
      </div>
      <div className="text-zinc-500 text-[11px] caret-transparent tracking-[1px] leading-[14.96px] max-w-none outline-[3px] mt-3 font-basemonowideweb md:max-w-[280px]">
        Sign Up For Free Shipping On Orders Over $55 USD
      </div>
      <p className="text-pink-500 text-[11px] font-bold caret-transparent tracking-[1px] leading-[14.96px] max-h-0 max-w-none opacity-0 outline-[3px] invisible overflow-hidden left-0 font-basemonowideweb md:max-w-[280px]">
        Thank you for subscribing
      </p>
    </form>
  );
};
