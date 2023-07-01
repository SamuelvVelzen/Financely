import { PropsWithChildren } from "react";

type ListProps = { className?: string };

export function List({
  children,
  className = "",
}: PropsWithChildren<ListProps>) {
  return <div className={`divide-y-2 ${className}`}>{children}</div>;
}
