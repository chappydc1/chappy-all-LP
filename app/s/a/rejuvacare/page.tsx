import { AnnouncementBar } from "./sections/AnnouncementBar";

export default function RejuvacarePage() {
  return (
    <div className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc max-w-[600px] min-w-80 outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto scroll-smooth text-left indent-[0px] normal-case visible w-full border-separate font-apple_system md:max-w-none md:overflow-x-visible md:overflow-y-visible md:w-auto">
      <div className="box-border caret-transparent outline-[3px]"></div>
      <AnnouncementBar />
      <div className="box-border caret-transparent outline-[3px]">
        <a
          href="https://checkoutchamp.com/"
          title="Powered by CheckoutChamp"
          className="text-blue-600 box-border caret-transparent max-w-full outline-[3px] hover:text-sky-700 hover:underline hover:border-sky-700"
        ></a>
      </div>
      <form className="box-border caret-transparent outline-[3px]">
        <input
          type="hidden"
          name="custom5"
          value="{'wt:cart':'fbd5ab07-a412-4eeb-b26a-93513c7c8e3e'}"
          className="appearance-none text-black bg-transparent box-border caret-transparent hidden outline-[3px] text-start p-0"
        />
      </form>
      <iframe
        src="https://id-msp.newsbreak.com/sync-nbu?source=2&host=checkout.myrejuvaknee.com"
        className="box-border caret-transparent hidden max-w-full outline-[3px] align-baseline border-zinc-100"
      ></iframe>
    </div>
  );
}
