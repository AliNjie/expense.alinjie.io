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
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (isProtected && !loading && !session) {
      router.push("/");
    }
  }, [session, loading, isProtected]);

  return (
    <div className="flex flex-col h-full">
      <Header />
      <main
        className={classNames("container p-3 mx-auto flex-1", className)}
        {...props}
      >
        {children}
      </main>
    </div>
  );
}
