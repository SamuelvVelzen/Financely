import { EditIcon } from "@Financely/UI/icon";

type EditButtonProps = { className?: string };

export function EditButton({ className }: EditButtonProps) {
  return (
    <button className={`-m-2 rounded-full p-2 hover:bg-lightgrey ${className}`}>
      <EditIcon />
    </button>
  );
}
