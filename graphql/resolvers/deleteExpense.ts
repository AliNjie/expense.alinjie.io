import { Expense } from "models/expense";

type Params = {
  expenseId: string;
};

export async function deleteExpense(_, params: Params) {
  const expense = await Expense.findById(params.expenseId).exec();

  if (!expense) {
    throw new Error(`Expense with id '${params.expenseId} not found.'`);
  }

  return await expense.deleteOne();
}
