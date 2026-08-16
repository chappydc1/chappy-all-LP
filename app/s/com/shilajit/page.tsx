import type { Metadata } from "next";
import adv from "./copy.json";
import media from "./media.json";
import { ShilajitNavbar } from "./components/ShilajitNavbar";
import { ShilajitBreadcrumb } from "./components/ShilajitBreadcrumb";
import { ShilajitProductCard } from "./components/ShilajitProductCard";
import { ShilajitNewsletter } from "./components/ShilajitNewsletter";
import { ShilajitFooter } from "./components/ShilajitFooter";
import { ShilajitFAQSection } from "./components/ShilajitFAQSection";

export const metadata: Metadata = {
  title: adv.meta.title,
  description: adv.meta.description,
};

export default function ShilajitPage() {
  return (
    <div className="text-black text-sm font-normal bg-white w-full overflow-x-hidden font-[Lato,sans-serif]">
      <ShilajitNavbar adv={adv.navbar} media={media} />
      <main className="flex flex-col items-center w-full">
        <ShilajitBreadcrumb items={adv.breadcrumb} />

        {/* Product list container */}
        <div className="box-border flex flex-col max-w-none min-h-[auto] w-full mb-0 md:max-w-screen-lg md:min-w-[1024px] md:mb-20">

          {/* Hero header */}
          <div className="static bg-transparent p-0 md:relative md:items-start md:bg-sky-300/10 md:flex md:flex-col md:px-[15px] md:py-2">
            <h1 className="text-slate-700 text-[22.4px] font-bold border-b border-b-slate-700/30 flow-root leading-7 min-h-3.5 text-left uppercase overflow-hidden mr-auto my-2.5 pb-2.5 px-2.5 md:text-black md:text-[35px] md:font-extrabold md:leading-[42px] md:mt-0 md:pb-0 md:px-0">
              {adv.hero.title}
            </h1>
            <div className="relative text-slate-700 text-left pl-2.5 md:hidden">
              <b className="font-bold">Last Updated:</b> {adv.hero.lastUpdated}
            </div>
            <div className="hidden min-h-0 text-center px-2.5 py-0 md:flow-root md:text-left md:px-0 md:py-2.5">
              <span className="text-stone-500 text-[18.2px] font-bold leading-[25.2px] text-left">
                {adv.hero.subtitle}
              </span>
            </div>
            <div className="hidden md:flex items-baseline flex-row-reverse justify-between w-full pr-2.5">
              <div className="flex items-center gap-1.5 font-semibold mr-3 pt-2.5">
                <img src={media.icons.disclosure} alt="Info" className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="text-slate-700">
                  {adv.hero.advertisingDisclosure}
                </span>
              </div>
              <div className="italic font-light flex items-baseline justify-between leading-[35px]">
                Updated At <b className="italic font-normal leading-[35px] ml-1">{adv.hero.lastUpdated}</b>
              </div>
            </div>
          </div>

          <h2 className="text-[22.4px] font-extrabold hidden leading-7 underline decoration-sky-500/80 w-full pt-5 pb-[25px] px-3 md:text-[39.2px] md:leading-[47.6px] md:pt-[60px] md:pb-[42px] md:px-[42px]">
            {adv.comparisonTitle}
          </h2>

          {/* Product cards */}
          <div className="static md:relative">
            {adv.products.slice(0, 3).map((product, i) => (
              <ShilajitProductCard
                key={product.rank}
                {...product}
                imageSrc={media.products[i]}
                imageAlt={product.name}
                starFull={media.icons.starFull}
                starHalf={media.icons.starHalf}
                checkIcon={media.icons.check}
                amazonBadge={media.amazonBadge}
              />
            ))}
          </div>
          {adv.products.slice(3).map((product, i) => (
            <ShilajitProductCard
              key={product.rank}
              {...product}
              imageSrc={media.products[3 + i]}
              imageAlt={product.name}
              starFull={media.icons.starFull}
              starHalf={media.icons.starHalf}
              checkIcon={media.icons.check}
              amazonBadge={media.amazonBadge}
              wrapperClassName="static md:relative"
            />
          ))}

          {/* Newsletter */}
          <ShilajitNewsletter copy={adv.newsletter} />

          {/* Related categories */}
          <div className="text-left pt-10 pb-2.5 px-2.5">
            <h2 className="text-xl font-bold leading-[25.7143px] decoration-sky-500/80 underline uppercase pb-2.5 md:text-[32px] md:leading-[41.1429px] md:pb-[30px]">
              {adv.relatedCategories.title}
            </h2>
            <div className="gap-x-4 grid grid-cols-[repeat(2,1fr)] gap-y-4 capitalize w-full ml-4 md:flex md:flex-row">
              {adv.relatedCategories.items.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="items-center flex flex-col h-[150px] justify-center w-[150px] border-neutral-300 rounded-2xl border-2 border-solid md:h-[200px] md:w-[200px]"
                >
                  <img
                    alt={item.label}
                    src={media.relatedCategories[i]}
                    className="h-[120px] w-[120px] object-scale-down md:h-[120px] md:w-[120px]"
                  />
                  <div className="text-[16.8px] font-semibold text-center pt-2.5 pb-[5px] px-[5px]">
                    {item.label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="text-left pt-10 pb-2.5 px-2.5">
            <h2 className="text-xl font-bold leading-[25.7143px] decoration-sky-500/80 underline uppercase pb-2.5 md:text-[32px] md:leading-[41.1429px] md:pb-[30px]">
              {adv.overview.title}
            </h2>
            {adv.overview.paragraphs.map((p, i) => (
              <p key={i} className="text-[15.4px] font-light leading-[25.2px] mt-[15px] md:text-[19.6px] md:leading-[30.8px] md:mt-10">
                {p}
              </p>
            ))}
          </div>

          {/* Top list */}
          <div className="text-left pt-5 pb-2.5 px-2.5">
            <h2 className="text-xl font-bold leading-[25.7143px] decoration-sky-500/80 underline uppercase pb-2.5 md:text-[32px] md:leading-[41.1429px] md:pb-[30px]">
              {adv.topList.title}
            </h2>
            {adv.topList.items.map((name, i) => (
              <a key={i} href="#" className="block">
                <span className="text-sm font-bold flow-root leading-[25.2px] max-h-[30px] overflow-hidden pr-[15px] md:text-[19.6px] md:leading-[35px] md:max-h-[35px]">
                  • {name}
                </span>
              </a>
            ))}
          </div>

          <div className="pt-5" />

          {/* FAQ */}
          <ShilajitFAQSection faq={adv.faq} />
        </div>

        <div className="text-stone-500 text-[15.4px] italic px-5 py-2.5">
          <a href="#" className="mr-1">Privacy Policy</a>
          {" "}and{" "}
          <a href="#" className="ml-1">Terms of Service</a>
          {" "}apply.
        </div>

        <ShilajitFooter adv={adv.footer} media={media} />
      </main>
    </div>
  );
}
