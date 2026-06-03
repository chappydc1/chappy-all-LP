import { GetokinawatonicFooterLinks } from "../GetokinawatonicFooter/components/GetokinawatonicFooterLinks";
import { GetokinawatonicFooterDisclaimer } from "../GetokinawatonicFooter/components/GetokinawatonicFooterDisclaimer";

export const GetokinawatonicFooter = () => {
  return (
    <section className="text-zinc-500 box-border caret-transparent outline-[3px] text-center pt-[3%]">
      <div className="box-border caret-transparent outline-[3px] w-auto mx-auto px-0 md:w-[1170px] md:px-[15px] before:accent-auto before:box-border before:caret-transparent before:text-zinc-500 before:table before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4286px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-apple_system after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-zinc-500 after:table after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21.4286px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-apple_system">
        <div className="box-border caret-transparent outline-[3px] mx-0 px-0 md:mx-[10%] md:px-5">
          <div className="box-border caret-transparent outline-[3px] mx-0 md:ml-[-15px] md:mr-[-15px] before:accent-auto before:box-border before:caret-transparent before:text-zinc-500 before:table before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4286px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-apple_system after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-zinc-500 after:table after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21.4286px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-apple_system">
            <div className="relative box-border caret-transparent float-none min-h-px outline-[3px] w-auto px-[15px] md:float-left md:w-full">
              <div className="box-border caret-transparent outline-[3px] mt-0 mx-0 pt-[30px] md:ml-[-15px] md:mr-[-15px] md:mt-2.5 before:accent-auto before:box-border before:caret-transparent before:text-zinc-500 before:table before:text-[15px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21.4286px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-apple_system after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-zinc-500 after:table after:text-[15px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21.4286px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-apple_system">
                <GetokinawatonicFooterLinks />
              </div>
              <GetokinawatonicFooterDisclaimer
                text="© Copyright Okinawa Flat Belly Tonic. All rights reserved. "
                variantClass="text-[13px] leading-[18.5714px] md:text-base md:leading-[22.8571px]"
              />
              <GetokinawatonicFooterDisclaimer
                text="To assure you of the confidence we have in our products and to put you at ease with your investment, we provide you with a full 90-day money back guarantee for your purchase. If for any reason you are not entirely satisfied with your product during the first 90 days of use, all you need to do is send us an email requesting a refund to support@flatbellytonic.com. Once you return the products (if possible) to us, you will receive a full refund."
                variantClass="text-[11px] leading-[15.7143px]"
              />
              <GetokinawatonicFooterDisclaimer
                text="These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease."
                variantClass="text-[11px] leading-[15.7143px]"
              />
              <GetokinawatonicFooterDisclaimer
                text="The content of this site is for informational purposes only, and is not intended to replace professional medical advice, diagnosis or treatment. Always seek the advice of your doctor or other qualified health care professional about a medical condition, a suspected medical condition, and before starting a diet, exercise, or supplementation program or take or stop a medication."
                variantClass="text-[11px] box-border caret-transparent leading-[15.7143px] outline-[3px] mb-2.5"
              />
              <GetokinawatonicFooterDisclaimer
                text='The use of any information provided by this site and others appearing on the site is solely at your own risk. The site and its contents are provided "as is". ClickBank is the reseller of products on this site. CLICKBANK® is a registered trademark of Click Sales Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Boise Boise, ID 83709, USA and used with permission. The role of ClickBank as a retailer does not constitute an endorsement, endorsement or review of such products or any claim, statement or opinion used in the promotion of such products.'
                variantClass="text-[11px] leading-[15.7143px] pb-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
