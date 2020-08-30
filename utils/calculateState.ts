import { ExpenseCategory, Stats } from "types";

type Expense = {
  amount: number;
  category: ExpenseCategory;
};

export function calculateStats(expenses: Expense[], income: number): Stats {
  const balance = expenses
    .filter((expense) => expense.category !== ExpenseCategory.SAVINGS)
    .reduce((acc, expense) => (acc -= expense.amount), income);

  const totalSavings = expenses
    .filter((expense) => expense.category === ExpenseCategory.SAVINGS)
    .reduce((acc, expense) => (acc += expense.amount), 0);

  const totalExpenses = expenses
    .filter((expense) => expense.category !== ExpenseCategory.SAVINGS)
    .reduce((acc, expense) => (acc += expense.amount), 0);

  return {
    balance,
    totalExpenses,
    totalSavings,
  };
}
