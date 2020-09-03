import React, { ReactElement, useState } from "react";
import Layout from "components/Layout";
import Select from "components/common/Select";
import { CalendarOutline } from "heroicons-react";
import { gql, useQuery } from "@apollo/client";
import { ExpenseMonths } from "./__generated__/ExpenseMonths";
import moment from "moment";
import { dateFormat } from "consts";

const EXPENSE_MONTHS = gql`
  query ExpenseMonths {
    expenseMonths {
      _id
      month
      year
    }
  }
`;

export default function MonthSelection(): ReactElement {
  const [selectedMonth, setSelectedMonth] = useState<string>(null);

  const { data, error, loading } = useQuery<ExpenseMonths>(EXPENSE_MONTHS);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const expenseMonthOptions = data.expenseMonths.map((expenseMonth) => ({
    label: moment()
      .month(expenseMonth.month)
      .year(expenseMonth.year)
      .format("MMMM YYYY"),
    value: expenseMonth._id,
  }));

  return (
    <Layout className="flex flex-col justify-center items-center text-center">
      <h1 className="font-extrabold text-4xl">Expense months</h1>
      <p>Select an expense month from the dropdown below.</p>
      {expenseMonthOptions.length === 0 ? (
        <p>No expense months exists. Click below to create one.</p>
      ) : (
        <Select
          options={expenseMonthOptions}
          className="mt-4"
          onChange={(event) => setSelectedMonth(event.target.value)}
          leftIcon={CalendarOutline}
          value={selectedMonth}
        />
      )}
      <div className="flex mt-4">
        {expenseMonthOptions.length >= 1 && (
          <button
            disabled={!selectedMonth}
            className="button mr-2 bg-gray-900 text-white"
          >
            Select month
          </button>
        )}
        <button disabled={!selectedMonth} className="button ml-2">
          Create month
        </button>
      </div>
    </Layout>
  );
}
