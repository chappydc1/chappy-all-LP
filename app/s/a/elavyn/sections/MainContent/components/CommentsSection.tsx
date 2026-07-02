// @ts-nocheck
import adv from "../../../adv.json";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";

export const CommentsSection = () => {
  return (
    <section className="text-[15px] box-border caret-transparent contents leading-[27px] outline-[3px] scroll-smooth font-ui_sans_serif md:text-base md:leading-[28.8px]">
      <section className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] w-[calc(100%_+_32px)] mx-auto md:text-base md:leading-[28.8px] md:w-full">
        <div className="relative text-[15px] content-start bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full outline-[3px] gap-y-0 w-full bg-center mx-auto py-8 md:text-base md:leading-[28.8px]">
          <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
            <div className="relative text-[15px] content-start box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,12fr)] grid-rows-[1fr] justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 w-full mx-auto md:text-base md:leading-[28.8px] md:w-[90%]">
              <div className="relative text-[15px] box-border caret-transparent flex flex-col justify-start leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-[28.8px]">
                <div className="text-[15px] bg-[url('')] bg-no-repeat bg-cover box-border caret-transparent leading-[27px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-left bg-center md:text-base md:leading-[28.8px]">
                  <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] md:text-base md:leading-[28.8px]">
                    <div className="text-[15px] box-border caret-transparent leading-[27px] max-w-full outline-[3px] mx-auto px-3 font-helvetica md:text-base md:leading-[28.8px]">
                      <CommentForm
                        rootVariantClass="text-zinc-900 text-lg font-bold leading-[32.4px] mb-2.5"
                        showInput={false}
                        label={adv.comments.heading}
                        placeholder=""
                        inputName=""
                      />
                      <CommentForm
                        rootVariantClass="text-[15px] bg-white leading-[27px] mb-4 md:text-base md:leading-[28.8px]"
                        showInput={true}
                        label=""
                        placeholder={adv.comments.placeholder}
                        inputName=""
                      />
                      <CommentList />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
