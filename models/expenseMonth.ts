import mongoose, { Schema, Document } from "mongoose";
import { ExpenseMonth as ExpenseMonthType } from "types";

type ExpenseMonthModel = ExpenseMonthType & Document;

const schema = new Schema<ExpenseMonthType>({
  year: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
    min: 0, // JavaScript dates starts at 0 (January) and ends at 11 (December)
    max: 11,
  },
  income: {
    type: Number,
    required: true,
    default: 0,
  },
});

schema.index({ year: 1, month: 1 }, { unique: true });

export const ExpenseMonth =
  (mongoose.models.ExpenseMonth as mongoose.Model<ExpenseMonthModel>) ||
  mongoose.model<ExpenseMonthModel>("ExpenseMonth", schema);
