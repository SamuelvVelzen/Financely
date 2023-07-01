import { TransactionTypeEnum } from "@Financely/Module/transaction/enums";
import { CreateTransactionViewModel } from "@Financely/Module/transaction/types";
import {
  createExpense,
  createExpenses,
  ExpenseCreateViewModel,
} from "./expense.server";

export const createTransaction = (
  transaction: CreateTransactionViewModel,
  userId: string
) => {
  const { type } = transaction;

  if (type === TransactionTypeEnum.expense) {
    const expense = convertToExpenseViewModel(transaction, userId);

    return createExpense(expense);
  }
};

export const createTransactions = async (
  transactions: CreateTransactionViewModel[],
  userId: string
) => {
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === TransactionTypeEnum.expense
  );
  const incomeTransactions = transactions.filter(
    (transaction) => transaction.type === TransactionTypeEnum.income
  );

  const expenses = expenseTransactions.map((expenseTransaction) =>
    convertToExpenseViewModel(expenseTransaction, userId)
  );

  return await Promise.all([createExpenses(expenses)]);
};

const convertToExpenseViewModel = (
  createTransaction: CreateTransactionViewModel,
  userId: string
): ExpenseCreateViewModel => {
  const { amount, name, description, payDate } = createTransaction;

  return { amount, name, description: description || null, payDate, userId };
};
