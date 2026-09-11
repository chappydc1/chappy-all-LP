import copy from "../../../copy.json"
import media from "../../../media.json"
import { ProductAccordionItem } from "./ProductAccordionItem"

export const ProductAccordion = () => {
  const accordion = copy.productHero.accordion;
  return (
    <div className="box-border caret-transparent outline-[3px] w-full mt-5">
      <div className="box-border caret-transparent outline-[3px] w-full">
        <div className="box-border caret-transparent outline-[3px]">
          {accordion.map((item, i) => (
            <div
              key={item.title}
              className={`box-border caret-transparent outline-[3px] border border-neutral-200 rounded-sm border-solid${i > 0 ? " mt-3 md:mt-[17px]" : ""}`}
            >
              <div className="box-border caret-transparent outline-[3px]">
                <ProductAccordionItem title={item.title}>
                  {item.type === "description" && (
                    <>
                      <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] font-montserrat md:text-base md:leading-[20.8px]">
                        <b className="text-[15px] font-bold box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
                          {item.heading}
                        </b>
                        <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
                          <br />
                          <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]"></div>
                          {item.paragraphs?.map((p, pi) => (
                            <div key={pi} className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
                              {p}
                              {pi < (item.paragraphs?.length ?? 0) - 1 && <br />}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full mt-5">
                        {item.bullets?.map((bullet, bi) => (
                          <div key={bi} className={`box-border caret-transparent flex outline-[3px] w-full${bi > 0 ? " mt-4" : ""}`}>
                            <img title="" src={media.icons.checkmark} alt="" className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-4 mr-2" />
                            <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] font-montserrat md:text-base md:leading-[20.8px]">
                              <span className="text-[15px] font-medium box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">{bullet.label}</span>
                              {" "}- {bullet.detail}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {item.type === "results" && (
                    <>
                      <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] font-montserrat md:text-base md:leading-[20.8px]">
                        {item.intro}
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full mt-5">
                        {item.timeline?.map((entry, ti) => (
                          <div key={ti} className={`box-border caret-transparent flex outline-[3px] w-full${ti > 0 ? " mt-4" : ""}`}>
                            <img title="" src={media.icons.checkmark} alt="" className="text-black box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-4 mr-2" />
                            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
                              <div className="text-black text-[15px] font-semibold box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] font-montserrat md:text-base md:leading-[20.8px]">{entry.week}</div>
                              <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] mt-[5px] font-montserrat md:text-base md:leading-[20.8px]">{entry.text}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {item.type === "guarantee" && (
                    <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] font-montserrat md:text-base md:leading-[20.8px]">
                      <b className="text-[15px] font-bold box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">{item.heading}</b>
                      <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
                        <br />
                        {item.paragraphs?.map((p, pi) => (
                          <div key={pi} className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
                            {p}
                            {pi < (item.paragraphs?.length ?? 0) - 1 && <br />}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.type === "shipping" && (
                    <div className="text-black text-[15px] box-border caret-transparent tracking-[-0.32px] leading-[19.5px] outline-[3px] font-montserrat md:text-base md:leading-[20.8px]">
                      <b className="text-[15px] font-bold box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">{item.heading}</b>
                      <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
                        {item.items?.map((entry, ei) => (
                          <div key={ei} className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">
                            <b className="text-[15px] font-bold box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">{entry.heading}</b>
                            <div className="text-[15px] box-border caret-transparent leading-[19.5px] outline-[3px] md:text-base md:leading-[20.8px]">{entry.text}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </ProductAccordionItem>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
