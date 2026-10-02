import { GoldStarsIcon } from "../../../components/icons";
import type { BestToeSocksCopy } from "../../../types";

type AuthorBoxProps = {
  author: BestToeSocksCopy["author"];
  photo: string;
};

export function BestToeSocksAuthorBox({ author, photo }: AuthorBoxProps): JSX.Element {
  return (
    <div className="flex flex-col items-start gap-4 rounded-[5px] border border-[#E0E0E0] bg-[#F2F2F2] px-8 py-6 md:gap-2">
      <div className="flex gap-4">
        <img
          src={photo}
          alt={author.name}
          className="h-[84px] w-[84px] object-cover"
        />
        <div className="text-lg leading-[normal]">
          <span className="relative -top-0.5 block">
            <GoldStarsIcon size={16} />
          </span>
          <p>{author.writtenByLabel}</p>
          <p className="mt-4 font-bold">{author.name}</p>
        </div>
      </div>
      <p className="text-base leading-6 text-[#636363] md:text-lg md:leading-[27px]">{author.bio}</p>
    </div>
  );
}
