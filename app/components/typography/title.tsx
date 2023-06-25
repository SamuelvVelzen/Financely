type TitleProps = { className?: string; text: string };

export default function Title({ className = "", text }: TitleProps) {
  return <span className={`${className} text-xl font-bold`}>{text}</span>;
}
