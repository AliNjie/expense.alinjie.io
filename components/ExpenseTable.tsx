import React, { ReactElement } from "react";
import { PencilOutline } from "heroicons-react";

interface Props {}

export default function ExpenseTable({}: Props): ReactElement {
  return (
    <div>
      <button className="button mb-4 bg-teal-500 text-white">
        New expense
      </button>
      <table className="w-full bg-white rounded border-separate p-4">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td>
              <span className="font-bold">Mortage</span>
              <span className="block text-gray-500">Fixed</span>
            </td>
            <td>12.490 NOK</td>
            <td>
              <div className="text-green-400 bg-green-200 text-center rounded-full">
                Payed
              </div>
            </td>
            <td>
              <PencilOutline />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
