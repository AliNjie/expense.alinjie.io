import React from "react";
import Header from "./Header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="text-sm bg-gray-100 h-full">
      <Header />
      <main className="text-gray-700 max-w-screen-lg mx-auto py-6 px-4">
        {children}
      </main>
    </div>
  );
}
