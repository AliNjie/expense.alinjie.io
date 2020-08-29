import moment from "moment";
import { ExpenseMonth } from "models/expenseMonth";
import { dateFormat } from "consts";

interface Params {
  date: string;
}

export async function createExpenseMonth(_, params: Params) {
  const date = moment(params.date, dateFormat);
  if (!date.isValid()) {
    throw new Error(`Invalid date '${params.date}'.`);
  }

  const expenseMonth = new ExpenseMonth({
    date: date.format(dateFormat),
  });

  try {
    return await expenseMonth.save();
  } catch (error) {
    console.error("Failed to create expense month.", error);
    throw error;
  }
}
