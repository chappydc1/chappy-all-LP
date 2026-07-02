// @ts-nocheck
import adv from "../../../adv.json";
import media from "../../../media.json";
import { IngredientCard } from "./IngredientCard";

export const IngredientsSection = () => {
  return (
    <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mb-6 mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
      <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
        <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left mb-2 md:text-base md:leading-[28.8px]">
          <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
            <h2 className="text-neutral-900 text-2xl font-bold bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[31.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden bg-center font-playfair_display md:text-[32px] md:leading-[41.6px]">
              {adv.ingredients.heading}
            </h2>
          </div>
        </div>
        <IngredientCard
          rootClassName=""
          imageSrc={media.ingredients.items[0].imageSrc}
          title={adv.ingredients.items[0].title}
        >
          <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left md:text-base md:leading-[28.8px]">
            <div className="text-[15px] box-border caret-transparent flex leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
              <div className="text-black text-lg bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[25.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center w-full overflow-hidden bg-center font-bitter md:leading-[27px]">
                <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
                  {adv.ingredients.items[0].paragraphs[0]}
                </p>
                <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
                  <br className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]" />
                  {adv.ingredients.items[0].paragraphs[1]}
                </p>
                <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
                  {adv.ingredients.items[0].paragraphs[2]}
                </p>
                <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
                  {adv.ingredients.items[0].paragraphs[3]}
                </p>
                <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
                  {adv.ingredients.items[0].paragraphs[4]}
                </p>
                <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
                  {adv.ingredients.items[0].paragraphs[5]}
                </p>
              </div>
            </div>
          </div>
        </IngredientCard>
        <IngredientCard
          rootClassName="mb-4 md:mb-8"
          imageSrc={media.ingredients.items[1].imageSrc}
          title={adv.ingredients.items[1].title}
        >
          <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
            {adv.ingredients.items[1].paragraphs[0]}
          </p>
          <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
            {adv.ingredients.items[1].paragraphs[1]}
          </p>
          <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
            {adv.ingredients.items[1].paragraphs[2]}
          </p>
          <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
            {adv.ingredients.items[1].paragraphs[3]}
          </p>
          <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
            {adv.ingredients.items[1].paragraphs[4]}
          </p>
        </IngredientCard>
        <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mx-auto md:text-base md:leading-[28.8px] md:w-[1200px]">
          <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
            <IngredientCard
              rootClassName="mb-4"
              imageSrc={media.ingredients.items[2].imageSrc}
              title={adv.ingredients.items[2].title}
            >
              <>
                <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
                  {adv.ingredients.items[2].paragraphs[0]}
                </p>
                <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
                  {adv.ingredients.items[2].paragraphs[1]}
                </p>
                <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
                  {adv.ingredients.items[2].paragraphs[2]}
                </p>
              </>
            </IngredientCard>
            <IngredientCard
              rootClassName="mb-4"
              imageSrc={media.ingredients.items[3].imageSrc}
              title={adv.ingredients.items[3].title}
            >
              <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
                {adv.ingredients.items[3].paragraphs[0]}
              </p>
            </IngredientCard>
            <IngredientCard
              rootClassName="mb-4"
              imageSrc={media.ingredients.items[4].imageSrc}
              title={adv.ingredients.items[4].title}
            >
              <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
                {adv.ingredients.items[4].paragraphs[0]}
              </p>
            </IngredientCard>
            <IngredientCard
              rootClassName="mb-4 md:mb-0"
              imageSrc={media.ingredients.items[5].imageSrc}
              title={adv.ingredients.items[5].title}
            >
              <p className="box-border caret-transparent leading-[25.2px] max-w-full outline-[3px] md:leading-[27px]">
                {adv.ingredients.items[5].paragraphs[0]}
              </p>
            </IngredientCard>
          </div>
        </div>
      </div>
    </div>
  );
};
