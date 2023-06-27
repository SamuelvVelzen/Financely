type TitleProps = { className?: string; text: string };

export default function Title({ className = "", text }: TitleProps) {
  return <h1 className={`${className} text-2xl font-bold`}>{text}</h1>;
}
