import { Expense, Prisma } from "@prisma/client";
import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

export type ExpenseCreateViewModel = {
  amount: number;
  name: Expense["name"];
  description: Expense["description"];
  payDate: Expense["payDate"];
  userId: Expense["userId"];
};

export async function createExpense(expense: ExpenseCreateViewModel) {
  return prisma.expense.create({
    data: {
      amount: new Prisma.Decimal(expense.amount),
      name: expense.name,
      description: expense.description,
      payDate: expense.payDate,
      userId: expense.userId,
    },
  });
}
