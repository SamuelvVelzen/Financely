import { EditIcon } from "@Financely/UI/icon";
import { propsWithOnClick } from "@Financely/Util/type";
import { ButtonHTMLAttributes } from "react";

type EditButtonProps = {
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export function EditButton({
  type = "button",
  className = "",
  onClick,
}: propsWithOnClick<EditButtonProps, HTMLButtonElement>) {
  return (
    <button
      type={type}
      onClick={(event) => onClick && onClick(event)}
      className={`-m-2 rounded-full p-2 hover:bg-lightgrey ${className}`}
    >
      <EditIcon />
    </button>
  );
}
