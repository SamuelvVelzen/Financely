type SubTitleProps = { className?: string; text: string };

export function SubTitle({ className = "", text }: SubTitleProps) {
  return <span className={`${className} text-lg font-bold`}>{text}</span>;
}
