import { Income } from "../income.server";

export type IncomeCreateViewModel = {
  amount: number;
  name: Income["name"];
  description: Income["description"];
  payDate: Income["payDate"];
  userId: Income["userId"];
};
