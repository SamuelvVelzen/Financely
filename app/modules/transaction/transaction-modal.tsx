import {
  IExternalModalFooterProps,
  IModalSizeEnum,
  Modal,
} from "@Financely/UI/modal";
import { Form } from "@remix-run/react";
import { CreateTransactions } from "./create-transactions";

type ExpenseIncomeModalProps = {
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

export function TransactionModal({ openState }: ExpenseIncomeModalProps) {
  const headerTextOptions = {
    title: "Create Income or Expense ",
  };
  const footerOptions: IExternalModalFooterProps = {
    primaryTextBtn: "Opslaan",
    secondaryTextBtn: "Annuleren",
  };

  return (
    <Modal
      header={headerTextOptions}
      footer={footerOptions}
      action={{ open: openState[0], setOpen: openState[1] }}
      size={IModalSizeEnum.lg}
    >
      <Form method="post">
        <CreateTransactions />
      </Form>
    </Modal>
  );
}
