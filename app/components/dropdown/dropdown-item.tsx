import { PropsWithChildren } from "react";

type DropdownItemProps = {
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
};

export function DropdownItem({
  children,
  icon,
  onClick,
}: PropsWithChildren<DropdownItemProps>) {
  return (
    <div
      className="flex whitespace-nowrap px-4 py-2 hover:bg-lightgrey"
      onClick={onClick}
    >
      <div className="mr-2 h-5 w-5">{icon}</div>
      {children}
    </div>
  );
}
