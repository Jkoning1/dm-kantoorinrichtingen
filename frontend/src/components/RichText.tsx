import type { SlateNode } from '@/lib/types';

function serializeText(node: SlateNode): React.ReactNode {
  let el: React.ReactNode = node.text || '';
  if (node.bold) el = <strong>{el}</strong>;
  if (node.italic) el = <em>{el}</em>;
  if (node.underline) el = <u>{el}</u>;
  if (node.code) el = <code className="bg-black/5 px-1 rounded text-sm font-mono">{el}</code>;
  return el;
}

function serializeNode(node: SlateNode, index: number): React.ReactNode {
  if ('text' in node && node.text !== undefined) {
    return <span key={index}>{serializeText(node)}</span>;
  }

  const children = node.children?.map((child, i) => serializeNode(child, i));

  switch (node.type) {
    case 'h1':
      return <h1 key={index} className="text-3xl font-bold font-display mb-4">{children}</h1>;
    case 'h2':
      return <h2 key={index} className="text-2xl font-bold font-display mb-4">{children}</h2>;
    case 'h3':
      return <h3 key={index} className="text-xl font-bold font-display mb-3">{children}</h3>;
    case 'ul':
      return <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-black/60">{children}</ul>;
    case 'ol':
      return <ol key={index} className="list-decimal list-inside space-y-2 mb-4 text-black/60">{children}</ol>;
    case 'li':
      return <li key={index}>{children}</li>;
    case 'blockquote':
      return <blockquote key={index} className="border-l-4 border-brand-accent pl-4 italic text-black/70 mb-4">{children}</blockquote>;
    case 'link':
      return <a key={index} href={node.url} target={node.newTab ? '_blank' : undefined} rel="noopener noreferrer" className="text-brand-accent hover:underline">{children}</a>;
    default:
      return <p key={index} className="text-black/60 leading-relaxed mb-4 last:mb-0">{children}</p>;
  }
}

interface RichTextProps {
  content: SlateNode[] | undefined | null;
  className?: string;
}

export default function RichText({ content, className }: RichTextProps) {
  if (!content || !Array.isArray(content) || content.length === 0) return null;
  return (
    <div className={className}>
      {content.map((node, i) => serializeNode(node, i))}
    </div>
  );
}
