import React from "react";
import Header from "./Header";
import { ReactNode } from "react";
import Head from "next/head";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="text-sm h-full font-rubik">
      <Head>
        <title>Expense Tracker</title>
        <meta
          name="description"
          content="Personal expense tracker to track monthly expenses and savings"
        />
      </Head>
      <Header />
      <main className="text-gray-700 max-w-screen-lg mx-auto px-4">
        {children}
      </main>
    </div>
  );
}
