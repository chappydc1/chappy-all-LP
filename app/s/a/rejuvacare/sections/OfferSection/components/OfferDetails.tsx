import { RejuvacareBundleOption } from "../../OfferSection/components/BundleOption";
import { RejuvacareDoctorReview } from "../../../components/DoctorReview";

export const RejuvacareOfferDetails = () => {
  return (
    <div className="items-center box-border caret-transparent flex-col min-h-0 min-w-0 outline-[3px] w-full pt-3 px-[15px] md:min-h-[auto] md:min-w-[auto] md:px-2.5">
      <div className="text-orange-700 text-xl font-extrabold box-border caret-transparent leading-7 outline-[3px] text-left p-px font-montserrat">
        <div className="text-base font-bold box-border caret-transparent leading-5 outline-[3px] md:text-xl md:font-extrabold md:leading-7">
          TODAY ONLY SPECIAL OFFER
        </div>
      </div>
      <div className="text-black text-[33px] font-bold box-border caret-transparent leading-[42px] outline-[3px] text-left p-px font-montserrat">
        <div className="text-[23px] box-border caret-transparent leading-[33px] outline-[3px] md:text-[33px] md:leading-[42px]">
          RejuvaKnee Massager
        </div>
      </div>
      <div className="items-center box-border caret-transparent flex outline-[3px] w-full mt-2.5"></div>
      <div className="items-center box-border caret-transparent flex justify-between outline-[3px] w-full">
        <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] w-[250px] md:w-[76%]">
          <div className="text-xs box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] text-left p-px font-montserrat md:text-base md:leading-6">
            Excellent
          </div>
          <img
            title=""
            src="/images/rejuvacare/1722845257974_excellent_rating.svg"
            alt=""
            className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[84px] ml-3 md:w-[150px]"
          />
        </div>
        <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] w-[300px] pl-2.5 md:w-full md:pl-0">
          <div className="text-xs box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] text-left ml-2.5 p-px font-montserrat md:text-base md:leading-6 md:ml-5">
            4,267 reviews on
          </div>
          <img
            title=""
            src="/images/rejuvacare/1722845332292_trustpilot.svg"
            alt=""
            className="text-black items-center box-border caret-transparent h-5 justify-start max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[70px] ml-[5px] md:w-20"
          />
        </div>
      </div>
      <div className="box-border caret-transparent outline-[3px] text-left mt-3 font-montserrat">
        RejuvaKnee’s “Triple Method” Massager Uses Advanced Therapy Technology
        to Promote Blood Circulation in Your Knees and Relieve Pain, Stiffness,
        And Muscle Tension Without Invasive Surgery Or Painkillers
        <div className="box-border caret-transparent outline-[3px]">
          <br className="box-border caret-transparent outline-[3px]" />
        </div>
        <div className="box-border caret-transparent outline-[3px]">
          <b className="font-bold box-border caret-transparent outline-[3px]">
            Save more when you buy multiple units
          </b>
        </div>
      </div>
      <RejuvacareBundleOption
        headerClassName="bg-emerald-500"
        titleWrapperClassName="items-center box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full md:w-[90%]"
        titleClassName="text-white font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-left p-px font-montserrat md:leading-6"
        title="2x RejuvaKnee Massagers"
        priceWrapperClassName="items-center box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full pl-px md:justify-end md:pl-2.5"
        originalPriceWrapperClassName="text-white box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] line-through md:leading-6"
        originalPrice="$239.99"
        eachPriceClassName="text-white box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] ml-2.5 mr-[5px] py-px font-montserrat md:leading-6"
        eachPrice="$67.50"
        discountClassName="leading-4"
        discountText="40% OFF"
        spacerClassName="text-white"
        mainKitQuantity="2 RejuvaKnee "
        mainKitDescription="Triple Method Massager Treatment Kits"
        bonusContent={
          <div className="items-start box-border caret-transparent flex justify-start outline-[3px] text-left w-full mt-2.5 md:items-center">
            <img
              title=""
              src="/images/rejuvacare/1722846383829_icon_check.webp"
              alt=""
              className="text-black box-border caret-transparent h-[25px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left w-[25px] ml-px mr-2.5"
            />
            <div className="box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-left p-px font-montserrat">
              <div className="box-border caret-transparent leading-6 outline-[3px] text-left md:leading-5">
                <b className="font-bold box-border caret-transparent leading-6 outline-[3px] md:leading-5">
                  Free bonus gifts{" "}
                </b>
                including Arthritis Relief Nutrition Plan
              </div>
              <div className="box-border caret-transparent outline-[3px] text-left"></div>
            </div>
          </div>
        }
        compactDetails={false}
        showViewAll={false}
      />
      <div className="box-border caret-transparent outline-[3px] w-full mt-5">
        <a
          title="Get up to 50% off today only  "
          className="text-white text-[17px] font-extrabold self-center bg-emerald-500 shadow-[rgba(0,0,0,0.19)_0px_2px_7px_1px] box-border caret-transparent flex justify-center leading-[23px] max-w-full outline-[3px] text-center w-full px-2.5 py-5 rounded-[10px] font-montserrat md:text-[19px] md:leading-[23.16px]"
        >
          Continue to select your bundle  ➜
        </a>
      </div>
      <RejuvacareDoctorReview
        containerVariant="bg-neutral-100 rounded-[5px]"
        badgeVariant="leading-6 md:leading-[19.2px]"
      />
      <div className="box-border caret-transparent outline-[3px] w-full mt-5">
        <img
          title=""
          src="/images/rejuvacare/1722821080411_cc_payment_options.webp"
          alt=""
          className="text-black box-border caret-transparent inline max-w-full outline-[3px] w-full"
        />
      </div>
      <div className="items-start box-border caret-transparent flex justify-start outline-[3px] w-full px-2.5 py-3 md:items-center md:justify-center">
        <img
          title=""
          src="/images/rejuvacare/1722847956492_lock.svg"
          alt=""
          className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[15px] mr-2.5 mt-0.5 md:mt-0"
        />
        <div className="box-border caret-transparent leading-[19px] min-h-[auto] min-w-[auto] outline-[3px] text-left p-px font-montserrat md:leading-6">
          All transactions are secure and encrypted
        </div>
      </div>
      <div className="items-start bg-neutral-100 box-border caret-transparent flex flex-col justify-center outline-[3px] w-full px-[15px] py-3 rounded-[15px]">
        <div className="items-center box-border caret-transparent flex justify-around min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="items-center box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full"></div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-around min-h-[auto] min-w-[auto] outline-[3px] w-full"></div>
        <div className="box-border caret-transparent flex flex-col justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full py-3 md:flex-row">
          <div className="items-start box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
            <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full px-2.5 py-3">
              <img
                title=""
                src="/images/rejuvacare/1722848377355_line_icon_free_shipping.webp"
                alt=""
                className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-10"
              />
              <div className="text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] p-px font-montserrat">
                Free Shipping
                <div className="box-border caret-transparent outline-[3px]">
                  <br className="box-border caret-transparent outline-[3px]" />
                </div>
              </div>
            </div>
            <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full px-2.5 py-3">
              <img
                title=""
                src="/images/rejuvacare/1722848371698_line_icon_90_day_guarantee.webp"
                alt=""
                className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-10"
              />
              <div className="text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] p-px font-montserrat">
                90-Day Money Back Guarantee
              </div>
            </div>
          </div>
          <div className="items-stretch box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
            <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full px-2.5 py-3">
              <img
                title=""
                src="/images/rejuvacare/1722848366371_line_icon_customer_service.webp"
                alt=""
                className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-10"
              />
              <div className="text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] p-px font-montserrat">
                24/7 Customer Service
              </div>
            </div>
            <div className="items-center box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] w-full px-2.5 py-3">
              <img
                title=""
                src="/images/rejuvacare/1722848354019_line_icon_100k_happy_customers.webp"
                alt=""
                className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-10"
              />
              <div className="text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] p-px font-montserrat">
                Over 100,000 Happy Customers
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full px-2.5 py-3">
          <div className="box-border caret-transparent outline-[3px] p-px font-montserrat">
            <b className="font-bold box-border caret-transparent outline-[3px]">
              No Risk. No Pressure.
            </b>
          </div>
        </div>
      </div>
      <div className="bg-stone-100 box-border caret-transparent outline-[3px] w-full mt-5 rounded-[10px]"></div>
    </div>
  );
};
