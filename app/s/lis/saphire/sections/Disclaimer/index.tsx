import { useAdvertorialData } from "../TopBar/context";

export function Disclaimer() {
  const { content } = useAdvertorialData();

  return (
    <div className="mx-auto max-w-[800px] px-5 py-5 text-center text-xs leading-[1.5] text-[#999]">
      {content.disclaimer.map((paragraph, index) => (
        <p key={index} className={index > 0 ? "mt-2" : undefined}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
