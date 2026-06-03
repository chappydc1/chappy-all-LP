import { content, renderInlineBold } from "../../../content";

export const VideoContent = () => {
  const v = content.video;
  return (
    <div className="items-start box-border caret-transparent flex flex-col justify-start max-w-full min-h-[auto] min-w-[auto] md:max-w-[46%]">
      <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] mb-1.5 md:mb-[5px]">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-[15px] flex items-center gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-blue-500 md:w-[22px] md:h-[22px]"
              aria-hidden="true"
            >
              <path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.58L12 17.6l-5.9 3.08 1.13-6.58L2.45 9.44l6.6-.96L12 2.5z" />
            </svg>
          ))}
          <span className="sr-only">5 out of 5 stars</span>
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
          <div className="text-black text-lg font-normal leading-5 box-border caret-transparent m-0 p-0">
            {v.rating}
          </div>
        </div>
      </div>
      <h1 className="text-black text-2xl font-extrabold box-border caret-transparent leading-[27px] min-h-[auto] min-w-[auto] mt-[16.08px] md:text-3xl md:leading-[35px] md:mt-[20.1px]">
        {v.headline}
      </h1>
      <div className="bg-slate-600 box-border caret-transparent h-[3px] min-h-[auto] min-w-[auto] text-left w-6/12 mt-[5px] mb-2.5"></div>
      <p className="text-black text-sm font-normal leading-5 box-border caret-transparent min-h-[auto] min-w-[auto] mb-6">
        {v.bodyParagraphs.map((p, i) => (
          <span key={i}>
            {renderInlineBold(p)}
            {i < v.bodyParagraphs.length - 1 && (
              <>
                <br />
                <br />
              </>
            )}
          </span>
        ))}
      </p>
    </div>
  );
};
