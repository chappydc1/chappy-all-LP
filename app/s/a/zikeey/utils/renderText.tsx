import React from "react";

const LINK_CLASS =
  "text-teal-600 transition-colors duration-150 hover:text-teal-700 hover:underline";

type Node = string | React.ReactElement;

// Parses inline markdown (**bold**, *italic*, ***bold-italic***, [text](url))
// to styled React nodes. No markdown syntax needed in surrounding prose.
export function renderText(text: string): React.ReactNode {
  return <>{parseNodes(text)}</>;
}

function parseNodes(text: string): Node[] {
  const parts: Node[] = [];
  // Order: *** before ** before * to avoid greedy mismatch
  const re =
    /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[2] !== undefined)
      parts.push(<strong key={key++}><em>{match[2]}</em></strong>);
    else if (match[3] !== undefined)
      parts.push(<strong key={key++}>{match[3]}</strong>);
    else if (match[4] !== undefined)
      parts.push(<em key={key++}>{match[4]}</em>);
    else
      parts.push(
        <a key={key++} href={match[6]} className={LINK_CLASS}>
          {match[5]}
        </a>
      );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
