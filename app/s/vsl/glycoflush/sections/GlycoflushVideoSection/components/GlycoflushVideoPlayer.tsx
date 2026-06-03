"use client";

export const GlycoflushVideoPlayer = () => {
  return (
    <div className="box-border caret-transparent block max-w-full outline-[3px] w-full z-[1] mx-auto font-roboto md:max-w-[400px]">
      <div className="relative caret-transparent outline-[3px] w-full z-0 pt-[177.78%]">
        <div
          id="vid_69e16f36ed35062270c606c2"
          className="absolute box-border caret-transparent w-full h-full left-0 top-0"
          style={{ background: "#C53C80" }}
        >
          <video
            id="69e16f36ed35062270c606c2"
            playsInline
            preload="metadata"
            poster="https://cdn.converteai.net/b5e8472d-3421-4675-a219-1ae1b636b21f/69e16ee9750b24d3132e385e/poster.jpg"
            className="w-full h-full"
          />
        </div>
        <div className="absolute text-white items-center bg-black box-border caret-transparent flex h-full justify-center outline-[3px] w-full z-[99999] left-0 top-0">
          <div className="aspect-square bg-[radial-gradient(farthest-side,rgb(229,9,20)_94%,rgba(0,0,0,0)),conic-gradient(rgba(0,0,0,0)_30%,rgb(229,9,20))] box-border caret-transparent outline-[3px] w-20 rounded-[50%]"></div>
          <div className="absolute text-lg font-semibold box-border caret-transparent outline-[3px] left-2/4 top-2/4">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
};
