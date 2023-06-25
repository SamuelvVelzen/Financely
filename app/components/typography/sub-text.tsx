type SubTitleProps = { className?: string; text: string };

export function SubText({ className = "", text }: SubTitleProps) {
  return <span className={`${className} text-sm`}>{text}</span>;
}
