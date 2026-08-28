export type VitalityDigestHtmlParagraphsProps = {
  paragraphs: string[];
  className?: string;
  paragraphClassName?: string;
};

export const VitalityDigestHtmlParagraphs = ({
  paragraphs,
  className = "",
  paragraphClassName = "mb-4 last:mb-0",
}: VitalityDigestHtmlParagraphsProps): React.ReactElement => {
  return (
    <div className={className}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={paragraphClassName}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  );
};
