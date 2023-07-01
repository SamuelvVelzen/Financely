import { Expense } from "../expense.server";

export type ExpenseCreateViewModel = {
  amount: number;
  name: Expense["name"];
  description: Expense["description"];
  payDate: Expense["payDate"];
  userId: Expense["userId"];
};
