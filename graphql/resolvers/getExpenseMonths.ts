import { ExpenseMonth } from "models/expenseMonth";

export async function getExpenseMonths() {
  return await ExpenseMonth.find().exec();
}
