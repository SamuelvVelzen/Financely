import { PropsWithChildren } from "react";

type ContainerProps = { className?: string };

export function Container({
  children,
  className = "",
}: PropsWithChildren<ContainerProps>) {
  return (
    <div
      className={`${className} transform-gpu 
  rounded-3xl bg-white p-4 drop-shadow-2xl filter`}
    >
      {children}
    </div>
  );
}
