import mongoose, { Schema, Document } from "mongoose";
import { Expense as ExpenseType, ExpenseCategory } from "types";

type ExpenseModel = ExpenseType & Document;

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  payed: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: Object.values(ExpenseCategory),
  },
  expenseMonth: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "ExpenseMonth",
  },
});

schema.index({ title: 1, expenseMonth: 1 }, { unique: true });

export const Expense =
  (mongoose.models.Expense as mongoose.Model<ExpenseModel>) ||
  mongoose.model<ExpenseModel>("Expense", schema);
