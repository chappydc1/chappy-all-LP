export type PrimepicksArticlePreviewProps = {
  variantClass: string;
};

export const PrimepicksArticlePreview = (props: PrimepicksArticlePreviewProps) => {
  return (
    <div
      className={`text-neutral-600 bg-neutral-100 box-border caret-transparent text-ellipsis overflow-hidden mt-0 pt-3 pb-6 px-4 md:bg-transparent md:mt-6 md:p-0 ${props.variantClass}`}
    >
      <p className="text-sm box-border caret-transparent leading-5 mb-6 md:text-base md:leading-6">
        I've spent three months testing{" "}
        <a
          href="https://tagsleyshop.com/pp/us/"
          className="relative text-blue-600 text-sm font-bold box-border caret-transparent leading-5 underline md:text-base md:leading-6"
        >
          <strong className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
            top tracking cards
          </strong>
        </a>{" "}
        because most solutions completely miss the mark. AirTags are too thick,
        Tile trackers die when you need them, and subscription trackers drain
        your bank account.
      </p>
      <p className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
        After real-world testing in wallets, laptop bags, purses, and travel
        pouches, I've found five that actually work anywhere you need them. One
        completely changed how I think about never losing important things.
      </p>
    </div>
  );
};
