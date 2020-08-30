import { ExpenseMonth } from "models/expenseMonth";

interface Params {
  month: number;
  year: number;
}

export async function createExpenseMonth(_, params: Params) {
  const { year, month } = params;
  const expenseMonth = new ExpenseMonth({
    year,
    month,
  });

  try {
    return await expenseMonth.save();
  } catch (error) {
    console.error("Failed to create expense month.", error);
    throw error;
  }
}
