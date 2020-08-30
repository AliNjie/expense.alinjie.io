export enum ExpenseCategory {
  FIXED = "FIXED",
  VARIABLE = "VARIABLE",
  SAVINGS = "SAVINGS",
}

export type ExpenseMonth = {
  date: Date;
};

export type Expense = {
  title: string;
  amount: number;
  payed: boolean;
  category: ExpenseCategory;
  expenseMonth: ExpenseMonth;
};

export type Stats = {
  balance: number;
  totalSavings: number;
  totalExpenses: number;
};
