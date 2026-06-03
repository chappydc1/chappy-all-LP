"use client";
import { TrustBadgeItem } from "../TrustBadges/components/TrustBadgeItem";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const TrustBadges = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <div id="trust" className="bg-sky-100 w-full pt-5 pb-2.5 px-2.5">
      <div ref={ref} className="max-w-[1200px] mx-auto">
        <div className={`text-[17px] leading-[17px] mb-5 font-montserrat font-bold text-center reveal ${visible ? "visible" : ""}`}>
          Over 100,000 Real Satisfied Customers
        </div>
        <div className="flex flex-col md:flex-row">
          <div className={`reveal delay-100 ${visible ? "visible" : ""} flex-1`}>
            <TrustBadgeItem
              imageSrc="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1729160735276_120_days.webp"
              title="RESULTS OR MONEY BACK GUARANTEE"
              description="If you're not absolutely thrilled with the results within 120 days, we don't want your money. No hassles, no questions asked."
            />
          </div>
          <div className={`reveal delay-200 ${visible ? "visible" : ""} flex-1`}>
            <TrustBadgeItem
              imageSrc="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1729160748904_Free_shipping.webp"
              title="FREE SHIPPING"
              description="We offer free shipping & handling on all orders."
            />
          </div>
          <div className={`reveal delay-300 ${visible ? "visible" : ""} flex-1`}>
            <TrustBadgeItem
              imageSrc="https://c.animaapp.com/mnsbh2exJLSZhk/assets/1729160838424_Guaranteed_High_Quality.webp"
              title="GUARANTEED HIGH QUALITY"
              description="Nebroo PRO 2.0 Hearing Aids are made of high quality materials so that you can enjoy consistent, trouble-free performance."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
