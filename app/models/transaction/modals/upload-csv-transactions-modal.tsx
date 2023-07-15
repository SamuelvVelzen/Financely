import { DragAndDrop } from "@Financely/UI/drag-and-drop";
import { Modal } from "@Financely/UI/modal";

type UploadCsvTransactionsModalProps = {
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

export function UploadCsvTransactionsModal({
  openState,
}: UploadCsvTransactionsModalProps) {
  return (
    <Modal
      header={{
        title: "Upload CSV file",
      }}
      footer={{
        primaryTextBtn: "Upload file",
      }}
      action={{
        open: openState[0],
        setOpen: openState[1],
      }}
    >
      <DragAndDrop name="csv-files" />
    </Modal>
  );
}
