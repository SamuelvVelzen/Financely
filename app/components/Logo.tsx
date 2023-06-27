import { Heading } from "./typography/heading";

type LogoProps = {
  className?: string;
  includeName?: boolean;
};

export function Logo({ className = "", includeName = false }: LogoProps) {
  return (
    <div className={`${className} flex items-center`}>
      <img src="/assets/images/icon.svg" />
      {includeName && <Heading className="ml-2" text="Financely" />}
    </div>
  );
}
