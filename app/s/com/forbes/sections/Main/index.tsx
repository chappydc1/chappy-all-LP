import { ForbesHeroSection } from "../HeroSection";
import { ForbesProductList } from "../ProductList";

type MainProps = {
  heroBgSrc: string;
  heading: string;
  subheading: string;
  date: string;
  products: Parameters<typeof ForbesProductList>[0]["products"];
  productImages: Parameters<typeof ForbesProductList>[0]["productImages"];
  articleMedia: Parameters<typeof ForbesProductList>[0]["articleMedia"];
  ui: Parameters<typeof ForbesProductList>[0]["ui"];
  articles: Parameters<typeof ForbesProductList>[0]["articles"];
  medviUrl: string;
  remedyUrl: string;
};

export const ForbesMain = ({
  heroBgSrc,
  heading,
  subheading,
  date,
  products,
  productImages,
  articleMedia,
  ui,
  articles,
  medviUrl,
  remedyUrl,
}: MainProps) => {
  return (
    <main className="box-border caret-transparent grow min-h-[auto] min-w-[auto]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <div className="items-stretch box-border caret-transparent flex flex-col">
              <div className="relative box-border caret-transparent flex flex-col shrink-0 min-h-[auto] min-w-[auto]">
                <ForbesHeroSection
                  backgroundSrc={heroBgSrc}
                  heading={heading}
                  subheading={subheading}
                  date={date}
                />
              </div>
              <ForbesProductList
                products={products}
                productImages={productImages}
                articleMedia={articleMedia}
                ui={ui}
                articles={articles}
                medviUrl={medviUrl}
                remedyUrl={remedyUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
