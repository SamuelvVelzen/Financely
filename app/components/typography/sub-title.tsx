type SubTitleProps = { className?: string; text: string };

export function SubTitle({ className = "", text }: SubTitleProps) {
  return <p className={`${className} mb-0 text-lg font-bold`}>{text}</p>;
}
