import { Income, Prisma } from "@prisma/client";
import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

export type IncomeCreateViewModel = {
  amount: number;
  name: Income["name"];
  description: Income["description"];
  payDate: Income["payDate"];
  userId: Income["userId"];
};

export async function createIncome(
  income: IncomeCreateViewModel
): Promise<Income> {
  return await prisma.income.create({
    data: {
      amount: new Prisma.Decimal(income.amount),
      name: income.name,
      description: income.description,
      payDate: income.payDate,
      userId: income.userId,
    },
  });
}

export async function createIncomes(
  incomes: IncomeCreateViewModel[]
): Promise<Income[]> {
  const incomePromises = incomes.map((income) => createIncome(income));

  return await Promise.all(incomePromises);
}

export async function getAllIncomes() {
  return prisma.income.findMany();
}
