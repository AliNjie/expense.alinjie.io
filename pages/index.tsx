import React from "react";
import Layout from "components/Layout";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (session && typeof window !== "undefined") {
    router.push("/month-selection");
  }

  return (
    <Layout className="flex flex-col items-center justify-center text-center">
      <h1 className="font-extrabold text-4xl">Expense manager</h1>
      <p>Manage and track personal expenses and savings. With ease.</p>
      <button
        className="button my-4 flex items-center"
        onClick={() => signIn("github")}
      >
        <img src="/img/github-logo.svg" className="h-6 inline mr-2" />
        {loading ? "Signing in..." : "Sign in with Github"}
      </button>
    </Layout>
  );
}
