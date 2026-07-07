import advData from "../../../copy.json";

export const MorningvitalityMorningVitalityReferencesFooter = () => {
  const { footer } = advData;

  return (
    <div className="relative text-gray-400 text-[10px] box-border caret-transparent float-none leading-[14.2857px] min-h-px outline-[3px] w-auto bg-[position:0px_0px] mt-[350px] mb-[75px] px-[15px] md:float-left md:w-full">
      <hr className="text-zinc-500 border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-zinc-100 caret-transparent h-0 outline-[3px] bg-[position:0px_0px] border-b-0 border-x-0" />
      <p className="text-neutral-800 text-lg box-border caret-transparent leading-[25.2px] outline-[3px] bg-[position:0px_0px] mt-[15px] mb-5 font-roboto">
        <strong className="font-bold box-border caret-transparent outline-[3px]">References</strong>
      </p>
      <ul className="text-[0px] box-border caret-transparent leading-[0px] list-none outline-[3px] bg-[position:0px_0px] pl-0 pt-2.5">
        {footer.references.map((ref, i) => (
          <li key={i} className="text-xs box-border caret-transparent leading-[17.1429px] outline-[3px] bg-[position:0px_0px]">
            {ref}
          </li>
        ))}
      </ul>
      <p className="text-neutral-800 text-xs box-border caret-transparent leading-[16.8px] outline-[3px] bg-[position:0px_0px] mt-[15px] mb-5 font-roboto">
        <strong className="font-bold box-border caret-transparent outline-[3px]">
          {footer.advertisementNotice}
        </strong>
      </p>
      <ul className="text-[0px] box-border caret-transparent leading-[0px] list-none outline-[3px] bg-[position:0px_0px] pl-0">
        <li className="text-xs box-border caret-transparent leading-[17.1429px] outline-[3px] bg-[position:0px_0px]">
          {footer.disclaimer}
        </li>
      </ul>
      <a
        href={footer.links.contact}
        className="text-cyan-600 box-border caret-transparent outline-[3px] hover:text-cyan-800 hover:outline-0 hover:underline hover:border-cyan-800"
      >
        Contact
      </a>
      {" "}|{" "}
      <a
        href={footer.links.privacy}
        className="text-cyan-600 box-border caret-transparent outline-[3px] hover:text-cyan-800 hover:outline-0 hover:underline hover:border-cyan-800"
      >
        Privacy Policy
      </a>
      {" "}|{" "}
      <a
        href={footer.links.terms}
        className="text-cyan-600 box-border caret-transparent outline-[3px] hover:text-cyan-800 hover:outline-0 hover:underline hover:border-cyan-800"
      >
        Terms &amp; Conditions
      </a>
    </div>
  );
};
