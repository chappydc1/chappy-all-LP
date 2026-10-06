import copy from "../../copy.json";

export const EarCleanerFooter = () => {
  const { disclaimer, copyright, links } = copy.footer;

  return (
    <div className="relative text-white items-center bg-indigo-950 box-border gap-x-4 gap-y-2 border-b-white border-x-white border-t pb-32 md:static md:pb-0">
      <div className="box-border w-full z-[999] px-4 md:px-10">
        <div className="text-xs items-center box-border flex flex-col justify-center leading-[18px] gap-y-4 py-4 md:gap-y-[normal]">
          <div className="box-border min-h-[auto] min-w-[auto] max-w-screen-md">
            <div className="text-[10.4px] box-border leading-[15.6px] mb-8 pb-4 border-b border-white">
              {disclaimer}
            </div>
          </div>
          <div className="box-border min-h-[auto] min-w-[auto] text-center">
            {copyright}{" "}
            {links.map((link, index) => (
              <span key={link.label}>
                {index > 0 && "| "}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box-border underline hover:text-white/80 transition-colors duration-200 mx-1"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
