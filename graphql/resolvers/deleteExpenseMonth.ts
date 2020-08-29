import { ExpenseMonth } from "models/expenseMonth";
import { Expense } from "models/expense";
import { isValidObjectId } from "mongoose";

type Params = {
  expenseMonthId: string;
};

export async function deleteExpenseMonth(_, params: Params) {
  const { expenseMonthId } = params;

  if (!isValidObjectId(expenseMonthId)) {
    throw new Error(`Invalid expense month id '${expenseMonthId}'.`);
  }

  const expenseMonth = await ExpenseMonth.findById(expenseMonthId).exec();

  if (!expenseMonth) {
    throw new Error(`Expense month with id '${expenseMonthId} not found.'`);
  }

  try {
    await Expense.deleteMany({ expenseMonth }).exec();
  } catch (error) {
    console.error("Failed to delete related expenses.", error);
    throw error;
  }

  return await expenseMonth.deleteOne();
}
