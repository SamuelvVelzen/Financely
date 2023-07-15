import { Dropdown, DropdownItem } from "@Financely/UI/dropdown";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

type TransactionDropdownProps = {
  handleUploadClick?: React.MouseEventHandler<HTMLParagraphElement>;
};

export function TransactionDropdown({
  handleUploadClick,
}: TransactionDropdownProps) {
  return (
    <Dropdown>
      <DropdownItem
        icon={<ArrowUpTrayIcon />}
        onClick={(e) => handleUploadClick && handleUploadClick(e)}
      >
        Expenses uploaden
      </DropdownItem>
    </Dropdown>
  );
}
