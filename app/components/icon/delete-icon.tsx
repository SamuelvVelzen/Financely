import { TrashIcon } from "@heroicons/react/24/outline";

type DeleteIconProps = { className?: string };

export function DeleteIcon({ className }: DeleteIconProps) {
  return <TrashIcon className={`h-5 w-5 ${className}`} />;
}
