import { useQuery, gql } from "@apollo/client";
import moment from "moment";
import { ChevronDownOutline } from "heroicons-react";

const EXPENSE_MONTHS = gql`
  query {
    expenseMonths {
      _id
      month
      year
    }
  }
`;

type QueryResult = {
  expenseMonths: {
    _id: string;
    month: number;
    year: number;
  }[];
};

export default function Header() {
  const expenseMonthQuery = useQuery<QueryResult>(EXPENSE_MONTHS);

  if (expenseMonthQuery.error) {
    throw new Error(expenseMonthQuery.error.message);
  }

  return (
    <div className="w-full py-6 px-4">
      <header className="max-w-screen-lg mx-auto flex justify-between items-center">
        <img src="/img/logo.svg" className="h-full" />
        {expenseMonthQuery.loading ? (
          <span>Loading...</span>
        ) : expenseMonthQuery.data.expenseMonths.length > 0 ? (
          <div className="relative">
            <select className="text-gray-600 appearance-none pr-6">
              {expenseMonthQuery.data.expenseMonths.map((expenseMonth) => (
                <option key={expenseMonth._id}>
                  {moment()
                    .month(expenseMonth.month)
                    .year(expenseMonth.year)
                    .format("MMMM YYYY")}
                </option>
              ))}
            </select>
            <ChevronDownOutline className="absolute right-0 top-0 bottom-0 my-auto w-4 transform -translate-x-2 text-gray-600" />
          </div>
        ) : (
          <span>No months</span>
        )}
        <button className="button text-primary bg-white">New month</button>
      </header>
    </div>
  );
}
