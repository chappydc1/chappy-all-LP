import { FeaturedProductCard } from "../../ProductListSection/components/FeaturedProductCard";
import { ProductCard } from "../../ProductListSection/components/ProductCard";

export const ProductListContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-[1000px] mx-auto px-4 md:px-0">
      <div className="relative box-border caret-transparent">
        <FeaturedProductCard />
        <ProductCard
          outerClassName="mb-6"
          headerClassName="min-h-[auto] min-w-[auto]"
          titleClassName="min-h-[auto] min-w-[auto]"
          title="2. Tile Pro"
          brandName="Target"
          imageUrl="/images/primepicks/Ml8uanBn.jpg"
          reviewScore="8.6"
          ratingImageUrl="/images/primepicks/TrustRate-4-half-stars-1-1-1-2-2-2.svg"
          ratingImageAlt="Tile Pro"
          ratingLabel="Good"
          customerReviewCount="1,134"
          visitSiteUrl="https://www.target.com/p/tile-by-life360-pro/-/A-91700381/#lnk=sametab"
          pros={[
            "Replaceable battery",
            "Wide compatibility",
            "Community finding network",
            "Established brand trust",
          ]}
          cons={["Weak volume", "Too thick for modern wallets"]}
        />
        <ProductCard
          outerClassName="mb-6"
          headerClassName="min-h-[auto] min-w-[auto]"
          titleClassName="min-h-[auto] min-w-[auto]"
          title="3. SmartTrack Card"
          brandName="Eufy"
          imageUrl="/images/primepicks/M18uanBn.jpg"
          reviewScore="8.2"
          ratingImageUrl="/images/primepicks/product-3-rating-2.svg"
          ratingImageAlt="SmartTrack Card"
          ratingLabel="Good"
          customerReviewCount="923"
          visitSiteUrl="https://www.eufy.com/products/t87b2011/?variant=42123903107258"
          pros={[
            "Affordable price point",
            "Decent build quality",
            "Easy setup process",
            "3-year battery life",
          ]}
          cons={[
            "Non-rechargeable battery",
            "Poor location updates",
            "Weak alert sound",
          ]}
        />
        <ProductCard
          outerClassName="hidden mb-6"
          headerClassName=""
          titleClassName=""
          title="4. Card Universal"
          brandName="pebblebee"
          imageUrl="/images/primepicks/NF8uanBn.jpg"
          reviewScore="7.1"
          ratingImageUrl="/images/primepicks/product-4-rating-2.svg"
          ratingImageAlt="Card Universal"
          ratingLabel="Average"
          customerReviewCount="543"
          visitSiteUrl="https://pebblebee.com/products/pebblebee-card-universal/"
          pros={[
            "Universal compatibility",
            "Decent tracking range",
            "Multiple color options",
          ]}
          cons={[
            "Requires special charger",
            "No left-behind alerts",
            "Cheap material",
            "Confusing setup process",
            "Not loud enough sound",
          ]}
        />
        <ProductCard
          outerClassName="hidden"
          headerClassName=""
          titleClassName=""
          title="5. Tracking Card"
          brandName="NOMAD"
          imageUrl="/images/primepicks/NV8uanBn.jpg"
          reviewScore="6.3"
          ratingImageUrl="/images/primepicks/product-5-rating-2.svg"
          ratingImageAlt="Tracking Card"
          ratingLabel="Average"
          customerReviewCount="291"
          visitSiteUrl="https://nomadgoods.com/eu/products/tracking-card/"
          pros={[
            "Premium brand reputation",
            "Sleek design aesthetic",
            "Solid construction feel",
          ]}
          cons={[
            "Poor tracking precision",
            "Weak audio alerts",
            "Inconsistent connectivity",
            "Limited battery life",
            "Overpriced",
          ]}
        />
      </div>
      <div className="relative box-border caret-transparent text-center mt-5 after:accent-auto after:bg-stone-300 after:box-border after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-px after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:-mt-0.5 after:border-separate after:left-0 after:top-2/4 after:font-open_sans">
        <button className="appearance-none bg-transparent caret-transparent w-full mx-auto p-0">
          <i className="relative text-stone-300 italic bg-stone-50 box-border caret-transparent block h-12 leading-[44px] w-12 z-[100] border border-stone-300 mx-auto rounded-[50%] border-solid">
            <img
              src="/images/primepicks/icon-2.svg"
              alt="Icon"
              className="box-border caret-transparent h-6 w-6 mt-3 mx-auto"
            />
          </i>
        </button>
      </div>
      <p className="text-stone-500 text-base box-border caret-transparent leading-6 text-center mt-[34px] mb-[39px] md:text-lg md:leading-[27px] md:mt-6 md:mb-0">
        See The Rest Of The List
      </p>
    </div>
  );
};
