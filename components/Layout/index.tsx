import React, { ReactElement, ReactNode, useEffect } from "react";
import classNames from "classnames";
import Header from "components/Header";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

interface Props {
  children?: ReactNode;
  className?: string;
  isProtected?: boolean;
}

export default function Layout({
  className,
  children,
  isProtected = true,
  ...props
}: Props): ReactElement {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (isProtected && !session) {
      router.push("/");
    }
  }, [session, isProtected]);

  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className={classNames("p-4 flex-1", className)} {...props}>
        {children}
      </main>
    </div>
  );
}
