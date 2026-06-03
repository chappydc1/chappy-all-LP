const bundles = [
  {
    label: "Starter",
    title: "2 Bottles",
    supply: "60 day supply",
    price: "$79.98",
    total: "$159.96 total",
    features: ["Daily routine starter", "Fast shipping", "60-day promise"],
    href: "https://portal.sugarhealthnotice.com/click/1?rtkcid=6a025cdd3afeb5f27c64826f&rtkcmpid=69e9869c8f7d94d0c2fd8a66&utm_source=Taboola_Acc-006-09&utm_medium=1184469&utm_campaign=TB3-09_CP-07_28-04&utm_term=4266248822&utm_content=TB3-09_CP-01_AD01",
  },
  {
    label: "Reader Pick",
    title: "6 Bottles",
    supply: "180 day supply",
    price: "$49.98",
    total: "$299.88 total",
    features: ["Best per-bottle value", "Free shipping", "Bonus reader savings"],
    href: "https://portal.sugarhealthnotice.com/click/3?rtkcid=6a025cdd3afeb5f27c64826f&rtkcmpid=69e9869c8f7d94d0c2fd8a66&utm_source=Taboola_Acc-006-09&utm_medium=1184469&utm_campaign=TB3-09_CP-07_28-04&utm_term=4266248822&utm_content=TB3-09_CP-01_AD01",
    featured: true,
  },
  {
    label: "Standard",
    title: "3 Bottles",
    supply: "90 day supply",
    price: "$69.98",
    total: "$209.94 total",
    features: ["Popular trial length", "Free shipping", "60-day promise"],
    href: "https://portal.sugarhealthnotice.com/click/2?rtkcid=6a025cdd3afeb5f27c64826f&rtkcmpid=69e9869c8f7d94d0c2fd8a66&utm_source=Taboola_Acc-006-09&utm_medium=1184469&utm_campaign=TB3-09_CP-07_28-04&utm_term=4266248822&utm_content=TB3-09_CP-01_AD01",
  },
];

export const PricingSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] py-10 md:py-16">
      <div className="box-border caret-transparent max-w-[1120px] outline-[3px] text-center w-[95%] mx-auto">
        <div className="mb-8">
          <span className="text-red-700 text-xs font-bold tracking-[1.2px] uppercase">
            Advertorial reader pricing
          </span>
          <h2 className="text-sky-950 text-[30px] font-extrabold leading-9 mt-2 md:text-[44px] md:leading-[52px]">
            Choose the bundle that fits your routine
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-5 outline-[3px] pl-0 md:grid-cols-3 md:items-stretch">
          {bundles.map((bundle) => (
            <li
              key={bundle.title}
              className={`box-border caret-transparent outline-[3px] ${
                bundle.featured ? "md:-mt-4" : ""
              }`}
            >
              <a
                href={bundle.href}
                className={`box-border caret-transparent flex h-full flex-col justify-between outline-[3px] text-left p-6 shadow-[rgba(15,23,42,0.08)_0px_12px_28px_0px] ${
                  bundle.featured
                    ? "bg-sky-950 text-white border border-sky-900"
                    : "bg-white text-zinc-900 border border-zinc-200"
                }`}
              >
                <div>
                  <span
                    className={`inline-flex text-xs font-bold tracking-[1px] uppercase px-3 py-1 ${
                      bundle.featured
                        ? "bg-yellow-300 text-sky-950"
                        : "bg-blue-50 text-sky-950"
                    }`}
                  >
                    {bundle.label}
                  </span>
                  <h3 className="text-[30px] font-extrabold leading-9 mt-5">
                    {bundle.title}
                  </h3>
                  <p
                    className={`text-base leading-6 mt-1 ${
                      bundle.featured ? "text-blue-100" : "text-zinc-600"
                    }`}
                  >
                    {bundle.supply}
                  </p>
                  <div className="my-6">
                    <strong className="text-[48px] font-extrabold leading-none">
                      {bundle.price}
                    </strong>
                    <span
                      className={`block text-sm leading-5 mt-2 ${
                        bundle.featured ? "text-blue-100" : "text-zinc-500"
                      }`}
                    >
                      per bottle
                    </span>
                  </div>
                  <ul className="grid gap-3 pl-0">
                    {bundle.features.map((feature) => (
                      <li
                        key={feature}
                        className="grid grid-cols-[20px_1fr] gap-2 text-sm leading-5"
                      >
                        <span
                          className={
                            bundle.featured ? "text-yellow-300" : "text-green-700"
                          }
                        >
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-7">
                  <span
                    className={`block text-sm font-bold leading-5 mb-3 ${
                      bundle.featured ? "text-blue-100" : "text-zinc-600"
                    }`}
                  >
                    {bundle.total}
                  </span>
                  <span
                    className={`box-border caret-transparent flex justify-center outline-[3px] text-sm font-bold uppercase px-4 py-3 ${
                      bundle.featured
                        ? "bg-green-600 text-white"
                        : "bg-sky-950 text-white"
                    }`}
                  >
                    Check availability
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
