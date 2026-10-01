import type { Metadata } from "next";
import adv from "./copy.json";
import media from "./media.json";
import { SleepingNavbar } from "./components/SleepingNavbar";
import { SleepingBreadcrumb } from "./components/SleepingBreadcrumb";
import { SleepingProductCard } from "./components/SleepingProductCard";
import { SleepingNewsletter } from "./components/SleepingNewsletter";
import { SleepingFooter } from "./components/SleepingFooter";
import { SleepingFAQSection } from "./components/SleepingFAQSection";
import { SleepingTopPick } from "./components/SleepingTopPick";

export const metadata: Metadata = {
  title: adv.meta.title,
  description: adv.meta.description,
};

export default function SleepingPage(): React.JSX.Element {
  return (
    <div className="text-black text-sm font-normal bg-white w-full overflow-x-hidden font-[Lato,sans-serif]">
      <SleepingNavbar adv={adv.navbar} media={media} />
      <main className="flex flex-col items-center w-full">
        <SleepingBreadcrumb items={adv.breadcrumb} />
        <div className="box-border flex flex-col max-w-none min-h-[auto] w-full mb-0 lg:max-w-screen-lg lg:min-w-[1024px] lg:mb-20">
          <div className="static bg-transparent p-0 lg:relative lg:items-start lg:bg-sky-300/10 lg:flex lg:flex-col lg:px-[15px] lg:py-2">
            <h1 className="text-slate-700 text-[22.4px] font-bold border-b border-b-slate-700/30 flow-root leading-7 min-h-3.5 text-left uppercase overflow-hidden mr-auto my-2.5 pb-2.5 px-2.5 lg:text-black lg:text-[35px] lg:font-extrabold lg:leading-[42px] lg:mt-0 lg:pb-0 lg:px-0">
              {adv.hero.title}
            </h1>
            <div className="relative text-slate-700 text-left pl-2.5 lg:hidden">
              <b className="font-bold">Last Updated:</b> {adv.hero.lastUpdated}
            </div>
            <div className="hidden min-h-0 text-center px-2.5 py-0 lg:flow-root lg:text-left lg:px-0 lg:py-2.5">
              <span className="text-stone-500 text-[18.2px] font-bold leading-[25.2px] text-left">
                {adv.hero.subtitle}
              </span>
            </div>
            <div className="hidden lg:flex items-baseline flex-row-reverse justify-between w-full pr-2.5">
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
          <div className="static lg:relative">
            {adv.products.slice(0, 3).map((product, i) => (
              <SleepingProductCard
                key={product.rank}
                {...product}
                imageSrc={media.products[i]}
                imageAlt={product.name}
                starFull={media.icons.starFull}
                starHalf={media.icons.starHalf}
                checkIcon={media.icons.check}
                amazonBadge={media.amazonBadge}
                featured={i === 0}
              />
            ))}
          </div>
          <SleepingTopPick
            copy={adv.topPick}
            imageSrc={media.topPick}
            checkIcon={media.icons.check}
            starFull={media.icons.starFull}
          />
          {adv.products.slice(3).map((product, i) => (
            <SleepingProductCard
              key={product.rank}
              {...product}
              imageSrc={media.products[3 + i]}
              imageAlt={product.name}
              starFull={media.icons.starFull}
              starHalf={media.icons.starHalf}
              checkIcon={media.icons.check}
              amazonBadge={media.amazonBadge}
              wrapperClassName="static lg:relative"
            />
          ))}

          <SleepingNewsletter copy={adv.newsletter} />
          <div className="text-left pt-10 pb-2.5 px-2.5">
            <h2 className="text-xl font-bold leading-[25.7143px] decoration-sky-500/80 underline uppercase pb-2.5 lg:text-[32px] lg:leading-[41.1429px] lg:pb-[30px]">
              {adv.relatedCategories.title}
            </h2>
            <div className="gap-x-4 grid grid-cols-[repeat(2,1fr)] gap-y-4 capitalize w-full ml-4 lg:flex lg:flex-row">
              {adv.relatedCategories.items.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="items-center flex flex-col h-[150px] justify-center w-[150px] border-neutral-300 rounded-2xl border-2 border-solid lg:h-[200px] lg:w-[200px]"
                >
                  <img
                    alt={item.label}
                    src={media.relatedCategories[i]}
                    className="h-[120px] w-[120px] object-scale-down lg:h-[120px] lg:w-[120px]"
                  />
                  <div className="text-[16.8px] font-semibold text-center pt-2.5 pb-[5px] px-[5px]">
                    {item.label}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="text-left pt-10 pb-2.5 px-2.5">
            <h2 className="text-xl font-bold leading-[25.7143px] decoration-sky-500/80 underline uppercase pb-2.5 lg:text-[32px] lg:leading-[41.1429px] lg:pb-[30px]">
              {adv.overview.title}
            </h2>
            {adv.overview.paragraphs.map((p, i) => (
              <p key={i} className="text-[15.4px] font-light leading-[25.2px] mt-[15px] lg:text-[19.6px] lg:leading-[30.8px] lg:mt-10">
                {p}
              </p>
            ))}
          </div>
          <div className="text-left pt-5 pb-2.5 px-2.5">
            <h2 className="text-xl font-bold leading-[25.7143px] decoration-sky-500/80 underline uppercase pb-2.5 lg:text-[32px] lg:leading-[41.1429px] lg:pb-[30px]">
              {adv.topList.title}
            </h2>
            {adv.topList.items.map((name, i) => (
              <a key={i} href="#" className="block">
                <span className="text-sm font-bold flow-root leading-[25.2px] max-h-[30px] overflow-hidden pr-[15px] lg:text-[19.6px] lg:leading-[35px] lg:max-h-[35px]">
                  • {name}
                </span>
              </a>
            ))}
          </div>
          <div className="pt-5" />
          <SleepingFAQSection faq={adv.faq} />
        </div>
        <div className="text-stone-500 text-[15.4px] italic px-5 py-2.5">
          <a href="#" className="mr-1">Privacy Policy</a>
          {" "}and{" "}
          <a href="#" className="ml-1">Terms of Service</a>
          {" "}apply.
        </div>
        <SleepingFooter adv={adv.footer} media={media} />
      </main>
    </div>
  );
}
