import { DeleteIcon } from "@Financely/UI/icon";

type DeleteButtonProps = { className?: string };

export function DeleteButton({ className }: DeleteButtonProps) {
  return (
    <button
      className={`-m-2 rounded-full p-2 text-danger hover:bg-lightgrey ${className}`}
    >
      <DeleteIcon />
    </button>
  );
}
