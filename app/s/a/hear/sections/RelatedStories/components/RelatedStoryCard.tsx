export type RelatedStoryCardProps = {
  imageSrc: string;
  category: string;
  description: string;
  linkHref: string;
};

export const RelatedStoryCard = (props: RelatedStoryCardProps) => {
  return (
    <div className="bg-white caret-transparent flex basis-auto grow-0 min-h-[auto] min-w-[auto] overflow-hidden md:basis-[calc(33.333%_-_14px)] md:grow md:min-w-0 group transition-shadow duration-300 hover:shadow-md rounded-sm">
      <div className="relative caret-transparent shrink-0 h-fit max-w-[130px] min-h-[auto] min-w-[auto] overflow-hidden md:max-w-[170px] before:accent-auto before:bg-blue-600 before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-2.5 before:z-[1] before:border-separate before:left-0 before:top-0 before:font-source_sans_3">
        <img
          src={props.imageSrc}
          alt=""
          className="caret-transparent align-baseline w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="caret-transparent gap-x-2 flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] gap-y-2 ml-3 md:gap-x-2.5 md:gap-y-2.5">
        <span className="text-sky-600 font-bold caret-transparent block tracking-[2px] min-h-[auto] min-w-[auto] font-archivo">
          {props.category}
        </span>
        <p className="text-[17px] font-bold caret-transparent grow leading-[22.1px] min-h-[auto] min-w-[auto] font-archivo md:text-xl md:leading-[26px]">
          {props.description}
        </p>
        <a
          href="#"
          className="text-xs font-bold caret-transparent block min-h-[auto] min-w-[auto] underline font-archivo hover:text-sky-600 transition-colors duration-200"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};
