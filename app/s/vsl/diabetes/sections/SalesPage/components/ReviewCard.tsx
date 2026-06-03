export type DiabetesReviewCardProps = {
  containerClassName: string;
  avatarSrc: string;
  avatarAlt: string;
  reviewerName: string;
  reviewerLocation: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  reviewText: string;
  helpfulText: string;
};

export const DiabetesReviewCard = (props: DiabetesReviewCardProps) => {
  return (
    <div className={props.containerClassName}>
      <div className="box-border caret-transparent flex flex-wrap outline-[3px] break-words mx-auto">
        <div className="box-border caret-transparent shrink-0 max-w-full outline-[3px] break-words w-full">
          <div className="box-border caret-transparent outline-[3px] break-words">
            <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px] break-words gap-y-2 mb-2">
              <img
                src={props.avatarSrc}
                alt={props.avatarAlt}
                className="box-border caret-transparent max-w-[30px] outline-[3px] break-words"
              />
              <p className="box-border caret-transparent outline-[3px] break-words">
                <strong className="font-bold box-border caret-transparent outline-[3px] break-words">
                  {props.reviewerName}
                </strong>
                {" – "}
                {props.reviewerLocation}
                <br className="box-border caret-transparent outline-[3px] break-words" />
              </p>
            </div>
            <div className="items-center box-border caret-transparent gap-x-2 flex flex-wrap outline-[3px] break-words gap-y-2">
              <div className="items-center box-border caret-transparent gap-x-1 flex outline-[3px] break-words gap-y-1">
                <i className="text-amber-600 italic box-border caret-transparent block outline-[3px] break-words before:accent-auto before:box-border before:caret-transparent before:text-amber-600 before:inline-block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
                <i className="text-amber-600 italic box-border caret-transparent block outline-[3px] break-words before:accent-auto before:box-border before:caret-transparent before:text-amber-600 before:inline-block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
                <i className="text-amber-600 italic box-border caret-transparent block outline-[3px] break-words before:accent-auto before:box-border before:caret-transparent before:text-amber-600 before:inline-block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
                <i className="text-amber-600 italic box-border caret-transparent block outline-[3px] break-words before:accent-auto before:box-border before:caret-transparent before:text-amber-600 before:inline-block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
                <i className="text-amber-600 italic box-border caret-transparent block outline-[3px] break-words before:accent-auto before:box-border before:caret-transparent before:text-amber-600 before:inline-block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
              </div>
              <p className="box-border caret-transparent outline-[3px] break-words">
                <b className="font-bold box-border caret-transparent outline-[3px] break-words">
                  {props.title}
                </b>
              </p>
            </div>
            <div className="box-border caret-transparent max-w-[200px] outline-[3px] break-words mb-0 md:mb-4">
              <img
                src={props.imageSrc}
                alt={props.imageAlt}
                className="box-border caret-transparent inline h-full object-cover outline-[3px] break-words w-full mb-4 md:mb-0"
              />
            </div>
            <div className="box-border caret-transparent outline-[3px] break-words">
              <p className="text-zinc-600 box-border caret-transparent outline-[3px] break-words mb-4">
                {props.reviewText}
              </p>
            </div>
            <p className="text-zinc-500 text-sm box-border caret-transparent leading-[21px] outline-[3px] break-words mb-4">
              {props.helpfulText}
            </p>
            <div className="text-sm items-center box-border caret-transparent gap-x-8 flex justify-between leading-[21px] outline-[3px] break-words gap-y-8">
              <div className="box-border caret-transparent gap-x-4 flex outline-[3px] break-words gap-y-4">
                <div className="box-border caret-transparent outline-[3px] break-words border border-zinc-900 px-[25px] py-[5px] rounded-[30px] border-solid">
                  Helpful
                </div>
                <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px] break-words gap-y-2">
                  <i className="italic box-border caret-transparent block outline-[3px] break-words before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:inline-block before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-bootstrap_icons"></i>
                  Share
                </div>
              </div>
              <div className="text-neutral-400 box-border caret-transparent outline-[3px] break-words">
                Report
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
