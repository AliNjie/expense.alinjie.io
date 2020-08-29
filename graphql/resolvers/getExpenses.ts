import { Expense } from "models/expense";

export async function getExpenses() {
  return await Expense.find().populate("expenseMonth").exec();
}
