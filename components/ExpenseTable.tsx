import React, { ReactElement } from "react";
import { ExpenseCategory } from "types";
import classNames from "classnames";

type TableData = {
  title: string;
  category: ExpenseCategory;
  amount: number;
  payed: boolean;
};

interface Props {
  data: TableData[];
}

export default function ExpenseTable({ data }: Props): ReactElement {
  return (
    <table className="w-full grid gap-y-2">
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className="bg-gray-100 rounded p-3 flex justify-between items-center"
          >
            <td className="flex flex-col">
              <span className="font-bold">{item.title}</span>
              <span className="text-gray-500">{item.category}</span>
            </td>
            <td
              className={classNames({
                "text-green-400": item.category === ExpenseCategory.SAVINGS,
                "text-red-400": item.category !== ExpenseCategory.SAVINGS,
              })}
            >
              {item.category === ExpenseCategory.SAVINGS ? "+" : "-"}
              {item.amount} NOK
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
