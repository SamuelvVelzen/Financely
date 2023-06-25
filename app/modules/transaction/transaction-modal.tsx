import { createExpense } from "@Financely/Data/transaction";
import { DateInput, NumberInput, TextInput } from "@Financely/UI/forms";
import { Modal } from "@Financely/UI/modal";
import type { LoaderArgs } from "@remix-run/node";
import { requireUserId } from "~/session.server";

type ExpenseIncomeModalProps = {};

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

export function TransactionModal({}: ExpenseIncomeModalProps) {
  const headerTextOptions = {
    title: "Create Income or Expense ",
  };
  const footerTextOptions = {
    primaryTextBtn: "Opslaan",
    secondaryTextBtn: "Annuleren",
  };

  return (
    <Modal header={headerTextOptions} footer={footerTextOptions}>
      <div className="flex">
        <NumberInput labelText={"Amount"} step={0.01} min={0} />
        <TextInput labelText={"Name"} />
        <DateInput labelText={"Date"} />
      </div>
    </Modal>
  );
}
