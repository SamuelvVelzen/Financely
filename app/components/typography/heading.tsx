type HeadingProps = { className?: string; text: string };

export function Heading({ className = "", text }: HeadingProps) {
  return <span className={`${className} text-base font-bold`}>{text}</span>;
}
