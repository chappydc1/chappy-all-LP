import type { HowItWorksStepContent } from "../../../types";

const streamSrc = (id: string) =>
  `https://customer-sw7km7bonaql0e2y.cloudflarestream.com/${id}/iframe?muted=true&loop=true&autoplay=true&controls=false&poster=https%3A%2F%2Fcustomer-sw7km7bonaql0e2y.cloudflarestream.com%2F${id}%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`;

const renderParagraphs = (paragraphs: string[]) =>
  paragraphs.map((para, i) => (
    <span key={i}>
      {para}
      {i < paragraphs.length - 1 && (
        <>
          <br />
          <br />
        </>
      )}
    </span>
  ));

export const HowItWorksStep = (props: HowItWorksStepContent) => {
  return (
    <div className={`box-border caret-transparent md:pt-10 md:pb-[60px] ${props.containerVariantClass}`}>
      <div className="box-border caret-transparent max-w-none text-left w-full mx-auto md:max-w-[1200px] md:text-start">
        <div className="box-border caret-transparent text-center mb-0 px-5 md:mb-10 md:px-0">
          <h1 className="text-black text-2xl font-extrabold box-border caret-transparent leading-[27px] text-left mt-[16.08px] md:text-3xl md:leading-[35px] md:text-center md:mt-[20.1px]">
            <span className="text-blue-500 text-2xl box-border caret-transparent leading-[27px] text-left md:text-3xl md:leading-[35px] md:text-center">
              {props.stepNumber}
            </span>
            {props.title}
          </h1>
        </div>
        <div className="items-start box-border caret-transparent flex flex-col justify-center text-left mt-0 md:items-center md:flex-row-reverse md:justify-around md:text-start md:mt-[25px]">
          <div className="items-start box-border caret-transparent flex flex-col justify-start max-w-full min-h-[auto] min-w-[auto] text-left md:max-w-[46%] md:text-start">
            <p className="text-black text-base box-border caret-transparent min-h-[auto] min-w-[auto] text-left mb-0 px-5 py-[15px] md:text-sm md:text-start md:mb-6 md:p-0">
              {renderParagraphs(props.firstParagraphs)}
            </p>
          </div>
          <div className="items-start box-border caret-transparent block flex-col justify-start max-w-full min-h-[auto] min-w-[auto] text-left w-full md:flex md:max-w-[46%] md:text-start">
            <div className="box-border caret-transparent h-full min-h-0 min-w-0 text-left w-full md:min-h-[auto] md:min-w-[auto] md:text-start">
              <div className="box-border caret-transparent text-left md:text-start">
                <div className="relative box-border caret-transparent text-left pt-[75%] md:text-start">
                  <iframe
                    src={streamSrc(props.firstVideoId)}
                    title={`${props.title} — clip 1`}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                    className="absolute box-border caret-transparent h-full text-left align-baseline w-full left-0 top-0 md:text-start"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-start box-border caret-transparent flex flex-col justify-start text-left mt-0 md:items-center md:flex-row md:justify-around md:text-start md:mt-[25px]">
          <div className="items-start box-border caret-transparent flex flex-col justify-start max-w-full min-h-[auto] min-w-[auto] text-left md:max-w-[46%] md:text-start">
            <p className="text-black text-base box-border caret-transparent min-h-[auto] min-w-[auto] text-left mb-0 px-5 py-[15px] md:text-sm md:text-start md:mb-6 md:p-0">
              {renderParagraphs(props.secondParagraphs)}
            </p>
          </div>
          <div className="items-start box-border caret-transparent block flex-col justify-start max-w-full min-h-[auto] min-w-[auto] text-left w-full md:flex md:max-w-[46%] md:text-start">
            <div className="box-border caret-transparent h-full min-h-0 min-w-0 text-left w-full md:min-h-[auto] md:min-w-[auto] md:text-start">
              <div className="box-border caret-transparent text-left md:text-start">
                <div className="relative box-border caret-transparent text-left pt-[75%] md:text-start">
                  <iframe
                    src={streamSrc(props.secondVideoId)}
                    title={`${props.title} — clip 2`}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                    className="absolute box-border caret-transparent h-full text-left align-baseline w-full left-0 top-0 md:text-start"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
