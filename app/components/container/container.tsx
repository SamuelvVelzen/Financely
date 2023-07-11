import { PropsWithChildren } from "react";

type ContainerProps = { className?: string; hasShadow?: boolean };

export function Container({
  children,
  className = "",
  hasShadow = true,
}: PropsWithChildren<ContainerProps>) {
  return (
    <div
      className={`${className} rounded-3xl bg-white p-4 ${
        hasShadow && "transform-gpu drop-shadow-2xl"
      }`}
    >
      {children}
    </div>
  );
}
