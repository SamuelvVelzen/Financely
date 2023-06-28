type SubTextProps = { className?: string; text: string };

export function SubText({ className = "", text }: SubTextProps) {
  return <span className={`${className} text-sm`}>{text}</span>;
}
