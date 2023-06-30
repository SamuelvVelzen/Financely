import { EditIcon } from "@Financely/UI/icon";
import { propsWithOnClick } from "@Financely/Util/type";

type EditButtonProps = {
  className?: string;
};

export function EditButton({
  className,
  onClick,
}: propsWithOnClick<EditButtonProps, HTMLButtonElement>) {
  return (
    <button
      onClick={(event) => onClick && onClick(event)}
      className={`-m-2 rounded-full p-2 hover:bg-lightgrey ${className}`}
    >
      <EditIcon />
    </button>
  );
}
