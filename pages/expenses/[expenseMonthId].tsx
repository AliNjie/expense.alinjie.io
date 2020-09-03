import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout";
import { ChevronLeftOutline } from "heroicons-react";
import StatCard from "components/common/StatCard";

export default function Expenses(): ReactElement {
  const router = useRouter();
  const { expenseMonthId } = router.query;
  return (
    <Layout>
      <button className="flex items-center mb-4">
        <ChevronLeftOutline className="inline h-4" />
        Month selection
      </button>
      <h1 className="font-bold">Monthly overview</h1>
      <p>{expenseMonthId}</p>

      <StatCard className="mt-4" label="Ali" value="Njie" />
    </Layout>
  );
}
