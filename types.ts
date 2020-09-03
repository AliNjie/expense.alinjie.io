export type ExpenseMonth = {
  date: Date;
};

export type Expense = {
  title: string;
  amount: number;
  payed: boolean;
  expenseMonth: ExpenseMonth;
};

export type Stats = {
  balance: number;
  totalSavings: number;
  totalExpenses: number;
};
