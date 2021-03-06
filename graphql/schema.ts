import { gql } from "apollo-server-micro";
import { getExpenses } from "./resolvers/getExpenses";
import { createExpense } from "./resolvers/createExpenses";
import { createExpenseMonth } from "./resolvers/createExpenseMonth";
import { getExpenseMonths } from "./resolvers/getExpenseMonths";
import { deleteExpense } from "./resolvers/deleteExpense";
import { deleteExpenseMonth } from "./resolvers/deleteExpenseMonth";

export const resolvers = {
  Query: {
    expenses: getExpenses,
    expenseMonths: getExpenseMonths,
  },
  Mutation: {
    createExpense,
    createExpenseMonth,
    deleteExpense,
    deleteExpenseMonth,
  },
};

export const typeDefs = gql`
  type ExpenseMonth {
    _id: String!
    year: Int!
    month: Int!
  }

  type Expense {
    _id: ID!
    title: String!
    amount: Float!
    payed: Boolean!
    expenseMonth: ExpenseMonth!
  }

  type Income {
    amount: Float!
  }

  type Query {
    expenses: [Expense]!
    expenseMonths: [ExpenseMonth]!
  }

  type Mutation {
    createExpense(title: String!, amount: Float!, expenseMonthId: ID!): Expense!
    createExpenseMonth(month: Int!, year: Int!): ExpenseMonth!
    deleteExpense(expenseId: ID!): Expense!
    deleteExpenseMonth(expenseMonthId: ID!): ExpenseMonth!
  }
`;
