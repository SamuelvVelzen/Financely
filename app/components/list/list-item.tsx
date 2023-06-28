import { PropsWithChildren } from "react";

type ListItemProps = { className?: string };

export function ListItem({
  children,
  className,
}: PropsWithChildren<ListItemProps>) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
