import mongoose, { Schema, Document } from "mongoose";
import { ExpenseMonth as ExpenseMonthType } from "types";

type ExpenseMonthModel = ExpenseMonthType & Document;

const schema = new Schema<ExpenseMonthType>({
  date: {
    type: Date,
    unique: true,
    required: true,
  },
});

export const ExpenseMonth =
  (mongoose.models.ExpenseMonth as mongoose.Model<ExpenseMonthModel>) ||
  mongoose.model<ExpenseMonthModel>("ExpenseMonth", schema);
