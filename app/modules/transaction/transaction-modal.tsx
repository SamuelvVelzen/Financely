import { createExpense } from "@Financely/Data/transaction";
import {
  DateInput,
  NumberInput,
  TextareaInput,
  TextInput,
} from "@Financely/UI/forms";
import { IModalSizeEnum, Modal } from "@Financely/UI/modal";
import type { LoaderArgs } from "@remix-run/node";
import { requireUserId } from "~/session.server";

type ExpenseIncomeModalProps = {
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);

  await createExpense({
    amount: 2342.51,
    name: "Test 1",
    description: "Test 3 beschrijving",
    payDate: new Date(),
    userId,
  });
};

export function TransactionModal({ openState }: ExpenseIncomeModalProps) {
  const headerTextOptions = {
    title: "Create Income or Expense ",
  };
  const footerTextOptions = {
    primaryTextBtn: "Opslaan",
    secondaryTextBtn: "Annuleren",
  };

  return (
    <Modal
      header={headerTextOptions}
      footer={footerTextOptions}
      action={{ open: openState[0], setOpen: openState[1] }}
      size={IModalSizeEnum.lg}
    >
      <div className="flex">
        <NumberInput labelText={"Amount"} step={0.01} min={0} />
        <TextInput labelText={"Name"} />
        <DateInput labelText={"Date"} />
      </div>

      <TextareaInput labelText={"Description"} />
    </Modal>
  );
}
