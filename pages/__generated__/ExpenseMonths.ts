/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ExpenseMonths
// ====================================================

export interface ExpenseMonths_expenseMonths {
  __typename: "ExpenseMonth";
  _id: string;
  month: number;
  year: number;
}

export interface ExpenseMonths {
  expenseMonths: (ExpenseMonths_expenseMonths | null)[];
}
