import React, { ReactElement, useState } from "react";
import { useSession, signOut } from "next-auth/client";

export default function Header(): ReactElement {
  const [session] = useSession();

  const [signOutButtonVisible, setSignOutButtonVisible] = useState(false);

  return (
    <header className="border-b">
      <div className="py-4 flex items-center justify-between container mx-auto px-4">
        <img src="/img/logo.svg" alt="Logo" />
        {session && (
          <div className="relative">
            <img
              src={
                session?.user?.image ||
                "https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif"
              }
              alt="User avatar"
              className="h-8 rounded-full shadow"
              onClick={() =>
                setSignOutButtonVisible((previousState) => !previousState)
              }
            />

            {signOutButtonVisible && (
              <button
                className="rounded shadow p-2 hover:bg-gray-100 mt-2 absolute bg-white right-0 text-sm w-20"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
