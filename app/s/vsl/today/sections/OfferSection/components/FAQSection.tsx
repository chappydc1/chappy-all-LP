import { FAQItem } from "../../OfferSection/components/FAQItem";

export const FAQSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] py-10 md:py-20">
      <div className="items-center box-border caret-transparent flex flex-col justify-center max-w-[1210px] outline-[3px] text-center w-full mx-auto md:max-w-screen-xl">
        <h2 className="text-sky-950 text-[28px] font-medium box-border caret-transparent leading-[33.6px] outline-[3px] mb-10 font-poppins md:text-[40px] md:leading-[48px]">
          Frequently Asked Questions
        </h2>
        <div className="box-border caret-transparent columns-1 gap-x-4 outline-[3px] mb-12 md:columns-2">
          <FAQItem
            question="What is Glyco Pulse?"
            answer="Glyco Pulse is a dietary supplement in capsule form, developed to support healthy blood sugar levels, insulin sensitivity, and overall metabolic health. Its advanced formula combines carefully selected botanical extracts, essential minerals, and metabolism-supporting nutrients designed to help maintain balanced glucose levels, sustained energy, and healthy metabolic function as part of a daily routine."
          />
          <FAQItem
            question="What is the return policy?"
            answer={
              <>
                {
                  "Every order of Glyco Pulse is covered by a 60-Day Satisfaction Promise from the date of purchase. If you're not completely satisfied with your experience, simply "
                }
                <a
                  href="https://sugarhealthnotice.com/news/begin/watch/contact.html?utm_source=Taboola_Acc-006-09&utm_medium=1184469&utm_campaign=TB3-09_CP-07_28-04&utm_term=4266248822&utm_content=TB3-09_CP-01_AD01"
                  className="box-border caret-transparent outline-[3px] underline"
                >
                  <b className="font-bold box-border caret-transparent outline-[3px] mb-4">
                    contact us
                  </b>
                </a>
                {" within 60 days, and our team will assist you promptly."}
              </>
            }
          />
          <FAQItem
            question="How is Glyco Pulse different from other supplements?"
            answer="Unlike many generic blood sugar supplements, Glyco Pulse combines clinically studied nutrients such as Berberine, Ceylon Cinnamon, Chromium Picolinate, Alpha-Lipoic Acid, and Gymnema Sylvestre. This unique blend was designed to support healthy glucose levels, insulin sensitivity, and overall metabolic balance naturally and gently."
          />
          <FAQItem
            question="How do I use Glyco Pulse?"
            answer="Take one (1) capsule daily with water, preferably 20–30 minutes before a meal. Do not exceed the recommended dosage. Consistent daily use is recommended for best results."
          />
          <FAQItem
            question="Can I take Glyco Pulse with other supplements?"
            answer={
              <>
                Yes. Glyco Pulse can be taken alongside other supplements
                without any issue. Its blend of plant extracts, amino acids, and
                natural compounds was designed to work gently in the body,
                supporting cognitive health without interfering with most
                supplement routines. If you are already using other products,
                you can simply add Glyco Pulse to your daily regimen.
              </>
            }
          />
          <FAQItem
            question="Is this a subscription?"
            answer="No. Glyco Pulse is a one-time purchase unless you choose an optional subscription plan at checkout. We never auto-charge without your explicit authorization."
          />
          <FAQItem
            question="Still have questions?"
            answer="Our customer support team is always ready to assist you., and we'll be happy to help."
            linkHref="https://sugarhealthnotice.com/news/begin/watch/contact.html?utm_source=Taboola_Acc-006-09&utm_medium=1184469&utm_campaign=TB3-09_CP-07_28-04&utm_term=4266248822&utm_content=TB3-09_CP-01_AD01"
            linkText="Contact us anytime"
          />
          <FAQItem
            question="When will I receive my order?"
            answer="Orders are processed within 24–48 hours and shipped directly from our U.S. fulfillment center. Delivery typically takes 3–10 business days, depending on your location. You'll receive a confirmation email with tracking information once your order ships."
          />
          <FAQItem
            question="Is it safe to buy online?"
            answer="Yes. Our website uses 256-bit SSL encryption and secure, PCI-compliant payment processors to ensure your personal and payment information is fully protected."
          />
          <FAQItem
            question="Will it work for me?"
            answer="Many users report more stable blood sugar levels, sustained daily energy, and fewer sugar cravings with consistent use of Glyco Pulse. Individual results may vary, but every purchase is backed by our 60-day satisfaction guarantee so you can try it risk-free."
          />
          <FAQItem
            question="Are there any side effects?"
            answer="Glyco Pulse is made with carefully selected natural ingredients that are generally recognized as safe when used as directed."
          />
          <FAQItem
            question="How long does one bottle last?"
            answer="Each bottle of Glyco Pulse contains 30 capsules, providing a 30-day supply when taken as directed."
          />
          <FAQItem
            question="Where is Glyco Pulse made?"
            answer="Glyco Pulse is manufactured and packaged in the USA under strict quality and safety standards for dietary supplements, using both domestic and carefully sourced global ingredients."
          />
        </div>
        <a
          href="https://sugarhealthnotice.com/news/begin/watch/wtc-2/?utm_source=Taboola_Acc-006-09&utm_medium=1184469&utm_campaign=TB3-09_CP-07_28-04&utm_term=4266248822&utm_content=TB3-09_CP-01_AD01#kits"
          className="relative text-white text-xl font-bold items-center bg-[linear-gradient(rgb(53,246,15)_0%,rgb(31,166,4)_100%)] border-b-lime-900 shadow-[rgba(31,166,4,0.35)_0px_8px_20px_0px,rgba(255,255,255,0.3)_0px_1px_0px_0px_inset] box-border caret-transparent flex justify-center leading-[30px] max-w-[400px] outline-[3px] uppercase w-full mb-[35px] p-[18px] rounded-[50px] border-t-white border-b-[6px] border-x-white md:text-2xl md:leading-9 before:accent-auto before:bg-[url('https://sugarhealthnotice.com/news/begin/watch/wtc-2/assets/img/cart.svg')] before:bg-center before:bg-no-repeat before:bg-contain before:box-border before:caret-transparent before:text-white before:block before:text-xl before:not-italic before:normal-nums before:font-bold before:h-6 before:tracking-[normal] before:leading-[30px] before:list-outside before:list-none before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:uppercase before:visible before:w-6 before:mr-4 before:border-separate before:font-montserrat before:md:text-2xl before:md:leading-9 hover:shadow-[rgba(31,166,4,0.45)_0px_14px_35px_0px,rgba(255,255,255,0.4)_0px_1px_0px_0px_inset]"
        >
          Order Now
        </a>
      </div>
    </section>
  );
};
