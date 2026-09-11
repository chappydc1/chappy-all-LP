"use client";

import { useState } from "react";

export type FooterColumnProps = {
  iconUrl: string;
  iconAlt: string;
  title: string;
  links: Array<{
    href: string;
    text: string;
  }>;
  isMobile?: boolean;
  iconClassName?: string;
  textOnlyTitle?: boolean;
};

export const FooterColumn = (props: FooterColumnProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (props.isMobile) {
    return (
      <div className="box-border caret-transparent col-end-[span_2] col-start-[span_2] min-h-[auto] min-w-[auto] block mb-10 md:hidden md:min-h-0 md:min-w-0">
        <div className="box-border caret-transparent">
          <div className="border-b-lime-950/80 border-l-lime-950/80 border-r-lime-950/80 box-border caret-transparent w-full border-t-white border-t border-solid">
            <div className="items-center box-border caret-transparent flex justify-between w-full">
              {props.textOnlyTitle ? (
                <h3 className="text-[#ffcc2f] text-2xl font-normal font-mango-display box-border caret-transparent leading-6 flex items-center justify-between antialiased py-4">
                  {props.title}
                </h3>
              ) : (
                <div className="box-border caret-transparent max-w-[133px] min-h-[auto] min-w-[auto] w-full my-4 md:min-h-0 md:min-w-0">
                  <img
                    src={props.iconUrl}
                    alt={props.iconAlt}
                    className={
                      props.iconClassName ||
                      "box-border caret-transparent -mt-4 md:mt-0"
                    }
                  />
                </div>
              )}
              <button
                onClick={() => setIsOpen((o) => !o)}
                aria-expanded={isOpen}
                aria-label={`Toggle ${props.title} links`}
                className="text-white bg-transparent caret-transparent block h-6 min-h-[auto] min-w-[auto] text-center w-6 ml-10 p-0 md:min-h-0 md:min-w-0"
              >
                <img
                  src="/lp-images-files-videos-fonts/images/product/icon-31.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-6 w-6"
                />
              </button>
            </div>
            <div
              className={`box-border caret-transparent overflow-hidden transition-all duration-300 ${isOpen ? "h-auto" : "h-0"}`}
            >
              <div className="text-white box-border caret-transparent -mt-1 pr-10 pb-8">
                <ul className="box-border caret-transparent list-none mb-8 pl-0">
                  {props.links.map((link, index) => (
                    <li
                      key={index}
                      className="text-[15px] box-border caret-transparent leading-[15px]"
                    >
                      <a
                        href={link.href}
                        className="text-lg font-medium items-center box-border caret-transparent flex leading-[32.4px] py-2"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent col-end-[span_2] col-start-[span_2] min-h-[auto] min-w-[auto]">
      <div className="box-border caret-transparent hidden md:block">
        {props.textOnlyTitle ? null : (
          <div className="box-border caret-transparent max-w-[100px] mb-4">
            <img
              src={props.iconUrl}
              alt={props.iconAlt}
              className={
                props.iconClassName ||
                "box-border caret-transparent -mt-4 md:mt-0"
              }
            />
          </div>
        )}
        {props.textOnlyTitle ? (
          <h3 className="text-[#ffcc2f] text-2xl font-normal font-mango-display box-border caret-transparent mb-4 leading-6 flex items-center justify-between antialiased">
            {props.title}
          </h3>
        ) : null}
        <ul className="box-border caret-transparent list-none pl-0">
          {props.links.map((link, index) => (
            <li
              key={index}
              className="text-white text-[15px] box-border caret-transparent leading-[15px]"
            >
              <a
                href={link.href}
                className="text-sm font-medium items-center box-border caret-transparent flex leading-[25.2px]"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
