export const TodayGuaranteeSection = () => {
  return (
    <section className="items-center bg-blue-50 box-border caret-transparent gap-x-0 flex flex-col max-w-[1210px] outline-[3px] gap-y-0 w-full border border-blue-100 mx-auto px-6 py-8 rounded-[20px] border-solid md:gap-x-12 md:flex-row md:max-w-screen-xl md:gap-y-12 md:px-20 md:py-16">
      <img
        src="/images/today/selo.svg"
        alt="Guarantee"
        className="box-border caret-transparent max-w-full object-contain outline-[3px]"
      />
      <div className="box-border caret-transparent outline-[3px]">
        <h2 className="text-sky-950 text-[28px] font-medium box-border caret-transparent leading-[33.6px] outline-[3px] mb-4 font-poppins md:text-[40px] md:leading-[48px]">
          100% Satisfaction
          <b className="text-sky-500 text-[28px] font-bold box-border caret-transparent block leading-[33.6px] outline-[3px] font-montserrat md:text-[40px] md:leading-[48px]">
            60-Day Promise
          </b>
        </h2>
        <p className="text-lg box-border caret-transparent leading-[27px] outline-[3px] mb-6 md:text-xl md:leading-[30px]">
          Your purchase is protected by our 60-Day Satisfaction Promise from the
          original purchase date. If you’re not satisfied with your experience,
          simply contact us through
          <a
            href="https://sugarhealthnotice.com/news/begin/watch/contact.html?utm_source=Taboola_Acc-006-09&utm_medium=1184469&utm_campaign=TB3-09_CP-07_28-04&utm_term=4266248822&utm_content=TB3-09_CP-01_AD01"
            className="text-sky-950 text-lg box-border caret-transparent leading-[27px] outline-[3px] underline md:text-xl md:leading-[30px]"
          >
            this link to our Contact Page
          </a>
          , and our team will make it right.
        </p>
        <a
          href="https://sugarhealthnotice.com/news/begin/watch/wtc-2/?utm_source=Taboola_Acc-006-09&utm_medium=1184469&utm_campaign=TB3-09_CP-07_28-04&utm_term=4266248822&utm_content=TB3-09_CP-01_AD01#kits"
          className="relative text-white text-xl font-bold items-center bg-[linear-gradient(rgb(53,246,15)_0%,rgb(31,166,4)_100%)] border-b-lime-900 shadow-[rgba(31,166,4,0.35)_0px_8px_20px_0px,rgba(255,255,255,0.3)_0px_1px_0px_0px_inset] box-border caret-transparent flex justify-center leading-[30px] max-w-[400px] outline-[3px] uppercase w-full p-[18px] rounded-[50px] border-t-white border-b-[6px] border-x-white md:text-2xl md:leading-9 before:accent-auto before:bg-[url('/images/today/cart.svg before:bg-center before:bg-no-repeat before:bg-contain before:box-border before:caret-transparent before:text-white before:block before:text-xl before:not-italic before:normal-nums before:font-bold before:h-6 before:tracking-[normal] before:leading-[30px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:uppercase before:visible before:w-6 before:mr-4 before:border-separate before:font-montserrat before:md:text-2xl before:md:leading-9 hover:shadow-[rgba(31,166,4,0.45)_0px_14px_35px_0px,rgba(255,255,255,0.4)_0px_1px_0px_0px_inset]"
        >
          order now
        </a>
      </div>
    </section>
  );
};
