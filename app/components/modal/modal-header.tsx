import { Dialog } from "@headlessui/react";

type ModalHeaderProps = {
  title: string;
};

export function ModalHeader({ title }: ModalHeaderProps) {
  return (
    <Dialog.Title
      as="h3"
      className="text-base font-semibold leading-6 text-gray-900"
    >
      {title}
    </Dialog.Title>
  );
}
