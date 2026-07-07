export const TodayGuaranteeSection = () => {
  return (
    <section className="items-center bg-blue-50 box-border caret-transparent gap-x-0 flex flex-col max-w-[1210px] outline-[3px] gap-y-0 w-full border border-blue-100 mx-auto px-6 py-8 rounded-[20px] border-solid md:gap-x-12 md:flex-row md:max-w-screen-xl md:gap-y-12 md:px-20 md:py-16">
      <div className="text-sky-950 bg-white border border-blue-200 box-border caret-transparent flex h-36 w-36 shrink-0 items-center justify-center outline-[3px] text-center rounded-full shadow-[rgba(15,23,42,0.08)_0px_10px_22px_0px]">
        <span className="text-xl font-extrabold leading-6">
          60-Day
          <br />
          Promise
        </span>
      </div>
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
          className="text-white text-base font-bold items-center bg-sky-950 box-border caret-transparent flex justify-center leading-6 max-w-[320px] outline-[3px] uppercase w-full px-5 py-4 md:text-lg md:leading-7 hover:bg-sky-900"
        >
          Check Availability
        </a>
      </div>
    </section>
  );
};
