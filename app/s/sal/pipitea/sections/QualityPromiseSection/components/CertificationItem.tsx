export type CertificationItemProps = {
  imageUrl: string;
  title: React.ReactNode;
  sizes?: string;
};

export const CertificationItem = (props: CertificationItemProps) => {
  return (
    <div
      className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] outline-[3px]"
    >
      <div
        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
      >
        <div
          className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full"
        >
          <img
            src={props.imageUrl}
            alt=""
            sizes={props.sizes}
            title=""
            className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[94px]"
          />
        </div>
      </div>
      <div
        className="items-center box-border caret-transparent flex justify-center min-w-[auto] outline-[3px]"
      >
        <div
          className="text-black text-[16.0583px] box-border caret-transparent leading-[24.0875px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full mt-2.5 md:text-lg md:leading-[27px]"
        >
          <div
            className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] w-full md:text-lg md:leading-[27px]"
          >
            <p
              className="text-[16.0583px] box-border caret-transparent leading-[24.0875px] outline-[3px] md:text-lg md:leading-[27px]"
            >
              {props.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
