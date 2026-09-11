import copy from "../copy.json"

export const UtilityLink = () => {
  const { href, title } = copy.utilityLink;
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <a
        href={href}
        title={title}
        className="text-blue-600 box-border caret-transparent max-w-full outline-[3px] hover:text-sky-700 hover:underline hover:border-sky-700"
      ></a>
    </div>
  );
};
