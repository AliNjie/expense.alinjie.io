import React, { useMemo } from "react";
import Layout from "../components/common/Layout";
import Stats from "components/Stats";
import { useQuery, gql } from "@apollo/client";
import { ExpenseCategory } from "types";
import { calculateStats } from "utils/calculateState";
import ExpenseTable from "components/ExpenseTable";
import Modal from "components/common/Modal";
import ExpenseModal from "components/ExpenseModal";

const EXPENSES = gql`
  query {
    expenses {
      title
      amount
      category
      payed
      expenseMonth {
        income
      }
    }
  }
`;

type QueryResult = {
  expenses: {
    title: string;
    amount: number;
    category: ExpenseCategory;
    payed: boolean;
    expenseMonth: {
      income: number;
    };
  }[];
};

export default function Home() {
  const { data, error, loading } = useQuery<QueryResult>(EXPENSES);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <Layout>
      {data.expenses.length === 0 ? (
        <p>There are no expenses to show</p>
      ) : (
        <React.Fragment>
          <div className="bg-gray-100">
            <Stats
              stats={calculateStats(
                data.expenses,
                data.expenses[0]?.expenseMonth.income ?? 0
              )}
            />
          </div>
          <button className="button bg-primary text-white my-4">
            New expense
          </button>
          <ExpenseTable
            data={data.expenses.map(({ amount, category, title, payed }) => ({
              amount,
              category,
              title,
              payed,
            }))}
          />
          <ExpenseModal />
        </React.Fragment>
      )}
    </Layout>
  );
}
