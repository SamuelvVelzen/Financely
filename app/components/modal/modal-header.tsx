import { SubTitle } from "../typography";

type ModalHeaderProps = {
  title: string;
};

export function ModalHeader({ title }: ModalHeaderProps) {
  if (!title) {
    return null;
  }

  return (
    <div className="bg-gray-50 px-4 py-3 sm:px-6">
      <SubTitle text={title} />
    </div>
  );
}
