import { MorningvitalityMorningVitalityMainArticle } from "./MorningVitalityMainArticle";
import { MorningvitalityMorningVitalitySidebar } from "./MorningVitalitySidebar";

export const MorningvitalityMorningVitalityArticleLayout = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] w-auto bg-[position:0px_0px] mx-auto px-[15px] md:w-[1170px] before:accent-auto before:box-border before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-helvetica_neue after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-helvetica_neue">
      <div className="box-border caret-transparent ml-[-15px] mr-[-15px] outline-[3px] bg-[position:0px_0px] before:accent-auto before:box-border before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-helvetica_neue after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-helvetica_neue">
        <MorningvitalityMorningVitalityMainArticle />
        <MorningvitalityMorningVitalitySidebar variantClass="md:w-3/12" />
      </div>
    </div>
  );
};
