import { TransactionTypeEnum } from "@Financely/Module/transaction/enums";
import { CreateTransactionViewModel } from "@Financely/Module/transaction/types";
import { Expense, Income } from "@prisma/client";
import { createExpenses, ExpenseCreateViewModel } from "./expense.server";
import { createIncomes, IncomeCreateViewModel } from "./income.server";

export const createTransactions = (
  transactions: CreateTransactionViewModel[],
  userId: string
): Promise<[Expense[], Income[]]> => {
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === TransactionTypeEnum.expense
  );
  const incomeTransactions = transactions.filter(
    (transaction) => transaction.type === TransactionTypeEnum.income
  );

  const expenses = expenseTransactions.map((expenseTransaction) =>
    convertToExpenseViewModel(expenseTransaction, userId)
  );

  const incomes = incomeTransactions.map((incomeTransaction) =>
    convertToIncomeViewModel(incomeTransaction, userId)
  );

  return Promise.all([createExpenses(expenses), createIncomes(incomes)]);
};

const convertToExpenseViewModel = (
  createTransaction: CreateTransactionViewModel,
  userId: string
): ExpenseCreateViewModel => {
  const { amount, name, description, payDate } = createTransaction;

  return { amount, name, description: description || null, payDate, userId };
};

const convertToIncomeViewModel = (
  createTransaction: CreateTransactionViewModel,
  userId: string
): IncomeCreateViewModel => {
  const { amount, name, description, payDate } = createTransaction;

  return { amount, name, description: description || null, payDate, userId };
};
