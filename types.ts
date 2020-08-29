export enum ExpenseCategory {
  FIXED = "FIXED",
  VARIABLE = "VARIABLE",
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
