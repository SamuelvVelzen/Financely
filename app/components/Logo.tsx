import { Heading } from "./typography/heading";

type IconProps = {
  className?: string;
  includeName?: boolean;
};

export function Logo({ className = "", includeName = false }: IconProps) {
  return (
    <div className={`${className} flex items-center`}>
      <img src="/assets/images/icon.svg" />
      {includeName && <Heading className="ml-2" text="Financely" />}
    </div>
  );
}
