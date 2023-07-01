import {
  createTransactionViewModel,
  CreateTransactionViewModel,
} from "@Financely/Data/transaction";
import { Button, ThemeColorEnum } from "@Financely/UI/button";
import { useEffect, useState } from "react";
import { CreateTransaction } from "./create-transaction";

type TransactionData = {
  data: CreateTransactionViewModel;
  showEditMode: boolean;
};

type CreateTransactionsProps = {};

export function CreateTransactions({}: CreateTransactionsProps) {
  const [transactionData, setTransactionData] = useState<TransactionData[]>([]);

  useEffect(() => {
    createTransaction();
  }, []);

  function createTransaction(): void {
    const transaction = createTransactionViewModel();
    setTransactionData([
      ...transactionData,
      { data: transaction, showEditMode: true },
    ]);
  }

  return (
    <>
      {transactionData.length > 0 && (
        <div className="mb-4 divide-y divide-darkgrey rounded-3xl border border-darkgrey">
          {transactionData.map((d, index) => (
            <CreateTransaction
              key={index}
              data={d.data}
              showEditMode={d.showEditMode}
            />
          ))}
        </div>
      )}

      <Button
        theme={ThemeColorEnum.primary}
        className="mx-auto block"
        onClick={() => {
          createTransaction();
        }}
      >
        Create transaction
      </Button>
    </>
  );
}
