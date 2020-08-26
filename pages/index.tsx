import React from "react";
import Layout from "../components/common/Layout";
import { ChevronDownOutline, PlusOutline } from "heroicons-react";
import Stats from "../components/Stats";
import ExpenseTable from "../components/ExpenseTable";

export default function Home() {
  return (
    <Layout>
      <div className="w-full flex justify-between items-center mb-6">
        <div className="inline relative">
          <select className="h-10 shadow rounded appearance-none hover:border-gray-700 cursor-pointer text-gray-600 pl-4 pr-6">
            <option value="Test">January 2020</option>
            <option value="Test">Febuary 2020</option>
            <option value="Test">March 2020</option>
          </select>
          <ChevronDownOutline className="absolute w-4 text-gray-700 right-0 inset-y-0 my-auto mr-2" />
        </div>
        <button className="button">New month</button>
      </div>
      <h2 className="font-bold mb-2 text-gray-500">Monthly overview</h2>
      <Stats className="mb-6" />
      <h2 className="font-bold mb-2 text-gray-500">Expenses</h2>
      <ExpenseTable />
    </Layout>
  );
}
