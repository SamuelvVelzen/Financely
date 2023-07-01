import { TransactionTypeEnum } from "../enums";

export type CreateTransactionViewModel = {
  type: TransactionTypeEnum;
  amount: number;
  name: string;
  description?: string | null;
  payDate: Date;
};

export function createTransactionViewModel(): CreateTransactionViewModel {
  return {} as CreateTransactionViewModel;
}
