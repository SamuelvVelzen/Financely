import Heading from "./typography/Heading";

type IconProps = {
  className?: string;
  includeName?: boolean;
};

export default function Logo({
  className = "",
  includeName = false,
}: IconProps) {
  return (
    <div className={`${className} flex items-center`}>
      <img src="/assets/images/icon.svg" />
      {includeName && <Heading className="ml-2" text="Financely" />}
    </div>
  );
}
