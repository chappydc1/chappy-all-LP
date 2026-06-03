import { HeroSection } from "../HeroSection";
import { ProductList } from "../ProductList";

type MainProps = {
  heroBgSrc: string;
  heading: string;
  subheading: string;
  date: string;
  products: Parameters<typeof ProductList>[0]["products"];
  productImages: Parameters<typeof ProductList>[0]["productImages"];
  articleMedia: Parameters<typeof ProductList>[0]["articleMedia"];
  ui: Parameters<typeof ProductList>[0]["ui"];
  articles: Parameters<typeof ProductList>[0]["articles"];
  medviUrl: string;
  remedyUrl: string;
};

export const Main = ({
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
                <HeroSection
                  backgroundSrc={heroBgSrc}
                  heading={heading}
                  subheading={subheading}
                  date={date}
                />
              </div>
              <ProductList
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
