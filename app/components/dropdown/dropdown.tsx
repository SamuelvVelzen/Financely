import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { PropsWithChildren, useState } from "react";
import { Container } from "../container";

type DropdownProps = { buttonText?: React.ReactNode };

export function Dropdown({
  buttonText,
  children,
}: PropsWithChildren<DropdownProps>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onClick={() => setOpen(!open)}>
      <div className=" -m-2 mr-2 rounded-full p-2 hover:bg-lightgrey">
        {buttonText || <EllipsisHorizontalIcon className="h-5 w-5" />}
      </div>

      {open && (
        <Container className="absolute right-0 z-10 min-w-[150px] divide-y overflow-hidden border !p-0">
          {children}
        </Container>
      )}
    </div>
  );
}
