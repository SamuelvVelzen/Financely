import { DeleteIcon } from "@Financely/UI/icon";
import { ButtonHTMLAttributes } from "react";

type DeleteButtonProps = {
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export function DeleteButton({
  type = "button",
  className = "",
}: DeleteButtonProps) {
  return (
    <button
      type={type}
      className={`-m-2 rounded-full p-2 text-danger hover:bg-lightgrey ${className}`}
    >
      <DeleteIcon />
    </button>
  );
}
