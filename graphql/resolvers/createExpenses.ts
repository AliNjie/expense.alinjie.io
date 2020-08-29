import { ExpenseMonth } from "models/expenseMonth";
import { Expense } from "models/expense";
import { ExpenseCategory } from "types";
import { isValidObjectId } from "mongoose";

type Params = {
  title: string;
  amount: number;
  category: ExpenseCategory;
  expenseMonthId: string;
};

export async function createExpense(_, params: Params) {
  const { amount, title, category, expenseMonthId } = params;

  if (!isValidObjectId(expenseMonthId)) {
    throw new Error(`Invalid object id '${expenseMonthId}'.`);
  }

  const expenseMonth = await ExpenseMonth.findById(expenseMonthId).exec();

  if (!expenseMonth) {
    throw new Error(`Expense month with id '${expenseMonthId}' not found.`);
  }

  const expense = new Expense({
    title,
    amount,
    expenseMonth,
    payed: false,
    category: category,
  });

  try {
    return await expense.save();
  } catch (error) {
    console.error("Failed to create expense", error);
    throw error;
  }
}
