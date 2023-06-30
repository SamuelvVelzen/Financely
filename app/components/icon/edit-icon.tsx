import { PencilIcon } from "@heroicons/react/24/outline";

type EditIconProps = { className?: string };

export function EditIcon({ className }: EditIconProps) {
  return <PencilIcon className={`h-5 w-5 ${className}`} />;
}
